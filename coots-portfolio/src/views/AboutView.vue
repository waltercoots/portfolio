<script>
import Matter from "matter-js";
import decomp from "poly-decomp";
export default {
  name: "AboutView",
  mounted() {
    skillFallSetup();
    window.addEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      updateStageDimensions();
      updateBodyDimensions();
    },
    updatePaginationLinks(elem) {
      document.querySelectorAll("a.pagination").forEach((loopElem) => {
        loopElem.classList.remove('selected');
      });
      elem.target.classList.add('selected');
    },
    closeAbout() {
      const referrer = document.referrer;
      console.log(document);
      console.log(referrer);
      const fromSameOrigin = referrer.includes(window.location.origin);

      if (fromSameOrigin) {
        this.$router.go(-1);
      } else {
        this.$router.push('/');
      }
    }
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize);
    clearSkillFall();
    clearInterval(boxInterval);
  },
  updated() {
    this.handleResize();
  },
}

/* MatterJS Shortcuts */
const Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Body = Matter.Body,
    Composite = Matter.Composite,
    MouseConstraint = Matter.MouseConstraint;
/* MatterJS Placeholders */
let engine = undefined;
let runner = undefined;
let stage = undefined;
let render = undefined;
let engineArray = []; // to pass all the bodies to MatterJS
/* MatterJS Bodies */
let outerPadding = 200; // thickness of walls to prevent words from slipping out
let ceiling = undefined;
let ground = undefined;
let wallLeft = undefined;
let wallRight = undefined;
let boxesToAdd = [];
let boxes = [];
let mouseConstraint = undefined;
let headshotOutline = undefined;
let animationFrameId; // Store the animation frame ID
let boxInterval; // for adding boxes piecemeal


function skillFallSetup() {
  engine = Engine.create();
  engine.gravity.scale = 0.0001;
  stage = document.querySelector(".skills");
  render = Render.create({
    element: stage,
    engine: engine,
    options: {
        wireframes: true,
        background: "transparent",
  }});
  mouseConstraint = MouseConstraint.create(engine, {
    element: stage,
  });
  Matter.Common.setDecomp(decomp);
  updateStageDimensions();
  ceiling = Bodies.rectangle(0, 0, 0, 0, { isStatic: true });
  ground = Bodies.rectangle(0, 0, 0, 0, { isStatic: true });
  wallLeft = Bodies.rectangle(0, 0, 0, 0, { isStatic: true });
  wallRight = Bodies.rectangle(0, 0, 0, 0, { isStatic: true });
  headshotOutline = Bodies.fromVertices(0,0,
	[
  { x: 77, y: 641 },
  { x: 77, y: 581 },
  { x: 52, y: 573 },
  { x: 22, y: 549 },
  { x: 69, y: 287 },
  { x: 183, y: 249 },
  { x: 151, y: 110 },
  { x: 217, y: 32 },
  { x: 303, y: 58 },
  { x: 315, y: 147 },
  { x: 295, y: 241 },
  { x: 405, y: 298 },
  { x: 455, y: 455 },
  { x: 432, y: 595 },
  { x: 376, y: 607 },
  { x: 380, y: 637 },
],{ isStatic:true},true, 0.01, 20, 0.01);
  engineArray.push(ceiling,ground,wallLeft,wallRight,headshotOutline,mouseConstraint);
  updateBodyDimensions();
  populateSkills();

  // Add all of the bodies to the world
  Composite.add(engine.world, engineArray);

  // Run the renderer
  // Render.run(render); // Enable this line for troubleshooting
  // Run the runner
  runner = Runner.create();
  Runner.run(runner, engine);

  // Render loop
  (function rerender() {
      boxes.forEach((box) => {
          box.render();
      });  
      Matter.Engine.update(engine);
      animationFrameId = requestAnimationFrame(rerender);
  })();
}
function populateSkills() {
  // Select all target elements and create boxes
  document.querySelectorAll(".skills li").forEach((boxElem) => {
      boxElem.style.opacity = 0;
      boxesToAdd.push(boxElem);
  });
  boxInterval = setInterval(addASkill, 650);
}

function addASkill() {
  const boxElem = boxesToAdd.shift();
  const engineBox = connectBox(boxElem);
  Composite.add(engine.world, engineBox.body);
  boxes.push(engineBox);
  if(boxesToAdd.length == 0)
  {
    clearInterval(boxInterval);
  }
}

function connectBox(elem) {
  const skill = {};
  skill.element = elem;
  skill.clientRect = skill.element.getBoundingClientRect();
  skill.w = skill.clientRect.width;
  skill.h = skill.clientRect.height;
  skill.x = (Math.random() * (stage.width - skill.w)) + (skill.w / 2);
  skill.y = 0;
  skill.element.style.opacity = 1;
  skill.body = Bodies.rectangle(skill.x, skill.y, skill.w, skill.h);
  skill.render = function () {
      const x = this.body.position.x;
      const y = this.body.position.y;
      this.element.style.position = "absolute"; // Ensure positioning works
      this.element.style.top = `${y - this.h / 2}px`;
      this.element.style.left = `${x - this.w / 2}px`;
      this.element.style.transform = `rotate(${this.body.angle}rad)`;
  };
  skill.stop = function () {
    cancelAnimationFrame(animationFrameId);
  }
  return skill;
}

function updateStageDimensions() {
  stage.width = document.querySelector(".skills").getBoundingClientRect().width;
  stage.height = document.querySelector(".skills").getBoundingClientRect().height;
  stage.x = document.querySelector(".skills").getBoundingClientRect().x;
  stage.y = document.querySelector(".skills").getBoundingClientRect().y;
  render.options.width = stage.width;
  render.options.height = stage.height;
  render.canvas.width = stage.width;
  render.canvas.height = stage.height;
}

function updateBodyDimensions() {
  // Update the sizes of the walls, ceiling, ground
  changeSize(ceiling,stage.width,outerPadding);
  changeSize(ground,stage.width,outerPadding);
  changeSize(wallLeft,outerPadding,stage.height);
  changeSize(wallRight,outerPadding,stage.height);
  // Update the positions of those elements
  Body.setPosition(ground, {x: (stage.width / 2), y: (stage.height+(outerPadding*.5))});
  Body.setPosition(ceiling, {x: (stage.width / 2), y: 0-(outerPadding*.75)});
  Body.setPosition(wallRight,{x:(stage.width+(outerPadding*.5)), y:stage.height/2});
  Body.setPosition(wallLeft,{x:-(outerPadding*.5), y:stage.height/2});

  let headshotImage = document.querySelector(".headshot");
  let headshotWidth = headshotImage.getBoundingClientRect().width;
  let headshotHeight = headshotImage.getBoundingClientRect().height;
  if(headshotHeight == 0) {
    if(window.innerWidth <= 1024) {
      headshotHeight = 326.578125;
    }
    else {
      headshotHeight = 653.15625;
    }
  }
  let headshotOutlineWidth = headshotOutline.bounds.max.x - headshotOutline.bounds.min.x
  let headshotScale = headshotWidth / headshotOutlineWidth;
  Body.scale(headshotOutline,headshotScale,headshotScale);
  Body.setPosition(headshotOutline,{x:(stage.width / 2),y:(stage.height)-(headshotHeight/3)});
}

// Function to change the size of a MatterJS Body
function changeSize(body, newWidth, newHeight) {
    // Get current position
    const { x, y } = body.position;

    // Calculate half width and half height
    const halfWidth = newWidth / 2;
    const halfHeight = newHeight / 2;

    // Define new vertices
    const newVertices = [
        { x: x - halfWidth, y: y - halfHeight },
        { x: x + halfWidth, y: y - halfHeight },
        { x: x + halfWidth, y: y + halfHeight },
        { x: x - halfWidth, y: y + halfHeight }
    ];

    // Update the body's vertices
     Body.setVertices(body, newVertices);
}

function clearSkillFall() {
  boxes.forEach((box) => {
    box.stop();
  });
  
  Composite.clear(engine.world, false);  
  Engine.clear(engine);
  Render.stop(render);
  Runner.stop(runner);
  Render.canvas = null;
  Render.context = null;
  Render.textures = {};
  // Clear all the original values
  engine = undefined;
  runner = undefined;
  stage = undefined;
  render = undefined;
  engineArray = [];
  ceiling = undefined;
  ground = undefined;
  wallLeft = undefined;
  wallRight = undefined;
  boxes = [];
  mouseConstraint = undefined;
  headshotOutline = undefined;
}
</script>


<template>
  <div class="about">
    <div class="bio">
      <p>My name’s Walter Coots, and I’m a product and web design lead in Austin, Texas. I’m a husband, parent, and homeowner with a dog, all which keep me busy. I have tons of interests and hobbies: art, music, gardening, video / board / computer games, food and cooking, movies and television, bicycling, home automation, animals, and cocktails.</p>
      <p>I’ve worked across a variety of industries including travel, healthcare, restaurants, entertainment, non-profits, news media, commercial real estate, enterprise HR SaaS, energy, and finance.</p>
      <p>Coworkers tell me I’m a positive and enthusiastic person who’s excellent at making complex ideas easier to understand. My grasp on frontend web coding affords me a higher than average understanding and empathy for engineers, and I'm able to maintain composure in tense and trying times.</p>
      <p class="clients">Select past clients</p>
      <ul class="clients">
        <li>Austin Film Society</li>
        <li>Denny’s</li>
        <li>GoodPop</li>
        <li>Halliburton</li>
        <li>Hallmark</li>
        <li>Southwest Airlines</li>
        <li>SXSW</li>
        <li>Viking Cruises</li>
      </ul>
      <div class="reviews">
        <blockquote cite="Rachel Bates, WorkStep CRO" id="q1">
          I'm not exaggerating when I share that your video on Fast Track was the most detailed and best explanation of a HIRE feature since I have been at WorkStep. Your pre-work, video and way you broke it down was really valuable. Thank you!        
        </blockquote>
        <blockquote cite="Tommi Forsström, WorkStep CPO" id="q2">
          I'm VERY impressed. I still have to keep reminding myself that you've got about 6 weeks of active service tenure here. With one of the most disruptive life events in the middle of it. You've brought in a newfound sense of energy and curiosity sorely lacking from the team.
        </blockquote>
        <blockquote cite="Dan Johnston, WorkStep CEO" id="q3">
          Walter runs some of the most engaging and high-value design reviews I've ever been a part of. Thoughtful agendas, blend of strategic and detail-level topics, absolutely O sacred cows. It's a unique thing that basically no other roles do where you bring your work in front of other teams who don't do that job and proactively ask for as much feedback as possible. Walter nails it. 
        </blockquote>
        <blockquote cite="Marina Harper, T3 Account Director" id="q4">
          thank you so much for everything, you have always been such a calm, steady and overall amazing influence for this team, i could not have weathered the ups and downs without you. i am really grateful that i was able to work with you. thank you for always making it fun and easy.
        </blockquote>
        <blockquote cite="Cary Brizendine, Insitome Senior Product Manager" id="q5">
          If I could fit Walter in my pocket and take him with me to work on future products, I would! [...] Walter has an admired ability to bring order to the chaos, finely balancing the delicate relationship between user needs and the stakeholder's business and marketing needs. Plus, he's fun to work with.
        </blockquote>
      </div>
      <div class="pagination">
        <a href="#q1" class="pagination selected" @click="this.updatePaginationLinks">1</a>
        <a href="#q2" class="pagination" @click="this.updatePaginationLinks">2</a>
        <a href="#q3" class="pagination" @click="this.updatePaginationLinks">3</a>
        <a href="#q4" class="pagination" @click="this.updatePaginationLinks">4</a>
        <a href="#q5" class="pagination" @click="this.updatePaginationLinks">5</a>
      </div>
    </div>
    <div ref="scene" class="skills">
      <img src="img/headshot-placeholder.png" alt="What Walter looks like" class="headshot" />
      <ul>
        <li class="level-3">Digital Product Design</li>
        <li>Graphic Design</li>
        <li>Webflow</li>
        <li>Data Visualization</li>
        <li>Animate</li>
        <li class="level-3">User Interface</li>
        <li>Miro</li>
        <li>Layout</li>
        <li>Roadmapping</li>
        <li>Agile Methodologies</li>
        <li class="level-3">Responsive Web Design</li>
        <li>InVision</li>
        <li>Prototyping</li>
        <li>User Research</li>
        <li>Workshops</li>
        <li>Adobe Creative Suite</li>
        <li class="level-3">Figma</li>
        <li>User-Centered Design</li>
        <li class="level-3">User Experience</li>
        <li>Photoshop</li>
        <li>Framer</li>
        <li>JavaScript</li>
        <li>Information Architecture</li>
        <li>InDesign</li>
        <li>Illustrator</li>
        <li>After Effects</li>
        <li>Visual Design</li>
        <li class="level-3">Wireframing</li>
        <li>Problem Solving</li>
        <li>Color</li>
        <li>Typography</li>
        <li>Design Thinking</li>
        <li>Mentorship</li>
        <li>Sketch</li>
        <li>Usability Testing</li>
        <li>Motion Graphics</li>
        <li>Simplification</li>
        <li class="level-3">Mobile Web Design</li>
        <li>Blender</li>
        <li>HTML & CSS</li>
        <li>Design Systems</li>
        <li>Frontend Coding</li>
      </ul>
    </div>
    <a @click="closeAbout" class="close-btn">
      <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.42362 2L18 16M17.5764 2L2 16" />
      </svg>      
    </a>
    </div>
</template>

<style scoped lang="scss">

*::-webkit-scrollbar-track {
  background: $accent;
  border-radius: 5px;
}
*::-webkit-scrollbar-thumb {
  background: $white;
  border-radius: 15px;
  border: 4px solid $accent;
}
div.pagination{
  padding-top:2rem;
  box-sizing:content-box;
  text-align:center;
  display:none; // for now
  a {
    text-indent:-999em;
    display:inline-block;
    background:lighten($accent,5%);
    height:1rem;
    width:1rem;
    margin:0 1rem 0 0;
    border-radius:1rem;
    &.selected {
      background:$white;
    }
  }
}
div.about {
  background:$accent;
  color:$white;
  display:flex;
  justify-content: center;
	z-index:3;
  a {
    color:$white;
    text-decoration:underline;
  }
  h1, h2, h3 {
    font-weight:400;
  }
  @include xs {
    @include modular-scale(-4); // Font size
  }
  @include sm {
    @include modular-scale(-4); // Font size
  }
  @include md {
    @include modular-scale(-4); // Font size
  }
  @include lg {
    @include modular-scale(-4); // Font size
  }
  @include xl {
    @include modular-scale(-2); // Font size
  }
	@include xs {
    flex-direction: column-reverse;
    overflow-x:hidden;
    overflow-y:auto;
    position:absolute;
    justify-content:start;
    top:0;
    left:0;
    width:100%;
    height:100%;
	}
	@include sm {
    flex-direction: column-reverse;
    overflow-x:auto;
    position:absolute;
    justify-content:start;
    top:0;
    left:0;
    width:100%;
    height:100%;
	}
	@include md {
    flex-direction: row;
    position:absolute;
    justify-content: center;
    top:0;
    left:0;
    width:100%;
    height:100%;
	}
	@include lg {
    flex-direction: row;
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
	}
	@include xl {
    flex-direction: row;
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
	}
}
div.bio {
  align-items: center;
  align-content: center;  
  p.clients {
    font-weight:600;
    margin-top:1rem;
    @include xs {
      @include modular-scale(-3); // Font size
    }
    @include xl {
      @include modular-scale(-1); // Font size
    }
  }
  ul.clients {
    margin-bottom:1rem;
    list-style: none;
    @include xs {
      @include modular-scale(-3); // Font size
    }
    @include sm {
      @include modular-scale(-3); // Font size
    }
    @include md {
      @include modular-scale(-3); // Font size
    }
    @include lg {
      @include modular-scale(-3); // Font size
    }
    @include xl {
      @include modular-scale(-1); // Font size
    }
    max-width:26em;
    li {
      background:#fff;
      color:$accent;
      display:inline-block;
      margin:0 0.5rem 0.5rem 0;
      padding:0.125em 0.5rem;
      border-radius: 0.25rem;
    }
  }
  div.reviews {
    max-width:100%;
    display:flex;
    display:none; // for now
    flex-direction:row;
    overflow-y:hidden;
    overflow-x:auto;
    scroll-snap-type:x mandatory;
    bottom:-2rem;
    scrollbar-width: none;
    blockquote {
      width:100%;
      min-width:100%;
      margin:0.5rem 0.625rem 1.5rem 0.625rem;
      padding:0 0 0 1.25rem;
      position:relative;
      scroll-snap-align: start;
      &:before {
        content:"“";
        position:absolute;
        line-height: 95%;
        left:0rem;
        top:-0.75rem;
        z-index:-1;
        color:lighten($accent,7%);
        font-family:Georgia, 'Times New Roman', Times, serif;
        @include xs {
          @include modular-scale(9); // Font size
        }
        @include sm {
          @include modular-scale(9); // Font size
        }
        @include md {
          @include modular-scale(9); // Font size
        }
        @include lg {
          @include modular-scale(9); // Font size
        }
        @include xl {
          @include modular-scale(9); // Font size
        }    
  
      }
      &[cite]::after {
        content:"– "attr(cite);
        display:block;
        margin:0.5rem 0 0 0.25rem;
        font-weight:500;
        @include xs {
          @include modular-scale(-4); // Font size
        }
        @include sm {
          @include modular-scale(-4); // Font size
        }
        @include md {
          @include modular-scale(-4); // Font size
        }
        @include lg {
          @include modular-scale(-4); // Font size
        }
        @include xl {
          @include modular-scale(-2); // Font size
        }    
      }
    }  
  }
	@include xs {
    @include modular-scale(-2); // Font size
    padding:1rem;
    p {
      margin-bottom:0.5rem;       
    }
	}
	@include sm {
    @include modular-scale(-2); // Font size
    padding:5rem;
    max-width:30rem;
    p, div.reviews { 
      margin-bottom:0.5rem; 
    }
	}
	@include md {
    @include modular-scale(-2); // Font size
    padding:2rem;
    max-width:30rem;
    p {
      margin-bottom:0.5rem; 
    }
	}
	@include lg {
    @include modular-scale(-2); // Font size
    padding:2rem;
    max-width:32rem;
    p {
      margin-bottom:0.5rem; 
    }
	}
	@include xl {
    @include modular-scale(0); // Font size
    padding:4rem;
    max-width:44rem; 
    p { 
      margin-bottom:1rem; 
    }
	}
}
.close-btn {
  z-index: 12;
  top: 2rem;
  right:3rem;
  position:fixed;
  svg path {
    stroke:$white;
    stroke-width: 3;
    stroke-linecap: round;
  }
  @media (hover:hover) {
    &:hover {
      svg path {
        stroke:$black;
      }
    }
  }
  &:focus {
    svg path {
      stroke:$black;
    }
  }

}
div.skills {
	@include xs {
    background:lighten($accent,3%);
    flex:2 0 500px;
    @include modular-scale(-5); // Font size
	}
	@include sm {
    background:lighten($accent,3%);
    flex:2 0 400px;
    @include modular-scale(-4); // Font size
	}
	@include md {
    background:$accent;
    flex:1 0 33vw;
    height:100%;
    position: sticky;
    top:0;
    @include modular-scale(-3); // Font size
	}
	@include lg {
    flex:2 0 50vw;
    height:100%;
    position: sticky;
    top:0;
    @include modular-scale(-2); // Font size
	}
	@include xl {
    flex:2 0 50vw;
    max-width:80rem;
    height:100%;
    position: sticky;
    top:0;
    @include modular-scale(-2); // Font size
	}

  user-select: none;
  position:relative;
  ul {
    list-style:none;
    position:relative;
    cursor: move;
    li {
      position:absolute;
      display:inline-block;
      white-space: nowrap;
      color:$white;
      background:none;
      &.level-3 {
        font-size:1.5em;
      }
    }    
  }
  img.headshot {
    position:absolute;
    bottom:0;
    left:50%;
    transform:translate(-50%,0);
    mix-blend-mode: hard-light;
    user-select:none;
    -webkit-user-drag: none;
    -moz-user-select: none;    

    @include xs {
      width:15rem;
    }
    @include sm {
      width:15rem;
    }
    @include md {
      width:15rem;
    }
    @include lg {
      width:30rem;
      flex:2 0 50vw;
    }
    @include xl {
      flex:2 0 50vw;
      max-width:80rem;
    }
  }
  overflow:hidden;
}
</style>