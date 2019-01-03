import {NUM_ADD, DEC_ADD, DISP_CLEAR} from "../actions/types";

const initialState = {
    display: '0'
};

export default function display(state = initialState, action) {
    switch(action.type) {
        case NUM_ADD:
            if (state.display === '0') {
                return {
                    ...state,
                    display: action.payload
                };
            } else {
                return {
                    ...state,
                    display: state.display + action.payload
                };
            }
        case DISP_CLEAR:
            return {
                ...state,
                display: '0'
            };
        default:
            return state
    }
}