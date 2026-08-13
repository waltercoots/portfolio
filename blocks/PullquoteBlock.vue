<script setup>
defineProps({
  quote: { type: String, required: true },
  name: { type: String, required: true },
  title: { type: String, default: '' },
})
</script>

<template>
  <aside class="pull-quote">
    <figure>
      <blockquote>
        <p>{{ quote }}</p>
      </blockquote>
      <figcaption>— {{ name }}<template v-if="title">, <cite>{{ title }}</cite></template></figcaption>
    </figure>
  </aside>
</template>
