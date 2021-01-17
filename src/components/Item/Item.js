import React from 'react';
import '../Item/Item.css';

const Item = (props) => {
    const{name, image, description, price} = props.item;
    return (
        <div className="item-container">
            <div>
            <img src={image} alt=""/>
            <h5>{name}</h5>
            <p>{description}</p>
            <h3>${price}</h3>
            </div>
        </div>

    );
};

export default Item;