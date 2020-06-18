import React from 'react';
import Navigation from './Navigation';
import logo from '../images/logo.png';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header
      className=
        'shadow-xl m-auto container
        border-b justify-between flex
        items-center bg-gray-100'
    >
      <span
        className=
          'font-light flex justify-center
           text-center text-sm border-r-2
           p-3 w-1/6'>
        <Link to='/'>
          <img style={{minWidth: '30px', height: '30px'}}
          src={logo} alt="Logotype FYD"/>
        </Link>
      </span>

      <span className='text-black font-medium text-sm p-3 sm:'
      >FixYourDevice
      </span>

      <Navigation/>
    </header>
  );
}

export default Header;