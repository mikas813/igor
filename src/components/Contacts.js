import React from 'react';
import {FacebookIcon, InstagramIcon, PhoneIcon, YoutubeIcon} from './svgIcons/IconsSvg';

export const Contacts = () => {
  return (
    <div className='sm:w-1/2 mt-10 px-5 w-full'>
      <h2 className='text-xl text-center mb-10'>Наші контакти.</h2>
      <a href='tel:0636552443'  className='m-5'>
        <PhoneIcon/>
        &nbsp;
        0636552443</a>
      <ul>

        <li className='m-5'>
          <a href='https://facebook.com/good.human.75'
             target='_blank'
             rel="noopener noreferrer"
          >
            <FacebookIcon/>
            &nbsp;
            Facebook
          </a>
        </li>

        <li className='m-5'>
          <a href='https://instagram.com/another_space_25?r=nametag'
             target='_blank'
             rel="noopener noreferrer"
          >
            <InstagramIcon/>
            &nbsp;
            Instagram
          </a>
        </li>

        <li className='m-5'>
          <a href='https://www.youtube.com/user/iFixitYourself'
             target='_blank'
             rel="noopener noreferrer"
          >
            <YoutubeIcon/>
            &nbsp;
            Youtube
          </a>
        </li>
      </ul>
    </div>
  );
};