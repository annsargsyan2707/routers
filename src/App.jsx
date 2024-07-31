import React from "react";

import DataList from "./DataList.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
import Random from "./Random.jsx";
import { BREED_LIST_ROUTE, RANDOM_IMG } from "./constants/routes.js";
import Home from "./Home.jsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path={BREED_LIST_ROUTE} element={<DataList />} />
            <Route path={RANDOM_IMG} element={<Random />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
