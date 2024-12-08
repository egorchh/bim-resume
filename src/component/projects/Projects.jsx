import Slider from "../slider/Slider";

import './projects.css'
import {CardTile} from "../cardTile/CardTile";
import { A_SLIDER, FIRST_TEST_GROUP } from "../../consts";

const Projects = ({ testGroups }) => {
  return (
    <section className="projects">
      <h2 className="projects__title">Примеры проектов</h2>
      <p className="projects__description">
        В моем портфолио присутствуют рендеры, конкурсные проекты, архитектурные презентации и графика
      </p>
        {testGroups[FIRST_TEST_GROUP] === A_SLIDER ? <Slider /> :  <CardTile view='tile'/>}
    </section>
  );
};

export default Projects;