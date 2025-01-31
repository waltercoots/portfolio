<script>
import WorkThumb from '@/components/WorkThumb.vue';
export default {
  name: 'WorkGrid',
  components: {
    WorkThumb
  },
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

<style lang="scss" scoped>
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