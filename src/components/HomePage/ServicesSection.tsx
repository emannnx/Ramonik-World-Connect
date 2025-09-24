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
  Bed
} from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: Plane,
      title: "All Destinations Flight Booking",
      description: "Book flights to any destination worldwide with competitive prices and excellent service."
    },
    {
      icon: Bed,
      title: "Hotel Reservations",
      description: "Find and book the perfect accommodation for your stay, from luxury resorts to budget-friendly options."
    },
    {
      icon: Car,
      title: "Car Rental",
      description: "Rent a car for your travels with our trusted partners offering vehicles for every need."
    },
    {
      icon: Mountain,
      title: "Tours & Vacations",
      description: "Discover curated tour packages and vacation experiences tailored to your preferences."
    },
    {
      icon: Ship,
      title: "Cruise Reservation",
      description: "Experience the luxury of cruising with our exclusive cruise booking services."
    },
    {
      icon: Building,
      title: "Luxury Apartment Booking",
      description: "Book premium apartments and vacation rentals for extended stays and comfort."
    },
    {
      icon: FileText,
      title: "Visa Assistance",
      description: "Get expert help with visa applications and documentation for hassle-free travel."
    },
    {
      icon: User,
      title: "National ID Card",
      description: "Assistance with national ID card applications and renewals."
    },
    {
      icon: Package,
      title: "Shipping Worldwide",
      description: "Reliable international shipping services for your packages and documents."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-travel-light-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-travel-blue mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive travel solutions designed to make your journey seamless and memorable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-r from-travel-blue to-travel-blue p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-travel-blue mb-3 group-hover:text-travel-red transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
        <Link to="/services"> 
          <Button variant="travel" size="lg" className="px-8 py-4">
            View All Services
          </Button>
        </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;