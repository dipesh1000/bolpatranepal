import React from 'react';
import { Switch } from 'react-router-dom';
import RouteWithSubRoutes from '../../navigation/RouteWithSubRoutes';
import routes from '../../navigation/routes';
import PageNotFoundRoute from '../../navigation/PageNotFoundRoute';
const HomeIndex = () => {
  console.log(routes, 'From Index Routing');
  return (
    <div>
      <Switch>
        {routes.home.map((route, index) => (
          <RouteWithSubRoutes key={index} {...route} />
        ))}
        <PageNotFoundRoute />
      </Switch>
    </div>
  );
};

export default HomeIndex;
