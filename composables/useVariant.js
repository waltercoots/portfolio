import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { variants } from '@/assets/content-variants.js'

// The URL hash (e.g. #tremendous-spd) selects a variant. It's a plain URL
// fragment, independent of vue-router's history-mode path routing, but
// route.hash still tracks it reactively since vue-router listens for popstate.
export function useVariant() {
  const route = useRoute()

  const variantKey = computed(() => {
    const key = route.hash?.replace(/^#/, '')
    return key && variants[key] ? key : 'default'
  })

  const variant = computed(() => variants[variantKey.value])

  return { variantKey, variant }
}
