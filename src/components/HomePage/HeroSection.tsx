import { Button } from "@/components/ui/button";
import { MapPin, Users, Award, Heart, Plane } from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mt-[20%] sm:mt-0">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Animated Heading */}
<h1 className="text-5xl md:text-7xl font-extrabold leading-tight relative inline-block overflow-hidden">
  <motion.span
    initial={{ clipPath: "inset(0 100% 0 0)" }}
    whileInView={{ clipPath: "inset(0 0% 0 0)" }}
    viewport={{ once: false }}
    transition={{ duration: 1.4, ease: "easeInOut" }}
    className="inline-block text-yellow-300 drop-shadow-lg"
  >
    WE CONNECT YOU TO THE WORLD
  </motion.span>

  {/* Airplane Animation */}
  <motion.div
    initial={{ x: "-120%" }}
    whileInView={{ x: "140%" }}
    viewport={{ once: false }}
    transition={{ duration: 1.4, ease: "easeInOut" }}
    className="absolute top-1/2 left-0"
  >
    <Plane className="text-yellow-300 w-8 h-8 rotate-45 drop-shadow-md" />
  </motion.div>
</h1>



          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto"
          >
            Discover amazing destinations with Ramonik Travel & Tours. 
            Your journey to unforgettable experiences starts here.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2, delayChildren: 0.5 }
              }
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
            >
              <Button
                onClick={() => window.open("https://wa.me/16677700580")}
                variant="hero"
                size="lg"
                className="text-lg px-8 py-4"
              >
                Plan Your Trip
              </Button>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/destinations">
                <Button
                  size="lg"
                  className="text-lg px-8 py-4 border border-white text-blue bg-transparent 
                             hover:bg-blue hover:text-travel-white hover:scale-105 
                             hover:shadow-lg hover:shadow-blue/50 
                             transition-all duration-300 ease-in-out rounded-2xl"
                >
                  View Destinations
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats (staggered reveal) */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15, delayChildren: 0.6 }
              }
            }}
          >
            {[
              { icon: Users, value: "10K+", label: "Happy Travelers" },
              { icon: MapPin, value: "150+", label: "Destinations" },
              { icon: Award, value: "15+", label: "Years Experience" },
              { icon: Heart, value: "98%", label: "Satisfaction Rate" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-2">
                  <stat.icon className="h-8 w-8 mx-auto text-travel-gold" />
                </div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
