
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCart, Menu, X, LogIn } from "lucide-react";
import logo from "../assets/images/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Food Menu", path: "/food-menu" },
  ];

  const navLinkStyle = ({ isActive }) =>
    `text-[15px] font-semibold transition-all duration-300 ${
      isActive
        ? "text-green-600"
        : "text-gray-600 hover:text-green-600"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* Logo */}
        <Link to="/" className="flex shrink-0 items-center gap-2.5">
          <img
            src={logo}
            alt="CanteenPro Logo"
            className="h-11 w-11 object-contain"
          />

          <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Canteen
            <span className="bg-gradient-to-r from-green-500 to-emerald-700 bg-clip-text text-transparent">
              Pro.
            </span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={navLinkStyle}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">

          {/* Cart Button */}
          <Link
            to="/my-cart"
            className="group relative flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-gray-700 transition-all duration-300 hover:border-green-200 hover:bg-green-50 hover:text-green-600"
            aria-label="Shopping Cart"
          >
            <ShoppingCart size={21} />
          </Link>

          {/* Login Button */}
          <Link
            to="/login"
            className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-green-200/60 transition-all duration-300 hover:-translate-y-0.5 hover:from-green-700 hover:to-emerald-600 hover:shadow-xl hover:shadow-green-300/60 active:scale-95"
          >
            <LogIn size={18} />
            Login
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-700 transition hover:bg-green-50 hover:text-green-600 md:hidden"
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 md:hidden ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-2 px-5 py-5">

          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  isActive
                    ? "bg-green-50 text-green-600"
                    : "text-gray-600 hover:bg-green-50 hover:text-green-600"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <div className="flex gap-3 pt-3">

            <Link
              to="/my-cart"
              onClick={() => setIsOpen(false)}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 py-3 font-semibold text-gray-700 transition hover:border-green-300 hover:text-green-600"
            >
              <ShoppingCart size={19} />
              Cart
            </Link>

            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 py-3 font-semibold text-white shadow-md shadow-green-200 transition hover:from-green-700 hover:to-emerald-600"
            >
              <LogIn size={18} />
              Login
            </Link>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
