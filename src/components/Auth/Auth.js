import React, {useState} from 'react';
import './Auth.css';
import {
  Avatar,
  Button,
  Typography,
  Container,
  Grid,
  Paper
} from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';

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

    <Container className='register__form'>
        <Paper elevation={3}>
        <Avatar>
          <LockIcon />
        </Avatar>
        <Typography variant='h5'>{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
        <form>
        <Grid container spacing={2}>
        { isSignUp && (
              <>
                <Input
                  name='firstName'
                  label='First Name'
                  placeholder="First Name"
                  half
                  handleChange={handleChange}
                  autoFocus
                />
                <Input
                  name='lastName'
                  label='Last Name'
                  half
                  handleChange={handleChange}
                />


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


        </Grid>
        <Button type='submit' color='primary' fullWidth variant='contained' className='signIn__button'>
              {isSignUp ? 'Sign Up' : 'Sign In'}
          </Button>
          <Grid container justify='flex-end'>
              <Grid item>
                  <Button fullWidth onClick={switchMode}>
                      {isSignUp ? 'Already have an account? Sign In' : 'Don/t have an account? Sign Up'}
                  </Button>
              </Grid>
          </Grid>
        </form>

        </Paper>


    </Container>










  );
}

export default Auth;
