import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { useResultContext } from "../context/ResultContextProvider";
import Loading from "./Loading";

export const Results = () => {
  const { results, loading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === "/videos") {
        getResults(`/search/q=${searchTerm} videos`);
      } else {
        getResults(
          `${location.pathname}/q=${searchTerm}&num=50&lr=lang_en&hl=en&cr=US`
        );
      }
    }
    // getResults("/images/q=elon musk&num=40");
  }, [searchTerm, location.pathname]);

  if (loading) return <Loading />;
  console.log(location.pathname);

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.map(({ link, title, description }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
                <p className="text-sm dark:text-white text-gray-700">
                  {description?.substring(0, 60)}...
                </p>
              </a>
            </div>
          ))}
        </div>
      );
    case "/images":
      return (
        <div className="flex flex-wrap justify-center items-center">
          {results?.map(({ image, link: { href, title, domain } }, index) => (
            <a
              href={href}
              className="sm:p-3 p-5 flex flex-col items-center"
              key={index}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={image?.src}
                alt=""
                className="object-fill space-y-5"
                loading="lazy"
              />
              <p className="hover:underline break-words text-gray-500 dark:text-zinc-300 text-sm">
                {title?.substring(0, 20)}..
              </p>
              <p className="hover:underline break-words text-gray-500 dark:text-zinc-300 text-sm">
                {domain?.substring(0, 30)}..
              </p>
            </a>
          ))}
        </div>
      );
    case "/news":
      return (
        <div className="sm:px-56 flex flex-wrap justify-between items-center space-y-6">
          {results?.map(({ id, links, source, title }) => (
            <div key={id} className="md:w-2/5 w-full ">
              <a
                href={links?.[0].href}
                target="_blank"
                rel="noreferrer "
                className="hover:underline "
              >
                <p className="text-lg dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
              <div className="flex gap-4">
                <a
                  href={source?.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline hover:text-blue-300"
                >
                  {source?.href}
                </a>
              </div>
            </div>
          ))}
        </div>
      );
    case "/videos":
      return (
        <div className="flex flex-wrap justify-center items-center">
          {results?.map((video, index) => (
            <div key={index} className="p-2">
              {video?.link && (
                <ReactPlayer
                  url={video?.link}
                  controls
                  width="355px"
                  height="200px"
                />
              )}
            </div>
          ))}
        </div>
      );

    default:
      return "!ERROR";
  }
};
