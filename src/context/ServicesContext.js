import React, { useState, createContext } from "react";

const ThemeContext = createContext("services");

const ServicesContext = ({ children }) => {
  const [services, setservices] = useState();

  return (
    <ThemeContext.Provider value={{ services }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ServicesContext;
