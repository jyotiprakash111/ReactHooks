import React,{useState} from 'react';

function  Example() {
    const [count,setCount] = useState(0)
    const [fruit, setFruit] = useState('');

    function handleOrangeClick() {
        // Similar to this.setState({ fruit: 'orange' })
        setFruit('orange');
      }

    return(
        <div>
            <p>You clicked {count} Times</p>
            <p>You clicked {fruit} Name</p>
            <button onClick={()=> setCount(count + 1)}>Click me</button>
            <button onClick={()=>handleOrangeClick()}>BananaModifier</button>
            <button onClick={()=>setFruit("lol")}>Banana2</button>
        </div>

    )
}
export default Example;