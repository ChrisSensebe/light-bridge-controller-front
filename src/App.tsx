import React, {Component} from 'react';
import './App.css';
import {AppItems} from "./components/app-items";
import {AppTitle} from './components/app-title';

class App extends Component {
  render() {
    return (
        <>
          <AppTitle title="Light bridge controller" />
          <AppItems/>
        </>
    );
  }
}

export default App;
