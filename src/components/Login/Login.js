import React from 'react'
import './Login.css'
import logo from '../../logo.svg'
import { Typography } from '@material-ui/core';
import { auth, provider } from '../../firebase'
import { Button } from '@material-ui/core'
import { useStateValue } from '../../StateProvider'
import { actionTypes } from '../../reducer'

import Auth from '../Auth/Auth'

function Login() {
    //  Hook
    // const [state, dispatch] = useStateValue();

    // const signIn = () => {
    //     // Sign in..
    //     auth.signInWithPopup(provider)
    //     .then(result => {
    //         dispatch({
    //             type: actionTypes.SET_USER,
    //             user: result.user
    //         })

    //     }).catch((error) => alert(error.message))
    // }

    return (
        <div className='login'>
            <div className="login__logo">
                <img src={logo} alt="Dev Space Logo"/>
                <Typography className ='login__title' variant='h1'>{'devSpace'}</Typography>

            </div>

            {/* <Button type='submit' onClick={signIn}>
                Sign In
            </Button> */}

            <Auth />
        </div>
    )
}

export default Login
