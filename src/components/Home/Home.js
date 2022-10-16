import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import Tshirt from "../Tshirt/Tshirt";
import "./Home.css";

const Home = () => {
  const tshirts = useLoaderData();
  const [cart, setCart] = useState([]);

  const handleBuyNow = (id) => {
    const newProduct = tshirts.find((tshirt) => tshirt._id === id);
    const exists = cart.find((product) => product._id === newProduct._id);
    if (exists) {
      alert("already added");
    } else {
      const newCart = [...cart, newProduct];
      setCart(newCart);
    }
  };

  const removeFromCart = id => {
    const remainingProduct = cart.filter(product => product._id !== id)
    setCart(remainingProduct)
  }

  return (
    <div className="home">
      <div className="tshirt-container">
        {tshirts.map((tshirt) => (
          <Tshirt
            key={tshirt._id}
            tshirt={tshirt}
            handleBuyNow={handleBuyNow}
          ></Tshirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} removeFromCart={removeFromCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
