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

  const calcTotalPrice = (cartItems) => {
    let sum = 0;

    cartItems.map(item => {
      sum += +item.cartItemPrice;
    });

    return sum;
  }

  const checkDiscount = (e) => {
    if (e.target.value < 0) {
      e.target.value = 0;
    }

    if (e.target.value > 100) {
      e.target.value = 100;
    }
    
    setDiscount(+e.target.value);
  }

  const [discount, setDiscount] = useState('');
  const [discountForPrice, setDiscountForPrice] = useState('');

  const calcDiscountPrice = (cartItems, discountForPrice) => {
    let price;
    
    if (discountForPrice) {
      let total = calcTotalPrice(cartItems);
      price = Math.round((total - total * (discountForPrice / 100)) * 1000) / 1000;
    }

    return price;
  }

  return (
    <div className="App">
      <AddToCartForm create={createCartItem} />
      <Summary
        cartItems={cartItems}
        totalPrice={calcTotalPrice(cartItems)}
        calcDiscountPrice={calcDiscountPrice}
        discountForPrice={discountForPrice}
      />
      <div className="discount">
        <CartInput
          value={discount}
          onChange={e => checkDiscount(e)}
          type="number"
          placeholder="Скидка"
          min="0"
          max="100"
          style={{width: '90px', fontSize: '12px', marginRight: '10px'}}
        />
        <CartButton
          onClick={() => {
            setDiscountForPrice(discount);
          }}
        >
          Установить скидку
        </CartButton>
        <CartButton
          onClick={() => {
            setDiscountForPrice('');
            setDiscount('');
            }
          }
        >
          Сбросить скидку
        </CartButton>
      </div>
      <div className="cartList">
        {cartItems.length
          ?
          <CartList
            remove={removeCartItem}
            cartItems={cartItems}
            title={"Список товаров"}
            calcDiscountPrice={calcDiscountPrice}
            discountForPrice={discountForPrice}
          />
          :
          <h2 className="cartList__title">Список товаров пуст</h2>
        }
      </div>
    </div>
  );
}

export default App;