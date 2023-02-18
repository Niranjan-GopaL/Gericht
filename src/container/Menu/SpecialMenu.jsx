import React from 'react';

// Look at the figma file and understand what all you need to import
import { SubHeading,MenuItem } from '../../components';
import {images,data} from '../../constants';

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>

    {/* Title and Sub-title */}
    <div className='app__specialMenu-title '>
      <SubHeading title='Menu That Fits Your Palatte' />
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>  

    <div className='app__specialMenu-menu'>

      {/* The first section - Wine and Beer */}
      <div className='app__specialMenu-menu_wine flex__center'>
        <p className='app__specialMenu-menu_heading'>Wine and Beer</p>
        <div className='app__specialMenu-menu_items'>
            {data.wines.map((wine,index)=>(
              //  + index} is done in order to keep the keys unique
              <MenuItem key={wine.title + index} title={wine.title} price={wine.price}  tags={wine.tags} />
            ))}
        </div>
      </div>

      {/* Second section is the wine image */}
      <div className='app__specialMenu-menu_img'>
          <img src={images.menu} alt="menu image" />
      </div>

        {/* Third section */}
      <div className='app__specialMenu-menu_cocktail  flex__center'>
        <p className='app__specialMenu-menu_heading'>Cocktails</p>
        <div className='app__specialMenu-menu_items'>
            {data.cocktails.map((cocktail,index)=>(
              <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
            ))}
        </div>
      </div>

    </div>

    {/* the View More button */}
    {/* We could have used class name but since it's just one button , we gonna do it quick*/}
    <div style={{marginTop: '15px'}}>
      <button type='button' className='custom__button'>View More</button>
    </div>

  </div>
);

export default SpecialMenu;
