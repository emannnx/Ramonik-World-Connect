import { Link } from "react-router-dom";
import { Plane, Phone, Mail, Printer, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const sectionVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Footer = () => {
  return (
    <motion.footer
      className="bg-travel-blue text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {/* Company Info */}
          <motion.div variants={sectionVariant} className="space-y-4">
            <div className="flex items-center space-x-2">
              <motion.div
                className="bg-white p-2 rounded-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Plane className="h-6 w-6 text-travel-blue" />
              </motion.div>
              <div>
                <h3 className="text-lg font-bold">Ramonik Travels & Tours</h3>
                <p className="text-sm opacity-90">We connect you to the world</p>
              </div>
            </div>
            <p className="text-sm opacity-90">
              Your trusted partner for global travel experiences. We provide comprehensive travel services to make your journey memorable.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={sectionVariant}>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About Us", "Services", "Destinations", "Gallery", "Reviews"].map((link, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link to={`/${link.toLowerCase().replace(" ", "")}`} className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                    {link}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={sectionVariant}>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm opacity-90">
              {["Flight Booking", "Hotel Reservations", "Car Rental", "Visa Assistance", "Cruise Reservations", "Tours & Vacations"].map((service, idx) => (
                <motion.li key={idx} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={sectionVariant}>
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
                <Phone className="h-4 w-4" />
                <span className="text-sm opacity-90">Instagram: Ramonik.Travels</span>
              </div>
                    <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm opacity-90">Facebook: Ramonik Travels</span>
              </div>
                    <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm opacity-90">TikTok: RamonikTravels</span>
              </div>
                    <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm opacity-90">X: RamonikTravels</span>
              </div>
              <div className="flex items-center space-x-2">
                <Printer className="h-4 w-4" />
                <span className="text-sm opacity-90">667-677-6691 (Fax)</span>
              </div>
              <div className="flex items-start space-x-2">
                <Mail className="h-4 w-4 mt-0.5" />
                <div className="text-sm opacity-90">
                  <div>ramoniktravels@gmail.com</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-white/20 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <p className="text-sm opacity-90">
            © 2025 Ramonik Travel & Tours. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
