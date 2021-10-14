import React from 'react';
import { Particles as ReactParticles } from 'react-particles-js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  particlesCanvas: {
    position: 'fixed',
    opacity: '0.8'
  }
}));

const Particles = () => {
  const classes = useStyles();

  return (
    <ReactParticles
      canvasClassName={classes.particlesCanvas}
      params={{
        particles: {
          number: {
            value: 45,
            density: {
              enable: true,
              value_area: 800
            }
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 3,
              color: 'tomato'
            }
          },
          size: {
            value: 8,
            random: true,
            anim: {
              enable: false,
              speed: 6,
              size_min: 0,
              sync: true
            }
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              opacity_min: 0.1,
              sync: false
            }
          }
        }
      }}
    />
  );
};

export default Particles;
