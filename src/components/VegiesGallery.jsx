import React from 'react';
import { productBoxItems } from '../../GDItems';
import VegiesCard from './VegiesCard';

const VegiesGallery = ({ clickHandler }) => {
  return (
    <>
      <div className="left-product-section">
        <div className="left-p-content">
          <p>Organic</p>
          <h3>Vegetables</h3>
        </div>
      </div>

      <div className="right-product-section">
        {productBoxItems.map(({ product_img, product_name, p_discount, product_price, id }, index) => (
          <VegiesCard
            key={`products-${index}`}
            product_img={product_img}
            product_name={product_name}
            product_price={product_price}
            p_discount={p_discount}
            id={id}
            clickHandler={clickHandler}
          />
        ))}
      </div>
    </>
  );
};

export default VegiesGallery;
