import React from "react";
import { NavLink } from "react-router-dom";
const Links = () => {
  const links = [
    { url: "/search", text: "🔍 All" },
    { url: "/news", text: "📰 News" },
    { url: "/images", text: "📷 Images" },
    { url: "/videos", text: "📹 Videos" },
  ];
  return (
    <div className="flex space-x-7 px-2 text-gray-600 items-center mt-4">
      {links.map((link, i) => (
        <NavLink
          to={link.url}
          key={i}
          activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2"
          className="dark:text-white"
        >
          {link.text}
        </NavLink>
      ))}
    </div>
  );
};

export default Links;
