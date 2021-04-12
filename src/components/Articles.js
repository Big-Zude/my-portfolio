import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import project1 from '../images/html-css-javascript-lg.jpg';
import project2 from '../images/html-css-javascript.jpg';
import project3 from '../images/javascript-fullstack.jpg';
import project4 from '../images/mern-stack.jpg';
import project5 from '../images/react-redux.jpg';
import project6 from '../images/react.png';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: '#f1f1f1`',
    height: '100%'
  },
  cardContainer: {
    maxWidth: 345,
    margin: '3rem auto',
    height: '80%',
    boxSizing: 'border-box'
  }
}));

const projects = [
  {
    name: 'How To Post And Fetch Data Using React-query',
    description: `In this article, you will learn how to setup react-query to fetch and post data in your applications written in typescript/javascript and react functional components. Furthermore, you will learn what react-query is and its advantages.`,
    image: project1,
    link: 'https://zude.hashnode.dev/'
  },
  {
    name:
      'Fetching Covid-19 Data using React.js, Material UI, and Material-Table Part 2',
    description: `In this part, it’s all technical! We are going to write code for the Cards(functional component) and WordTable(class component) components. In addition to this, we are going to implement the Effect Hook(useState and useEffect) and the Fetch API.`,
    image: project2,
    link:
      'https://medium.com/analytics-vidhya/fetching-covid-19-data-using-react-js-material-ui-and-material-table-part-2-8a1f88a954ba'
  },
  {
    name:
      'Fetching Covid-19 Data using React.js, Material UI, and Material-Table Part 1',
    description: `With the rise of coronavirus infections around the world, it is good for the public to have the right information which can help governments make informed decisions that help protect the health of its people. I created a simple react.js project that shows the total cases, deaths, and patients recovered from the silent killer. I am using the NovelCovid API to fetch the data for this project.`,
    image: project3,
    link:
      'https://zudemwango.medium.com/fetching-covid-19-data-using-react-js-material-ui-and-material-table-d41314706b59'
  }
];

const Article = () => {
  const classes = useStyles();
  return (
    // <div className={classes.content}>
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    <b>{project.name}</b>
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                  <Typography variant="h6" color="primary">
                    <a href={project.link}>Read Here</a>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    // </div>
  );
};

export default Article;
