import React from 'react';

export const Card = () => {

  const state = [
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ex.',
      image: 'https://media.4rgos.it/s/Argos/6014942_R_SET?$Main768$&w=620&h=620'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ex.',
      image: 'https://media.4rgos.it/s/Argos/6014942_R_SET?$Main768$&w=620&h=620'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ex.',
      image: 'https://media.4rgos.it/s/Argos/6014942_R_SET?$Main768$&w=620&h=620'
    }
  ];


  return (
    <div className='container sm:flex justify-around  mt-10 mb-10 text-xs'>
      {state.map( (card, index) => {
        return (
          <div key={index} className=' border w-1/2 sm:w-1/4 m-auto mb-5 shadow-xl text-center bg-white'>
            <img src={card.image} alt=""/>
            <p className='p-3 border-t-2'>{card.title}</p>
          </div>
        );
      })}
    </div>
  );
};