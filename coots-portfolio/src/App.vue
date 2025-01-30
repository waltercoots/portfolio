<template>
  <div>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
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
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
</style>