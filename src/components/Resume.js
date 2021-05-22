import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundSize: 'contain'
  },
  timeLine: {
    position: 'relative',
    padding: '1rem',
    margin: 'o auto',
    '&:before': {
      content: "''",
      position: 'absolute',
      height: '100%',
      border: '1px solid tan',
      right: '40px',
      top: 0
    },
    '&:after': {
      content: "''",
      display: 'table',
      clear: 'both'
    },
    [theme.breakpoints.up('md')]: {
      padding: '2rem',
      '&:before': {
        left: 'calc(50% - 1px)',
        right: 'auto'
      }
    }
  },
  timeLineItem: {
    padding: '1rem',
    borderBottom: '2px solid tan',
    position: 'relative',
    margin: '1rem 3rem 1rem 1rem',
    clear: 'both',
    '&:after': {
      content: "''",
      position: 'absolute'
    },
    '&:before': {
      content: "''",
      position: 'absolute',
      right: '-0.625rem',
      top: 'calc(50% - 5px)',
      borderStyle: 'solid',
      borderColor: '#3f51b5 tomato transparent transparent',
      borderWidth: '0.625rem',
      transform: 'rotate(45deg)'
    },
    [theme.breakpoints.up('md')]: {
      width: '44%',
      margin: '1rem',
      '&:nth-of-type(2n)': {
        float: 'right',
        margin: '1rem',
        
      },
      '&:nth-of-type(2n):before': {
        right: 'auto',
        left: '-0.625rem',
        borderColor: 'transparent transparent tomato #3f51b5'
      }
    }
  },
  timeLineYear: {
    textAlign: 'center',
    maxWidth: '9.375rem',
    margin: '0 3rem 0 auto',
    fontSize: '1.8rem',
    color: '#fff',
    background: '#3f51b5',
    lineHeight: 1,
    padding: '0.5rem 1rem',
    '&:before': {
      display: 'none'
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'center',
      margin: '0 auto',
      '&:nth-of-type(2n)': {
        float: 'none',
        margin: '0 auto'
      },
      '&:nth-of-type(2n):before': {
        display: 'none'
      }
    }
  },
  heading: {
    color: 'primary',
    padding: '3rem 0',
    textTransform: 'uppercase'
  },
  subHeading: {
    color: '#000000',
    padding: 0,
    textTransform: 'uppercase'
  },
  body1: {
    color: 'tomato'
  },
  subtitle1: {
    color: 'primary'
  },
  btn: {
    color: 'white',
    backgroundColor: '#3f51b5'
  }
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Experience
      </Typography>
      <div align="center">
        <a
          href="https://drive.google.com/file/d/17BZh4LJPPB9UXRf4mCjPO9sRXZWD6My5/view?usp=sharing"
          style={{ textDecoration: 'none' }}
        >
          <Button
            className={classes.btn}
            variant="contained"
            size="large"
            endIcon={<GetAppRoundedIcon />}
          >
            <Typography>Download Resume</Typography>
          </Button>
        </a>
      </div>
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2020
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Frontend Software Developer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            BongoHive Consult
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            • Currently Implementing Coding standards for the team to achieve
            clean code and better documentation • Successfully designed,
            developed, and implemented the frontend of an admin dashboard for an
            e-commerce business with its client-facing running on USSD, iOS app,
            and android app. • Successfully designed and engineered the frontend
            of an admin dashboard for a transport and logistics company with its
            client-facing app running on an android app. • Designed and
            implemented some features of an admin dashboard at a lightning speed
            for an information and management system using Adobe XD, Typescript,
            React.js, Redux, react-query, material-UI •Successfully delivered
            training to organizations on how they can adapt to working remotely
            during the COVID-19 pandemic under the Deutsche Gesellschaft für
            Internationale Zusammenarbeit (GIZ). I trained several organizations
            on how to use slack.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2019
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Software Developer Intern
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            BongoHive Consult
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            • Successfully started the design and development of an in-house
            solution which is a monitoring system for the startups that are
            trained with various programs run by the organization • Successfully
            implemented live exchanges rate on clients live website in
            Javascript • Successfully Maintained and updated BongoHive's website
            • Successfully Maintained and updated conservation farming unit
            website • Participated and lead Stand-ups. • Participated and lead
            Sprint planning. • Undertook Human-Centered Design and Design
            Thinking processes.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2018
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Information Technology Intern
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Zambia National Broadcasting Corporation
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            • Successfully contributed to the File server configuration. •
            Maintained Computers and Printers. • Successfully troubleshooter
            networks and fixed the issues on various devices(windows server,
            cisco switch, and Cisco routers) • Successfully provided technical
            support to co-workers.
          </Typography>
        </Box>
        
      </Box>
    </Box>
  );
};

export default Resume;
