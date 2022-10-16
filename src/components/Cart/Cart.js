import React from "react";

const Cart = ({ cart,removeFromCart }) => {
  return (
    <div>
      <h3>Added Products</h3>
      {cart.map((product) => (
        <div key={product._id}>
          <p>
            {product.name}
            <button onClick={()=> removeFromCart(product._id)}>X</button>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
