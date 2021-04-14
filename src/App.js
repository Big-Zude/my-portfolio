import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components';
import Resume from './components/Resume';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Article from './components/Articles';
import ReactGA from 'react-ga';

import './App.css';
ReactGA.initialize('UA-153096172-1');

function App() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.set({ page: location.pathname }); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
  }, [location.pathname]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/article" component={Article} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
