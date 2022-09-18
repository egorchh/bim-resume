import { useContext } from "react";
import { DataContext } from "../../dataContext/DataContext";

import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import './projectPage.css'

import prevArrow from '../../assets/images/svg/arrow-left.svg'
import Carousel from "../../component/carousel/Carousel";

const ProjectPage = () => {
  const { id } = useParams();
  const data = useContext(DataContext)

  const getElementById = () => {
    const filteredData = data.filter(item => item.id === +id);

    return filteredData;
  }

  const {img, title, descr, projects} = getElementById(id, data)[0];

  return (
    <section className="project">
      <Helmet>
        <meta name="description" content={`${title}`} />
        <title>{title}</title>
      </Helmet>
      <>
        <Link to="/" className="project__back">
          <img className="project__back-svg" src={prevArrow} alt="Вернуться назад" />
          Вернуться к резюме
        </Link>
      </>
      <div className="project__wrapper">
        <img src={img} alt={title} className="project__main-image"/>
        <div className="project__info">
          <h2 className="project__name">{title}</h2>
          <p className="project__descr">{descr}</p>
        </div>
      </div>
      <Carousel id={id} projects={projects} />
    </section>
  );
};

export default ProjectPage;