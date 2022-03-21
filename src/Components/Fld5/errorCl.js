import React, { Component } from 'react';
import UnmountCl from '../Fld6/unMountCl'
class ErrorBoundary extends Component {
    constructor(){
        super()
        this.state={
            hasError:false,
        }
    }
    static getDerivedStateFromError(e){
        return{
            hasError:true,
        }
    }
    componentDidCatch(e,info){
        console.error("error : ",e)
        console.error("info : ",info)
    }
    render() {
        return (
            <div>
                {this.state.hasError 
                ? <UnmountCl />
                : this.props.children
            }
            </div>
        );
    }
}

export default ErrorBoundary;