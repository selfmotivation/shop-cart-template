import React from 'react'
import { CartButton } from './UI/CartButton/CartButton'

export const CartItem = (props) => {
  return (
    <div className='cartItem'>
      <div className='cartItemContent'>
        <strong>{props.number}. {props.cartItem.cartItemTitle}</strong>
        <div>
          {props.cartItem.cartItemPrice}
        </div>
      </div>
      <CartButton onClick={() => props.remove(props.cartItem)}>
        Удалить
      </CartButton>
    </div>
  )
}
