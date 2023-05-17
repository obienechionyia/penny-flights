import React from "react";
import DestinationList from "../components/DestinationList";
import SearchForm from "../components/SearchForm";
import travelPNG from "../assets/images/travel.png";
import { useGlobalContext } from "../context";

const Home = () => {
  const { destinations } = useGlobalContext();
  console.log(destinations.length);
  return (
    <main className="main-container">
      <SearchForm />
      <DestinationList />
      <img
        src={travelPNG}
        alt="vacation"
        className={
          Number(destinations.length) > 0 ? "vacation-img-hide" : "vacation-img"
        }
      />
    </main>
  );
};

export default Home;
