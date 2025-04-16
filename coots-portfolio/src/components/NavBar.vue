<template>
	<nav class="mainNav">
		<router-link to="/" >About</router-link>
		<router-link to="/work">Work</router-link>
		<!-- <a href="https://blog.waltercoots.com/" target="_blank">Blog</a> -->
		<router-link to="/contact">Contact</router-link>
	</nav>
</template>

<style scoped lang="scss">
	nav.mainNav {
		display:flex;
		justify-content: center;
		a {
			padding:0 0.5em;
			color:$accent;
			&.router-link-active {
				color:$black;
			}
		}
	}
</style>