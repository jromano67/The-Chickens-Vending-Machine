import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/navbar.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <h1>The Chickens Vending Machine</h1>
        <Navbar />
      </div>
    );
  }
}

export default App;
