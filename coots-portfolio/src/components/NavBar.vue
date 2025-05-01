<template>
	<nav class="mainNav">
		<router-link to="/" class="home" title="Home" :class="{ notOnHome: homeShowing }" @click="homeShowing = !homeShowing">
			<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M4 8V12C4 12.5523 4.44772 13 5 13H11C11.5523 13 12 12.5523 12 12V8" stroke-linecap="round" class="svg-line" />
			<path d="M14 7L8.70711 1.70711C8.31658 1.31658 7.68342 1.31658 7.29289 1.70711L1.95402 7.04598" class="svg-line" stroke-linecap="round" stroke-linejoin="round" />
			</svg>
		</router-link>
		<router-link to="/about" title="About">About</router-link>
		<router-link to="/work" title="Work">Work</router-link>
		<!-- <a href="https://blog.waltercoots.com/" target="_blank">Blog</a> -->
		<div class="contactMenu" :class="{ open: contactOpen }" @click="contactOpen = !contactOpen"
			@mouseleave="closeMenu" ref="menuRef">
			Contact
			<svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1.91406 0.569824H7.08594C7.50343 0.569938 7.72549 1.04315 7.49219 1.36182L7.43945 1.42334L4.85352 4.00928C4.65827 4.20444 4.34173 4.20444 4.14648 4.00928L1.56055 1.42334C1.24571 1.10838 1.46875 0.569946 1.91406 0.569824Z" class="svg-line" />
			</svg>
			<div v-if="contactOpen" class="submenu" title="Contact...">
				<a href="mailto:walter@waltercoots.com" @click="closeMenu" title="Email">Email</a>
				<a href="sms:5129657567" @click="closeMenu" title="Text">Text</a>
				<a href="tel:5129657567" @click="closeMenu" title="Call">Call</a>
				<a href="http://linkedin.com/in/waltercoots/" target="_blank" @click="closeMenu" title="LinkedIn">LinkedIn</a>
				<a href="/resume.pdf" download="walter-coots-résumé" title="Download Résumé">Résumé</a>
			</div>
		</div>
	</nav>
</template>

<style scoped lang="scss">
	nav.mainNav {
		display:flex;
		justify-content: center;
		.svg-line {
			stroke:$black;
		}
		a {
			padding:0 0.5em;
			color:$black;
			&.router-link-active {
				text-decoration: none;
			}
			@media(hover:hover){
				&:hover {
					text-decoration: none;
					color: $accent;

					.svg-line {
						stroke:$accent;
					}
				}
			}
			&.home {
				display:none;
				&.notOnHome {
					display:inline-block;
				}
				vertical-align: baseline;
				svg {
					display:inline-block;
					@include xs {
						margin-top:0.25rem;
					}
					@include sm {
						margin-top:0.3rem;
					}
					@include md {
						margin-top:0.35rem;
					}
					@include lg {
						margin-top:0.55rem;
					}
					@include xl {
						margin-top:0.6rem;
					}
				}
			}
		}
	}
	.contactMenu {
		position: relative;
		cursor: pointer;
		padding: 0 0.5em;
		color: $black;
		@media(hover:hover){
			&:hover {
				text-decoration: none;
				color: $accent;
				.svg-line {
					stroke: $accent;
					transform: rotate(0deg);
				}
			}
		}
		span {
			display: inline-block;
		}
		svg {
			width:0.625rem;
			height:0.625rem;
			margin-left:0.25rem;
			display: inline-block;
			transition: transform 0.13s ease;
			transform: rotate(0deg);
		}
		&.open svg {
			transform: rotate(180deg);
		}
		.submenu {
			display: flex;
			flex-direction: column;
			text-align:left;
			position: absolute;
			width:100%;
			font-size:0.8em;
			top: 100%;
			padding:0.125rem 0.5rem 1.5rem 0.5rem;
			margin-left:0.5rem;
			box-sizing: border-box;
			left:0;
			background: $white;
			a {
				color: $black;
				text-decoration: none;
				padding:0.125rem 0;
			}
		}
	}
</style>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { useRoute } from 'vue-router';

const homeShowing = ref(false);
const contactOpen = ref(false);
const menuRef = ref(null);
const route = useRoute();

// Ensure homeShowing is only true if current path is not "/"
watch(() => route.path, (to) => {
	if(to != '/about') {
		homeShowing.value = to !== '/';
	}
}, { immediate: true });

function handleDocumentClick(event) {
  if (menuRef.value && !menuRef.value.contains(event.target)) {
    contactOpen.value = false;
  }
}

onMounted(() => {
  document.addEventListener('click', handleDocumentClick);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleDocumentClick);
});

function closeMenu() {
  contactOpen.value = false;
}
</script>