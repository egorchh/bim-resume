import './experience.css'
import linkSvg from '../../assets/images/svg/link.svg'

const Experience = () => {
  return (
    <section className='experience'>
      <h2 className='experience__title'>Опыт работы</h2>
      <ul className="experience__list">
        <li className="experience__item">
          <div className="item__company">
            Петербургская недвижимость
            <a className="item__company-link" target="_blank" href="https://setlgroup.ru/">
              <img className='item__company-svg' alt="Link" src={linkSvg}/>
            </a>
          </div>
          <p className="item__post">Практикант под руководством ведущего инженера по строительству</p>
          <p className="item__date">Июнь 2021 - июль 2021</p>
        </li>
        <li className="experience__item">
          <div className="item__company">
            Реновация города
            <a className="item__company-link" target="_blank" href="https://urbanrenovation.ru/">
              <img className='item__company-svg' alt="Link" src={linkSvg}/>
            </a>
          </div>
          <p className="item__post">Архитектор</p>
          <p className="item__date">Сентябрь 2021 - март 2022</p>
        </li>
        <li className="experience__item">
          <div className="item__company">
            МПИ
            <a className="item__company-link" target="_blank" href="#">
              <img className='item__company-svg' alt="Link" src={linkSvg}/>
            </a>
          </div>
          <p className="item__post">Архитектор</p>
          <p className="item__date">Июнь 2022 - по настоящее время</p>
        </li>
      </ul>
    </section>
  );
};

export default Experience;