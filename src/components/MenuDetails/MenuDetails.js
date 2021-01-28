import React, { useEffect, useContext } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import data from '../../Data/data.json';
import { useState } from 'react';
import '../MenuDetails/MenuDetails.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import { Carousel } from 'bootstrap';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { UserContext } from '../../App';
import Shipment from '../Shipment/Shipment';

const MenuDetails = () => {
    const {id} = useParams();
    const [items] = useState(data);
    // const [item, setItem] = useState({});


    const [loggedInUser, setLoggedInUser, item, setItem] = useContext(UserContext);
    
    useEffect(() => {
        const selectedItem = items.find(itm => itm.id === parseInt(id));
        // <Shipment selectedItem={selectedItem}></Shipment>
        setItem(selectedItem);
    }, [item])

    const history = useHistory();
    const handleAddItem = () =>{
        history.push('/shipment')
    }

    // const[number, setNumber] = useState(1);
    // const priviousPrice = item.price;
    // const[lastPrice, setLastPrice] = useState(priviousPrice);

    // const handleItem = (value, Fprice) => {
    // // const increaseValue = value+1;
    // // console.log(increaseValue);
    // const newNumber = number+value;
    // setNumber(newNumber);
    // console.log(price);

    // const newPrice = Fprice+priviousPrice;
    // setLastPrice(newPrice);
    // console.log(newPrice);
    
    // }

    return (
        <div>
            <div className="single-item-container">
                <div className="single-item-info">
                    <h1>{item.name}</h1>
                    {/* <p>number :{item.length}</p> */}
                    <p>{item.fullDescription}</p>
                    <h2>${item.price}</h2>
                    {/* <p>newPrice : {lastPrice}</p> */}
                   <button onClick={handleAddItem} className="add-btn"><ShoppingCartIcon></ShoppingCartIcon>Add</button>
                    <Link to="/home">
                    <button className="back-btn"><ArrowBackIcon></ArrowBackIcon>Back To Home</button>
                    </Link>
                </div>
                <div className="item-photo">
                    <img src={item.image} alt=""/>
                </div>
            </div>
        
        
          {/* <div>
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