import React, {Component} from 'react';
import './App.css';
import {AppLights} from "./components/app-lights";
import {AppTitle} from './components/app-title';

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
