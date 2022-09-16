import './skills.css'

import time from '../../assets/images/svg/skills/time-line.svg'
import eye from '../../assets/images/svg/skills/search-eye-line.svg'
import globe from '../../assets/images/svg/skills/globe-line.svg'
import money from '../../assets/images/svg/skills/database-2-line.svg'
import chat from '../../assets/images/svg/skills/chat-1-line.svg'
import code from '../../assets/images/svg/skills/code-s-slash-line.svg'

const Skills = () => {
  return (
    <section className="skills">
      <h2 className="skills__title">Навыки</h2>
      <div className="skills__wrapper">
        <ul className="skills__list">
          <li className="skills__item">
            <img className='skills__svg' src={time} alt="Responsibility" />
            <p className="skills__item-name">
              Ответственность
            </p>
            <p className="skills__item-descr">
              Управление и планирование временем позволяет мне реализовывать проекты в заданный срок.
            </p>
          </li>
          <li className="skills__item">
            <img className='skills__svg' src={eye} alt="Attentiveness" />
            <p className="skills__item-name">
              Внимательность
            </p>
            <p className="skills__item-descr">
              Я работаю в индустрии 12 лет и видел много реализованных дизайн проектов, что помогает мне применять актуальные дизайн-решения
            </p>
          </li>
          <li className="skills__item">
            <img className='skills__svg' src={globe} alt="Education" />
            <p className="skills__item-name">
              Образование
            </p>
            <div>
              <p className="skills__item-university">
              Санкт-Петербургский политехнический институт Петра-Великого
              </p>
              <p className="skills__item-isi">
                Инженерно-строительный институт
              </p>
              <p className="skills__item-direction">
                Промышленное и гражданское строительство
              </p>
            </div>
          </li>
          <li className="skills__item">
            <img className='skills__svg' src={money} alt="Money" />
            <p className="skills__item-name">
              Фиксированные цены
            </p>
            <p className="skills__item-descr">
              Я предлагаю своим клиентам фиксированные объективные цены, которые указываются в контракте до начала работы
            </p>
          </li>
          <li className="skills__item">
            <img className='skills__svg' src={chat} alt="Communication" />
            <p className="skills__item-name">
              Коммуникабельность
            </p>
            <p className="skills__item-descr">
              Я обеспечиваю брендам осмысленную и актуальную айдентику, которая будет выделяться среди конкурентов
            </p>
          </li>
          <li className="skills__item">
            <img className='skills__svg' src={code} alt="Knowledge of the programms" />
            <p className="skills__item-name">
              Знание программ
            </p>
            <div style={{width: '100%'}}>
              <ul className="skills__item-programs">
                <li className="skills__item-program">Autodesk Revit</li>
                <li className="skills__item-program">Autodesk Autocad</li>
                <li className="skills__item-program">Adobe Photoshop</li>
                <li className="skills__item-program">Microsoft Office Pack</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;