import React, { Component, useEffect } from 'react';

class UnmountCl extends Component {
    style = {
        borderl:{
            margin:'auto',
            width:'80%',
            height:'60vh',
            padding:'20px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            fontSize:'60px',
            fontWeight:'800',
            boxShadow:'0px 0px 6px red',
            color:'blue'

        }
    }
    render() {
        return (
            <div>
                <div style={this.style.borderl}>
                    $404$
                </div>
            </div>
        );
    }
    componentDidMount(){
        document.addEventListener('mousemove',()=>{

        })
    }
    componentWillUnmount(){
        console.log("componentWillUnmount called...")
        clearInterval(this.myInterval);
    }
}

export default UnmountCl;

