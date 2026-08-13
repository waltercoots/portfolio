<script setup>
import { onMounted, onBeforeUnmount, ref, nextTick, inject, watch } from "vue"
import { useRoute, useRouter } from "vue-router"
import gsap from "gsap"
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import ScrollTrigger from "gsap/ScrollTrigger"
import { Flip } from "gsap/all"
import HomeSection from "@/sections/HomeSection.vue"
import SplashSection from "@/sections/SplashSection.vue"

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, Flip)

const splash = ref(null)
const splashSection = ref(null)
const home = ref(null)

// router and scroll stuff
const route = useRoute()
const router = useRouter()
const lenis = inject('lenis', null)
let triggers = []
let lenisTicker = null
let isProgrammaticScroll = false
let ignoreNextRouteWatch = false
let resizeTimer = null

function scheduleResize() {
  clearTimeout(resizeTimer)
  if (lenis?.isScrolling) {
    resizeTimer = setTimeout(scheduleResize, 100)
    return
  }
  resizeTimer = setTimeout(() => {
    lenis?.resize()
    ScrollTrigger.refresh()
  }, 200)
}

function onResize() {
  scheduleResize()
}

// returns a string based on the pathname
function sectionFromPath(pathname) {
  const clean = (pathname || "/").split("?")[0].replace(/\/+$/, "")
  const key = clean.replace(/^\//, "")

  if (key === "work" || key.startsWith("work/")) return "work"
  if (key === "home") return "home"
  return "intro"
}

// returns a path based on the section
function pathForSection(section) {
  if (section === "work") return "/work"
  if (section === "home") return "/"
  return "/"
}

// returns an element based on a string
function elForSection(section) {
  if (section === "work" || section === "home") return home.value
  return splash.value
}

// scrolls to a given section based on a section:string
function scrollToSection(section, immediate = false) {
  const el = elForSection(section)
  if (!el || !lenis) return

  lenis.resize()
  isProgrammaticScroll = true
  setTimeout(() => {
    // ensures this variable gets reset in case the scrollTo below is interrupted
    isProgrammaticScroll = false
  }, 5000)
  lenis.scrollTo(el, {
    immediate,
    duration: immediate ? 0 : 2.2,
    onComplete: () => {
      isProgrammaticScroll = false
    }
  })
}

// updates the router's path based on scroll position
function updatePathViaScroll(key) {
  if (isProgrammaticScroll) return
  if (route.meta?.isModal) return

  const targetPath = pathForSection(key)
  if (route.path !== targetPath) {
    ignoreNextRouteWatch = true
    router.push({ path: targetPath })
  }
}

// fun effects thanks to GSAP
function gsapEffectsSetup() {

  // GSAP intro effects
  const splashTl = gsap.timeline({
    scrollTrigger: {
      trigger: splash.value,
      start: "top top",
      end: "+=50%",
      scrub: true,
    },
  })
  splashTl
    .to(splashSection.value.nameBG, { scale:1, maskSize: "75%, auto", maskPosition: "50% 50%" }, 0)
  triggers.push(splashTl);

  const videoEl = document.querySelector('[data-section="video"] video')
  const homeTl = gsap.timeline({
    scrollTrigger: {
      trigger: home.value,
      start: "top top",
      end: "top top",
      scrub: true,
    },
  })
  homeTl
    .to('[data-section="video"]', {
      autoAlpha: 0,
      onComplete: () => videoEl?.pause(),
      onReverseComplete: () => videoEl?.play(),
    }, 0)
  triggers.push(homeTl);
}

// sets up the triggers for GSAP animation as well as updating the route on scroll
function routeUpdaterSetup() {
  const sections = [
    { key: "splash", el: splash.value },
    { key: "home", el: home.value },
  ]

  // for each section in ScrollShell, add scroll triggers to update the path
  sections.forEach(({ key, el }) => {
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        updatePathViaScroll(key);
      },
      onEnterBack: () => {
        updatePathViaScroll(key);
      },
    })
    triggers.push(st)
  })
}

// occurs when ScrollShell.vue and its children are loaded into the DOM
onMounted(async () => {
  await router.isReady() // wait until the router is ready

  // Lenis GSAP setup
  if (lenis) {
    lenis.on('scroll', ScrollTrigger.update)

    lenisTicker = (time) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(lenisTicker)
    gsap.ticker.lagSmoothing(0)
  }

  window.addEventListener('resize', onResize)

  // set up the GSAP & Lenis scroll effects
  gsapEffectsSetup();

  // set up triggers to update router on scroll
  routeUpdaterSetup();

  // scroll to the initial route, if it isn't the intro
  if (!route.meta?.isModal && route.path !== '/') {
    scrollToSection(sectionFromPath(route.path), true)
  }
})

watch(
  () => route.path,
  async (path, oldPath) => {
    await nextTick()

    if (ignoreNextRouteWatch) {
      ignoreNextRouteWatch = false
      return
    }

    if (route.meta?.isModal) return

    const comingFromModal =
      oldPath?.startsWith("/work/") ||
      oldPath === "/about" ||
      oldPath === "/quick-overview"

    if (comingFromModal) return

    scrollToSection(sectionFromPath(path))
  }
)
// Vue hook that occurs before ScrollShell.vue is unmounted
onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
  clearTimeout(resizeTimer)

  triggers.forEach(t => t.kill())
  triggers = []

  if (lenis) {
    lenis.off('scroll', ScrollTrigger.update)
  }

  if (lenisTicker) {
    gsap.ticker.remove(lenisTicker)
    lenisTicker = null
  }

  ScrollTrigger.refresh()
})
</script>

<template>
    <section ref="splash" data-section="splash" class="splash">
      <SplashSection ref="splashSection" />
    </section>
    <section ref="home" data-section="home" class="home">
      <HomeSection />
    </section>
</template>

<style lang="scss">
/** ----------------------------------------------------------------
    SHELL STRUCTURE
---------------------------------------------------------------- **/
section {
  position: relative;
  width: 100%;
  background: $white;  
  @media (prefers-color-scheme: light)
  {
    background: $white;  
  }
  @media (prefers-color-scheme: dark)
  {
    background: $black;  
  }
  min-height: 100dvh;
  height:auto; 
}

/** ----------------------------------------------------------------
    INDIVIDUAL SECTION STYLING
---------------------------------------------------------------- **/
section.splash {
  z-index: 1;
}

section.home {
  z-index: 2; // overlaps content on section.splash
  margin-top: 50vh; // in place for choreographing the GSAP animation a bit
  display: flex;
  border-top: 1px solid var(--accent);


  // Dithered gradient shadow I'm not sure I like
// &:before {
// 	content:'';
// 	position: absolute;
//   left:0;
//   right:0;
// 	height:1rem;
// 	top:-1rem;
// 	left:-1rem;
// 	background:var(--accent);
//   mask-image: url('/assets/img/gradient@2x.png');
//   mask-repeat: repeat-x;
//   mask-size: auto 100%;
// }


  @include xs {
    padding: 2rem;
    flex-direction: column;
    justify-content: center;
  }
  @include md {
    padding: 2rem;
  }
  @include lg {
    justify-content:space-between;
    padding: 4rem;
    flex-direction: row;
  }
  @include xl {
    justify-content: center;
  }
}

</style>