import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import resume from '../../src/resume.jpg'

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundImage: `url(${resume})`,
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
      borderColor: 'tomato tomato transparent transparent',
      borderWidth: '0.625rem',
      transform: 'rotate(45deg)'
    },
    [theme.breakpoints.up('md')]: {
      width: '44%',
      margin: '1rem',
      '&:nth-of-type(2n)': {
        float: 'right',
        margin: '1rem',
        borderColor: 'tan'
      },
      '&:nth-of-type(2n):before': {
        right: 'auto',
        left: '-0.625rem',
        borderColor: 'transparent transparent tomato tomato'
      }
    }
  },
  timeLineYear: {
    textAlign: 'center',
    maxWidth: '9.375rem',
    margin: '0 3rem 0 auto',
    fontSize: '1.8rem',
    color: '#fff',
    background: 'tomato',
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
    color: 'tomato',
    padding: '3rem 0',
    textTransform: 'uppercase'
  },
  subHeading: {
    color: '#fff',
    padding: 0,
    textTransform: 'uppercase'
  },
  body1: {
    color: 'tomato'
  },
  subtitle1: {
    color: 'tan'
  }
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Experience
      </Typography>
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
            • Participate in Stand-ups • Participate in Sprint planning •
            Undertake Human Centered Design and Design Thinking processes •
            Participate in developing in-house Software Applications for the
            Company and clients. • Maintain bongohive website • Monthly client
            website security scan
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
            Frontend Software Developer Intern
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            BongoHive Consult
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Participate in Stand-ups. Participate in Sprint planning. Undertake
            Human Centered Design and Design Thinking processes. Participate in
            developing in-house Software Applications for the Company and
            clients.
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
            Successfully completed the training program that included lessons on
            internet service providers, file server configuration, network
            troubleshoot and fixing,computer maintenance, customer care etc.
            Provided technical support to co-workers.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2017
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Data Entry
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Africa Infrastructure Consultants
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Expansion Developments at East Park Mall Traffic counting and data
            entry
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;
