import Experience from '../../component/experience/Experience';
import Parallax from '../../component/parallax/Parralax';
import Greeting from '../../component/ui/Greeting/Greeting';
import SeparatorLine from '../../component/ui/SeparatorLine/SeparatorLine';
import Projects from '../../component/projects/Projects';

import { Helmet } from "react-helmet";

import './mainPage.css'
import Skills from '../../component/skills/Skills';

const MainPage = ({ userTestGroup }) => {
    let content = userTestGroup === 'test_1' ? (
            <>
                <Greeting />
                <SeparatorLine />
                <Projects userTestGroup={userTestGroup} />
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
            <Projects userTestGroup={userTestGroup} />
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