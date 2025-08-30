import { useState } from "react";
import { FaApple, FaSearch, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="   text-gray-700 py-2 sticky top-0 z-50 bg-[#f5f5f7] border-b border-gray-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
          
          {/* Left: Apple logo */}
          <li className=" list-none top-0 sticky text-m md:list-none cursor-pointer text-xl">
            <FaApple />
          </li>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-7 text-xl font-normal items-center">
            <li className="cursor-pointer hover:underline">Mac</li>
            <li className="cursor-pointer hover:underline">iPad</li>
            <li className="cursor-pointer hover:underline">iPhone</li>
            <li className="cursor-pointer hover:underline">Watch</li>
            <li className="cursor-pointer hover:underline">AirPods</li>
            <li className="cursor-pointer hover:underline">TV & Home</li>
            <li className="cursor-pointer hover:underline">Entertainment</li>
            <li className="cursor-pointer hover:underline">Accessories</li>
            <li className="cursor-pointer hover:underline">Support</li>
            <li className="cursor-pointer text-m">
              <FaSearch />
            </li>
            <li className="cursor-pointer text-m">
              <FaShoppingBag />
            </li>
          </ul>

          {/* Right: Mobile Icons */}
          <div className="flex items-center mr-5 gap-4 md:hidden">
            <FaSearch className="cursor-pointer" />
            <FaShoppingBag className="cursor-pointer" />
            <button
              className="text-m"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <ul className="md:hidden flex flex-col gap-4 p-4 text-sm border-t border-gray-300 bg-[#f5f5f7]">
            <li className="cursor-pointer hover:underline">Mac</li>
            <li className="cursor-pointer hover:underline">iPad</li>
            <li className="cursor-pointer hover:underline">iPhone</li>
            <li className="cursor-pointer hover:underline">Watch</li>
            <li className="cursor-pointer hover:underline">AirPods</li>
            <li className="cursor-pointer hover:underline">TV & Home</li>
            <li className="cursor-pointer hover:underline">Entertainment</li>
            <li className="cursor-pointer hover:underline">Accessories</li>
            <li className="cursor-pointer hover:underline">Support</li>
          </ul>
        )}
      </nav>

      {/* Offer Bar with smaller text on mobile */}
      <div>
        <p className="text-xs mr-8 md:text-sm font-normal text-center p-2 text-red-500">
          Get up to 12 months of No Cost EMI plus up to ₹8000.00 instant cashback on selected products with eligible cards.
          <a href="#" className="text-blue-500 hover:underline mx-5"> Shop</a>
        </p>
      </div>
    </>
  );
}

export default Navbar;