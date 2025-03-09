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
		mounted() {
			gridContainer = document.querySelector('.grid-container');
		},
		watch: {
			'$route' (to) {
				switch(to.matched[0].path) {
					case '/work':
						gridContainer.classList.remove('bg','contact');
						break;
					case '/contact':
						gridContainer.classList.add('bg','contact');
						break;
					default:
						gridContainer.classList.add('bg');
						gridContainer.classList.remove('contact');
						break;
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
			$bgWorkGrid: &;
			div.workthumb {
				&:after {
					/* pseudo-element covers the thumbs with solid gray */
					opacity:1;
				}				
				@at-root { 
					#{$bgWorkGrid}.contact div.workthumb {
						opacity:0;
						transition: transform 250ms ease-in-out, rotate 225ms ease-in-out, opacity 200ms ease-in-out;
					}
				}
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
					&:nth-child(11) { transform: translate(23.31%, 70.05%) scale(28.83%) rotate(5.1deg); }
					@at-root { 
						#{$bgWorkGrid}.contact div.workthumb {
							&:nth-child(1) { transform: translate(27.81%, 15.53%) scale(4.45%) rotate(56.31deg); }
							&:nth-child(2) { transform: translate(308.71%, -89.83%) scale(7.21%) rotate(-94.47deg); }
							&:nth-child(3) { transform: translate(-58.55%, -144.77%) scale(3.58%) rotate(69.24deg); }
							&:nth-child(4) { transform: translate(-45.85%, -267.04%) scale(5.06%) rotate(-0.99deg); }
							&:nth-child(5) { transform: translate(-43.79%, 464.41%) scale(4.45%) rotate(-72.54deg); }
							&:nth-child(6) { transform: translate(275.76%, -526.91%) scale(9.05%) rotate(-59.82deg); }
							&:nth-child(7) { transform: translate(286.84%, 311.08%) scale(5.29%) rotate(25.83deg); }
							&:nth-child(8) { transform: translate(310.79%, 271.38%) scale(1.69%) rotate(40.77deg); }
							&:nth-child(9) { transform: translate(29.08%, 220.10%) scale(3.83%) rotate(-57.51deg); }
							&:nth-child(10) { transform: translate(69.94%, 210.15%) scale(7.21%) rotate(15.3deg); }
							&:nth-child(11) { transform: translate(69.94%, 210.15%) scale(7.21%) rotate(15.3deg); }
						} 
					}					
				}
				@include sm {
					&:nth-child(1) { transform: translate(26.76%, -83.25%) scale(14.29%) rotate(17.4deg); }
					&:nth-child(2) { transform: translate(-2.82%, -61.84%) scale(27.38%) rotate(-14.04deg); }
					&:nth-child(3) { transform: translate(161.51%, 45.92%) scale(21.43%) rotate(9.27deg); }
					&:nth-child(4) { transform: translate(-9.87%, -60.25%) scale(51.19%) rotate(-25.22deg); }
					&:nth-child(5) { transform: translate(24.71%, -77.47%) scale(28.57%) rotate(40.82deg); }
					&:nth-child(6) { transform: translate(-222.85%, 211.10%) scale(24.40%) rotate(-21.03deg); }
					&:nth-child(7) { transform: translate(-153.20%, 206.54%) scale(28.57%) rotate(14.91deg); }
					&:nth-child(8) { transform: translate(201.88%, 136.84%) scale(23.40%) rotate(-7.71deg); }
					&:nth-child(9) { transform: translate(-96.45%, 171.36%) scale(12.26%) rotate(-29.5deg); }
					&:nth-child(10) { transform: translate(140.57%, 66.04%) scale(13.99%) rotate(27.32deg); }
					&:nth-child(11) { transform: translate(140.57%, 66.04%) scale(13.99%) rotate(27.32deg); }
					@at-root { 
						#{$bgWorkGrid}.contact div.workthumb {
							&:nth-child(1) { transform: translate(80.29%, -249.75%) scale(3.57%) rotate(52.2deg); }
							&:nth-child(2) { transform: translate(-8.45%, -185.52%) scale(6.85%) rotate(-42.12deg); }
							&:nth-child(3) { transform: translate(484.52%, 137.75%) scale(5.36%) rotate(27.81deg); }
							&:nth-child(4) { transform: translate(-29.61%, -180.75%) scale(12.80%) rotate(-75.66deg); }
							&:nth-child(5) { transform: translate(74.14%, -232.41%) scale(7.14%) rotate(122.46deg); }
							&:nth-child(6) { transform: translate(-668.54%, 633.30%) scale(6.10%) rotate(-63.09deg); }
							&:nth-child(7) { transform: translate(-459.59%, 619.61%) scale(7.14%) rotate(44.73deg); }
							&:nth-child(8) { transform: translate(605.64%, 410.52%) scale(5.85%) rotate(-23.13deg); }
							&:nth-child(9) { transform: translate(-289.34%, 514.09%) scale(3.06%) rotate(-88.5deg); }
							&:nth-child(10) { transform: translate(421.71%, 198.13%) scale(3.50%) rotate(81.96deg); }
							&:nth-child(11) { transform: translate(421.71%, 198.13%) scale(3.50%) rotate(81.96deg); }
						} 
					}					
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
					&:nth-child(11) { transform: translate(173.90%, 123.18%) scale(13.99%) rotate(27.32deg); }		
					@at-root { 
						#{$bgWorkGrid}.contact div.workthumb {
							&:nth-child(1) { transform: translate(80.29%, -249.75%) scale(3.57%) rotate(52.2deg); }
							&:nth-child(2) { transform: translate(-8.45%, -185.52%) scale(6.85%) rotate(-42.12deg); }
							&:nth-child(3) { transform: translate(155.95%, -162.25%) scale(5.36%) rotate(27.81deg); }
							&:nth-child(4) { transform: translate(256.11%, -109.32%) scale(12.80%) rotate(-75.66deg); }
							&:nth-child(5) { transform: translate(2.71%, -146.70%) scale(7.14%) rotate(122.46deg); }
							&:nth-child(6) { transform: translate(-125.68%, 533.30%) scale(9.52%) rotate(-63.09deg); }
							&:nth-child(7) { transform: translate(97.55%, 619.61%) scale(7.14%) rotate(44.73deg); }
							&:nth-child(8) { transform: translate(291.36%, 281.95%) scale(5.85%) rotate(-23.13deg); }
							&:nth-child(9) { transform: translate(-289.34%, 514.09%) scale(3.06%) rotate(-88.5deg); }
							&:nth-child(10) { transform: translate(521.71%, 369.55%) scale(3.50%) rotate(81.96deg); }
							&:nth-child(11) { transform: translate(521.71%, 369.55%) scale(3.50%) rotate(81.96deg); }
						} 
					}
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
					&:nth-child(11) { transform: translate(28.30%, 90.84%) scale(12.05%) rotate(-27.58deg); }
					@at-root { 
						#{$bgWorkGrid}.contact div.workthumb {
							&:nth-child(1) { transform: translate(26.64%, -55.21%) scale(4.13%) rotate(80.64deg); }
							&:nth-child(2) { transform: translate(-167.46%, 58.00%) scale(9.52%) rotate(49.77deg); }
							&:nth-child(3) { transform: translate(-349.29%, -86.34%) scale(4.24%) rotate(52.08deg); }
							&:nth-child(4) { transform: translate(345.59%, 331.62%) scale(8.48%) rotate(-35.1deg); }
							&:nth-child(5) { transform: translate(61.85%, 2.14%) scale(6.51%) rotate(74.22deg); }
							&:nth-child(6) { transform: translate(86.87%, -37.47%) scale(8.95%) rotate(28.35deg); }
							&:nth-child(7) { transform: translate(-0.82%, 260.56%) scale(4.52%) rotate(126.33deg); }
							&:nth-child(8) { transform: translate(551.25%, 263.69%) scale(6.03%) rotate(-124.17deg); }
							&:nth-child(9) { transform: translate(589.67%, -35.13%) scale(7.03%) rotate(-31.62deg); }
							&:nth-child(10) { transform: translate(84.90%, 272.52%) scale(3.01%) rotate(-82.74deg); }
							&:nth-child(11) { transform: translate(84.90%, 272.52%) scale(3.01%) rotate(-82.74deg); }
						} 
					}
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
			transition: transform 250ms ease-in-out, rotate 225ms ease-in-out;
			transform-origin: top left;
		}
	}
</style>