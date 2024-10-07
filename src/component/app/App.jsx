import { HashRouter as Router, Routes, Route} from 'react-router-dom';

import MainPage from "../../pages/mainPage/MainPage";
import ProjectPage from '../../pages/projectPage/ProjectPage';
import Page404 from '../../pages/page404/Page404';
import Contacts from "../contacts/Contacts";
import SeparatorLine from "../ui/SeparatorLine/SeparatorLine";

import "./app.css";
import {useEffect, useState} from "react";

const toggles = {
    'replace_cards_into_list': {
        'test_1': 'test_1',
        'test_2': 'test_2',
    },
    'reorder_main_page_components': {
        'test_1': 'test_1',
        'test_2': 'test_2',
    }
}

const App = () => {
    const [userTestGroup, setUserTestGroup] = useState(undefined);


    useEffect(() => {
        // Ensure ym is available and then get the user ID (clientID)
        if (typeof ym === 'function') {
            // eslint-disable-next-line
            ym(98572006, 'getClientID', function(clientID) {
                if (clientID) {
                    let testGroup = 'test_1';
                    const isIdEven = Number(clientID.slice(-6)) % 2 === 0;

                    if (isIdEven) {
                        testGroup = 'test_2';
                    }

                    setUserTestGroup(testGroup);
                }
            });
        }
    }, []);

    useEffect(() => {
        if (typeof ymab === 'function') {
            // eslint-disable-next-line
            ymab('metrika.98572006', 'getFlags', function(flags) {
                // eslint-disable-next-line
                console.log(flags);
            });
        }
    }, [])

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage userTestGroup={userTestGroup} />} />
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
