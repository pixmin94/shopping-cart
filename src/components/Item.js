import React , { useState } from 'react';

function Item({ name, image, price, add }) {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity((prevState) => {
          return prevState + 1;
        });
      };
    
    const decrement = () => {
        setQuantity((prevState) => {
          if (prevState === 1) {
            return 1;
          }
          return prevState - 1;
        });
      };
    
    const addToCart = (e) => {
        const item = { name, image, price, quantity };
        add(item);
      };

    return (
        <div className="item">
          <h4>{name}</h4>
          <img className="product-image" src={image}></img>
          <p>{`$${price}`}</p>
          <div className="add-to-cart">
            <button className="add" onClick={addToCart}>
              Add to cart
            </button>
            <div className="quantity">
              <span className="less" onClick={decrement}>
                -
              </span>{' '}
              {quantity}{' '}
              <span className="more" onClick={increment}>
                +
              </span>
            </div>
          </div>
        </div>
      );
}

export default Item;