import React from 'react';
import { useState } from "react";




const Hooks = () =>{
const [name, setName] = useState("Initial Value");

    return(
        <div>
            <h2>{name}</h2>
            <h2></h2>
        </div>
    )
}
export default Hooks;