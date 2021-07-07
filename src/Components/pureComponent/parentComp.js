import React, { Component } from "react";
import PureComponent from "./pureComp";
import RegularComponent from "./regularComp";
import MemoComp from '../memo/MemoComp'

class PrentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "viswas",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Viswas",
      });
    }, 2000);
  }

  render() {
    console.log('******Parent Comp*******')
    return (
      <div>
        Parent Component
        {/* <RegularComponent name={this.state.name}></RegularComponent> */}
        {/* <PureComponent name={this.state.name}></PureComponent> */}
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default PrentComp;
