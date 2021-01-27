import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import '../Login/Login.css';
import logo from '../../images/logo2.png';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [newUser, setNewUser] = useState(false);

    const [passStatus, setPassStatus] = useState('');

    const [user, setUser] = useState({
        isSignedIn : false,
        name : '',
        email : '',
        password : '',
        photo : '',
        error : '',
        success : false,
        password2 : ''
      })

    // const handleSignInGoogle = () => {
    //     firebase.initializeApp(firebaseConfig);
    //     const provider = new firebase.auth.GoogleAuthProvider();
    //     firebase.auth()
    //         .signInWithPopup(provider)
    //         .then((result) => {
    //             const user = result.user;
    //             const {displayName, email} = result.user;
    //             const signedInUser = {name: displayName, email};
    //             console.log(user);
    //             setLoggedInUser(signedInUser);
    //             history.replace(from);
    //         }).catch((error) => {
    //             var errorMessage = error.message;
    //             console.log(errorMessage);
    //         });
    // }

    // const handlePassword =  () => {
    //     console.log('pass2');
    // }


    const handleSubmit = (e) => {
    console.log(user.email, user.password, user.name);
    if(newUser && user.email && user.password && user.password === user.password2){
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then( res => {
                const newUserInfo = {...user}
                console.log(newUserInfo.name);
                newUserInfo.error = '';
                newUserInfo.success = true;
                setLoggedInUser(newUserInfo);
                setUser(newUserInfo);
                console.log(loggedInUser);
                setPassStatus('');
                console.log(newUserInfo);
                history.replace(from);
            })
            .catch((error) => {
                // var errorCode = error.code;
                // var errorMessage = error.message;
                // console.log(errorCode, errorMessage);

                const newUserInfo = {...user}
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
            });
        }if(newUser && user.password != user.password2){
            setPassStatus('Password does not match');
        }

        if(!newUser && user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(res => {
                const newUserInfo = {...user}
                newUserInfo.error = '';
                newUserInfo.success = true;
                setLoggedInUser(newUserInfo);
                setUser(newUserInfo);
                history.replace(from);
                
            })
            .catch((error) => {
                const newUserInfo = {...user}
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
            });
        }

        

        e.preventDefault();
    }


    const handleBlur = (event) => {
        let isFormValid = true;
        if(event.target.name === 'email'){
            isFormValid = /\S+@\S+|.S+/.test(event.target.value);
            }
        if(event.target.name === 'password' || event.target.name === 'password2'){
            const isPasswordValid = event.target.value.length > 6;
            const hasPasswordNumber = /\d{1}/.test(event.target.value);
            isFormValid = isPasswordValid && hasPasswordNumber;
            }

        // if(event.target.name === 'password2'){
        //     const confrimPassword = event.target.value;
        //     // console.log(confrimPassword);
        //     if(event.target.value === password) {
        //         console.log('matched');
        //     }
        // }

        if(isFormValid){
            const newUserInfo = {...user};
            newUserInfo[event.target.name] = event.target.value;
            // console.log(newUserInfo);
            setUser(newUserInfo);
            }
        }
    return (

        <div className="form-container">
            <div className="form-image">
                <img className="form-image2" src={logo} alt=""/>
            </div>
            <div className="form-container-2">
                {/* <div>
                <h1>This is Log in</h1>
                <button onClick={handleSignInGoogle}>Sign In With Google</button>
            </div> */}

                <input type="checkbox" onClick={() => setNewUser(!newUser)} name="newUser" id=""/>
                <label htmlFor="newUser" className="newUser">Create A New Account</label>
                <form onSubmit={handleSubmit} className="form-single">
                    {newUser && <input onBlur={handleBlur} type="text" name="name" id="" placeholder="Name" required/>}
                    <br/>
                    <input onBlur={handleBlur} type="text" name="email" id="pass1" placeholder="Email" required/>
                    <br/>
                    <input onBlur={handleBlur} type="password" name="password" id="pass2" placeholder="Password" required/>
                    <br/>
                    {newUser && <input onBlur={handleBlur} type="password" name="password2" id="" placeholder="Confirm Password" required/>}
                    <br/>
                    <input style={{backgroundColor : 'red', color: 'white'}} type="submit" value={newUser ? 'Sign Up' : 'Sign In'}/>
                </form>
                <p>{user.error}</p>
                {
                user.success && <p>User {newUser ? 'Created' : 'Logged In'} Successfully</p>
                }
                <p>{passStatus}</p>
            </div>
        </div>
    );
};

export default Login;