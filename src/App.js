import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import FoodItem from './components/FoodItem/FoodItem';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import MenuDetails from './components/MenuDetails/MenuDetails';
import { createContext } from 'react';
import Login from './components/Login/Login';
import Shipment from './components/Shipment/Shipment';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Contact from './components/Contact/Contact';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [item, setItem] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, item, setItem]}>
      {/* <p>Email {loggedInUser.email}</p>
      <p>Name {loggedInUser.name}</p>
      <p>Password {loggedInUser.password}</p> */}
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/contact/:id">
            <Contact></Contact>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/shipment">
            <Shipment></Shipment>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/item/:id">
            <MenuDetails></MenuDetails>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
