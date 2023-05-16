import React from "react";
import DestinationList from "../components/DestinationList";
import SearchForm from "../components/SearchForm";
import travel from "../assets/images/travel.svg";

const Home = () => {
  return (
    <main className="main-container">
      <SearchForm />
      <DestinationList />
      <img src={travel} alt="vacation" className="vacation-img" />
    </main>
  );
};

export default Home;
