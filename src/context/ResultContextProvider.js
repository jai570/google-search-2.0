import { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";
const ResultContextProvider = ({ children }) => {
  const [results, setresults] = useState([]);
  const [isloading, setisloading] = useState(false);
  const [searchterm, setsearchterm] = useState("");

  const getResult = async (type) => {
    setisloading(true);
    const res = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "x-user-agent": "desktop",
        "x-proxy-location": "EU",
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": "7dc3d8a611msh9bb2c51b4ff02f3p10c51ejsn03ad4f525453",
      },
    });
    const data = await res.json();
    setresults(data);
    setisloading(false);
  };

  return (
    <ResultContext.Provider
      value={{
        getResult,
        results,
        searchterm,
        setsearchterm,
        isloading,
        setisloading,
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export default ResultContextProvider;

export const useResultContext = () => useContext(ResultContext);
