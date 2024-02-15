import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Pages from "./pages/Pages";
import Headder from "./common/Headder";
import Footer from "./common/Footer";
import Data from "./components/Data";
import ShopData from "./components/ShopData";
import { useState } from "react";
import Cart from "./pages/Cart";

function App() {
  const { productItems } = Data;
  const { shopItems } = ShopData;

  const [CartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);
    if (productExit) {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }]);
    }
  };

  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };

  return (
    <BrowserRouter>
      <Headder CartItem={CartItem} />
      <Routes>
        <Route
          path="/"
          element={
            <Pages
              productItems={productItems}
              shopItems={shopItems}
              addToCart={addToCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              CartItem={CartItem}
              addToCart={addToCart}
              decreaseQty={decreaseQty}
            />
          }
        />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
