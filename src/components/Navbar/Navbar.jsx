import React from "react";
import { HiChevronDown } from "react-icons/hi"; // for drow down arrows

const Navbar = () => {
  return (
    <nav className="bg-light-primary dark:bg-dark-primary text-light-background dark:text-dark-text px-4 py-2">
      <div className="container mx-auto flex items-center justify-between">
        {/* Main Menu */}
        <ul className="flex space-x-4 z-10 items-center">
          <li>
            <a href="/" className="hover:bg-light-accent p-3 rounded-md dark:hover:bg-dark-accent duration-100">
              Home
            </a>
          </li>
          <li>
            <a href="/about-us" className="hover:bg-light-accent p-3 rounded-md dark:hover:text-dark-accent duration-100">
              About Us
            </a>
          </li>
          <li className="group relative">
            <a href="/resources" className="hover:bg-light-accent p-3 rounded-md flex items-center dark:hover:text-dark-accent duration-100">
              Resources <HiChevronDown />
            </a>
            {/* Dropdown Menu - Resources */}
            <ul className="absolute hidden group-hover:block bg-light-surface dark:bg-dark-surface text-md shadow-lg rounded text-light-text">
              <li>
                <a
                  href="/resources/nevada-veterans"
                  className="block px-4 py-2 hover:bg-light-secondary dark:hover:bg-dark-secondary"
                >
                  Nevada Veterans Foundation
                </a>
              </li>
              <li>
                <a
                  href="/resources/financial-info"
                  className="block px-4 py-2 hover:bg-light-secondary dark:hover:bg-dark-secondary"
                >
                  Financial Information
                </a>
              </li>
              <li>
                <a
                  href="/resources/southern-nv-fisher"
                  className="block px-4 py-2 hover:bg-light-secondary dark:hover:bg-dark-secondary"
                >
                  Southern NV Fisher House
                </a>
              </li>
              <li>
                <a
                  href="/resources/events"
                  className="block px-4 py-2 hover:bg-light-secondary dark:hover:bg-dark-secondary"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="/resources/news"
                  className="block px-4 py-2 hover:bg-light-secondary dark:hover:bg-dark-secondary"
                >
                  News
                </a>
              </li>
              <li>
                <a
                  href="/resources/associations"
                  className="block px-4 py-2 hover:bg-light-secondary dark:hover:bg-dark-secondary"
                >
                  Associations
                </a>
              </li>
            </ul>
          </li>
          <li className="group relative">
            <a href="/gallery" className="hover:bg-light-accent p-3 rounded-md flex items-center dark:hover:text-dark-accent duration-100">
              Gallery <HiChevronDown />
            </a>
            {/* Dropdown Menu - Gallery */}
            <ul className="absolute hidden group-hover:block bg-light-surface dark:bg-dark-surface text-md shadow-lg rounded text-light-text">
              <li>
                <a
                  href="/gallery/photos"
                  className="block px-4 py-2 hover:bg-light-secondary dark:hover:bg-dark-secondary"
                >
                  Photos
                </a>
              </li>
              <li>
                <a
                  href="/gallery/videos"
                  className="block px-4 py-2 hover:bg-light-secondary dark:hover:bg-dark-secondary"
                >
                  Videos
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/contact" className="hover:bg-light-accent p-3 rounded-md dark:hover:text-dark-accent duration-100">
              Contact
            </a>
          </li>
        </ul>

        {/* Donation Button */}
        <a
          href="/donation"
          className="bg-light-accent dark:bg-dark-accent duration-300
            text-white text-2xl 
            px-4 py-4 
            hover:rounded-lg
            hover:py-2 
            hover:px-2 
            hover:top-2 hover:right-2
            fixed top-0 right-0
            hover:bg-light-primary"
        >
          Donate
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
