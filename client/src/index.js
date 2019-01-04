import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import App from './App';
import style from './style/';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

$(document).ready(style());
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
