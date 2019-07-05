import React, { Component } from "react";
//import ReactDOM from "react-dom";

class Light extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isWorking: true };
  }

  render() {
    const { colour, isOn } = this.props;

    return <div className={isOn === "true" ? colour : "off"}>{colour}</div>;
  }
}

export default Light;
