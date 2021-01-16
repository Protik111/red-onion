import React from 'react';
import './Header.css';
import logo from '../../images/logo2.png';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Header = () => {
    return (
        <div className="">
            <div className="header-menu">
                <div>
                    <img src={logo} alt=""/>
                </div>
                <div className="cart-logo">
                     <ShoppingCartIcon style={{marginTop:'30px', marginLeft:'950px'}}></ShoppingCartIcon>
                </div>
                <div className="btn">
                    <button className="btnLogIn">Log In</button>
                    <button className="btnSignUp">Sign Up</button>
                </div>
            </div>
            <div className="header-bg">
            <p>Best food waiting for your belly</p>
            <input type="text" placeholder="search for items" className="search-input"/>
            <button className="btnSearch">Search</button>
            </div>

        </div>
    );
};

export default Header;