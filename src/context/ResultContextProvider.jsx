import React, { createContext, useContext, useState } from "react";
const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
  const [results, setresults] = useState([]);
  const [loading, setloading] = useState(false);
  const [searchTerm, setsearchTerm] = useState("");

  const getResults = async (type) => {
    setloading(true);
    const response = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "x-user-agent": "desktop",
        "x-proxy-location": "EU",
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": "7dc3d8a611msh9bb2c51b4ff02f3p10c51ejsn03ad4f525453",
      },
    });
    const data = await response.json();

    if (type.includes("/search")) {
      setresults(data.results);
    } else if (type.includes("/news")) {
      setresults(data?.entries);
    } else if (type.includes("/images")) {
      setresults(data.image_results);
    }
    console.log(data);
    // setresults(data);
    setloading(false);
  };
  return (
    <ResultContext.Provider
      value={{
        getResults,
        results,
        searchTerm,
        setsearchTerm,
        loading,
        setloading,
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => {
  return useContext(ResultContext);
};
