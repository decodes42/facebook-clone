import React, {useState} from 'react';
import './Auth.css';
import {
  Avatar,
  Button,
  Typography,
  Paper
} from '@material-ui/core';

import Input from './Input';

function Auth() {
  const [showPassword, setShowPassword] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)

  // If users wants to see the password they typed in this functions allows them to show and hide the password
  const handleShowPassword = () => setShowPassword( (prevShowPassword) => !prevShowPassword)

  const handleSubmit = () => {};

  const handleChange = () => {};

  //If user has an account button will switch to login page. It will also prevent the password from being visibel when switching
  const switchMode = () => {
      setIsSignUp( (prevIsSignup) => !prevIsSignup )
      handleShowPassword(false)
  }
  return (
    <div className='register__form'>
        <Paper elevation={3}>
        <Typography className ='form__title' variant='h5'>{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
        <form>
        <div className='auth__inputs'>
        { isSignUp && (
              <>
                <div className="name__inputs">
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
            {isSignUp && <Input name='confirmPassword' label='Repeat Password'  handleChange={handleChange} type='password'/>}


        </div>
        <Button type='submit' className='signIn__button'>
              {isSignUp ? 'Sign Up' : 'Sign In'}
          </Button>
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
