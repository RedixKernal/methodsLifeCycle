import React from 'react'
import  jsPDF  from "jspdf";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function Redix_Kernal() {
  const [open, setOpen] = React.useState(false);
  const doc = new jsPDF();

    const handleGenarator = (e) => {
      if(e.target.value === '' || e.target.value === " "){
        doc.text('',8,10);
      }
      console.log(e.target.value)
      console.log(doc.text(e.target.value,8,10));
    }
    const handleSave = () => {
      const NameString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
      let D = new Date();
      const YEAR =D.getFullYear()
      const DAY = D.getDate()
      const MONTH = D.getMonth()+1
      let Name = '';
      for(let i = 0; i < 9; i++){
        Name += NameString[Math.floor(Math.random()*NameString.length)]
      }
      doc.save(`Cus_RK_${DAY}${MONTH}${YEAR}_${Name}`);
      doc.text('',8,10);
    }
    setTimeout(()=>{
      setOpen(false)
    },2000)
  return (
    <div className='cus_outerBox'>
      <form>
      <TextField
          id="outlined-textarea"
          placeholder="..."
          multiline
          maxRows={10}
          onKeyUp={handleGenarator}
          rows={6}
          style={{ width: '100% ',marginBottom:"8px"}}
        />
      <Stack spacing={2} direction="row" className='buttonGroup' >
      <Button variant="text"><CloudDownloadIcon onClick={handleSave}/></Button>
      <div>
      <Stack spacing={1} direction="row">
        <Button variant="text" type='reset'>Clear</Button>
        <Button variant="contained" onClick={() => setOpen(true)}>Save</Button>
      </Stack>
      </div>
    </Stack>
    </form>

      <Snackbar 
        open={open}
        anchorOrigin={{
          vertical:'top',
          horizontal:'right',
        }}>
        <Alert severity="success" sx={{ width: '100%' }}>
          Data Saved Successfully
        </Alert>
      </Snackbar>
    </div>
  )
}

export default Redix_Kernal