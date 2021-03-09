import { News, Home, Service, Aboutus } from "../pages";

export const ROUTES = [
  {
    path: "/",
    key: "APP_ROOT",
    exact: true,
    component: () => <Home />,
  },
  {
    path: "/service/:id",
    key: "APP_SERVICE",
    exact: true,
    component: () => <Service />,
  },
  {
    path: "/news/:id",
    key: "APP_NEWS",
    exact: true,
    component: () => <News />,
  },
  {
    path: "/about",
    key: "AP_ABOUT",
    exact: true,
    component: () => <Aboutus />,
  },
];

export const ROUTES_SIGN_IN_SIGN_UP = [
  {
    path: "/login",
    key: "APP_SIGN_IN",
    exact: true,
    component: Home,
  },
];
