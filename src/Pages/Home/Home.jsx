import React from "react";
import Hero from "../../Components/Hero/Hero";
import Tabs from "../../Components/Tabs/Tabs";

const Home = ({ aboutRef, handleClick}) => {
  return (
    <div>
      <Hero aboutRef={aboutRef} handleClick={handleClick} />
      <Tabs aboutRef={aboutRef} />
    </div>
  );
};

export default Home;
