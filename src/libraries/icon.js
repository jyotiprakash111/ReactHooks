import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FaBeer } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

class Question extends React.Component {
  render() {
    return (
      <IconContext.Provider value={{ color: "blue", size: "5rem" }}>
        <h3>
          Lets go for a <FaBeer color='purple' size='10rem' />? Lets go for a
          <FaApple color='purple' size='5rem' />?
        </h3>
      </IconContext.Provider>
    );
  }
}

export default Question;
