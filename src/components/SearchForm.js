import { useGlobalContext } from "../context";
import { useEffect } from 'react';
import React from "react";

function SearchForm() {
  const {  setSearchTerm, ip } = useGlobalContext();
  const searchValue = React.useRef("");

  useEffect(() => {
    searchValue.current.focus();
  },[]);

  const setLocation = () => {
    setSearchTerm(searchValue.current.value);
    searchValue.current.value = "";
  }

  const setToIp = () => {
    setSearchTerm(ip);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <div className="form-container">
      <form onSubmit={ handleSubmit }>
        <div>
          <label className="form-label">
            Enter a location:
          </label>
          <input type="text" ref={ searchValue } className="form-input"/>
          <button type="submit" onClick={ setLocation } className="btn">Search</button>
        </div>
      </form>
      <p>or</p>
      <button onClick={ setToIp }>Current Location 📍</button>
    </div>
  );
}

export default SearchForm;