import React from 'react';
import Item from './Item';

import carrot from './assets/Carrot.png';
import hay from './assets/Hay.png';
import litterbox from './assets/Litterbox.jpg';

const Shop = ({ add }) => {
  return (
    <div className="wrapper">
      <h1>Shop</h1>
      <div className="card-container">
        <div className="row">
          <Item name="Carrots" image={carrot} price={5} add={add} />
          <Item name="Hay" image={hay} price={5} add={add} />
          <Item name="Litterbox" image={litterbox} price={20} add={add} />
        </div>
        {/* <div className="row">
          <Item name="Item4" image="" price={} add={add} />
          <Item name="Item5" image="" price={} add={add} />
          <Item name="Item6" image="" price={} add={add} />
        </div> */}
      </div>
    </div>
  );
};

export default Shop;