import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {decAdd} from "../../actions/actions";

class Decimal extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.addDec();
    }

    render() {
        return (
            <button id={"decimal"} onClick={this.handleClick}>.</button>
        )
    }
}

Decimal.propTypes = {
    // prop: PropTypes.<type>.[isRequired],
    addDec: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
   return state
};

const mapDispatchToProps = (dispatch) => {
   return {
       // func: (arg) => {
       //    dispatch(action(arg))
       //}
       addDec: () => {
           dispatch(decAdd())
       }
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Decimal);
