<script setup>
defineProps({
  items: { type: Array, required: true },
  columns: { type: Number, default: 3 },
  spaceTop: { type: Boolean, default: false },
  spaceBottom: { type: Boolean, default: false },
})
</script>

<template>
  <div
    class="gallery"
    :class="{ 'space-top': spaceTop, 'space-bottom': spaceBottom }"
    :style="{ '--gallery-columns': columns }"
  >
    <img v-for="item in items" :key="item.src" :src="item.src" :alt="item.alt" />
  </div>
</template>

<style lang="scss" scoped>
.gallery {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;

  @include md {
    grid-template-columns: repeat(var(--gallery-columns, 3), 1fr);
  }

  img {
    width: 100%;
    display: block;
  }
}
</style>
