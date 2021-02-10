import React, { useState } from 'react';
import './Auth.css';
import { Avatar, Button, Typography, Paper } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';
import { useStateValue } from '../../StateProvider'


import Input from './Input';
import Icon from './Icon'

function Auth() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [ dispatch] = useStateValue();

  // If users wants to see the password they typed in this functions allows them to show and hide the password
  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleSubmit = () => {};

  const handleChange = () => {};

  //If user has an account button will switch to login page. It will also prevent the password from being visibel when switching
  const switchMode = () => {
    setIsSignUp((prevIsSignup) => !prevIsSignup);
    handleShowPassword(false);
  };

  const googleSuccess = async (res) => {
    //   * ?.(chaining operator) will not throw an error if we do not have access to the res object
    const result = res?.profileObj
    const token = res?.tokenId

    try {
        dispatch({
            type: 'AUTH',
            data: { result, token}
        })
    } catch (error) {
        console.log(error)
    }
  }
  const googleFailure = (error) => {
      console.log(error)
      console.log('Google Sign In was unsuccessful. Try Again Later')
  }
  return (
    <div className='register__form'>
      <Paper elevation={3}>
        <Typography className='form__title' variant='h5'>
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </Typography>
        <form>
          <div className='auth__inputs'>
            {isSignUp && (
              <>
                <div className='name__inputs'>
                  <Input
                    name='firstName'
                    label='First Name'
                    className='name__inputs'
                    handleChange={handleChange}
                    autoFocus
                  />
                  <Input
                    name='lastName'
                    label='Last Name'
                    className='name__inputs'
                    handleChange={handleChange}
                  />
                </div>
              </>
            )}
            <Input
              name='email'
              label='Email Address'
              handleChange={handleChange}
              type='email'
            />
            <Input
              name='password'
              label='Enter Password'
              handleChange={handleChange}
              type={showPassword ? 'text' : 'password'}
              handleShowPassword={showPassword}
            />
            {/* If user is signeup show this confirmation */}
            {isSignUp && (
              <Input
                name='confirmPassword'
                label='Repeat Password'
                handleChange={handleChange}
                type='password'
              />
            )}
          </div>

          <Button type='submit' className='signIn__button'>
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </Button>

           {/* Google Sign In Button */}
           <GoogleLogin
            clientId='219711517739-2a70ns2127knbsej0ijdi0thnfa1mtsv.apps.googleusercontent.com'
            render={(renderProps) => (
              <Button
                className='googleBtn'
                color='primary'
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
              >
                  Google Sing In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy='single_host_origin'
          />
          <div>
            <div>
              <Button className='switch__button' onClick={switchMode}>
                {isSignUp ? 'Sign In' : 'Create Account'}
              </Button>
            </div>
          </div>
        </form>
      </Paper>
    </div>
  );
}

export default Auth;
