import './photoModal.css'

import closeButton from '../../assets/images/svg/close.svg'

const PhotoModal = ({photoURL, display, closeModal}) => {
  return (
    <div className='modal' style={{display: `${display}`}}>
      <div className="modal__wrapper">
        <img className="modal__image" src={photoURL} alt="Фото проекта" />
        <img onClick={closeModal} className="modal__close" src={closeButton} alt="Кнопка: закрыть" />
      </div>
    </div>
  );
};

export default PhotoModal;