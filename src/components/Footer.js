import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <footer className='shadow-inner bg-gray-200 text-center text-xs p-3 h-40 bottom-0 absolute mt-10 w-full'>
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
      <Link
        to='/contact-us'
        className='py-1 border-b block'
      >
        Звяжіться з нами
      </Link>
      <div className="fb-like" data-href="https://fix-yourdevice.web.app" data-width="100px" data-layout="button"
           data-action="like" data-size="small" data-share="true"></div>
      <div>&copy; IgorKO Copyright {new Date().getFullYear()}</div>
    </footer>
  );
}

export default Footer;