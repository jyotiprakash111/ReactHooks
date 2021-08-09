import React, { Component } from 'react';

export default class ComponentName extends Component {
    state = {
        todos: [
            {
                id: 1,
                title: "Good Morning",
                completed: false,
            },
        ],
    };

    render() {
        console.log(this.state.todos)
        return (
            <div> textInComponent </div>
        );
    }
}
<<<<<<< HEAD


// Testing Component
=======
>>>>>>> 155491cd2db02aec9d7e1f5093ac45a832298bc3
