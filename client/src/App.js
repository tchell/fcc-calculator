import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.sass';

import Screen from './components/Screen/';
import ButtonPad from "./components/ButtonPad";

class App extends Component {
  render() {
    return (
        <div className={"container"}>
            <Screen />
            <ButtonPad />
        </div>
    );
  }
}

export default App;
