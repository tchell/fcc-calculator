import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class Formula extends Component {
    render() {
        return (
            <div id={"formula"} dangerouslySetInnerHTML={{__html: this.props.formula}}/>
        )
    }
}

Formula.propTypes = {
    formula: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
    return {
        formula: state.formula
    }
};

export default connect(mapStateToProps)(Formula);