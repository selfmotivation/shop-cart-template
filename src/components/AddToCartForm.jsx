import React, { useState } from 'react'
import { CartButton } from './UI/CartButton/CartButton';
import { CartInput } from './UI/CartInput/CartInput'

export const AddToCartForm = ({create}) => {
  const [cartItem, setCartItem] = useState({cartItemId: '', cartItemTitle: '', cartItemPrice: ''});

  const addNewCartItem = (e) => {
    e.preventDefault();

    if (cartItem.cartItemId && cartItem.cartItemTitle && cartItem.cartItemPrice) {
      const newCartItem = {
        ...cartItem,
      }
  
      console.log(newCartItem);

      create(newCartItem);
      

      setCartItem({cartItemId: '', cartItemTitle: '', cartItemPrice: ''})
    } else {
      alert('Необходимо заполнить все поля!')
    }
  }

  return (
    <form className='form'>
      <CartInput
        value={cartItem.cartItemId}
        onChange={e => setCartItem({...cartItem, cartItemId: e.target.value})}
        type="text"
        placeholder="Идентификатор товара"
        required
      />
      <CartInput
        value={cartItem.cartItemTitle}
        onChange={e => setCartItem({...cartItem, cartItemTitle: e.target.value})}
        type="text"
        placeholder="Название товара"
        required
      />
      <CartInput
        value={cartItem.cartItemPrice}
        onChange={e => setCartItem({...cartItem, cartItemPrice: e.target.value})}
        type="text"
        placeholder="Цена товара"
        required
      />
      <CartButton onClick={addNewCartItem}>Добавить товар</CartButton>
    </form>
  )
}