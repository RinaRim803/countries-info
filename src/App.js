import React, { useState } from "react";
import "./App.css";
import DataFetching from "./DataFetching";


function App() {
  const [country, setCountry] = useState("Korea");
  const [searchedText, setSearchedText] = useState("");

  function searchCountry(e) {
    e.preventDefault();
    setCountry(searchedText);
  }

  return (
    <div className="App">
      <h1>Search Country</h1>
      <form onSubmit={searchCountry}>
        <input onChange={(e) => setSearchedText(e.target.value)} />
      </form>

      <DataFetching searchCountry={country}/>
    </div>
  );
}

export default App;
