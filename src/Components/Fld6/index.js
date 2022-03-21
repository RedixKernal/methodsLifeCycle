import React, { Component } from 'react';
import UnmountCl from './unMountCl';

class Fld6 extends Component {
    style = {
        colorMeta:{
            width:'100%',
            height:'6vh',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
        }
    }
    constructor() {
        super()
        this.state = {
            isMount:true,
        }
    }
   
    render() {
        return (
            <div>
                {this.state.isMount &&<UnmountCl />}
                <br />
                <div style={this.style.colorMeta}>
                    <button onClick={()=>this.setState({isMount:true })}>Mount</button>&nbsp;&nbsp;
                    <button onClick={()=>this.setState({isMount:false })}>UnMount</button>
                </div>
            </div>
        );
    }
}

export default Fld6;
