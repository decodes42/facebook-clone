import React from 'react'
import './Login.css'
import { auth, provider } from '../../firebase'
import { Button, TextField } from '@material-ui/core'
import { useStateValue } from '../../StateProvider'
import { actionTypes } from '../../reducer'

function Login() {
    //  Hook
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        // Sign in..
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })

        }).catch((error) => alert(error.message))
    }

    const logIn = () => {

    }

    const signUp = () => {

    }

    return (
        <div className='login'>
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png" alt="Facebook Logo"/>

                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt=""/>
            </div>

            <Button type='submit' onClick={signIn}>
                Sign In
            </Button>

            <form>
        <TextField className='registarion__form' required id="standard-required" label="Required" defaultValue="Enter your name" />
        <TextField className='registarion__form' required id="standard-required" label="Required" defaultValue="Enter your email" />
        <TextField className='registarion__form' required id="standard-required" label="Required" defaultValue="Enter your password" />

        <Button
        onClick={this.logIn}Login
        ></Button>
        <Button
        onClick={this.signUp}Login
        ></Button>

        </form>
        </div>
    )
}

export default Login
