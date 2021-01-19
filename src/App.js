import React from 'react';
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

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/item/:id">
          <MenuDetails></MenuDetails>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
