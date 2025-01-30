<template>
  <div>
    <router-view />
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
</style>