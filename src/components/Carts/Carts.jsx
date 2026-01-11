import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";

const Carts = ({ handleBidNow }) => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, []);

  return (
    <div className="p-4">
      {/*  <h1 className="text-3xl mb-4">Total: {carts.length}</h1> */}

      <div className="status_bar flex justify-between font-medium text-xm px-4 mb-2">
        <ul className="w-1/4">Items</ul>
        <ul className="w-1/4 text-center">Current Bid</ul>
        <ul className="w-1/4 text-center">Time Left</ul>
        <ul className="w-1/4 text-center">Bid Now</ul>
      </div>

      <div className="all_cart">
        {carts.map((cart) => (
          <Cart key={cart.id} cart={cart} handleBidNow={handleBidNow} />
        ))}
      </div>
    </div>
  );
};

export default Carts;
