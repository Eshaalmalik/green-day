import React from 'react';

const VegiesCard = ({ product_img, product_name, p_discount, product_price, id, clickHandler }) => {
  console.log('clickHandler-vegiesdata', clickHandler);
  return (
    <div className="product-box" key={`vegies-${id}`}>
      <button
        className="cart-btn"
        onClick={() =>
          clickHandler({
            product_img,
            product_name,
            product_price,
            product_quantity: 1,
          })
        }>
        Add to Cart
      </button>

      <img src={product_img} alt="" className="p-img" />
      <div className="p-box-content">
        <p>{product_name}</p>
        <span className="price">
          <del>{p_discount}</del>
        </span>
        &nbsp;
        <span>{product_price}</span>
      </div>
    </div>
  );
};

export default VegiesCard;
