import React from 'react';

import {images} from '../../constants';
import './AboutUs.css';


const AboutUs = () => (
  // app__bg is the one responsible for that stunning motionless black bg
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>

    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="g letter" />
    </div>


    <div className='app__aboutus-content flex__center'>

      {/* first block of About US */}
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing 
          elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. 
          In sed odio nec aliquet eu proin mauris et.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div> 

      {/* Second block is image of knife */}
      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="knife_image" />
      </div> 

      {/* Third block is History */}
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing 
          elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. 
          In sed odio nec aliquet eu proin mauris et.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div> 

    </div>

  </div>
);

export default AboutUs;
