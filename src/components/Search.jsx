import React, { useEffect, useState } from "react";
import Links from "./Links";
import { useDebounce } from "use-debounce";
import { useResultContext } from "../context/ResultContextProvider";

export const Search = () => {
  const [text, settext] = useState("");
  const { setsearchTerm } = useResultContext();
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debouncedValue) {
      setsearchTerm(debouncedValue);
    }
  }, [debouncedValue]);
  return (
    <div className="relative sm:ml-72 sm:-mt-10 mt-3">
      <input
        value={text}
        type="text"
        className="sm:w-96 w-80 h-10 dark:bg-gray-200  border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="🔎 Search Google or type URL"
        onChange={(e) => settext(e.target.value)}
      />
      {text !== "" && (
        <button
          type="button"
          className="absolute top-1.5 right-4 text-2xl text-gray-500 "
          onClick={() => settext("")}
        >
          x
        </button>
      )}
      <Links />
    </div>
  );
};
