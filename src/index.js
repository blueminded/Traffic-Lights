import React from "react";
import ReactDOM from "react-dom";

import TrafficLight from "./traffic-light.js";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <TrafficLight />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);