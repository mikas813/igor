import React from 'react'
import Form from 'muicss/lib/react/form'
import Input from 'muicss/lib/react/input'
import Textarea from 'muicss/lib/react/textarea'
import Button from 'muicss/lib/react/button'
import useForm from './hooks/context/useForm'


export const FormComponent = () => {

  const {
    onChangeHandler,
    handlerSubmit,
    errors,
    template_params,
    modalWindow
  } = useForm()


  return (
    <Form id='emailForm' onSubmit={handlerSubmit} className='mt-10 px-5 sm:w-1/2 text-xs w-full'>
      {modalWindow}
      <legend>Напишіть нам...</legend>
      <input
        type="hidden"
        name="contact_number"
      />

      {errors.from_name && <p className="absolute text-red-600">{errors.from_name}</p>}
      <Input
        onChange={(event) => onChangeHandler( event )}
        value={template_params.from_name}
        type="text"
        name="from_name"
        placeholder="Ваше імя."
      />


      {errors.phone_number && <p className="absolute text-red-600">{errors.phone_number}</p>}
      <Input
        onChange={(event) => onChangeHandler( event )}
        value={template_params.phone_number}
        name="phone_number"
        type="number"
        placeholder="Ваш номер телефону."
      />

      {errors.message && <p className="absolute text-red-600">{errors.message}</p>}
      <Textarea
        onChange={(event) => onChangeHandler( event )}
        value={template_params.message}
        name="message"
        type="text"
        placeholder="Ваше повідомлення."
      />

      <Button
        className='z-0'
        type="submit"
        variant="raised"
      >Надіслати.</Button>
    </Form>
  )
}



