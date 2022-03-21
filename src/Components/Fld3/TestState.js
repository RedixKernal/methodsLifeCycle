import React, { Component } from 'react';

class TestState extends Component {
    constructor(){
        super();
        this.state = {
            name:'Empty',
            LDS:'Killed',
            count:0,
        }
    }

    handleChange = () =>{
        // this.setState({
        //     count:this.state.count+1
        // })
        this.setState((prvState)=>({
            count:prvState.count+1
        }),()=>{
            console.log(this.state.count)
        })
        

        // this.setState(prvState => ({
        //     count:prvState.count+1
        // }),
        // ()=>{
        //     // this.state.count % 2 === 0
        //     // ? this.setState({name:"Reserved",LDS:"Connected"})
        //     // : this.setState({name:"Empty",LDS:"Killed"})
        //     console.log('count State : ',this.state.count)
        // })
        // this.state.count % 2 === 0
        // ? this.setState({name:"Reserved",LDS:"Connected"})
        // : this.setState({name:"Empty",LDS:"Killed"})
        // console.log('count : ',this.state.count)
    } 
    render() {
        return (
            <div>
                <h2>Name : {this.state.name} -- LDS : {this.state.LDS} -- Count : {this.state.count}</h2>
             {/* <button onClick={()=>this.setState({name:'Reserved',LDS:'Connected'})}>Change</button>&nbsp;&nbsp;  */}
                <button onClick={()=>this.handleChange()}>ChangeHandler</button>
            </div>
        );
    }
}

export default TestState;