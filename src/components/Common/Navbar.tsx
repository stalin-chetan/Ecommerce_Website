import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { useState } from "react";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div>
          <Link to="/" className="text-2xl font-medium">
            Karkhna
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
            Men
          </Link>
          <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
            Women
          </Link>
          <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
            Topwear
          </Link>
          <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
            Bottomwear
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>

          {/* Cart Drawer Toggle */}
          <button onClick={toggleCartDrawer} className="relative hover:text-black">
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            <span className="absolute -top-1 right-0 bg-amber-700 text-white text-xs rounded-full px-2 py-0.5">
              3
            </span>
          </button>

          {/* Search */}
          <div className="overflow-hidden">
            <SearchBar />
          </div>

          {/* Mobile Menu Icon */}
          <button onClick={toggleNavDrawer} className="md:visible">
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>

      {/* Cart Drawer */}
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer}>
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Example Mobile Menu Items */}
        <div className="flex flex-col items-start space-y-4 px-6">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <Link to="#" className="text-gray-700 hover:text-black text-lg font-medium">
            Men
          </Link>
          <Link to="#" className="text-gray-700 hover:text-black text-lg font-medium">
            Women
          </Link>
          <Link to="#" className="text-gray-700 hover:text-black text-lg font-medium">
            Topwear
          </Link>
          <Link to="#" className="text-gray-700 hover:text-black text-lg font-medium">
            Bottomwear
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
