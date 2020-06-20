export default function validateErrors(values) {
  let errors = {}

  if (!values.from_name) {
    errors.from_name = 'Введіть ваше імя! '
  } else
    if (values.from_name.length < 3) {
      errors.from_name = 'Мінімальна довжина імя 3 букви! '
    }
  if (!values.phone_number) {
    errors.phone_number = 'Введіть ваш номер телефону! '
  } else
    if (values.phone_number.length < 10) {
      errors.phone_number = 'Мінімальна довжина номеру 10 цифр! '
    }
  if (!values.message) {
    errors.message = 'Введіть ваше повідомлння! '
  } else
    if (values.message.length < 3) {
      errors.message = 'Мінімальна довжина повідомлння 10 букв! '
    }
  return errors
}