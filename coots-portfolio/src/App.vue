<script>
import WorkGrid from './components/WorkGrid.vue';
import NavBar from './components/NavBar.vue';
export default {
  components: {
    WorkGrid,
    NavBar
  }
}
</script>

<template>
  <div>
    <WorkGrid ref="bgGrid" class="bg" />
    <NavBar />
    <router-view v-slot="{ Component }">
      <transition name="flyaway" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style lang="scss">
body {
  background:$white;
  color:$black;
}
a {
    color:$accent;
    text-decoration: none;
    &:visited {
      color:$accent;
    }
    &:focus {
      background:#000;
    }
    a:hover {
      color:$accent;
      text-decoration: underline;
    }
  }

  // FLYAWAY
  .flyaway-enter-from, .flyaway-leave-to {
    opacity:0;
  }
  .flyaway-enter-to, .flyaway-leave-from {
    opacity:1;
  }
  .flyaway-leave-active, .flyaway-enter-active {
		transition: opacity 1.5s ease-out;  
    transition-timing-function:cubic-bezier(0, 0.79, 0.43, 0.99);

  }
</style>