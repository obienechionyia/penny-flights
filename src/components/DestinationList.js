import React from "react";
import Destination from "./Destination";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const DestinationList = () => {
  const { destinations, loading, cityName, searchTerm } = useGlobalContext();
  const destinationSlice = destinations.slice(0, 15).map((item) => {
    return <Destination key={item.id} {...item} />;
  });
  if (loading && searchTerm !== null) {
    return <Loading />;
  }
  if (destinations.length < 1 && searchTerm !== null) {
    return (
      <h2>No destinations matched your search criteria. Please try again.</h2>
    );
  }
  if (destinations.length < 1 && searchTerm === null) {
    return (
      <h2>
        Welcome to Penny Flights! Enter any location above to see destinations
        with the cheapest flights available.
      </h2>
    );
  }
  return (
    <section>
      <h2 className="destinations-header">
        Destinations from {cityName.charAt(0).toUpperCase() + cityName.slice(1)}
      </h2>
      <div>{destinationSlice}</div>
    </section>
  );
};

export default DestinationList;
