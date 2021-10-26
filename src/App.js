import './App.scss';
import Homepage from './pages/Home/Homepage';
import { Switch, Route, Link } from 'react-router-dom';
import HomeIndex from './pages/Home/Index';
import CustomModal from './components/CustomModal/CustomModal';
function App() {
  return (
    <>
      <div className="app">
        <Switch>
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
