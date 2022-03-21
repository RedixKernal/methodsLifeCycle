import React, { Component } from 'react';

class MountCl extends Component {
    constructor() {
        super();
        this.state = {
            childCount:1,
            apiData:{},
        }
        console.log("Constructor Called...")
    }
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps Called...")
        console.info("Props : ",JSON.stringify(props));
        console.info("State : ",JSON.stringify(state));
        return null;
    }
    render() {
        console.log("render Called...")
        return (
            <div>
                 <code>
                 title ::  {this.state.apiData.title} :  
                    id :: {this.state.apiData.id} :
            childCount :: {this.state.childCount} : 
            MainComponetConut :: {this.props.MainComponetConut}
                </code><br />
                {/* file deepcode ignore ReactNextState: <please specify a reason of ignoring this> */}
                <button onClick={() => this.setState({childCount:this.state.childCount+1})}>ChangeState</button>
            </div>
        );
    }
    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/posts/2`)
        .then(res => res.json())
        .then(data => this.setState({apiData:data}))
        .catch(er => console.error(er))
        console.log('componentDidMount called...');
    }
}

export default MountCl;