import React from "react";

import DataList from "./DataList.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
import Random from "./Random.jsx";
import { BREED_LIST_ROUTE } from "./constants/routes.js";

const App = () => {
  return (
    // <div>
    //   <Header />
    // </div>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path={BREED_LIST_ROUTE} element={<DataList />} />
          <Route path="random" element={<Random />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
