// import React from "react";


// const UpdatedComponent = (OriginalComponent) => {
//   class NewComponent extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         count: 0,
//       };
//     }

//     incrementCount = () => {
//       this.setState((prevState) => {
//         return { count: prevState.count + 1 };
//       });
//     };
//     render() {
//       return (
//         <OriginalComponent
//           count={this.state.count}
//           incrementCount={this.incrementCount}
//         />
//       );
//     }
//   }
//   return NewComponent;
// };

// export default UpdatedComponent;

// import React from "react";

// Naming Conventation

import React from "react";
const UpdatedComponent = (WrappedComponent) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };
    render() {
      console.log(this.state.count)
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }
  return WithCounter;
};

export default UpdatedComponent;
