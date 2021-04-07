import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import AddGames from './Components/AddGames/AddGames';
import Purchase from './Components/Purchase/Purchase';
function App() {
  return (
    <Router>
      <div>
        <div className="main">
          <Link to="/"> <h1>GAMES PLANET</h1> </Link>
        </div>
        <div>
          <ul className="nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/addGames">Add Games</Link>
            </li>
            <li>
              <Link to="/purchase/:id">Purchase</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr />


      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/addGames">
          <AddGames />
        </Route>
        <Route path="/purchase">
          <Purchase />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
