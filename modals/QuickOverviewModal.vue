<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import Lenis from 'lenis';
import searchIconSvg from '@/assets/svgs/icn-search.svg?raw'

let lenis = null;

const route = useRoute()
const router = useRouter()
const contentRef = ref(null)
const copied = ref(false)
const searchActive = ref(false)
const searchQuery = ref('')
const searchInputRef = ref(null)

const skillGroups = [
  {
    heading: 'General',
    skills: [
      'Product Design', 'User Experience Design', 'User Interface Design',
      'User-Centered Design', 'Interaction Design', 'Information Architecture',
      'Prototyping', 'Wireframing', 'Usability Testing', 'User Research',
      'Accessibility', 'Inclusive Design', 'Journey Mapping', 'Design Thinking',
      'Experience Design', 'User Strategy', 'Personas', 'Service Design',
      'Workshops', 'Problem Solving', 'Simplification',
    ],
  },
  {
    heading: 'Visual and Graphic Design',
    skills: [
      'Visual Design', 'Typography', 'Layout', 'Color Theory', 'Visual Hierarchy',
      'Graphic Design', 'Data Visualization', 'Iconography', 'Motion Graphics',
      'Illustration', 'Art Direction',
    ],
  },
  {
    heading: 'Design Systems and Scalable Design',
    skills: [
      'Design Systems', 'Component Libraries', 'Responsive Web Design',
      'Scalable Design', 'HTML and CSS', 'Frontend Development', 'JavaScript',
      'Mobile Web Design', 'Design Documentation', 'Atomic Design', 'Theming',
      'Design Tokens',
    ],
  },
  {
    heading: 'Tools and Platforms',
    skills: [
      'Figma', 'Adobe Creative Suite', 'Webflow', 'Framer', 'Sketch', 'Miro',
      'FigJam', 'Storybook', 'InVision', 'Photoshop', 'Illustrator',
      'After Effects', 'InDesign', 'ProtoPie', 'Principle', 'Blender', 'Animate', 'Zeplin',
    ],
  },
  {
    heading: 'AI and Machine Learning',
    skills: [
      'AI Assisted Design Workflows', 'Figma MCP', 'Claude Design', 'Gemini', 'ChatGPT', 'Design for Ambiguous AI Output',
    ],
  },
  {
    heading: 'Motion, Interaction, and Advanced Visuals',
    skills: [
      'Microinteractions', 'Interaction Animation', 'Motion Prototyping',
      'Motion Graphics', 'Framer', 'After Effects', 'Animate', 'Blender',
    ],
  },
  {
    heading: 'Collaboration, Process, and Leadership',
    skills: [
      'Cross-Functional Collaboration', 'Stakeholder Management', 'Product Strategy',
      'Agile Methodologies', 'Roadmapping', 'Design Leadership', 'Mentorship',
      'Facilitation', 'Design Critique', 'Design Operations',
    ],
  },
]

const filteredGroups = computed(() => {
  const q = searchQuery.value.trim().toLowerCase()
  if (!q) return skillGroups
  return skillGroups
    .map(group => ({
      ...group,
      skills: group.skills.filter(s => s.toLowerCase().includes(q)),
    }))
    .filter(group => group.skills.length > 0)
})

function openSearch() {
  searchActive.value = true
  nextTick(() => searchInputRef.value?.focus())
}

function closeSearch() {
  searchActive.value = false
  searchQuery.value = ''
}

const handleKeyDown = (e) => {
  if (e.key === 'Escape') {
    if (searchActive.value) {
      closeSearch()
    } else {
      router.push({ path: '/', hash: route.hash })
    }
  }
}

const copyContent = async () => {
  const clone = contentRef.value.cloneNode(true)
  clone.querySelectorAll('.norobo').forEach(el => el.remove())
  clone.querySelectorAll('ul').forEach(list => {
    const items = [...list.querySelectorAll('li')].map(li => li.textContent.trim())
    const p = document.createElement('p')
    p.textContent = items.join(', ')
    list.replaceWith(p)
  })
  clone.style.cssText = 'position:fixed;opacity:0;pointer-events:none'
  document.body.appendChild(clone)
  const text = `${clone.innerText}`
  document.body.removeChild(clone)
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(text)
  } else {
    const el = document.createElement('textarea')
    el.value = text
    el.style.cssText = 'position:fixed;opacity:0'
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
  }
  copied.value = true
  setTimeout(() => { copied.value = false }, 2000)
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
  lenis = new Lenis({
    wrapper: document.querySelector("div.modal"),
    autoRaf: true,
    allowNestedScroll: true
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeyDown);
  lenis.stop();
  lenis.destroy();
})
</script>

<template>
  <div class="modal quick-overview">
    <main>
      <nav class="modal-controls">
      <button class="copy-btn" @click="copyContent">{{ copied ? 'Copied!' : 'Copy' }}</button>
        <router-link to="/" title="Close" class="modal-nav-btn close">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.09601 13.1735C3.74005 13.5313 3.16292 13.5313 2.80696 13.1735C2.451 12.8157 2.451 12.2356 2.80696 11.8778L11.8303 2.80814C12.1862 2.45035 12.7633 2.45035 13.1193 2.80814C13.4753 3.16592 13.4753 3.74601 13.1193 4.1038L4.09601 13.1735Z" class="foreground" />
            <path d="M2.88068 4.12178C2.52472 3.764 2.52472 3.18391 2.88068 2.82612C3.23664 2.46833 3.81377 2.46833 4.16973 2.82612L13.193 11.8958C13.549 12.2536 13.549 12.8337 13.193 13.1915C12.8371 13.5492 12.2599 13.5492 11.904 13.1915L2.88068 4.12178Z" class="foreground" />
          </svg>
        </router-link>
      </nav>
      <div class="modal-heading">
        <h1>Quick Overview</h1>
      </div>
      <div ref="contentRef">
        <span class="norobo">Definitely written with the intent of being read by humans <super>*</super></span>
        <p>Walter Coots specializes in web-based SaaS products and marketing websites. He's comfortable working remotely or in-person in Austin, Texas. (The closer to downtown, the better.) He has U.S. work authorization and is a U.S. citizen. Over the last 20 years he's worked on enterprise HR SaaS; commercial real estate SaaS; intranet, e-commerce, and marketing sites for Fortune 500 companies; a native iOS edutainment app; a health tech startup; entertainment websites; travel websites; non-profit websites; a news website; pro accounting software; and more. </p>
        <p>He's creative; good with layout, color, and typography; and has a portfolio to demonstrate what he can do. He's an expert in Figma, capable of high-fidelity UI, interactive prototyping, and crafting reusable design system components as well as maintaining and optimizing those components. He also has experience making complex flowcharts and user journeys, and facilitating user tests and workshops. He's shipped products and features that led to measurable business impacts. </p>
        <p>Walter brings light people management experience and ongoing interest in design leadership. His focus is web and SaaS, with limited Android and native iOS work.</p>
        <div class="skillz">
          <h2>Skills &amp; Interests</h2>
          <div class="skills-search">
            <button
              v-if="!searchActive"
              class="search-toggle"
              aria-label="Filter skills"
              @click="openSearch"
              v-html="searchIconSvg"
            />
            <label v-else class="search-field">
              <span class="search-icon" v-html="searchIconSvg" aria-hidden="true" />
              <input
                ref="searchInputRef"
                type="text"
                v-model="searchQuery"
                placeholder="Filter"
                @blur="closeSearch"
              />
            </label>
          </div>
          <template v-for="group in filteredGroups" :key="group.heading">
            <h3>{{ group.heading }}</h3>
            <ul class="skills">
              <li v-for="skill in group.skills" :key="skill">{{ skill }}</li>
            </ul>
          </template>
        </div>
        <span class="norobo">
          <super>*</super> Sike
        </span>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>

div.quick-overview {
  color:var(--accent);
}

/** ----------------------------------------------------------------
    HEADER
---------------------------------------------------------------- **/
.modal-heading {
  align-items: baseline;
  justify-content: space-between;
  z-index: 3;
}
.copy-btn {
  background: $white;
  @media (prefers-color-scheme: light)
  {
    background: $white;
    border:1px solid $white;
  }
  @media (prefers-color-scheme: dark)
  {
    background: $black;
    border:1px solid $black;
  }
    
  cursor: pointer;
  padding: 0 1rem;
  text-transform: uppercase;
  letter-spacing:5%;
  border-radius:0.25rem;
  font-weight:600;
  color: var(--accent);
  transition:all 150ms ease-in-out;
  margin-right:1rem;
  @include xs {
    @include modular-scale(-1);
  }
  @include xl {
      @include modular-scale(0);
  }

  @media (hover:hover) {
    &:hover {
      border:1px solid var(--accent);
    }
  }
}
div.skillz {
  margin-top:2rem;
  h2 {
    margin-bottom:1em;
    margin-right:0.75em;
    display:inline-block;
  }
  h3 {
    margin-bottom:1.5rem;
  }
}
div.modal main h1 {
  display:inline-block;
  margin-right:0.35em;
  margin-bottom:0;
}

/** ----------------------------------------------------------------
    CHEEKY LLM DISS
---------------------------------------------------------------- **/
span.norobo {
  display: block;

  margin-bottom: 2rem;
  color: var(--accent);
  @include xs {
    @include modular-scale(0);
  }
  @include xl {
      @include modular-scale(1);
  }
}

/** ----------------------------------------------------------------
    SKILLS SEARCH
---------------------------------------------------------------- **/
.skills-search {
  display:inline-block;
}

.search-toggle {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: var(--accent);
  display: flex;
  align-items: center;
  transition: opacity 150ms ease-in-out;
  width:1.75rem;
  height:1.75rem;
  position: relative;
  top:1px;

  @media (hover:hover) {
    &:hover {
      opacity: 0.65;
    }
  }
}

.search-field {
  display: inline-flex;
  align-items: center;
  gap: 0.75em;
  border: 1px solid var(--accent);
  border-radius: 0.35em;
  padding: 0.3em 0.6em;
  color: var(--accent);
  cursor: text;

  input {
    border: none;
    outline: none;
    background: transparent;
    font: inherit;
    color: var(--accent);
    min-width: 14em;

    &::placeholder {
      color: color-mix(in srgb, var(--accent) 40%, transparent);
    }
  }
}

.search-icon {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width:1.25em;
}

/** ----------------------------------------------------------------
    DUMB LLM KEYWORD DUMPS
---------------------------------------------------------------- **/
ul.skills {
  height: auto;
  list-style: none;
  width: auto;
  margin-bottom: 1.5rem;

  li {
    white-space: nowrap;
    font-weight: 400;
    display:inline-block;
    padding:0.025em 0.625em;
    border-radius:0.35em;
    margin:0 0.75em 0.75em 0;
    background: color-mix(in srgb, var(--accent) 5%, transparent);
    border:1px solid color-mix(in srgb, var(--accent) 25%, transparent);
    @include xs {
      @include modular-scale(-1);
    }
    @include xl {
        @include modular-scale(0);
    }
  }
}
</style>
