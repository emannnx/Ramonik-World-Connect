import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useState } from "react";

// Import destination images
import parisImage from "@/assets/destinations/paris.jpg";
import dubaiImage from "@/assets/destinations/dubai.jpg";
import londonImage from "@/assets/destinations/london.jpg";
import santoriniImage from "@/assets/destinations/santorini.jpg";
import baliImage from "@/assets/destinations/bali.jpg";
import tokyoImage from "@/assets/destinations/tokyo.jpg";
import newyorkImage from "@/assets/destinations/newyork.jpg";
import romeImage from "@/assets/destinations/rome.jpg";
import barcelonaImage from "@/assets/destinations/barcelona.jpg";
import amsterdamImage from "@/assets/destinations/amsterdam.jpg";

// Import travel experience images  
import cruiseImage from "@/assets/gallery/cruise.jpg";
import familyDubaiImage from "@/assets/gallery/family-dubai.jpg";
import safariImage from "@/assets/gallery/safari.jpg";
import firstClassImage from "@/assets/gallery/first-class.jpg";
import airportLoungeImage from "@/assets/gallery/airport-lounge.jpg";
import beachVacationImage from "@/assets/gallery/beach-vacation.jpg";
import luxuryHotelImage from "@/assets/gallery/luxury-hotel.jpg";
import departureGateImage from "@/assets/gallery/departure-gate.jpg";
import familyTempleImage from "@/assets/gallery/family-temple.jpg";
import scubaDivingImage from "@/assets/gallery/scuba-diving.jpg";
import businessClassImage from "@/assets/gallery/business-class.jpg";
import mountainHikingImage from "@/assets/gallery/mountain-hiking.jpg";
import localMarketImage from "@/assets/gallery/local-market.jpg";
import cityTourImage from "@/assets/gallery/city-tour.jpg";
import wineTastingImage from "@/assets/gallery/wine-tasting.jpg";
import hotAirBalloonImage from "@/assets/gallery/hot-air-balloon.jpg";
import spaTreatmentImage from "@/assets/gallery/spa-treatment.jpg";
import streetFoodImage from "@/assets/gallery/street-food.jpg";
import museumVisitImage from "@/assets/gallery/museum-visit.jpg";
import yachtCharterImage from "@/assets/gallery/yacht-charter.jpg";
import scenicTrainImage from "@/assets/gallery/scenic-train.jpg";
import starryCampingImage from "@/assets/gallery/starry-camping.jpg";
import culturalShowImage from "@/assets/gallery/cultural-show.jpg";
import helicopterTourImage from "@/assets/gallery/helicopter-tour.jpg";
import whiteWaterImage from "@/assets/gallery/white-water.jpg";
import cliffSunsetImage from "@/assets/gallery/cliff-sunset.jpg";
import elephantSafariImage from "@/assets/gallery/elephant-safari.jpg";
import cookingClassImage from "@/assets/gallery/cooking-class.jpg";
import skiResortImage from "@/assets/gallery/ski-resort.jpg";
import camelCaravanImage from "@/assets/gallery/camel-caravan.jpg";
import infinityPoolImage from "@/assets/gallery/infinity-pool.jpg";
import ancientTempleImage from "@/assets/gallery/ancient-temple.jpg";
import luxuryShoppingImage from "@/assets/gallery/luxury-shopping.jpg";
import coralSnorkelImage from "@/assets/gallery/coral-snorkel.jpg";
import golfScenicImage from "@/assets/gallery/golf-scenic.jpg";
import artGalleryImage from "@/assets/gallery/art-gallery.jpg";
import festivalCelebrationImage from "@/assets/gallery/festival-celebration.jpg";
import luxuryCarImage from "@/assets/gallery/luxury-car.jpg";
import ziplineAdventureImage from "@/assets/gallery/zipline-adventure.jpg";
import beachDinnerImage from "@/assets/gallery/beach-dinner.jpg";
import castleTourImage from "@/assets/gallery/castle-tour.jpg";
import hotSpringsImage from "@/assets/gallery/hot-springs.jpg";
import motorcycleTourImage from "@/assets/gallery/motorcycle-tour.jpg";
import whaleWatchingImage from "@/assets/gallery/whale-watching.jpg";
import craftWorkshopImage from "@/assets/gallery/craft-workshop.jpg";
import treehouseLuxuryImage from "@/assets/gallery/treehouse-luxury.jpg";

// Import the new travel destination images
import edinburghCastleImage from "@/assets/gallery/edinburgh-castle.jpg";
import swissVillageImage from "@/assets/gallery/swiss-village.jpg";
import norwegianFjordImage from "@/assets/gallery/norwegian-fjord.jpg";
import kyotoTempleImage from "@/assets/gallery/kyoto-temple.jpg";
import grandCanyonImage from "@/assets/gallery/grand-canyon.jpg";
import mauritiusBeachImage from "@/assets/gallery/mauritius-beach.jpg";
import angkorWatImage from "@/assets/gallery/angkor-wat.jpg";
import cinqueTerreImage from "@/assets/gallery/cinque-terre.jpg";
import banffLakeImage from "@/assets/gallery/banff-lake.jpg";
import neuschwansteinImage from "@/assets/gallery/neuschwanstein.jpg";
import northernLightsIcelandImage from "@/assets/gallery/northern-lights-iceland.jpg";
import petraTreasuryImage from "@/assets/gallery/petra-treasury.jpg";
import cappadociaBalloonsImage from "@/assets/gallery/cappadocia-balloons.jpg";
import torresDelPaineImage from "@/assets/gallery/torres-del-paine.jpg";
import boraBoraLagoonImage from "@/assets/gallery/bora-bora-lagoon.jpg";
import victoriaFallsRainbowImage from "@/assets/gallery/victoria-falls-rainbow.jpg";
import tajMahalSunriseImage from "@/assets/gallery/taj-mahal-sunrise.jpg";
import easterIslandMoaiImage from "@/assets/gallery/easter-island-moai.jpg";
import greatWallChinaImage from "@/assets/gallery/great-wall-china.jpg";
import milfordSoundImage from "@/assets/gallery/milford-sound.jpg";
import hallstattAustriaImage from "@/assets/gallery/hallstatt-austria.jpg";
import scottishHighlandsImage from "@/assets/gallery/scottish-highlands.jpg";
import mountFujiSakuraImage from "@/assets/gallery/mount-fuji-sakura.jpg";
import antelopeCanyonImage from "@/assets/gallery/antelope-canyon.jpg";
import cenoteMexicoImage from "@/assets/gallery/cenote-mexico.jpg";
import dutchTulipsImage from "@/assets/gallery/dutch-tulips.jpg";
import dolomitesItalyImage from "@/assets/gallery/dolomites-italy.jpg";
import palawanLagoonImage from "@/assets/gallery/palawan-lagoon.jpg";
import chichenItzaImage from "@/assets/gallery/chichen-itza.jpg";
import lofotenIslandsImage from "@/assets/gallery/lofoten-islands.jpg";
import zhangjiajieChinaImage from "@/assets/gallery/zhangjiajie-china.jpg";
import provenceLavenderImage from "@/assets/gallery/provence-lavender.jpg";
import salarDeUyuniImage from "@/assets/gallery/salar-de-uyuni.jpg";
import chefchaouenMoroccoImage from "@/assets/gallery/chefchaouen-morocco.jpg";
import whitehavenBeachImage from "@/assets/gallery/whitehaven-beach.jpg";
import stonehengeSunsetImage from "@/assets/gallery/stonehenge-sunset.jpg";
import guilinLiRiverImage from "@/assets/gallery/guilin-li-river.jpg";
import landmannalaugarIcelandImage from "@/assets/gallery/landmannalaugar-iceland.jpg";
import atacamaDesertImage from "@/assets/gallery/atacama-desert.jpg";
import plitviceLakesImage from "@/assets/gallery/plitvice-lakes.jpg";
import giantsCausewayImage from "@/assets/gallery/giants-causeway.jpg";
import lakeBledSloveniaImage from "@/assets/gallery/lake-bled-slovenia.jpg";
import monumentValleyImage from "@/assets/gallery/monument-valley.jpg";
import rajaAmpatIndonesiaImage from "@/assets/gallery/raja-ampat-indonesia.jpg";
import baganTemplesImage from "@/assets/gallery/bagan-temples.jpg";
import faroeIslandsImage from "@/assets/gallery/faroe-islands.jpg";
import socotraIslandImage from "@/assets/gallery/socotra-island.jpg";
import himalayasNepalImage from "@/assets/gallery/himalayas-nepal.jpg";
import kjeragboltenNorwayImage from "@/assets/gallery/kjeragbolten-norway.jpg";
import cookIslandsImage from "@/assets/gallery/cook-islands.jpg";
import blueLagoonIcelandImage from "@/assets/gallery/blue-lagoon-iceland.jpg";
import meteoraGreeceImage from "@/assets/gallery/meteora-greece.jpg";
import saguenayFjordImage from "@/assets/gallery/saguenay-fjord.jpg";
import tikalGuatemalaImage from "@/assets/gallery/tikal-guatemala.jpg";
import vanuatuIslandsImage from "@/assets/gallery/vanuatu-islands.jpg";
import preikestolenNorwayImage from "@/assets/gallery/preikestolen-norway.jpg";
import wadiRumJordanImage from "@/assets/gallery/wadi-rum-jordan.jpg";
import svalbardPolarBearsImage from "@/assets/gallery/svalbard-polar-bears.jpg";
import jejuIslandKoreaImage from "@/assets/gallery/jeju-island-korea.jpg";
import azoresPortugalImage from "@/assets/gallery/azores-portugal.jpg";
import moraineLakeCanadaImage from "@/assets/gallery/moraine-lake-canada.jpg";
import hampiIndiaImage from "@/assets/gallery/hampi-india.jpg";
import santoriniCalderaImage from "@/assets/gallery/santorini-caldera.jpg";
import lordHoweIslandImage from "@/assets/gallery/lord-howe-island.jpg";
import iguazuFallsImage from "@/assets/gallery/iguazu-falls.jpg";
import fagarasRomaniaImage from "@/assets/gallery/fagaras-romania.jpg";
import lalibelaEthiopiaImage from "@/assets/gallery/lalibela-ethiopia.jpg";
import kamchatkaRussiaImage from "@/assets/gallery/kamchatka-russia.jpg";
import aldabraSeychellesImage from "@/assets/gallery/aldabra-seychelles.jpg";
import franzJosefGlacierImage from "@/assets/gallery/franz-josef-glacier.jpg";
import lakeComoItalyImage from "@/assets/gallery/lake-como-italy.jpg";
import yellowstoneGeyserImage from "@/assets/gallery/yellowstone-geyser.jpg";
import borobudurIndonesiaImage from "@/assets/gallery/borobudur-indonesia.jpg";
import dragonTreeForestImage from "@/assets/gallery/dragon-tree-forest.jpg";
import similanIslandsImage from "@/assets/gallery/similan-islands.jpg";
import mountCookNewzealandImage from "@/assets/gallery/mount-cook-newzealand.jpg";
import rilaLakesBulgariaImage from "@/assets/gallery/rila-lakes-bulgaria.jpg";
import sigiriyaSriLankaImage from "@/assets/gallery/sigiriya-sri-lanka.jpg";
import tsingyMadagascarImage from "@/assets/gallery/tsingy-madagascar.jpg";
import galapagosIslandsImage from "@/assets/gallery/galapagos-islands.jpg";
import pamukkaleTurkeyImage from "@/assets/gallery/pamukkale-turkey.jpg";
import amalfiCoastItalyImage from "@/assets/gallery/amalfi-coast-italy.jpg";
import jokulsarlonIcelandImage from "@/assets/gallery/jokulsarlon-iceland.jpg";
import persepolisIranImage from "@/assets/gallery/persepolis-iran.jpg";
import socotraBottleTreesImage from "@/assets/gallery/socotra-bottle-trees.jpg";
import emeraldLakeBanffImage from "@/assets/gallery/emerald-lake-banff.jpg";
import jiuzhaigouChinaImage from "@/assets/gallery/jiuzhaigou-china.jpg";
import mountBromoIndonesiaImage from "@/assets/gallery/mount-bromo-indonesia.jpg";
import baganBalloonsImage from "@/assets/gallery/bagan-balloons.jpg";
import fernandoNoronhaImage from "@/assets/gallery/fernando-noronha.jpg";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const galleryImages = [
    // Famous Destinations
    { category: "Destinations", title: "Eiffel Tower, Paris", description: "Iconic landmark in the City of Light", image: parisImage },
    { category: "Destinations", title: "Burj Khalifa, Dubai", description: "Modern architectural marvel", image: dubaiImage },
    { category: "Destinations", title: "Big Ben, London", description: "Historic clock tower", image: londonImage },
    { category: "Destinations", title: "Santorini Sunset", description: "Breathtaking views in Greece", image: santoriniImage },
    { category: "Destinations", title: "Bali Temple", description: "Exploring tropical paradise", image: baliImage },
    { category: "Destinations", title: "Tokyo Streets", description: "Modern culture meets tradition", image: tokyoImage },
    { category: "Destinations", title: "New York Skyline", description: "The city that never sleeps", image: newyorkImage },
    { category: "Destinations", title: "Colosseum, Rome", description: "Ancient Roman amphitheater", image: romeImage },
    { category: "Destinations", title: "Sagrada Familia, Barcelona", description: "Gaudi's masterpiece", image: barcelonaImage },
    { category: "Destinations", title: "Amsterdam Canals", description: "Historic waterways", image: amsterdamImage },

    // Natural Wonders  
    { category: "Natural Wonders", title: "Edinburgh Castle", description: "Historic Scottish fortress", image: edinburghCastleImage },
    { category: "Natural Wonders", title: "Swiss Alpine Village", description: "Traditional mountain settlement", image: swissVillageImage },
    { category: "Natural Wonders", title: "Norwegian Fjord", description: "Dramatic Nordic landscape", image: norwegianFjordImage },
    { category: "Natural Wonders", title: "Kyoto Temple", description: "Traditional Japanese architecture", image: kyotoTempleImage },
    { category: "Natural Wonders", title: "Grand Canyon", description: "American natural wonder", image: grandCanyonImage },
    { category: "Natural Wonders", title: "Mauritius Beach", description: "Tropical island paradise", image: mauritiusBeachImage },
    { category: "Natural Wonders", title: "Angkor Wat", description: "Ancient Cambodian temple", image: angkorWatImage },
    { category: "Natural Wonders", title: "Cinque Terre", description: "Italian coastal villages", image: cinqueTerreImage },
    { category: "Natural Wonders", title: "Banff Lake", description: "Canadian mountain wilderness", image: banffLakeImage },
    { category: "Natural Wonders", title: "Neuschwanstein Castle", description: "Fairytale German castle", image: neuschwansteinImage },
    { category: "Natural Wonders", title: "Northern Lights Iceland", description: "Aurora borealis display", image: northernLightsIcelandImage },
    { category: "Natural Wonders", title: "Petra Treasury", description: "Ancient Jordanian wonder", image: petraTreasuryImage },
    { category: "Natural Wonders", title: "Cappadocia Balloons", description: "Hot air balloon sunrise", image: cappadociaBalloonsImage },
    { category: "Natural Wonders", title: "Torres del Paine", description: "Patagonian wilderness", image: torresDelPaineImage },
    { category: "Natural Wonders", title: "Bora Bora Lagoon", description: "Polynesian paradise", image: boraBoraLagoonImage },
    { category: "Natural Wonders", title: "Victoria Falls Rainbow", description: "African waterfall spectacle", image: victoriaFallsRainbowImage },
    { category: "Natural Wonders", title: "Taj Mahal Sunrise", description: "Indian architectural marvel", image: tajMahalSunriseImage },
    { category: "Natural Wonders", title: "Easter Island Moai", description: "Mysterious stone statues", image: easterIslandMoaiImage },
    { category: "Natural Wonders", title: "Great Wall China", description: "Ancient fortification", image: greatWallChinaImage },
    { category: "Natural Wonders", title: "Milford Sound", description: "New Zealand fjord beauty", image: milfordSoundImage },
    { category: "Natural Wonders", title: "Hallstatt Austria", description: "Alpine lakeside village", image: hallstattAustriaImage },
    { category: "Natural Wonders", title: "Scottish Highlands", description: "Dramatic mountain landscape", image: scottishHighlandsImage },
    { category: "Natural Wonders", title: "Mount Fuji Sakura", description: "Japanese icon with cherry blossoms", image: mountFujiSakuraImage },
    { category: "Natural Wonders", title: "Antelope Canyon", description: "Slot canyon in Arizona", image: antelopeCanyonImage },
    { category: "Natural Wonders", title: "Cenote Mexico", description: "Underground swimming holes", image: cenoteMexicoImage },
    { category: "Natural Wonders", title: "Dutch Tulip Fields", description: "Spring flower explosion", image: dutchTulipsImage },
    { category: "Natural Wonders", title: "Dolomites Italy", description: "Alpine mountain paradise", image: dolomitesItalyImage },
    { category: "Natural Wonders", title: "Palawan Lagoon", description: "Philippines tropical beauty", image: palawanLagoonImage },
    { category: "Natural Wonders", title: "Chichen Itza", description: "Mayan pyramid complex", image: chichenItzaImage },
    { category: "Natural Wonders", title: "Lofoten Islands", description: "Norwegian arctic beauty", image: lofotenIslandsImage },
    { category: "Natural Wonders", title: "Zhangjiajie China", description: "Avatar mountain landscape", image: zhangjiajieChinaImage },
    { category: "Natural Wonders", title: "Provence Lavender", description: "French purple fields", image: provenceLavenderImage },
    { category: "Natural Wonders", title: "Salar de Uyuni", description: "Bolivia salt flats mirror", image: salarDeUyuniImage },
    { category: "Natural Wonders", title: "Chefchaouen Morocco", description: "Blue city wonder", image: chefchaouenMoroccoImage },
    { category: "Natural Wonders", title: "Whitehaven Beach", description: "Australian pristine sand", image: whitehavenBeachImage },
    { category: "Natural Wonders", title: "Stonehenge Sunset", description: "Ancient English mystery", image: stonehengeSunsetImage },
    { category: "Natural Wonders", title: "Guilin Li River", description: "Chinese karst landscape", image: guilinLiRiverImage },
    { category: "Natural Wonders", title: "Landmannalaugar Iceland", description: "Colorful volcanic mountains", image: landmannalaugarIcelandImage },
    { category: "Natural Wonders", title: "Atacama Desert", description: "Chilean high altitude desert", image: atacamaDesertImage },
    { category: "Natural Wonders", title: "Plitvice Lakes", description: "Croatian waterfall paradise", image: plitviceLakesImage },
    { category: "Natural Wonders", title: "Giant's Causeway", description: "Irish basalt columns", image: giantsCausewayImage },
    { category: "Natural Wonders", title: "Lake Bled Slovenia", description: "Fairytale alpine setting", image: lakeBledSloveniaImage },
    { category: "Natural Wonders", title: "Monument Valley", description: "Iconic American Southwest", image: monumentValleyImage },
    { category: "Natural Wonders", title: "Raja Ampat Indonesia", description: "Marine biodiversity hotspot", image: rajaAmpatIndonesiaImage },
    { category: "Natural Wonders", title: "Bagan Temples", description: "Myanmar ancient pagodas", image: baganTemplesImage },
    { category: "Natural Wonders", title: "Faroe Islands", description: "Nordic remote beauty", image: faroeIslandsImage },
    { category: "Natural Wonders", title: "Socotra Island", description: "Yemen alien landscape", image: socotraIslandImage },
    { category: "Natural Wonders", title: "Himalayas Nepal", description: "World's highest peaks", image: himalayasNepalImage },
    { category: "Natural Wonders", title: "Kjeragbolten Norway", description: "Extreme cliff boulder", image: kjeragboltenNorwayImage },
    { category: "Natural Wonders", title: "Cook Islands", description: "South Pacific paradise", image: cookIslandsImage },
    { category: "Natural Wonders", title: "Blue Lagoon Iceland", description: "Geothermal spa wonder", image: blueLagoonIcelandImage },
    { category: "Natural Wonders", title: "Meteora Greece", description: "Monasteries on rock pillars", image: meteoraGreeceImage },
    { category: "Natural Wonders", title: "Saguenay Fjord", description: "Canadian whale watching", image: saguenayFjordImage },
    { category: "Natural Wonders", title: "Tikal Guatemala", description: "Maya jungle temples", image: tikalGuatemalaImage },
    { category: "Natural Wonders", title: "Vanuatu Islands", description: "Pacific volcanic paradise", image: vanuatuIslandsImage },
    { category: "Natural Wonders", title: "Preikestolen Norway", description: "Pulpit Rock cliff", image: preikestolenNorwayImage },
    { category: "Natural Wonders", title: "Wadi Rum Jordan", description: "Valley of the Moon", image: wadiRumJordanImage },
    { category: "Natural Wonders", title: "Svalbard Polar Bears", description: "Arctic wildlife encounter", image: svalbardPolarBearsImage },
    { category: "Natural Wonders", title: "Jeju Island Korea", description: "Volcanic island beauty", image: jejuIslandKoreaImage },
    { category: "Natural Wonders", title: "Azores Portugal", description: "Atlantic island paradise", image: azoresPortugalImage },
    { category: "Natural Wonders", title: "Moraine Lake Canada", description: "Turquoise mountain lake", image: moraineLakeCanadaImage },
    { category: "Natural Wonders", title: "Hampi India", description: "Ancient boulder landscape", image: hampiIndiaImage },
    { category: "Natural Wonders", title: "Santorini Caldera", description: "Volcanic crater beauty", image: santoriniCalderaImage },
    { category: "Natural Wonders", title: "Lord Howe Island", description: "Australian remote paradise", image: lordHoweIslandImage },
    { category: "Natural Wonders", title: "Iguazu Falls", description: "Brazil-Argentina border cascade", image: iguazuFallsImage },
    { category: "Natural Wonders", title: "Fagaras Romania", description: "Carpathian mountain peaks", image: fagarasRomaniaImage },
    { category: "Natural Wonders", title: "Lalibela Ethiopia", description: "Rock-hewn churches", image: lalibelaEthiopiaImage },
    { category: "Natural Wonders", title: "Kamchatka Russia", description: "Volcanic peninsula wilderness", image: kamchatkaRussiaImage },
    { category: "Natural Wonders", title: "Aldabra Seychelles", description: "Giant tortoise atoll", image: aldabraSeychellesImage },
    { category: "Natural Wonders", title: "Franz Josef Glacier", description: "New Zealand ice formation", image: franzJosefGlacierImage },
    { category: "Natural Wonders", title: "Lake Como Italy", description: "Elegant lakeside beauty", image: lakeComoItalyImage },
    { category: "Natural Wonders", title: "Yellowstone Geyser", description: "American geothermal wonder", image: yellowstoneGeyserImage },
    { category: "Natural Wonders", title: "Borobudur Indonesia", description: "Buddhist temple complex", image: borobudurIndonesiaImage },
    { category: "Natural Wonders", title: "Dragon Tree Forest", description: "Socotra endemic species", image: dragonTreeForestImage },
    { category: "Natural Wonders", title: "Similan Islands", description: "Thai diving paradise", image: similanIslandsImage },
    { category: "Natural Wonders", title: "Mount Cook New Zealand", description: "Southern Alps peak", image: mountCookNewzealandImage },
    { category: "Natural Wonders", title: "Rila Lakes Bulgaria", description: "Mountain glacial pools", image: rilaLakesBulgariaImage },
    { category: "Natural Wonders", title: "Sigiriya Sri Lanka", description: "Ancient rock fortress", image: sigiriyaSriLankaImage },
    { category: "Natural Wonders", title: "Tsingy Madagascar", description: "Limestone needle forest", image: tsingyMadagascarImage },
    { category: "Natural Wonders", title: "Galapagos Islands", description: "Evolution laboratory", image: galapagosIslandsImage },
    { category: "Natural Wonders", title: "Pamukkale Turkey", description: "Cotton castle terraces", image: pamukkaleTurkeyImage },
    { category: "Natural Wonders", title: "Amalfi Coast Italy", description: "Mediterranean cliff villages", image: amalfiCoastItalyImage },
    { category: "Natural Wonders", title: "Jokulsarlon Iceland", description: "Glacial iceberg lagoon", image: jokulsarlonIcelandImage },
    { category: "Natural Wonders", title: "Persepolis Iran", description: "Ancient Persian ruins", image: persepolisIranImage },
    { category: "Natural Wonders", title: "Socotra Bottle Trees", description: "Alien-like vegetation", image: socotraBottleTreesImage },
    { category: "Natural Wonders", title: "Emerald Lake Banff", description: "Canadian mountain jewel", image: emeraldLakeBanffImage },
    { category: "Natural Wonders", title: "Jiuzhaigou China", description: "Colorful valley lakes", image: jiuzhaigouChinaImage },
    { category: "Natural Wonders", title: "Mount Bromo Indonesia", description: "Volcanic crater sunrise", image: mountBromoIndonesiaImage },
    { category: "Natural Wonders", title: "Bagan Balloons", description: "Myanmar aerial temple view", image: baganBalloonsImage },
    { category: "Natural Wonders", title: "Fernando de Noronha", description: "Brazil marine sanctuary", image: fernandoNoronhaImage },

    // Travel Experiences
    { category: "Experiences", title: "Luxury Cruise", description: "Sailing through crystal blue waters", image: cruiseImage },
    { category: "Experiences", title: "Family Adventure", description: "Making memories in the desert", image: familyDubaiImage },
    { category: "Experiences", title: "African Safari", description: "Wildlife encounters in Africa", image: safariImage },
    { category: "Experiences", title: "First Class Travel", description: "Luxury travel at its finest", image: firstClassImage },
    { category: "Experiences", title: "Airport Lounge", description: "Comfortable travel experiences", image: airportLoungeImage },
    { category: "Experiences", title: "Beach Paradise", description: "Relaxing on pristine beaches", image: beachVacationImage },
    { category: "Experiences", title: "Luxury Resort", description: "Five-star accommodation", image: luxuryHotelImage },
    { category: "Experiences", title: "Travel Departure", description: "Beginning of adventure", image: departureGateImage },
    { category: "Experiences", title: "Cultural Heritage", description: "Temple exploration", image: familyTempleImage },
    { category: "Experiences", title: "Underwater Adventure", description: "Scuba diving expedition", image: scubaDivingImage },
    { category: "Experiences", title: "Business Class", description: "Premium flight experience", image: businessClassImage },
    { category: "Experiences", title: "Mountain Trekking", description: "Alpine hiking adventure", image: mountainHikingImage },
    { category: "Experiences", title: "Local Markets", description: "Cultural shopping experience", image: localMarketImage },
    { category: "Experiences", title: "City Exploration", description: "Urban discovery tours", image: cityTourImage },
    { category: "Experiences", title: "Wine Country", description: "Vineyard tasting experience", image: wineTastingImage },
    { category: "Experiences", title: "Balloon Adventure", description: "Sky-high perspectives", image: hotAirBalloonImage },
    { category: "Experiences", title: "Spa Retreat", description: "Wellness and relaxation", image: spaTreatmentImage },
    { category: "Experiences", title: "Street Food Tour", description: "Local culinary adventure", image: streetFoodImage },
    { category: "Experiences", title: "Museum Visit", description: "Cultural education experience", image: museumVisitImage },
    { category: "Experiences", title: "Yacht Charter", description: "Private sea adventure", image: yachtCharterImage },
    { category: "Experiences", title: "Scenic Railway", description: "Train journey through landscapes", image: scenicTrainImage },
    { category: "Experiences", title: "Stargazing Camp", description: "Desert night sky viewing", image: starryCampingImage },
    { category: "Experiences", title: "Cultural Performance", description: "Traditional show experience", image: culturalShowImage },
    { category: "Experiences", title: "Helicopter Tour", description: "Aerial sightseeing adventure", image: helicopterTourImage },
    { category: "Experiences", title: "River Rafting", description: "White water adventure", image: whiteWaterImage },
    { category: "Experiences", title: "Sunset Viewing", description: "Cliff-top sunset experience", image: cliffSunsetImage },
    { category: "Experiences", title: "Elephant Encounter", description: "Wildlife safari experience", image: elephantSafariImage },
    { category: "Experiences", title: "Cooking Class", description: "Learn local cuisine", image: cookingClassImage },
    { category: "Experiences", title: "Ski Resort", description: "Winter sports adventure", image: skiResortImage },
    { category: "Experiences", title: "Desert Caravan", description: "Camel trekking expedition", image: camelCaravanImage },
    { category: "Experiences", title: "Infinity Pool", description: "Luxury pool experience", image: infinityPoolImage },
    { category: "Experiences", title: "Ancient Temples", description: "Historical site exploration", image: ancientTempleImage },
    { category: "Experiences", title: "Luxury Shopping", description: "High-end retail experience", image: luxuryShoppingImage },
    { category: "Experiences", title: "Coral Reef Snorkel", description: "Marine life discovery", image: coralSnorkelImage },
    { category: "Experiences", title: "Golf Resort", description: "Scenic golf experience", image: golfScenicImage },
    { category: "Experiences", title: "Art Gallery", description: "Cultural art appreciation", image: artGalleryImage },
    { category: "Experiences", title: "Festival Celebration", description: "Local cultural events", image: festivalCelebrationImage },
    { category: "Experiences", title: "Luxury Transport", description: "Premium car service", image: luxuryCarImage },
    { category: "Experiences", title: "Zipline Adventure", description: "Canopy thrill experience", image: ziplineAdventureImage },
    { category: "Experiences", title: "Beach Dining", description: "Oceanfront culinary experience", image: beachDinnerImage },
    { category: "Experiences", title: "Castle Tour", description: "Historical castle exploration", image: castleTourImage },
    { category: "Experiences", title: "Hot Springs", description: "Natural thermal relaxation", image: hotSpringsImage },
    { category: "Experiences", title: "Motorcycle Tour", description: "Freedom road adventure", image: motorcycleTourImage },
    { category: "Experiences", title: "Whale Watching", description: "Marine mammal encounters", image: whaleWatchingImage },
    { category: "Experiences", title: "Craft Workshop", description: "Traditional skill learning", image: craftWorkshopImage },
    { category: "Experiences", title: "Treehouse Stay", description: "Unique accommodation experience", image: treehouseLuxuryImage }
  ];

  const categories = ["All", "Destinations", "Natural Wonders", "Experiences"];

  // Filter images based on selected category
  const filteredImages = galleryImages.filter(image => 
    selectedCategory === "All" || image.category === selectedCategory
  );

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-travel-blue to-travel-red text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Travel Gallery</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Discover the world through 150+ stunning images of amazing destinations and travel experiences
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  category === selectedCategory
                    ? "bg-travel-blue text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-travel-light-blue hover:text-travel-blue"
                }`}
              >
                {category} {category === "All" ? `(${galleryImages.length})` : `(${galleryImages.filter(img => img.category === category).length})`}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-travel-light-blue">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div 
                  className="aspect-square bg-cover bg-center relative overflow-hidden"
                  style={{ backgroundImage: `url(${image.image})` }}
                >
                  {/* Dark overlay for better text readability */}
                  <div className="absolute inset-0 bg-black/20" />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-4 flex flex-col justify-end">
                    <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block bg-white text-travel-blue px-2 py-1 rounded-full text-xs font-medium mb-2">
                        {image.category}
                      </span>
                      <h3 className="text-white font-semibold text-lg mb-1">{image.title}</h3>
                      <p className="text-white/90 text-sm">{image.description}</p>
                    </div>
                  </div>
                  
                  {/* Zoom effect overlay */}
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-travel-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Your Own Memories?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of happy travelers who have explored the world with us</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-travel-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Start Planning
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-travel-blue transition-all duration-300">
              View Packages
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Gallery;