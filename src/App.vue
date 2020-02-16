<template>
    <div id="app">
		<div class="container my-4">
			<h1>Todo's</h1>
			<todo-list class="mt-5"></todo-list>
		</div>
    </div>
</template>

<script>
import TodoList from './components/Todo-list.vue';

export default {
	name: "App",
	components: {
		TodoList
	}
};
</script>

<style lang="scss">
</style>
