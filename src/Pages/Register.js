import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import logo from '../logo192 copy.png';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const useStyles = makeStyles({
	
	container: {
		position: 'relative',
		height: '100vh',
	  },
	card: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		margin: '0 auto',
		textAlign: 'center',
		width: '400px',
  
  },
  logo: {
    width: '100px',
    margin: '0 auto',
  },
  button:{
    width: '100%',
	top: '10px',
	bottom: '10px',
	height: '50px',
  },
  Header: {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	marginTop: '20px',
  },
  PageHeader:{
	padding: '20px',
  },
  link: {
	marginTop: '30px',
	marginBottom: '20px',

  },
});

export default function RegisterPage() {
  const classes = useStyles();

  return (
	<div className={classes.container}>
		<div className={classes.Header}>
        <img src={logo} className={classes.logo} alt="Logo" />
		</div>
    <Card className={classes.card}>
	<Typography className={classes.PageHeader} variant="h5">Register</Typography>
      <CardContent>
		
        {
			<div>
				<TextField
            autoFocus
            margin="dense"
            label="Username"
            type="text"
            fullWidth
            id="outlined-basic"
            variant="outlined"
          />
			<TextField
            autoFocus
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            id="outlined-basic"
            variant="outlined"
          />
		  <TextField
            autoFocus
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            id="outlined-basic"
            variant="outlined"
          />
		  <Button className={classes.button} variant="contained">Register</Button>
		  </div>
		}
		<div className={classes.link}>
       <span>Already have an account?<Link to="/register">Sign in</Link></span>
      </div>
	  </CardContent>
    </Card>
	</div>
  );
}
