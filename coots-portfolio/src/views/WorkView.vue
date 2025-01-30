<script>
import NavBar from '@/components/NavBar.vue';
import WorkGrid from '@/components/WorkGrid.vue';

export default {
  components: {
    NavBar,
    WorkGrid
  }
}
</script>

<template>
  <div class="work">
    <h1>Work</h1>
    <NavBar />
    <Transition name="work-explode">
      <WorkGrid />
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.work-explode-enter-active,
.work-explode-leave-active {
  transition: transform 2s;
}
.work-explode-enter-from,
.work-explode-leave-to {
  opacity:0;
}
</style>