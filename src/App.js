import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import AddGames from './Components/AddGames/AddGames';
import Purchase from './Components/Purchase/Purchase';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ManageGames from './Components/ManageGames/ManageGames';

export const UserContext = createContext();
function App() {

  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
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
                <Link to="/purchase/:name">Purchase</Link>
              </li>
              <li>
                <Link to="/admin">Admin</Link>
              </li>
              <li>
                <Link to="/login">Log In</Link>
              </li>
            </ul>
            <h5> {loggedInUser.displayName}</h5>
          </div>
        </div>
        <hr />


        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/addGames">
            <AddGames />
          </PrivateRoute>
          
          <PrivateRoute path="/purchase/:name">
            <Purchase />
          </PrivateRoute>
          <Route path="/manageGames">
            <ManageGames></ManageGames>
          </Route>
        </Switch>

      </Router>
    </UserContext.Provider>
  );
}

export default App;
