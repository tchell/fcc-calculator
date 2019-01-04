import { createStore } from "redux";
import rootReducer from './reducers/reducer';

const initialState = {
    formula: '0',
    display: '0'
};

const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store