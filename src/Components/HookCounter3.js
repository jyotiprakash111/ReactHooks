<<<<<<< HEAD
// import React, { useState } from 'react';

// // function HookCounter3(props) {
// //     const [name, setName] = useState({ firstName: '', LastName: '' })
// //     return (
// //         <form>
// //             <input type="text" value={name.firstName}
// //                 onChange={e => setName({ ...name, firstName: e.target.value })}
// //             />
// //             <input type="text" value={name.LastName}
// //                 onChange={e => setName({ ...name, LastName: e.target.value })}
// //             />
// //             <h2>Your First name is {name.firstName}</h2>
// //             <h2>Your First name is {name.LastName}</h2>
// //             <h2>{JSON.stringify(name)}</h2>
// //         </form>
// //     );
// // }


// functiion HookCounter4(props){

//     const [name,bigName] = useState({firstname})

// }

// export default HookCounter4;
=======
import React, { useState } from 'react';

function HookCounter3(props) {
    const [name, setName] = useState({ firstName: '', LastName: '' })
    return (
        <form>
            <input type="text" value={name.firstName}
                onChange={e => setName({ ...name, firstName: e.target.value })}
            />
            <input type="text" value={name.LastName}
                onChange={e => setName({ ...name, LastName: e.target.value })}
            />
            <h2>Your First name is {name.firstName}</h2>
            <h2>Your First name is {name.LastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </form>
    );
}



export default HookCounter3;
>>>>>>> 155491cd2db02aec9d7e1f5093ac45a832298bc3
