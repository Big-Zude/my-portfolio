import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Twitter from '@material-ui/icons/Twitter';
import { GitHub, LinkedIn } from '@material-ui/icons';

const useStyles = makeStyles({
  bottomNavContainer: {
    background: '#222'
  },
  root: {
    '& .MuiSvgIcon-root': {
      fill: '#ffffff',
      '&:hover': {
        fill: '#FFD700',
        fontSize: '1.8rem'
      }
    }
  }
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <a href="https://github.com/Big-Zude">
        <BottomNavigationAction icon={<GitHub />} className={classes.root} />
      </a>

      <a href="https://twitter.com/Big_Zude">
        <BottomNavigationAction icon={<Twitter />} className={classes.root} />
      </a>

      <a href="https://www.linkedin.com/in/zude-mwango-0a17b3122/">
        <BottomNavigationAction icon={<LinkedIn />} className={classes.root} />
      </a>
    </BottomNavigation>
  );
};
export default Footer;
