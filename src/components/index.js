import React from 'react';
import Header from './Header';
import ParticlesBg from 'particles-bg';

const Home = () => {
  let config = {
    num: [1, 1],
    rps: 0.1,
    radius: [10, 10],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-40, 40],
    //body: "./img/icon.png", // Whether to render pictures
    //rotate: [0, 20],
    alpha: [0.6, 1],
    scale: [1, 0.1],
    position: 'center', // all or center or {x:1,y:1,width:100,height:100}
    color: ['random', '#FFD700'],
    cross: 'dead', // cross or bround
    random: 15, // or null,
    g: 1, // gravity
    f: [2, -1], // force
    onParticleUpdate: (ctx, particle) => {
      ctx.beginPath();
      ctx.rect(
        particle.p.x,
        particle.p.y,
        particle.radius * 2,
        particle.radius * 2
      );
      ctx.fillStyle = particle.color;
      ctx.fill();
      ctx.closePath();
    }
  };
  return (
    <div>
      <Header />
      <ParticlesBg type="custom" config={config} bg={true} />
    </div>
  );
};

export default Home;
