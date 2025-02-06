<script>
	import WorkThumb from '@/components/WorkThumb.vue';
	import projects from '@/assets/work.json';
	let workgrid; // Reference to the grid
	let thumbs; // Reference to the thumbnails
	let isAnimating = false; // Flag to disable event listeners during animation

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
					if (workgrid.classList.contains('exploded')) {
						scatterThumbs();
					} else {
						resetThumbs();
					}
				}
				else
				{
					if(bool===true)
					{
						workgrid.classList.add('exploded');
						scatterThumbs();
					}
					else
					{
						workgrid.classList.remove('exploded');
						resetThumbs();
					}
				}
			}
		},
		mounted() {
			workgrid = document.querySelector('.workgrid');
			thumbs = document.querySelectorAll('.workthumb');
			setUpEvents();
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


	/* 
		Scatters the thumbnails in a circular pattern around the center of the grid
	*/ 
	const scatterThumbs = () => {
		isAnimating = true; // Disable mousemove

		const gridRect = workgrid.getBoundingClientRect();

		thumbs.forEach((thumb, index) => {
			const angle = (index / thumbs.length) * Math.PI * 2;
			const radius = Math.random() * (gridRect.width / 1.75) + (gridRect.width / 2.25);

			const xOffset = Math.cos(angle) * radius;
			const yOffset = Math.sin(angle) * radius;

			const rotation = (Math.random() * 25 - 30).toFixed(2);
			const scale = (Math.random() * 0.25 + 0.35).toFixed(2);

			thumb.style.transform = `translate(${xOffset}px, ${yOffset}px) rotate(${rotation}deg) scale(${scale})`;
		});
	};

	/* 
		Resets the thumbnails to their original positions
	*/ 
	const resetThumbs = () => {
		isAnimating = true; // Disable mousemove
		thumbs.forEach((thumb) => {
			thumb.style.transform = 'translate(0, 0) rotate(0deg) scale(1)';
		});
	};

	const setUpEvents = () => {
		/*
			Listen for the end of the transition on each thumbnail
		*/
		thumbs.forEach((thumb) => {
			thumb.addEventListener('transitionend', () => {
				isAnimating = false; // Re-enable mousemove once animation finishes
			});
		});
	
		/*
			Rotates the grid slightly based on the user's cursor position
		*/
		document.addEventListener('mousemove', (e) => {
			if (isAnimating) return; // Prevent updates during animation
	
			const { innerWidth, innerHeight } = window;
			const x = e.clientX - innerWidth / 2;
			const y = e.clientY - innerHeight / 2;
	
			const xRotation = (y / innerHeight) * 10;
			const yRotation = -(x / innerWidth) * 10;
	
			workgrid.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg) translate(-50%,-50%)`;
	
			thumbs.forEach((thumb) => {
				const existingTransform = thumb.style.transform || '';
				const translateMatch = existingTransform.match(/translate\([^)]*\)/g) || ['translate(0, 0)'];
				const rotateMatch = existingTransform.match(/rotate\([^)]*\)/g) || ['rotate(0)'];
				const scaleMatch = existingTransform.match(/scale\([^)]*\)/g) || ['scale(1)'];
	
				thumb.style.transform = `${translateMatch[0]} ${scaleMatch[0]} ${rotateMatch[0]}`;
			});
		});
	}
</script>

<template>
	<div class="workgrid">
		<WorkThumb v-for="(item, index) in jsonData.projects" v-bind:project="item" v-bind:key="index" />
	</div>
</template>

<style lang="scss" scoped>
	template {
		z-index:1;
	}
	div.workgrid {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		z-index: 1;
		max-width: 50rem;
		width:100%;
		transform-style: preserve-3d;
		position:absolute;
		left:50%;
		top:50%;
		transform:translate(-50%,-50%);

		&.bg {
			z-index: -2;
			pointer-events: none;
		}
	}

	div.workgrid.exploded {
      div.workthumb {
		transition: transform 1.5s ease-out, left 1.5s ease-out, top 1.5s ease-out;
		transition-timing-function:cubic-bezier(0, 0.79, 0.43, 0.99);
      }
    }	
</style>