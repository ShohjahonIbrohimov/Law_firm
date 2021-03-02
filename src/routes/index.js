import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { ROUTES, ROUTES_SIGN_IN_SIGN_UP } from "../routes/routes";
// import { store } from "../redux/store";
import axios from "axios";
import { Redirect } from "react-router-dom";
// REDUX
// import { selectToken } from "../redux/auth/auth.selector";
import { createStructuredSelector } from "reselect";
// import { connect } from "react-redux";
import styles from "../styles/Layout.module.css";
import SiteHeader from "../components/SiteHeader";
import SiteNavigation from "../components/SiteNavigation";

const MainPage = ({ token }) => {
  // axios.defaults.baseURL = "https://api.apicrm.online/";
  // axios.defaults.headers.common["x-access-token"] = token;
  return (
    <div className='container'>
      {/* {!token && <Redirect to='/login' />} */}
      <SiteHeader />
      <SiteNavigation />
      <Switch>
        {ROUTES.map((route) => (
          <Route {...route} />
        ))}
      </Switch>

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

// const mapStateToProps = createStructuredSelector({
//   token: selectToken,
// });

export default MainPage;
