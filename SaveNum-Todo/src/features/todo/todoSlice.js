import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: []
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: nanoid(),
        name: action.payload.name,
        phone: action.payload.phone
      });
    },
     updatePhone: (state, action) => {
      const { id, phone } = action.payload;
      const todo = state.todos.find((t) => t.id === id);
      if (todo) {
        todo.phone = phone;
      }
    },
     removeTodo: (state, action) => {
      state.todos = state.todos.filter(
        (t) => t.id !== action.payload
      );
    },
  }
});

export const { addTodo,updatePhone, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
