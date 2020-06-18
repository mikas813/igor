import React from 'react';
import {Title} from '../components/MainTitle';
import {FormComponent} from '../components/Form';
import Footer from '../components/Footer';
import {Auxiliary} from '../components/Auxiliary';
import {ContentWrapper} from '../components/ContentWrapper';
import {Contacts} from '../components/Contacts';

export const ContactUs = () => {
  return (
    <Auxiliary>
      <ContentWrapper>
        <div className="container shadow-xl pb-10 border-t-2 px-8 text-center m-auto">
          <Title title={'Звяжіться з нами.'}/>
          <p>Заповніть форму і надішліть нам повідомлення або скористайтеся алтернативним шляхом!</p>
          <div className='flex flex-wrap'>
            <FormComponent/>
            <Contacts/>
          </div>
        </div>
      </ContentWrapper>
      <Footer/>
    </Auxiliary>
  );
};




