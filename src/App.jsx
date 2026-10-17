import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Carts from "./components/Carts/Carts";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { CiHeart } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";

function App() {
  const [bid, setBid] = useState([]);

  const handleBidNow = (cart) => {
    setBid((previousBids) => {
      const alreadyAdded = previousBids.some((item) => item.id === cart.id);

      if (alreadyAdded) return previousBids;

      return [...previousBids, cart];
    });
  };

  const handleRmvBid = (id) => {
    setBid((previousBids) => previousBids.filter((item) => item.id !== id));
  };

  const totalAmount = bid.reduce((total, item) => {
    const price = Number(String(item.currentBidPrice).replace(/[^0-9.]/g, ""));

    return total + (Number.isFinite(price) ? price : 0);
  }, 0);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar />
      <Banner />

      <main
        id="auctions"
        className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-8 lg:px-8"
      >
        <section className="min-w-0">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Discover something special
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Explore live auctions
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              From rare collectibles to remarkable finds, explore the items that
              make every bid worth it.
            </p>
          </div>

          <Carts
            handleBidNow={handleBidNow}
            favouriteIds={bid.map((item) => item.id)}
          />
        </section>

        <aside className="h-fit min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:sticky lg:top-6">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-rose-50 text-rose-600">
                <CiHeart size={27} />
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Your favorites
                </h2>
                <p className="text-sm text-slate-500">
                  Items you want to keep an eye on
                </p>
              </div>
            </div>

            <span className="badge badge-lg border-0 bg-rose-50 text-rose-600">
              {bid.length}
            </span>
          </div>

          <div className="my-5 border-t border-slate-100" />

          {bid.length === 0 ? (
            <div className="rounded-xl bg-slate-50 px-5 py-8 text-center">
              <CiHeart className="mx-auto mb-3 text-slate-400" size={42} />

              <h3 className="font-semibold text-slate-800">
                Your list is waiting
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Found something you like? Select the heart beside an auction
                item and it will appear here.
              </p>

              <a
                href="#auctions"
                className="btn btn-sm mt-5 rounded-full border-0 bg-blue-600 text-white hover:bg-blue-700"
              >
                Browse auctions
              </a>
            </div>
          ) : (
            <div className="space-y-3">
              {bid.map((item) => (
                <article
                  key={item.id}
                  className="flex gap-3 rounded-xl border border-slate-100 p-3 transition hover:border-blue-100 hover:bg-slate-50"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-16 w-16 shrink-0 rounded-lg bg-slate-100 object-cover"
                  />

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="line-clamp-2 text-sm font-semibold text-slate-800">
                        {item.title}
                      </h3>

                      <button
                        type="button"
                        onClick={() => handleRmvBid(item.id)}
                        aria-label={`Remove ${item.title} from favorites`}
                        className="shrink-0 rounded-md p-1.5 text-slate-400 transition hover:bg-rose-50 hover:text-rose-600"
                      >
                        <FaRegTrashAlt size={14} />
                      </button>
                    </div>

                    <p className="mt-2 font-bold text-blue-700">
                      {item.currentBidPrice}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {item.totalBids ?? item.bidsCount ?? 0} bids placed
                    </p>
                  </div>
                </article>
              ))}
            </div>
          )}

          <div className="my-5 border-t border-slate-100" />

          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Combined current bids
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Across your favorite items
              </p>
            </div>

            <p className="text-xl font-bold text-slate-900">
              $
              {totalAmount.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
        </aside>
      </main>

      <Footer />
    </div>
  );
}

export default App;
