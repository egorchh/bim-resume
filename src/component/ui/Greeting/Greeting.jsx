import './greeting.css'

const Greeting = () => {
  return (
      <div className='greeting'>
          <p className='greeting__text'>
              Давайте познакомимся, меня зовут Александр! Я - архитектор с образованием инженера промышленного и
              гражданского строительства
          </p>
          <p className='greeting__text'>
              Выполню проект любой сложности по вашей задумке
          </p>
      </div>
  );
};

export default Greeting;