import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useForm } from '@formspree/react';
import * as Yup from 'yup'

import './emailForm.css'

const EmailForm = () => {
  const [state, handleSubmit] = useForm('xgeqadrr');

  const succesMessage = state.succeeded ? <SuccessMessage/> : null

  const eventHandle = (callback) => {
    if (typeof ym === 'function') {
      // eslint-disable-next-line
      ym(98572163,'reachGoal','sendContactForm', () => console.log('form submit button click'))
    }

    setTimeout(() => {
      callback();
    })
  }

  return (
    <Formik
      initialValues={{email: '', text: ''}}
      validationSchema={Yup.object({
        email: Yup.string().required("Обязательное поле").email("Почта введена неверно"),
        text: Yup.string().required("Обязательное поле").min(10, "Не менее десяти символов")
      })}
      validateOnBlur
      onSubmit={{}}
    >
      {({isValid, handleReset}) => (
        <Form 
          onSubmit={handleSubmit}
          className='contacts__form'
        >
          <div className="contacts__input-wrapper">
            <Field className='contacts__input' placeholder="Введите вашу почту" id="email" name="email" type="email"/>
            <ErrorMessage className='error-email' name="email" component="div"/>
          </div>
          <div className="contacts__textarea-wrapper">
            <Field component="textarea" className='contacts__textarea' placeholder="Ваше сообщение" id="text" name="text" type="textarea"/>
            <ErrorMessage className='error-textarea' name="text" component="div"/>
          </div>
          <button onClick={() => eventHandle(handleReset)} disabled={state.submitting || !isValid} className={`contacts__button ${state.submitting || !isValid ? 'disabled-button': 'active-button'}`} type="submit">
            Отправить
          </button>
          {isValid ? succesMessage : null}
        </Form>
      )}
    </Formik>
  );
};

export default EmailForm;

const SuccessMessage = () => {
  return (
    <div className="success-message">
      Cообщение успешно отправлено
    </div>
  );
}