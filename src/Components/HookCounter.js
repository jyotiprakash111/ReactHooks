import React, { useState, Fragment, useEffect } from 'react';

function HookCounter(props) {
    const initialCounter = 0
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        document.title = `You clicked ${count} times`
        console.log("Use Effect updating Docs")
        document.title = `You Clicked ${count} Times`
    }, [count])
    return (
        <Fragment>
            <div>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
                <button onClick={() => setCount(count + 1)}>Count {count}</button>
                {/* <button onClick={() => setCount(count - 1)}>Count {count}</button> */}
                <button onClick={() => setCount(initialCounter)}>Reset</button>
            </div>
        </Fragment>
    );
}

export default HookCounter;

// Initial Hooks Example