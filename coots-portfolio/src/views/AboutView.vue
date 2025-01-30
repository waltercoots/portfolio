<script>
import Matter from 'matter-js';
//import p5 from 'p5';

export default {
  name: "AboutView",
  mounted() {
    const matterContainer = this.$refs.scene;
    const thickness = 60;

    // module aliases
    var Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite;

    // create an engine
    var engine = Engine.create();

    // create a renderer
    var render = Render.create({
      element: matterContainer,
      engine: engine,
      options: {
        width: matterContainer.clientWidth,
        height: matterContainer.clientHeight,
        background: "transparent",
        wireframes: false,
        showAngleIndicator: false
      }
    });

    // create two boxes and a ground
    // var boxA = Bodies.rectangle(400, 200, 80, 80);
    // var boxB = Bodies.rectangle(450, 50, 80, 80);

    for (let i = 0; i < 100; i++) {
      let circle = Bodies.circle(i, 5, 10, {
        friction: 0.3,
        frictionAir: 0.00001,
        restitution: 0.8
      });
      Composite.add(engine.world, circle);
    }

    var ground = Bodies.rectangle(
      matterContainer.clientWidth / 2,
      matterContainer.clientHeight + thickness / 2,
      27184,
      thickness,
      { isStatic: true }
    );

    let leftWall = Bodies.rectangle(
      0 - thickness / 2,
      matterContainer.clientHeight / 2,
      thickness,
      matterContainer.clientHeight * 5,
      {
        isStatic: true
      }
    );

    let rightWall = Bodies.rectangle(
      matterContainer.clientWidth + thickness / 2,
      matterContainer.clientHeight / 2,
      thickness,
      matterContainer.clientHeight * 5,
      { isStatic: true }
    );

    // add all of the bodies to the world
    Composite.add(engine.world, [ground, leftWall, rightWall]);

    let mouse = Matter.Mouse.create(render.canvas);
    let mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });

    Composite.add(engine.world, mouseConstraint);

    // allow scroll through the canvas
    mouseConstraint.mouse.element.removeEventListener(
      "mousewheel",
      mouseConstraint.mouse.mousewheel
    );
    mouseConstraint.mouse.element.removeEventListener(
      "DOMMouseScroll",
      mouseConstraint.mouse.mousewheel
    );

    Render.run(render);
    var runner = Runner.create();
    Runner.run(runner, engine);

    function handleResize(matterContainer) {
      // set canvas size to new values
      render.canvas.width = matterContainer.clientWidth;
      render.canvas.height = matterContainer.clientHeight;

      // reposition ground
      Matter.Body.setPosition(
        ground,
        Matter.Vector.create(
          matterContainer.clientWidth / 2,
          matterContainer.clientHeight + thickness / 2
        )
      );

      // reposition right wall
      Matter.Body.setPosition(
        rightWall,
        Matter.Vector.create(
          matterContainer.clientWidth + thickness / 2,
          matterContainer.clientHeight / 2
        )
      );
    }

    window.addEventListener("resize", () => handleResize(matterContainer));
  },
};
</script>

<template>
  <div class="about">
    <div class="bio">
      <h1>Walter Coots</h1>
      <p>My name’s Walter Coots, and I’m a (digital product | web | UX / UI | brand) designer in Austin, Texas. I’ve worked across a variety of industries including travel, healthcare, restaurants, entertainment, non-profits, news media, enterprise HR SaaS, energy, and finance.</p>
      <p>My philosophy is that good design affords clarity and establishes trust with users and customers. It helps build lasting relationships and familiarity, and helps a company’s product and brand stay memorable and relevant. When it’s at its best, it also brightens people’s lives.</p> 
      <p>Coworkers tell me I’m a positive and enthusiastic person who’s excellent at making complex ideas easier to understand. My grasp on frontend web coding affords me a higher than average understanding and empathy for engineers.  My management style leans servant leader, so I like to work alongside rather than over when it’s appropriate. Finally, I have an entrepreneurial streak that I can’t seem to turn off, and consequently a backlog of ideas I hope to someday be able to test the waters with.</p>
      <p>I’m a husband, parent, and home owner with a dog, all which keep me busy. I have tons of interests and hobbies: art, music, gardening, video /board / computer games, food and cooking, movies and television, animals, bicycling, home automation, and cocktails.</p>
    </div>
    <div ref="scene" class="scene"></div>
    <router-link to="/">Close</router-link>
  </div>
</template>

<style scoped>
div.about {
  display:flex;
  flex-grow: 1;
}
.scene {
  margin: 20px auto;
  flex-grow: 1;
  min-width:40rem;
}
</style>