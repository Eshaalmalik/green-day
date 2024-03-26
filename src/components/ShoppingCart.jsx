import React, { useState } from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
import Cart from './Cart';

const ShoppingCart = ({ product }) => {
  console.log('product: ', product);
  const [isActive, SetIsActive] = useState(false);
  const toggleCart = () => {
    SetIsActive(!isActive);
  };
  return (
    <>
      <AiOutlineShopping onClick={toggleCart} className="nav-icon-cart" />
      <div className={isActive ? '' : 'hidden'}>
        <Cart product={product} />
      </div>
      {/* {isActive && <Cart product={product} />} */}
    </>
  );
};

export default ShoppingCart;
