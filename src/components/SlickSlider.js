import React from 'react';
import Slider from 'infinite-react-carousel';
import sliderImg1 from '../images/1.jpg';
import sliderImg2 from '../images/2.jpg';
import sliderImg3 from '../images/3.jpg';


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
        src={sliderImg1} alt="FixYouDevice Якісний ремонт смартфонів в Коломиї"/>
        <span className='absolute bg-gray-300 px-10 py-5 bottom-0 right-0 opacity-75 rounded'>
          <h2 className='text-xl'>Заміна тач скріна!</h2>
        </span>
    </div>
    <div>
      <img
        src={sliderImg2} alt="FixYouDevice Якісний ремонт смартфонів в Коломиї"/>
      <span className='absolute bg-gray-300 px-10 py-5 bottom-0 right-0 opacity-75 rounded'>
          <h2 className='text-xl'>Заміна дисплейного модуля!</h2>
        </span>
    </div>
    <div>
      <img
        src={sliderImg3} alt="FixYouDevice Якісний ремонт смартфонів в Коломиї"/>
      <span className='absolute bg-gray-300 px-10 py-5 bottom-0 right-0 opacity-75 rounded'>
          <h2 className='text-xl'>Заміна акумулятора!</h2>
        </span>
    </div>
    <div>
      <img
        src={sliderImg3} alt="FixYouDevice Якісний ремонт смартфонів в Коломиї"/>
      <span className='absolute bg-gray-300 px-10 py-5 bottom-0 right-0 opacity-75 rounded'>
          <h2 className='text-xl'>Перепайка гнізда зарядки!</h2>
        </span>
    </div>
  </Slider>
);
