import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {

  return (
    <footer className='shadow-inner bg-gray-200 text-center text-xs p-3 bottom-0 mt-10 w-full'>
          <Link
            to='/'
            className='block py-1 border-b'
          >
            На головну
          </Link>
          <Link
            to='/about'
            className='py-1 border-b block'
          >
            Про нас
          </Link>
          <Link
            to='/more'
            className='py-1 border-b block'
          >
            Наші роботи
          </Link>
      &copy; IgorKO Copyright 2020
    </footer>
  )
}

export default Footer