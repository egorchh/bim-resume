import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './carousel.css'

import PhotoModal from '../photoModal/PhotoModal';

const Carousel = ({projects, id}) => {
  const [photoURL, setPhotoURL] = useState('')
  const [display, setDisplay] = useState('none')

  const openModal = (url) => {
    setPhotoURL(url)
    setDisplay('block')
  }

  const closeModal = () => {
    setDisplay('none')
    setPhotoURL('')
  }

  const renderProjects = (arr) => {
    const projects = arr.map(item => {
      return (
        <SwiperSlide className='carousel__item'>
          <li onClick={() => openModal(item)} key={id} className="carousel__item">
            <img className="carousel__image" src={item} alt='Фото проекта' />
          </li>
        </SwiperSlide>
      )
    })

    return <ul className="carousel__list">{projects}</ul>
  }

  return (
    <div>
      <Swiper
        // spaceBetween={390}
        slidesPerView={3}
        loop={true}
      >
        <div>
          {renderProjects(projects)}
        </div>
      </Swiper>
      <div className="carousel__helper">Листайте ленту и нажмите на понравившийся рендер для детального осмотра</div>
      <PhotoModal closeModal={closeModal} photoURL={photoURL} display={display} />
    </div>
  );
};

export default Carousel;