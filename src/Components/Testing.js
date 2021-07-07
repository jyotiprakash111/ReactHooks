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


// Testing Component
