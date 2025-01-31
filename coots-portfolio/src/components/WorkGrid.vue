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
	<Transition name="explosion" mode="out-in">
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
	</Transition>
</template>

<style lang="scss">
	div.workgrid {
		display:flex;
		flex-wrap:wrap;
		justify-content: center;
		position: absolute;
		top:50%;
		left:50%;
		transform: scale(2,2) translate(-25%, -25%);
		z-index:-1;
	}
</style>