import Experience from '../../component/experience/Experience';
import Parallax from '../../component/parallax/Parralax';
import Greeting from '../../component/ui/Greeting/Greeting';
import SeparatorLine from '../../component/ui/SeparatorLine/SeparatorLine';
import Projects from '../../component/projects/Projects';

import { Helmet } from "react-helmet";

import './mainPage.css'
import Skills from '../../component/skills/Skills';
import { B_PROJECTS_FIRST, SECOND_TEST_GROUP } from '../../consts';

const MainPage = ({ testGroups }) => {
  let content = testGroups[SECOND_TEST_GROUP] === B_PROJECTS_FIRST ? (
          <>
              <Greeting />
              <SeparatorLine />
              <Projects testGroups={testGroups} />
              <SeparatorLine />
              <Experience />
              <SeparatorLine />
              <Skills />
          </>
  ) : (
      <>
          <Greeting />
          <SeparatorLine />
          <Experience />
          <SeparatorLine />
          <Projects testGroups={testGroups} />
          <SeparatorLine />
          <Skills />
      </>
  )

  return (
    <div className='mainpage'>
      <Helmet>
        <meta name="description" content="Александр Машкин" />
        <title>Александр Машкин</title>
      </Helmet>
      <Parallax />
        {content}
    </div>
  );
};

export default MainPage;