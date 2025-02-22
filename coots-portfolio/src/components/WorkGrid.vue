<script>
	import WorkThumb from '@/components/WorkThumb.vue';
	import projects from '@/assets/work.json';
	let workgrid; // Reference to the grid

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
					workgrid.classList.toggle('exploded');
				}
				else
				{
					if(bool===true)
					{
						workgrid.classList.add('exploded');
					}
					else
					{
						workgrid.classList.remove('exploded');
					}
				}
			}
		},
		mounted() {
			workgrid = document.querySelector('.workgrid');
		},
		watch: {
			'$route' (to) {
				if (to.path === '/work' && workgrid.classList.contains('bg')) {
					this.toggleExplosion(false);
				}
				if(to.path === '/' && workgrid.classList.contains('bg')) {
					this.toggleExplosion(true);
				}
			}
		}
	}

</script>

<template>
	<div class="workgrid">
		<WorkThumb v-for="(item, index) in jsonData.projects" v-bind:project="item" v-bind:key="index" />
	</div>
</template>

<style lang="scss">
	div.workgrid {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-content:space-between;
		z-index: 1;
		width:80rem;
		height:30.5rem;
		transform-style: preserve-3d;
		position:absolute;
		left:50%;
		top:50%;
		transform:translate(-50%,-50%);

		&.bg {
			z-index: -2;
			pointer-events: none;
			div.workthumb {
				div.imageWrapper {
					opacity:0;
				}
			}
		}
		div.workthumb {
			/* defaults to animate to / from when the below is added / removed */
			rotate:0deg;
			transform: scale(1) translate(0,0);
			transition: transform 1000ms ease-out, rotate 1000ms ease-out;
			transform-origin: top left;
		}
		&.exploded {
			div.workthumb {
				transition: transform 1000ms ease-out, rotate 1000ms ease-out;
				transition-delay: 1000ms;
				transition-timing-function:cubic-bezier(0, 0.79, 0.43, 0.99);
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

</style>