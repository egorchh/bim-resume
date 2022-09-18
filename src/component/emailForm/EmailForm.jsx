import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'

import './emailForm.css'

const EmailForm = () => {
  return (
    <Formik
      initialValues={{email: '', text: ''}}
      validationSchema={Yup.object({
        email: Yup.string().required("Обязательное поле").email("Почта введена неверно"),
        text: Yup.string().required("Обязательное поле").min(10, "Не менее десяти символов")
      })}
      onSubmit = {(values) => console.log(values)}
    >
      <Form 
        action="https://formspree.io/f/xlevjpvb"
        method="POST" 
        className='contacts__form'
      >
        <div className="contacts__input-wrapper">
          <Field className='contacts__input' placeholder="Введите почту" id="email" name="email" type="email"/>
          <ErrorMessage className='error-email' name="email" component="div"/>
        </div>
        <div className="contacts__textarea-wrapper">
          <Field component="textarea" className='contacts__textarea' placeholder="Ваше сообщение" id="text" name="text" type="textarea"/>
          <ErrorMessage className='error-textarea' name="text" component="div"/>
        </div>
        <button className='contacts__button' type="submit">
          Отправить
        </button>
      </Form>
    </Formik>
  );
};

export default EmailForm;