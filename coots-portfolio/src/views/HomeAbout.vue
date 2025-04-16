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
			'$route' (to) {
				if (to.path == '/' || to.path == '/aboutDetail') {
					this.toggleHomeVisibility(true);
				}
        else {
					this.toggleHomeVisibility(false);
        }
			}
		}
}
</script>

<template>
  <div class="home">
    <div class="homeContent collapsed">
      <svg viewBox="0 0 522 155" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 151.101C13.9258 145.883 17.0579 128.698 17.0579 99.353V56.1736C17.0579 26.8768 13.9258 9.73904 0 4.47327H70.8336C56.9078 9.69117 53.7757 26.8768 53.7757 56.2215V71.3008H120.61V56.2215C120.61 26.8768 117.43 9.69117 103.552 4.47327H174.385C160.46 9.69117 157.328 26.8768 157.328 56.2215V99.4008C157.328 128.746 160.508 145.883 174.385 151.149H103.552C117.478 145.931 120.61 128.746 120.61 99.4008V74.2687H53.7757V99.4008C53.7757 128.746 56.956 145.883 70.8336 151.149H0V151.101Z" fill="#2A2727" class="nameplate" />
        <path d="M171.061 100.837C171.061 66.0828 194.479 46.9824 226.33 46.9824C258.181 46.9824 279.913 64.3595 281.6 93.0819C276.733 92.2202 265.987 91.5979 258.807 91.5979C273.793 94.7574 279.287 105.433 279.287 114.863C279.287 138.751 256.109 154.452 229.944 154.452C193.66 154.452 171.109 135.4 171.109 100.837H171.061ZM245.508 90.1618C244.689 65.8435 237.509 49.5196 226.33 49.5196C215.151 49.5196 207.345 67.7583 207.345 94.3744C207.345 100.454 207.778 105.911 208.405 110.938C211.778 102.129 224.21 92.0766 245.508 90.2097V90.1618ZM276.492 114.48C276.492 102.752 267.24 91.8373 248.255 91.8373C234.955 91.8373 212.597 99.5923 212.597 119.89C212.597 132.671 222.909 142.724 240.449 142.724C264.06 142.724 276.492 128.075 276.492 114.432V114.48Z" fill="#2A2727" class=" nameplate" />
        <path d="M273.986 151.101C288.538 145.883 291.911 130.996 291.911 101.89V66.8967C291.911 37.5519 288.105 25.8236 273.986 25.2013C294.658 21.4195 313.017 14.0953 325.208 0.5V101.89C325.208 130.996 328.581 145.883 343.133 151.101H273.986Z" fill="#2A2727" class="nameplate" />
        <path d="M344.001 151.101C358.553 145.883 361.926 130.996 361.926 101.89V66.8967C361.926 37.5519 358.119 25.8236 344.001 25.2013C364.672 21.4195 383.031 14.0953 395.222 0.5V101.89C395.222 130.996 398.595 145.883 413.148 151.101H344.001Z" fill="#2A2727" class="nameplate" />
        <path d="M407.703 100.645C407.703 66.5137 430.88 47.0303 464.659 47.0303C498.437 47.0303 522 66.5137 522 100.645C522 134.777 498.822 154.5 464.659 154.5C430.495 154.5 407.703 135.639 407.703 100.645ZM484.222 100.645C484.222 67.9498 476.85 49.5196 464.61 49.5196C452.371 49.5196 445.191 67.9498 445.191 100.645C445.191 133.341 452.805 151.963 464.61 151.963C476.416 151.963 484.222 133.533 484.222 100.645Z" fill="#2A2727" class=" nameplate" />
      </svg>
      <p>I’m Walter Coots. I design enterprise and consumer websites and products that help companies stand out and grow faster. <router-link to="/aboutDetail">More About Me</router-link></p>
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
        width: 33rem;
        @include modular-scale(-1); // Font size
      }
      @include xl {
        width: 33rem;
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
    .nameplate {
      fill: $accent;
    }
  }
</style>