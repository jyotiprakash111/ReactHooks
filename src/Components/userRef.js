import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";

function UserRef(props) {
  const [myNum, setmyNum] = useState(0);
  const inputOne = useRef();
  const inputTwo = useRef();

  const getnumBox = () => {
    console.log("Hello");
    console.log(inputOne.current);
    inputOne.current.style.width = "400px";
  };
  const getTextBox = () => {
    console.log("World");
    console.log(inputTwo.current);
    inputTwo.current.style.width = "400px";

  };
  return (
    <>
      <h2>LCO</h2>
      <input
        ref={inputOne}
        type='number'
        style={{ width: "100px" }}
        value={myNum}
        onChange={(e) => setmyNum(e.target.value)}
      />
      <input
        type='text'
        value={myNum}
        onChange={(e) => setmyNum(e.target.value)}
      />
      <h3>Value is :{myNum}</h3>
      <button onClick={() => getnumBox()}>Rupees</button>
      <button onClick={() => getTextBox()}>Dollars</button>
    </>
  );
}

export default UserRef;
