import { useContext } from 'react';
import { DataContext } from '../../dataContext/DataContext';
import { Slide } from 'react-slideshow-image';
import { Link } from 'react-router-dom';


import nextArrow from '../../assets/images/svg/arrow-right.svg'
import prevArrow from '../../assets/images/svg/arrow-left.svg'

import linkSVG from '../../assets/images/svg/link.svg'

import 'react-slideshow-image/dist/styles.css';
import './slider.css'

const Slider = () => {

  const data = useContext(DataContext)

  const indicators = () => (<div className="indicator" />);

  const properties = {
      prevArrow: <button className='prev-button'>
        <img className='prev-button__svg'  src={prevArrow} alt="Prev arrow" />
      </button>,
      nextArrow: <button className='next-button'>
        <img className='next-button__svg' src={nextArrow} alt="Next arrow" />
      </button>
  }

  function renderProjects(arr) {
    const data = arr.map((item) => {
      return (
        <div key={item.id} className="slide__wrapper">
          <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${item.img})`, cursor: 'default' }} />
          </div>
          <div className="slide__text">
            <p className="slide__name">{item.title}</p>
            <p className="slide__descr">{item.descr}</p>
            <Link className='slide__link'  to={{pathname: `/projects/${item.id}`, props: item}}>
              <d className="slide__link-wrapper">
                <p className="slide__link-text">
                  Посетить страницу проекта
                </p>
                <img className="slide__link-svg" src={linkSVG} alt="Посетить страницу проекта" />
              </d>
            </Link>
          </div>
        </div>
      );
    });


    return (
      <Slide 
        transitionDuration={500} 
        indicators={indicators} 
        easing={'ease-out'} 
        autoplay={false} {...properties}
      >
        {data}
      </Slide>
    )
  }

  return (
    <div className="shadow">
      {renderProjects(data)}
    </div>
  );
};

export default Slider;