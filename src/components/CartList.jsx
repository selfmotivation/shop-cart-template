import React from 'react'
import { CartItem } from './CartItem'

export const CartList = ({cartItems, remove}) => {
  console.log(cartItems);
  return (
    <div>
      <h2>Список товаров</h2>
      {cartItems.map((cartItem, index) => 
        <CartItem remove={remove} number={index + 1} cartItem={cartItem} key={cartItem.cartItemId}/>
      )}
    </div>
  )
}
