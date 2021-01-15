import React, { Component } from 'react';

export default class componentName extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            name: '',
        };
    };


    UpdateData = () => {
        if (this.state.counter === 20) {
            alert(JSON.stringify('Msg Succcess'))
        }
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.counter} times`
        // alert(JSON.stringify(document.title))
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            document.title = `Clicked ${this.state.counter} times`
            console.log("Updating Document")
        }
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.name}
                    onChange={e => { this.setState({ name: e.target.value }) }}
                />
                <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>
                    Click{this.state.counter + 20} times

                </button>
                <div>{this.UpdateData()}</div>
            </div>
        );
    }
}
