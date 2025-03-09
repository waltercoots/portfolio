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
    }
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize);
    clearSkillFall();
  },
  updated() {
    this.handleResize();
  }
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
let boxes = [];
let mouseConstraint = undefined;
let headshotOutline = undefined;
let animationFrameId; // Store the animation frame ID

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
      const engineBox = connectBox(boxElem);
      boxes.push(engineBox);
      engineArray.push(engineBox.body);
  });
  engineArray.push(ceiling,ground,wallLeft,wallRight,headshotOutline,mouseConstraint);
}

function connectBox(elem) {
  const skill = {};
  skill.element = elem;
  skill.clientRect = skill.element.getBoundingClientRect();
  skill.w = skill.clientRect.width;
  skill.h = skill.clientRect.height;
  skill.x = Math.random() * (stage.width - skill.w);
  skill.y = 40;
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
  Body.setPosition(ceiling, {x: (stage.width / 2), y: 0-(outerPadding*.5)});
  Body.setPosition(wallRight,{x:(stage.width+(outerPadding*.5)), y:stage.height/2});
  Body.setPosition(wallLeft,{x:-(outerPadding*.5), y:stage.height/2});

  let headshotImage = document.querySelector(".headshot");
  let headshotWidth = headshotImage.getBoundingClientRect().width;
  let headshotHeight = headshotImage.getBoundingClientRect().height;
  if(headshotHeight == 0) {
    if(stage.width <= 1024) {
      headshotHeight = 375;
    }
    else {
      headshotHeight = 653;
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
      <p>My name’s Walter Coots, and I’m a (digital product | web | UX / UI | brand) designer in Austin, Texas. I’ve worked across a variety of industries including travel, healthcare, restaurants, entertainment, non-profits, news media, enterprise HR SaaS, energy, and finance.</p>
      <p>My philosophy is that good design affords clarity and establishes trust with users and customers. It helps build lasting relationships and familiarity, and helps a company’s product and brand stay memorable and relevant. When it’s at its best, it also brightens people’s lives.</p> 
      <p>Coworkers tell me I’m a positive and enthusiastic person who’s excellent at making complex ideas easier to understand. My grasp on frontend web coding affords me a higher than average understanding and empathy for engineers.  My management style leans servant leader, so I like to work alongside rather than over when it’s appropriate. Finally, I have an entrepreneurial streak that I can’t seem to turn off, and consequently a backlog of ideas I hope to someday be able to test the waters with.</p>
      <p>I’m a husband, parent, and home owner with a dog, all which keep me busy. I have tons of interests and hobbies: art, music, gardening, video /board / computer games, food and cooking, movies and television, animals, bicycling, home automation, and cocktails.</p>
    </div>
    <div ref="scene" class="skills">
      <img src="img/headshot-placeholder.png" alt="What Walter looks like" class="headshot" />
      <ul>
        <li>Digital Product Design</li>
        <li>Graphic Design</li>
        <li>Webflow</li>
        <li>Data Visualization</li>
        <li>Animate</li>
        <li>User Interface</li>
        <li>Miro</li>
        <li>Layout</li>
        <li>Roadmapping</li>
        <li>Agile Methodologies</li>
        <li>Responsive Web Design</li>
        <li>InVision</li>
        <li>Prototyping</li>
        <li>User Research</li>
        <li>Workshops</li>
        <li>Adobe Creative Suite</li>
        <li>Figma</li>
        <li>User-Centered Design</li>
        <li>User Experience</li>
        <li>Photoshop</li>
        <li>Framer</li>
        <li>JavaScript</li>
        <li>Information Architecture</li>
        <li>InDesign</li>
        <li>Illustrator</li>
        <li>After Effects</li>
        <li>Visual Design</li>
        <li>Wireframing</li>
        <li>Problem Solving</li>
        <li>Color</li>
        <li>Typography</li>
        <li>Design Thinking</li>
        <li>Mentorship</li>
        <li>Sketch</li>
        <li>Usability Testing</li>
        <li>Motion Graphics</li>
        <li>Simplification</li>
        <li>Mobile Web Design</li>
        <li>Blender</li>
        <li>HTML & CSS</li>
        <li>Design Systems</li>
        <li>Frontend Coding</li>
      </ul>
    </div>
    <router-link to="/" class="close-btn">
      <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.42362 2L18 16M17.5764 2L2 16" />
      </svg>      
    </router-link>
  </div>
</template>

<style scoped lang="scss">
div.about {
  background:$black;
  color:$white;
  display:flex;
  justify-content: center;
	z-index:3;
	@include xs {
    flex-direction: column-reverse;
    overflow-x:auto;
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
    p { 
      max-width:30rem;
      margin-bottom:0.5rem; 
    }
	}
	@include md {
    @include modular-scale(-2); // Font size
    padding:2rem;
    p {
      max-width:30rem;
      margin-bottom:0.5rem; 
    }
	}
	@include lg {
    @include modular-scale(-2); // Font size
    padding:2rem;
    p {
      max-width:35rem;
      margin-bottom:0.5rem; 
    }
	}
	@include xl {
    @include modular-scale(0); // Font size
    padding:4rem;
    p { 
      max-width:50rem; 
      margin-bottom:1rem; 
    }
	}
}
.close-btn {
  z-index: 12;
  top: 1rem;
  right:1rem;
  position:fixed;
  svg path {
    stroke:$white;
    stroke-width: 3;
    stroke-linecap: round;
  }
  @media (hover:hover) {
    &:hover {
      svg path {
        stroke:$accent;
      }
    }
  }
  &:focus {
    svg path {
      stroke:$accent;
    }
  }

}
div.skills {
	@include xs {
    background:darken($black,3%);
    flex:2 0 500px;
    @include modular-scale(-5); // Font size
	}
	@include sm {
    background:darken($black,3%);
    flex:2 0 400px;
    @include modular-scale(-4); // Font size
	}
	@include md {
    background:$black;
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
      color:$accent;
      background:none;
    }    
  }
  img.headshot {
    position:absolute;
    bottom:0;
    left:50%;
    transform:translate(-50%,0);
    mix-blend-mode: color-dodge;
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