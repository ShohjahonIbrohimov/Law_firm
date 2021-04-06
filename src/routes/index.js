import React from "react";
import { Switch, Route } from "react-router-dom";

import { ROUTES } from "../routes/routes";
import axios from "axios";
// REDUX
import { useSelector } from "react-redux";
import SiteHeader from "../components/SiteHeader";
import SiteNavigation from "../components/SiteNavigation";
import FetchSiteData from "../components/Global/FetchSiteData";
import { Toaster } from "react-hot-toast";

const MainPage = () => {
  const token = useSelector((state) => state.authReducer.token);

  axios.defaults.baseURL = "http://134.209.214.252/";
  axios.defaults.headers.common["authorization"] = token;

  return (
    <div className='container'>
      <SiteHeader />
      <SiteNavigation />
      <Switch>
        {ROUTES.map((route) => (
          <Route {...route} />
        ))}
      </Switch>
      <FetchSiteData />
      <Toaster />
    </div>
  );
};

export default MainPage;
