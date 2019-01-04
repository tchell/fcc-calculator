import React, { Component } from 'react';
import { connect } from 'react-redux';
import { allClear } from "../../actions/actions";

class AllClear extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.clear();
    }

    render() {
        return (
            <button id={"clear"} onClick={this.handleClick} className={"btn-lg"}>AC</button>
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
            dispatch(allClear())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AllClear);
