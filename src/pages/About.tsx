import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Globe, Award, Heart, Target } from "lucide-react";
import { motion } from "framer-motion";
import AboutPlane from "../assets/AboutPlane.jpeg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description:
        "Your satisfaction and happiness are our top priorities in everything we do.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Connecting you to destinations across the world with local expertise.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Committed to delivering exceptional service and unforgettable experiences.",
    },
    {
      icon: Users,
      title: "Personal Touch",
      description:
        "Every journey is tailored to your unique preferences and needs.",
    },
  ];

  const reasons = [
    "15+ years of travel industry experience",
    "24/7 customer support and assistance",
    "Competitive pricing with no hidden fees",
    "Extensive network of trusted partners worldwide",
    "Personalized travel planning and consultation",
    "Comprehensive travel insurance options",
    "Expert visa and documentation assistance",
    "Multilingual customer service team",
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-travels-blue text-white py-20 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ivSmo8DuZ97g/v2/-1x-1.webp)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About Ramonik Travels & Tours
          </motion.h1>
          <span className="font-extrabold text-2xl md:text-3xl text-travels-red drop-shadow-lg block mb-4">
            WE CONNECT YOU TO THE WORLD
          </span>
          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Connecting travelers to the world since 2009, creating memories that
            last a lifetime
          </motion.p>
        </div>
      </motion.section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <motion.div
          className="container mx-auto px-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-travels-blue mb-8">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              At Ramonik Travels & Tours, our mission is simple: to connect you
              to the world in the most seamless, enjoyable, and memorable way
              possible. We believe that travel is not just about reaching a
              destination, but about the journey, the experiences, and the
              connections you make along the way.
            </p>

            <motion.div
              className="bg-gradient-to-r from-travels-light-blue to-white p-8 rounded-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="flex items-center justify-center mb-4">
                <Target className="h-12 w-12 text-travels-blue" />
              </div>
              <h3 className="text-2xl font-bold text-travels-blue mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground">
                To be the leading travel agency that transforms dreams into
                reality, making world-class travel experiences accessible to
                everyone.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-travels-light-blue">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-travels-blue mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide us in everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-travels-blue to-travels-blue p-4 rounded-full w-fit mx-auto mb-4"
                      >
                        <IconComponent className="h-8 w-8 text-white" />
                      </motion.div>
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-xl font-semibold text-travels-blue mb-3"
                      >
                        {value.title}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-muted-foreground"
                      >
                        {value.description}
                      </motion.p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Ramonik Travels Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-travels-blue mb-8">
                Why Choose Ramonik Travels
              </h2>
              <div className="space-y-4">
                {reasons.map((reason, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{reason}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-travels-blue to-travels-blue p-8 rounded-lg text-white"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold mb-6">Our Commitment to You</h3>
              <p className="mb-6">
                We understand that every traveler is unique, and that's why we
                take the time to understand your specific needs, preferences,
                and dreams. Our team of experienced travel professionals is
                dedicated to crafting personalized experiences that exceed your
                expectations.
              </p>
              <p>
                From the moment you contact us to the time you return home,
                we're with you every step of the way, ensuring your journey is
                smooth, safe, and spectacular..
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section
        className="py-20 bg-travels-blue text-white"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "15+", label: "Years Experience" },
              { number: "10K+", label: "Happy Customers" },
              { number: "150+", label: "Destinations" },
              { number: "98%", label: "Satisfaction Rate" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
