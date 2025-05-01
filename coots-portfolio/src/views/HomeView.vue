<script>
import NavBar from '@/components/NavBar.vue';
let homeboy; // Reference to the home content

export default {
  components: {
    NavBar
  },
  mounted() {
    homeboy = document.querySelector('.homeContent');
  },
  methods: {
    toggleHomeVisibility(bool) {
      if(bool===undefined) 
      {
        homeboy.classList.toggle('collapsed');
        if (homeboy.classList.contains('collapsed')) {
          homeboy.classList.remove('collapsed');
        } else {
          homeboy.classList.add('collapsed');
        }
      }
      else
      {
        if(bool===true)
        {
          homeboy.classList.remove('collapsed');
        }
        else
        {
          homeboy.classList.add('collapsed');
        }
      }
    }
  },
  watch: {
    '$route'(to) {
      if (to.path != '/about') {
        if (to.path == '/work') {
          this.toggleHomeVisibility(false);
        }
        if (to.path == '/') {
          this.toggleHomeVisibility(true);
        }
      }
    }
  }
}
</script>

<template>
  <div class="home">
    <div class="homeContent">
      <img :src="require('@/assets/wcoots-lockup.svg')" alt="Walter Coots Logo" class="nameplate" />
      <p>Design lead with over 20 years experience making <em>enterprise and consumer websites and products</em> that help companies stand out and grow faster.</p> 
      <NavBar />
    </div>
  </div>
</template>

<style lang="scss">
  div.home {
    div.homeContent {
      z-index:2;
      @include xs {
        width: calc(100vw - 1rem);
        max-width:20.5rem;
        @include modular-scale(-3); // Font size
      }
      @include sm {
        width: 28.6875rem;
        max-width:unset;
        @include modular-scale(-3); // Font size
      }
      @include md {
        width: 28.6875;
        @include modular-scale(-2); // Font size
      }
      @include lg {
        width: 30rem;
        @include modular-scale(-1); // Font size
      }
      @include xl {
        width: 30rem;
        @include modular-scale(-1); // Font size
      }
      text-align:center;
      position: absolute;
      left:50%;
      transform: translateY(calc(50vh - 50%)) translateX(-50%);
      transition:transform 250ms ease-out;
      p {
        margin-top:1rem;
      }
      &.collapsed {
        transform:translateY(calc(-100% + 2.85rem)) translateX(-50%);
        transition:transform 250ms ease-out;
      }
    }
    nav {
      margin-top:2rem;
    }
    em {
      font-style:normal;
      color:$white;
      box-sizing:border-box;
      background-color:$accent;
      border-left:4px solid $accent;
      border-right:4px solid $accent;
    }
  }
</style>