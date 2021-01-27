import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import '../Shipment/Shipment.css';

const Shipment = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <h1 className="welcomeHeader">Welcome, <span className="welcomeName">{loggedInUser.name}!</span></h1>
            <div className="category">
                <button>Breakfast</button>
                <button>Lunch</button>
                <button>Dinner</button>
            </div>
         <div className="shipping-container">
         <div className="shippingAddress">
                <h5>Edit Delivery Details</h5>
                <hr className="hr"/>
                <input type="text" name="" id="" placeholder="Where To Deliver"/>
                <br/>
                <input type="text" name="" id="" placeholder="Address"/>
                <br/>
                <input type="text" name="" id="" placeholder="Falt, Suit or Floor"/>
                <br/>
                <input type="text" name="" id="" placeholder="Business Name"/>
                <br/>
                <input type="text" name="" id="" placeholder="Add Delivery Instructor"/>
                <br/>
                {/* <input type="submit" value="Save & Continue" /> */}
                <button className="saveContinue">Save & Continue</button>
            </div>
            <div className="deliveryInfo">
                <p>From Gulshan Plaza Restaura GPR</p>
                <p>Arriving in 20-30min</p>
            </div>
         </div>
        </div>
    );
};

export default Shipment;