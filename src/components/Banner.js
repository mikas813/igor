import React from 'react';
import bannerBg from '../images/banner-bg.png';


export const Banner = () => {

  return (
    <div className='text-center shadow-xl w-5/6 m-auto border'>
      <img src={bannerBg} className='m-auto' alt=""/>
      <p className='border-t-2 p-3 text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda corporis distinctio dolores explicabo facere incidunt soluta vel. Atque consequuntur culpa explicabo nam officiis pariatur perspiciatis repellendus reprehenderit tempora voluptate!</p>
    </div>
  )
};