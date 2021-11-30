import React from 'react';
import { Switch } from 'react-router-dom';
import RouteWithSubRoutes from '../../routes/RouteWithSubRoutes';
import routes from '../../routes/routes';
import PageNotFoundRoute from '../../routes/PageNotFoundRoute';
const UserIndex = () => {
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

export default UserIndex;
