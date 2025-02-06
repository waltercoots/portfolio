<script>
import WorkGrid from '@/components/WorkGrid.vue';

export default {
  components: {
    WorkGrid
  }
}
</script>

<template>
  <div class="work">
    <Transition name="explosion" mode="out-in">
      <WorkGrid />
    </Transition>
  </div>
</template>

<style lang="scss">


</style>