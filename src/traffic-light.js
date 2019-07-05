import React, { Component } from "react";
//import ReactDOM from "react-dom";
import Light from "./light.js";
import { setTimeout } from "timers";

class TrafficLight extends Component {
  constructor() {
    super();
    this.timer = null;
    this.state = {
      currentLight: 0,
      lights: [{ color: "red" }, { color: "yellow" }, { color: "green" }]
    };
  }

  componentDidMount() {
    this.handleTimeLight();
  }

  handleTimeLight() {
    this.timer = setTimeout(() => {
      let { currentLight } = this.state;
      currentLight = currentLight + 1;

      if (currentLight > 2) currentLight = 0;

      this.setState({ currentLight });
      this.handleTimeLight();
    }, 5000);
  }

  handleLights() {
    let { currentLight, lights } = this.state;

    return lights.map((element, index) => {
      return (
        <Light
          id={index}
          key={index}
          colour={element.color}
          isOn={currentLight === index ? "true" : "false"}
        />
      );
    });
  }

  render() {
    return <div>{this.handleLights()}</div>;
  }
}

export default TrafficLight;
