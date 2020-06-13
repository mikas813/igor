import React from 'react';
import abouBg from '../images/about-bg.png'

function About() {

  return (
    <div className='container mt-10 mb-40 m-auto shadow-xl'>
      <h3 className='text-center p-5'>Про нас</h3>
      <img src={abouBg} className='m-auto' alt=""/>
      <p className='text-xs p-10 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur eligendi facere id laborum libero minus officiis provident rerum sequi, sit tempore totam. Ab fugit ipsam laborum molestias, pariatur vel.</p>
    </div>
  );
}

export default About