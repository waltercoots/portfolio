<script>
export default {
	name: 'ProjectNav',
	emits: ['nextProject', 'prevProject', 'closeProject'],
	methods: {},
}
</script>

<template>
	<div class="projectNav">
		<button class="nav-button" @click="$emit('prevProject')">
			<svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0.5 7.49978L7.57107 0.428711V14.5708L0.5 7.49978Z" class="svg-fill"/>
			</svg>
		</button>
		<button class="nav-button" @click="$emit('closeProject')">
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
		<button class="nav-button" @click="$emit('nextProject')">
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
	align-items: center;
}
.nav-button {
	width:2rem;
	height:2rem;
	margin:0 1rem;
	background: $white;
	border-radius: 50%;
	text-align: center;
	border: none;
	cursor: pointer;
	position: relative;
	svg {
		position: relative;
		margin:0 auto 0;
		.svg-fill {
			fill: $black;
		}
	}
	&:nth-child(1){
		svg {
			right:1px;
		}
	}
	&:nth-child(3){
		svg {
			left:1px;
		}
	}
	&:nth-child(2){
		width:3rem;
		height:3rem;
	}
	@media (hover:hover) {
		&:hover {
			svg {
				.svg-fill {
					fill: $accent;
				}
			}
		}
	}
	&:focus {
		svg {
			.svg-fill {
				fill: $accent;
			}
		}
	}
}
</style>