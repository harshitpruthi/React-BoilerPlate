import Wrapper from './common/Wrapper';

import HomePage from './views/HomePage';
import AboutUsPage from './views/AboutUsPage';

export const ROUTES = {
  HOME_PAGE: "/",
  ABOUT_US: "/about-us"
}


export default [{
  component: Wrapper,
  routes: [{
    path: ROUTES.HOME_PAGE,
    exact: true,
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: ROUTES.ABOUT_US,
    exact: true,
    name: 'AboutUsPage',
    component: AboutUsPage,
  }
  ],
}];
