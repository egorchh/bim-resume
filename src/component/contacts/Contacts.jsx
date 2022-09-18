import EmailForm from '../emailForm/EmailForm'

import './contacts.css'

import telegram from '../../assets/images/svg/socialNetworks/telegram-line.svg'
import vk from '../../assets/images/svg/socialNetworks/vkontakte_icon-icons.com_61245.svg'
import instagram from '../../assets/images/svg/socialNetworks/instagram-line.svg'

import tel from '../../assets/images/svg/phone-line.svg'
import email from '../../assets/images/svg/mail-line.svg'

const Contacts = () => {
  return (
    <footer className='contacts'>
      <div className="contacts__container">
        <div className="contacts__wrapper">
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
          <div className="contacts__tell">
            <img className="contacts__tell-svg" src={tel} alt="Номер телефона" />
            <p className="contacts__tell-text">+7 (981) 681 51-94</p>
          </div>
          <div className="contacts__email">
            <img className="contacts__email-svg" src={email} alt="Почтовый адрес" />
            <p type="email" className="contacts__email-text">mashkin.aa@edu.spbstu.ru</p>
          </div>
        </div>
        <EmailForm />
      </div>
    </footer>
  );
};

export default Contacts;