import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NontFound from './components/NotFoundPage/NontFound';


function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="*">
            <NontFound></NontFound>
          </Route>
          </Switch>
      </Router>

    </div>
  );
}

export default App;
