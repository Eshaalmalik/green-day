import React, { useState, useEffect } from 'react';

import { Button } from './Button';
import CartItems from './CartItems';
const Cart = ({ product }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      product_img: 'https://ld-wt73.template-help.com/wt_prod-22316/images/product-mini-1-108x100.png',
      product_name: 'Blueberries',
      product_quantity: 8,
      product_price: 550,
    },
    {
      id: 2,
      product_img: 'https://ld-wt73.template-help.com/wt_prod-22316/images/product-mini-2-108x100.png',
      product_name: 'Avacados',
      product_quantity: 5,
      product_price: 250,
    },
  ]);
  const updateCartItem = (updateditem) => {
    const updateditems = cartItems.map((item) => {
      if (item.id === updateditem.id) {
        return updateditem;
      }
      console.log('updared cart-item', updateCartItem);
      return item;
    });
    setCartItems(updateditems);
  };

  // updating product with help of map()
  useEffect(() => {
    console.log('MSk', product);
    if (product?.product_name) {
      const hasProduct = cartItems.filter((item) => item.product_name === product.product_name);
      if (hasProduct.length > 0) {
        setCartItems(
          cartItems.map((item) => (item.product_name === product.product_name ? { ...item, product_quantity: item.product_quantity + 1 } : item)),
        );
      } else {
        setCartItems([
          ...cartItems,
          {
            ...product,
            product_price: 120,
            id: cartItems.length + 1,
            product_quantity: 1,
          },
        ]);
      }
      console.log('hasProduct: ', hasProduct);
    }
  }, [product?.product_name]);

  // updating product with help of findIndex
  // const index = cartItems.findIndex((item) => item.product_name === product.product_name);

  const totalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total = total + item.product_price * item.product_quantity;
    });
    return total;
  };

  let totalProducts = () => {
    let totalpro = 0;
    cartItems.map((item) => {
      totalpro = totalpro + item.product_quantity;
    });
    return totalpro;
  };
  return (
    <div className="cart-container">
      <div className="price-box">
        <p className="p-in-cart">In cart: {totalProducts()} Products</p>
        <p className="p-price">Total price: ${totalPrice()}</p>
      </div>
      <span className="hr"></span>
      <CartItems cartItems={cartItems} setCartItems={setCartItems} updateCartItem={updateCartItem} />
      <span className="hr"></span>
      <div className="add-cart-btn">
        <Button title="GO TO CART" btnClass="Add-cart-btn" />
        <Button title="CHECK OUT" btnClass="Ashia" />
      </div>
    </div>
  );
};

export default Cart;
