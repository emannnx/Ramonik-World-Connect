import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plane, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-travel-blue to-travel-blue p-2 rounded-lg">
              <Plane className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-travel-blue">Ramonik Travel</h1>
              <p className="text-xs text-muted-foreground">We connect you to the world</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-travel-blue ${
                  isActiveLink(item.path)
                    ? "text-travel-blue border-b-2 border-travel-blue pb-1"
                    : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="travel" size="sm">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transform transition-transform duration-300 ${
              isMenuOpen ? "rotate-90" : ""
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-travel-blue" />
            ) : (
              <Menu className="h-6 w-6 text-travel-blue" />
            )}
          </button>
        </div>
      </div>

      {/* Background Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-all duration-300 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold text-travel-blue">Menu</h2>
          <button onClick={() => setIsMenuOpen(false)}>
            <X className="h-6 w-6 text-travel-blue" />
          </button>
        </div>

        <nav className="flex flex-col space-y-3 p-4">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-travel-blue transform transition-all duration-300 ${
                isActiveLink(item.path) ? "text-travel-blue" : "text-foreground"
              }`}
              style={{
                transitionDelay: `${index * 50}ms`,
                transform: isMenuOpen ? "translateX(0)" : "translateX(20px)",
                opacity: isMenuOpen ? 1 : 0,
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Button
            variant="travel"
            size="sm"
            className="w-fit mt-4 transform transition-all duration-300"
            style={{
              transitionDelay: `${navItems.length * 50}ms`,
              transform: isMenuOpen ? "translateX(0)" : "translateX(20px)",
              opacity: isMenuOpen ? 1 : 0,
            }}
          >
            Book Now
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
