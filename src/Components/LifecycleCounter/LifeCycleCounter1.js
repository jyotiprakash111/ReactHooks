import React, { useState, useEffect } from 'react';

function LifeCycleCounter1(props) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `You Clicked ${count}`
    })
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click {count} Times</button>
        </div>
    );
}

export default LifeCycleCounter1;