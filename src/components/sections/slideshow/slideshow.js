import React from 'react';
import { Slide  } from 'react-slideshow-image';
 import classes from './slideshow.module.css'
 import Img1 from  '../../../images/1.jpg'
  import Img2 from  '../../../images/2.jpg'
   import Img3 from  '../../../images/3.jpg'
    import Img4 from  '../../../images/4.jpg'
const slideImages = [
  Img1,
    Img2,
    Img3,
      Img4
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,

}



const Slideshow = (props) => {

    return (
      <div className={classes.back}>

      <div className="slide-container">
         <Slide {...properties}>
           <div className="each-slide">
             <div style={{backgroundImage: `url(${slideImages[0]})`}}>
               <span> Screamin' Beans </span>
             </div>
           </div>
           <div className="each-slide">
             <div style={{backgroundImage: `url(${slideImages[1]})`}}>
               <span>Manhattan Mocha</span>
             </div>
           </div>
           <div className="each-slide">
             <div style={{ backgroundImage: `url(${slideImages[3]})`}}>
               <span>Manhattan Mocha</span>
             </div>
           </div>
           <div className="each-slide">
             <div style={{backgroundImage: `url(${slideImages[2]})`}}>
               <span>Mugs Coffee</span>
             </div>
           </div>
         </Slide>
       </div>
       </div>

    )
}

export default Slideshow;
