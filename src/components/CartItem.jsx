import React from 'react'
import { CartButton } from './UI/CartButton/CartButton'

export const CartItem = (props) => {
  return (
    <div className='cartItem'>
      <div className='cartItemContent'>
        <p className='title'>ID товара:</p>
        <p className='text'>{props.cartItem.cartItemId}</p>
        <p className='title'>Название товара:</p>
        <p className='text'>
          {props.cartItem.cartItemTitle}
        </p>
        <p className='title'>Цена товара:</p>
        <p className='text'>
          {props.cartItem.cartItemPrice}
        </p>
      </div>
      <CartButton onClick={() => props.remove(props.cartItem)}>
        Удалить
      </CartButton>
    </div>
  )
}
