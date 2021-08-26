import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home/Home';
import NontFound from './components/NotFoundPage/NontFound';
import Singelitem from './components/Singelitem/Singelitem';
import TopBar from './components/TopBar/TopBar';
import { useState } from 'react';
import { createContext } from 'react';
import Menu from './components/fakeData/menu';

export const ManuContext = createContext();

function App() {

  const [cart, setCart] = useState([]);
  


  return (
    <ManuContext.Provider value={[cart, setCart]}>
      <div className="App">

        <Router>
          <TopBar cart={cart}></TopBar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/singel-item/:itemName">
              <Singelitem></Singelitem>
            </Route>
            <Route path="*">
              <NontFound></NontFound>
            </Route>
          </Switch>
        </Router>

      </div>
    </ManuContext.Provider>
  );
}

export default App;
