import React from 'react';
import CartItm from './CartItm';
const CartItems = ({ cartItems, setCartItems }) => {
  const updateCartItem = (updateditem) => {
    const updateditems = cartItems.map((item) => {
      if (item.id === updateditem.id) {
        return updateditem;
      }
      return item;
    });
    setCartItems(updateditems);
  };
  return (
    <>
      <div className="cart-items-container">
        {cartItems.map((item) => (
          <CartItm item={item} key={`card-${item.id}`} updateCartItem={updateCartItem} cartItems={cartItems} />
        ))}
      </div>
    </>
  );
};

export default CartItems;
