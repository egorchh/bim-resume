import React from "react";
import ReactDOM from "react-dom/client";

import App from "./component/app/App";

import { DataContext } from './dataContext/DataContext';
import data from './dataContext/data';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DataContext.Provider value={data}>
    <App />
  </DataContext.Provider>
);
