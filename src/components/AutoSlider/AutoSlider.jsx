import React, { useState, useEffect } from 'react';
import "./AutoSlider.css" 
 

import Prog1 from "/src/assets/img/Remove-bg.ai_1721044242386.png";
import Prog2 from "/src/assets/img/Remove-bg.ai_1721044395662.png";

function AutoSlider({width , height , position , top , right , zIndex}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imgArray = [Prog1, Prog2, Prog1];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imgArray.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [imgArray.length]);

  return (
    <div className="slider" style={{width:width ,maxWidth:width , minWidth:width , maxHeight:height , minHeight:height, height:height , position:position , top:top , right:right , zIndex:zIndex}}>
      <img src={imgArray[currentIndex]} alt="Slider" className=' object-contain mix-blend-multiply  w-[100%] h-[100%]' />
      {/* <div className="dots">
        {imgArray.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? 'dot active' : 'dot'}
          ></span>
        ))}
      </div> */}
    </div>
  );
}

export default AutoSlider;
