import './App.scss';
import Homepage from './pages/Homepage';
import { Switch, Route, Link } from 'react-router-dom';
import SinglePage from './pages/SinglePage';
import SearchPage from './pages/SearchPage';
import AboutUsPage from './pages/AboutUsPage';
function App() {
  return (
    <>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/procrument/:id" component={SinglePage} />
          <Route exact path="/search/:string" component={SearchPage} />
          <Route exact path="/aboutUs" component={AboutUsPage} />
        </Switch>
      </div>
    </>
  );
}

export default App;
