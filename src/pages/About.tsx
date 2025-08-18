import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Globe, Award, Heart, Target } from "lucide-react";
import AboutPlane from "../assets/AboutPlane.jpeg"

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Your satisfaction and happiness are our top priorities in everything we do."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connecting you to destinations across the world with local expertise."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering exceptional service and unforgettable experiences."
    },
    {
      icon: Users,
      title: "Personal Touch",
      description: "Every journey is tailored to your unique preferences and needs."
    }
  ];

  const reasons = [
    "15+ years of travel industry experience",
    "24/7 customer support and assistance",
    "Competitive pricing with no hidden fees",
    "Extensive network of trusted partners worldwide",
    "Personalized travel planning and consultation",
    "Comprehensive travel insurance options",
    "Expert visa and documentation assistance",
    "Multilingual customer service team"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-travel-blue text-white py-20 bg-cover bg-center"
      style={{
        backgroundImage: `url(https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ivSmo8DuZ97g/v2/-1x-1.webp)`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat",
      }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Ramonik Travel & Tours</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Connecting travelers to the world since 2009, creating memories that last a lifetime
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-travel-blue mb-8">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              At Ramonik Travel & Tours, our mission is simple: to connect you to the world in the most 
              seamless, enjoyable, and memorable way possible. We believe that travel is not just about 
              reaching a destination, but about the journey, the experiences, and the connections you make along the way.
            </p>
            
            <div className="bg-gradient-to-r from-travel-light-blue to-white p-8 rounded-lg">
              <div className="flex items-center justify-center mb-4">
                <Target className="h-12 w-12 text-travel-blue" />
              </div>
              <h3 className="text-2xl font-bold text-travel-blue mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the leading travel agency that transforms dreams into reality, 
                making world-class travel experiences accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-travel-light-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-travel-blue mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide us in everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="bg-gradient-to-r from-travel-blue to-travel-blue p-4 rounded-full w-fit mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-travel-blue mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-travel-blue mb-8">Why Choose Ramonik?</h2>
              <div className="space-y-4">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-travel-blue to-travel-blue p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-6">Our Commitment to You</h3>
              <p className="mb-6">
                We understand that every traveler is unique, and that's why we take the time to understand 
                your specific needs, preferences, and dreams. Our team of experienced travel professionals 
                is dedicated to crafting personalized experiences that exceed your expectations.
              </p>
              <p>
                From the moment you contact us to the time you return home, we're with you every step of 
                the way, ensuring your journey is smooth, safe, and spectacular.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-travel-blue text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10K+</div>
              <div className="text-white/80">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
              <div className="text-white/80">Destinations</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-white/80">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;