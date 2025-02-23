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
/* This is a testing element to just show what breakpoint we're viewing at */
body:after {
	content:'Test';
  display:none; // When testing, comment this line out
	position:absolute;
	top:0;
	right:0;
	background:$black;
	color:#fff;
	font-size:1rem;
	padding:0.5rem;
	z-index:11;
	@include xs {
		content:'XS (Phone)';
	}
	@include sm {
		content:'SM (Phablet)';
	}
	@include md {
		content:'M (Tablet)';
	}
	@include lg {
		content:'LG (Desktop)';
	}
	@include xl {
		content:'XL (Jumbo)';
	}
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