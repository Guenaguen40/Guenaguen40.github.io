import React, { useRef } from 'react'
import Dashbar from '../Components/Dashbar';
import { makeStyles } from '@material-ui/core/styles';
import Calendar from '../Components/Calendar';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Button from '@mui/material/Button';
import DownlIcon from '@mui/icons-material/Download';

const useStyles = makeStyles({
  Username: {
    marginLeft: '20px',
    marginTop: '30px',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
  },
  Button: {
   top: '20px',
   left: '1020px',
  }
 
});

export default function Dashboard() {
  const classes = useStyles();
  const calendarRef = useRef(null);
  const downloadPDF = () => {
    html2canvas(calendarRef.current).then(canvas => {
        let pdf = new jsPDF();
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
        pdf.save("download.pdf");
    });
  }

  return (
    <div>
      <Dashbar/> 
<div className={classes.row}>
  <h3 className={classes.Username}>Welcome Back, <span> name </span></h3>
  <Button className={classes.Button} onClick={downloadPDF} variant="contained" endIcon={<DownlIcon />}>PDF</Button>
</div>
<div className={classes.calendarContainer} ref={calendarRef}>
  <Calendar />
</div></div>
  )
}
