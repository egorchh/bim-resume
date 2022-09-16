import Experience from '../../component/experience/Experience';
import Parallax from '../../component/parallax/Parralax';
import Greeting from '../../component/ui/Greeting/Greeting';
import SeparatorLine from '../../component/ui/SeparatorLine/SeparatorLine';
import Projects from '../../component/projects/Projects';

import './mainPage.css'
import Skills from '../../component/skills/Skills';

const MainPage = () => {
  return (
    <div className='mainpage'>
      <Parallax />
      <Greeting />
      <SeparatorLine />
      <Experience />
      <SeparatorLine />
      <Projects />
      <SeparatorLine />
      <Skills />
      <SeparatorLine />
    </div>
  );
};

export default MainPage;