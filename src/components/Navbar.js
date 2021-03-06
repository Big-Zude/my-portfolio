import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { Typography, Container, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import avatar from '../zude1.jpg';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

import Footer from '../components/Footer';

const useStyles = makeStyles((theme) => ({
  appbar: {
    width: '100%',
    backgroundColor: '#000000',
    opacity: 0.5,
    boxShadow: 'none',
    margin: 0
  },
  arrow: {
    marginLeft: 'auto',
    color: '#3f51b5'
  },
  title: {
    color: '#ffffff',
    padding: 13
  },
  menuSliderContainer: {
    paddingTop: 20,
    width: 250,
    background: '#3f51b5',
    height: '100%'
  },
  avatar: {
    display: 'block',
    margin: '0.5rem auto',
    width: theme.spacing(13),
    height: theme.spacing(13)
  },
  listItem: {
    color: '#ffffff',
    padding: 10,
    borderRadius: 10
  },
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-around`
  },
  navDisplayFlex: {
    marginLeft: 'auto',
    display: `flex`,
    justifyContent: `space-around`
  }
}));

const menuItems = [
  { listText: 'Home', listPath: '/' },
  // { listText: 'Experience', listPath: '/resume' },
  { listText: 'Projects', listPath: '/portfolio' },
  { listText: 'Articles', listPath: '/article' },
  { listText: 'Contact', listPath: '/contact' }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const classes = useStyles();

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component="div">
      <Avatar className={classes.avatar} src={avatar} alt="Zude Mwango" />
      <Divider style={{ backgroundColor: 'primary' }} />
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
                  <IconButton onClick={() => setOpen(true)}>
                    <MenuRoundedIcon style={{ color: '#ffffff' }} />
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
                      selected={selectedIndex === i}
                      onClick={(event) => handleListItemClick(event, i)}
                      component={Link}
                      to={item.listPath}
                    >
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
