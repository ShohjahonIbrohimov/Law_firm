import { News, Home, Service } from "../pages";

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
];

export const ROUTES_SIGN_IN_SIGN_UP = [
  {
    path: "/login",
    key: "APP_SIGN_IN",
    exact: true,
    component: Home,
  },
];
