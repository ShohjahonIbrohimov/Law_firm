import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import MainPage from "./routes";
import "antd/dist/antd.less";
import "./styles/globals.css";
import "./index.css";
// REDUX
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/store";
import { store } from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={"Loading..."} persistor={persistor}>
      <React.StrictMode>
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
