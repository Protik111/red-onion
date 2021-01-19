import React, { useState } from 'react';
import '../Item/Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
    // const [categories, setCategories] = useState([]);
    const{id,name, image, description, price, fullDescription} = props.item;
    return (
        <div className="item-container">
            <div>
                <Link to ={`/item/${id}`} className="item-container-link" style={{textDecoration: 'none'}}>
                <img src={image} alt=""/>
                <h5>{name}</h5>
                <p>{description}</p>
                <h3>${price}</h3>
                </Link>
            </div>
        </div>

    );
};

export default Item;