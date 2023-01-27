import React from 'react'
import Dashbar from '../Components/Dashbar';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Calendar from '../Components/Calendar';


const useStyles = makeStyles({
	Username: {
		marginLeft: '20px',
		marginTop: '20px',
  },
});

export default function Dashboard() {
	const classes = useStyles();
	return (
		<div>
			<Dashbar/> 
			<div>
			<div>
			<h3 className={classes.Username}>Welcome Back,
			 <span> name </span></h3>
	  </div>
			</div>
			<div>
	        <Calendar />
			</div>
		</div>
	)
}
