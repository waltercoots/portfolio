<script setup>
defineProps({
  project: { type: Object, required: true },
})
</script>

<template>
  <header>
    <h1>{{ project.title }}</h1>
    <div class="title-and-timeframe">
      <span class="title small">{{ project.role }}</span>
      <span class="company small">{{ project.company }}</span>
      <span class="timeframe small">{{ project.year }}</span>
    </div>
    <p>{{ project.summary }}</p>
    <ul class="tags">
      <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
    </ul>
  </header>
</template>
