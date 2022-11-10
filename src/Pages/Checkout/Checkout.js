import React from "react";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const { price, title } = useLoaderData();
  return (
    <div>
      <h2>Name: {title}</h2>
      <p>Price: {price}</p>
    </div>
  );
};

export default Checkout;
