import Slider from "../slider/Slider";

import './projects.css'
import {CardTile} from "../cardTile/CardTile";

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="projects__title">Примеры проектов</h2>
      <p className="projects__description">
        В моем портфолио присутствуют рендеры, конкурсные проекты, архитектурные презентации и графика
      </p>
        {/*<Slider /> */}
        <CardTile view='tile' />
    </section>
  );
};

export default Projects;