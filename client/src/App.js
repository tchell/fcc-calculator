import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap-reboot.css'
import './style/App.sass';

import Screen from './components/Screen/';
import ButtonPad from "./components/ButtonPad";

class App extends Component {
  render() {
    return (
        <div id={"App"}>
            <Screen />
            <ButtonPad />
        </div>
    );
  }
}

export default App;
