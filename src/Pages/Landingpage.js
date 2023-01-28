import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Appbar from '../Components/Appbar';
import Main from '../Components/Main';

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
  },
  featureCard: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  featureCardContent: {
    flexGrow: 1,
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    backgroundColor: theme.palette.grey[800],
    height: '30vh',
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div>
<Appbar/>
       <Main/>
      <div className={classes.featureSection}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Card className={classes.featureCard}>
              <CardContent className={classes.featureCardContent}>
              <img
              src="https://icongr.am/jam/calendar-alt-f.svg?size=128&color=currentColor"
              alt="calendar" style={{ right: 30 }}
            />
                <Typography variant="h6">Feature 1</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                <Typography variant="h6">Feature 2</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid
				  incididunt ut labore et dolore magna aliqua.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className={classes.featureCard}>
              <CardContent className={classes.featureCardContent}>
              <img
              src="https://icongr.am/jam/activity.svg?size=128&color=currentColor"
              alt="calendar" style={{ right: 30 }}
            />
                <Typography variant="h6">Feature 2</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid
				  incididunt ut labore et dolore magna aliqua.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
      <footer className={classes.footer}>
        <Typography variant="body2" align="center">
          Copyright © {new Date().getFullYear()} Task Management App
        </Typography>
      </footer>
    </div>
  );
}