import React, { useState, useEffect } from 'react';
import axios from 'axios';


function DataFetching(props) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                // alert(JSON.stringify(res))
                // console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

    const result = words.filter(word => word.length < 8);

    // alert(JSON.stringify(result));





    const array1 = [1, 2, 3, 4, 5];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    // 1 + 2 + 3 + 4 + 5
    // console.log(array1.reduce(reducer));
    // expected output: 10

    // 5 + 1 + 2 + 3 + 4 + 5
    // console.log(array1.reduce(reducer, 5));
    // expected output: 20


    {/*
        
        // Array.pop() Method
        const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
    
        console.log(plants.pop());
        // expected output: "tomato"
    
        console.log(plants);
        // expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]
    
        plants.pop();
    
        console.log(plants);
        // expected output: Array ["broccoli", "cauliflower", "cabbage"]
    */}

    return (
        <div>
            <ul>
                {
                    posts.map(e => (<li key={e.id}>{e.title}</li>))
                }
            </ul>
        </div>
    );
}

export default DataFetching;