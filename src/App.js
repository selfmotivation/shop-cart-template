import React, { useState } from "react";
import './styles/App.css';
import { AddToCartForm } from './components/AddToCartForm.jsx';
import { CartList } from './components/CartList.jsx';
import { Summary } from "./components/Summary";
import { CartButton } from "./components/UI/CartButton/CartButton";
import { CartInput } from "./components/UI/CartInput/CartInput";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const createCartItem = (newCartItem) => {
    setCartItems([...cartItems, newCartItem]);
  }

  const removeCartItem = (cartItem) => {
    setCartItems(cartItems.filter(c => c.cartItemId !== cartItem.cartItemId));
  }

  const [discount, setDiscount] = useState('');

  const updateDiscount = (sum) => {
    if (discount) {
      console.log(discount);
    }
  }

  return (
    <div className="App">
      <AddToCartForm create={createCartItem} />
      <Summary cartItems={cartItems} />
      <div className="discount">
        <CartInput
          value={discount}
          onChange={e => setDiscount(e.target.value)}
          type="number"
          placeholder="Скидка"
          style={{width: '70px', fontSize: '12px', marginRight: '10px'}}
        />
        <CartButton onClick={updateDiscount} >Установить скидку</CartButton>
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