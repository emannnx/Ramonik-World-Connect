import { Link } from "react-router-dom";
import { Plane, Phone, Mail, Printer, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-travel-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-white p-2 rounded-lg">
                <Plane className="h-6 w-6 text-travel-blue" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Ramonik Travel & Tours</h3>
                <p className="text-sm opacity-90">We connect you to the world</p>
              </div>
            </div>
            <p className="text-sm opacity-90">
              Your trusted partner for global travel experiences. We provide comprehensive travel services to make your journey memorable.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm opacity-90 hover:opacity-100 transition-opacity">About Us</Link></li>
              <li><Link to="/services" className="text-sm opacity-90 hover:opacity-100 transition-opacity">Services</Link></li>
              <li><Link to="/destinations" className="text-sm opacity-90 hover:opacity-100 transition-opacity">Destinations</Link></li>
              <li><Link to="/gallery" className="text-sm opacity-90 hover:opacity-100 transition-opacity">Gallery</Link></li>
              <li><Link to="/reviews" className="text-sm opacity-90 hover:opacity-100 transition-opacity">Reviews</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Flight Booking</li>
              <li>Hotel Reservations</li>
              <li>Car Rental</li>
              <li>Visa Assistance</li>
              <li>Cruise Reservations</li>
              <li>Tours & Vacations</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm opacity-90">White Marsh, Maryland, USA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm opacity-90">667-770-0580</span>
              </div>
              <div className="flex items-center space-x-2">
                <Printer className="h-4 w-4" />
                <span className="text-sm opacity-90">667-677-6691 (Fax)</span>
              </div>
              <div className="flex items-start space-x-2">
                <Mail className="h-4 w-4 mt-0.5" />
                <div className="text-sm opacity-90">
                  <div>info@ramoniktravels.com</div>
                  <div>ramonikcollections@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-90">
            © 2024 Ramonik Travel & Tours. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;