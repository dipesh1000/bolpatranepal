import React from 'react';
import { Switch } from 'react-router-dom';
import RouteWithSubRoutes from '../../routes/RouteWithSubRoutes';
import routes from '../../routes/routes';
const UserIndex = () => {
  console.log(routes, 'From Index Routing');
  return (
    <div>
      <Switch>
        {routes.private.map((route, index) => (
          <RouteWithSubRoutes key={index} {...route} />
        ))}
      </Switch>
    </div>
  );
};

export default UserIndex;
