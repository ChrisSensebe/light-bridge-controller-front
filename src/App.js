import React, {Component} from 'react';
import './App.css';
import {AppTitle} from "./components/AppTitle";
import {AppLights} from "./components/AppLights";

class App extends Component {
  render() {
    return (
        <>
          <AppTitle title="Light bridge controller" />
          <AppLights/>
        </>
    );
  }
}

export default App;
