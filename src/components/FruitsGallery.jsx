import React from 'react';
import { productFruits } from '../../GDItems';
const FruitsGallery = () => {
  return (
    <>
      <div className="right-product-section">
        {productFruits.map((pitem) => {
          return (
            <>
              <div className="product-box">
                <img src={pitem.p_img} alt="" className="p-img" />
                <div className="p-box-content">
                  <p>{pitem.p_name}</p>
                  <span className="price">
                    <del>{pitem.p_price}</del>
                  </span>
                  &nbsp;
                  <span>{pitem.p_discount}</span>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="left-product-section fruit-img">
        <div className="left-p-content">
          <p>fresh</p>
          <h3>Fruits</h3>
        </div>
      </div>
    </>
  );
};

export default FruitsGallery;
