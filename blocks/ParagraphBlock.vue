<script setup>
defineProps({
  text: { type: String, required: true },
  spaceTop: { type: Boolean, default: false },
  spaceBottom: { type: Boolean, default: false },
})
</script>

<template>
  <!-- v-html is safe here: text is authored case study copy, never user input -->
  <p :class="{ 'space-top': spaceTop, 'space-bottom': spaceBottom }" v-html="text"></p>
</template>
