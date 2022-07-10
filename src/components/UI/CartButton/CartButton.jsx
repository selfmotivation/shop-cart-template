import React from 'react'
import classes from './CartButton.module.css';

export const CartButton = ({children, ...props}) => {
  return (
    <button {...props} className={classes.cartBtn}>
      {children}
    </button>
  )
}
