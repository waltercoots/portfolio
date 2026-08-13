<script setup>
defineProps({
  items: { type: Array, required: true },
  spaceTop: { type: Boolean, default: false },
  spaceBottom: { type: Boolean, default: false },
})
</script>

<template>
  <div class="metric-grid" :class="{ 'space-top': spaceTop, 'space-bottom': spaceBottom }">
    <div class="metric" v-for="item in items" :key="item.label">
      <span class="metric">{{ item.value }}</span>
      <span class="label">{{ item.label }}</span>
    </div>
  </div>
</template>
