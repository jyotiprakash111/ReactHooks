const redux = require("redux");
const createStore = redux.createStore;

const BUY_CAKES = "BUY_CAKES";
const BUY_CAKES2 = "BUY_CAKES2";

function buyCake() {
  return {
    type: BUY_CAKES,
    info: "First redux action",
  };
}

function buyCake2() {
  return {
    type: BUY_CAKES2,
    info: "First redux action",
  };
}

// Reducers - specify how the app's state changes in response to actions
// sent to the store function that accepts state and action as arguments,
// and returns the next state of the application

// (previousState,action) => newState

const initialState = {
  numofCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKES:
      return {
        ...state,
        numofCakes: state.numofCakes - 1,
      };
    case BUY_CAKES2:
      return {
        ...state,
        numofCakes: state.numofCakes + 2,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake2());
store.dispatch(buyCake2());
unsubscribe();
// Store -One store for the entire application

// Responsibilities -

// => Holds application state
// => Allows access to state via getState()
// => Allows state to be updated via dispatch(action)
// => Registers listeners via subscribe(listener)
// => Handles unregistering of listeners via the function returned by subscribe(listener)

// Reducers - Middleware allows for side effects to be run without blocking state updates.
//  We can run side effects (like API requests) in response to a specific action,
//  or in response to every action that is dispatched (like logging).
// There can be numerous middleware that an action runs through before ending in a reducer

// june , sept, march, december

// 20000*3/12/100
