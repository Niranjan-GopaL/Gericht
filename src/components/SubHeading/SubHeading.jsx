import React from 'react';

import {images} from '../../constants';

const SubHeading = ({title}) => (
  <div style={{marginBottom : '1rem'}}>
    {/* Cormorant is the name of the font style that we're using
        check out index.css and see :root{ } their you'll see we 
        have font-base nad font-alt , Cormorant is the base*/}
    <p className='p__cormorant'>{title}</p>
    {/* that small spoon */}
    <img src={images.spoon} className='spoon__img' alt="spoon" />
  </div>
);

export default SubHeading;
