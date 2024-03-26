import React from 'react';

import FruitsGallery from './FruitsGallery';
const Fruits = ({ clickHandler }) => {
  return (
    <>
      <div className="product-container .container fruits">
        <FruitsGallery clickHandler={clickHandler} />
      </div>
    </>
  );
};

export default Fruits;
