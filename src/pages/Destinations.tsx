import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Clock, Users } from "lucide-react";

// Example imports (replace with your full list)
import parisImage from "@/assets/destinations/paris.jpg";
import dubaiImage from "@/assets/destinations/dubai.jpg";

const Destinations = () => {
  const [selectedContinent, setSelectedContinent] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

  const destinations = [
    {
      name: "Paris, France",
      continent: "Europe",
      type: "Romantic",
      rating: 4.9,
      duration: "5-7 days",
      groupSize: "2-20 people",
      image: parisImage,
      description:
        "The City of Light awaits with its iconic landmarks, world-class cuisine, and romantic atmosphere.",
      highlights: ["Eiffel Tower", "Louvre Museum", "Seine River Cruise"]
    },
    {
      name: "Dubai, UAE",
      continent: "Asia",
      type: "Luxury",
      rating: 4.8,
      duration: "4-6 days",
      groupSize: "1-15 people",
      image: dubaiImage,
      description:
        "Experience luxury and modern marvels in this desert oasis with stunning architecture.",
      highlights: ["Burj Khalifa", "Desert Safari", "Gold Souk"]
    }
  ];

  const filteredDestinations = destinations.filter(
    (d) =>
      (selectedContinent === "All" || d.continent === selectedContinent) &&
      (selectedType === "All" || d.type === selectedType)
  );

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto px-4 py-10">
        {/* Page title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-8"
        >
          Explore Our Destinations ✈️
        </motion.h1>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {['All', 'Europe', 'Asia', 'Africa', 'North America', 'South America'].map(
            (continent) => (
              <motion.div
                key={continent}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={selectedContinent === continent ? "default" : "outline"}
                  onClick={() => setSelectedContinent(continent)}
                >
                  {continent}
                </Button>
              </motion.div>
            )
          )}
        </div>

        {/* Destinations grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredDestinations.map((destination, index) => (
            <motion.div
              key={destination.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="h-full"
            >
              <Card className="overflow-hidden shadow-md hover:shadow-xl transition rounded-2xl">
                <div className="relative h-48 w-full overflow-hidden">
                  <motion.img
                    src={destination.image}
                    alt={destination.name}
                    className="object-cover w-full h-full"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
                <CardContent className="p-4 space-y-3">
                  <h2 className="text-xl font-semibold">{destination.name}</h2>
                  <p className="text-gray-600 text-sm">{destination.description}</p>

                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-500" /> {destination.rating}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {destination.duration}</span>
                    <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {destination.groupSize}</span>
                  </div>

                  <Button className="w-full mt-3">View Details</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Destinations;
