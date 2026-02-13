import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";

import logoImage from "../assets/Frame 9.png";
import Button from "./ui/Button";
import { navbarLinks } from "../Data";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="relative">
      <nav className="container mx-auto px-6 py-8 flex justify-between items-center gap-5 w-full">
        {/* Logo */}
        <div className="image">
          <Link to="/" onClick={closeMenu}>
            <img src={logoImage} alt="logo" className="w-40" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-xl cursor-pointer"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <HiX /> : <FaBars />}
        </button>

        {/* Desktop Navbar Links */}
        <div className="links hidden md:block">
          <ul className="flex justify-center items-center gap-[40px]">
            {navbarLinks.map((navLink) => (
              <li key={navLink.id} className="whitespace-nowrap">
                <NavLink
                  to={navLink.href}
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold underline"
                      : "hover:underline"
                  }
                >
                  {navLink.text}
                </NavLink>
              </li>
            ))}

            {/* Button */}
            <Button
              text="Request a quote"
              className="border border-black hover:bg-black hover:text-white duration-300"
            />
          </ul>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-[100%] left-0 w-full bg-white border-t border-black py-4 md:hidden z-50">
            <ul className="px-8 space-y-4">
              {navbarLinks.map((navLink) => (
                <li key={navLink.id} className="whitespace-nowrap">
                  <NavLink
                    to={navLink.href}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      isActive
                        ? "font-semibold underline"
                        : "hover:underline"
                    }
                  >
                    {navLink.text}
                  </NavLink>
                </li>
              ))}

              <Button
                text="Request  quote"
                className="border border-black hover:bg-black hover:text-white duration-300"
              />
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
