import React from 'react';

const CartItm = ({ item, updateCartItem }) => {
  return (
    <>
      <div className="cart-item">
        <img className="cart-item-img" src={item.product_img} alt="" />
        <div className="cart-item-des">
          <p>{item.product_name}</p>
          <div className="p-ammount">
            <button
              disabled={item.product_quantity === 1}
              onClick={() =>
                updateCartItem({
                  ...item,
                  product_quantity: item.product_quantity - 1,
                })
              }>
              -
            </button>
            <p>{item.product_quantity}</p>
            <button
              onClick={() =>
                updateCartItem({
                  ...item,
                  product_quantity: item.product_quantity + 1,
                })
              }>
              +
            </button>
            <p>${item.product_price * item.product_quantity}</p>
          </div>
          {/* <AddRemoveCartItem item={item} quantity={item.cart_p_num} /> */}
        </div>
      </div>
    </>
  );
};

export default CartItm;
