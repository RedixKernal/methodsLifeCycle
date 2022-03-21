import React, { Component } from 'react';

class UpdateCl extends Component {
    constructor(){
        super()
        this.state = {
            firstCountValue:0,
            secoundCountValue:0
        }
        console.log("constrcutor called...")
    }
    
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps called...")
        console.info("Props : ",JSON.stringify(props));
        console.info("State : ",JSON.stringify(state));
        return {
            secoundCountValue:state.firstCountValue
        };
    }
    
    render() {
        if(this.state.firstCountValue === 5) throw new Error('Component Error!')
        console.log("render called...")
        return (
            <div>
                <code>Name : {this.props.name}</code>
                <h2><code>firstCountValue : {this.state.firstCountValue} / 
            secoundCountValue : {this.state.secoundCountValue}</code></h2>
                {/* file deepcode ignore ReactNextState: <please specify a reason of ignoring this> */}
                <button onClick={()=>this.setState({firstCountValue:this.state.firstCountValue+1})}>Change</button>
            </div>
        );
        
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate called...")
        console.info("nextProps : ",JSON.stringify(nextProps));
        console.info("nextState : ",JSON.stringify(nextState));
        return true;
    }
    getSnapshotBeforeUpdate(prvProps,prvState){
        console.log("getSnapshotBeforeUpdate called...")
        console.info("prvProps : ",JSON.stringify(prvProps));
        console.info("prvState : ",JSON.stringify(prvState));
        return 'SnapCalled...'
    }
    componentDidUpdate(prvProps,prvState,snap){
        // this.setState({
        //     secoundCountValue:snap
        // })
        // Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside
       
        console.log("componentDidUpdate called...")
        console.info("prvProps : ",JSON.stringify(prvProps));
        console.info("prvState : ",JSON.stringify(prvState));
        console.info("Snap : ",JSON.stringify(snap));
    }
}

export default UpdateCl;