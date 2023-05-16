import React from "react";
import img from "../assets/images/404.svg";
import Wrapper from "../assets/wrappers/ErrorPage";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper>
      <div>
        <img src={img} alt="not found" />
        <h3>Not Found</h3>
        <p>The page doesn't exist.</p>
        <Link to="/">back home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
