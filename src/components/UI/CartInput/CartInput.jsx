import React from 'react';
import classes from './CartInput.module.css';

export const CartInput = ({...props}) => {
  return (
    <input {...props} className={classes.cartInput} />
  )
}
