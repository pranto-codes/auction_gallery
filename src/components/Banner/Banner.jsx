import React from "react";

const Banner = () => {
  return (
    <section
      className="relative isolate flex min-h-[440px] items-center overflow-hidden bg-slate-900 bg-cover bg-center sm:min-h-[500px] lg:min-h-[570px]"
      style={{
        backgroundImage: "url(https://i.postimg.cc/2jJxdy0W/Banner-min.jpg)",
      }}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/20" />

      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="max-w-2xl text-white">
          <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200 backdrop-blur-sm sm:text-sm">
            Discover. Bid. Collect.
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            Find something
            <span className="block text-amber-400">worth bidding for.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
            Explore unique collectibles, timeless treasures, and extraordinary
            finds. Your next favorite piece could be just one bid away.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#auctions"
              className="btn min-h-12 rounded-full border-0 bg-amber-400 px-7 text-base font-bold text-slate-950 shadow-lg shadow-amber-950/20 hover:bg-amber-300"
            >
              Explore auctions
            </a>

            <a
              href="#how-it-works"
              className="btn min-h-12 rounded-full border border-white/40 bg-white/10 px-7 text-base text-white backdrop-blur-sm hover:bg-white/20"
            >
              How it works
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm text-slate-200">
            <div>
              <p className="text-xl font-bold text-white">Unique finds</p>
              <p className="mt-1">Items worth discovering</p>
            </div>

            <div>
              <p className="text-xl font-bold text-white">Your next bid</p>
              <p className="mt-1">Your next great story</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
