import React, { createContext } from "react";
import axios from "axios";
export const HandleApiRequestCtx = createContext("handleApiRequestCtx");

const HandleApiRequestCtxProvider = ({ children }) => {
  const handleApiRequest = ({ url, method, data, handleSuccess }) => {
    axios({
      url,
      method,
      data,
    }).then((res) => handleSuccess(res));
  };

  return (
    <HandleApiRequestCtx.Provider value={{ handleApiRequest }}>
      {children}
    </HandleApiRequestCtx.Provider>
  );
};

export default HandleApiRequestCtxProvider;
