import React, { useEffect } from 'react';
import '../FoodItem/FoodItem.css'
import { useState } from 'react';
import data from '../../Data/data.json';
import Item from '../Item/Item';

const FoodItem = () => {
const[items, setItems] = useState([]);

if(items.length === 0){
    const newItem = data.filter(item => item.category === 'lunch');
    setItems(newItem);
}

const handleItem = (category) => {
    const newItem = data.filter(item => item.category === category);
    setItems(newItem);
}

    return (
        <div className="food-item">
            <div className="category">
                <button onClick={() => handleItem('breakfast')}>Breakfast</button>
                <button onClick={() => handleItem('lunch')}>Lunch</button>
                <button onClick={() => handleItem('dinner')}>Dinner</button>
            </div>
          {
              items.map(item => <Item item={item}></Item>)
          }

          <div className="proceed-btn">
              <button>Checkout Your Food</button>
          </div>
        </div>
    );
};

export default FoodItem;