import React from 'react';
import logo from '../../images/logo2.png';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import '../Home/Home.css';

import image1 from '../../images/Image/adult-blur-blurred-background-687824.png';
import image2 from '../../images/Image/chef-cook-food-33614.png';
import image3 from '../../images/Image/architecture-building-city-2047397.png';
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import FoodItem from '../FoodItem/FoodItem';
// import logo from '../../images/logo.png';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

const Home = () => {
    const classes = useStyles();
    return (
        <div className="">
            <div className="header-menu">
                <div>
                    <img src={logo} className="logo" alt=""/>
                     </div>
                     <div>
                     <ShoppingCartIcon style={{marginTop:'30px', marginLeft:'920px'}}></ShoppingCartIcon>
                     </div>
                <div className="btn">
                    <button className="btnLogIn">Log In</button>
                    <button className="btnSignUp">Sign Up</button>
                </div>
            </div>
            <div className="header-bg">
                <p className="header-title">Best food waiting for your belly</p>
                <div className="search">
                    <input type="text" placeholder="search for items" className="search-input"/>
                    <button className="btnSearch">Search</button>
                </div>
            </div>

            <FoodItem></FoodItem>
            
            <div>
            <div className="footer-title">
                <h1>Why you choose us</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique id cumque,
                <br/>
                quis veritatis dolorum blanditiis est nihil quidem explicabo tenetur.</p>
            </div>

          <div className="card-container">
          <Card className={classes.root} id="card1">
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    id="media1"
                    image={image1}
                    title="Contemplative Reptile"
                    />
                    <div className="card-content-icon">
                        <div>
                            <LocalShippingIcon style={{color: 'red', marginTop: '20px', marginLeft: '10px'}}></LocalShippingIcon>
                        </div>
                        <div>
                        <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">
                            Fast Delivery
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        </CardContent>
                        </div>
                    </div>
                </CardActionArea>
                <CardActions>
                   <div className="seeMore-btn">
                   <Button size="small" color="primary">
                    See more <NavigateNextIcon></NavigateNextIcon>
                    </Button>
                   </div>
                </CardActions>
            </Card>

            <Card className={classes.root} id="card1">
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    id="media1"
                    image={image2}
                    title="Contemplative Reptile"
                    />
                    <div className="card-content-icon">
                        <div>
                        <AirportShuttleIcon style={{color: 'red', marginTop: '20px', marginLeft: '10px'}}></AirportShuttleIcon>
                        </div>
                        <div>
                        <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">
                            A Good Responder
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        </CardContent>
                        </div>
                    </div>
                </CardActionArea>
                <CardActions>
                   <div className="seeMore-btn">
                   <Button size="small" color="primary">
                    See more <NavigateNextIcon></NavigateNextIcon>
                    </Button>
                   </div>
                </CardActions>
            </Card>

            <Card className={classes.root} id="card1">
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    id="media1"
                    image={image3}
                    title="Contemplative Reptile"
                    />
                   <div className="card-content-icon">
                       <div>
                       <LocalShippingIcon style={{color: 'red', marginTop: '20px', marginLeft: '10px'}}></LocalShippingIcon>
                       </div>
                       <div>
                       <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">
                            Home Delivery
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        </CardContent>
                       </div>
                   </div>
                </CardActionArea>
                <CardActions>
                   <div className="seeMore-btn">
                   <Button size="small" color="primary">
                    See more <NavigateNextIcon></NavigateNextIcon>
                    </Button>
                   </div>
                </CardActions>
            </Card>
          </div>
           
           <div className="last-footer">
               <div>
               <img src={logo} alt=""/>
               </div>
                <div className="footer-hints">
                    <p>About Online Food</p>
                    <p>Read Our Blog</p>
                    <p>Sign Up To Deliver</p>
                    <p>Add Your Restaurent</p>
                </div>
                {/* <div className="footer-pricing">
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                    <p>Pricing</p>
                </div> */}
           </div>
        </div>
        </div>
    );
};

export default Home;