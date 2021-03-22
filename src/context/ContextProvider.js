import React from "react";
import ServicesContextProvider from "./ServicesContext";
import NewsContextProvider from "./NewsContext";

const ContextProvider = ({ children }) => {
  return (
    <NewsContextProvider>
      <ServicesContextProvider>{children}</ServicesContextProvider>
    </NewsContextProvider>
  );
};

export default ContextProvider;
