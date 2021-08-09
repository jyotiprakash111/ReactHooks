import React, { Component } from "react";
import WithCounter from "./withCounter";

class ClickCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div className='App'>
        <button onClick={incrementCount}>{this.props.name}Clicked {count} Times</button>
      </div>
    );
  }
}

export default  WithCounter(ClickCounter);
