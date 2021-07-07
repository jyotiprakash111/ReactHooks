import React, { Component } from "react";

class RegularComponent extends Component {
  render() {
    console.log('Regular Comp')
    return <div> Rgular Component {this.props.name}</div>;
  }
}

export default RegularComponent;
