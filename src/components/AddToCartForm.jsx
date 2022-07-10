import React, { useState } from 'react'
import { CartButton } from './UI/CartButton/CartButton';
import { CartInput } from './UI/CartInput/CartInput'

export const AddToCartForm = ({create}) => {
  const [cartItem, setCartItem] = useState({cartItemId: '', cartItemTitle: '', cartItemPrice: ''});

  const addNewCartItem = (e) => {
    e.preventDefault();

    const newCartItem = {
      ...cartItem, cartItemId: Date.now(),
    }
    create(newCartItem);
  }

  return (
    <form>
      <CartInput
        value={cartItem.cartItemId}
        onChange={e => setCartItem({...cartItem, cartItemId: e.target.value})}
        type="text"
        placeholder="Идентификатор товара"
      />
      <CartInput
        value={cartItem.cartItemTitle}
        onChange={e => setCartItem({...cartItem, cartItemTitle: e.target.value})}
        type="text"
        placeholder="Название товара"
      />
      <CartInput
        value={cartItem.cartItemPrice}
        onChange={e => setCartItem({...cartItem, cartItemPrice: e.target.value})}
        type="text"
        placeholder="Цена товара"
      />
      <CartButton onClick={addNewCartItem}>Добавить товар</CartButton>
    </form>
  )
}