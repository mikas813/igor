import React from 'react';

function ImageCard(props) {

  const style = {
    maxWidth: '200px',
    maxHeight: '200px',
  };

  return (
    <div style={style} className='m-auto border-t-2 px-5 mb-5 shadow-xl'>
      <img
        onClick={props.showFullImage}
        src={props.image}
        alt={props.alt}
      />
    </div>
  );
}

export default ImageCard