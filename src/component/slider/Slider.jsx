import { useContext } from 'react';
import { DataContext } from '../../dataContext/DataContext';
import { Slide } from 'react-slideshow-image';

import nextArrow from '../../assets/images/svg/arrow-right.svg'
import prevArrow from '../../assets/images/svg/arrow-left.svg'

import 'react-slideshow-image/dist/styles.css';
import './slider.css'
import {ProjectCard} from "../projectCard/ProjectCard";

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
      return <ProjectCard key={item.id} item={item} />;
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