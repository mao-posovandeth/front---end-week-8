import React from "react";

export default function OrderCard({ product = "Item", price = 0, quantity = 0 }) {
  return (
    <div className="order">
      <div>
        <h4>{product}</h4>
        <small>{"$ " + price.toFixed(2)}</small>
      </div>

      <div className="order-quantity">
        <div className="order-button">-</div>
        <h4>{quantity}</h4>
        <div className="order-button">+</div>
      </div>
    </div>
  );
}