import React from 'react';
import './Auth.css'
import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

function Input({name, handleChange, label, autoFocus, type, handleShowPassword}) {
  return (
   <div >

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
        InputProps ={name === 'password' ? {
            endAdornment: (
                <InputAdornment position='end'>
                    <IconButton onClick={handleShowPassword}>
                        {type === 'Password' ? <Visibility /> : <VisibilityOff /> }
                    </IconButton>
                </InputAdornment>
            )
        } : null}
      />

   </div>
  );
}

export default Input;
