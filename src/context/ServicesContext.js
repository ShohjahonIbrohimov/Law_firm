import React, { useState, createContext } from "react";

export const ServicesContext = createContext("services");

const ServicesContextProvider = ({ children }) => {
  const [services, setservices] = useState([]);

  return (
    <ServicesContext.Provider value={{ services, setservices }}>
      {children}
    </ServicesContext.Provider>
  );
};

export default ServicesContextProvider;
