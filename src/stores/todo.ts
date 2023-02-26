import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { ITodo } from '@/interfaces'

export const useTodoStore = defineStore('todo', () => {
  const todos = ref([])

  // const doubleCount = computed(() => count.value * 2)
  function addTodo(todo: ITodo) {
    todos.value.push()
  }

  function removeTodo(id: string) {
    todos.value = todos.value.filter((todo: ITodo) => todo.id !== id)
  }

  return { addTodo, removeTodo }
})
