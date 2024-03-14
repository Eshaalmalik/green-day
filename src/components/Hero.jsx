import React from 'react';

import { Button } from './Button';

const Hero = () => {
  return (
    <div className="Hero">
      <div className="hero-content">
        <h1>Organic food</h1>
        <p>GreenDay provides local citizens and guests of our town with quality organic fruits, vegetables, and other products.</p>
        <Button title="Read More" />
      </div>
    </div>
  );
};

export default Hero;
