import {NUM_ADD, OP_ADD, DISP_CLEAR, CALCULATE, ALL_CLEAR, DEC_ADD} from "../actions/types";

export default function rootReducer(state, action) {
    switch(action.type) {
        case NUM_ADD:
            if (state.display === '0' || state.formula === '0') {
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
        case DEC_ADD:
            return {
                ...state,
                display: (state.display.search(/\./) !== -1 ? state.display : state.display + '.')
            };
        case OP_ADD:
            return {
                ...state,
                formula: getFormula(state.formula, action.payload, state.display),
                display: '0'
            };
        case DISP_CLEAR:
            return {
                ...state,
                display: '0'
            };
        case ALL_CLEAR:
            return {
                ...state,
                formula: '0',
                display: '0',
            };
        case CALCULATE:
            //console.log(convertTagToStr(state.formula));
            let ans = calculate(state.formula);
            return {
                ...state,
                formula: '0',
                display: ans
            };
        default:
            return state
    }
}

function getFormula(formula, operator, num) {
    //console.log(formula, operator, num);
    if (formula === '0')            // first number
        return num + operator;
    else if (operator === num) {  // after equals
        return formula + num
    }
    else if (num === '0') {         // to operators in a row
        //console.log(formula);
        return formula.replace(/&\w*;$/, operator) ;
    } else                          // add normally
        return formula + num + operator;
}

function calculate(formula) {
    return String(eval(convertTagToStr(formula)));
}

function convertTagToStr(str) {
    // Find all HTML operators and replace them with text
    // eg. &divide; -> /
    return str.replace(/&\w*;/g, (match) => {
        switch (match) {
            case "&divide;":
                return "/";
            case "&times;":
                return "*";
            case "&minus;":
                return "-";
            case "&plus;":
                return "+";
            default:
                return "";
        }
    })

}
