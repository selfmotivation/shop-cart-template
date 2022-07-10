import React from 'react'
import { CartItem } from './CartItem'

export const CartList = ({cartItems, remove}) => {
  return (
    <div>
      <h2 className='cartList__title'>Список товаров</h2>
      {cartItems.map((cartItem, index) => 
        <CartItem remove={remove} number={index + 1} cartItem={cartItem} key={cartItem.cartItemId}/>
      )}
    </div>
  )
}
