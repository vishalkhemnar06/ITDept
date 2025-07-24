import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaBars, FaTimes, FaUserLock, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// 1. IMPORT YOUR LOGO
import myLogo from '../assets/logo.jpg'; // Make sure the path is correct

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', path: '/' },
    { 
      title: 'Academics', 
      path: '/academics',
      subLinks: [
        { title: 'Courses', path: '/courses' },
        { title: 'Syllabus', path: '/syllabus' },
        { title: 'Academic Calendar', path: '/calendar' }
      ]
    },
    { title: 'Faculty', path: '/faculty' },
    { title: 'Labs', path: '/labs' },
    { title: 'Students', path: '/students' },
    { title: 'Events', path: '/events' },
    { title: 'Placements', path: '/placements' },
    { title: 'Alumni', path: '/alumni' },
    { title: 'Contact', path: '/contact' },

  ];

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-1' : 'bg-white shadow-md py-2'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="flex items-center space-x-3">
              {/* 2. REPLACE SVG WITH YOUR IMG TAG */}
              <img
                src={myLogo}
                alt="IT Department Logo"
                className="h-12 w-12 rounded-full object-cover border-2 border-blue-500 shadow-sm"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                IT Department
              </span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <div key={link.title} className="relative group">
                  {link.subLinks ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(index)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1 transition-all duration-300 ${activeDropdown === index ? 'text-blue-700 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'}`}
                      >
                        {link.title}
                        {activeDropdown === index ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                      </button>
                      <AnimatePresence>
                        {activeDropdown === index && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 mt-1 w-56 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                          >
                            <div className="py-1">
                              {link.subLinks.map((subLink) => (
                                <NavLink
                                  key={subLink.title}
                                  to={subLink.path}
                                  onClick={() => setActiveDropdown(null)}
                                  className={({ isActive }) =>
                                    `block px-4 py-2 text-sm ${isActive ? 'bg-blue-100 text-blue-800' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'}`
                                  }
                                >
                                  {subLink.title}
                                </NavLink>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${isActive ? 'text-blue-700 bg-blue-50 font-semibold' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'}`
                      }
                    >
                      {link.title}
                    </NavLink>
                  )}
                </div>
              ))}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/login" 
                  className="ml-4 px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <FaUserLock /> Login
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FaTimes size={24} className="text-blue-600" />
              ) : (
                <FaBars size={24} />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
            id="mobile-menu"
          >
            <div className="px-2 pt-2 pb-4 space-y-1 bg-white shadow-inner">
              {navLinks.map((link) => (
                <div key={link.title}>
                  {link.subLinks ? (
                    <div className="mb-1">
                      <button
                        onClick={() => toggleDropdown(navLinks.indexOf(link))}
                        className={`w-full flex justify-between items-center px-3 py-3 rounded-lg text-base font-medium ${activeDropdown === navLinks.indexOf(link) ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-blue-50'}`}
                      >
                        {link.title}
                        {activeDropdown === navLinks.indexOf(link) ? (
                          <FaChevronUp size={12} />
                        ) : (
                          <FaChevronDown size={12} />
                        )}
                      </button>
                      <AnimatePresence>
                        {activeDropdown === navLinks.indexOf(link) && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4"
                          >
                            {link.subLinks.map((subLink) => (
                              <NavLink
                                key={subLink.title}
                                to={subLink.path}
                                onClick={() => {
                                  setIsOpen(false);
                                  setActiveDropdown(null);
                                }}
                                className={({ isActive }) =>
                                  `block px-3 py-2 rounded-lg text-sm ${isActive ? 'bg-blue-100 text-blue-800' : 'text-gray-700 hover:bg-blue-50'}`
                                }
                              >
                                {subLink.title}
                              </NavLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <NavLink
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block px-3 py-3 rounded-lg text-base font-medium ${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-blue-50'}`
                      }
                    >
                      {link.title}
                    </NavLink>
                  )}
                </div>
              ))}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-2"
              >
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-4 py-3 rounded-lg text-base font-medium text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 flex items-center justify-center gap-3 shadow-md"
                >
                  <FaUserLock /> Login
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;