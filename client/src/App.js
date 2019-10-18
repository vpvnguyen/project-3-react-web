import React, { Component } from 'react';

// styling
import './App.css';

// components
import Main from './components/Main/Main.jsx';

// launch main web component
class App extends Component {

  state = {
    data: null
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
    console.log('app componentDidMount - connect backend')
  }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  render() {

    return (
      <Main id="main" />
    );
  }
}

export default App;
