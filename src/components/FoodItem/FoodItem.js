import React, { useEffect } from 'react';
import '../FoodItem/FoodItem.css'
import { useState } from 'react';
import data from '../../Data/data.json';
import Item from '../Item/Item';

const FoodItem = () => {
    const[items, setItems] = useState([]);

    useEffect(() => {
        setItems(data);
        // console.log(data);
    }, [])

    return (
        <div className="food-item">
            <div>
                <h2>This is category</h2>
            </div>
          {
              items.map(item => <Item item={item}></Item>)
          }

        </div>
    );
};

export default FoodItem;