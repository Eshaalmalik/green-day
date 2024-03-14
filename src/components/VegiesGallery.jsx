import React from 'react';
import { productBoxItems } from '../../GDItems';
import VegiesCard from './VegiesCard';

const VegiesGallery = () => {
  return (
    <>
      <div className="left-product-section">
        <div className="left-p-content">
          <p>Organic</p>
          <h3>Vegetables</h3>
        </div>
      </div>

      <div className="right-product-section">
        {productBoxItems.map(({ p_img, p_name, p_price, p_discount }) => {
          return (
            <>
              <VegiesCard p_img={p_img} p_name={p_name} p_price={p_price} p_discount={p_discount} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default VegiesGallery;
