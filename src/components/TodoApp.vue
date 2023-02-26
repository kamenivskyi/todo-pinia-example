<template>
  <Input
    v-model:value="field"
    class="input"
    @keyup.enter="handleAddTodo"
    placeholder="Type name of todo"
  />

  <Typography>Done: {{ store.doneTodosCount }}</Typography>
  <Typography>Important: {{ store.importantTodosCount }}</Typography>
  <Typography>Active: {{ store.activeTodosCount }}</Typography>
  <List bordered :data-source="store.todos">
    <template #renderItem="{ item }">
      <ListItem>
        <div>
          <CheckOutlined class="icon" @click="store.toggleDone(item.id)" title="Toggle done" />
          <ExclamationOutlined
            color="red"
            @click="store.toggleImportant(item.id)"
            title="Toggle important"
          />
        </div>
        <Typography :class="{ 'line-through': item.done, 'text-bold': item.important }">{{
          item.text
        }}</Typography>
        <CloseCircleOutlined @click="store.removeTodo(item.id)"
      /></ListItem>
    </template>
  </List>
</template>

<script setup lang="ts">
import { Input, List, ListItem, Typography } from 'ant-design-vue';
import { ref } from 'vue';
import { useTodoStore } from '@/stores/todo';
import { v4 as uuidv4 } from 'uuid';
import CloseCircleOutlined from '@ant-design/icons-vue/lib/icons/CloseCircleOutlined';
import CheckOutlined from '@ant-design/icons-vue/lib/icons/CheckOutlined';
import ExclamationOutlined from '@ant-design/icons-vue/lib/icons/ExclamationOutlined';

const field = ref('');
const store = useTodoStore();

function createTodo(text: string) {
  return { text, id: uuidv4(), done: false, important: false };
}

function handleAddTodo() {
  const todo = createTodo(field.value);
  store.addTodo(todo);

  field.value = '';
}
</script>

<style scoped>
.input {
  margin: 15px 0;
}
.icon {
  margin-right: 10px;
}
.line-through {
  text-decoration: line-through;
}
.text-bold {
  font-weight: 700;
}
</style>
