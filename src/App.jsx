import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Carts from "./components/Carts/Carts";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { CiHeart } from "react-icons/ci";
import { FaSkullCrossbones } from "react-icons/fa6";

function App() {
  const [bid, setBid] = useState([]);

  const handleBidNow = (cart) => {
    if (!bid.find((b) => b.id === cart.id)) {
      setBid([...bid, cart]);
    }
  };

  const handleRmvBid = (id) => {
    setBid(bid.filter((item) => item.id !== id));
  };

  return (
    <>
      <Navbar />
      <Banner />

      <div className=" bg-cyan-800 main_container flex">
        <div className="left_container w-[70%]">
          <Carts handleBidNow={handleBidNow} />
        </div>

        <div className="right_container w-[30%]">
          <div className="card-body justify-center items-center">
            <h2 className="card-title text-blue flex items-center gap-2">
              <CiHeart size={25} />
              Favourite Items
            </h2>

            <div className="divider"></div>

            {bid.length === 0 ? (
              <>
                <h3>No favorites yet</h3>
                <p>
                  Click the heart icon on any item to add it to your favorites
                </p>
              </>
            ) : (
              <div className="border-2 border-black gap-1 w-full">
                {bid.map((item) => (
                  <div
                    key={item.id}
                    className="flex p-2 m-2 shadow bg-cyan-900 rounded-lg items-center"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-14 h-14 object-cover rounded"
                    />
                    <div className="ml-3 flex-1">
                      <div className="flex gap-3 items-center justify-between">
                        <p className="text-white font-semibold">{item.title}</p>
                        <button
                          onClick={() => handleRmvBid(item.id)}
                          className="hover:scale-110 transition-transform"
                        >
                          <FaSkullCrossbones color="black" size={20} />
                        </button>
                      </div>
                      <div className="flex gap-4 text-gray-200 text-sm">
                        <p>{item.currentBidPrice}</p>
                        <p>Bids: {item.bidsCount}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="divider"></div>

            <div className="flex gap-10 justify-between text-white font-semibold">
              <h3>Total bids Amount</h3>
              <p>$</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
