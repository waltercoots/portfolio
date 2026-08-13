<script setup>
defineProps({
  items: { type: Array, required: true },
  columns: { type: Number, default: 1 },
  spaceTop: { type: Boolean, default: false },
  spaceBottom: { type: Boolean, default: false },
})
</script>

<template>
  <ul
    class="block-list"
    :class="{ 'space-top': spaceTop, 'space-bottom': spaceBottom }"
    :style="{ '--list-columns': columns }"
  >
    <li v-for="item in items" :key="item">{{ item }}</li>
  </ul>
</template>

<style lang="scss" scoped>
.block-list {
  list-style: none;
  display: grid;
  gap: 0.25rem;
  grid-template-columns: 1fr;

  @include md {
    grid-template-columns: repeat(var(--list-columns, 1), 1fr);
  }
}
</style>
