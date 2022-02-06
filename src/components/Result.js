import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

import { useResultContext } from "../context/ResultContextProvider";
import Loading from "./Loading";

const Result = () => {
  const { results, isLoading, getResult, searchTerm } = useResultContext();
  const location = useLocation();

  if (isLoading) return <Loading />;
  console.log(location.pathname);

  switch (location.pathname) {
    case "/search":
      return "SEARCH";
      break;

    default:
      return "ERROR!";
      break;
  }
};

export default Result;
