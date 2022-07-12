import React from 'react'

export const Summary = ({cartItems}) => {
  const totalPrice = (cartItems) => {
    let sum = 0;

    cartItems.map(item => {
      sum += +item.cartItemPrice;
    });

    return sum;
  }

  return (
    <div className="summary">
      <p className="summary__title">Добавлено товаров:</p>
      <p>{cartItems.length}</p>
      <p className="summary__title">Общая стоимость:</p>
      <p>{totalPrice(cartItems)}</p>
    </div>
  )
}
