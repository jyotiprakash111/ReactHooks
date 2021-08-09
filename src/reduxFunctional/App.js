import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';

function App(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const counter = useSelector((state)=> state.counter)
    const dispatch = useDispatch()

    function SubmitData(e){
        e.preventDefault()
        const postData={
            email,
            password
        }
    }
    return (
        <div>
            <h2>Counter: {counter}</h2>
            <input type='text'
            placeholder="Email id"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            />
            <input type='text'
            placeholder="Password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            />
            <button onClick={()=>   dispatch({type:'INCREMENT'})}>Increment</button>
            <button onClick={()=>   dispatch({type:'DECREMENT'})}>Decrement</button>
        </div>
    );
}

export default App;