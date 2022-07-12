import React from 'react'

export const Summary = ({cartItems, totalPrice, calcDiscountPrice, discountForPrice}) => {
  let classForSpan;
  
  if (cartItems.length !== 0 && discountForPrice) {
    classForSpan = 'strikethrough';
  }

  return (
    <div className="summary">
      <p className="summary__title">Добавлено товаров:</p>
      <p>{cartItems.length}</p>
      <p className='summary__title'>Общая стоимость:</p>
      <p>
        <span className={classForSpan}>{totalPrice}</span>
        <span className='summary__discount-price'>
          {calcDiscountPrice(cartItems, discountForPrice)}
        </span>
      </p>
    </div>
  )
}
