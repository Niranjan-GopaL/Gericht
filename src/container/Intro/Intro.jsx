import React from 'react';

// So far we saw react, react-router-dom, react-icons, react-bootstrap, react-bootstrap-icons, etc
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs';
import { meal } from '../../constants';

import './Intro.css';

const Intro = () => {

  // if use start typing useS a dropdown menu will come with snippet for it
  // it would even have double cursor enabled
  const [playVideo, setPlayVideo] = React.useState(false);

  // here the useRef function returns a ref object 
  //whose .current property is initialized to THE VEDIO TAG 
  const vidRef = React.useRef();

  //It's useful to give each vedio a ref when you work with vedios in React
  // In react, a ref is a way for refering to the html element. 

  // Also notice that return ( <ParentElem> all other tags must be enclosed in it </ParentElem> )
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

    <div className="app__video-overlay flex__center">

      {/* the Onclick property to handleVideo is A COMMON WAY TO IMPLEMENT VEDIOS , 
      that technique is pretty common and powerfully simple*/}

      <div
        className="app__video-overlay_circle flex__center"
        onClick={() => {
          setPlayVideo(!playVideo);
          if (playVideo) {
            vidRef.current.pause();
          } else {
            vidRef.current.play();
          }
        }}
        >
          {/* SCOPE FOR IMPROVEMENT : add a keyboard event listener that will 
        toggle pause/ play when we press spacebar  */}


        {/* So if playVideo is true, PauseFill button is rendered otherwise FillPLayFIll*/}
        {playVideo 
        ? 
        (<BsPauseFill color="#fff" fontSize={30}/>)
        : 
        (<BsFillPlayFill color="#fff" fontSize={30}/>)
        }
      </div>

    </div>

  </div>
)};

export default Intro;
