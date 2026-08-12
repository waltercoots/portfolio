import { ref, watch } from 'vue'

// `light`/`dark` are separate swatches tuned for contrast against the
// page's light/dark background respectively — see --accent-light and
// --accent-dark in App.vue, which `--accent` resolves from via
// @media (prefers-color-scheme). Keep both values in sync when editing.
const COLORS = [
  { name: 'orange', light: '#ff744d', dark: '#ff9873' },
  { name: 'black', light: '#373434', dark: '#fafafa' },
  { name: 'cornflower', light: '#517DCD', dark: '#ABC5F3' },
  { name: 'sage', light: '#477024', dark: '#B8D69E' },
  { name: 'plum', light: '#82346A', dark: '#E8C2DC' },
  { name: 'teal', light: '#277F84', dark: '#71B7B3' }
]

const STORAGE_KEY = 'accent-color'

const savedName = localStorage.getItem(STORAGE_KEY) || 'orange'
const activeColor = ref(COLORS.find(c => c.name === savedName) ?? COLORS[0])

function apply(color) {
  document.documentElement.style.setProperty('--accent-light', color.light)
  document.documentElement.style.setProperty('--accent-dark', color.dark)
}

apply(activeColor.value)

watch(activeColor, (color) => {
  apply(color)
  localStorage.setItem(STORAGE_KEY, color.name)
})

export function useAccentColor() {
  return {
    colors: COLORS,
    activeColor,
    setColor(color) {
      activeColor.value = color
    },
    cycleColor() {
      const idx = COLORS.findIndex(c => c.name === activeColor.value.name)
      activeColor.value = COLORS[(idx + 1) % COLORS.length]
    },
  }
}
