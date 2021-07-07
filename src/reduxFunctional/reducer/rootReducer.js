const initialState = {
  counter: 0,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      console.log(action.type);
      return { counter: state.counter + 1 };
    case "DECREMENT":
      console.log(action.type);

      return { counter: state.counter - 1 };
    default:
      return state;
  }
}
export default rootReducer;
