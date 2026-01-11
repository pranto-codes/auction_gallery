import React from "react";
import { CiHeart } from "react-icons/ci";
const Cart = ({ cart, handleBidNow }) => {
  // console.log(handleBidNow);
  return (
    <div className="w-full bg-cyan-700">
      <ul className="list  rounded-box shadow-md my-2">
        <li className="list-row flex items-center justify-between p-3">
          <div className="flex items-center gap-3 w-1/4">
            <img
              className="size-18 rounded-box"
              src={cart.image}
              alt={cart.title}
            />
            <div className="font-medium">{cart.title}</div>
          </div>

          <div className="flex flex-col items-center w-1/4 font-bold">
            <span>{cart.currentBidPrice}</span>

            <span>{cart.totalBids}</span>
          </div>

          <div className="w-1/4 text-center font-semibold">{cart.timeLeft}</div>

          <div className="w-1/4 flex justify-center">
            <button onClick={() => handleBidNow(cart)}>
              {" "}
              <CiHeart size={25} />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Cart;
