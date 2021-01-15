import React, { useState, useEffect } from 'react';
import HookMouse from '../HookCounter1/HookMouse';

function MouseCounter(props) {
    const [display, setDisplay] = useState(true);
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle Button</button>
            {display && <HookMouse />}
        </div>
    );
}

// const getData = async () => {
//     var y = await "Hello World";
//     console.log(y);
// }

// console.log(1);
// getData();
// console.log(2);


export default MouseCounter;


