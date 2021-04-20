import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
  }
 
}));

const projects = [
  {
    name: 'Covid-19-Statistics',
    description: `Shows statistics from countries hit by the corona virus disease(Covid-19). The data includes current cases, deaths, recovered patients etc.

`,

    sourceCode: 'https://github.com/Big-Zude/Covid-19-Statistics'
  },
  {
    name: 'Portfolio',
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi`,
    sourceCode: 'https://github.com/Big-Zude/my-portfolio',
    live: 'https://zude.netlify.app/'
  },
  {
    name: 'Project 3',
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi`
  },
  {
    name: 'Project 4',
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi`
  },
  {
    name: 'Project 5',
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi`
  },
  {
    name: 'Project 6',
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi`
  }
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    // <div className={classes.content}>
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="left">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={3} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <a href={project.sourceCode} style={{ textDecoration: 'none' }}>
                  <Button size="small" color="primary" variant="outlined">
                    Source Code
                  </Button>
                </a>
                <a href={project.live} style={{ textDecoration: 'none' }}>
                  <Button size="small" color="primary" variant="contained">
                    Live Demo
                  </Button>
                </a>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    // </div>
  );
};

export default Portfolio;
