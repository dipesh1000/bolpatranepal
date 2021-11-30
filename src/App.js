import './App.scss';
import Homepage from './pages/Home/Homepage';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import HomeIndex from './pages/Home/Index';
import CustomModal from './components/CustomModal/CustomModal';
import { useSelector } from 'react-redux';
import UserIndex from './pages/UserDashboard/Index';

function App() {
  const auth = useSelector((state) => state.auth);

  return (
    <>
      <div className="app">
        <Switch>
          {auth.token ? (
            <Route path="/">
              <UserIndex />
            </Route>
          ) : (
            <Homepage />
          )}
          <Route path="/">
            <HomeIndex />
          </Route>
        </Switch>
        <CustomModal />
      </div>
    </>
  );
}

export default App;
