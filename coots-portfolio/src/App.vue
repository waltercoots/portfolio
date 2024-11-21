<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/work">Work</router-link>
      <a href="https://blog.waltercoots.com/" target="_blank">Blog</a>
      <router-link to="/contact">Contact</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  background:$white;
  color:$black;
}

#app {
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
  }

nav {
  display:flex;
  a {
    padding:0 0.5em;
  }
}
</style>