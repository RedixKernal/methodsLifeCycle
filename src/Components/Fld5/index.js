import React, { Component } from 'react';
import UpdateCl from "./updateCl";
import ErrorBoundary from "./errorCl";
class Fld5 extends Component {
    render() {
        return (
            <div>
               <ErrorBoundary>
                    <UpdateCl name="myName" />
                </ErrorBoundary>
            </div>
        );
    }
}

export default Fld5;