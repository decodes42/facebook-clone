import React from 'react';
import './Auth.css'
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

function Input({name, handleChange, label, half, autoFocus, type, handleShowPassword}) {
  return (
   <Grid item xs={12} sm={half ? 6 : 12}>

      <TextField
      id="outlined-secondary"
      name={name}
      label={label}
      variant="outlined"
      color="secondary"
      required
      fullWidth
        onChange={handleChange}
        autoFocus={autoFocus}
        type={type}
        InputProps ={name === 'password' && {
            endAdornment: (
                <InputAdornment position='end'>
                    <IconButton onClick={handleShowPassword}>
                        {type === 'Password' ? <Visibility /> : <VisibilityOff /> }
                    </IconButton>
                </InputAdornment>
            )
        }}
      />

   </Grid>
  );
}

export default Input;
