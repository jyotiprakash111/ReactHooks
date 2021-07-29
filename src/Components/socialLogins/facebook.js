import React, { Component } from "react";
import ReactDOM from "react-dom";
import FacebookLogin from "react-facebook-login";

class FbLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      userId: "",
      name: "",
      email: "",
      picture: "",
    };
  }

  componentClicked = () => {
    console.log("componentClicked");
  };

  responseFacebook = (response) => {
    console.log(response);
    this.setState({
      isLoggedIn: true,
      userId: response.userId,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
    });
  };

  render() {
    let fbcontent;
    if (this.state.isLoggedIn) {
      fbcontent = (
        <div
          style={{
            width: "400px",
            margin: "auto",
            background: "f4f4f4",
            padding: "20px",
          }}
        >
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome:{this.state.name}</h2>
          <h3>Email:{this.state.email}</h3>
        </div>
      );
    } else {
      fbcontent = (
        <div style={{ marginTop: "20%" }}>
          <FacebookLogin
            appId='1234653637005438'
            autoLoad={true}
            fields='name,email,picture'
            onClick={this.componentClicked}
            callback={this.responseFacebook}
            icon
          />
        </div>
      );
    }
    return <div>{fbcontent}</div>;
  }
}
export default FbLogin;
