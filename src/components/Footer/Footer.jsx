import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Auctions", href: "#auctions" },
    { label: "Categories", href: "#auctions" },
    { label: "How it works", href: "#how-it-works" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:py-16">
        <div>
          <a href="#" className="inline-block text-2xl tracking-tight">
            <span className="font-medium text-blue-400">Auction</span>
            <span className="font-extrabold text-amber-400">Gallery</span>
          </a>

          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
            Discover remarkable finds, explore unique collections, and enjoy the
            excitement of finding something that feels truly yours.
          </p>

          <p className="mt-4 text-sm font-semibold tracking-wide text-white">
            Discover. Bid. Own.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white">Explore</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition hover:text-amber-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white">Stay connected</h3>
          <p className="mt-4 text-sm leading-6 text-slate-400">
            Follow along for updates and inspiration from the world of auctions.
          </p>

          <div className="mt-5 flex gap-3">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-blue-600 hover:text-white"
            >
              <FaFacebookF size={16} />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-pink-600 hover:text-white"
            >
              <FaInstagram size={16} />
            </a>

            <a
              href="https://x.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-slate-700 hover:text-white"
            >
              <FaXTwitter size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-center text-xs text-slate-500 sm:px-8 md:flex-row md:text-left">
          <p>
            © {new Date().getFullYear()} AuctionGallery. All rights reserved.
          </p>

          <p>Made for people who love discovering unique things.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
