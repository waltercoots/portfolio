<script>
import WorkThumb from '@/components/WorkThumb.vue';
import { watch, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default {
  components: {
    WorkThumb
  },
  setup() {
    const route = useRoute();
    const workgrid = ref(null); // Reference to the element

    // Function to update class based on route
    const updateClass = (to) => {
      if (workgrid.value) { // Ensure the element exists
        if (to.path === "/") {
          workgrid.value.classList.add("exploded");
        } else if (to.path === "/work") {
          workgrid.value.classList.remove("exploded");
        }
      }
    };

    // Watch route changes and apply the class
    watch(route, updateClass, { immediate: true });

    // Ensure the element exists before modifying it
    onMounted(() => {
      updateClass(route);
    });

    return { workgrid };
  }
}
</script>

<template>
	<div class="workgrid" ref="workgrid">
		<WorkThumb />
		<WorkThumb />
		<WorkThumb />
		<WorkThumb />
		<WorkThumb />
		<WorkThumb />
		<WorkThumb />
		<WorkThumb />
		<WorkThumb />
		<WorkThumb />
	</div>
</template>

<style scoped lang="scss">
	div.workgrid {
		display:flex;
		flex-wrap:wrap;
		position: absolute;
		top:50%;
		left:50%;
		transform: translateY(-50%) translateX(-50%);
		z-index:-1;

		&.exploded {
			div {
				transition: all 1200ms;
				&:nth-child(1) {
					transform: rotate(-17.36deg) scale(.17, .17);
				}
				&:nth-child(2) {
					transform: rotate(27.58deg) scale(.12, .12);
				}
				&:nth-child(3) {
					transform: rotate(41.39deg) scale(.24, .24);
				}
				&:nth-child(4) {
					transform: rotate(-26.82deg) scale(.17, .17);
				}
				&:nth-child(5) {
					transform: rotate(10.54deg) scale(.28, .28);
				}
				&:nth-child(6) {
					transform: rotate(11.7deg) 	scale(.34, .34);
				}
				&:nth-child(7) {
					transform: rotate(-8.6deg) scale(.48, .48);
				}
				&:nth-child(8) {
					transform: rotate(-33.8deg) scale(.26, .26);
				}
				&:nth-child(9) {
					transform: rotate(-9.45deg) scale(.37, .37);
				}
				&:nth-child(10) {
					transform: rotate(-16.59deg) scale(.48, .48);
				}
			}
		}
	}
</style>