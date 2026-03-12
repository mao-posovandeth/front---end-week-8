import React from "react";

export default function CheckoutButton({ total }) {
  // Convert 'total' to a number. If it's a string like "TODO", use 0.
  const numericTotal = typeof total === "number" ? total : 0;

  return (
    <div className="checkout-button">
      <p>Checkout</p>
      {/* toFixed(2) ensures it always looks like currency (e.g., 0.00) */}
      <p className="right">{"$ " + numericTotal.toFixed(2)}</p>
    </div>
  );
}