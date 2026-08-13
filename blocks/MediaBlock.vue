<script setup>
import { computed } from 'vue'

const props = defineProps({
  kind: { type: String, required: true, validator: (v) => ['image', 'video'].includes(v) },
  src: { type: String, required: true },
  alt: { type: String, default: '' },
  wide: { type: Boolean, default: false },
  modifier: {
    type: String,
    default: null,
    validator: (v) => v === null || ['compact', 'muted', 'tall', 'centered'].includes(v),
  },
  spaceTop: { type: Boolean, default: false },
  spaceBottom: { type: Boolean, default: false },
})

// "centered" reuses the existing global .artificial-centering utility class;
// the others are scoped below since nothing else currently defines them.
const modifierClass = computed(() => {
  if (!props.modifier) return null
  if (props.modifier === 'centered') return 'artificial-centering'
  return `mod-${props.modifier}`
})
</script>

<template>
  <div v-if="wide" class="wide" :class="{ 'space-top': spaceTop, 'space-bottom': spaceBottom }">
    <img v-if="kind === 'image'" :src="src" :alt="alt" :class="modifierClass" />
    <video v-else muted loop autoplay playsinline :src="src" :class="modifierClass"></video>
  </div>
  <img
    v-else-if="kind === 'image'"
    :src="src"
    :alt="alt"
    :class="[modifierClass, { 'space-top': spaceTop, 'space-bottom': spaceBottom }]"
  />
  <video
    v-else
    muted
    loop
    autoplay
    playsinline
    :src="src"
    :class="[modifierClass, { 'space-top': spaceTop, 'space-bottom': spaceBottom }]"
  ></video>
</template>

<style lang="scss" scoped>
.mod-compact {
  padding: 1.5rem;
  background: #fff;
}
.mod-muted {
  padding: 1.5rem;
  background: #f5f4f2;
}
.mod-tall {
  @include xs {
    max-width: 70%;
  }
}
</style>
