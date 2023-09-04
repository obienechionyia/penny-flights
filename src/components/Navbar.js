import React from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

const Navbar = () => {
  // home button function to clear the local storage and destinations
  const { setDestinations } = useGlobalContext();
  const homeButton = () => {
    window.localStorage.clear();
    setDestinations([]);
  };

  return (
    <nav>
      <div>
        <ul className="nav">
          <a href="/" onClick={homeButton}>
            <h1 className="logo">Penny Flights</h1>
          </a>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a href="/" onClick={homeButton}>
              Home
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
