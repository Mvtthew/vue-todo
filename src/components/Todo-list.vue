<template>
	<div class="todo-list">
		<ul class="list-group">
			<li class="list-group-item d-flex" v-for="(todo, index) in todoList" :key="'todo_' + index">
				<span :class="{'done': todo.done}">{{index + 1}}. {{todo.name}}</span>
				<button class="btn btn-outline-success btn-sm ml-auto" @click="checkDone(index)">
					<span v-if="todo.done == false">DONE</span>
					<span v-if="todo.done">UNDONE</span>
				</button>
				<button class="btn btn-outline-danger btn-sm ml-2" @click="deleteTodo(index)">DELETE</button>
			</li>
		</ul>
		<ul class="list-group">
			<li class="list-group-item mt-2 d-flex">
				<input type="text" class="form-control mr-2" v-model="newTodoName" @keypress.enter="addTodo()" />
				<button class="btn btn-success" @click="addTodo()">Add</button>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			todoList: [],
			newTodoName: ""
		};
	},
	created() {
		this.init();
	},
	methods: {
		addTodo() {
			if (this.newTodoName) {
				this.todoList.push({
					name: this.newTodoName,
					done: false
				});
				this.newTodoName = "";
				this.save();
			}
		},
		checkDone(index) {
			this.todoList[index].done = !this.todoList[index].done;
			this.save();
		},
		deleteTodo(index) {
			this.todoList.splice(index, 1);
			this.save();
		},

		init() {
			if (localStorage.getItem("todoList")) {
				this.todoList = JSON.parse(localStorage.getItem("todoList"));
			} else {
				localStorage.setItem("todoList", JSON.stringify(this.todoList));
			}
		},
		save() {
			localStorage.setItem("todoList", JSON.stringify(this.todoList));
		}
	}
};
</script>

<style lang="scss" scoped>
.done {
	text-decoration: line-through;
}
</style>