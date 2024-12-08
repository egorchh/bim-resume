import { Link } from "react-router-dom";
import './project-card.css';

import linkSVG from '../../assets/images/svg/link.svg';

export const ProjectCard = ({ item }) => {
    return (
        <div key={item.id} className={`slide__wrapper`}>
            <div className="each-slide-effect">
                <div style={{'backgroundImage': `url(${item.img})`, cursor: 'default'}}/>
            </div>
            <div className="slide__text">
                <p className="slide__name">{item.title}</p>
                <p className="slide__descr">{item.descr}</p>
                <Link className='slide__link' to={{pathname: `/projects/${item.id}`, props: item}}>
                    <div className="slide__link-wrapper">
                        <p className="slide__link-text">
                            Посетить страницу проекта
                        </p>
                        <img className="slide__link-svg" src={linkSVG} alt="Посетить страницу проекта"/>
                    </div>
                </Link>
            </div>
        </div>
    );
};