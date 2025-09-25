import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const whatsappNumber = "16677700580";
  const message = "Hi! I'm interested in your travel services.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center">
      {/* Shadow Floor */}
      <motion.div
        className="w-16 h-4 rounded-full bg-black/30 blur-sm"
        initial={{ scale: 1, opacity: 0.7 }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
      />
      {/* Bouncing & Shaky Button */}
      <motion.button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group relative"
        aria-label="Contact us on WhatsApp"
        initial={{ y: 0, x: 0 }}
        animate={{
          y: [0, -32, 0, -20, 0],
          x: [0, -6, 6, -6, 6, 0]
        }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Chat with us on WhatsApp
        </span>
      </motion.button>
    </div>
  );
};

export default WhatsAppButton;