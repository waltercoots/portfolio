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
    <NavBar />
    <Transition name="explosion" mode="out-in">
      <WorkGrid />
    </Transition>
  </div>
</template>

<style lang="scss">

.explosion-leave-to, .explosion-enter {
  opacity:0.5;
  // & div {
  //   &:nth-child(1) {
  //     transform: rotate(-17.36deg) scale(.17, .17);
  //   }
  //   &:nth-child(2) {
  //     transform: rotate(27.58deg) scale(.12, .12);
  //   }
  //   &:nth-child(3) {
  //     transform: rotate(41.39deg) scale(.24, .24);
  //   }
  //   &:nth-child(4) {
  //     transform: rotate(-26.82deg) scale(.17, .17);
  //   }
  //   &:nth-child(5) {
  //     transform: rotate(10.54deg) scale(.28, .28);
  //   }
  //   &:nth-child(6) {
  //     transform: rotate(11.7deg) 	scale(.34, .34);
  //   }
  //   &:nth-child(7) {
  //     transform: rotate(-8.6deg) scale(.48, .48);
  //   }
  //   &:nth-child(8) {
  //     transform: rotate(-33.8deg) scale(.26, .26);
  //   }
  //   &:nth-child(9) {
  //     transform: rotate(-9.45deg) scale(.37, .37);
  //   }
  //   &:nth-child(10) {
  //     transform: rotate(-16.59deg) scale(.48, .48);
  //   }
  // }
}
.explosion-leave-from, .explosion-enter-to {
  opacity:1;
  // & div {
  //   &:nth-child(1) {
  //     transform:none;
  //   }
  //   &:nth-child(2) {
  //     transform:none;
  //   }
  //   &:nth-child(3) {
  //     transform:none;
  //   }
  //   &:nth-child(4) {
  //     transform:none;
  //   }
  //   &:nth-child(5) {
  //     transform:none;
  //   }
  //   &:nth-child(6) {
  //     transform:none;
  //   }
  //   &:nth-child(7) {
  //     transform:none;
  //   }
  //   &:nth-child(8) {
  //     transform:none;
  //   }
  //   &:nth-child(9) {
  //     transform:none;
  //   }
  //   &:nth-child(10) {
  //     transform:none;
  //   }
  // }
}
.explosion-leave-active, .explosion-enter-active {
  transition: opacity 1200ms;
  // & div { transition: all 1200ms; }
}
</style>