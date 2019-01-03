import React, { Component } from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import store from './store';

import Display from './components/Display';
import Number from "./components/Number";
import ClearEntry from "./components/ClearEntry";

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Display />
            <ClearEntry/>
            <Number name={"zero"} val={"0"}/>
            <Number name={"one"} val={"1"}/>
            <Number name={"two"} val={"2"}/>
            <Number name={"three"} val={"3"}/>
            <Number name={"four"} val={"4"}/>
            <Number name={"five"} val={"5"}/>
            <Number name={"six"} val={"6"}/>
            <Number name={"seven"} val={"7"}/>
            <Number name={"eight"} val={"8"}/>
            <Number name={"nine"} val={"9"}/>
        </Provider>
    );
  }
}

export default App;
