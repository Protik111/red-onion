import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import '../Shipment/Shipment.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Shipment = () => {


    const [loggedInUser, setLoggedInUser,item, setItem] = useContext(UserContext);
    console.log(loggedInUser);

    // const formSubmit = document.getElementById('saveForm');
    // formSubmit.addEventListener('input', function(){
    //     if(input1.value.length > 0 && input2.value.length > 0 &&
    //         input3.value.length > 0 && input4.value.length >0 && input5.value.length > 0){
    //             orderBtn.removeAttribute('disabled');
    //         }else{
    //             orderBtn.setAttribute('disabled', 'disabled');
    //         }
    // });

    const handleInput = (event) => {
        const orderButton = document.getElementById('orderBtn');
        // console.log('done')
        if(event.target.name === 'input1' || event.target.name === 'input2' || event.target.name === 'input3' || event.target.name === 'input4' || event.target.name === 'input5'){
            if(event.target.value !== ''){
                orderButton.removeAttribute('disabled');
                console.log('done')
            }else{
                orderBtn.setAttribute('disabled', 'disabled');
            }
            // console.log('doen')
        }
    }

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
                <form action="" id="saveForm">
                    <input onChange={handleInput} type="text" name="input1" id="input1" placeholder="Where To Deliver"/>
                    <br/>
                    <input onChange={handleInput} type="text" name="input2" id="input1" placeholder="Address"/>
                    <br/>
                    <input onChange={handleInput} type="text" name="input3" id="input1" placeholder="Falt, Suit or Floor"/>
                    <br/>
                    <input onChanger={handleInput} type="text" name="input4" id="input1" placeholder="Business Name"/>
                    <br/>
                    <input onChanger={handleInput} type="text" name="input5" id="input1" placeholder="Add Delivery Instructor"/>
                    <br/>
                    {/* <input type="submit" value="Save & Continue" /> */}
                    <button className="saveContinue">Save & Continue</button>
                </form>
            </div>
            <div className="deliveryInfo">
                <div className="infoAtText">
                    <p>From <span>Gulshan Plaza Restaura GPR</span></p>
                    <p>Arriving in 20-30min</p>
                    <p>107 Rd No 8</p>
                </div>
                <div className="selectedItem">
                    <div className="image">
                        <img src={item.image} alt=""/>
                    </div>
                    <div className="NamePrice">
                        <p>{item.name}</p>
                        {/* <p>{item.id}</p> */}
                        <h5 className="itemPrice">${item.price}</h5>
                    </div>
                </div>

                {/* <div className="selectedItem" id="selectedItemById">
                    <div className="image">
                        <img src={item.image} alt=""/>
                    </div>
                    <div className="NamePrice">
                        <p>{item.name}</p>
                        <h5 className="itemPrice">${item.price}</h5>
                    </div>
                </div> */}

                <div className="total-container">
                    <div className="totalItem">
                        <p>Sub Total 1 item</p>
                        <p className="totalPrice">${item.price}</p>
                    </div>
                    <div className="totalItem">
                        <p>Tax</p>
                        <p className="taxPrice">$5</p>
                    </div>
                    <div className="totalItem">
                        <p>Delivery Fee</p>
                        <p className="deliveryPrice">$2</p>
                    </div>
                    <div className="totalItem">
                        <p>Total</p>
                        <p className="fullPrice">${item.price + 5 + 2}</p>
                    </div>
                </div>

                <div>
                    <Link to={`/contact/${item.id}`}><button id="orderBtn" className="orderButton" disabled="disabled">Place Order</button></Link>
                </div>
            </div>
         </div>
        </div>
    );
};

export default Shipment;