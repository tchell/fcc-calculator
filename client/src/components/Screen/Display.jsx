import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Display extends Component {
    render() {
        return (
            <div id={"display"}>{this.props.display}</div>
        );
    }
}

Display.propTypes = {
    display: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
    display: state.display
});

export default connect(mapStateToProps)(Display);