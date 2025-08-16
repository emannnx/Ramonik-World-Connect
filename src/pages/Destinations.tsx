import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Clock, Users } from "lucide-react";
import { useState } from "react";

// Import all destination images
import parisImage from "@/assets/destinations/paris.jpg";
import dubaiImage from "@/assets/destinations/dubai.jpg";
import londonImage from "@/assets/destinations/london.jpg";
import capetownImage from "@/assets/destinations/capetown.jpg";
import tokyoImage from "@/assets/destinations/tokyo.jpg";
import newyorkImage from "@/assets/destinations/newyork.jpg";
import santoriniImage from "@/assets/destinations/santorini.jpg";
import baliImage from "@/assets/destinations/bali.jpg";
import romeImage from "@/assets/destinations/rome.jpg";
import barcelonaImage from "@/assets/destinations/barcelona.jpg";
import amsterdamImage from "@/assets/destinations/amsterdam.jpg";
import pragueImage from "@/assets/destinations/prague.jpg";
import viennaImage from "@/assets/destinations/vienna.jpg";
import zurichImage from "@/assets/destinations/zurich.jpg";
import stockholmImage from "@/assets/destinations/stockholm.jpg";
import reykjavikImage from "@/assets/destinations/reykjavik.jpg";
import bangkokImage from "@/assets/destinations/bangkok.jpg";
import singaporeImage from "@/assets/destinations/singapore.jpg";
import hongkongImage from "@/assets/destinations/hongkong.jpg";
import seoulImage from "@/assets/destinations/seoul.jpg";
import mumbaiImage from "@/assets/destinations/mumbai.jpg";
import marrakechImage from "@/assets/destinations/marrakech.jpg";
import cairoImage from "@/assets/destinations/cairo.jpg";
import nairobiImage from "@/assets/destinations/nairobi.jpg";
import lagosImage from "@/assets/destinations/lagos.jpg";
import sydneyImage from "@/assets/destinations/sydney.jpg";
import melbourneImage from "@/assets/destinations/melbourne.jpg";
import aucklandImage from "@/assets/destinations/auckland.jpg";
import rioImage from "@/assets/destinations/rio.jpg";
import buenosairesImage from "@/assets/destinations/buenosaires.jpg";
import torontoImage from "@/assets/destinations/toronto.jpg";
import vancouverImage from "@/assets/destinations/vancouver.jpg";
import losangelesImage from "@/assets/destinations/losangeles.jpg";
import lasvegasImage from "@/assets/destinations/lasvegas.jpg";
import miamiImage from "@/assets/destinations/miami.jpg";
import sanfranciscoImage from "@/assets/destinations/sanfrancisco.jpg";
import chicagoImage from "@/assets/destinations/chicago.jpg";
import washingtondcImage from "@/assets/destinations/washingtondc.jpg";
import maldivesImage from "@/assets/destinations/maldives.jpg";
import seychellesImage from "@/assets/destinations/seychelles.jpg";
import fijiImage from "@/assets/destinations/fiji.jpg";
import hawaiiImage from "@/assets/destinations/hawaii.jpg";
import tahitiImage from "@/assets/destinations/tahiti.jpg";
import barbadosImage from "@/assets/destinations/barbados.jpg";
import jamaicaImage from "@/assets/destinations/jamaica.jpg";
import phuketImage from "@/assets/destinations/phuket.jpg";
import langkawiImage from "@/assets/destinations/langkawi.jpg";
import istanbulImage from "@/assets/destinations/istanbul.jpg";
import jerusalemImage from "@/assets/destinations/jerusalem.jpg";
import petraImage from "@/assets/destinations/petra.jpg";
import dohaImage from "@/assets/destinations/doha.jpg";
import abudhabiImage from "@/assets/destinations/abudhabi.jpg";
import riyadhImage from "@/assets/destinations/riyadh.jpg";
import muscatImage from "@/assets/destinations/muscat.jpg";
import casablancaImage from "@/assets/destinations/casablanca.jpg";
import tunisImage from "@/assets/destinations/tunis.jpg";
import addisababaImage from "@/assets/destinations/addisababa.jpg";
import johannesburgImage from "@/assets/destinations/johannesburg.jpg";
import zanzibarImage from "@/assets/destinations/zanzibar.jpg";
import victoriafallsImage from "@/assets/destinations/victoriafalls.jpg";
import machupicchu from "@/assets/destinations/machupicchu.jpg";
import cuscoImage from "@/assets/destinations/cusco.jpg";
import cartagenaImage from "@/assets/destinations/cartagena.jpg";
import santiagoImage from "@/assets/destinations/santiago.jpg";
import osloImage from "@/assets/destinations/oslo.jpg";
import copenhagenImage from "@/assets/destinations/copenhagen.jpg";
import helsinkiImage from "@/assets/destinations/helsinki.jpg";

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
      description: "The City of Light awaits with its iconic landmarks, world-class cuisine, and romantic atmosphere.",
      highlights: ["Eiffel Tower", "Louvre Museum", "Seine River Cruise", "Montmartre District"]
    },
    {
      name: "Dubai, UAE",
      continent: "Asia",
      type: "Luxury",
      rating: 4.8,
      duration: "4-6 days",
      groupSize: "1-15 people",
      image: dubaiImage,
      description: "Experience luxury and modern marvels in this desert oasis with stunning architecture.",
      highlights: ["Burj Khalifa", "Desert Safari", "Gold Souk", "Luxury Shopping"]
    },
    {
      name: "London, England",
      continent: "Europe",
      type: "Cultural",
      rating: 4.7,
      duration: "5-8 days",
      groupSize: "2-25 people",
      image: londonImage,
      description: "Discover history, culture, and royal heritage in Britain's vibrant capital city.",
      highlights: ["Buckingham Palace", "British Museum", "Tower Bridge", "West End Shows"]
    },
    {
      name: "Cape Town, South Africa",
      continent: "Africa",
      type: "Adventure",
      rating: 4.9,
      duration: "7-10 days",
      groupSize: "2-12 people",
      image: capetownImage,
      description: "Stunning landscapes and vibrant culture at the southern tip of the African continent.",
      highlights: ["Table Mountain", "Wine Country", "Penguin Colony", "Safari Tours"]
    },
    {
      name: "Tokyo, Japan",
      continent: "Asia",
      type: "Cultural",
      rating: 4.8,
      duration: "6-9 days",
      groupSize: "2-18 people",
        image: tokyoImage,
      description: "A fascinating blend of ancient traditions and cutting-edge technology.",
      highlights: ["Sensoji Temple", "Shibuya Crossing", "Mount Fuji", "Traditional Cuisine"]
    },
    {
      name: "New York, USA",
      continent: "North America",
      type: "Urban",
      rating: 4.6,
      duration: "4-7 days",
      groupSize: "1-20 people",
      image: newyorkImage,
      description: "The city that never sleeps offers endless entertainment and iconic landmarks.",
      highlights: ["Statue of Liberty", "Times Square", "Central Park", "Broadway Shows"]
    },
    {
      name: "Santorini, Greece",
      continent: "Europe",
      type: "Romantic",
      rating: 4.9,
      duration: "5-7 days",
      groupSize: "2-10 people",
      image: santoriniImage,
      description: "Breathtaking sunsets and white-washed buildings overlooking the Aegean Sea.",
      highlights: ["Sunset in Oia", "Wine Tasting", "Volcanic Beaches", "Cycladic Architecture"]
    },
    {
      name: "Bali, Indonesia",
      continent: "Asia",
      type: "Tropical",
      rating: 4.7,
      duration: "7-12 days",
      groupSize: "2-15 people",
      image: baliImage,
      description: "Tropical paradise with beautiful beaches, temples, and rich cultural heritage.",
      highlights: ["Rice Terraces", "Beach Resorts", "Hindu Temples", "Ubud Monkey Forest"]
    },
    {
      name: "Rome, Italy",
      continent: "Europe",
      type: "Cultural",
      rating: 4.8,
      duration: "5-8 days",
      groupSize: "2-20 people",
      image: romeImage,
      description: "Ancient history comes alive in the Eternal City with magnificent ruins and Renaissance art.",
      highlights: ["Colosseum", "Vatican City", "Roman Forum", "Trevi Fountain"]
    },
    {
      name: "Barcelona, Spain",
      continent: "Europe",
      type: "Cultural",
      rating: 4.7,
      duration: "4-7 days",
      groupSize: "2-18 people",
      image: barcelonaImage,
      description: "Gaudi's masterpieces and vibrant Catalan culture meet beautiful Mediterranean beaches.",
      highlights: ["Sagrada Familia", "Park Güell", "Las Ramblas", "Gothic Quarter"]
    },
    {
      name: "Amsterdam, Netherlands",
      continent: "Europe",
      type: "Cultural",
      rating: 4.6,
      duration: "3-6 days",
      groupSize: "2-16 people",
      image: amsterdamImage,
      description: "Charming canals, world-class museums, and liberal culture in this picturesque city.",
      highlights: ["Anne Frank House", "Van Gogh Museum", "Canal Cruise", "Jordaan District"]
    },
    {
      name: "Prague, Czech Republic",
      continent: "Europe",
      type: "Cultural",
      rating: 4.8,
      duration: "4-6 days",
      groupSize: "2-20 people",
      image: pragueImage,
      description: "Medieval charm and stunning architecture make this one of Europe's most beautiful cities.",
      highlights: ["Charles Bridge", "Prague Castle", "Old Town Square", "Astronomical Clock"]
    },
    {
      name: "Vienna, Austria",
      continent: "Europe",
      type: "Cultural",
      rating: 4.7,
      duration: "4-7 days",
      groupSize: "2-18 people",
      image: viennaImage,
      description: "Imperial grandeur and classical music heritage in Austria's elegant capital.",
      highlights: ["Schönbrunn Palace", "St. Stephen's Cathedral", "Belvedere Palace", "Vienna Opera"]
    },
    {
      name: "Zurich, Switzerland",
      continent: "Europe",
      type: "Luxury",
      rating: 4.6,
      duration: "3-6 days",
      groupSize: "2-12 people",
      image: zurichImage,
      description: "Alpine beauty meets luxury living in Switzerland's financial capital.",
      highlights: ["Lake Zurich", "Swiss Alps", "Old Town", "Luxury Shopping"]
    },
    {
      name: "Stockholm, Sweden",
      continent: "Europe",
      type: "Cultural",
      rating: 4.7,
      duration: "4-7 days",
      groupSize: "2-16 people",
      image: stockholmImage,
      description: "Scandinavian design and medieval charm spread across 14 islands.",
      highlights: ["Gamla Stan", "Vasa Museum", "ABBA Museum", "Archipelago Tour"]
    },
    {
      name: "Reykjavik, Iceland",
      continent: "Europe",
      type: "Adventure",
      rating: 4.8,
      duration: "5-8 days",
      groupSize: "2-14 people",
      image: reykjavikImage,
      description: "Gateway to otherworldly landscapes with geysers, glaciers, and Northern Lights.",
      highlights: ["Blue Lagoon", "Northern Lights", "Golden Circle", "Geysir"]
    },
    {
      name: "Bangkok, Thailand",
      continent: "Asia",
      type: "Cultural",
      rating: 4.6,
      duration: "5-9 days",
      groupSize: "2-20 people",
      image: bangkokImage,
      description: "Vibrant street life, ornate temples, and incredible cuisine in Thailand's capital.",
      highlights: ["Grand Palace", "Wat Pho", "Floating Markets", "Street Food Tours"]
    },
    {
      name: "Singapore",
      continent: "Asia",
      type: "Urban",
      rating: 4.7,
      duration: "3-6 days",
      groupSize: "1-18 people",
      image: singaporeImage,
      description: "Futuristic city-state blending cultures, cuisine, and cutting-edge architecture.",
      highlights: ["Gardens by the Bay", "Marina Bay Sands", "Chinatown", "Sentosa Island"]
    },
    {
      name: "Hong Kong",
      continent: "Asia",
      type: "Urban",
      rating: 4.6,
      duration: "4-7 days",
      groupSize: "1-16 people",
      image: hongkongImage,
      description: "East meets West in this dynamic city with stunning skylines and dim sum culture.",
      highlights: ["Victoria Peak", "Star Ferry", "Temple Street Market", "Lantau Island"]
    },
    {
      name: "Seoul, South Korea",
      continent: "Asia",
      type: "Cultural",
      rating: 4.7,
      duration: "5-8 days",
      groupSize: "2-18 people",
      image: seoulImage,
      description: "K-pop culture meets ancient traditions in South Korea's high-tech capital.",
      highlights: ["Gyeongbokgung Palace", "Myeongdong", "Gangnam District", "Korean BBQ"]
    },
    {
      name: "Mumbai, India",
      continent: "Asia",
      type: "Cultural",
      rating: 4.5,
      duration: "6-10 days",
      groupSize: "2-20 people",
      image: mumbaiImage,
      description: "Bollywood's home city offers incredible diversity, street food, and colonial architecture.",
      highlights: ["Gateway of India", "Bollywood Studios", "Crawford Market", "Marine Drive"]
    },
    {
      name: "Marrakech, Morocco",
      continent: "Africa",
      type: "Cultural",
      rating: 4.7,
      duration: "5-8 days",
      groupSize: "2-16 people",
      image: marrakechImage,
      description: "Imperial city with vibrant souks, stunning palaces, and Saharan gateway.",
      highlights: ["Jemaa el-Fnaa", "Majorelle Garden", "Bahia Palace", "Atlas Mountains"]
    },
    {
      name: "Cairo, Egypt",
      continent: "Africa",
      type: "Cultural",
      rating: 4.6,
      duration: "6-9 days",
      groupSize: "2-18 people",
      image: cairoImage,
      description: "Ancient wonders and Islamic architecture in the cradle of civilization.",
      highlights: ["Pyramids of Giza", "Egyptian Museum", "Khan el-Khalili", "Sphinx"]
    },
    {
      name: "Nairobi, Kenya",
      continent: "Africa",
      type: "Adventure",
      rating: 4.8,
      duration: "7-12 days",
      groupSize: "2-14 people",
      image: nairobiImage,
      description: "Gateway to incredible safari adventures and wildlife conservation experiences.",
      highlights: ["Maasai Mara", "David Sheldrick Sanctuary", "Giraffe Centre", "Safari Tours"]
    },
    {
      name: "Lagos, Nigeria",
      continent: "Africa",
      type: "Cultural",
      rating: 4.4,
      duration: "5-8 days",
      groupSize: "2-16 people",
      image: lagosImage,
      description: "Vibrant cultural hub with Afrobeat music, contemporary art, and bustling markets.",
      highlights: ["Victoria Island", "Lekki Beach", "National Theatre", "Nike Art Gallery"]
    },
    {
      name: "Sydney, Australia",
      continent: "Oceania",
      type: "Urban",
      rating: 4.8,
      duration: "6-10 days",
      groupSize: "2-20 people",
      image: sydneyImage,
      description: "Iconic harbor city with stunning beaches, world-class dining, and outdoor lifestyle.",
      highlights: ["Sydney Opera House", "Harbour Bridge", "Bondi Beach", "Royal Botanic Gardens"]
    },
    {
      name: "Melbourne, Australia",
      continent: "Oceania",
      type: "Cultural",
      rating: 4.7,
      duration: "5-9 days",
      groupSize: "2-18 people",
      image: melbourneImage,
      description: "Coffee culture capital with street art, hidden laneways, and cultural sophistication.",
      highlights: ["Federation Square", "Royal Botanic Gardens", "St. Kilda", "Great Ocean Road"]
    },
    {
      name: "Auckland, New Zealand",
      continent: "Oceania",
      type: "Adventure",
      rating: 4.7,
      duration: "6-10 days",
      groupSize: "2-16 people",
      image: aucklandImage,
      description: "Adventure playground with stunning harbors, volcanoes, and outdoor activities.",
      highlights: ["Sky Tower", "Waiheke Island", "Hobbiton", "Bay of Islands"]
    },
    {
      name: "Rio de Janeiro, Brazil",
      continent: "South America",
      type: "Adventure",
      rating: 4.8,
      duration: "6-9 days",
      groupSize: "2-18 people",
      image: rioImage,
      description: "Carnival capital with iconic beaches, Christ the Redeemer, and vibrant culture.",
      highlights: ["Christ the Redeemer", "Copacabana Beach", "Sugarloaf Mountain", "Carnival"]
    },
    {
      name: "Buenos Aires, Argentina",
      continent: "South America",
      type: "Cultural",
      rating: 4.6,
      duration: "5-8 days",
      groupSize: "2-18 people",
      image: buenosairesImage,
      description: "Tango birthplace with European elegance, steakhouses, and passionate culture.",
      highlights: ["La Boca", "Recoleta Cemetery", "Puerto Madero", "Tango Shows"]
    },
    {
      name: "Toronto, Canada",
      continent: "North America",
      type: "Urban",
      rating: 4.6,
      duration: "4-7 days",
      groupSize: "2-20 people",
      image: torontoImage,
      description: "Multicultural metropolis with CN Tower, diverse neighborhoods, and nearby Niagara Falls.",
      highlights: ["CN Tower", "Distillery District", "Casa Loma", "Niagara Falls"]
    },
    {
      name: "Vancouver, Canada",
      continent: "North America",
      type: "Adventure",
      rating: 4.7,
      duration: "5-8 days",
      groupSize: "2-18 people",
      image: vancouverImage,
      description: "Mountain-meets-ocean city with outdoor adventures and urban sophistication.",
      highlights: ["Stanley Park", "Capilano Bridge", "Whistler", "Granville Island"]
    },
    {
      name: "Los Angeles, USA",
      continent: "North America",
      type: "Urban",
      rating: 4.5,
      duration: "5-8 days",
      groupSize: "2-20 people",
      image: losangelesImage,
      description: "Hollywood glamour meets beach culture in the City of Angels.",
      highlights: ["Hollywood Sign", "Santa Monica Pier", "Beverly Hills", "Griffith Observatory"]
    },
    {
      name: "Las Vegas, USA",
      continent: "North America",
      type: "Entertainment",
      rating: 4.4,
      duration: "3-6 days",
      groupSize: "2-20 people",
      image: lasvegasImage,
      description: "Entertainment capital with world-class shows, casinos, and desert adventures.",
      highlights: ["The Strip", "Bellagio Fountains", "Grand Canyon", "Cirque du Soleil"]
    },
    {
      name: "Miami, USA",
      continent: "North America",
      type: "Beach",
      rating: 4.6,
      duration: "4-7 days",
      groupSize: "2-18 people",
      image: miamiImage,
      description: "Art Deco paradise with beautiful beaches, vibrant nightlife, and Latin culture.",
      highlights: ["South Beach", "Art Deco District", "Little Havana", "Wynwood Walls"]
    },
    {
      name: "San Francisco, USA",
      continent: "North America",
      type: "Urban",
      rating: 4.7,
      duration: "4-7 days",
      groupSize: "2-18 people",
      image: sanfranciscoImage,
      description: "Iconic city with Golden Gate Bridge, cable cars, and tech innovation.",
      highlights: ["Golden Gate Bridge", "Alcatraz", "Fisherman's Wharf", "Lombard Street"]
    },
    {
      name: "Chicago, USA",
      continent: "North America",
      type: "Urban",
      rating: 4.6,
      duration: "4-7 days",
      groupSize: "2-20 people",
      image: chicagoImage,
      description: "Architectural marvels, deep-dish pizza, and blues music in the Windy City.",
      highlights: ["Millennium Park", "Navy Pier", "Art Institute", "Architecture Tour"]
    },
    {
      name: "Washington DC, USA",
      continent: "North America",
      type: "Cultural",
      rating: 4.5,
      duration: "3-6 days",
      groupSize: "2-20 people",
      image: washingtondcImage,
      description: "Political heart of America with world-class museums and monuments.",
      highlights: ["Smithsonian Museums", "Lincoln Memorial", "Capitol Building", "Cherry Blossoms"]
    },
    {
      name: "Maldives",
      continent: "Asia",
      type: "Tropical",
      rating: 4.9,
      duration: "7-14 days",
      groupSize: "2-8 people",
      image: maldivesImage,
      description: "Ultimate tropical paradise with overwater villas and pristine coral reefs.",
      highlights: ["Overwater Bungalows", "Snorkeling", "Spa Treatments", "Private Islands"]
    },
    {
      name: "Seychelles",
      continent: "Africa",
      type: "Tropical",
      rating: 4.8,
      duration: "7-12 days",
      groupSize: "2-10 people",
      price: "From $2,199",
      image: seychellesImage,
      description: "Pristine beaches, granite boulders, and unique wildlife in the Indian Ocean.",
      highlights: ["Anse Source d'Argent", "Vallée de Mai", "Giant Tortoises", "Diving"]
    },
    {
      name: "Fiji",
      continent: "Oceania",
      type: "Tropical",
      rating: 4.7,
      duration: "7-14 days",
      groupSize: "2-12 people",
      image: fijiImage,
      description: "Friendly islands with crystal-clear waters, coral reefs, and traditional Bula spirit.",
      highlights: ["Coral Coast", "Kava Ceremony", "Island Hopping", "Scuba Diving"]
    },
    {
      name: "Hawaii, USA",
      continent: "North America",
      type: "Tropical",
      rating: 4.8,
      duration: "7-12 days",
      groupSize: "2-16 people",
      image: hawaiiImage,
      description: "Volcanic islands with diverse landscapes, surfing culture, and aloha spirit.",
      highlights: ["Pearl Harbor", "Diamond Head", "Road to Hana", "Volcano National Park"]
    },
    {
      name: "Tahiti, French Polynesia",
      continent: "Oceania",
      type: "Tropical",
      rating: 4.8,
      duration: "8-14 days",
      groupSize: "2-10 people",
      image: tahitiImage,
      description: "Romantic paradise with overwater bungalows and dramatic volcanic peaks.",
      highlights: ["Bora Bora", "Moorea", "Lagoon Tours", "Polynesian Culture"]
    },
    {
      name: "Barbados",
      continent: "North America",
      type: "Tropical",
      rating: 4.6,
      duration: "6-10 days",
      groupSize: "2-14 people",
      image: barbadosImage,
      description: "Caribbean gem with rum heritage, beautiful beaches, and friendly locals.",
      highlights: ["Harrison's Cave", "Rum Distilleries", "Crane Beach", "Bridgetown"]
    },
    {
      name: "Jamaica",
      continent: "North America",
      type: "Tropical",
      rating: 4.5,
      duration: "6-10 days",
      groupSize: "2-16 people",
      image: jamaicaImage,
      description: "Reggae birthplace with Blue Mountains, jerk cuisine, and laid-back vibes.",
      highlights: ["Blue Mountains", "Dunn's River Falls", "Bob Marley Museum", "Negril Beach"]
    },
    {
      name: "Phuket, Thailand",
      continent: "Asia",
      type: "Tropical",
      rating: 4.6,
      duration: "6-10 days",
      groupSize: "2-18 people",
      image: phuketImage,
      description: "Thai island paradise with limestone cliffs, beach parties, and cultural sites.",
      highlights: ["Phi Phi Islands", "Big Buddha", "Patong Beach", "Island Hopping"]
    },
    {
      name: "Langkawi, Malaysia",
      continent: "Asia",
      type: "Tropical",
      rating: 4.5,
      duration: "5-9 days",
      groupSize: "2-16 people",
      image: langkawiImage,
      description: "Duty-free island with pristine beaches, cable car rides, and mangrove forests.",
      highlights: ["Sky Bridge", "Cable Car", "Underwater World", "Kilim Karst Geoforest"]
    },
    {
      name: "Istanbul, Turkey",
      continent: "Europe",
      type: "Cultural",
      rating: 4.7,
      duration: "5-8 days",
      groupSize: "2-20 people",
      image: istanbulImage,
      description: "Where Europe meets Asia with Byzantine history, Ottoman architecture, and vibrant bazaars.",
      highlights: ["Hagia Sophia", "Blue Mosque", "Grand Bazaar", "Bosphorus Cruise"]
    },
    {
      name: "Jerusalem, Israel",
      continent: "Asia",
      type: "Cultural",
      rating: 4.6,
      duration: "5-8 days",
      groupSize: "2-18 people",
      image: jerusalemImage,
      description: "Holy city sacred to three religions with ancient history and spiritual significance.",
      highlights: ["Western Wall", "Church of Holy Sepulchre", "Via Dolorosa", "Dome of Rock"]
    },
    {
      name: "Petra, Jordan",
      continent: "Asia",
      type: "Cultural",
      rating: 4.8,
      duration: "4-7 days",
      groupSize: "2-16 people",
      image: petraImage,
      description: "Ancient Nabataean city carved into rose-red cliffs, one of the New Seven Wonders.",
      highlights: ["Treasury", "Monastery", "Siq Canyon", "Royal Tombs"]
    },
    {
      name: "Doha, Qatar",
      continent: "Asia",
      type: "Luxury",
      rating: 4.5,
      duration: "3-6 days",
      groupSize: "2-14 people",
      image: dohaImage,
      description: "Modern Arabian city with futuristic architecture, luxury shopping, and cultural heritage.",
      highlights: ["Museum of Islamic Art", "Souq Waqif", "The Pearl", "Katara Cultural Village"]
    },
    {
      name: "Abu Dhabi, UAE",
      continent: "Asia",
      type: "Luxury",
      rating: 4.6,
      duration: "4-7 days",
      groupSize: "2-16 people",
      image: abudhabiImage,
      description: "Capital of UAE with grand mosques, cultural institutions, and luxury experiences.",
      highlights: ["Sheikh Zayed Mosque", "Louvre Abu Dhabi", "Emirates Palace", "Yas Island"]
    },
    {
      name: "Riyadh, Saudi Arabia",
      continent: "Asia",
      type: "Cultural",
      rating: 4.3,
      duration: "4-7 days",
      groupSize: "2-16 people",
      image: riyadhImage,
      description: "Modern Saudi capital blending traditional heritage with futuristic developments.",
      highlights: ["Kingdom Centre", "Diriyah", "National Museum", "Edge of the World"]
    },
    {
      name: "Muscat, Oman",
      continent: "Asia",
      type: "Cultural",
      rating: 4.5,
      duration: "4-7 days",
      groupSize: "2-14 people",
      image: muscatImage,
      description: "Sultanate capital with stunning mosques, traditional souks, and dramatic mountains.",
      highlights: ["Sultan Qaboos Mosque", "Royal Opera House", "Mutrah Souq", "Nizwa Fort"]
    },
    {
      name: "Casablanca, Morocco",
      continent: "Africa",
      type: "Cultural",
      rating: 4.4,
      duration: "4-7 days",
      groupSize: "2-18 people",
      image: casablancaImage,
      description: "Morocco's economic capital with art deco architecture and the world's largest mosque.",
      highlights: ["Hassan II Mosque", "Old Medina", "Corniche", "Art Deco Buildings"]
    },
    {
      name: "Tunis, Tunisia",
      continent: "Africa",
      type: "Cultural",
      rating: 4.3,
      duration: "4-7 days",
      groupSize: "2-16 people",
      image: tunisImage,
      description: "North African capital with ancient Carthage ruins and charming medina.",
      highlights: ["Carthage Ruins", "Sidi Bou Said", "Medina of Tunis", "Bardo Museum"]
    },
    {
      name: "Addis Ababa, Ethiopia",
      continent: "Africa",
      type: "Cultural",
      rating: 4.4,
      duration: "5-8 days",
      groupSize: "2-16 people",
      image: addisababaImage,
      description: "African Union headquarters with ancient churches, coffee culture, and highland beauty.",
      highlights: ["Holy Trinity Cathedral", "Merkato Market", "National Museum", "Coffee Ceremony"]
    },
    {
      name: "Johannesburg, South Africa",
      continent: "Africa",
      type: "Cultural",
      rating: 4.5,
      duration: "5-8 days",
      groupSize: "2-18 people",
      image: johannesburgImage,
      description: "City of Gold with apartheid history, vibrant townships, and nearby wildlife.",
      highlights: ["Apartheid Museum", "Soweto", "Gold Reef City", "Lion & Safari Park"]
    },
    {
      name: "Zanzibar, Tanzania",
      continent: "Africa",
      type: "Tropical",
      rating: 4.7,
      duration: "6-10 days",
      groupSize: "2-14 people",
      image: zanzibarImage,
      description: "Spice island with Stone Town heritage, pristine beaches, and Swahili culture.",
      highlights: ["Stone Town", "Spice Tours", "Prison Island", "Jozani Forest"]
    },
    {
      name: "Victoria Falls, Zambia/Zimbabwe",
      continent: "Africa",
      type: "Adventure",
      rating: 4.9,
      duration: "4-7 days",
      groupSize: "2-16 people",
      image: victoriafallsImage,
      description: "One of the world's largest waterfalls with adventure activities and wildlife.",
      highlights: ["Victoria Falls", "Devil's Pool", "Bungee Jumping", "Zambezi River"]
    },
    {
      name: "Machu Picchu, Peru",
      continent: "South America",
      type: "Adventure",
      rating: 4.9,
      duration: "6-9 days",
      groupSize: "2-14 people",
      image: machupicchu,
      description: "Ancient Inca citadel high in the Andes, one of the New Seven Wonders of the World.",
      highlights: ["Inca Trail", "Sacred Valley", "Huayna Picchu", "Cusco"]
    },
    {
      name: "Cusco, Peru",
      continent: "South America",
      type: "Cultural",
      rating: 4.6,
      duration: "5-8 days",
      groupSize: "2-16 people",
      image: cuscoImage,
      description: "Former Inca capital with colonial architecture and gateway to Machu Picchu.",
      highlights: ["San Pedro Market", "Qorikancha", "Sacred Valley", "Inca Ruins"]
    },
    {
      name: "Cartagena, Colombia",
      continent: "South America",
      type: "Cultural",
      rating: 4.7,
      duration: "4-7 days",
      groupSize: "2-16 people",
      image: cartagenaImage,
      description: "Colonial jewel with colorful architecture, Caribbean beaches, and vibrant culture.",
      highlights: ["Old Town", "Castillo San Felipe", "Rosario Islands", "Getsemani"]
    },
    {
      name: "Santiago, Chile",
      continent: "South America",
      type: "Urban",
      rating: 4.5,
      duration: "4-7 days",
      groupSize: "2-18 people",
      image: santiagoImage,
      description: "Modern capital nestled in the Andes with wine regions and Pacific coast access.",
      highlights: ["Cerro San Cristóbal", "La Moneda", "Wine Valleys", "Valparaíso"]
    },
    {
      name: "Oslo, Norway",
      continent: "Europe",
      type: "Cultural",
      rating: 4.6,
      duration: "4-7 days",
      groupSize: "2-16 people",
      image: osloImage,
      description: "Scandinavian capital with fjords, modern architecture, and Viking heritage.",
      highlights: ["Opera House", "Viking Ship Museum", "Vigeland Park", "Fjord Tours"]
    },
    {
      name: "Copenhagen, Denmark",
      continent: "Europe",
      type: "Cultural",
      rating: 4.7,
      duration: "4-7 days",
      groupSize: "2-18 people",
      image: copenhagenImage,
      description: "Danish capital with hygge culture, colorful harbors, and world-class dining.",
      highlights: ["Nyhavn", "Tivoli Gardens", "Little Mermaid", "Christiania"]
    },
    {
      name: "Helsinki, Finland",
      continent: "Europe",
      type: "Cultural",
      rating: 4.5,
      duration: "3-6 days",
      groupSize: "2-16 people",
      image: helsinkiImage,
      description: "Nordic design capital with saunas, archipelago, and modern Finnish culture.",
      highlights: ["Senate Square", "Temppeliaukio Church", "Suomenlinna", "Design District"]
    }
  ];

  const continents = ["All", "Europe", "Asia", "Africa", "North America", "South America", "Oceania"];
  const types = ["All", "Romantic", "Luxury", "Cultural", "Adventure", "Urban", "Tropical", "Entertainment", "Beach"];

  // Filter destinations based on selected filters
  const filteredDestinations = destinations.filter(destination => {
    const continentMatch = selectedContinent === "All" || destination.continent === selectedContinent;
    const typeMatch = selectedType === "All" || destination.type === selectedType;
    return continentMatch && typeMatch;
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-travel-blue to-travel-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Explore 60 Amazing Destinations</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Discover incredible places around the world and plan your next unforgettable adventure
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-muted-foreground">Continent:</span>
              {continents.map((continent) => (
                <Button
                  key={continent}
                  variant={continent === selectedContinent ? "travel" : "outline"}
                  size="sm"
                  onClick={() => setSelectedContinent(continent)}
                >
                  {continent}
                </Button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-muted-foreground">Type:</span>
              {types.map((type) => (
                <Button
                  key={type}
                  variant={type === selectedType ? "travel" : "outline"}
                  size="sm"
                  onClick={() => setSelectedType(type)}
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-travel-light-blue">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDestinations.map((destination, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden h-48">
                  <div 
                    className="h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundImage: `url(${destination.image})` }}
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{destination.rating}</span>
                  </div>
                  <div className="absolute top-4 left-4 bg-travel-red text-white px-2 py-1 rounded-full text-xs font-medium">
                    {destination.type}
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="h-4 w-4 text-travel-red" />
                    <h3 className="text-lg font-bold text-travel-blue">{destination.name}</h3>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{destination.description}</p>
                  
                  <div className="space-y-1 mb-3">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{destination.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Users className="h-3 w-3" />
                      <span>{destination.groupSize}</span>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <div className="flex flex-wrap gap-1">
                      {destination.highlights.slice(0, 2).map((highlight, highlightIndex) => (
                        <span key={highlightIndex} className="bg-travel-light-blue text-travel-blue text-xs px-2 py-1 rounded-full">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-travel-red font-bold text-sm">{destination.price}</span>
                    <Button variant="travel" size="sm" className="text-xs px-3 py-1">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-travel-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Can't Find Your Dream Destination?</h2>
          <p className="text-xl mb-8 opacity-90">Let us create a custom travel package just for you</p>
          <Button variant="hero" size="lg" className="px-8 py-4">
            Contact Our Travel Experts
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Destinations;