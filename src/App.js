import './App.scss';
import Homepage from './pages/Home/Homepage';
import { Switch, Route, Link } from 'react-router-dom';
import HomeIndex from './pages/Home/Index';
function App() {
  return (
    <>
      <div className="app">
        <Switch>
          <Route path="/">
            <HomeIndex />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
