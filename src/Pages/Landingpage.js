import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Appbar from '../Components/Appbar';
import Main from '../Components/Main';
import image from './ap.png';
import css from './Style.css';

const useStyles = makeStyles((theme) => ({
  landingView: {
    backgroundSize: 'cover',
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.common.white,
    height: '80vh',
  },
  featureSection: {
    padding: theme.spacing(4),
    backgroundColor: theme.palette.grey[200],
    height: '50vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  featureCard: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    
  },
  featureCardContent: {
    flexGrow: 1,
    alignItems: 'center',
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    backgroundColor: theme.palette.grey[800],
    height: '30vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    padding: theme.spacing(16),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  desc: {

  }
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div>
<Appbar/>
       <Main/>
       <div className={classes.description}>
  <Grid container spacing={4}>
    <Grid item xs={12} sm={4}>
      <img src={image} alt="app logo" style={{ alignSelf: 'center' }} />
    </Grid>
    <Grid item xs={12} sm={8}>
      <Typography className="desc" variant="body1" align="left">
        Introducing our all-in-one calendar and task management app, the perfect solution for keeping 
        your schedule organized and on track. With our easy-to-use interface, 
        you can easily create and manage events and keep track of your to-do list all in one place.
        Our app syncs with all of your devices, so you can access your schedule and tasks from
         anywhere, at any time. Whether you're at home, at work, or on the go, our app will keep 
         you on top of your schedule and ensure that you never miss an important deadline or appointment.
         In addition to its powerful calendar and task management features, our app also includes a variety of customizable settings to suit your individual needs.
          You can choose from a variety of different calendar views  and even download your plan and share it with others.
      </Typography>
    </Grid>
  </Grid>
</div>

      <div className={classes.featureSection}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Card className={classes.featureCard}>
              <CardContent className={classes.featureCardContent}>
              <img
              src=" https://icongr.am/jam/activity.svg?size=128&color=currentColor"
              alt="calendar" style={{ right: 30 }}
            />
                <Typography variant="h6">Task creation</Typography>
                <Typography>
                Task creation with title, description, and due date.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className={classes.featureCard}>
              <CardContent className={classes.featureCardContent}>
              <img
              src="https://icongr.am/jam/calendar-alt-f.svg?size=128&color=currentColor"
              alt="task" style={{ right: 30 }}
            />
                <Typography variant="h6">Calendar view of tasks</Typography>
                <Typography>
                Calendar view of tasks monthly, weekly or dayly.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className={classes.featureCard}>
              <CardContent className={classes.featureCardContent}>
              <img
              src="https://icongr.am/jam/alarm-clock-f.svg?size=128&color=currentColor"
              alt="calendar" style={{ right: 30 }}
            />
                <Typography variant="h6">Calender drag and drop</Typography>
                <Typography>
                  Drag and drop tasks into your calender view anytime.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
      
      <footer className={classes.footer}>
        <Typography variant="body2"  style={{color: 'white', fontWeight: 'bold',}} align="center">
          Copyright © {new Date().getFullYear()} Task Management App
        </Typography>
      </footer>
    </div>
  );
}