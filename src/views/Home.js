import React from 'react';
import {Banner} from '../components/Banner';
import {Card} from '../components/Card';
import {SimpleSlider} from '../components/SlickSlider';
import {Title} from '../components/MainTitle';
import Footer from '../components/Footer';
import {Auxiliary} from '../components/Auxiliary';
import {ContentWrapper} from '../components/ContentWrapper';

const homePageData = [
  {title: 'Якісний ремонт смартфонів в Коломиї.'}
];
const Home = () => {

  return (
    <Auxiliary>
      <ContentWrapper>
        <Title title={homePageData[0].title}/>
        <SimpleSlider/>
        <Banner/>
        <Card/>
      </ContentWrapper>
      <Footer/>
    </Auxiliary>
  );
};

export default Home;

