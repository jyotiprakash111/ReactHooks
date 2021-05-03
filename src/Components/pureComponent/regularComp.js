import React, { Component } from "react";

class RegularComponent extends Component {
  render() {
    return <div> textInComponent {this.props.name}</div>;
  }
}

export default RegularComponent;
