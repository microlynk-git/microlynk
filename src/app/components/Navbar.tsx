'use client'
import { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { ChevronDown, ChevronRight } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";
import LogoImage from "@/assets/ML Logo/ML Logo - JPG.jpg"
import { servicesData } from "@/app/data/services";

import { motion, Variants, AnimatePresence } from "framer-motion";

const textVariants: Variants = {
  initial: { x: 0 },
  hover: { x: -3 },
}

const arrowVariants: Variants = {
  initial: { x: 0 },
  hover: { x: 3 },
}

const buttonVariants: Variants = {
  initial: {},
  hover: {
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    }
  }
}

const navItems = [
  { 
    label: "What We Do", 
    href: "#services",
    children: servicesData.map(service => ({
      label: service.title,
      href: `/service/${service.slug}`
    }))
  },
  { label: "Our Approach", href: "/our-approach" },
  { label: "Projects", href: "/case-study" },
  { label:"Industries", href:"/industries"},
  { label: "About Us", href: "/about-us" },
  { label: "Careers", href: "/careers" },
];

const Navbar = () => {
  const router = useRouter();
  // const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setActiveDropdown(null);

    if (href.startsWith("/")) {
      router.push(href);
      return;
    }

    // Check if we're currently on the homepage
    const isOnHomepage = window.location.pathname === "/";

    if (isOnHomepage) {
      // If already on homepage, just scroll to the section
      if (href === "#home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      // If not on homepage, router.push to homepage first, then scroll
      router.push("/");

      // Wait for navigation to complete, then scroll to the section
      setTimeout(() => {
        if (href === "#home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, 100);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMobileExpand = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? null : label);
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        "bg-white"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-[30px] flex items-center justify-between h-[65px]">
        {/* Logo */}
        <div className="flex-shrink-0 tracking-tight">
          <Link href="/" className="flex items-center no-underline">
            <Image src={LogoImage} alt="Microlynk Logo" width={160} height={160} />
            {/* <span className="text-2xl font-regular font-bold text-black">Microlynk</span> */}
          </Link>
        </div>

        <div className="flex items-center gap-12 ml-auto">
          {/* Desktop Navigation (shown on large screens and above) */}
          <div ref={navRef} className="hidden lg:flex items-center gap-8 ml-5 pl-5">
            {navItems.map((item, index) => (
              <div 
                key={index} 
                className="relative group font-regular text-black"
              >
                <a
                  href={item.href}
                  className="transition-colors font-medium relative py-2 font-regular text-black hover:text-backgroundLightBlue flex items-center cursor-pointer"
                  onClick={(e) => {
                    if (item.children) {
                      e.preventDefault();
                      setActiveDropdown(activeDropdown === item.label ? null : item.label);
                    } else {
                      handleScroll(e, item.href);
                    }
                  }}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className={`ml-1 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} size={16} />
                  )}
                </a>
                
                {/* Dropdown Menu */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full pt-2 w-64"
                      >
                        <div className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden">
                          {item.children.map((child, childIndex) => (
                            <Link
                              key={childIndex}
                              href={child.href}
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-backgroundLightBlue transition-colors font-regular"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:block">
            <motion.button
              onClick={() => router.push("/contact-us")}
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              className="flex items-center bg-backgroundLightBlue text-white font-regular py-2 px-4 hover:bg-opacity-90"
            >
              <motion.span variants={textVariants}>
                Contact Us
              </motion.span>
              <motion.span variants={arrowVariants}>
                <ChevronRight className="ml-2" size={16} />
              </motion.span>
            </motion.button>
          </div>

          {/* Mobile/Tablet Menu Toggle (shown below large screens) */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md transition-colors ${
                "text-black hover:bg-gray-100"
              }`}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with transition */}
      <div
        id="mobile-menu"
        aria-hidden={!isMenuOpen}
        className={`lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-md overflow-hidden transform transition-all duration-300 ease-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0 max-h-[80vh] overflow-y-auto"
            : "opacity-0 -translate-y-2 max-h-0 pointer-events-none"
        }`}
      >
        <div className="p-6 flex flex-col gap-4">
          {navItems.map((item, index) => (
            <div key={index} className="border-b border-gray-100 last:border-b-0">
              <div 
                className="flex items-center justify-between py-3 cursor-pointer"
                onClick={(e) => {
                  if (item.children) {
                    toggleMobileExpand(item.label);
                  } else {
                    // @ts-ignore
                    handleScroll(e, item.href);
                  }
                }}
              >
                <span className="text-gray-600 hover:text-backgroundLightBlue">{item.label}</span>
                {item.children && (
                  <ChevronDown 
                    size={16} 
                    className={`text-gray-500 transition-transform duration-200 ${mobileExpanded === item.label ? 'rotate-180' : ''}`}
                  />
                )}
              </div>
              
              {/* Mobile Submenu */}
              {item.children && mobileExpanded === item.label && (
                <div className="pl-4 pb-3 flex flex-col gap-2 bg-gray-50 rounded-md mb-2">
                  {item.children.map((child, childIndex) => (
                    <Link
                      key={childIndex}
                      href={child.href}
                      className="text-sm text-gray-500 hover:text-backgroundLightBlue py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="p-6 border-t border-gray-100">
          <motion.button
            onClick={() => router.push("/contact-us")}
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            className="w-full flex items-center justify-center bg-backgroundLightBlue text-white font-regular py-3 px-4 rounded-md hover:bg-opacity-90 transition-all"
          >
            <motion.span variants={textVariants}>
              Contact Us
            </motion.span>
            <motion.span variants={arrowVariants}>
              <ChevronRight className="ml-2" size={16} />
            </motion.span>
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
