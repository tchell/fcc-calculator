import React, { Component } from 'react';
import AllClear from "./AllClear.jsx";
import ClearEntry from "./ClearEntry.jsx";
import Number from "./Number.jsx";
import Equals from "./Equals.jsx";
import Operator from "./Operator.jsx";
import Decimal from "./Decimal.jsx";

class ButtonPad extends Component {
    render() {
        return (
            <div id={"button-pad"}>
                <AllClear/>
                <ClearEntry/>
                {(function numbers() {
                    let num_strings = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
                    let nums = [];
                    for (let i = 0; i < 10; i++) {
                        nums.push(<Number key={num_strings[i]} name={num_strings[i]} val={String(i)}/>)
                    }
                    return nums;
                })()}
                <Decimal/>
                <Equals name={"equals"} char={"&equals;"}/>
                <Operator name={"divide"} char={"&divide;"}/>
                <Operator name={"multiply"} char={"&times;"}/>
                <Operator name={"add"} char={"&plus;"}/>
                <Operator name={"subtract"} char={"&minus;"}/>
            </div>
        )
    }
}

export default ButtonPad;