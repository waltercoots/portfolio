<template>
	<nav class="mainNav">
		<!-- <router-link to="/" >Home</router-link> -->
		<router-link to="/work">Work</router-link>
		<router-link to="/about">About</router-link>
		<a href="/resume.pdf" download="walter-coots-résumé">Résumé</a>
		<!-- <a href="https://blog.waltercoots.com/" target="_blank">Blog</a> -->
		<div class="contactMenu" :class="{ open: contactOpen }" @click="contactOpen = !contactOpen">
			Contact
			<div v-if="contactOpen" class="submenu">
				<a href="mailto:walter@waltercoots.com">Email</a>
				<a href="sms:5129657567">Text</a>
				<a href="tel:5129657567">Call</a>
				<a href="http://linkedin.com/in/waltercoots/" target="_blank">In</a>
			</div>
		</div>
	</nav>
</template>

<style scoped lang="scss">
	nav.mainNav {
		display:flex;
		justify-content: center;
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
			}
		}
		&::after {
			content: '';
			display: inline-block;
			width: 0.625rem;
			height: 0.625rem;
			background: url('@/assets/norgie.svg') no-repeat center;
			background-size: contain;
			transform: rotate(0deg);
			transition: transform 0.13s ease;
		}
		&.open::after {
			transform: rotate(180deg);
		}
		.submenu {
			display: flex;
			flex-direction: row;
			text-align:right;
			position: absolute;
			font-size:0.8em;
			top: 100%;
			right:0;
			background: $white;
			a {
				color: $black;
				text-decoration: none;
			}
		}
	}
</style>

<script setup>
import { ref } from 'vue';
const contactOpen = ref(false);
</script>