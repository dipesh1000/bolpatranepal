import { Route } from 'react-router';

const RouteWithSubRoutes = (route) => {
  console.log(route, 'From Routes >>>>>');
  return (
    <Route
      path={route.path}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
};

export default RouteWithSubRoutes;
