import React, {useState} from 'react';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';
import emailjs from 'emailjs-com';

export const FormComponent = () => {
  let [modalWindow, setModalWindow] = useState( null );

  const template_params = {
    'from_name': '',
    'phone_number': '',
    'message': ''
  };

  const onChangeHandler = (event) => {
    template_params[event.target.name] = event.target.value;
  };

  (function () {
    emailjs.init( 'user_w80ekb2MGUUxRa5KQctyt' );
  })();


  function sendEmail(e) {
  e.preventDefault();
    emailjs.send( 'gmail', 'template_b7SEHVAT', template_params )
      .then( () => {
        setModalWindow(
          <div className='w-auto text-xl z-50 top-0 left-0 bottom-0 right-0 fixed h-auto bg-black-t-50'>
            <div className='m-auto mt-40 shadow-xl border-t-2 pt-10 px-5 z-50 bg-white w-2/5 h-40'>
              <h4>Дякуємо!</h4>
              <p>Ми неодмінно з вами звяжемося!</p>
            </div>
          </div>
        );
        setTimeout( () => {
          document.getElementById('emailForm').reset();
          setModalWindow( modalWindow = null );
        }, 2000 );
      }, (error) => {
        console.log( error.text );
      } );
  }

  return (
    <Form id='emailForm' onSubmit={sendEmail} className='mt-10 px-5 sm:w-1/2 text-xs w-full'>
      {modalWindow}
      <legend>Напишіть нам...</legend>
      <input
        type="hidden"
        name="contact_number"
      />
      <Input
        onChange={(event) => onChangeHandler( event )}
        type="text"
        name="from_name"
        required={true}
        placeholder="Ваше імя. (обовязково)"
      />

      <Input
        onChange={(event) => onChangeHandler( event )}
        name="phone_number"
        type="text"
        required={true}
        placeholder="Ваш номер телефону. (обовязково)"
      />
      <Textarea
        onChange={(event) => onChangeHandler( event )}
        name="message"
        required={true}
        type="text"
        placeholder="Ваше повідомлення. (обовязково)"
      />
      <Button
        className='z-0'
        type="submit"
        variant="raised"
      >Надіслати.</Button>
    </Form>
  );
};



