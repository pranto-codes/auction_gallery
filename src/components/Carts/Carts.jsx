import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";

const Carts = ({ handleBidNow, favouriteIds = [] }) => {
  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const loadAuctions = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("/data.json", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("We couldn't load the auction listings.");
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("The auction data format is invalid.");
        }

        setCarts(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(
            err.message || "Something went wrong while loading auctions.",
          );
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    loadAuctions();

    return () => controller.abort();
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-4 py-4 sm:px-5">
        <div>
          <h3 className="font-bold text-slate-900">Available items</h3>
          <p className="mt-1 text-sm text-slate-500">
            Compare current bids and choose your favorites.
          </p>
        </div>

        {!loading && !error && (
          <span className="badge border-0 bg-blue-50 px-3 py-3 font-medium text-blue-700">
            {carts.length} {carts.length === 1 ? "item" : "items"}
          </span>
        )}
      </div>

      <div className="hidden grid-cols-[minmax(0,2fr)_1fr_1fr_auto] gap-5 bg-slate-50 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500 sm:grid">
        <span>Item details</span>
        <span>Current bid</span>
        <span>Time left</span>
        <span className="pr-1">Favorite</span>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center px-5 py-16 text-center">
          <span className="loading loading-spinner loading-lg text-blue-600" />
          <p className="mt-4 text-sm text-slate-500">
            Finding the latest auction listings...
          </p>
        </div>
      ) : error ? (
        <div className="px-5 py-12 text-center">
          <h3 className="font-semibold text-slate-900">
            We couldn't load the auctions
          </h3>
          <p className="mt-2 text-sm text-slate-500">{error}</p>
          <p className="mt-2 text-xs text-slate-400">
            Check that data.json exists in your public folder.
          </p>
        </div>
      ) : carts.length === 0 ? (
        <div className="px-5 py-12 text-center">
          <h3 className="font-semibold text-slate-900">
            No auctions available yet
          </h3>
          <p className="mt-2 text-sm text-slate-500">
            Check back soon for new items.
          </p>
        </div>
      ) : (
        carts.map((cart) => (
          <Cart
            key={cart.id}
            cart={cart}
            handleBidNow={handleBidNow}
            isFavourite={favouriteIds.includes(cart.id)}
          />
        ))
      )}
    </div>
  );
};

export default Carts;
