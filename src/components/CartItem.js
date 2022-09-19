import React from 'react';

const CartItem = ({ name, image, price, quantity, removeItem }) => {
  return (
    <div className="cart">
      <h4 className="item-name">{name}</h4>
      <img className="product-image" src={image}></img>
      <p className="cart-price">${price * quantity}</p>
      <p className="cart-quantity">{quantity}</p>
      <button className="delete-item" onClick={() => removeItem(name)}>
        Remove Item
      </button>
    </div>
  );
};

export default CartItem;