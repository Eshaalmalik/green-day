import React from 'react';
import { productFruits } from '../../GDItems';
const FruitsGallery = ({ clickHandler }) => {
  return (
    <>
      <div className="right-product-section">
        {productFruits.map((pitem, index) => (
          <div className="product-box" key={`fruits-${index}`}>
            <button className="cart-btn" onClick={() => clickHandler(pitem)}>
              Add to Cart
            </button>
            <img src={pitem.product_img} alt="" className="p-img" />
            <div className="p-box-content">
              <p>{pitem.product_name}</p>
              <span className="price">
                <del>{pitem.p_discount}</del>
              </span>
              &nbsp;
              <span>{pitem.product_price}</span>
            </div>
          </div>
        ))}
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
