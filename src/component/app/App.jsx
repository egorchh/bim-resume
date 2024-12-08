import { HashRouter as Router, Routes, Route} from 'react-router-dom';

import MainPage from "../../pages/mainPage/MainPage";
import ProjectPage from '../../pages/projectPage/ProjectPage';
import Page404 from '../../pages/page404/Page404';
import Contacts from "../contacts/Contacts";
import SeparatorLine from "../ui/SeparatorLine/SeparatorLine";

import "./app.css";
import {useEffect, useState} from "react";
import { A_EXPERIENCE_FIRST, A_SLIDER, FIRST_TEST_GROUP, SECOND_TEST_GROUP } from '../../consts'

const App = () => {
  const [testGroups, setTestGroups] = useState({
    [FIRST_TEST_GROUP]: A_SLIDER,
    [SECOND_TEST_GROUP]: A_EXPERIENCE_FIRST
  });

  useEffect(() => {
    if (typeof ymab === 'function') {
        // eslint-disable-next-line
        ymab('metrika.98572163', 'getFlags', function(flags) {
          console.log(flags);
          if (flags && flags[FIRST_TEST_GROUP] && flags[SECOND_TEST_GROUP]) {
            setTestGroups({
              'first_test_group': flags[FIRST_TEST_GROUP][0],
              'second_test_group': flags[SECOND_TEST_GROUP][0]
            })
          }
        });
    }
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage testGroups={testGroups} />} />
          <Route
                path="/projects/:id"
                element={
                  <ProjectPage />
                }
              />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
      <SeparatorLine />
      <Contacts />
    </>
  );
};

export default App;
