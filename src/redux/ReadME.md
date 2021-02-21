Three Core Concepts Contd

CakeShop Scenerio   redux   purpose

shop                store   Holds the state of your app

intention 
to BUY_CAKE         Action  Describes what happened

shopkeeper          Reducer Ties the store and actions together 


A store that Holds the state of your application.

An Action that  describes  the changes in the state of the application

A Reducer which actually carries the state transition depending on the action.



*First Principle*-

"The State of your application is stored in an object tree within a single store"

Maintain our application state in a single object which would be managed by the redux store.


##cakeShop-

lets assume we are tracking  the number of cakes on the shelf

{
    numberOfcakes: 10
}

*Second Principle*-

_The only way to change the state is to emit an action, an object describing what happend_

To update the  state of your app, you need to let redux know about that with an action Not allowed to directly update the state object.

**CakeShop**

Let the shopkeeper know about our action - BUY_CAKE
 
 {
     BUY_CAKE
 }

 *Third Principle*-

 _To Specify how the state tree is transfermed by actions, you write pure reducers_

 Reducer - {previousState, action} => newState

 <u>cakeShop<u/>
 Reducer is the shopkeeper

 const reducer = (state, action) =>{
     switch(action.type){
         case BUY_CAKE: return {
             numofCakes: state.numofCakes - 1
         }
     }
 }
