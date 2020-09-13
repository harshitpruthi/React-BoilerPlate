import Wrapper from './common/Wrapper';

import HomePage from './views/HomePage';

export const ROUTES = {
  HOME_PAGE: "/",
}


export default [{
  component: Wrapper,
  routes: [{
    path: ROUTES.HOME_PAGE,
    exact: true,
    name: 'HomePage',
    component: HomePage,
  },
  ],
}];