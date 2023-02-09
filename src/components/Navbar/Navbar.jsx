import React,{ useState } from 'react';
import {GiHamburgerMenu } from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

// Throughout the projecet CSS BEM model is followed

const Navbar = () =>  {
  const [toggleMenu, setToggleMenu] = useState(false);

  return(
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
          {/* can be used as empty space or a septum line (like how we used here)  */}
          <div /> 
          <a href="/" className='p__opensans'>Book Table</a>
      </div>
   
      <div className='app__navbar-smallscreen'>
        {/* just type <GiH and then the drop down list will come , remember '<' we have to type */}
        {/* style={{cursor:'pointer'}} YOU ADDED THIS CUSTOM INLINE CSS ON YOUR OWN!!! on a component , 
            look notes for what id actually happening  */}
        <GiHamburgerMenu  style={{cursor:'pointer'}}  color='#fff' fontSize={27} onClick={ () => setToggleMenu(true) } />
        {/* A new dynamic code black , if toggleMenu is true the below elemnts get rendered*/}
        { toggleMenu && (
            <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
              <MdOutlineRestaurantMenu  fontSize={27} className='overlay__close' onClick={ () => setToggleMenu(false) } />
              <ul className='app__navbar-smallscreen_links'>
                <li className='p__opensans'><a href="#H  ome">Home</a></li>
                <li className='p__opensans'><a href="#About">About</a></li>
                <li className='p__opensans'><a href="#Menu">Menu</a></li>
                <li className='p__opensans'><a href="#Awards">Awards</a></li>
                <li className='p__opensans'><a href="#Contact">Contact</a></li>
              </ul>
            </div>
        //   Now you can design the menu buttons
        )}
      </div>
    </nav>  
  )
}
export default Navbar;
