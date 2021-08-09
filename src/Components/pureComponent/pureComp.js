import React, { PureComponent } from "react";

class PureClass extends PureComponent {
  render() {
    console.log('*****Pure Comp*****')
    return <div>PureCom {this.props.name}</div>;
  }
}

export default PureClass;
