import React from 'react';
import abouBg from '../images/about-bg.jpg';
import {Title} from '../components/MainTitle';
import Footer from '../components/Footer';
import {ContentWrapper} from '../components/ContentWrapper';
import {Auxiliary} from '../components/Auxiliary';

const aboutPageData = [
  {
    title: 'Про нас.',
    aboutUsText: 'Ми здійснюємо гарантійне і після гарантійне обслуговування провідних брендів мобільних телефоніа та' +
      ' планшетів. Практикуються термінові ремонти.' +
      'Перекладіть Ваші проблеми в надійні та грамотні руки спеціалістів нашого спеціалізованого сервісного центру!'
  }
];

function About() {

  return (
    <Auxiliary>
      <ContentWrapper>
        <div className="container shadow-xl pb-10 border-t-2 px-8 text-center m-auto">
        <Title title={aboutPageData[0].title}/>
          <img src={abouBg} className='m-auto' alt="Про нас."/>
          <p className='text-xs p-10 text-center'>{aboutPageData[0].aboutUsText}</p>
        </div>
      </ContentWrapper>
      <Footer/>
    </Auxiliary>
  );
}

export default About;


