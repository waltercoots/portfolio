<template>
	<nav>
		<router-link to="/">Home</router-link>
		<router-link to="/about">About</router-link>
		<router-link to="/work">Work</router-link>
		<a href="https://blog.waltercoots.com/" target="_blank">Blog</a>
		<router-link to="/contact">Contact</router-link>
	</nav>
</template>

<style scoped lang="scss">
	nav {
		display:flex;
		justify-content: center;
		a {
			padding:0 0.5em;
			color:$black;
		}
	}
</style>