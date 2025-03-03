<script>
	import WorkThumb from '@/components/WorkThumb.vue';
	import projects from '@/assets/work.json';
	let gridContainer; // Reference to the grid

	export default {
		name: 'WorkGrid',
		components: {
			WorkThumb
		},
		data() {
			return {
				jsonData: projects
			}
		},
		methods: {
			toggleExplosion	(bool) {
				if(bool===undefined) 
				{
					gridContainer.classList.toggle('bg');
				}
				else
				{
					if(bool===true)
					{
						gridContainer.classList.add('bg');
					}
					else
					{
						gridContainer.classList.remove('bg');
					}
				}
			}
		},
		mounted() {
			gridContainer = document.querySelector('.grid-container');
		},
		watch: {
			'$route' (to) {
				if (to.path === '/work') {
					this.toggleExplosion(false);
				}
				if(to.path === '/' || to.path === '/contact') {
					this.toggleExplosion(true);
				}
			}
		}
	}
</script>

<template>
	<div class="grid-container">
		<div class="workgrid">
			<WorkThumb v-for="(item, index) in jsonData.projects" v-bind:project="item" v-bind:key="index" />
		</div>
	</div>
</template>

<style lang="scss">
	div.grid-container {
		position:absolute;
		top:0;
		left:0;
		overflow:auto;
		width:100vw;
		height:100vh;
		z-index:1;
		display:flex;
		align-items: center; // vertical centering
		align-content:center; // only works with more than one line of content
		justify-content: center;

		/*
		For some reason, align-items:center has issues with scrolling
		when items are taller than the viewport, so we're doing media queries
		to set align-items to flex-start when the viewport is too short
		*/

		@include xs {
			align-items: flex-start;
		}
		@include sm {
			align-items:center;
			@media (max-height: 770px) { 
				align-items:flex-start;
			}
		}
		@include md {
			align-items:center;
			@media (max-height: 554px) { 
				align-items:flex-start;
			} 			
		}
		@include lg {
			align-items:center;
			@media (max-height: 370px) { 
				align-items:flex-start;
			} 
		}
		@include xl {
			align-items:center;
			@media (max-height: 500px) { 
				align-items:flex-start;
			} 
		}


		&.bg {
			/* Applied when the grid is shown as a background element */
			overflow:hidden;
			z-index: -2;
			pointer-events: none;
			div.workgrid div.workthumb {
				&:after {
					opacity:1;
				}
			}
			div.workthumb {
				transition: transform 1000ms ease-out, rotate 1000ms ease-out;
				transition-timing-function:cubic-bezier(0, 0.79, 0.43, 0.99);
				@include xs {
					&:nth-child(1) { transform: translate(9.27%, 5.18%) scale(17.79%) rotate(18.77deg); }
					&:nth-child(2) { transform: translate(102.90%, -29.94%) scale(28.83%) rotate(-31.49deg); }
					&:nth-child(3) { transform: translate(-19.52%, -48.26%) scale(14.32%) rotate(23.08deg); }
					&:nth-child(4) { transform: translate(-15.28%, -89.01%) scale(20.25%) rotate(-0.33deg); }
					&:nth-child(5) { transform: translate(-14.60%, 154.80%) scale(17.79%) rotate(-24.18deg); }
					&:nth-child(6) { transform: translate(91.92%, -175.64%) scale(36.20%) rotate(-19.94deg); }
					&:nth-child(7) { transform: translate(95.61%, 103.69%) scale(21.18%) rotate(8.61deg); }
					&:nth-child(8) { transform: translate(103.60%, 90.46%) scale(6.75%) rotate(13.59deg); }
					&:nth-child(9) { transform: translate(9.69%, 73.37%) scale(15.34%) rotate(-19.17deg); }
					&:nth-child(10) { transform: translate(23.31%, 70.05%) scale(28.83%) rotate(5.1deg); }
				}
				@include sm {
					&:nth-child(1) { transform: translate(22.83%, -59.84%) scale(15.94%) rotate(37deg); }
					&:nth-child(2) { transform: translate(-121.98%, 5.56%) scale(63.10%) rotate(16.59deg); }
					&:nth-child(3) { transform: translate(-122.17%, -78.04%) scale(22.62%) rotate(17.36deg); }
					&:nth-child(4) { transform: translate(138.17%, 40.10%) scale(45.24%) rotate(11.7deg); }
					&:nth-child(5) { transform: translate(-2.15%, -82.43%) scale(65.48%) rotate(8.6deg); }
					&:nth-child(6) { transform: translate(6.76%, 8.89%) scale(47.62%) rotate(9.45deg); }
					&:nth-child(7) { transform: translate(-19.36%, 126.74%) scale(35.12%) rotate(33.8deg); }
					&:nth-child(8) { transform: translate(188.40%, 117.52%) scale(32.14%) rotate(-41.39deg); }
					&:nth-child(9) { transform: translate(200.46%, 5.98%) scale(37.50%) rotate(-10.54deg); }
					&:nth-child(10) { transform: translate(49.20%, 138.36%) scale(16.07%) rotate(27.58deg); }
				}
				@include md {
					&:nth-child(1) { transform: translate(26.76%, -83.25%) scale(14.29%) rotate(17.4deg); }
					&:nth-child(2) { transform: translate(-2.82%, -61.84%) scale(27.38%) rotate(-14.04deg); }
					&:nth-child(3) { transform: translate(51.98%, -54.08%) scale(21.43%) rotate(9.27deg); }
					&:nth-child(4) { transform: translate(85.37%, -36.44%) scale(51.19%) rotate(-25.22deg); }
					&:nth-child(5) { transform: translate(0.90%, -48.90%) scale(28.57%) rotate(40.82deg); }
					&:nth-child(6) { transform: translate(-41.89%, 177.77%) scale(38.10%) rotate(-21.03deg); }
					&:nth-child(7) { transform: translate(32.52%, 206.54%) scale(28.57%) rotate(14.91deg); }
					&:nth-child(8) { transform: translate(97.12%, 93.98%) scale(23.40%) rotate(-7.71deg); }
					&:nth-child(9) { transform: translate(-96.45%, 171.36%) scale(12.26%) rotate(-29.5deg); }
					&:nth-child(10) { transform: translate(173.90%, 123.18%) scale(13.99%) rotate(27.32deg); }
				}
				@include lg {
					&:nth-child(1) { transform: translate(8.88%, -18.40%) scale(16.52%) rotate(26.88deg); }
					&:nth-child(2) { transform: translate(-55.82%, 19.33%) scale(38.07%) rotate(16.59deg); }
					&:nth-child(3) { transform: translate(-116.43%, -28.78%) scale(16.96%) rotate(17.36deg); }
					&:nth-child(4) { transform: translate(115.20%, 110.54%) scale(33.93%) rotate(-11.7deg); }
					&:nth-child(5) { transform: translate(20.62%, 0.71%) scale(26.05%) rotate(24.74deg); }
					&:nth-child(6) { transform: translate(28.96%, -12.49%) scale(35.81%) rotate(9.45deg); }
					&:nth-child(7) { transform: translate(-0.27%, 86.85%) scale(18.09%) rotate(42.11deg); }
					&:nth-child(8) { transform: translate(183.75%, 87.90%) scale(24.11%) rotate(-41.39deg); }
					&:nth-child(9) { transform: translate(196.56%, -11.71%) scale(28.13%) rotate(-10.54deg); }
					&:nth-child(10) { transform: translate(28.30%, 90.84%) scale(12.05%) rotate(-27.58deg); }
				}
			}
		}
	}
	div.workgrid {
		display: flex;
		flex-wrap: wrap;
		z-index: 1;
		justify-content:center;
		box-sizing:border-box;

		@include xs {
			width: 100%;
		}
		@include sm {
			width: 100%;
		}
		@include md {
			width: 48rem;
		}
		@include lg {
			width:61.5rem;
		}
		@include xl {
			width:80rem;
		}

		div.workthumb {
			/* defaults to animate to / from when the below is added / removed */
			rotate:0deg;
			transform: scale(1) translate(0,0);
			transition: transform 1000ms ease-out, rotate 1000ms ease-out;
			transform-origin: top left;
		}
	}
</style>