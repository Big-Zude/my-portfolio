import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from 'react-router-dom'
import App from "./App";
import * as serviceWorker from "./serviceWorker";



// ReactGA.initialize('UA-153096172-1'); // add your tracking id here.
// ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
