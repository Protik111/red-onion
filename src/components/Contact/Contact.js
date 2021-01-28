import React from 'react';
import photo from '../../images/map.jpg';
import bike  from '../../images/Image/Group 1151.png';
import owner from '../../images/Image/Group 1152.png';
import '../Contact/Contact.css';

const Contact = () => {
    return (
        <div>
            <div className="category">
                <button>Breakfast</button>
                <button>Lunch</button>
                <button>Dinner</button>
            </div>
            <div className="map-container">
                <div className="mapPhoto" >
                    <img src={photo} alt=""/>
                </div>
                <div className="bikeAndAddress">
                    <div className="bikePhoto">
                        <img src={bike} alt=""/>
                    </div>
                    <div className="address">
                        <ul>
                        <li>Your Location</li>
                        </ul>
                        <p className="road">107, Road No 8</p>
                        <ul>
                        <li>Shop Address</li>
                        </ul>
                        <p className="road">Gulshan Plaza Restsura</p>
                    </div>
                    <div className="time">
                        <h1 className="timeCount">12:00</h1>
                        <p className="road">Estimated Delivery Time</p>
                    </div>
                    <div className="orderOwner">
                        <div className="ownerPhoto">
                            <img src={owner} alt=""/>
                        </div>
                        <div className="ownerName">
                            <h6>Rafiur Rahman</h6>
                            <p>Your Raider</p>
                        </div>
                    </div>
                    <div>
                        <button className="contactBtn">Contact</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;