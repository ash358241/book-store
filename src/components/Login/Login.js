import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Login/firebase.config';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { Button } from 'react-bootstrap';

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }else {
        firebase.app(); 
     }


     const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            console.log(result.user)
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;
            var token = credential.accessToken;
            const {displayName, email, photoURL} = result.user;
            const signedInUser = {name: displayName, email, photo:photoURL};
            setLoggedInUser(signedInUser);
            history.replace(from);
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            console.log(errorCode, errorMessage);
        });
     }
  
    return (
        <div className="text-center px-3 my-3">
            <h3>Please SignIn to go further</h3>
        <Button style={{padding: '10px 20px'}} variant="primary" type="submit" onClick={handleGoogleSignIn}>Google Sign In</Button>
        </div>
  
    );
};

export default Login;