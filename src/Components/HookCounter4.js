import React, { useState } from 'react';

const HookCounter4 = () => {
    const [items, setitems] = useState([]);

    const addItem = () => {
        setitems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10 ) + 1
        }])
    }
    return (
        <div>
            <button onClick={addItem}>Add a number</button>
            <ul>
                {
                    items.map(data => (
                        <li key={data.id}>{data.value}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default HookCounter4;


// TODO: the use state hook let you add state to functional component
//  in classes the state is always an object
//  with the useState hook, the state does not have an object
//  The useState hook returns an array with 2 elements
//  the first element is the current value of the state, and the second element is a setter function
//  New statevalue depends on the previous state value ? You can pass a function to the setter function.
//  when dealing with object or arrays, always make sure to spread your state variable and then call the setter function.


