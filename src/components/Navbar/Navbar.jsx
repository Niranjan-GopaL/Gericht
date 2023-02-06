import React from 'react';
import {GiHamburgerMenu } from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

// Throughout the projecet CSS BEM model is followed

const Navbar = () => (
  <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.gericht} alt="app logo" />
    </div>
    <ul className='app__navbar-links'>
      <li className='p__opensans'><a href="#H  ome">Home</a></li>
      <li className='p__opensans'><a href="#About">About</a></li>
      <li className='p__opensans'><a href="#Menu">Menu</a></li>
      <li className='p__opensans'><a href="#Awards">Awards</a></li>
      <li className='p__opensans'><a href="#Contact">Contact</a></li>
    </ul>
    <div className='app__navbar-login'>
        <a href="#login" className='p__opensans'>Log In / Register</a>
        {/* empty space */}
        <div /> 
        <a href="/" className='p__opensans'>Book Table</a>
    </div>
  </nav>  
);

export default Navbar;
