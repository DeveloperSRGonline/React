import { ShoppingCart, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-[#403d39] shadow-md sticky top-0 z-50 mb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-gray-800">
            <NavLink className="text-[#f3f3f3]" href="/">
              🛍️ ShopMate
            </NavLink>
          </div>

          <div className="hidden md:flex space-x-6 items-center text-xl font-medium">
            <NavLink
              to="/"
              className="text-[#f3f3f3] hover:text-[#55bbfa] transition"
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className="text-[#f3f3f3] hover:text-[#55bbfa] transition"
            >
              Shop
            </NavLink>
            <NavLink
              to="/login"
              className="text-[#f3f3f3] hover:text-[#55bbfa] transition"
            >
              Login
            </NavLink>
            {/* <NavLink to="/contact" className="text-[#f3f3f3] hover:text-blue-600 transition">Contact</NavLink> */}
          </div>

          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search products..."
              className="hidden sm:block px-3 py-1.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <div className="relative">
              <ShoppingCart className="w-6 h-6 text-[#55bbfa] " />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                2
              </span>
            </div>

          </div>
        </div>
      </div>

      
    </nav>
  );
};

export default Nav;
