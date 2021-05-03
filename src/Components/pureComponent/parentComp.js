import React, { Component } from "react";
import PureComponent from "./pureComp";
import RegularComponent from "./regularComp";

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
    return (
      <div>
        {" "}
        textInComponent
        <RegularComponent name={this.state.name}></RegularComponent>
        <PureComponent name={this.state.name}></PureComponent>
      </div>
    );
  }
}

export default PrentComp;
