"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Link as ScrollLink } from "react-scroll"; // Import ScrollLink for smooth scrolling
import { AnimatePresence } from "framer-motion";

// Utility classes for layout
export const center = "flex items-center justify-center";
export const spaceBetween = "flex items-center justify-between";

function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const goToHome = () => {
    router.push("/"); // Navigate to the home page
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle mobile menu
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className={`${spaceBetween} fixed z-20 h-16 w-[100vw] border-b border-[#cad2c5] bg-[#2f3e46]/70 px-5 py-2 sm:w-full`}
    >
      {/* Portfolio Home Button */}
      <motion.a
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="cursor-pointer text-xl font-semibold text-mediumLight sm:text-4xl"
        onClick={goToHome}
      >
        Portfolio
      </motion.a>

      {/* Desktop Navigation Menu */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="hidden items-center gap-10 sm:flex"
      >
        {/* Scrollable Links */}
        <ScrollLink
          to="home"
          smooth={true}
          duration={1000}
          className="hoverLink cursor-pointer text-xl font-semibold"
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="resume"
          smooth={true}
          duration={1000}
          className="hoverLink cursor-pointer text-xl font-semibold"
        >
          Resume
        </ScrollLink>
        <ScrollLink
          to="service"
          smooth={true}
          duration={1000}
          className="hoverLink cursor-pointer text-xl font-semibold"
        >
          Service
        </ScrollLink>
        <ScrollLink
          to="project"
          smooth={true}
          duration={1000}
          className="hoverLink cursor-pointer text-xl font-semibold"
        >
          Project
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={1000}
          className="hoverLink cursor-pointer text-xl font-semibold"
        >
          Contact
        </ScrollLink>
      </motion.nav>

      {/* Mobile Menu Toggle */}
      <div className="flex items-center sm:hidden">
        <button
          onClick={toggleMenu}
          className="rounded-md p-2 text-2xl hover:bg-[#2f3e46]"
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation Menu (only visible when menu is open) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="fixed right-0 top-16 -z-20 flex w-[40%] flex-col items-end gap-5 bg-[#52796f41] p-5 backdrop-blur-10"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="hoverLink cursor-pointer text-xl font-semibold"
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="resume"
              smooth={true}
              duration={500}
              className="hoverLink cursor-pointer text-xl font-semibold"
            >
              Resume
            </ScrollLink>
            <ScrollLink
              to="service"
              smooth={true}
              duration={500}
              className="hoverLink cursor-pointer text-xl font-semibold"
            >
              Service
            </ScrollLink>
            {/* Link to projects page */}
            <Link href="/project" className="hoverLink text-xl font-semibold">
              Projects
            </Link>
            {/* Link to contact page */}
            <Link href="/contact" className="hoverLink text-xl font-semibold">
              Contact
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
