import React from 'react'
import { CartButton } from './UI/CartButton/CartButton'

export const CartItem = (props) => {
  return (
    <div className='cartItem'>
      <div className='cartItemContent'>
        <p className='cartItemTitle'>ID товара:</p>
        <p className='cartItemText'>{props.cartItem.cartItemId}</p>
        <p className='cartItemTitle'>Название товара:</p>
        <p className='cartItemText'>
          {props.cartItem.cartItemTitle}
        </p>
        <p className='cartItemTitle'>Цена товара:</p>
        <p>
          <span className={['cartItemText', props.discountForPrice ? 'strikethrough' : ''].join(' ')}>
          {props.cartItem.cartItemPrice}
          </span>
          <span className='cartItemText__discount'>
          {props.calcDiscountPrice([props.cartItem], props.discountForPrice)}
          </span>
        </p>
      </div>
      <CartButton onClick={() => props.remove(props.cartItem)}>
        Удалить
      </CartButton>
    </div>
  )
}
