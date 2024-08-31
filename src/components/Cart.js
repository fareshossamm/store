import React, { useState, useEffect } from "react";
import "./Cart.css"; // Ensure to create and style this CSS file

function Cart() {
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch cart from localStorage
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartData);
  }, []);

  // Handle item removal from the cart
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };



  if (error) {
    return (
      <div className="container error-container">
        <div className="alert alert-danger" role="alert">
          Error fetching cart data: {error.message}
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return <div className="empty">Your cart is empty</div>;
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center text-uppercase mt-5 mb-5">Your <sapn className="blue">Cart</sapn></h2>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img
              src={item.image}
              alt={item.title}
              className="cart-item-image"
            />
            <button
              className="cart-item-remove"
              onClick={() => removeFromCart(item.id)}
            >
              X
            </button>
            <div className="cart-item-details">
              <h4 className="tittle-cart ">{item.title}</h4>
              <p className="bold"> Price :<span className="text-danger"> $</span>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    
    </div>
  );
}

export default Cart;
