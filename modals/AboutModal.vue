<script>
import Lenis from 'lenis';
import Matter from "matter-js";
import decomp from "poly-decomp";
import { useVariant } from '@/composables/useVariant.js'
import { blockRegistry } from '@/blocks/index.js'
import { skills } from '@/content/skills.js'
import { blocks as aboutBlocks } from '@/content/about.js'

export default {
  name: "AboutView",
  setup() {
    const { variant } = useVariant()
    return { variant, aboutBlocks, blockRegistry }
  },
  data() {
    return {
      lenis: null,
      enteredFrom: false,
      currentQuoteIndex: 0,
      quoteDirection: 'next',
      quotes: [
        {
          text: "I'm not exaggerating when I share that your video on Fast Track was the most detailed and best explanation of a HIRE feature since I have been at WorkStep. Your pre-work, video and way you broke it down was really valuable. Thank you!",
          cite: "Rachel Bates, WorkStep CRO"
        },
        {
          text: "I'm VERY impressed. I still have to keep reminding myself that you've got about 6 weeks of active service tenure here. With one of the most disruptive life events in the middle of it. You've brought in a newfound sense of energy and curiosity sorely lacking from the team.",
          cite: "Tommi Forsström, WorkStep CPO"
        },
        {
          text: "Walter runs some of the most engaging and high-value design reviews I've ever been a part of. Thoughtful agendas, blend of strategic and detail-level topics, absolutely no sacred cows. It's a unique thing that basically no other roles do where you bring your work in front of other teams who don't do that job and proactively ask for as much feedback as possible. Walter nails it.",
          cite: "Dan Johnston, WorkStep CEO"
        },
        {
          text: "thank you so much for everything, you have always been such a calm, steady and overall amazing influence for this team, i could not have weathered the ups and downs without you. i am really grateful that i was able to work with you. thank you for always making it fun and easy.",
          cite: "Marina Harper, T3 Account Director"
        },
        {
          text: "If I could fit Walter in my pocket and take him with me to work on future products, I would! [...] Walter has an admired ability to bring order to the chaos, finely balancing the delicate relationship between user needs and the stakeholder's business and marketing needs. Plus, he's fun to work with.",
          cite: "Cary Brizendine, Insitome Senior Product Manager"
        }
      ]
    };
  },
  computed: {
    // Full replacement, not additive: when the active variant defines
    // skillEmphasis, promotion for this render is exactly promote + inject;
    // otherwise each tag's own `promoted` flag from skills.js applies.
    mergedSkills() {
      const emphasis = this.variant.skillEmphasis
      if (!emphasis) return skills
      const promotedIds = new Set(emphasis.promote ?? [])
      const base = skills.map(s => ({ ...s, promoted: promotedIds.has(s.id) }))
      const injected = (emphasis.inject ?? []).map(s => ({ ...s, promoted: true }))
      return [...base, ...injected]
    }
  },
  mounted() {
    skillFallSetup();
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('keydown', this.handleKeyDown);
    this.$nextTick(() => {
      this.lenis = new Lenis({
        wrapper: this.$el,
        autoRaf: true,
        allowNestedScroll: true
      });
    });
  },
  methods: {
    handleResize() {
      updateStageDimensions();
      updateBodyDimensions();
    },
    handleKeyDown(e) {
      if (e.key === 'Escape') {
        this.$router.push({ path: '/', hash: this.$route.hash });
      }
    },
    goToQuote(index, direction) {
      this.quoteDirection = direction ?? (index >= this.currentQuoteIndex ? 'next' : 'prev');
      this.currentQuoteIndex = index;
    },
    handleSwipeStart(e) {
      this._swipeStartX = e.touches[0].clientX;
      this._swipeStartY = e.touches[0].clientY;
      this._swipeIsHorizontal = null;
    },
    handleSwipeMove(e) {
      const dx = e.touches[0].clientX - this._swipeStartX;
      const dy = e.touches[0].clientY - this._swipeStartY;

      if (this._swipeIsHorizontal === null && (Math.abs(dx) > 5 || Math.abs(dy) > 5)) {
        this._swipeIsHorizontal = Math.abs(dx) > Math.abs(dy);
        if (this._swipeIsHorizontal) this.lenis?.stop();
      }

      if (!this._swipeIsHorizontal) return;

      e.preventDefault();
      const bq = this.$refs.reviews?.querySelector('blockquote');
      if (!bq) return;
      bq.style.transition = 'none';
      bq.style.transform = `translateX(${dx * 0.4}px)`;
    },
    handleSwipeEnd(e) {
      this.lenis?.start();

      if (!this._swipeIsHorizontal) return;

      const dx = e.changedTouches[0].clientX - this._swipeStartX;
      const bq = this.$refs.reviews?.querySelector('blockquote');

      if (!bq) return;

      if (Math.abs(dx) < 50) {
        // Spring back
        bq.style.transition = 'transform 0.35s ease';
        requestAnimationFrame(() => {
          bq.style.transform = 'translateX(0px)';
          bq.addEventListener('transitionend', () => {
            bq.style.transition = '';
            bq.style.transform = '';
          }, { once: true });
        });
        return;
      }

      // Clear inline styles before Vue's transition takes over
      bq.style.transform = '';
      bq.style.transition = '';

      const last = this.quotes.length - 1;
      if (dx < 0) {
        const next = this.currentQuoteIndex < last ? this.currentQuoteIndex + 1 : 0;
        this.goToQuote(next, 'next');
      } else {
        const prev = this.currentQuoteIndex > 0 ? this.currentQuoteIndex - 1 : last;
        this.goToQuote(prev, 'prev');
      }
    },
    closeAbout() {
      if (this.enteredFrom) {
        this.$router.go(-1);
      } else {
        this.$router.push({ path: '/', hash: this.$route.hash });
      }
    }
  },
  beforeRouteEnter(_to, from, next) {
    next(vm => {
      vm.enteredFrom = from.name ? true : false;
    });
  },
  beforeRouteLeave(_to, _from, next) {
    next();
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('keydown', this.handleKeyDown);
    if (this.lenis) {
      this.lenis.stop();
      this.lenis.destroy();
      this.lenis = null;
    }
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
let engineArray = [];
let outerPadding = 200;
let ceiling = undefined;
let ground = undefined;
let wallLeft = undefined;
let wallRight = undefined;
let boxesToAdd = [];
let boxes = [];
let mouseConstraint = undefined;
let headshotOutline = undefined;
let animationFrameId;
let boxInterval;

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
    }
  });
  mouseConstraint = MouseConstraint.create(engine, {
    element: stage,
  });
  // Remove MatterJS wheel capture so the modal scrolls normally
  mouseConstraint.mouse.element.removeEventListener('mousewheel', mouseConstraint.mouse.mousewheel);
  mouseConstraint.mouse.element.removeEventListener('DOMMouseScroll', mouseConstraint.mouse.mousewheel);

  // Prevent text selection during drag and on double-click
  stage.addEventListener('selectstart', (e) => e.preventDefault());
  stage.addEventListener('mousedown', (e) => { if (e.detail > 1) e.preventDefault(); });

  Matter.Common.setDecomp(decomp);
  updateStageDimensions();
  ceiling = Bodies.rectangle(0, 0, 0, 0, { isStatic: true });
  ground = Bodies.rectangle(0, 0, 0, 0, { isStatic: true });
  wallLeft = Bodies.rectangle(0, 0, 0, 0, { isStatic: true });
  wallRight = Bodies.rectangle(0, 0, 0, 0, { isStatic: true });
  // Polygon derived from headshot-outline.svg (284×499 coordinate space)
  headshotOutline = Bodies.fromVertices(0, 0,
    [
      { x: 0.5, y: 97.027 },
      { x: 54.5, y: 31.527 },
      { x: 97, y: 16.527 },
      { x: 151.5, y: 0.527 },
      { x: 194, y: 16.527 },
      { x: 236.5, y: 46.527 },
      { x: 263, y: 71.527 },
      { x: 283.5, y: 116.527 },
      { x: 283.5, y: 159.027 },
      { x: 269, y: 203.027 },
      { x: 269, y: 238.527 },
      { x: 269, y: 272.027 },
      { x: 251.5, y: 352.527 },
      { x: 243.5, y: 380.527 },
      { x: 243.5, y: 405.527 },
      { x: 224, y: 462.027 },
      { x: 194, y: 489.527 },
      { x: 151.5, y: 498.027 },
      { x: 103, y: 489.527 },
      { x: 76.5, y: 462.027 },
      { x: 64, y: 426.527 },
      { x: 64, y: 395.527 },
      { x: 54.5, y: 374.527 },
      { x: 26, y: 321.527 },
      { x: 19, y: 238.527 },
      { x: 19, y: 196.027 },
      { x: 0.5, y: 152.527 },
    ], { isStatic: true }, true, 0.01, 20, 0.01);
  engineArray.push(ceiling, ground, wallLeft, wallRight, headshotOutline, mouseConstraint);
  updateBodyDimensions();
  populateSkills();

  Composite.add(engine.world, engineArray);
  // Render.run(render); // Uncomment for wireframe troubleshooting
  runner = Runner.create();
  Runner.run(runner, engine);

  (function rerender() {
    boxes.forEach((box) => { box.render(); });
    Matter.Engine.update(engine);
    animationFrameId = requestAnimationFrame(rerender);
  })();
}

function populateSkills() {
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
  if (boxesToAdd.length == 0) {
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
    this.element.style.position = "absolute";
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
  changeSize(ceiling, stage.width, outerPadding);
  changeSize(ground, stage.width, outerPadding);
  changeSize(wallLeft, outerPadding, stage.height);
  changeSize(wallRight, outerPadding, stage.height);
  Body.setPosition(ground, { x: (stage.width / 2), y: (stage.height + (outerPadding * .5)) });
  Body.setPosition(ceiling, { x: (stage.width / 2), y: 0 - (outerPadding * .75) });
  Body.setPosition(wallRight, { x: (stage.width + (outerPadding * .5)), y: stage.height / 2 });
  Body.setPosition(wallLeft, { x: -(outerPadding * .5), y: stage.height / 2 });

  let headshotImage = document.querySelector(".headshot");
  let headshotWidth = headshotImage.getBoundingClientRect().width;
  if (headshotWidth == 0) {
    // fallback if image hasn't loaded yet: 12rem (xs–lg) or 15rem (xl)
    headshotWidth = window.innerWidth < 1441 ? 192 : 240;
  }
  let headshotOutlineWidth = headshotOutline.bounds.max.x - headshotOutline.bounds.min.x;
  let headshotScale = headshotWidth / headshotOutlineWidth;
  Body.scale(headshotOutline, headshotScale, headshotScale);
  // Bodies.fromVertices centers on the centroid, not the bbox center.
  // Compute the offset so the bbox center lands on the stage center, matching the CSS image.
  const centroidToBbox = {
    x: headshotOutline.position.x - (headshotOutline.bounds.min.x + headshotOutline.bounds.max.x) / 2,
    y: headshotOutline.position.y - (headshotOutline.bounds.min.y + headshotOutline.bounds.max.y) / 2,
  };
  Body.setPosition(headshotOutline, {
    x: stage.width / 2 + centroidToBbox.x,
    y: stage.height / 2 + centroidToBbox.y,
  });
}

function changeSize(body, newWidth, newHeight) {
  const { x, y } = body.position;
  const halfWidth = newWidth / 2;
  const halfHeight = newHeight / 2;
  const newVertices = [
    { x: x - halfWidth, y: y - halfHeight },
    { x: x + halfWidth, y: y - halfHeight },
    { x: x + halfWidth, y: y + halfHeight },
    { x: x - halfWidth, y: y + halfHeight }
  ];
  Body.setVertices(body, newVertices);
}

function clearSkillFall() {
  boxes.forEach((box) => { box.stop(); });
  Composite.clear(engine.world, false);
  Engine.clear(engine);
  Render.stop(render);
  Runner.stop(runner);
  Render.canvas = null;
  Render.context = null;
  Render.textures = {};
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
  boxesToAdd = [];
  mouseConstraint = undefined;
  headshotOutline = undefined;
}
</script>

<template>
  <div class="modal">
    <nav class="modal-controls">
      <router-link to="/" title="Close" class="modal-nav-btn close">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.09601 13.1735C3.74005 13.5313 3.16292 13.5313 2.80696 13.1735C2.451 12.8157 2.451 12.2356 2.80696 11.8778L11.8303 2.80814C12.1862 2.45035 12.7633 2.45035 13.1193 2.80814C13.4753 3.16592 13.4753 3.74601 13.1193 4.1038L4.09601 13.1735Z" class="foreground" />
          <path d="M2.88068 4.12178C2.52472 3.764 2.52472 3.18391 2.88068 2.82612C3.23664 2.46833 3.81377 2.46833 4.16973 2.82612L13.193 11.8958C13.549 12.2536 13.549 12.8337 13.193 13.1915C12.8371 13.5492 12.2599 13.5492 11.904 13.1915L2.88068 4.12178Z" class="foreground" />
        </svg>
      </router-link>
    </nav>
    <div class="about-layout">
      <div class="skills-column">
        <div ref="scene" class="skills">
          <div class="headshot-container">
            <img src="/assets/img/headshot-dark.png" class="headshot dark" alt="" draggable="false" />
            <img src="/assets/img/headshot.png" class="headshot light" alt="" draggable="false" />
          </div>
          <ul>
            <li v-for="tag in mergedSkills" :key="tag.id" :class="{ 'level-3': tag.promoted }">{{ tag.label }}</li>
          </ul>
        </div>
      </div>
      <main>
        <div class="reviews" ref="reviews" @touchstart.passive="handleSwipeStart" @touchmove="handleSwipeMove" @touchend.passive="handleSwipeEnd">
          <Transition :name="`quote-${quoteDirection}`">
            <blockquote :key="currentQuoteIndex" :cite="quotes[currentQuoteIndex].cite">
              {{ quotes[currentQuoteIndex].text }}
            </blockquote>
          </Transition>
        </div>
        <div class="pagination">
          <button class="pagination-prev" aria-label="Previous quote" @click="goToQuote(currentQuoteIndex > 0 ? currentQuoteIndex - 1 : quotes.length - 1, 'prev')">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.41525 8.64753C3.05929 9.00531 2.48217 9.00531 2.12621 8.64753C1.77025 8.28974 1.77025 7.70965 2.12621 7.35186L6.46953 2.96219C6.82549 2.6044 7.40261 2.6044 7.75857 2.96219C8.11453 3.31998 8.11453 3.90007 7.75857 4.25786L3.41525 8.64753Z" class="foreground" />
              <path d="M2.12621 8.64753C1.77025 8.28974 1.77025 7.70965 2.12621 7.35186C2.48217 6.99407 3.05934 6.99448 3.4153 7.35227L7.7586 11.7419C8.11456 12.0997 8.11456 12.6798 7.7586 13.0376C7.40264 13.3954 6.82551 13.3954 6.46955 13.0376L2.12621 8.64753Z" class="foreground" />
              <path d="M4.7421 8.90656C4.2374 8.90785 3.82931 8.49976 3.83061 7.99507C3.8319 7.49037 4.24209 7.08019 4.74678 7.07889L13.2619 7.04612C13.7666 7.04483 14.1747 7.45291 14.1734 7.95761C14.1721 8.46231 13.762 8.87249 13.2573 8.87379L4.7421 8.90656Z" class="foreground" />
            </svg>
          </button>
          <button v-for="(_, i) in quotes" :key="i" :class="{ selected: i === currentQuoteIndex }" :aria-label="`Quote ${i + 1}`" @click="goToQuote(i)"></button>
          <button class="pagination-next" aria-label="Next quote" @click="goToQuote(currentQuoteIndex < quotes.length - 1 ? currentQuoteIndex + 1 : 0, 'next')">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.6174 8.64753C12.9734 9.00531 13.5505 9.00531 13.9065 8.64753C14.2624 8.28974 14.2624 7.70965 13.9065 7.35186L9.56314 2.96219C9.20718 2.6044 8.63006 2.6044 8.2741 2.96219C7.91814 3.31998 7.91814 3.90007 8.2741 4.25786L12.6174 8.64753Z" class="foreground" />
              <path d="M13.9065 8.64753C14.2624 8.28974 14.2624 7.70965 13.9065 7.35186C13.5505 6.99407 12.9733 6.99448 12.6174 7.35227L8.27407 11.7419C7.91811 12.0997 7.91811 12.6798 8.27407 13.0376C8.63003 13.3954 9.20716 13.3954 9.56311 13.0376L13.9065 8.64753Z" class="foreground" />
              <path d="M11.2906 8.90656C11.7953 8.90785 12.2034 8.49976 12.2021 7.99507C12.2008 7.49037 11.7906 7.08019 11.2859 7.07889L2.77073 7.04612C2.26603 7.04483 1.85794 7.45291 1.85924 7.95761C1.86053 8.46231 2.27072 8.87249 2.77541 8.87379L11.2906 8.90656Z" class="foreground" />
            </svg>
          </button>
        </div>
        <component v-for="block in aboutBlocks" :key="block.id" :is="blockRegistry[block.type]" v-bind="block" />
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
div.modal {
  padding-bottom:0;
}
h2 {
  margin: 1rem 0 0.5rem;
}

/** ----------------------------------------------------------------
    LAYOUT
---------------------------------------------------------------- **/
.about-layout {
  @include lg {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    align-items: start;

    main {
      grid-column: 1;
      grid-row: 1;
    }

    .skills-column {
      grid-column: 2;
      grid-row: 1;
      position: sticky;
      top: 0;
      height: calc(100dvh - 2em);
    }
  }
}

/** ----------------------------------------------------------------
    SKILLS / PHYSICS STAGE
---------------------------------------------------------------- **/
.skills-column {
  @include xs {
    height: 60dvh;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--accent);
  }

  @include lg {
    border-bottom: unset;
    margin-bottom: unset;
  }
}

div.skills {
  overflow: hidden;
  height: 100%;
  position: relative;
  user-select: none;

  ul {
    list-style: none;
    position: relative;
    cursor: move;
    user-select: none;

    li {
      position: absolute;
      display: inline-block;
      color: var(--accent);
      background: none;
      user-select: none;
      text-align: center;

      @include xs {
        @include modular-scale(-1);
        max-width: 10em;
      }

      // font-size:1.25rem;
      line-height:110%;

      a {
        user-select: none;
      }

      &.level-3 {
        font-size: 1em;
      }
    }
  }

  // Note: this container is here so we don't have to do the translate() hack for img.headshot, which causes some graphical bugs with the background bleeding through the top or bottom
  div.headshot-container {
    position: absolute;
    height:100%;
    width:100%;
    display:grid;
    place-items: center;
  }

  img.headshot {
    @media (prefers-color-scheme: light) 
    {
      &.dark {
        display:none;
      }
    }
    @media (prefers-color-scheme: dark) 
        {
          &.light {
            display:none;
          }
        }
    background: var(--accent);
    user-select: none;
    -webkit-user-drag: none;
    -moz-user-select: none;
    pointer-events: none;

    @include xs {
      width: 136px;
    }

    @include md {
      width: 152px;
    }
    @include lg {
      width: 170px;
    }

    @include xl {
      max-width: 15rem;
    }
  }
}

/** ----------------------------------------------------------------
    QUOTE CAROUSEL
---------------------------------------------------------------- **/
div.reviews {
  display: grid;
  overflow: hidden;

  blockquote {
    grid-row: 1;
    grid-column: 1;
    margin: 0.5rem 0.625rem 1rem 0.625rem;
    padding: 0 0 0 1.25rem;
    position: relative;

    @include xs {
      @include modular-scale(0);
    }

    @include xl {
      @include modular-scale(1);
    }

    &:before {
      content: "\201C";
      position: absolute;
      line-height: 95%;
      left: -0.5rem;
      top: -0.75rem;
      z-index: -1;
      color: color-mix(in srgb, var(--accent) 20%, transparent);
      font-family: Georgia, 'Times New Roman', Times, serif;
      @include modular-scale(9);
    }

    &[cite]::after {
      content: "– " attr(cite);
      display: block;
      margin: 0.5rem 0 0 0.25rem;
      font-weight: 500;

      @include xs {
        @include modular-scale(-1);
      }

      @include xl {
        @include modular-scale(0);
      }
    }
  }
}

// Directional slide transitions
.quote-next-enter-active,
.quote-next-leave-active,
.quote-prev-enter-active,
.quote-prev-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.quote-next-enter-from {
  opacity: 0;
  transform: translateX(1.5rem);
}

.quote-next-leave-to {
  opacity: 0;
  transform: translateX(-1.5rem);
}

.quote-prev-enter-from {
  opacity: 0;
  transform: translateX(-1.5rem);
}

.quote-prev-leave-to {
  opacity: 0;
  transform: translateX(1.5rem);
}

div.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  button {
    appearance: none;
    border: none;
    cursor: pointer;
    background: var(--accent);
    border-radius: 1rem;
    transition: background 200ms ease, width 200ms ease, opacity 200ms ease;

    svg .foreground {
      fill: var(--accent);
    }

    &:not(.pagination-prev):not(.pagination-next) {
      overflow: hidden;
      text-indent: -999em;
      display: inline-block;
      height: 0.185rem;
      width: 0.185rem;

      &.selected {
        width: 0.75rem;
        // border:1px solid var(--accent);
      }
    }

    &.pagination-prev,
    &.pagination-next {
      transition: border 150ms ease-in-out;
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      padding: 0.25rem;
      opacity: 1;
      border:1px solid $white;
      @media (prefers-color-scheme: light)
      {
      	border:1px solid $white;
      }
      @media (prefers-color-scheme: dark)
      {
      	border:1px solid $black;
      }
      margin:0 1rem;

      @media (hover:hover) {
        &:hover {
          border:1px solid var(--accent);
        }
      }

      img {
        display: block;
        width: 1rem;
        height: 1rem;
      }
    }
  }
}

// Only on large screens, draw a border around the modal close button because it gets lost amidst all the falling keywords
div.modal a.modal-nav-btn.close {
  @include lg {
    border: 1px solid var(--accent);
  }
}
@keyframes march-ants-sm {
  to {
    background-position: -10px 85%;
  }
}
@keyframes march-ants {
  to {
    background-position: -10px 87%;
  }
}
</style>
