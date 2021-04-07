import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

firebase.initializeApp(firebaseConfig);

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory()
    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();

    const handleSignIn = () => {
        
        firebase.auth()
            .signInWithPopup(provider)
            .then((res) => {
                const {email, displayName} =res.user
                setLoggedInUser(res.user)
                history.replace(from);
                console.log(email, displayName);
            })
        
    }

    return (
        <div style={
            {
                textAlign: "center"
            }


        } >
            <button onClick={handleSignIn}>Sign In</button>
        </div>
    );
};

export default Login;