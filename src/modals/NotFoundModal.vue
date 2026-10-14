<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleKeyDown = (e) => {
  if (e.key === 'Escape') {
    router.push({ path: '/' })
  }
}

onMounted(() => window.addEventListener('keydown', handleKeyDown))
onBeforeUnmount(() => window.removeEventListener('keydown', handleKeyDown))
</script>

<template>
  <div class="modal job-app">
    <main>
      <h1>Page not found</h1>
      <p>
        That's not here! Maybe it was never here. Try looking at my
        <RouterLink to="/work" title="Work">work</RouterLink> instead.
      </p>
    </main>
  </div>
</template>
