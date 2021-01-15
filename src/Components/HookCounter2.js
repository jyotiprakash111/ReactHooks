import React, { useState } from 'react';

function HooksCounter2(props) {
    const initialCounterTwo = 0
    const [count, setcount] = useState(initialCounterTwo)

    var incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setcount(prevCount => prevCount + 1)
        }
    }

    let data = true + true
    let data2 = false + false
    var biki = true + false
    var data3 = false - true
    var data4 = false
    // console.log({ data, data2, data3, data4, biki })

    // Example
    var firstName = "Ada";
    var lastLetterOfFirstName = firstName[firstName.length - 1];
    // console.log(lastLetterOfFirstName)
    // Setup
    var lastName = "Lovelace";
    var lastLetterOfLastName = lastName[lastName.length - 1];
    // console.log(lastLetterOfLastName)

    var myArray = [13, 67, 90]
    myArray[2] = 100
    // console.log(myArray);

    var arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [[10, 11, 12], 13, 14]
    ];
    var myData = arr[2][1]
    // console.log(myData);


    var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];
    var myData = myArray[2][1];
    // console.log(myData)

    return (
        <div>
            Total Count: {count}
            <div style={{ paddingLeft: "10px" }}>
                <button onClick={() => setcount(initialCounterTwo)}>reset</button>
                <button style={{ marginLeft: "2px" }} onClick={() => setcount(count + 1)}>Increment</button>
                <button style={{ marginLeft: "2px" }} onClick={() => setcount(count - 1)}>Decrement</button>
                <button style={{ marginLeft: "2px" }} onClick={incrementFive}>Increment Five 5</button>
            </div>
        </div>
    );
}

export default HooksCounter2;