// imports
import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

// App Provider - to be used throughout application
const AppProvider = ({ children }) => {
  const searchData = window.localStorage.getItem("SEARCH_TERM");
  const destinationData = window.localStorage.getItem("CURRENT_DESTINATION");
  const airportData = window.localStorage.getItem("CURRENT_AIRPORT");
  const cityData = window.localStorage.getItem("CITY_NAME");
  useEffect(() => {
    setSearchTerm(JSON.parse(searchData));
    setCurrentDestination(JSON.parse(destinationData));
    setCurrentAirport(JSON.parse(airportData));
    setCityName(JSON.parse(cityData));
  }, []);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(searchData);
  const [destinations, setDestinations] = useState([]);
  const [currentDestination, setCurrentDestination] = useState(destinationData);
  const [cityName, setCityName] = useState(cityData);
  const [ip, setIp] = useState("");
  const [currentFlights, setCurrentFlights] = useState([]);
  const [currentAirport, setCurrentAirport] = useState(airportData);

  // fetch function to pull from API
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "cdddd89068mshcc063f0ead1339ap1c44bbjsn211ac2b6ed88",
      "X-RapidAPI-Host": "skyscanner50.p.rapidapi.com",
    },
  };

  const getIp = async () => {
    const request = await fetch("https://ipinfo.io/json?token=c1cc48ed86a9cb");
    const jsonResponse = await request.json();
    setIp(jsonResponse.city);
  };

  const fetchDestinations = async () => {
    setDestinations([]);
    setLoading(true);
    try {
      const cityResponse = await fetch(
        `https://skyscanner50.p.rapidapi.com/api/v1/searchAirport?query=${searchTerm}`,
        options
      );
      const cityData = await cityResponse.json();
      const city = await cityData.data[0].PlaceName;
      setCityName(city);
      const code = cityData.data[0].PlaceId;
      const response = await fetch(
        `https://skyscanner50.p.rapidapi.com/api/v1/searchFlightEverywhere?origin=${code}&anytime=true&oneWay=false&currency=USD&countryCode=US&market=en-US`,
        options
      );
      const data = await response.json();
      const countries = await data.data;
      if (countries) {
        const countryList = countries.map((item) => {
          const { CountryNameEnglish, ImageUrl, Price, CountryId } = item;
          return {
            country: CountryNameEnglish,
            image: ImageUrl,
            price: Price,
            id: CountryId,
          };
        });
        setDestinations(countryList);
      } else {
        setDestinations([]);
      }
      setLoading(false);
      setCurrentAirport(code);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const fetchFlights = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://skyscanner50.p.rapidapi.com/api/v1/searchFlightEverywhereDetails?origin=${currentAirport}&CountryId=${currentDestination}&anytime=true&oneWay=false&currency=USD&countryCode=US&market=en-US`,
        options
      );
      const data = await response.json();
      const flights = await data.data;
      if (flights) {
        const flightList = flights.map((item) => {
          const { title, price, destinationPlaceId, imageUrl } = item;
          return {
            city: title,
            flightPrice: price,
            flightId: destinationPlaceId,
            cityImage: imageUrl,
          };
        });
        setCurrentFlights(flightList);
      } else {
        setCurrentFlights([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDestinations();
    window.localStorage.setItem("SEARCH_TERM", JSON.stringify(searchTerm));
  }, [searchTerm]);

  useEffect(() => {
    window.localStorage.setItem("CITY_NAME", JSON.stringify(cityName));
  }, [cityName]);

  useEffect(() => {
    getIp();
  }, []);

  useEffect(() => {
    fetchFlights();
    window.localStorage.setItem(
      "CURRENT_DESTINATION",
      JSON.stringify(currentDestination)
    );
    window.localStorage.setItem(
      "CURRENT_AIRPORT",
      JSON.stringify(currentAirport)
    );
  }, [currentDestination]);

  return (
    <AppContext.Provider
      value={{
        loading,
        setSearchTerm,
        destinations,
        setDestinations,
        searchTerm,
        setCurrentDestination,
        currentDestination,
        setLoading,
        cityName,
        ip,
        currentFlights,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
