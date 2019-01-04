import React, { Component } from 'react';
import Formula from './Formula.jsx';
import Display from './Display.jsx';

class Index extends Component {
    render () {
        return (
            <div id={"screen"}>
                <Formula />
                <Display />
            </div>
        )
    }
}

export default Index;