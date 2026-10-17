import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const Cart = ({ cart, handleBidNow, isFavourite }) => {
  return (
    <article className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-slate-100 bg-white px-3 py-4 transition hover:bg-slate-50 sm:grid-cols-[minmax(0,2fr)_1fr_1fr_auto] sm:gap-5 sm:px-5">
      <div className="flex min-w-0 items-center gap-3 sm:gap-4">
        <img
          src={cart.image}
          alt={cart.title}
          loading="lazy"
          className="h-16 w-16 shrink-0 rounded-xl bg-slate-100 object-cover sm:h-20 sm:w-20"
        />

        <div className="min-w-0">
          <h3 className="line-clamp-2 font-semibold leading-5 text-slate-900 sm:text-base">
            {cart.title}
          </h3>

          <p className="mt-2 text-xs text-slate-500 sm:hidden">
            {cart.currentBidPrice}
          </p>
        </div>
      </div>

      <div className="hidden sm:block">
        <p className="font-bold text-slate-900">{cart.currentBidPrice}</p>

        <p className="mt-1 text-xs text-slate-500">
          {cart.totalBids ?? cart.bidsCount ?? 0} bids
        </p>
      </div>

      <div className="hidden text-sm text-slate-600 sm:block">
        {cart.timeLeft}
      </div>

      <button
        type="button"
        onClick={() => handleBidNow(cart)}
        disabled={isFavourite}
        aria-label={
          isFavourite
            ? `${cart.title} is already in favorites`
            : `Add ${cart.title} to favorites`
        }
        aria-pressed={isFavourite}
        title={isFavourite ? "Added to favorites" : "Add to favorites"}
        className={`flex h-10 w-10 items-center justify-center rounded-full transition ${
          isFavourite
            ? "cursor-default bg-rose-50 text-rose-500"
            : "bg-slate-100 text-slate-500 hover:bg-rose-50 hover:text-rose-500"
        }`}
      >
        {isFavourite ? <FaHeart size={18} /> : <CiHeart size={25} />}
      </button>

      <div className="col-span-2 flex items-center justify-between gap-3 text-xs text-slate-500 sm:hidden">
        <span>Time remaining</span>
        <span className="font-medium text-slate-700">{cart.timeLeft}</span>
      </div>
    </article>
  );
};

export default Cart;
