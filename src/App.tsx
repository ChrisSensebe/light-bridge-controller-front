import React, {Component} from 'react';
import './App.css';
import {AppLights} from "./components/AppLights";
import {AppTitle} from './components/AppTitle';

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
