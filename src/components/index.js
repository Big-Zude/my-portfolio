import React from "react";
import Header from "./Header";
import ParticlesBg from "particles-bg";

const Home = () => {
  return (
    <div>
      <Header />
      <ParticlesBg num={100} type="thick" bg={true}/>
    </div>
  );
};

export default Home;
