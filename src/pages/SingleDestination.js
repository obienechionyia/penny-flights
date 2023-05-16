import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import Loading from "../components/Loading";
import Flight from "../components/Flight";

const SingleDestination = () => {
  // useState to change the country name, in order to display it on the page
  const [countryName, setCountryName] = useState("");
  const [capitalName, setCapitalName] = useState("");
  // pull states from context.js
  const { currentDestination, loading, setLoading, currentFlights, cityName } =
    useGlobalContext();
  // convert the current destination country code to full country name
  const fetchCurrent = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${currentDestination}`
      );
      const data = await response.json();
      const fullName = data[0].name.common;
      setCountryName(fullName);
      setCapitalName(data[0].capital);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const flightSlice = currentFlights.slice(0, 20).map((item) => {
    return <Flight key={item.flightId} {...item} />;
  });

  // useEffect to fetch the current destination, in order to add it to the URL
  useEffect(() => {
    fetchCurrent();
  }, [currentDestination]);

  // show loading component if the page hasn't fully loaded
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="single-destination">
      <h1>{countryName}</h1>
      <b>
        <p className="capital">Capital: {capitalName}</p>
      </b>
      <h2>Flights from {cityName}</h2>
      {flightSlice}
    </div>
  );
};

export default SingleDestination;
