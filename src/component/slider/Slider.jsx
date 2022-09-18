import React from 'react';
import { Slide } from 'react-slideshow-image';
import { Link } from 'react-router-dom';

import educationOrganization from '../../assets/images/Image4.png'
import hidrotecnicalCorpus from '../../assets/images/ISPRAVIT_K_NOPRIZU.png'
import shoppingCentre from '../../assets/images/Mnogofunktsionalny_torgovy_tsentr_5.png'
import exhibitionCenter from '../../assets/images/Render_5.png'
import nextArrow from '../../assets/images/svg/arrow-right.svg'
import prevArrow from '../../assets/images/svg/arrow-left.svg'

import 'react-slideshow-image/dist/styles.css';
import './slider.css'

const Slider = () => {
  const projects = [
      {id: 1, img: shoppingCentre, title: 'Многофункциональный торговый комплекс', descr: 'Концептуальный проект'},
      {id: 2, img: hidrotecnicalCorpus, title: 'Гидротехнический корпус Санкт-Петербургского университета Петра Великого', descr: 'Проект реставрации'},
      {id: 3, img: exhibitionCenter, title: 'Выставочный центр г. Пермь', descr: 'Концептуальный проект'},
      {id: 4, img: educationOrganization, title: 'Общеобразовательная организация', descr: 'Концептуальный проект'},
    ];

  // console.log(images[0])

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

  function renderProjects(arr) {
    const projects = arr.map((item) => {
      return (
        <div key={item.id} className="slide__wrapper">
          <Link to={`/projects/${item.id}`}>
            <div className="each-slide-effect">
              <div style={{ 'backgroundImage': `url(${item.img})` }} />
            </div>
          </Link>
          <div className="slide__text">
            <p className="slide__name">{item.title}</p>
            <p className="slide__descr">{item.descr}</p>
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
        {projects}
      </Slide>
    )
  }

  return (
    <div className="shadow">
      {renderProjects(projects)}
    </div>
  );
};

export default Slider;