import React, { Component } from "react";

// styling
import "./App.css";

// components
import Main from "./components/Main/Main.jsx";

// launch main web component
class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    console.log("app componentDidMount - connect backend");
  }

  render() {
    return <Main id="main" />;
  }
}

export default App;
