import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useForm } from '@formspree/react';
import * as Yup from 'yup'

import Spinner from 'react-bootstrap/Spinner';

import './emailForm.css'
import { useState } from 'react';

const EmailForm = () => {
  const [state, handleSubmit] = useForm('xlevjpvb');

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const clearForm = () => {
    if (state.succeeded) {
      setEmail('');
      setMessage('');
      alert('Ваше сообщение успешно отправлено!')
    } else {
      alert('Кажется произошла ошибка')
    }
  }

  

  console.log('render')

  const clazz = state.submitting ? 'disabled-button': 'active-button';
  // const submitMessage = state.succeeded ? 

  return (
    <Formik
      initialValues={{email: '', text: ''}}
      validationSchema={Yup.object({
        email: Yup.string().required("Обязательное поле").email("Почта введена неверно"),
        text: Yup.string().required("Обязательное поле").min(10, "Не менее десяти символов")
      })}
      onSubmit = {clearForm}
    >
      <Form 
        onSubmit={handleSubmit}
        className='contacts__form'
      >
        <div className="contacts__input-wrapper">
          <Field value={email} onChange={(e) => setEmail(e.target.value)} className='contacts__input' placeholder="Введите вашу почту" id="email" name="email" type="email"/>
          <ErrorMessage className='error-email' name="email" component="div"/>
        </div>
        <div className="contacts__textarea-wrapper">
          <Field value={message} onChange={(e) => setMessage(e.target.value)} component="textarea" className='contacts__textarea' placeholder="Ваше сообщение" id="text" name="text" type="textarea"/>
          <ErrorMessage className='error-textarea' name="text" component="div"/>
        </div>
        <button onClick={clearForm} disabled={state.submitting} className={`contacts__button ${clazz}`} type="submit">
          Отправить
        </button>
        {/* <SuccessMessage /> */}
      </Form>
    </Formik>
  );
};

export default EmailForm;

const SuccessMessage = () => {
  return (
    <div className="success-message">
      Ваше сообщение успешно отправлено
    </div>
  );
}