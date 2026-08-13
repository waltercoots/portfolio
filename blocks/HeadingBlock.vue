<script setup>
defineProps({
  level: { type: Number, default: 2 },
  text: { type: String, required: true },
  spaceTop: { type: Boolean, default: false },
  spaceBottom: { type: Boolean, default: false },
})
</script>

<template>
  <component :is="`h${level}`" :class="{ 'space-top': spaceTop, 'space-bottom': spaceBottom }">{{ text }}</component>
</template>
