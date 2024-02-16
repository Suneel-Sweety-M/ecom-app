import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Pages from "./pages/Pages";
import Headder from "./common/Headder";
import Footer from "./common/Footer";
import Data from "./components/Data";
import ShopData from "./components/ShopData";
import { useState } from "react";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductDetail from "./pages/ProductDetail";
import PageNotFound from "./pages/PageNotFound";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import CheckOut from "./pages/CheckOut";

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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<ProductDetail />} />
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
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
