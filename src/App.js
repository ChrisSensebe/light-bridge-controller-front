import React, {Component} from 'react';
import './App.css';
import {appTitle} from "./components/appTitle";
import {appLights} from "./components/appLights";

class App extends Component {
  render() {
    return (
        <>
          <appTitle title="Light bridge controller" />
          <appLights/>
        </>
    );
  }
}

export default App;
