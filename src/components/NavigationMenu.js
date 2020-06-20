import React from 'react';
import MenuBG from '../images/menu-bg.png';
import {Link} from 'react-router-dom';

function NavigationMenu(props) {

  return (
    <div>
      <span className='font-medium w-full pt-10'>Меню</span>
      <ul className='text-sm'>
        <li className='mt-3 pl-10 pr-10'>
          <Link
            to='/'
            className='block py-1 border-t border-b'
            onClick={props.closeMenu}
          >
            На головну
          </Link>
        </li>
        <li className='shadow-sm pl-10 pr-10'>
          <Link
            to='/about'
            className='py-1 border-b block'
            onClick={props.closeMenu}
          >
            Про нас
          </Link>
        </li>
        <li className='shadow-sm pl-10 pr-10'>
          <Link
            to='/more'
            className='py-1 border-b block'
            onClick={props.closeMenu}
          >
            Наші роботи
          </Link>
        </li>
        <li className='shadow-sm pl-10 pr-10'>
          <Link
            to='/contact-us'
            className='py-1 border-b block'
            onClick={props.closeMenu}
          >
            Звяжіться з нами
          </Link>
        </li>
        <div className="m-2 fb-like" data-href="https://fix-yourdevice.web.app" data-width="100px" data-layout="button"
             data-action="like" data-size="small" data-share="true"></div>
      </ul>
      <h2 className='text-center text-sm font-light mt-5 '>Швидко. Якісно. Надійно.</h2>
      <h2>FYD</h2>
      <img src={MenuBG} className='m-auto' alt=""/>
    </div>
  );
}

export default NavigationMenu;