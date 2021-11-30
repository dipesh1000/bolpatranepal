import Homepage from '../pages/Home/Homepage';
import SinglePage from '../pages/Home/SinglePage';
import SearchPage from '../pages/Home/SearchPage';
import AboutUsPage from '../pages/Home/AboutUsPage';
import OurServicePage from '../pages/Home/OurServicePage';
import PricingPage from '../pages/Home/PricingPage';
import OurServiceSinglePage from '../pages/Home/OurServiceSinglePage';
import Dashboard from '../pages/UserDashboard/Dashboard/Dashboard';

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
    {
      path: '/ourservices',
      component: OurServicePage,
      exact: true,
    },
    {
      path: '/ourservices/:slug',
      component: OurServiceSinglePage,
      exact: true,
    },
    {
      path: '/pricing',
      component: PricingPage,
      exact: true,
    },
  ],
  private: [
    {
      path: '/user/profile',
      component: Dashboard,
      exact: true,
    },
  ],
};

export default {
  ...routes,
  home: [...routes.home, ...routes.private],
};
