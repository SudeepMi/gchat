import React from 'react'
import './Login.css';
import { Button } from '@material-ui/core'
import Logo from './Logo.png';
import { auth, provider } from './firebase.js';


function Login() {

    const signin = (e) =>{
        e.preventDefault();
        auth.signInWithPopup(provider)
            .then(result => {console.log(result)})
            .catch(err=>alert(err))
    }

    return (
        <div className="login">
            <div className="login__body">
                <img 
                src={Logo}
                alt="GChat" />
                <div className="login__text">
                <h1>Signin to GChat</h1>
                </div>
                <Button onClick={e=>signin(e)}>Login with Google</Button>
            </div>
        </div>
    )
}

export default Login
