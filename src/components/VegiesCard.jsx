import React from 'react';

const VegiesCard = ({ p_img, p_name, p_price, p_discount }) => {
  return (
    <div className="product-box">
      <img src={p_img} alt="" className="p-img" />
      <div className="p-box-content">
        <p>{p_name}</p>
        <span className="price">
          <del>{p_price}</del>
        </span>
        &nbsp;
        <span>{p_discount}</span>
      </div>
    </div>
  );
};

export default VegiesCard;
