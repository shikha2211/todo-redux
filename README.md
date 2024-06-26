# Steps to create a redux store

1. Install redux toolkit
2. Create a store 
3. In the root file, include the Provider component with store as a parameter
4. Create .jsx file (Todos.jsx) so that all the todos can be listed over there.
5. To create a todolist, create a slice file (todos.js) and with CreateSlice function add the todolist there alongith name , initialState and now include this as a reducer in the file where store is created.
6. In Todos.jsx, fetch the state using UseSelector hook. And then map all the todos in the todo list. This will print all the todos.
7. For removing the todos, again go to todos.js file, and include an action with the name remove inside the reducer. Export the action so that Todos.jsx can use it to remove the ids by using useDispatch hook.
