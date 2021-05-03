const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_CAKES = "BUY_CAKES";
const BUY_ICE_CREAM = "BUY_ICE_CREAM";

function buyCake() {
  return {
    type: BUY_CAKES,
    info: "First redux action",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICE_CREAM,
    info: "First redux action",
  };
}

// Reducers - specify how the app's state changes in response to actions
// sent to the store function that accepts state and action as arguments,
// and returns the next state of the application

// (previousState,action) => newState

const initialCakeState = {
  numofCakes: 10,
};
const initialIceCreamState = {
  numofIcecream: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKES:
      return {
        ...state,
        numofCakes: state.numofCakes - 1,
      };
    default:
      return state;
  }
};
const iceCeamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        numofIcecream: state.numofIcecream - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecreeam: iceCeamReducer,
});
const store = createStore(rootReducer);
console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
// Store -One store for the entire application

// Responsibilities -

// => Holds application state
// => Allows access to state via getState()
// => Allows state to be updated via dispatch(action)
// => Registers listeners via subscribe(listener)
// => Handles unregistering of listeners via the function returned by subscribe(listener)
