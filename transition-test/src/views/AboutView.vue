<template>
  <div class="about">
    <Transition name="fade">
      <h1>This is an about page</h1>
    </Transition>
  </div>
</template>
<style>
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave {
  opacity: 1;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
</style>