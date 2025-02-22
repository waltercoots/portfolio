<script>
import WorkGrid from './components/WorkGrid.vue';
import HomeAbout from './views/HomeAbout.vue';
export default {
  components: {
    HomeAbout,
    WorkGrid,
  }
}
</script>

<template>
  <div class="foundation">
    <WorkGrid ref="bgGrid" class="bg" />
    <HomeAbout />
    <router-view v-slot="{ Component }">
      <transition name="flyaway" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}
html, body {
  padding:0;
  margin:0;
  height:100vh;
  width:100vw;
  overflow:hidden;
  font-family: 'TT Hoves', sans-serif;
  font-weight:300;
}
body {
  background:$white;
  color:$black;
  perspective: 1500px;
}
div.foundation {
  width:100vw;
  height:100vh;
  overflow:hidden;
  margin:0;
  padding:0;
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
		transition: opacity 1000ms ease-in;
  }
</style>