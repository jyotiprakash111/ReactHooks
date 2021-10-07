import React,{useState} from 'react';

function HooksScene(props) {

    const [inputvalue, setInputvalue] = useState("Predoo")

    let onChange = (event) =>{
        const newValue = event.target.value;
        setInputvalue(newValue)
    }
    return (
        <div style={{marginTop:"40%"}}>
            {/* <h2>{counter}</h2> <button onClick={increment}>Increment</button> */}
            <input placeholder="enter something" onChange={onChange}/>
            {inputvalue}
        </div>
    );
}

export default HooksScene;