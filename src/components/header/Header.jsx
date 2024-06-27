import React, { useState } from "react";
import Logo from "../../logo.png";
import {
  FaToggleOff,
  FaToggleOn,
  FaBars,
  FaTimes,
  FaPhoneAlt,
} from "react-icons/fa";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../features/ThemeSlice";
import { HashLink } from "react-router-hash-link";

function Header() {
  const navItems = [
    { name: "About", link: "/about", status: true },

    {
      name: "Services",
      link: "/services",
      status: true,
    },
    { name: "Portfolio", link: "/#testinomial", status: true },
    {
      name: "Resources",
      link: "/resources",
      status: true,
      isDropdown: true,
      dropdownItems: [
        { name: "Blog", link: "/blog" },
        { name: "Case Studies", link: "/case-studies" },
        { name: "Ebooks", link: "/ebooks" },
        { name: "Webinars", link: "/webinars" },
        { name: "Whitepapers", link: "/whitepapers" },
      ],
    },
    { name: "Blog", link: "/blog", status: true },

    { name: "Contact", link: "/#contact", status: true },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode);

  const HandleTheme = () => {
    if (darkMode) {
      document.querySelector("html").classList.add("light");
      document.querySelector("html").classList.remove("dark");
      document.querySelector("body").style.backgroundColor = "#f3f4f6";
    } else {
      document.querySelector("html").classList.add("dark");
      document.querySelector("html").classList.remove("light");
      document.querySelector("body").style.backgroundColor = "#121212";
    }
    dispatch(toggleTheme());
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <header className="bg-[#f3f4f6] dark:bg-[#14081e] sticky z-50 top-0">
      <div className="px-[5%] flex items-center justify-between">
        <div>
          <img src={Logo} alt="Logo" className="h-20 w-44" />
        </div>
        <nav className="flex lg:flex-row-reverse items-center font-Popins">
          <ul className="flex items-center justify-center">
            <li
              className="inline-block md:px-6 py-2 text-2xl text-[#4c4c4c] dark:text-slate-400 rounded-full cursor-pointer mr-4"
              onClick={HandleTheme}
            >
              {darkMode ? <FaToggleOn /> : <FaToggleOff />}
            </li>
          </ul>
          <button
            className="lg:hidden text-2xl text-[#4c4c4c] dark:text-slate-400"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <ul className="hidden lg:flex ml-auto items-center">
            {navItems.map(
              (item) =>
                item.status && (
                  <li
                    key={item.name}
                    className="relative inline-block px-3 duration-500 hover:text-[#FAD02C] dark:hover:text-[#fad02c] text-[#4c4c4c] dark:text-slate-400 rounded-full"
                    onMouseEnter={item.isDropdown ? handleDropdownEnter : null}
                    onMouseLeave={item.isDropdown ? handleDropdownLeave : null}
                  >
                    {item.isDropdown ? (
                      <div className="flex items-center cursor-pointer text-lg">
                        {item.name}
                        {isDropdownOpen ? (
                          <RiArrowDropUpLine className=" text-3xl" />
                        ) : (
                          <RiArrowDropDownLine className=" text-3xl" />
                        )}
                      </div>
                    ) : (
                      <a className=" text-lg">{item.name}</a>
                    )}
                    {isDropdownOpen && item.isDropdown && (
                      <div className="relative">
                        <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                          <div className="absolute left-10 -top-2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-white dark:border-b-gray-800"></div>
                          <ul>
                            {item.dropdownItems.map((dropdownItem) => (
                              <li
                                key={dropdownItem.name}
                                className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 text-black hover:text-[#fad02c] dark:text-white"
                              >
                                <a>{dropdownItem.name}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </li>
                )
            )}
          </ul>
        </nav>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden">
          <ul className="flex flex-col items-center py-4">
            {navItems.map(
              (item) =>
                item.status && (
                  <li
                    key={item.name}
                    className="w-full text-center py-2 duration-500 hover:bg-[#FAD02C] text-[#4c4c4c] dark:text-slate-400"
                    onMouseEnter={item.isDropdown ? handleDropdownEnter : null}
                    onMouseLeave={item.isDropdown ? handleDropdownLeave : null}
                  >
                    {item.isDropdown ? (
                      <div className="flex items-center justify-center cursor-pointer">
                        {item.name}{" "}
                        {isDropdownOpen ? (
                          <RiArrowDropUpLine className="ml-1" />
                        ) : (
                          <RiArrowDropDownLine className="ml-1" />
                        )}
                      </div>
                    ) : (
                      <a className="block w-full">{item.name}</a>
                    )}
                    {isDropdownOpen && item.isDropdown && (
                      <div className="relative">
                        <div className="relative mt-2 p-2 w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                          <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-white dark:border-b-gray-800"></div>
                          <ul>
                            {item.dropdownItems.map((dropdownItem) => (
                              <li
                                key={dropdownItem.name}
                                className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                              >
                                <a>{dropdownItem.name}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </li>
                )
            )}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
