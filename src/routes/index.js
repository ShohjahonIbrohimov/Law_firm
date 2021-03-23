import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { ROUTES, ROUTES_SIGN_IN_SIGN_UP } from "../routes/routes";
import axios from "axios";
import { Redirect } from "react-router-dom";
// REDUX
import { createStructuredSelector } from "reselect";
import { useSelector } from "react-redux";
import SiteHeader from "../components/SiteHeader";
import SiteNavigation from "../components/SiteNavigation";
import ContextProvider from "../context/ContextProvider";
import FetchSiteData from "../components/Global/FetchSiteData";
import toast, { Toaster } from "react-hot-toast";

const MainPage = () => {
  const token = useSelector((state) => state.authReducer.token);

  axios.defaults.baseURL = "http://134.209.214.252/";
  axios.defaults.headers.common["authorization"] = token;

  return (
    <div className='container'>
      {/* {!token && <Redirect to='/login' />} */}
      <ContextProvider>
        <SiteHeader />
        <SiteNavigation />
        <Switch>
          {ROUTES.map((route) => (
            <Route {...route} />
          ))}
        </Switch>
        <FetchSiteData />
        <Toaster />
      </ContextProvider>

      {/* <ScreenSignIn /> */}
    </div>
  );
};

const ScreenSignIn = () => {
  return (
    <div className='container'>
      <Switch>
        {ROUTES_SIGN_IN_SIGN_UP.map((route) => (
          <Route {...route} />
        ))}
      </Switch>
    </div>
  );
};

export default MainPage;
