<script setup>
import Lenis from 'lenis';
import ScrollShell from './views/ScrollShell.vue';
import { computed, watch, onBeforeUnmount, provide, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const lenis = new Lenis({})

provide('lenis', lenis)
const route = useRoute()

const isModalOpen = computed(() => Boolean(route.meta.isModal))

let savedScrollY = 0

watch(
  isModalOpen,
  (open) => {
    if (open) {
      savedScrollY = window.scrollY
      lenis.stop()
    }
    // modal-open class is applied/removed via transition hooks below
  },
  { immediate: true }
)

const onModalBeforeEnter = () => {
  document.documentElement.classList.add('modal-open')
}

const onModalAfterLeave = () => {
  document.documentElement.classList.remove('modal-open')
  lenis.start()
  lenis.scrollTo(savedScrollY, { immediate: true })
  lenis.resize()
}

onMounted(() => {
  const offset = Number.parseFloat(
    getComputedStyle(document.documentElement)
      .getPropertyValue('--safari-scroll-offset')
  ) || 0;

  if (matchMedia('(max-width: 760px)').matches && scrollY < offset) {
    scrollTo({ top: offset, left: 0, behavior: 'instant' });
  }

  // determine scrollbar width, if available
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
})

onBeforeUnmount(() => {
  document.documentElement.classList.remove('modal-open')
})
</script>

<template>
  <ScrollShell />
  <RouterView name="modal" v-slot="{ Component }">
    <Transition name="modal" appear @before-enter="onModalBeforeEnter" @after-leave="onModalAfterLeave">
      <component :is="Component" v-if="Component" />
    </Transition>
  </RouterView>
</template>

<style lang="scss">
/** ----------------------------------------------------------------
    BROWSER STUFF
---------------------------------------------------------------- **/
:root {
  color-scheme: light;
  // --accent-light/--accent-dark are set at runtime by useAccentColor.js;
  // these are just pre-hydration fallbacks matching the default 'orange'.
  --accent-light: #ff744d;
  --accent-dark: #ff9873;
  --accent: var(--accent-light);
  @media (prefers-color-scheme: dark) {
    --accent: var(--accent-dark);
  }
}
::selection {
  background-color: color-mix(in srgb, var(--accent) 25%, transparent)
}
/** ----------------------------------------------------------------
    BASE PAGE STYLING
---------------------------------------------------------------- **/
html {
  font-size: 16px;
  scrollbar-gutter: stable;
  @media(prefers-color-scheme: light) {
    background: $white;
  }
  @media(prefers-color-scheme: dark) {
    background: $black;
  }
}
body {
  background: var(--accent);
  color: var(--accent);
  font-family: 'TT Hoves', sans-serif;
  font-weight: 300;
}

/** Below is applied when modals are open **/
html.modal-open {
  overflow: clip;
}

html.modal-open::-webkit-scrollbar {
  display: none;
}

html.modal-open {
  scrollbar-width: none;
  scrollbar-gutter: stable;
}

/** ----------------------------------------------------------------
    SCROLLBAR STYLING
---------------------------------------------------------------- **/
// Standard property (Firefox, and any future UA that¸ adopts it).
// Browsers still reserve track space for this one — there's no
// standard way to force an overlay-style (space-free) scrollbar.
* {
  scrollbar-color: rgba($white, 0.5) transparent;
  @media(prefers-color-scheme: light) {
    scrollbar-color: rgba($white, 0.5) transparent;
  }
  @media(prefers-color-scheme: dark) {
    scrollbar-color: rgba($black, 0.5) transparent;
  }
}

// WebKit (Chrome & Safari). On systems where the OS/browser is set to
// overlay scrollbars (macOS default), these render on top of content
// without reserving layout space; otherwise they fall back to a thin,
// classic scrollbar styled the same way.
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  @media(prefers-color-scheme: light) {
    background: rgba($white, 0.55);
  }
  @media(prefers-color-scheme: dark) {
    background: rgba($black, 0.55);
  }
  border-radius: 4px;
}

::-webkit-scrollbar-corner {
  background: transparent;
}

/** Testing element to display current breakpoint */
// body:after {
//   content: 'Test';
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   background: $black;
//   color: #fff;
//   font-size: 1rem;
//   padding: 0.5rem;
//   z-index: 11;

//   @include xs {
//     content: 'XS (Phone)';
//   }

//   @include sm {
//     content: 'SM (Phablet)';
//   }

//   @include md {
//     content: 'M (Tablet)';
//   }

//   @include lg {
//     content: 'LG (Laptop)';
//   }

//   @include xl {
//     content: 'XL (Desktop)';
//   }
// }

/** ----------------------------------------------------------------
    BASE TYPOGRAPHY & LINK STYLING
---------------------------------------------------------------- **/
p,
ul {
  line-height: 145%;
  letter-spacing: 0.75%;

  @include xs {
    @include modular-scale(1);
  }

  @include xl {
    @include modular-scale(2);
  }
}

@keyframes march-ants {
  to {
    background-position: -10px 95%;
  }
}

@keyframes march-ants-sm {
  to {
    background-position: -10px 93%;
  }
}

a {
  color: var(--accent);
  text-underline-offset: 0.1em;

  @include xs {
    text-decoration-thickness: 1px;
  }

  @include xl {
    text-decoration-thickness: 2px;
  }

  @media (hover:hover) {
    &:hover {
      text-decoration: none;
      background-image: radial-gradient(circle, currentColor 3px, transparent 2px);

      @include xs {
        background-size: 10px 1px;
        background-position: 0 93%;
        animation: march-ants-sm 0.35s linear infinite;
      }

      @include xl {
        background-size: 10px 2px;
        background-position: 0 95%;
        animation: march-ants 0.35s linear infinite;
      }

      background-repeat: repeat-x;
    }
  }

  &:focus-visible {
    text-decoration: none;
    background-image: radial-gradient(circle, currentColor 3px, transparent 2px);

    @include xs {
      background-size: 10px 1px;
      background-position: 0 93%;
      animation: march-ants-sm 0.35s linear infinite;
    }

    @include xl {
      background-size: 10px 2px;
      background-position: 0 95%;
      animation: march-ants 0.35s linear infinite;
    }

    background-repeat: repeat-x;
  }
}

h1 {
  font-weight: 300;
  line-height: 133%;

  @include xs {
    @include modular-scale(5);
  }

  @include xl {
    @include modular-scale(6);
  }
}

h2 {
  font-weight: 300;
  line-height: 133%;

  @include xs {
    @include modular-scale(3);
  }

  @include xl {
    @include modular-scale(4);
  }
}

h3 {
  @include xs {
    @include modular-scale(0);
  }

  @include xl {
    @include modular-scale(1);
  }

  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 23%;
  line-height:150%;
}

h4 {
  @include xs {
    @include modular-scale(-1);
  }
  
  @include xl {
    @include modular-scale(0);
  }
  
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 23%;
  line-height:150%;
}

.small {
  @include xs {
    @include modular-scale(-1);
  }

  @include xl {
    @include modular-scale(0);
  }

  font-weight:400;
  line-height:165%;
}

/** ----------------------------------------------------------------
    MODAL DIALOG, NAVIGATION, AND TRANSITIONS
---------------------------------------------------------------- **/
div.modal {
  background: $white;
  color: $black; 
  scrollbar-color: rgba($black, 0.25) transparent;
  @media (prefers-color-scheme: light){
    background: $white;
    color: $black; 
    scrollbar-color: rgba($black, 0.25) transparent;
  }
  @media (prefers-color-scheme: dark){
    background: $black; 
    color: $white;
    scrollbar-color: rgba($white, 0.25) transparent;
  }
  position: fixed;
  inset: 0;
  z-index: 10;
  overflow-y: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  border-top: 1px solid var(--accent);
  box-shadow: 0 -2rem color-mix(in srgb, var(--accent) 50%, transparent);
  @include modular-scale(0);
  &.case-studies {
    border-top: 1px solid $black;
    box-shadow: 0 -2rem color-mix(in srgb, $black 50%, transparent);  
    @media (prefers-color-scheme: light){
      border-top: 1px solid $black;
      box-shadow: 0 -2rem color-mix(in srgb, $black 50%, transparent);  
    }
    @media (prefers-color-scheme: dark) {
      border-top: 1px solid $white;
      box-shadow: 0 -2rem color-mix(in srgb, $black 50%, transparent);        
    }
  }

  main {
    margin: 0 auto 0;
    display: grid;
    grid-template-columns: 1fr min(70ch, 100%) 1fr;

    @include xs {
      padding: 1rem;
      padding-bottom:7rem; // extra padding to accommodate nav buttons
    }

    @include md {
      padding: 2rem;
    }

    @include lg {
      padding: 3rem;
    }

    @include xl {
      padding: 4rem;
    }

    &>* {
      grid-column: 2;
    }

    &>.wide {
      grid-column: 1 / -1;
      text-align: center;
      margin-left:auto;
      margin-right:auto;
      width: 100%;

      video, img {
        margin: 0 auto 0;
        max-width: 95ch;
        width: 100%;
      }
    }

    p,
    ul {
      margin-bottom: 0.5rem;
    }
  }
}

nav.modal-controls {
  position: fixed;
  display: flex;
  width: 90dvw;
  left: 50dvw;
  transform: translateX(-50%);

  @include xs {
    top: unset;
    bottom: 2rem;
    justify-content: center;
  }

  @include lg {
    top: 3.5rem;
    bottom: unset;
    max-width: 100ch;
    justify-content: right;

    &.case-studies {
      justify-content: left;

      &> :nth-child(1) {
        margin-right: 1rem;
      }

      &> :nth-child(2) {
        order: 3;
        right: 0;
        position: absolute;
      }
    }
  }

  @include xl {
    top: 5rem;
  }

  z-index: 2;
}

// Navigation
a.modal-nav-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  box-sizing: border-box;
  background: $white;
  @media (prefers-color-scheme: light)
  {
    background: $white;
  }
  @media (prefers-color-scheme: dark)
  {
    background: $black;
  }

  @include xs {
    height: auto;
    width: auto;
    mix-blend-mode: difference;
    padding: 0.5rem;
    border-radius: 1.5rem;
    margin: 0 1.5rem;
  }

  @include lg {
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    margin: unset;
  }

  .foreground {
    fill: currentColor;
  }

  svg {
    width:1.5rem;
    .foreground {
      @media (prefers-color-scheme: light)
      {
        fill: $black;
      }
      @media (prefers-color-scheme: dark)
      {
        fill: $white;
      }
    }
  }  

  @media (hover:hover) {
    &:hover {
      svg .foreground {
        fill: var(--accent);
      }
    }
  }

  &:focus-visible {
    svg .foreground {
      fill: var(--accent);
    }
  }
}

// Navigation styling specifically for non-case study modals, primarily because we're working under the pretense that case study modals will have black text
div.modal:not(.case-studies) {
  color: var(--accent);
  scrollbar-color: color-mix(in srgb, var(--accent) 25%, transparent) transparent;

  // center the close button for non-case study modals
  nav.modal-controls {
    @include xs {
      justify-content: center;
    }

    @include lg {
      justify-content: right;
    }
  }

  a.modal-nav-btn {
    border: 1px solid $white;
    transition: border 150ms ease-in-out;
    @media (prefers-color-scheme: light)
    {
      border: 1px solid $white;
    }
    @media (prefers-color-scheme: dark)
    {
      border: 1px solid $black;
    }

    svg {
      width: 1.5rem;
      .foreground {
        fill: var(--accent);
      }
    }
    @media (hover:hover) {
      &:hover {
        border: 1px solid var(--accent);
      }
    }

    &:focus-visible {
      svg .foreground {
        fill: var(--accent);
        border: 1px solid $white;
        @media (prefers-color-scheme: light)
        {
          border: 1px solid $white;
        }
        @media (prefers-color-scheme: dark)
        {
          border: 1px solid $black;
        }
      }
    }
  }
}

.modal-enter-active,
.modal-leave-active {
  right:0;
  transition:
    transform 470ms cubic-bezier(.88, -0.01, .15, 1);
}

.modal-enter-from,
.modal-leave-to {
  right:0;
  transform: translate(0, -105%);
  transition:
    transform 470ms cubic-bezier(.88, -0.01, .15, 1);
}
</style>
