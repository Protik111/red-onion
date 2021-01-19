import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../Data/data.json';
import { useState } from 'react';
import '../MenuDetails/MenuDetails.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import { Carousel } from 'bootstrap';

const MenuDetails = () => {
    const {id} = useParams();
    const [items] = useState(data);
    const [item, setItem] = useState({});

    useEffect(() => {
        const selectedItem = items.find(itm => itm.id === parseInt(id));
        setItem(selectedItem);
    }, [item])

    return (
        <div>
            <div className="single-item-container">
                <div className="single-item-info">
                    <h1>{item.name}</h1>
                    <p>{item.fullDescription}</p>
                    <h2>${item.price}</h2>
                    <button className="add-btn"><ShoppingCartIcon></ShoppingCartIcon>Add</button>
                </div>
                <div className="item-photo">
                    <img src={item.image} alt=""/>
                </div>
            </div>
        
{/*         
          <div>
                <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={item.image}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={item.image}
                    alt="Third slide"
                    />
                </Carousel.Item>
                </Carousel>
          </div> */}

        </div>
    );
};

export default MenuDetails;