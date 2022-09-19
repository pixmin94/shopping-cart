import React from 'react-router-dom';
import CartItem from './CartItem';


function Cart ({ data, removeItem }){
    let total = 0;

    for (let i = 0; i < data.length; i++) {
      const quantity = data[i].quantity;
      const price = data[i].price;
  
      total += quantity * price;
    }

    return (
        <>
        <h1>Cart</h1>
        {/* <CartItem title="Carrots" image={carrot} price={5} quantity={1} />
        <CartItem title="Carrots" image={carrot} price={5} quantity={1} /> */}
        {data.map((item) => {
            return (
            <CartItem
                key={item.name}
                name={item.name}
                image={item.image}
                quantity={item.quantity}
                price={item.price}
                removeItem={removeItem}
            />
            );
        })}
        <div className="total">Total: {total.toFixed(2)}</div>
        <button>Buy</button>
        </>
    );
}

export default Cart;