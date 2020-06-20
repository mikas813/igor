import React from 'react';
import cardImage1 from '../images/card-1.jpg';
import cardImage2 from '../images/card-2.jpg';
import cardImage3 from '../images/card-3.jpg';


export const Card = () => {

  const state = [
    {
      title: 'Термін ремонту від 1 дня',
      text: 'Час ремонту смартфону від 1 до 5 днів у 90% звернень. (за наявновності запчастин)',
      image: cardImage1
    },
    {
      title: 'Вартість ремонту від 250 грн.',
      text: 'Виконуємо ремонт смартфонів будь-якої складності.',
      image: cardImage2
    },
    {
      title: 'Гарантія 6 місяців',
      text: 'Надаємо гарантію 6 місяців, виправимо повторну поломку абсолютно безкоштовно.',
      image: cardImage3
    }
  ];


  return (
    <div className='container md:flex justify-around  mt-10 mb-10'>
      {state.map( (card, index) => {
        return (
          <div key={index} className='m-auto  border w-1/2 md:w-1/4 mb-5 shadow-xl text-center bg-white'>
            <img className='m-auto h-64' src={card.image} alt="FixYouDevice Якісний ремонт смартфонів в Коломиї"/>
            <p className='mt-4 border-t-2 font-bold'>{card.title}</p>
            <p className='p-3'>{card.text}</p>
          </div>
        );
      } )}
    </div>
  );
};