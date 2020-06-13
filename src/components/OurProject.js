import React from 'react';
import image from '../images/iphone-screen-repair.jpg'

function OurProject() {

  const style = {
    maxWidth: '200px',
    maxHeight: '200px',
  };
  return (
    <div style={style} className='mr-5 m-auto'>
      <img  src={image} alt=""/>
    </div>
  );
}

export default OurProject