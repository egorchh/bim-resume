import React from 'react';
import { Slide } from 'react-slideshow-image';

import educationOrganization from '../../assets/images/Image4.png'
import hidrotecnicalCorpus from '../../assets/images/ISPRAVIT_K_NOPRIZU.png'
import shoppingCentre from '../../assets/images/Mnogofunktsionalny_torgovy_tsentr_5.png'
import exhibitionCenter from '../../assets/images/Render_5.png'
import nextArrow from '../../assets/images/svg/arrow-right.svg'
import prevArrow from '../../assets/images/svg/arrow-left.svg'

import 'react-slideshow-image/dist/styles.css';
import './slider.css'

const Slider = () => {
  const images = [
          shoppingCentre, hidrotecnicalCorpus, exhibitionCenter, educationOrganization,
      ];

  const prevButtonStyle = {
    background: 'none',
    border: '0px',
    transform: 'translateX(-250%)'
  };

  const nextButtonStyle = {
    background: 'none',
    border: '0px',
    transform: 'translateX(250%)'
  };

  const indicators = () => (<div className="indicator" />);

  const properties = {
      prevArrow: <button style={{ ...prevButtonStyle }}>
        <img style={{width: '35px'}} src={prevArrow} alt="Prev arrow" />
      </button>,
      nextArrow: <button style={{ ...nextButtonStyle }}>
        <img style={{width: '35px'}} src={nextArrow} alt="Next arrow" />
      </button>
  }

  return (
    <div className="shadow">
      <Slide 
        transitionDuration={500} 
        indicators={indicators} 
        easing={'ease-out'} 
        autoplay={false} {...properties}
      >
          <div className="slide__wrapper">
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }} />
            </div>
            <div className="slide__text">
              <p className="slide__name">Многофункциональный торговый комплекс</p>
              <p className="slide__descr">Концептуальный проект</p>
            </div>
          </div>
          <div className="slide__wrapper">
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }} />
            </div>
            <div className="slide__text">
              <p className="slide__name">Гидротехнический корпус Санкт-Петербургского университета Петра Великого</p>
              <p className="slide__descr">Проект реставрации</p>  
            </div>
          </div>
          <div className="slide__wrapper">
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }} />
            </div>
            <div className="slide__text">
              <p className="slide__name">Выставочный центр г. Пермь</p>
              <p className="slide__descr">Концептуальный проект</p>
            </div>
          </div>
          <div className="slide__wrapper">
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[3]})` }} />
            </div>
            <div className="slide__text">
              <p className="slide__name">Общеобразовательная организация</p>
              <p className="slide__descr">Концептуальный проект</p>
            </div>
          </div>
      </Slide>
    </div>
  );
};

export default Slider;