import EmailForm from '../emailForm/EmailForm'

import './contacts.css'

import telegram from '../../assets/images/svg/socialNetworks/telegram-line.svg'
import vk from '../../assets/images/svg/socialNetworks/vkontakte_icon-icons.com_61245.svg'
import instagram from '../../assets/images/svg/socialNetworks/instagram-line.svg'

const Contacts = () => {
  return (
    <footer className='contacts'>
      <div className="contacts__container">
        <h2 className="contacts__title">Контакты</h2>
        <div className="contacts__networks">
          <a className="contacts__network" rel="noreferrer" target="_blank" href="http://t.me/mashkin_aa">
            <img className="contacts__icon" src={telegram} alt="Ссылка на Телеграм" />
          </a>
          <a className="contacts__network" rel="noreferrer" target="_blank" href="https://vk.com/aamash">
            <img className="contacts__icon" src={vk} alt="Ссылка на Вконтакте" />
          </a>
          <a className="contacts__network" rel="noreferrer" target="_blank" href="#">
            <img className="contacts__icon" src={instagram} alt="Ссылка на Инстаграм" />
          </a>
        </div>
        <p className="contacts__descr">Всегда открыт к предложениям и интересным проектам</p>
        <div className="contacts__wrapper">
          <EmailForm />
        </div>
      </div>
    </footer>
  );
};

export default Contacts;