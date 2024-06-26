import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [
      { id: "1", title: "first todo", completed: false },
      { id: "2", title: "second todo", completed: false },
    ],
  },
  reducers: {
    remove(state, action){
        console.log(action);
        state.todos = state.todos.filter((todo) => todo.id !== action.payload )
    }
  },
});

export default todosSlice.reducer;
export const todoActions = todosSlice.actions;