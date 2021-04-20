import React from 'react';
import Header from './Header';
import ParticlesBg from 'particles-bg';

const Home = () => {
  return (
    <div>
      <Header />
      <ParticlesBg
        type="cobweb"
        color="#3f51b5"
        bg={{
          position: 'absolute',
          zIndex: 999,
          width: 800
        }}
      />
    </div>
  );
};

export default Home;
