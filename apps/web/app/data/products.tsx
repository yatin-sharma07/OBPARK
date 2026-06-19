
export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  verified: boolean;
  comment: string;
  images?: string[];
}

export interface ProductDetails {
  id: string;
  title: string;
  brand: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  rating: number;
  reviewCount: number;
  boughtCountText: string;
  recentSalesText?: string;
  salesAvatars?: string[];
  category: string;
  images: string[];
  description: string[];
  specs: Record<string, string>;
  reviews: Review[];
}

export const APP_PRODUCTS: Record<string, ProductDetails> = {
  "diamond-2k-car-system": {
    id: "diamond-2k-car-system",
    title: "Diamond 2K Car Android System Touch Screen 4GB+64GB | 4 Core | Wireless Carplay Adapter & Android Auto | Car Stereo | Universal All Cars | Including AHD Rear View Camera | 1 + 1 Years Warranty | WAD-06",
    brand: "iWagon",
    price: 1437,
    originalPrice: 3592, // Evaluated from the -60% discount tag
    discountPercentage: 60,
    rating: 4.5,
    reviewCount: 102,
    boughtCountText: "1K+ bought in past month",
    recentSalesText: "Sold over 238 times last week",
    salesAvatars: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
    ],
    category: "electronics-smart-gadgets",
    images: [
      "https://images.unsplash.com/photo-1552656967-7a0991a13906?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=600&auto=format&fit=crop&q=80"
    ],
    description: [
      "Ultra-clear 2K responsive touch panel offering bright, vivid colors even in direct sunlight.",
      "Seamless wireless integration for Apple CarPlay and Android Auto environments.",
      "Bundled with a high-definition AHD night-vision rear backup tracking camera."
    ],
    specs: {
      "Brand": "iWagon",
      "Connectivity Technology": "Bluetooth, USB, Wi-Fi",
      "Controller Type": "Touch",
      "Special Feature": "Android Auto, Apple CarPlay, Built-In Bluetooth, Built-In Wi-Fi, Screen Mirroring, Rear View Camera Input, Volume Control, Compact Design, Cooling Fan, DSP, Touchscreen",
      "Compatible Devices": "Smartphone",
      "Connector Type": "RCA",
      "Audio Output Mode": "Stereo",
      "Video encoding": "H.264, H.265/HEVC",
      "Colour": "Black"
    },
    reviews: [
      {
        id: "r1",
        author: "Jan",
        rating: 5,
        date: "3 months ago",
        verified: true,
        comment: "Pretty cool effect!"
      },
      {
        id: "r2",
        author: "Sofie",
        rating: 5,
        date: "5 months ago",
        verified: true,
        comment: "Grappig! Ben benieuwd of het me ook echt helpt om minder suiker te nemen.",
        images: ["https://images.unsplash.com/photo-1552656967-7a0991a13906?w=150&auto=format&fit=crop&q=80"]
      }
    ]
  },

  "qubo-dashcam-pro-x": {
    id: "qubo-dashcam-pro-x",
    title: "Qubo Dashcam Pro X (2026 Edition) | 2K Resolution FHD+ | Doubles up as in-Cabin Camera | NightPulse Vision | Wide FOV | Supercapacitor | Built in Wi-Fi, Mic | Up to 1TB",
    brand: "Qubo",
    price: 1437,
    boughtCountText: "1K+ bought in past month",
    recentSalesText: "Sold over 140 times last week",
    salesAvatars: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80"
    ],
    rating: 4.5,
    reviewCount: 102,
    category: "electronics-smart-gadgets",
    images: [
      "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=600&auto=format&fit=crop&q=80"
    ],
    description: [
      "Premium 2K Ultra-HD resolution ensuring crisp license plate readability day or night.",
      "Equipped with advanced Supercapacitors for extreme temperature resistance.",
      "Integrated companion application for fast clip downloads over Wi-Fi."
    ],
    specs: {
      "Brand": "Qubo",
      "Connectivity Technology": "Wi-Fi, USB",
      "Controller Type": "App Control, Button",
      "Special Feature": "NightPulse Vision, G-Sensor Loop Recording, Built-in Mic, Supercapacitor",
      "Compatible Devices": "iOS & Android Smartphones",
      "Connector Type": "Wireless",
      "Audio Output Mode": "Mono",
      "Video encoding": "H.264",
      "Colour": "Matte Black"
    },
    reviews: [
      {
        id: "q1",
        author: "Julia",
        rating: 5,
        date: "5 months ago",
        verified: true,
        comment: "Excellent camera frame rates, clips pull down instantly on my phone."
      }
    ]
  },

  "smart-ev-charger-7kw": {
    id: "smart-ev-charger-7kw",
    title: "7.5 kW Portable EV Charger | Heavy Duty Smart Cable Kit with Auto-Cutoff Protection | Universal Type 2 Connector Compatibility",
    brand: "OBPARK",
    price: 4500,
    originalPrice: 5000,
    discountPercentage: 10,
    rating: 4.8,
    reviewCount: 64,
    boughtCountText: "500+ bought in past month",
    recentSalesText: "Sold over 92 times last week",
    salesAvatars: [
      "https://images.unsplash.com/photo-1628157582853-a796fa650a6a?w=100&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80"
    ],
    category: "ev-accessories",
    images: [
      "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=600&auto=format&fit=crop&q=80" 
    ],
    description: [
      "Heavy duty 7.5 kW charging output bringing rapid turnaround tracking directly to your garage.",
      "Smart integrated protection layer tracking real-time voltage and heat spikes to handle automated safe power cutoffs."
    ],
    specs: {
      "Brand": "OBPARK",
      "Connectivity Technology": "Smart Charging Control Box",
      "Controller Type": "Automated Hardware Sensor",
      "Special Feature": "Over-voltage Protection, Temperature Auto-Cutoff, Weatherproof IP66 Core, LED Display Status",
      "Compatible Devices": "All IEC 62196-2 Type 2 EVs",
      "Connector Type": "Type 2 Plug",
      "Audio Output Mode": "None",
      "Video encoding": "None",
      "Colour": "White & Premium Teal Accent"
    },
    reviews: []
  }
};

