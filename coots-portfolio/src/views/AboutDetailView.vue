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
let stage = undefined;
let render = undefined;
let engineArray = []; // to pass all the bodies to MatterJS
/* MatterJS Bodies */
let ceiling = undefined;
let ground = undefined;
let wallLeft = undefined;
let wallRight = undefined;
let boxes = [];
let mouseConstraint = undefined;
let headshotOutline = undefined;

/* 
Todo: use Matter.svg to load the /public/img/headshot outline 
*/

function skillFallSetup() {
  engine = Engine.create();
  engine.gravity.y = 0.15;
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
  ceiling = Bodies.rectangle(stage.width / 2, -40, (stage.width), 80, { isStatic: true });
  ground = Bodies.rectangle(stage.width / 2, (stage.height+20), (stage.width), 40, { isStatic: true });
  console.log(ground);
  wallLeft = Bodies.rectangle(-10, 0, 20, stage.height * 2, { isStatic: true });
  wallRight = Bodies.rectangle((stage.width+10), 0, 20, stage.height * 2, { isStatic: true });
  headshotOutline = Bodies.fromVertices((stage.width / 2),(stage.height/2)+(645/2)+82,
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
  // Render.run(render); // Note this line is only for testing
  // Run the runner
  const runner = Runner.create();
  Runner.run(runner, engine);

  // Render loop
  (function rerender() {
      boxes.forEach((box) => {
          box.render();
      });  
      Matter.Engine.update(engine);
      requestAnimationFrame(rerender);
  })();
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
  /* Note: there are issues here when the page is resized; need to resolve but it's 2:30am on a Sunday and I'm tired */
  Body.setPosition(ground, {x: (stage.width / 2), y: (stage.height+20)});
  Body.set(ceiling,"width", (stage.width));
  Body.set(ground,"width", (stage.width));
  Body.set(wallLeft,"height", (stage.height * 2));
  Body.set(wallRight,"position", {x:(stage.width+10),y:0});
  Body.set(wallRight,"height", (stage.height * 2));
  Body.setPosition(headshotOutline,{x:(stage.width / 2),y:(stage.height)-(645/2)+82});
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
  skill.y = 0;
  skill.body = Bodies.rectangle(skill.x, skill.y, skill.w, skill.h);
  skill.render = function () {
      const x = this.body.position.x;
      const y = this.body.position.y;
      this.element.style.position = "absolute"; // Ensure positioning works
      this.element.style.top = `${y - this.h / 2}px`;
      this.element.style.left = `${x - this.w / 2}px`;
      this.element.style.transform = `rotate(${this.body.angle}rad)`;
  };
  return skill;
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
    <router-link to="/">Close</router-link>
  </div>
</template>

<style scoped lang="scss">
div.about {
  background:$black;
  color:$white;
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
}
div.bio {
  width:60rem;
  padding:5rem;
  position:absolute;
  left:0;
  top:0;
  width:40%;
}
div.skills {
  width:60%;
  height:100vh;
  position:absolute;
  left:40%;
  user-select: none;
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
  }
  overflow:hidden;
}
</style>