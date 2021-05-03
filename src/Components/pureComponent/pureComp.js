import React, { PureComponent } from "react";

class PureClass extends PureComponent {
  render() {
    return <div>PureCom {this.props.name}</div>;
  }
}

export default PureClass;
