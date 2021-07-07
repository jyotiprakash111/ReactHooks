// summary;

// we can create a component by extendig the pure component class
// A pure component imppliments the shouldComponentUpdate lifeCycle method by
// performing a shallow comparaision on the state and props of the component

// if there is no difference, the component is not re-rendered - performance boost

// it is a good idea to ensure that all the children components are aslo pure to avoid unexpected behaviour

// never mutate the state  Always return new object that reflects the new state.

//  Regular component - a regular component does not impliment the shouldcomponentUpdate
//  method , it always returns true by default

// A pure component on the otherhand  impliments shouldComponentUpdate 
// with a shallow props and state comparaision 

// ---------------------Shallow comparaision(SC)-------------------------------------
// Primitives types:-
// a (SC) b returns true if a and b have the same value and are of same type
// Ex: - string  `Viswas (SC) string Viswas` returns true
// Complex Types:-
// in case of array and objects 
// a (SC) b returns true if a and b reference the exact same object

// Ex:- var a = [1,2,3]
     // var b = [1,2,3]
    //  var  c = a ;

    // var ab_eq (a === b)  -> fasle
    // var ac_eq (a === c)  -> true


import React from 'react';
import ParentComp from './parentComp';
function App(props) {
    return (
        <div>
            <ParentComp />
        </div>
    );
}

export default App;