import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {calc, opAdd} from "../../actions/actions";

class Equals extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.addNum(this.props.display);
        this.props.calc();
    }
    render() {
        return (
            <button id={this.props.name} onClick={this.handleClick} dangerouslySetInnerHTML={{__html: this.props.char}}/>
        )
    }
}

Equals.propTypes = {
    name: PropTypes.string.isRequired,
    char: PropTypes.string.isRequired,
    addNum: PropTypes.func.isRequired,
    calc: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return state
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNum: (num) => {
            dispatch(opAdd(num))
        },
        calc: (op) => {
            dispatch(calc(op))
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Equals);
