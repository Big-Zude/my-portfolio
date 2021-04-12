import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { Typography, Container, Hidden } from '@material-ui/core';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import Home from '@material-ui/icons/Home';
import Apps from '@material-ui/icons/Apps';
import ContactMail from '@material-ui/icons/ContactMail';
import { makeStyles } from '@material-ui/core/styles';
import avatar from '../zude1.jpg';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

import Footer from '../components/Footer';

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: '#000000',
    margin: 0
  },
  arrow: {
    marginLeft: 'auto',
    color: '#FFD700'
  },
  title: {
    color: '#FFD700',
    padding: 13,
    
  },
  menuSliderContainer: {
    paddingTop: 20,
    width: 250,
    background: '#000000',
    height: '100%'
  },
  avatar: {
    display: 'block',
    margin: '0.5rem auto',
    width: theme.spacing(13),
    height: theme.spacing(13)
  },
  listItem: {
    color: '#FFD700',
    padding: 0
  },
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-around`
  },
  navDisplayFlex: {
    marginLeft:'auto',
     display: `flex`,
    justifyContent: `space-around`
  }
}));

const menuItems = [
  { listText: 'Home', listPath: '/' },
  { listText: 'Experience', listPath: '/resume' },
  { listText: 'Articles', listPath: '/article' },
  { listText: 'Projects', listPath: '/portfolio' },
  { listText: 'Contact', listPath: '/contact' }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component="div">
      <Avatar className={classes.avatar} src={avatar} alt="Zude Mwango" />
      <Divider style={{ backgroundColor: '#FFD700' }} />
      <List>
        {menuItems.map((item, i) => (
          <ListItem
            button
            key={i}
            className={classes.listItem}
            onClick={() => setOpen(false)}
            component={Link}
            to={item.listPath}
          >
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText primary={item.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <Box component="nav">
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <Container className={classes.navbarDisplayFlex}>
              <Typography variant="h5" className={classes.title}>
                Zude Mwango
              </Typography>
              <Hidden mdUp>
                <div className={classes.arrow}>
                  <IconButton color="inherit" onClick={() => setOpen(true)}>
                    <MenuRoundedIcon />
                  </IconButton>
                </div>
              </Hidden>
              <Hidden smDown>
                <List
                  component="nav"
                  aria-labelledby="main navigation"
                  className={classes.navDisplayFlex}
                >
                  {menuItems.map((item, i) => (
                    <ListItem
                      button
                      key={i}
                      className={classes.listItem}
                      onClick={() => setOpen(false)}
                      component={Link}
                      to={item.listPath}
                    >
                      <ListItemIcon className={classes.listItem}>
                        {item.listIcon}
                      </ListItemIcon>
                      <ListItemText primary={item.listText} />
                    </ListItem>
                  ))}
                </List>
              </Hidden>
            </Container>
          </Toolbar>
        </AppBar>
      </Box>
      <Hidden mdUp>
        <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
          {sideList()}
          <Footer />
        </Drawer>
      </Hidden>
    </React.Fragment>
  );
};

export default Navbar;
