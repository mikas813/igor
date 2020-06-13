import React from 'react';
import {Banner} from '../components/Banner';
import {Card} from '../components/Card';
import {SimpleSlider} from '../components/SlickSlider';

function Home() {

  return (
    <div style={{fontFamily: 'Exo 2, sans-serif'}} className='container m-auto'>
      <h1 className='text-center text-2xl p-4 mt-6'>Якісний ремонт смартфонів в Kоломиї</h1>
      <SimpleSlider/>
      <Banner/>
      <Card/>
    </div>
  );
}

export default Home