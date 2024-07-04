import { createSlice, nanoid } from "@reduxjs/toolkit";
//nano id generate unique ids

const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload, //payload is an object that contains id, email, password, text etc
      };
      state.todos.push(todo); //state me todo push kardega
    },

    /*state variable give the access of the current state i.e. we created initialState and when we change it then the 'state' 
        variable will give the access of that changed state. Action gives us the values like if we want to delete a todo
        then action will provide us the id of that todo.
        */
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => {
        todo.id !== action.payload;
      });
    },

    
  },
});

export const {addTodo, removeTodo} = todoSlice.actions //export all the reducers individually

export default todoSlice.reducer
