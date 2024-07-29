import React from "react";
import { Link } from "react-router-dom";
import { BREED_LIST_ROUTE } from "./constants/routes";

const Header = () => {
  return (
    <>
      <h1>Dogs APP</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={BREED_LIST_ROUTE}>Breed list</Link>
        </li>
        <li>
          <Link to="random">Random image</Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
