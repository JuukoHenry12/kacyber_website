import React, { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import logo from "../assets/logo-white.svg";
import logo2 from "../assets/logo.svg";
import ButtonLink from "../common/ButtonLink";

function Nav() {
  const [scroll, setScroll] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Change navbar background color on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#hero", children: "Home" },
    { href: "#aboutus", children: "About Us" },
    { href: "#products", children: "Products" },
    { href: "#partners", children: "Partner" },
    { href: "#contact", children: "Contact Us" },
  ];

  // Track active section using IntersectionObserver
  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    // Observe each section
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Dynamic link styles based on scroll state and active section
  const textLinkClasses = (href) =>
    scroll
      ? `hover:text-gray-600 active:text-gray-800 ${activeSection === href.slice(1)
        ? "border-b-2 border-green-600"
        : ""
      }`
      : `text-white hover:text-gray-300 active:text-gray-200 ${activeSection === href.slice(1)
        ? "border-b-2 border-green-400"
        : ""
      }`;

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          {/* Navbar Container */}
          <div
            className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
              scroll ? "bg-white shadow-md" : "bg-transparent"
            }`}
          >
            <div className="flex h-[14vh] items-center justify-center">
              {/* Center Container for Logo and Links */}
              <div className="flex items-center justify-center space-x-8">
                {/* Logo */}
                <ButtonLink
                  href="#"
                  children={
                    <img
                      src={scroll ? logo2 : logo}
                      alt="Kobodrop logo"
                      className="h-16"
                    />
                  }
                />

                {/* Navigation Links (Hidden on small screens) */}
                <div className="hidden sm:flex items-center space-x-8">
                  {navLinks.map((link, index) => (
                    <ButtonLink
                      key={index}
                      href={link.href}
                      children={link.children}
                      className={textLinkClasses(link.href)}
                    />
                  ))}
                </div>

                {/* Mobile Menu Button (Visible only on small screens) */}
                <Disclosure.Button
                  className={`sm:hidden rounded-md p-2 ${
                    scroll ? "text-black" : "text-white"
                  } hover:bg-gray-100 absolute right-4`}
                >
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Panel */}
          <Disclosure.Panel className="space-y-1 px-4 sm:hidden bg-white shadow-lg">
            {navLinks.map((link, index) => (
              <Disclosure.Button
                className={`block text-black hover:bg-gray-100 py-2 px-4 ${activeSection === link.href.slice(1) ? "bg-green-100" : ""
                  }`}
                as="a"
                href={link.href}
                key={index}
              >
                {link.children}
              </Disclosure.Button>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Nav;
