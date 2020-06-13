import React from 'react';
import Slider from 'infinite-react-carousel';
import sliderImg1 from '../images/1.png';
import sliderImg2 from '../images/2.png';
import sliderImg3 from '../images/3.png';


export const SimpleSlider = () => (
  <Slider
    className='container xl mb-10 border w-5/6 shadow-xl m-auto'
    arrows={false}
    autoplay={true}
    autoplaySpeed={3500}
    shift={50}
  >
    <div>
      <img
        src={sliderImg1} alt=""/>
        <span className='absolute bg-gray-300 px-10 py-5 bottom-0 right-0 opacity-75 rounded'>
          <h2>Заміна акумулятора</h2>
        </span>
    </div>
    <div>
      <img
        src={sliderImg2} alt=""/>
      <span className='absolute bg-gray-300 px-10 py-5 bottom-0 right-0 opacity-75 rounded'>
          <h2>Заміна акумулятора</h2>
        </span>
    </div>
    <div>
      <img
        src={sliderImg3} alt=""/>
      <span className='absolute bg-gray-300 px-10 py-5 bottom-0 right-0 opacity-75 rounded'>
          <h2>Заміна акумулятора</h2>
        </span>
    </div>
  </Slider>
);
