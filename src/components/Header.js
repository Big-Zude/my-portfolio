import React from 'react';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typed from 'react-typed';
import { makeStyles } from '@material-ui/core/styles';
import avatar from '../zude1.jpg';

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1)
  },
  title: {
    color: '#F6F7FA'
  },
  subtitle: {
    color: '#fff',
    textTransform: 'uppercase'
  },
  typedContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    width: '100vw',
    textAlign: 'center',
    zIndex: 1
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    paddingLeft: 0
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Box className={classes.typedContainer}>
        <Grid container justify="center">
          <Avatar className={classes.avatar} src={avatar} alt="Zude Mwango" />
        </Grid>
        <Typography className={classes.title} variant="h4">
          <Typed strings={['Zude Mwango']} typeSpeed={40} />
        </Typography>

        <Typography className={classes.subtitle} variant="h5">
          <Typed
            strings={[
              'UI/UX Designer',
              'Photographer',
              'Content creator',
              'Technical Writer',
              'Frontend Developer'
            ]}
            typeSpeed={20}
            backSpeed={50}
          />
        </Typography>
      </Box>
    </div>
  );
};

export default Header;
