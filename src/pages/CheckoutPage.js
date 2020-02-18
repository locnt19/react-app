import React from 'react';

export default function CheckoutPage(props) {
  const cartCount = 3;

  if (cartCount === 0) return (
    <h1>Gio hang dang rong</h1>
  )
  return (
    <h1>checkout page</h1>
  );
}