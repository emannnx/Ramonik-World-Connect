import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plane, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Destinations", path: "/destinations" },
    { name: "Gallery", path: "/gallery" },
    { name: "Reviews", path: "/reviews" },
    { name: "Contact", path: "/contact" },
  ];

  const isActiveLink = (path: string) => location.pathname === path;

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white ${
        scrolled ? "shadow-2xl" : "shadow-lg"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 py-4 bg-white">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <Link to="/" className="flex items-center space-x-2">
             <div className="flex items-center space-x-3">
  {/* Icon Background */}
  <div className="bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-600 p-3 rounded-2xl shadow-lg">
    <Plane className="h-7 w-7 text-white drop-shadow-md transform rotate-45" />
  </div>

  {/* Text Section */}
<div className="text">
  <h1 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-700 via-blue-600 to-sky-500 text-transparent bg-clip-text">
    Ramonik Travels & Tours
  </h1>
  <p className="text-sm text-gray-600 italic mt-1">
    We connect you to the world ✈️
  </p>
</div>


</div>

            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            className="hidden md:flex items-center space-x-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
            }}
          >
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.25 }}
              >
                <Link
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActiveLink(item.path)
                      ? "bg-travel-blue text-white shadow-md"
                      : "text-foreground hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* CTA Button */}
          <motion.div
            className="hidden md:flex items-center space-x-3"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.25, ease: "easeOut" }}
          >
            <Button
              variant="travel"
              size="sm"
              onClick={() => window.open("mailto:ramoniktravels@gmail.com")}
            >
              Book Now
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="h-6 w-6 text-travel-blue" />
            ) : (
              <Menu className="h-6 w-6 text-travel-blue" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isMenuOpen ? "0%" : "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40"
        >
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-semibold text-travel-blue">Menu</h2>
            <button onClick={() => setIsMenuOpen(false)}>
              <X className="h-6 w-6 text-travel-blue" />
            </button>
          </div>

          <nav className="flex flex-col space-y-3 p-4">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                <Link
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-base font-medium transition-all duration-300 ${
                    isActiveLink(item.path)
                      ? "bg-travel-blue text-white shadow-md"
                      : "text-foreground hover:bg-gray-100"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.2 }}
            >
              <Button
                variant="travel"
                size="sm"
                className="w-fit mt-4"
                onClick={() => window.open("mailto:ramoniktravels@gmail.com")}
              >
                Book Now
              </Button>
            </motion.div>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
