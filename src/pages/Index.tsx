import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/HomePage/HeroSection";
import ServicesSection from "@/components/HomePage/ServicesSection";
import FeaturedDestinations from "@/components/HomePage/FeaturedDestinations";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <FeaturedDestinations />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
