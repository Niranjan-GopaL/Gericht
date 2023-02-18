import React from 'react';


// Look at the figma file and understand what all you need to import
import SubHeading from '../../components/SubHeading/SubHeading';
import {images} from '../../constants';

import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>

    <div className='app__wrapper_info'>
      {/* Implementing a component called Sub Heading  */}
      {/* Cool trick after defining the component if you have to import it then , 
          1) DOUBLE CLICK ON the component 
          2) ctrl + spacebar (so a drop down menu comes down and if you click on it , 
            the component will be imported automatically) */}
      <SubHeading title="Chase T  he New Flavour" />
      <h1 className='app__header-h1'>The Key to Fine Dinnig</h1>

      {/* Text copied from figma design */}
      <p className='p__opensans' style={{margin : '2rem 0'}} >Sit tellus lobortis sed 
      senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque 
      sapien. Et, penatibus aliquam amet tellus </p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header img " />
    </div>


  </div>
);

export default Header;
