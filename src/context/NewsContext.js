import React, { useState, createContext } from "react";

export const NewsContext = createContext("services");

const NewsContextProvider = ({ children }) => {
  const [news, setnews] = useState([]);

  return (
    <NewsContext.Provider value={{ news, setnews }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContextProvider;
