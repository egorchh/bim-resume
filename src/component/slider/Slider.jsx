import { useContext } from 'react';
import { DataContext } from '../../dataContext/DataContext';
import { Slide } from 'react-slideshow-image';
import { Link } from 'react-router-dom';


import nextArrow from '../../assets/images/svg/arrow-right.svg'
import prevArrow from '../../assets/images/svg/arrow-left.svg'

import 'react-slideshow-image/dist/styles.css';
import './slider.css'

const Slider = () => {

  const data = useContext(DataContext)

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
    const data = arr.map((item) => {
      return (
        <div key={item.id} className="slide__wrapper">
          <Link to={{pathname: `/projects/${item.id}`, props: item}}>
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