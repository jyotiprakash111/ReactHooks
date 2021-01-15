import React, { useEffect, useState } from 'react';

function HooksUseEffect(props) {
    const [count, setCount] = useState(0);

    // Example
    var sum = 0;
    function addThree() {
        sum = sum + 3;
    }

    // Only change code below this line
    function addFive() {
        sum = sum + 5
    }
    // Only change code above this line
    addThree();
    addFive();
    console.log(addFive());

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Times</button>
        </div>
    );
}

export default HooksUseEffect;