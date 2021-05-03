import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import HookMouse from './HookMouse';
=======
import HookMouse from '../HookCounter1/HookMouse';
>>>>>>> 155491cd2db02aec9d7e1f5093ac45a832298bc3

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


