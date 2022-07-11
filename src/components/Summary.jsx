import React from 'react'

export const Summary = ({cartItems, total}) => {
  return (
    <div className="summary">
      <p className="summary__title">Добавлено товаров:</p>
      <p>{cartItems.length}</p>
      <p className="summary__title">Общая стоимость:</p>
      <p>{total(cartItems)}</p>
    </div>
  )
}
