import {NUM_ADD, OP_ADD, DISP_CLEAR, CALCULATE, ALL_CLEAR, DEC_ADD} from "./types";

export const numAdd = (num) => {
    return {
        type: NUM_ADD,
        payload: num
    }
};

export const decAdd = () => {
    return {
        type: DEC_ADD,
    }
};

export const opAdd = (op) => {
    return {
        type: OP_ADD,
        payload: op
    }
};

export const dispClear = () => {
    return {
        type: DISP_CLEAR
    }
};

export const allClear = () => {
    return {
        type: ALL_CLEAR
    }
};

export const calc = () => {
    return {
        type: CALCULATE
    }
};