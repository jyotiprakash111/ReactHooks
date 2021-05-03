import React, { useState, Fragment, useEffect } from 'react';

function HookCounter(props) {
    const initialCounter = 0
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        document.title = `You clicked ${count} times`
        console.log("Use Effect updating Docs")
        document.title = `You Clicked ${count} Times`
<<<<<<< HEAD
=======
    // },)
>>>>>>> 155491cd2db02aec9d7e1f5093ac45a832298bc3
    }, [count])
    return (
        <Fragment>
            <div>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
                <button onClick={() => setCount(count + 1)}>Count {count}</button>
<<<<<<< HEAD
                {/* <button onClick={() => setCount(count - 1)}>Count {count}</button> */}
=======
>>>>>>> 155491cd2db02aec9d7e1f5093ac45a832298bc3
                <button onClick={() => setCount(initialCounter)}>Reset</button>
            </div>
        </Fragment>
    );
}

export default HookCounter;

// Initial Hooks Example