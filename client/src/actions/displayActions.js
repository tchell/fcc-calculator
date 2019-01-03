import { NUM_ADD, DEC_ADD, CALCULATE, ALL_CLEAR, DISP_CLEAR } from "./types";

export const numAdd = (num) => {
    return {
        type: NUM_ADD,
        payload: num
    }
};

export const dispClear = () => {
    return {
        type: DISP_CLEAR
    }
};