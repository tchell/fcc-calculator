import React, { Component } from 'react';
import { connect } from 'react-redux';
import { numAdd } from '../../actions/actions';
import PropTypes from 'prop-types';

class Number extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.addNum(this.props.val);
    }

    render() {
        return (
            <button className={"num"} id={this.props.name} onClick={this.handleClick}>{this.props.val}</button>
        )
    }
}

Number.propTypes = {
    name: PropTypes.string.isRequired,
    val: PropTypes.string.isRequired,
    addNum: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNum: (num) => {
            dispatch(numAdd(num));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Number);