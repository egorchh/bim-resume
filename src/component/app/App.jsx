import { HashRouter as Router, Routes, Route} from 'react-router-dom';

import MainPage from "../../pages/mainPage/MainPage";
import ProjectPage from '../../pages/projectPage/ProjectPage';
import Page404 from '../../pages/page404/Page404';
import Contacts from "../contacts/Contacts";
import SeparatorLine from "../ui/SeparatorLine/SeparatorLine";

import "./app.css";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
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
