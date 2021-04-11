import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Send from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: '',
    height: '100vh'
  },
  heading: {
    color: 'tomato',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: '1rem'
  },
  form: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute'
  },
  input: {
    color: '#fff'
  },
  button: {
    marginTop: '1rem',
    color: 'tomato',
    borderColor: 'tan'
  },
  field: {
    margin: '1rem 0rem'
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    paddingLeft: 0
  }
}));

const InputField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'tomato'
    },
    '& label': {
      color: 'tan'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'tan'
      },
      '&:hover fieldset': {
        borderColor: 'tan'
      },
      '&.Mui-focused fieldset': {
        color: '#fff',
        borderColor: 'tan'
      }
    }
  }
})(TextField);

const Contact = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.contactContainer}>
      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          <Typography variant="h5" className={classes.heading}>
            Contact me
          </Typography>
          <form action="https://formspree.io/f/xleaezkd" method="post">
            <InputField
              fullWidth={true}
              label="Name"
              name="name"
              type="text"
              variant="outlined"
              inputProps={{ className: classes.input }}
            />
            <InputField
              fullWidth={true}
              label="Email"
              name="_replyto"
              variant="outlined"
              type="email"
              inputProps={{ className: classes.input }}
              className={classes.field}
            />
            <InputField
              fullWidth={true}
              label="Message"
              variant="outlined"
              name="message"
              type="text"
              multiline
              rows={4}
              inputProps={{ className: classes.input }}
            />
            <Button
              variant="outlined"
              fullWidth={true}
              endIcon={<Send />}
              className={classes.button}
              type="submit"
            >
              Contact Me
            </Button>
          </form>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
