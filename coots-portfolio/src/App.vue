<script>
import WorkGrid from './components/WorkGrid.vue';
import HomeView from './views/HomeView.vue';
export default {
  components: {
    HomeView,
    WorkGrid,
  }
}
</script>

<template>
  <div class="foundation">
    <WorkGrid class="bg" />
    <HomeView />
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
*::-webkit-scrollbar {
  width: 1rem;
}

*::-webkit-scrollbar-track {
  background: $white;
  border-radius: 5px;
}

*::-webkit-scrollbar-thumb {
  background: $gray;
  border-radius: 15px;
  border: 4px solid $white;
}

@supports not selector(::-webkit-scrollbar) {
  body {
      scrollbar-color: var(--sb-thumb-color)
                     var(--sb-track-color);
  }
}
html, body {
  padding:0;
  margin:0;
  min-height:100dvh;
  height: -webkit-fill-available;
  width:100vw;
  overflow:hidden;
  font-family: 'TT Hoves', sans-serif;
  font-weight:300;
}
body {
  background:$white;
  color:$black;
}
/* This is a testing element to just show what breakpoint we're viewing at */
body:after {
	content:'Test';
  display:none; // When testing, comment this line out
	position:absolute;
	bottom:0;
	left:0;
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
  height:100dvh;
  overflow:hidden;
  margin:0;
  padding:0;
  @include xs {
    border:0.25rem solid $accent;
  }
  @include md {
    border:0.5rem solid $accent;
  }
}
a {
    color:$accent;
    text-decoration: none;
    &:visited {
      color:$accent;
    }
    &:focus {
      color:$accent;
      text-decoration: underline;
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
		transition: opacity 250ms ease-in;
  }
</style>