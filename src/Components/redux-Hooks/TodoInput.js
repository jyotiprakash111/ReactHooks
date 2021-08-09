// import React from "react";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addTodoAction } from "./redux";
// import { v4 as uuidv4 } from "uuid";

// function TodoInput(props) {
//   const [todo, setTodo] = useState("");
//   const addTodo = useDispatch((todo) => addTodoAction(todo));

//   const onChange = (event) => {
//     setTodo(event.target.value);
//   };

//   const onSubmit = (e) => {
//     event.preventDefault();
//     if (todo.trim() === "") return;

//     addTodo({
//       id: uuidv4(),
//       name: todo,
//       complete: false,
//     });
//   };

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <div className='form-div'>
//           <input
//             type='text'
//             name='tood'
//             placeholder='add a todo'
//             value={todo}
//             onChange={onChange}
//           />
//           <button type='submit'>Add Todo</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default TodoInput;
