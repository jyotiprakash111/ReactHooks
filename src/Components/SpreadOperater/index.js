// import React from 'react';

// // normal array concat() method 
// let arr = [1, 2, 3];
// let arr2 = [4, 5];

// arr = arr.concat(arr2);

// console.log(arr); // [ 1, 2, 3, 4, 5 ] 


// // case -2  Using Spread Operater
// // spread operator doing the concat job 
// let data = [1, 2, 3];
// let data2 = [4, 5];

// data = [...data, ...data2];
// console.log(data); // [ 1, 2, 3, 4, 5 ] 


// const biki = [1, 2, 3];
// const biki2 = biki;
// console.log("Meaasge: Success", biki2);



// {/* case 4 
//     The above code works fine considering the fact that we are able
//     to copy the contents of one array to another, but under the hood
//     it’s very different as when we mutate new array,
//     it will also affect the old array(the one which we copied). See the code below: */}

// // changed the original array 
// let result1 = ['a', 'b', 'c'];
// let result2 = result1;

// result1.push('d');

// console.log(result2);
// console.log(result1); // even affected the original array(arr) 


// const Data = () => {
//     return (
//         <div>
//             <h4>{result1}</h4>
//             <h4>{result2}</h4>
//         </div>
//     )
// }

// export default Data;