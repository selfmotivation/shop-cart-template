import React, { useState } from "react";
import './App.css';
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

  return (
    <div className="App">
      <AddToCartForm create={createCartItem}/>
      {cartItems.length
        ?
        <CartList remove={removeCartItem} cartItems={cartItems} title={"Список товаров"}/>
        :
        <h3>Список пуст</h3>
      }
    </div>
  );
}

export default App;