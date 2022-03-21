import React, { Component } from 'react';
import MountCl from './mountCl'

class Fld4 extends Component {
    constructor() {
        super();
        this.state = {
            MainComponetConut:0
        }
    }
    render() {
        return (
            <div>
                <MountCl MainComponetConut={`NameChangeCOunt - ${this.state.MainComponetConut}`}/><br />
                {/* file deepcode ignore ReactNextState: <please specify a reason of ignoring this> */}
                <button onClick={() => this.setState({MainComponetConut:this.state.MainComponetConut+10})}>ChangeProps</button>
            </div>
        );
    }
}

export default Fld4;
