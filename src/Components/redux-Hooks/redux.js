// import { createStore } from "redux";
// import { ActionCreators } from "redux-devtools-instrument";
// import { v4 as uuidv4 } from "uuid";

// const initialState = {
//   todos: [
//     {
//       id: uuidv4(),
//       name: "Go to gym",
//       complete: false,
//     },
//     {
//       id: uuidv4(),
//       name: "Do Fuck",
//       complete: true,
//     },
//   ],
// };

// export const store = createStore(
//   reducer,
//   initialState,
//   window.devToolsExtension && window.devToolsExtension()
// );

// function reducer(state, { type, plyload }) {
//   switch (type) {
//     case "ADD_TOD0":
//       return {
//         ...state,
//         todos: [...state.todos, payload],
//       };
//     case "TOGGLE_TODO":
//       return {
//         ...state,
//         todos: state.todos.map((todo) =>
//           todo.id === payload ? { ...todos, complete: !todos.complete } : todo
//         ),
//       };
//     case "DELETE_TODO":
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => todo.id !== payload),
//       };
//     default:
//       return state;
//   }
// }

// export const addTodoAction = (todo) => ({
//   type: "ADD_TODO",
//   payload: todo,
// });

// export const toggleTodoAction = (todoId) => ({
//   type: "TOGGLE_TODO",
//   payload: todoId,
// });

// export const deleteTOdoAction = (todoId = {
//   type: "DELETE_TODO",
//   payload: todoId,
// });
