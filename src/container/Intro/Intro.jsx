import React from 'react';

import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs';
import { meal } from '../../constants';

import './Intro.css';

const Intro = () => {
  // here the useRef function returns a ref object 
  //whose .current property is initialized to THE VEDIO TAG 
  const vidRef = React.useRef();

  //It's useful to give each vedio a ref when you work with vedios in React
  // In react, a ref is a way for refering to the html element. 
  return (
  <div className='app__video'>
    <video 
      src = {meal} 
      ref = {vidRef} 

      type = 'video/mp4'
      loop
      control = {false}
      muted 
    />
  </div>
)};

export default Intro;
