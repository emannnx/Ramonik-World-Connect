import { Button } from "@/components/ui/button";
import { MapPin, Users, Award, Heart } from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            We Connect You to the
            <span className="bg-gradient-to-r from-travel-gold to-yellow-300 bg-clip-text text-transparent block">
              World
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Discover amazing destinations with Ramonik Travel & Tours. 
            Your journey to unforgettable experiences starts here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button onClick={() => window.open('https://wa.me/16677700580')} variant="hero" size="lg" className="text-lg px-8 py-4">
              Plan Your Trip
            </Button>
            <Link to="/destinations">
      <Button
        size="lg"
        className="text-lg px-8 py-4 border-white text-blue hover:bg-blue hover:text-travel-white"
      >
        View Destinations
      </Button>
    </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-2">
                <Users className="h-8 w-8 mx-auto text-travel-gold" />
              </div>
              <div className="text-2xl font-bold">10K+</div>
              <div className="text-sm text-white/80">Happy Travelers</div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-2">
                <MapPin className="h-8 w-8 mx-auto text-travel-gold" />
              </div>
              <div className="text-2xl font-bold">150+</div>
              <div className="text-sm text-white/80">Destinations</div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-2">
                <Award className="h-8 w-8 mx-auto text-travel-gold" />
              </div>
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm text-white/80">Years Experience</div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-2">
                <Heart className="h-8 w-8 mx-auto text-travel-gold" />
              </div>
              <div className="text-2xl font-bold">98%</div>
              <div className="text-sm text-white/80">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center">
          <div className="text-sm mb-2">Scroll Down</div>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;