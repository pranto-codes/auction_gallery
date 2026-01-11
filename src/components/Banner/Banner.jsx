import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.postimg.cc/2jJxdy0W/Banner-min.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="">
          <div className="mr-270">
            <h1 className=" text-5xl font-bold">
              Bid on Unique Items from <br />
              Around the World
            </h1>
            <p className="mb-5">
              Discover rare collectibles, luxury goods, and vintage treasures in
              our curated auctions
            </p>
            <button className="btn rounded-3xl bg-white text-black">
              Explore Auctions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
