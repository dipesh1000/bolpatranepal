import Homepage from '../pages/Home/Homepage';
import SinglePage from '../pages/Home/SinglePage';
import SearchPage from '../pages/Home/SearchPage';
import AboutUsPage from '../pages/Home/AboutUsPage';

const routes = {
  home: [
    {
      path: '/',
      component: Homepage,
      exact: true,
    },
    {
      path: '/procrument/:id',
      component: SinglePage,
      exact: true,
    },
    {
      path: '/search/:string',
      component: SearchPage,
      exact: true,
    },
    {
      path: '/aboutus',
      component: AboutUsPage,
      exact: true,
    },
  ],
};

export default { ...routes, home: [...routes.home] };
