import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dispClear } from "../actions/displayActions";

class ClearEntry extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.clear();
    }

    render() {
        return (
            <button id={"clear"} onClick={this.handleClick}>CE</button>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        clear: () => {
            dispatch(dispClear())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ClearEntry);