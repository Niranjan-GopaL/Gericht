import React from 'react';

// Look at the figma file and understand what all you need to import
import { SubHeading } from '../../components'
import { images } from '../../constants'

import './Chef.css';

const Chef = () => (
  // app__bg is  the one responsible for that stunning motionless black bg
  <div className='app__bg app__wrapper section__padding'>
    
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef"/>
    </div>

    <div className='app__wrapper_info'>

      //using the Subheading component again and passing the prop that we need
      <SubHeading title="Chef's Word"/> 
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className='app__chef-content'>
        //Basically the quote and first line are in one div
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
        </div>
        //Seperate
        <p className='p__opensans'>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
      </div>

      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt='sign' />
      </div>

    </div>
  </div>
);

export default Chef;
    