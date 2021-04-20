import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Divider, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: '#f1f1f1`',
    height: '100%'
  },
  cardContainer: {
    maxWidth: 345,
    margin: '3rem auto',
    height: '70%',
    boxSizing: 'border-box'
  },
  heading: {
    padding: 10,
    color: '#ffffff',
    textTransform: 'uppercase'
  }
}));

const articles = [
  {
    name: 'How To Post And Fetch Data Using React-query',
    description: `In this article, you will learn how to setup react-query to fetch and post data in your applications written in typescript/javascript and react functional components. Furthermore, you will learn what react-query is and its advantages.`,

    link: 'https://zude.hashnode.dev/'
  },
  {
    name:
      'Fetching Covid-19 Data using React.js, Material UI, and Material-Table Part 2',
    description: `In this part, it’s all technical! We are going to write code for the Cards(functional component) and WordTable(class component) components. In addition to this, we are going to implement the Effect Hook(useState and useEffect) and the Fetch API.`,

    link:
      'https://medium.com/analytics-vidhya/fetching-covid-19-data-using-react-js-material-ui-and-material-table-part-2-8a1f88a954ba'
  },
  {
    name:
      'Fetching Covid-19 Data using React.js, Material UI, and Material-Table Part 1',
    description: `With the rise of coronavirus infections around the world, it is good for the public to have the right information which can help governments make informed decisions that help protect the health of its people. I created a simple react.js project that shows the total cases, deaths, and patients recovered from the silent killer. I am using the NovelCovid API to fetch the data for this project.`,
    link:
      'https://zudemwango.medium.com/fetching-covid-19-data-using-react-js-material-ui-and-material-table-d41314706b59'
  }
];

const Article = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="left">
        {/* Projects */}
        {articles.map((article, index) => (
          <Grid item xs={3} key={index}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    <b>{article.name}</b>
                  </Typography>
                  <Divider style={{ color: '#FFD700' }} />
                  <Typography variant="h6" color="primary">
                    <br/>
                    <a href={article.link}>
                      <Button color="primary" variant="contained">Read Here</Button>
                    </a>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Article;
