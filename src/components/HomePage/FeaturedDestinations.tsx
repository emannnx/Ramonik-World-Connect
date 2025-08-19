import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Star } from "lucide-react";
import parisImage from "@/assets/destinations/paris.jpg";
import dubaiImage from "@/assets/destinations/dubai.jpg";
import londonImage from "@/assets/destinations/london.jpg";
import capetownImage from "@/assets/destinations/capetown.jpg";
import { Link } from "react-router-dom";

const FeaturedDestinations = () => {
  const destinations = [
    {
      name: "Paris, France",
      image: parisImage,
      rating: 4.9,
      description: "The City of Light awaits with its iconic landmarks and romantic atmosphere."
    },
    {
      name: "Dubai, UAE",
      image: dubaiImage,
      rating: 4.8,
      description: "Experience luxury and modern marvels in this desert oasis."
    },
    {
      name: "London, England",
      image: londonImage,
      rating: 4.7,
      description: "Discover history, culture, and royal heritage in Britain's capital."
    },
    {
      name: "Cape Town, South Africa",
      image: capetownImage,
      rating: 4.9,
      description: "Stunning landscapes and vibrant culture at the tip of Africa."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-travel-blue mb-4">
            Featured Destinations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our most popular destinations and create memories that last a lifetime
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {destinations.map((destination, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <div 
                  className="h-48 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{ 
                    backgroundImage: `url(${destination.image})`,
                    backgroundSize: 'cover'
                  }}
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">{destination.rating}</span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="h-4 w-4 text-travel-red" />
                  <h3 className="text-lg font-semibold text-travel-blue">{destination.name}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{destination.description}</p>
                <div className="flex items-center justify-between">
                  <Button onClick={() => window.open('https://wa.me/16677700580')}  variant="outline" size="sm" >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/destinations"> 
          <Button variant="travel" size="lg" className="px-8 py-4">
            View All Destinations
          </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;