import './sty.css';
import React , {useState,useEffect} from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
function BoxUi(props) {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [event, setEvent] = useState([]);

    const handleDarkMode = (ele) => {
        ele.forEach(element => {
            if(element.className === 'mainbox'){
                let store = element.style.backgroundColor !== 'black'
                ? (element.style.backgroundColor = 'black',
                    element.childNodes[0].childNodes[0].style.color='white',
                    element.childNodes[1].style.color='white',
                    setSuccess(true),
                    setError(false))
                : (element.style.backgroundColor = '',
                    element.childNodes[0].childNodes[0].style.color='',
                    element.childNodes[1].style.color='',
                    setSuccess(false),
                    setError(true))
                
            }
        });
    }

    const handleColor = (e) =>{
        setEvent(e);
        // console.log(e.target.childNodes[1].innerText)
        if(e.target.childNodes[1].innerText === 'Dark mode'){
            darkMode ? setDarkMode(false) : setDarkMode(true)
            handleDarkMode(e.target.parentNode.childNodes);
        }
        else{
            let store = e.target.style?.backgroundColor === 'blue'
            ? (
                e.target.style.backgroundColor = '',
                e.target.childNodes[0].childNodes[0].style.color='',
                e.target.childNodes[0].childNodes[0].style.backgroundColor='',
                e.target.childNodes[1].style.color='',
                e.target.childNodes[1].style.backgroundColor='',
                setSuccess(false),
                setError(true)
            )
            : (
                e.target.style.backgroundColor = 'blue',
                e.target.childNodes[0].childNodes[0].style.color='white',
                e.target.childNodes[0].childNodes[0].style.backgroundColor='',
                e.target.childNodes[1].style.color='white',
                e.target.childNodes[1].style.backgroundColor='',
                setSuccess(true),
                setError(false)
            )
        }
    }

    useEffect(()=>{
        if(success){
            setTimeout(()=>{
                setSuccess(false)
            },2000)
        }
        if(error){
            setTimeout(()=>{
                setError(false)
            },2000)
        }
    },[success,error])

    console.log("event : ",event.target)
    return (
       <>
            <div className='mainbox' onClick={(event)=>handleColor(event)}>
                <span aria-disabled>{props.data.icon}</span>
                <div className='titleText' aria-disabled>{props.data.info}</div>
            </div>
            <div>
                {
                    success &&
                    <Snackbar
                    open={success}
                    anchorOrigin={{
                        vertical:'top',
                        horizontal:'center',
                        }}
                    >
                        <Alert severity='success' sx={{with:'100%'}}>
                            {props.data.info} Access Allowed!
                        </Alert>
                    </Snackbar>
                }
                {
                        error &&
                        <Snackbar
                        open={error}
                        anchorOrigin={{
                            vertical:'top',
                            horizontal:'center',
                        }}
                        >
                        <Alert severity='error' sx={{with:'100%'}}>
                            {props.data.info} Access Denied!
                        </Alert>
                        </Snackbar>
                }
            </div>
       </>
    )
}
export default BoxUi;