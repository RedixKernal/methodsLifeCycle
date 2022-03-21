import React, { Component } from 'react';
import Testprops from './TestProps';

const PrivateCommand = {
    type:'Titan',
    base:'Command'
}
const commandBuildBlock = [
    {
        type:'Mantle_Nx',
        base:'rule'
    },
    {
        type:'port',
        base:'PORT:2425'
    },
    {
        type:'Code',
        base:'read_Point'
    }
]
class Fld2 extends Component {
    render() {
        return (
            <div>
                <Testprops type='Main' base='System' />
                <Testprops type='Chaild' base='data' />
                {/* <Testprops data={PrivateCommand} />*/}
                {commandBuildBlock.map((CommandLine,Id)=>{
                    return <Testprops data={CommandLine} key={Id} />
                })} 
            </div>
        );
    }
}

export default Fld2;