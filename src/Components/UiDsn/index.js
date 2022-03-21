import BoxUi from './uiitems'
import './sty.css';
import {data} from './metaData';
import { useEffect } from 'react';
function NameUI() {
    useEffect(()=>{
        console.log('useEffect called...')
        return ()=>{
            console.log('cleanUp called...')

        }
    })
    return (
        <div className='mainContainer'>
            {console.log('return called...')}
           <div className='childContainer'>
               {data.map((val,ind)=>{
                    console.log(val)
                return <BoxUi data = {val} key={ind}/>
               })}
            </div>
        </div>
    )
}
export default NameUI