import React, { useState } from "react";
import { CiBellOn, CiMenuBurger, CiUser } from "react-icons/ci";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Auctions", href: "#auctions" },
    { label: "Categories", href: "#auctions" },
    { label: "How It Works", href: "#how-it-works" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#"
          className="shrink-0 text-2xl font-bold tracking-tight no-underline"
        >
          <span className="text-blue-600">Auction</span>
          <span className="text-amber-500">Gallery</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-gray-700 no-underline transition-colors duration-200 hover:bg-blue-50 hover:text-blue-700"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            aria-label="Notifications"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent text-gray-700 transition hover:bg-gray-100 hover:text-blue-600"
          >
            <CiBellOn size={25} />
          </button>

          <div className="dropdown dropdown-end hidden sm:block">
            <button
              type="button"
              tabIndex={0}
              aria-label="Open profile menu"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
            >
              <CiUser size={23} />
            </button>

            <ul
              tabIndex={0}
              className="menu dropdown-content z-50 mt-3 w-48 rounded-xl border border-gray-200 bg-white p-2 text-gray-800 shadow-lg"
            >
              <li>
                <a
                  href="#profile"
                  className="text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="#settings"
                  className="text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                >
                  Settings
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-800 transition hover:bg-blue-50 hover:text-blue-700 md:hidden"
          >
            {menuOpen ? <CiX size={25} /> : <CiMenuBurger size={25} />}
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-3 shadow-md md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm font-semibold text-gray-800 no-underline transition-colors hover:bg-blue-50 hover:text-blue-700"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#profile"
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm font-semibold text-gray-800 no-underline transition-colors hover:bg-blue-50 hover:text-blue-700 sm:hidden"
            >
              My Profile
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
