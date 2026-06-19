import { Category } from "./types";

export const MockData: Category[] = [


  {
    //category 1 - items starts here 
    id: "cat-1",
    categoryName: "Electronics & Smart Gadgets",
    slug: "electronics-smart-gadgets",

    items: [
      {
        id: "prod-1",

        title:
          "Qubo Dashcam Pro X (2026 Edition) | 2K Resolution FHD+ | Doubles up as in-Cabin Camera|NightPulse Vision | Wide FOV | Supercapacitor | Built in Wi-Fi, Mic | Up to 1TB",

        brand: "Qubo",

        price: 1437,

        currencySymbol: "$",

        imagePath: "/products/electronics/qubo-dashcam-main.jpg",

        galleryImages: [
          "/products/electronics/qubo-dashcam-1.jpg",
          "/products/electronics/qubo-dashcam-2.jpg",
          "/products/electronics/qubo-dashcam-3.jpg",
          "/products/electronics/qubo-dashcam-4.jpg",
        ],

        discountText: "-18%",

        ratingData: {
          averageRating: 4.5,

          totalReviewsCount: 1284,

          boughtPastMonthText: "1K+ bought in past month",

          soldLastWeekText: "Sold over 286 times last week",
        },

        attributes: [
          {
            label: "Video Resolution",
            value: "2K Full HD+",
          },

          {
            label: "Storage Support",
            value: "Expandable up to 1TB",
          },

          {
            label: "Connectivity",
            value: "Built-in Wi-Fi",
          },

          {
            label: "Camera Type",
            value: "Front + In-Cabin Recording",
          },

          {
            label: "Vision Technology",
            value: "NightPulse Low-Light Vision",
          },
        ],

        aboutSections: [
          {
            heading: "Dual Camera Recording",

            content:
              "Records both road footage and cabin activity simultaneously, ideal for safety monitoring and ride-sharing vehicles.",
          },

          {
            heading: "Advanced NightPulse Vision",

            content:
              "Enhanced low-light sensor captures sharper details during night driving and dim parking conditions.",
          },

          {
            heading: "Reliable Supercapacitor Technology",

            content:
              "Uses supercapacitor instead of lithium battery for better durability and heat resistance in parked vehicles.",
          },
        ],

        shippingBadges: [
          "Free Delivery",
          "7 Days Return",
          "1 Year Warranty",
          "Cash on Delivery",
        ],

        reviewsBreakdown: {
          starBars: [
            { stars: 5, percentage: 72 },
            { stars: 4, percentage: 18 },
            { stars: 3, percentage: 6 },
            { stars: 2, percentage: 3 },
            { stars: 1, percentage: 1 },
          ],

          userFeed: [
            {
              id: "review-1",

              reviewerName: "Arjun",

              rating: 5,

              isVerifiedBuyer: true,

              commentText:
                "Very impressive video quality. Night footage is much clearer than expected and setup was easy.",

              postedDateAgo: "2 months ago",

              userUploadedMedia: [
                "/reviews/qubo-review-1.jpg",
                "/reviews/qubo-review-2.jpg",
              ],
            },

            {
              id: "review-2",

              reviewerName: "Rohan",

              rating: 4,

              isVerifiedBuyer: true,

              commentText:
                "WiFi connectivity works smoothly. Cabin camera feature is extremely useful during long drives.",

              postedDateAgo: "3 months ago",
            },
          ],
        },
      }, //product 1 ends here

      {
        id: "prod-2",

        title:
          "Diamond 2K Car Android System Touch Screen 4GB+64GB|4 Core|Wireless Carplay Adapter & Android Auto | Car Stereo |Universal All Cars| Including AHD Rear View Camera| 1+1 Years Warranty | WAD-06",

        brand: "Diamond",

        price: 1437,

        currencySymbol: "$",

        imagePath: "/products/electronics/diamond-system-main.jpg",

        galleryImages: [
          "/products/electronics/diamond-system-1.jpg",
          "/products/electronics/diamond-system-2.jpg",
          "/products/electronics/diamond-system-3.jpg",
          "/products/electronics/diamond-system-4.jpg",
        ],

        discountText: "-22%",

        ratingData: {
          averageRating: 4.5,

          totalReviewsCount: 1137,

          boughtPastMonthText: "1K+ bought in past month",

          soldLastWeekText: "Sold over 243 times last week",
        },

        attributes: [
          {
            label: "Display Type",
            value: "2K Touch Screen",
          },

          {
            label: "RAM",
            value: "4GB",
          },

          {
            label: "Storage",
            value: "64GB Internal Storage",
          },

          {
            label: "Processor",
            value: "Quad Core Processor",
          },

          {
            label: "Compatibility",
            value: "Universal Car Support",
          },
        ],

        aboutSections: [
          {
            heading: "Wireless CarPlay and Android Auto",

            content:
              "Supports wireless smartphone connectivity for maps, music, calls and navigation without cable dependency.",
          },

          {
            heading: "Rear Camera Integration",

            content:
              "Includes AHD rear-view camera for reverse parking assistance and enhanced road safety during parking.",
          },

          {
            heading: "Optimized Performance",

            content:
              "Powered by quad-core chipset with 4GB RAM delivering smooth app switching and responsive touch controls.",
          },
        ],

        shippingBadges: [
          "Free Delivery",
          "2 Year Warranty",
          "Easy Replacement",
          "Secure Packaging",
        ],

        reviewsBreakdown: {
          starBars: [
            { stars: 5, percentage: 68 },
            { stars: 4, percentage: 20 },
            { stars: 3, percentage: 7 },
            { stars: 2, percentage: 3 },
            { stars: 1, percentage: 2 },
          ],

          userFeed: [
            {
              id: "review-3",

              reviewerName: "Vikram",

              rating: 5,

              isVerifiedBuyer: true,

              commentText:
                "Installed perfectly in my car. Screen quality feels premium and wireless CarPlay connects instantly.",

              postedDateAgo: "1 month ago",

              userUploadedMedia: [
                "/reviews/diamond-review-1.jpg",
              ],
            },

            {
              id: "review-4",

              reviewerName: "Sahil",

              rating: 4,

              isVerifiedBuyer: true,

              commentText:
                "Rear camera quality is sharp. UI feels smooth and storage capacity is more than enough.",

              postedDateAgo: "4 months ago",
            },
          ],
        },
      },

      {
  id: "prod-3",

  title:
    "Wagzo 12V, 4.3 Inch Dashboard TFT LCD Car Display Screen with 8 LED Reverse Parking Camera for Car View HD Car Camera, Universal for All Car",

  brand: "Wagzo",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/electronics/wagzo-display-main.jpg",

  galleryImages: [
    "/products/electronics/wagzo-display-1.jpg",
    "/products/electronics/wagzo-display-2.jpg",
    "/products/electronics/wagzo-display-3.jpg",
    "/products/electronics/wagzo-display-4.jpg",
  ],

  discountText: "-15%",

  ratingData: {
    averageRating: 4.5,

    totalReviewsCount: 964,

    boughtPastMonthText: "1K+ bought in past month",

    soldLastWeekText: "Sold over 174 times last week",
  },

  attributes: [
    {
      label: "Display Size",
      value: "4.3 Inch TFT LCD",
    },

    {
      label: "Input Voltage",
      value: "12V DC",
    },

    {
      label: "Camera Type",
      value: "HD Reverse Parking Camera",
    },

    {
      label: "Night LEDs",
      value: "8 Infrared LED Lights",
    },

    {
      label: "Compatibility",
      value: "Universal Car Compatibility",
    },
  ],

  aboutSections: [
    {
      heading: "Reverse Parking Assistance",

      content:
        "Designed to help drivers safely reverse park using live rear camera feed displayed directly on dashboard screen.",
    },

    {
      heading: "Enhanced Night Visibility",

      content:
        "Integrated 8 LED night assist lights improve rear visibility during low light and nighttime parking situations.",
    },

    {
      heading: "Universal Easy Installation",

      content:
        "Supports installation across most car models with standard dashboard display integration.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Easy Installation",
    "7 Days Replacement",
    "Secure Packaging",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 66 },
      { stars: 4, percentage: 22 },
      { stars: 3, percentage: 7 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "review-5",

        reviewerName: "Karan",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Camera clarity is excellent while parking. The screen is bright enough even in daylight.",

        postedDateAgo: "2 months ago",

        userUploadedMedia: [
          "/reviews/wagzo-review-1.jpg",
        ],
      },

      {
        id: "review-6",

        reviewerName: "Amit",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Useful for tight parking spots. Installation was straightforward and image quality feels sharp.",

        postedDateAgo: "5 months ago",
      },
    ],
  },
},

{
  id: "prod-4",

  title:
    "Skyshop® C240 Pro Solar Powered TPMS with Smart Voice Alert | External Wireless Tyre Pressure Monitoring System | Real-Time Precision Sensors for All Cars, Bikes & Scooters",

  brand: "Skyshop",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/electronics/skyshop-tpms-main.jpg",

  galleryImages: [
    "/products/electronics/skyshop-tpms-1.jpg",
    "/products/electronics/skyshop-tpms-2.jpg",
    "/products/electronics/skyshop-tpms-3.jpg",
    "/products/electronics/skyshop-tpms-4.jpg",
  ],

  discountText: "-20%",

  ratingData: {
    averageRating: 4.5,

    totalReviewsCount: 1087,

    boughtPastMonthText: "1K+ bought in past month",

    soldLastWeekText: "Sold over 219 times last week",
  },

  attributes: [
    {
      label: "Charging Type",
      value: "Solar Powered Charging",
    },

    {
      label: "Sensor Type",
      value: "External Wireless Sensors",
    },

    {
      label: "Alert System",
      value: "Smart Voice Warning Alerts",
    },

    {
      label: "Monitoring",
      value: "Real-Time Tyre Pressure Tracking",
    },

    {
      label: "Vehicle Support",
      value: "Cars, Bikes and Scooters",
    },
  ],

  aboutSections: [
    {
      heading: "Continuous Tyre Monitoring",

      content:
        "Tracks tyre pressure continuously and warns drivers immediately when abnormal pressure changes are detected.",
    },

    {
      heading: "Solar Powered Efficiency",

      content:
        "Built-in solar charging panel reduces dependency on frequent charging while improving portability.",
    },

    {
      heading: "Smart Voice Alert Protection",

      content:
        "Provides instant audio warnings for tyre pressure drops, overheating, or unusual pressure conditions.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Wireless Installation",
    "6 Month Warranty",
    "Fast Dispatch",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 71 },
      { stars: 4, percentage: 17 },
      { stars: 3, percentage: 6 },
      { stars: 2, percentage: 4 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "review-7",

        reviewerName: "Ritesh",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Very accurate tyre pressure readings. Solar charging works surprisingly well even outdoors.",

        postedDateAgo: "1 month ago",

        userUploadedMedia: [
          "/reviews/skyshop-review-1.jpg",
          "/reviews/skyshop-review-2.jpg",
        ],
      },

      {
        id: "review-8",

        reviewerName: "Dev",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Voice alert system is useful on highway drives. Sensors paired quickly without issues.",

        postedDateAgo: "3 months ago",
      },
    ],
  },
},

{
  id: "prod-5",

  title:
    "ESR for MagSafe Car Mount Charger, 15W Magnetic Wireless Car Charger, MagSafe Car Charger, Air Vent/Dashboard Car Phone Holder Mount for iPhone 17e,17-12 Air Pro Max, Galaxy S26/S25, Fast Charging",

  brand: "ESR",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/electronics/esr-magsafe-main.jpg",

  galleryImages: [
    "/products/electronics/esr-magsafe-1.jpg",
    "/products/electronics/esr-magsafe-2.jpg",
    "/products/electronics/esr-magsafe-3.jpg",
    "/products/electronics/esr-magsafe-4.jpg",
  ],

  discountText: "-17%",

  ratingData: {
    averageRating: 4.5,

    totalReviewsCount: 1526,

    boughtPastMonthText: "1K+ bought in past month",

    soldLastWeekText: "Sold over 342 times last week",
  },

  attributes: [
    {
      label: "Charging Power",
      value: "15W Fast Wireless Charging",
    },

    {
      label: "Mount Type",
      value: "Air Vent / Dashboard Mount",
    },

    {
      label: "Attachment",
      value: "Magnetic MagSafe Lock",
    },

    {
      label: "Compatibility",
      value: "iPhone 12–17 Series & Galaxy S25/S26",
    },

    {
      label: "Rotation",
      value: "360 Degree Adjustable View",
    },
  ],

  aboutSections: [
    {
      heading: "MagSafe Magnetic Lock",

      content:
        "Strong magnetic alignment keeps phone securely attached even during sharp turns and rough road conditions.",
    },

    {
      heading: "15W Fast Wireless Charging",

      content:
        "Charges supported devices quickly while driving without requiring separate charging cables.",
    },

    {
      heading: "Flexible Mount Positioning",

      content:
        "Supports both dashboard and air vent mounting with easy viewing angle adjustment for navigation use.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "1 Year Warranty",
    "Fast Charging Support",
    "Secure Packaging",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 74 },
      { stars: 4, percentage: 16 },
      { stars: 3, percentage: 5 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "review-9",

        reviewerName: "Harsh",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Magnet grip is extremely strong and charging speed stays consistent even on long drives.",

        postedDateAgo: "2 months ago",

        userUploadedMedia: [
          "/reviews/esr-review-1.jpg",
        ],
      },

      {
        id: "review-10",

        reviewerName: "Nitin",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Perfect for navigation use. Build quality feels premium and mounting mechanism is sturdy.",

        postedDateAgo: "4 months ago",
      },
    ],
  },
},

{
  id: "prod-6",

  title:
    "Portronics AUTO 12 in-Car Bluetooth Receiver for Handsfree Calling, Music System, Supports All Smartphones (Black)",

  brand: "Portronics",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/electronics/portronics-auto12-main.jpg",

  galleryImages: [
    "/products/electronics/portronics-auto12-1.jpg",
    "/products/electronics/portronics-auto12-2.jpg",
    "/products/electronics/portronics-auto12-3.jpg",
    "/products/electronics/portronics-auto12-4.jpg",
  ],

  discountText: "-14%",

  ratingData: {
    averageRating: 4.5,

    totalReviewsCount: 1198,

    boughtPastMonthText: "1K+ bought in past month",

    soldLastWeekText: "Sold over 208 times last week",
  },

  attributes: [
    {
      label: "Connectivity",
      value: "Bluetooth Wireless Receiver",
    },

    {
      label: "Functionality",
      value: "Handsfree Calling + Music Streaming",
    },

    {
      label: "Device Support",
      value: "All Smartphones Supported",
    },

    {
      label: "Audio Output",
      value: "3.5mm AUX Audio Output",
    },

    {
      label: "Microphone",
      value: "Built-in Calling Microphone",
    },
  ],

  aboutSections: [
    {
      heading: "Wireless Music Streaming",

      content:
        "Converts regular car music systems into Bluetooth-enabled audio systems for seamless wireless playback.",
    },

    {
      heading: "Handsfree Calling Support",

      content:
        "Integrated microphone enables safe handsfree calling while driving without touching the phone repeatedly.",
    },

    {
      heading: "Universal Smartphone Compatibility",

      content:
        "Compatible with Android and iPhone devices supporting standard Bluetooth audio transmission.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Plug and Play Setup",
    "Compact Portable Design",
    "7 Days Replacement",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 69 },
      { stars: 4, percentage: 19 },
      { stars: 3, percentage: 7 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "review-11",

        reviewerName: "Ankit",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Connected instantly with my phone. Music quality is clean and call clarity is excellent.",

        postedDateAgo: "3 months ago",

        userUploadedMedia: [
          "/reviews/portronics-review-1.jpg",
        ],
      },

      {
        id: "review-12",

        reviewerName: "Manav",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Good budget Bluetooth adapter for older cars. Setup literally took less than one minute.",

        postedDateAgo: "5 months ago",
      },
    ],
  },
},


{
  id: "prod-7",

  title:
    "Morelian Car HUD Display, OBDⅡ+GPS Smart Gauge High Definition Speedometer Car Diagnostic Tool OBD Fault Code Elimination Safe Driving Computer Overspeed Fault Alarm for All Vehicles",

  brand: "Morelian",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/electronics/morelian-hud-main.jpg",

  galleryImages: [
    "/products/electronics/morelian-hud-1.jpg",
    "/products/electronics/morelian-hud-2.jpg",
    "/products/electronics/morelian-hud-3.jpg",
    "/products/electronics/morelian-hud-4.jpg",
  ],

  discountText: "-19%",

  ratingData: {
    averageRating: 4.5,

    totalReviewsCount: 874,

    boughtPastMonthText: "1K+ bought in past month",

    soldLastWeekText: "Sold over 167 times last week",
  },

  attributes: [
    {
      label: "Connectivity",
      value: "OBDⅡ + GPS Dual Mode",
    },

    {
      label: "Display Type",
      value: "High Definition HUD Display",
    },

    {
      label: "Functions",
      value: "Speedometer + Diagnostics + Fault Detection",
    },

    {
      label: "Safety Alerts",
      value: "Overspeed Warning Alarm",
    },

    {
      label: "Vehicle Support",
      value: "Compatible with Most Modern Vehicles",
    },
  ],

  aboutSections: [
    {
      heading: "Real-Time Vehicle Diagnostics",

      content:
        "Reads live vehicle performance data directly through OBD connection and displays engine health information instantly.",
    },

    {
      heading: "Heads-Up Driving Display",

      content:
        "Projects critical driving information such as speed and warnings without distracting driver attention from the road.",
    },

    {
      heading: "Integrated Fault Detection",

      content:
        "Detects vehicle fault codes early and helps identify system issues before they become major problems.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Universal Vehicle Support",
    "Easy Dashboard Mount",
    "6 Month Warranty",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 67 },
      { stars: 4, percentage: 21 },
      { stars: 3, percentage: 6 },
      { stars: 2, percentage: 4 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "review-13",

        reviewerName: "Yash",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Excellent for monitoring speed and engine data while driving. GPS mode is very accurate.",

        postedDateAgo: "2 months ago",

        userUploadedMedia: [
          "/reviews/morelian-review-1.jpg",
        ],
      },

      {
        id: "review-14",

        reviewerName: "Abhishek",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Diagnostic alerts helped me detect engine issue early. Very useful gadget for long trips.",

        postedDateAgo: "4 months ago",
      },
    ],
  },
},

{
  id: "prod-8",

  title:
    "Brago TurboVac Cordless Vacuum Cleaner for Car & Home, 18500Pa Powerful Suction, 4-in-1 Portable Vacuum & Air Blower, 9600mAh Battery (40 Mins Runtime), 3-Speed BLDC Motor",

  brand: "Brago",

  price: 3599,

  currencySymbol: "$",

  imagePath: "/products/electronics/brago-turbovac-main.jpg",

  galleryImages: [
    "/products/electronics/brago-turbovac-1.jpg",
    "/products/electronics/brago-turbovac-2.jpg",
    "/products/electronics/brago-turbovac-3.jpg",
    "/products/electronics/brago-turbovac-4.jpg",
  ],

  discountText: "-24%",

  ratingData: {
    averageRating: 4.6,

    totalReviewsCount: 1739,

    boughtPastMonthText: "1K+ bought in past month",

    soldLastWeekText: "Sold over 391 times last week",
  },

  attributes: [
    {
      label: "Suction Power",
      value: "18500Pa High Suction Force",
    },

    {
      label: "Battery Capacity",
      value: "9600mAh Rechargeable Battery",
    },

    {
      label: "Runtime",
      value: "40 Minutes Continuous Use",
    },

    {
      label: "Motor Type",
      value: "3-Speed BLDC Motor",
    },

    {
      label: "Functions",
      value: "Vacuum + Air Blower + Portable Cleaning",
    },
  ],

  aboutSections: [
    {
      heading: "Powerful Deep Cleaning",

      content:
        "High suction motor removes dust, debris, food crumbs and fine dirt particles from car interiors effectively.",
    },

    {
      heading: "4-in-1 Multi Utility Design",

      content:
        "Functions as vacuum cleaner, air blower and portable cleaning device for both vehicle and household usage.",
    },

    {
      heading: "Long Battery Runtime",

      content:
        "Large battery capacity delivers up to 40 minutes cleaning time without interruption on full charge.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Fast Recharge Support",
    "Portable Design",
    "1 Year Warranty",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 76 },
      { stars: 4, percentage: 14 },
      { stars: 3, percentage: 5 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "review-15",

        reviewerName: "Deepak",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Surprisingly strong suction power. Cleans car seats and dashboard dust extremely well.",

        postedDateAgo: "1 month ago",

        userUploadedMedia: [
          "/reviews/brago-review-1.jpg",
          "/reviews/brago-review-2.jpg",
        ],
      },

      {
        id: "review-16",

        reviewerName: "Pranav",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Battery backup is excellent. I use it both for my car and small cleaning tasks at home.",

        postedDateAgo: "3 months ago",
      },
    ],
  },
},

{
  id: "prod-9",

  title:
    "Morelian Car HUD Display, OBDⅡ+GPS Smart Gauge High Definition Speedometer Car Diagnostic Tool OBD Fault Code Elimination Safe Driving Computer Overspeed Fault Alarm for All Vehicles",

  brand: "Morelian",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/electronics/morelian-hud-v2-main.jpg",

  galleryImages: [
    "/products/electronics/morelian-hud-v2-1.jpg",
    "/products/electronics/morelian-hud-v2-2.jpg",
    "/products/electronics/morelian-hud-v2-3.jpg",
    "/products/electronics/morelian-hud-v2-4.jpg",
  ],

  discountText: "-16%",

  ratingData: {
    averageRating: 4.4,

    totalReviewsCount: 913,

    boughtPastMonthText: "1K+ bought in past month",

    soldLastWeekText: "Sold over 182 times last week",
  },

  attributes: [
    {
      label: "Tracking Mode",
      value: "GPS + OBDⅡ Dual Monitoring",
    },

    {
      label: "Primary Function",
      value: "Speed Monitoring and Engine Diagnostics",
    },

    {
      label: "Display Technology",
      value: "Digital Heads-Up Projection Display",
    },

    {
      label: "Safety Alerts",
      value: "Overspeed and Engine Fault Alerts",
    },

    {
      label: "Compatibility",
      value: "Multi-Vehicle Universal Support",
    },
  ],

  aboutSections: [
    {
      heading: "Advanced Driving Analytics",

      content:
        "Continuously monitors driving speed, engine health data and real-time vehicle status directly from internal sensors.",
    },

    {
      heading: "Safe Driving Alert System",

      content:
        "Integrated warning system instantly alerts drivers about overspeed conditions and abnormal engine behavior.",
    },

    {
      heading: "Universal Compatibility",

      content:
        "Works with a wide range of modern vehicles supporting standard OBD diagnostic communication systems.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Quick Installation",
    "Vehicle Diagnostic Support",
    "Secure Packaging",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 65 },
      { stars: 4, percentage: 23 },
      { stars: 3, percentage: 7 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "review-17",

        reviewerName: "Sumit",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Speed display is extremely accurate and I like having engine diagnostics visible during highway travel.",

        postedDateAgo: "2 months ago",

        userUploadedMedia: [
          "/reviews/morelian-v2-review-1.jpg",
        ],
      },

      {
        id: "review-18",

        reviewerName: "Raghav",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Good gadget for monitoring car health. Overspeed alert feature works reliably during long drives.",

        postedDateAgo: "4 months ago",
      },
    ],
  },
}

],
},
];