import React from 'react';
import Navigation from './Navigation';

function Header() {

  return (
    
    <header className='shadow-xl m-auto container border-b justify-between flex items-center bg-gray-100'>
      <span className='font-light text-center text-sm border-r-2 p-3 w-1/6'>FYD</span>
      <span className='text-black font-medium text-sm p-3 sm:'>FixYourDevice</span>
      <Navigation/>
    </header>
  )
}

export default Header