import React, { useState } from 'react';

const AddRemoveCartItem = ({ item, setItemAddhandler, quantity }) => {
  const [addProduct, setAddProduct] = useState(quantity);
  console.log(item);
  return (
    <>
      <div className="p-ammount">
        <button disabled={addProduct === 1} onClick={() => setAddProduct(addProduct - 1)}>
          -
        </button>
        <p>{addProduct}</p>
        <button onClick={() => setAddProduct(addProduct + 1)}>+</button>
        <button
          onClick={() =>
            setItemAddhandler([
              {
                ...item,
                cart_p_num: item.cart_p_num + 1,
              },
            ])
          }>
          add
        </button>
        <p>{item.price * addProduct}</p>
      </div>
    </>
  );
};
export default AddRemoveCartItem;
