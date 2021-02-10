import React from 'react'
import './Main.css'
import logo from '../../logo.svg'
import { Typography } from '@material-ui/core';
// import { auth, provider } from '../../firebase'
import { Button } from '@material-ui/core'
import { useStateValue } from '../../StateProvider'

import Auth from '../../components/Auth/Auth'

function Main() {


    return (
        <div className='login'>
            <div className="login__logo">
                <img src={logo} alt="Dev Space Logo"/>
                <Typography className ='login__title' variant='h1'>{'devHub'}</Typography>

            </div>

            {/* <Button type='submit' onClick={signIn}>
                Sign In
            </Button> */}

            <Auth />
        </div>
    )
}

export default Main
