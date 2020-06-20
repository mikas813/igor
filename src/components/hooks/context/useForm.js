import React, {useState, useEffect} from 'react'
import emailjs from 'emailjs-com/source/index'
import validateErrors from '../validate'

const useForm = () => {
  const [template_params, setTemplate_params] = useState( {
    'from_name': '',
    'phone_number': '',
    'message': ''
  } )
  let [modalWindow, setModalWindow] = useState( null )
  const [errors, setErrors] = useState( {} )
  const [isSubmiting, setIsSubmiting] = useState( false )

  const onChangeHandler = (event) => {
    const {name, value} = event.target
    setTemplate_params( {
      ...template_params,
      [name]: value
    } )
  };

  const handlerSubmit = (event) => {
    event.preventDefault()

    setErrors( validateErrors( template_params ) )
    setIsSubmiting( true )
  }

  (function () {
    emailjs.init( 'user_w80ekb2MGUUxRa5KQctyt' )
  })()

  useEffect(() => {
    if(Object.keys( errors ).length === 0 && isSubmiting ) {
      sendEmail()
    }
  },[errors])

  const sendEmail = () => {

    emailjs.send( 'gmail', 'template_b7SEHVAT', template_params )
      .then( () => {
    setModalWindow(
      <div className='w-auto text-xl z-50 top-0 left-0 bottom-0 right-0 fixed h-auto bg-black-t-50'>
        <div className='m-auto mt-40 shadow-xl border-t-2 pt-10 px-5 z-50 bg-white w-3/4 md:w-1/3 h-40'>
          <h4>Дякуємо!</h4>
          <p>Ми неодмінно з вами звяжемося!</p>
        </div>
      </div>
    )
    setTimeout( () => {
      document.getElementById( 'emailForm' ).reset()
      setModalWindow( modalWindow = null )
    }, 2000 )
      }, (error) => {
        console.log( error.text )
      } )
    setTemplate_params( {
      ...template_params,
      'from_name': '',
      'phone_number': '',
      'message': ''
    } )
  }

  return {
    onChangeHandler,
    handlerSubmit,
    sendEmail,
    errors,
    modalWindow,
    template_params,
  }
}

export default useForm