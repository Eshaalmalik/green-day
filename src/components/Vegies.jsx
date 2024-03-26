import React from 'react';

import VegiesGallery from './VegiesGallery';
const Vegies = ({ clickHandler }) => {
  return (
    <div className="product-container .container">
      <VegiesGallery clickHandler={clickHandler} />
    </div>
  );
};

export default Vegies;
