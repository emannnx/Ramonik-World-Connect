import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Printer, MessageCircle, Instagram, InstagramIcon, FacebookIcon, TicketCheckIcon, Twitter } from "lucide-react";
import { useState } from "react";
import tik from "../assets/tik.png"

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "667-770-0580",
      description: "Available 24/7 for urgent travel needs"
    },
    {
      icon: Mail,
      title: "Email",
      content: "ramoniktravels@gmail.com",
      description: "Primary contact for all inquiries"
    },
    {
      icon: Printer,
      title: "Fax",
      content: "667-677-6691",
      description: "For document submissions"
    },
      {
      icon: InstagramIcon,
      title: "Instagram",
      content: "Ramonik.Travels",
      description: "Secondary contact for all inquiries"
    },
      {
      icon: FacebookIcon,
      title: "Facebook",
      content: "Ramonik Travels",
      description: "Secondary contact for all inquiries"
    }, 
     {
      icon:  `TikTokIcon`,
      title: "Tiktok",
      content: "RamonikTravels",
      description: "Secondary contact for all inquiries"
    }, 
       {
      icon: Twitter,
      title: "X",
      content: "RamonikTravels",
      description: "Secondary contact for all inquiries"
    }, 
    {
      icon: MapPin,
      title: "Location",
      content: "White Marsh, Maryland, USA",
      description: "Serving clients nationwide and globally"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon-Fri, 9AM-6PM EST",
      description: "Weekend and after-hours support available"
    },
  ];

  const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Use official TikTok-style path; here’s a simple example path */}
    <path d="M9.75 3C10.1642 3 10.4444 3.2858 10.5 3.6875V13.125C10.5 14.2131 11.2869 15.1351 12.3608 15.4021C13.4348 15.6691 14.5636 15.2263 15.375 14.3125C16.1864 13.3987 16.5 12.1875 16.5 11V2.25H19.125C19.5392 2.25 19.8194 2.5358 19.875 2.9375V13.6875C19.875 17.4884 16.6134 20.75 12.8125 20.75C9.0116 20.75 5.75 17.4884 5.75 13.6875C5.75 9.8866 9.0116 6.625 12.8125 6.625C13.2577 6.625 13.6921 6.675 14.1062 6.7725C14.1539 6.7819 14.2002 6.7938 14.2439 6.8079C14.2894 6.8229 14.3326 6.8409 14.3734 6.8611L15.375 7.3125C15.375 7.3125 15.375 7.3125 15.375 7.3125L15.375 3.75C15.375 3.3358 15.6592 3.0556 16.0625 3C16.466 2.9444 16.75 3.2246 16.75 3.6375V14.5C16.75 17.8192 14.1817 20.5 10.8125 20.5C7.4433 20.5 4.875 17.8192 4.875 14.5C4.875 11.1808 7.4433 8.5 10.8125 8.5C11.4908 8.5 12.1467 8.6298 12.75 8.8648V3.75C12.75 3.3358 13.0342 3.0556 13.4375 3C13.841 2.9444 14.125 3.2246 14.125 3.6375V9.375C13.4788 9.1357 12.8013 8.9992 12.12 8.9992C8.9778 8.9992 6.5 11.4769 6.5 14.6191C6.5 17.7613 8.9778 20.239 12.12 20.239C15.2621 20.239 17.7399 17.7613 17.7399 14.6191V2.25H16.75V3.6875C16.75 6.8888 14.2496 9.75 11 9.75C9.3005 9.75 7.858 8.8748 7.085 7.5375C6.8817 7.034 6.3718 6.75 5.8542 6.75C5.3366 6.75 4.8267 7.034 4.6234 7.5375C3.9561 8.9284 3.75 10.6612 3.75 12.375C3.75 17.0406 7.9344 21.225 12.6 21.225C17.2656 21.225 21.45 17.0406 21.45 12.375V13.6875C21.45 17.4884 18.1884 20.75 14.3875 20.75C10.5866 20.75 7.325 17.4884 7.325 13.6875C7.325 9.8866 10.5866 6.625 14.3875 6.625C14.8327 6.625 15.2671 6.675 15.6812 6.7725C15.7289 6.7819 15.7752 6.7938 15.8189 6.8079C15.8644 6.8229 15.9076 6.8409 15.9484 6.8611L16.95 7.3125C16.95 7.3125 16.95 7.3125 16.95 7.3125L16.95 3.75C16.95 3.3358 17.2342 3.0556 17.6375 3C18.041 2.9444 18.325 3.2246 18.325 3.6375V14.5C18.325 17.8192 15.7567 20.5 12.3875 20.5C9.0183 20.5 6.45 17.8192 6.45 14.5C6.45 11.1808 9.0183 8.5 12.3875 8.5C13.0656 8.5 13.724 8.6296 14.325 8.8638V3.75C14.325 3.3358 14.6092 3.0556 15.0125 3C15.416 2.9444 15.7 3.2246 15.7 3.6375V9.375C15.0538 9.1357 14.3762 8.9992 13.695 8.9992C10.5528 8.9992 8.075 11.4769 8.075 14.6191C8.075 17.7613 10.5528 20.239 13.695 20.239C16.8371 20.239 19.3149 17.7613 19.3149 14.6191V2.25Z" />
  </svg>
);


  const services = [
    "Flight Booking",
    "Hotel Reservations", 
    "Car Rental",
    "Tours & Vacations",
    "Cruise Reservation",
    "Luxury Apartment Booking",
    "Visa Assistance",
    "Passport Processing",
    "National ID Card",
    "Shipping Services"
  ];

  // State for form values
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    service: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `New Booking Request from ${form.name}`;
    const body = `
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Destination: ${form.destination}
Service Needed: ${form.service}

Message:
${form.message}
    `;

    window.location.href = `mailto:ramoniktravels@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen mt-[20%] sm:mt-[4%]">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-travel-blue to-travel-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Ready to start your journey? Get in touch with our travels experts today
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-b from-white to-travel-light-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-travel-blue mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Multiple ways to reach us - choose what works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                  <CardContent className="p-6">
                    <div className="bg-gradient-to-r from-travel-blue to-travel-blue p-4 rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-travel-blue mb-2">{info.title}</h3>
                    <p className="text-lg font-medium text-foreground mb-2">{info.content}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Quick Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              variant="hero" 
              size="lg" 
              className="px-8 py-4"
              onClick={() => window.open('tel:6677700580')}
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now
            </Button>
            <Button 
              variant="travel" 
              size="lg" 
              className="px-8 py-4"
              onClick={() => window.open('mailto:ramoniktravels@gmail.com')}
            >
              <Mail className="h-5 w-5 mr-2" />
              Send Email
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4"
              onClick={() => window.open('https://wa.me/16677700580')}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-travel-blue mb-4">Book Your Trip</h2>
              <p className="text-xl text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-travel-blue mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-travel-blue focus:border-transparent"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-travel-blue mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-travel-blue focus:border-transparent"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-travel-blue mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-travel-blue focus:border-transparent"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-travel-blue mb-2">
                          Destination
                        </label>
                        <input
                          type="text"
                          name="destination"
                          value={form.destination}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-travel-blue focus:border-transparent"
                          placeholder="Where would you like to go?"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-travel-blue mb-2">
                        Service Needed *
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-travel-blue focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-travel-blue mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-travel-blue focus:border-transparent"
                        placeholder="Tell us more about your travel plans..."
                      />
                    </div>
                    
                    <Button type="submit" variant="travel" size="lg" className="w-full py-3">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Additional Information */}
              <div className="space-y-8">
                <Card className="bg-gradient-to-br from-travel-blue to-travel-red text-white">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6">Why Choose Ramonik Travels.?</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                        <span>15+ years of travel industry experience</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                        <span>24/7 customer support and assistance</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                        <span>Competitive pricing with no hidden fees</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                        <span>Personalized travel planning</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                        <span>Comprehensive visa assistance</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-travel-blue mb-6">Office Hours</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monday - Friday</span>
                        <span className="font-medium">9:00 AM - 6:00 PM EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Saturday</span>
                        <span className="font-medium">10:00 AM - 3:00 PM EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sunday</span>
                        <span className="font-medium">Emergency Support Only</span>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-travel-light-blue rounded-lg">
                      <p className="text-sm text-travel-blue">
                        <strong>Note:</strong> Emergency travel support is available 24/7 via phone or WhatsApp
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
