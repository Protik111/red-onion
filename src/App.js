import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import FoodItem from './components/FoodItem/FoodItem';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div>
     <Header></Header>
     <FoodItem></FoodItem>
     <Footer></Footer>
    </div>
  );
}

export default App;
