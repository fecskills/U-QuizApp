<script setup>
import { ref, reactive, computed } from 'vue'

const newTodo = ref({
    id: null,
    content: "",
    completed: false,
})

const errorMessage = ref("")

const addTodo = () => {
    if (newTodo.value.content.length < 4) {
        return errorMessage.value = "Note can only be 10 characters";
    }
    todos.push({
        id: Math.floor(Math.random() * 100000),
        content: newTodo.value.content,
        completed: false,
    })

    console.log(todos)

}

const todos = reactive([
    {
        id: 1,
        content: "Todo 1 content",
        completed: false,
    },
    {
        id: 2,
        content: "Todo 2 content",
        completed: false,
    },
    {
        id: 3,
        content: "Todo 3 content",
        completed: false,
    },
])

const filteredTodo = ref(todos)

const filtertodos = (filter) => {
    if (filter === "all") {
        filteredTodo.value = todos
    } else if (filter === "completed") {
        filteredTodo.value = todos.filter((todo) => todo.completed)
    } else if (filter === "todo") {
        filteredTodo.value = todos.filter((todo) => !todo.completed)
    }
}
filtertodos("all")

const setfilter = (filter) => {
    filtertodos(filter)
}
</script>

<template>
    <section class="todoApp">
        <div>
            <h1 class="text-center mt-3 fw-bold">Track Your Todo</h1>
            <div class="container">
                <div class="row">
                    <div class="col-md-6 mx-auto">
                        <div class="d-flex flex-column">
                            <div class="d-flex">
                                <input v-model.trim="newTodo.content" @keyup.enter="addTodo" type="text"
                                class="form-control me-2 input-b" placeholder="Add new todo">
                                <button @click="addTodo" class="btn btn-primary">Add</button>
                            </div>
                            <p class="text-danger mb-0 fw-bold">{{errorMessage}}</p>
                        </div>

                        <div class="mt-2 d-flex">
                            <span @click="setfilter('all')"
                                class=" cursor-pointer badge rounded-pill text-bg-primary me-2">All</span>
                            <span @click="setfilter('completed')"
                                class=" cursor-pointer badge rounded-pill text-bg-danger me-2">Completed</span>
                            <span @click="setfilter('todo')"
                                class=" cursor-pointer badge rounded-pill text-bg-warning me-2">To do</span>
                        </div>

                        <div class="d-flex flex-column mt-4">
                            <h4 class="fw-bold mb-0">Todo list</h4>
                            <div v-for="(todo, i) in filteredTodo" :key="todo.id" class="mt-2 d-flex mb-0">
                                <input v-model="todos[i].completed" type="checkbox" name="" class="me-3 cursor-pointer">
                                <p :class="{ 'strikethrough': todo.completed }" class="fs-18 mb-0">{{ todo.content }}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>
<style>
.cursor-pointer {
    cursor: pointer;
}

.fs-18 {
    font-size: 18px;
    font-weight: 600;
}

.input-b:focus-within {
    outline: none;
    box-shadow: none;
    border: 2px solid #95aabe;
}

.strikethrough {
    text-decoration: line-through;
}</style>