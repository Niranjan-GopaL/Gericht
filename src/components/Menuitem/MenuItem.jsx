import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags}) => (
  <div className='app__menuitem'>

    <div className='app__menuitem-head'>
      {/* Name */}
      <div className='app__menuitem-name'>
        {/* inside p tag we are dynamically rendering a title */}
        <p className='p__cormornat' style={{color:'#DCCA87'}}>
          {title}
        </p>
      </div>

      {/* the dash between name and price */}
      <div className='app__menuitem-dash' />

      {/* Price */}
      <div className='app__menuitem-price'>
        {/* inside p tag we are dynamically rendering a price */}
        <p className='p__cormornat' style={{color:'#fff'}} >
          {price}
        </p>
      </div>
    </div>

    <div className='app__menuitem-sub'>
      <p className='p__opensans' style={{color: '#AAA'}}>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
