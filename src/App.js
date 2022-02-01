import './App.scss';
import Homepage from './pages/Home/Homepage';
import { Switch, Route, Link, Redirect, useHistory } from 'react-router-dom';
import CustomModal from './components/CustomModal/CustomModal';
import { useSelector } from 'react-redux';
import UserIndex from './pages/UserDashboard/Index';
import HomeIndex from './pages/Home/Index';
import SinglePage from './pages/Home/SinglePage';
import Toaster from './components/Toaster/Toaster';
import PageNotFound from './pages/Home/PageNotFound/Index';
import { useEffect, useState } from 'react';

function App() {
  const [userAuth, setUserAuth] = useState();
  const auth = useSelector((state) => state.auth);
  console.log(userAuth, 'in auth app');
  const history = useHistory();

  useEffect(() => {
    if (auth?.isInterestChecked === false) {
      return history.push('/user/interest');
    }
  }, [auth]);

  return (
    <>
      <div className="app">
        <Switch>
          <Route path="/procrumentss/:id" component={SinglePage} />
          {auth.token ? (
            <>
              <UserIndex />
              <HomeIndex />
            </>
          ) : (
            <>
              <HomeIndex />
            </>
          )}
        </Switch>
        <CustomModal />
        <Toaster />
      </div>
    </>
  );
}

export default App;
