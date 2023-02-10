import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface Todo {
  id: number;
  content: string;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ content: action.payload, id: Date.now() });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export const selectTodos = (state: RootState) => state.todo.todos;
export default todoSlice.reducer;
