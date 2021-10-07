import React, { useReducer, useState } from "react";

// multiple action call using useReducer
const ReducerTutorial = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
          console.log("INCREMENT");
        return {
          count: state.count + 1,
          showText: state.showText,
        };
      case "toggleShowtext":
        return { count: state.count, showText: !state.showText };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowtext" });
        }}
      >
        Click here
      </button>
      {state.showText && <p>this is a text</p>}
    </div>
  );
};

export default ReducerTutorial;

// multiple action call
// const ReducerTutorial = () => {

//   const [count, setCount] = useState(0);
//   const [showText, setshowText] = useState(true);
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//           setshowText(!showText)
//         }}
//       >Click here</button>
//       {showText && <p>this is a text</p>}
//     </div>
//   );
// };

// export default ReducerTutorial;
