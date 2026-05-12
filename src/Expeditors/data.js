// -------------------------------------------------
// PROJECT IMAGES (Keep your existing imports)
import proj1 from "../Expeditors/assets/images/Construction.jpeg";
import proj2 from "./assets/images/Second.jpg";
import proj3 from "../Expeditors/assets/images/project3.jpg";
import proj4 from "../Expeditors/assets/images/project4.jpeg";


// ... (rest of your imports)

export const serviceData = [
  {
    icon: "fa-solid fa-truck-fast",
    sl: "01",
    title: "Dubai to KSA Transport",
    desc: "Daily truck departures from Dubai/Sharjah to Riyadh, Jeddah, Dammam, and other Saudi cities.",
  },
  {
    icon: "fa-solid fa-truck-ramp-box",
    sl: "02",
    title: "Full Truck Load (FTL)",
    desc: "Dedicated 12m or 15m trailers for large cargo, ensuring direct delivery with no middle stops.",
  },
  {
    icon: "fa-solid fa-boxes-stacked",
    sl: "03",
    title: "LTL / Groupage Services",
    desc: "Cost-effective shared truck space for smaller shipments, perfect for businesses moving partial loads.",
  },
  {
    icon: "fa-solid fa-file-contract",
    sl: "04",
    title: "Border Clearance Support",
    desc: "Expert handling of documentation at the Al Batha border to ensure your cargo crosses into KSA without delay.",
  },
  {
    icon: "fa-solid fa-truck-pickup", // Safe version for specialized trucking
    sl: "05",
    title: "Flatbed & Lowbed Trailers",
    desc: "Specialized trucking for heavy machinery, construction materials, and oversized industrial cargo.",
  },
  {
    icon: "fa-solid fa-globe", // Safe version for GCC distribution
    sl: "06",
    title: "GCC Wide Distribution",
    desc: "Seamless road transport connectivity to Oman (Muscat), Bahrain, Kuwait, and Qatar.",
  },
];

export const estimData = [
  {
    sl: "01",
    icon: "fa-solid fa-route",
    title: "Direct Road Routes",
    desc: "We use the fastest legal road routes to ensure your cargo reaches Saudi Arabia in record time.",
  },
  {
    sl: "02",
    icon: "fa-solid fa-shield-halved",
    title: "Cargo Safety",
    desc: "Every truck is inspected, and cargo is professionally lashed and secured for long-distance travel.",
  },
  {
    sl: "03",
    icon: "fa-solid fa-headset",
    title: "Real-time Updates",
    desc: "Our team provides constant updates on your shipment’s location and estimated time of arrival.",
  },
];


// ======================================================
// PROJECT DATA (Add this to fix the SyntaxError)
// ======================================================

// Add these to your data.js exports
// Add these to your data.js exports
export const projectData = [
  {
    pic: proj3, // Replace with your Volvo truck image
    cat: "Heavy Machinery",
    title: "Industrial Delivery to Riyadh",
    desc: "Secure transport of manufacturing equipment from Dubai to KSA via Al Batha border.",
  },
  {
    pic: proj1, // Replace with your blue truck image
    cat: "Construction",
    title: "Project Cargo for Doha",
    desc: "Cross-border logistics support for large-scale infrastructure materials.",
  },
  {
    pic: proj4, 
    cat: "FMCG Freight",
    title: "Urgent Delivery to Muscat",
    desc: "Time-sensitive consumer goods distribution across the UAE-Oman border.",
  },
  {
    pic: proj2,
    cat: "Commercial",
    title: "Retail Logistics to Jeddah",
    desc: "Full truckload (FTL) services for international retail chains in Saudi Arabia.",
  }
];