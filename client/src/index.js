import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store';


ReactDOM.render(
    <Provider store={store}>
        <App />
        <footer>
            by <a href="https://github.com/tchell" target="_blank">Tanner Chell</a> | <a href="https://github.com/tchell/fcc-calculator" target="_blank">view the code</a>
        </footer>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
