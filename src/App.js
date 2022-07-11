import React, { useState } from "react";
import './styles/App.css';
import { AddToCartForm } from './components/AddToCartForm.jsx';
import { CartList } from './components/CartList.jsx';
import { Summary } from "./components/Summary";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const createCartItem = (newCartItem) => {
    setCartItems([...cartItems, newCartItem]);
  }

  const removeCartItem = (cartItem) => {
    setCartItems(cartItems.filter(c => c.cartItemId !== cartItem.cartItemId));
  }

  const totalPrice = (cartItems) => {
    let sum = 0;

    cartItems.map(item => {
      sum += +item.cartItemPrice;
    })

    return sum;
  }

  return (
    <div className="App">
      <AddToCartForm create={createCartItem}/>
      <Summary cartItems={cartItems} total={totalPrice} />
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