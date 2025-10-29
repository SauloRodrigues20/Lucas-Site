import React from 'react';
import Hero from '../components/Hero';
import Methodology from '../components/Methodology';
import Results from '../components/Results';
import Tools from '../components/Tools';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Hero />
      <Methodology />
      <Results />
      <Tools />
      <Testimonials />
      <FinalCTA />
    </div>
  );
};

export default Home;