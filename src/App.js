import React, { useState } from "react";
import './styles/App.css';
import { AddToCartForm } from './components/AddToCartForm.jsx';
import { CartList } from './components/CartList.jsx';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const createCartItem = (newCartItem) => {
    setCartItems([...cartItems, newCartItem]);
  }

  const removeCartItem = (cartItem) => {
    setCartItems(cartItems.filter(c => c.cartItemId !== cartItem.cartItemId));
  }

  const summaryPrice = (cartItems) => {
    let sum = 0;

    cartItems.map(item => {
      sum += item.cartItemPrice;
      console.log(item.cartItemPrice);
    })

    return sum;
  }

  return (
    <div className="App">
      <AddToCartForm create={createCartItem}/>
      <div className="summary">
        <p>Количество добавленных товаров:</p>
        <p>{cartItems.length}</p>
        <p>Общая цена:</p>
        <p>{summaryPrice}</p>
      </div>
      <div className="cartList">
        {cartItems.length
          ?
          <CartList remove={removeCartItem} cartItems={cartItems} title={"Список товаров"}/>
          :
          <h2 className="cartList__title">Список товаров пуст</h2>
        }
      </div>
    </div>
  );
}

export default App;