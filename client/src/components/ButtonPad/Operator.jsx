import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {opAdd} from "../../actions/actions";

class Operator extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.addOp(this.props.char);
    }
    render() {
        return (
            <button id={this.props.name} onClick={this.handleClick} dangerouslySetInnerHTML={{__html: this.props.char}} className={"btn-sm"}/>
        )
    }
}

Operator.propTypes = {
    name: PropTypes.string.isRequired,
    char: PropTypes.string.isRequired,
    addOp: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return state
};

const mapDispatchToProps = (dispatch) => {
    return {
        addOp: (op) => {
            dispatch(opAdd(op))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Operator);