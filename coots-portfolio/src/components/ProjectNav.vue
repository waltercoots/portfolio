<script>
export default {
	name: 'ProjectNav',
	methods: {
		closeProject() {
			this.$router.push('/work');
		}
	}
}
</script>

<template>
	<div class="projectNav">
		<button class="nav-button">
			<svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0.5 7.49978L7.57107 0.428711V14.5708L0.5 7.49978Z" class="svg-fill"/>
			</svg>
		</button>
		<button class="nav-button" @click="closeProject">
			<svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect x="0.571289" width="5" height="5" class="svg-fill"/>
				<rect x="8.57129" width="5" height="5" class="svg-fill"/>
				<rect x="16.5713" width="5" height="5" class="svg-fill"/>
				<rect x="0.571289" y="8" width="5" height="5" class="svg-fill"/>
				<rect x="8.57129" y="8" width="5" height="5" class="svg-fill"/>
				<rect x="16.5713" y="8" width="5" height="5" class="svg-fill"/>
				<rect x="0.571289" y="16" width="5" height="5" class="svg-fill"/>
				<rect x="8.57129" y="16" width="5" height="5" class="svg-fill"/>
				<rect x="16.5713" y="16" width="5" height="5" class="svg-fill"/>
			</svg>
		</button>
		<button class="nav-button">
			<svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M7.64236 7.49978L0.571289 0.428711V14.5708L7.64236 7.49978Z" class="svg-fill"/>
			</svg>
		</button>
	</div>
</template>

<style lang="scss" scoped>
.projectNav {
	display:flex;
	justify-content: center;
}
.nav-button {
	width:1.5rem;
	height:1.5rem;
	margin:0 0.5rem;
	background: none;
	border: none;
	cursor: pointer;
	svg {
		margin:0 auto 0;
		.svg-fill {
			fill: $black;
		}
	}
	&:hover, &:focus {
		svg {
			.svg-fill {
				fill: $accent;
			}
		}
	}
}
</style>