import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RouteWithSubRoutes from '../../routes/RouteWithSubRoutes';
import routes from '../../routes/routes';
// import PageNotFoundRoute from '../../routes/PageNotFoundRoute';
import PageNotFound from './PageNotFound/Index';
const HomeIndex = () => {
  console.log(routes, 'From Index Routing');
  return (
    <div>
      <Switch>
        {routes.home.map((route, index) => (
          <RouteWithSubRoutes key={index} {...route} />
        ))}
        <Route path="*">Page Not Found</Route>
      </Switch>
    </div>
  );
};
export default HomeIndex;
