import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Plane, 
  Hotel, 
  Car, 
  Mountain, 
  Ship, 
  Building, 
  FileText, 
  CreditCard, 
  User, 
  Package,
  Clock,
  Shield,
  HeadphonesIcon, 
  Bed
} from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: "All Destinations Flight Booking",
      description: "Book flights to any destination worldwide with competitive prices and excellent service. We work with all major airlines to ensure you get the best deals and flight options.",
      features: ["Best price guarantee", "24/7 flight support", "Flexible booking options", "Group discounts available"]
    },
    {
      icon: Bed,
      title: "Hotel Reservations",
      description: "Find and book the perfect accommodation for your stay, from luxury resorts to budget-friendly options. Our extensive network ensures quality stays worldwide.",
      features: ["5-star to budget options", "Instant confirmation", "Free cancellation available", "Special rates for extended stays"]
    },
    {
      icon: Car,
      title: "Car Rental",
      description: "Rent a car for your travels with our trusted partners offering vehicles for every need and budget.",
      features: ["Economy to luxury vehicles", "Airport pickup/dropoff", "GPS navigation included", "Comprehensive insurance options"]
    },
    {
      icon: Mountain,
      title: "Tours & Vacations",
      description: "Discover curated tour packages and vacation experiences tailored to your preferences and interests.",
      features: ["Customized itineraries", "Expert local guides", "Small group sizes", "Cultural immersion experiences"]
    },
    {
      icon: Ship,
      title: "Cruise Reservation",
      description: "Experience the luxury of cruising with our exclusive cruise booking services covering all major cruise lines.",
      features: ["All major cruise lines", "Cabin upgrades available", "Onboard credit offers", "Shore excursion planning"]
    },
    {
      icon: Building,
      title: "Luxury Apartment Booking",
      description: "Book premium apartments and vacation rentals for extended stays and comfort with all the amenities of home.",
      features: ["Verified properties", "Full kitchen facilities", "Prime locations", "Weekly/monthly rates"]
    },
    {
      icon: FileText,
      title: "Visa Assistance",
      description: "Get expert help with visa applications and documentation for hassle-free travel to any destination.",
      features: ["Document preparation", "Application tracking", "Expert consultation", "Fast-track processing"]
    },
    {
      icon: User,
      title: "National ID Card",
      description: "Assistance with national ID card applications and renewals with proper documentation guidance.",
      features: ["Application assistance", "Document review", "Status tracking", "Renewal reminders"]
    },
    {
      icon: Package,
      title: "Shipping Worldwide",
      description: "Reliable international shipping services for your packages and documents with tracking and insurance.",
      features: ["Door-to-door delivery", "Package tracking", "Insurance coverage", "Express shipping options"]
    }
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your travel needs"
    },
    {
      icon: Shield,
      title: "Secure Booking",
      description: "Safe and secure payment processing with full protection"
    },
    {
      icon: HeadphonesIcon,
      title: "Expert Advice",
      description: "Professional travel consultants with years of experience"
    }
  ];

  return (
    <div className="min-h-screen mt-[20%] sm:mt-[4%]">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-travel-blue to-travel-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Comprehensive travel solutions designed to make your journey seamless and unforgettable
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-travel-light-blue">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-travel-blue to-travel-blue p-3 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300 mb-2"
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="text-2xl font-bold text-travel-blue mb-3 group-hover:text-travel-Blue transition-colors duration-300"
                    >
                      {service.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="text-muted-foreground mb-4 leading-relaxed"
                    >
                      {service.description}
                    </motion.p>
                    <motion.ul
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                          <div className="w-2 h-2 bg-travel-red rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </motion.ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-travel-blue mb-4">Why Choose Our Services?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We go above and beyond to ensure your travel experience is exceptional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="bg-travel-light-blue p-4 rounded-full w-fit mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-travel-blue" />
                    </div>
                    <h3 className="text-xl font-semibold text-travel-blue mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Button 
  variant="hero" 
  size="lg" 
  className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white"
  onClick={() => window.open('https://wa.me/16677700580')}
>
  Get Started Today
</Button>

          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;