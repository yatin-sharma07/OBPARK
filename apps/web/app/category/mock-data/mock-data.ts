import { Category, OtherProductImages } from "./types";

export const extraImages: OtherProductImages =
  {
    extraImagesSet: [
      "/products/extraImages/Image-1.png",
      "/products/extraImages/Image-2.png",
      "/products/extraImages/Image-3.png",
      "/products/extraImages/Image-4.png",
    ],

    electronicsImages: [
      "/products/electronics/qubo-dashcam-1.png",
      "/products/electronics/qubo-dashcam-2.png",
      "/products/electronics/qubo-dashcam-3.png",
      "/products/electronics/qubo-dashcam-4.png",
    ],

    evAccessoriesImages: [
      "/products/electronics/qubo-dashcam-1.png",
      "/products/electronics/qubo-dashcam-2.png",
      "/products/electronics/qubo-dashcam-3.png",
      "/products/electronics/qubo-dashcam-4.png",
    ],

    exteriorAccessoriesImages: [
      "/products/electronics/qubo-dashcam-1.png",
      "/products/electronics/qubo-dashcam-2.png",
      "/products/electronics/qubo-dashcam-3.png",
      "/products/electronics/qubo-dashcam-4.png",
    ],

    enuImages: [
      "/products/electronics/qubo-dashcam-1.png",
      "/products/electronics/qubo-dashcam-2.png",
      "/products/electronics/qubo-dashcam-3.png",
      "/products/electronics/qubo-dashcam-4.png",
    ],
  };

export const MockData: Category[] = [

  //category 1
{
//category 1
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

        imagePath: "/products/electronics/qubo-dashcam-main.png",

        galleryImages: [
          "/products/electronics/qubo-dashcam-1.png",
          "/products/electronics/qubo-dashcam-2.png",
          "/products/electronics/qubo-dashcam-3.png",
          "/products/electronics/qubo-dashcam-4.png",
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
                "/reviews/qubo-review-1.png",
                "/reviews/qubo-review-2.png",
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

        imagePath: "/products/electronics/diamond-system-main.png",

        galleryImages: [
          "/products/electronics/diamond-system-1.png",
          "/products/electronics/diamond-system-2.png",
          "/products/electronics/diamond-system-3.png",
          "/products/electronics/diamond-system-4.png",
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
                "/reviews/diamond-review-1.png",
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

  imagePath: "/products/electronics/wagzo-display-main.png",

  galleryImages: [
    "/products/electronics/wagzo-display-1.png",
    "/products/electronics/wagzo-display-2.png",
    "/products/electronics/wagzo-display-3.png",
    "/products/electronics/wagzo-display-4.png",
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
          "/reviews/wagzo-review-1.png",
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

  imagePath: "/products/electronics/skyshop-tpms-main.png",

  galleryImages: [
    "/products/electronics/skyshop-tpms-1.png",
    "/products/electronics/skyshop-tpms-2.png",
    "/products/electronics/skyshop-tpms-3.png",
    "/products/electronics/skyshop-tpms-4.png",
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
          "/reviews/skyshop-review-1.png",
          "/reviews/skyshop-review-2.png",
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

  imagePath: "/products/electronics/esr-magsafe-main.png",

  galleryImages: [
    "/products/electronics/esr-magsafe-1.png",
    "/products/electronics/esr-magsafe-2.png",
    "/products/electronics/esr-magsafe-3.png",
    "/products/electronics/esr-magsafe-4.png",
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
          "/reviews/esr-review-1.png",
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

  imagePath: "/products/electronics/portronics-auto12-main.png",

  galleryImages: [
    "/products/electronics/portronics-auto12-1.png",
    "/products/electronics/portronics-auto12-2.png",
    "/products/electronics/portronics-auto12-3.png",
    "/products/electronics/portronics-auto12-4.png",
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
          "/reviews/portronics-review-1.png",
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

  imagePath: "/products/electronics/morelian-hud-main.png",

  galleryImages: [
    "/products/electronics/morelian-hud-1.png",
    "/products/electronics/morelian-hud-2.png",
    "/products/electronics/morelian-hud-3.png",
    "/products/electronics/morelian-hud-4.png",
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
          "/reviews/morelian-review-1.png",
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

  imagePath: "/products/electronics/brago-turbovac-main.png",

  galleryImages: [
    "/products/electronics/brago-turbovac-1.png",
    "/products/electronics/brago-turbovac-2.png",
    "/products/electronics/brago-turbovac-3.png",
    "/products/electronics/brago-turbovac-4.png",
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
          "/reviews/brago-review-1.png",
          "/reviews/brago-review-2.png",
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

  imagePath: "/products/electronics/morelian-hud-v2-main.png",

  galleryImages: [
    "/products/electronics/morelian-hud-v2-1.png",
    "/products/electronics/morelian-hud-v2-2.png",
    "/products/electronics/morelian-hud-v2-3.png",
    "/products/electronics/morelian-hud-v2-4.png",
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
          "/reviews/morelian-v2-review-1.png",
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

// Category 2
{
id: "cat-2",
categoryName: "EV Accessories",
slug: "ev-accessories",

items: [

      {
  id: "ev-prod-1",

  title:
    "Ambrane 85W Car Charger, Mobile & Laptop Charging (Macbook & Type C Laptops), RGB Light, Dual Port Fast Charging, 65W Type C PD, 20W USB, Works with iPhone, Android, iPad",

  brand: "Ambrane",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/ev/ambrane-charger-main.png",

  galleryImages: [
    "/products/ev/ambrane-charger-1.png",
    "/products/ev/ambrane-charger-2.png",
    "/products/ev/ambrane-charger-3.png",
    "/products/ev/ambrane-charger-4.png",
  ],

  discountText: "-18%",

  ratingData: {
    averageRating: 4.5,

    totalReviewsCount: 1468,

    boughtPastMonthText: "1K+ bought in past month",

    soldLastWeekText: "Sold over 315 times last week",
  },

  attributes: [
    {
      label: "Power Output",
      value: "85W Total Fast Charging",
    },

    {
      label: "USB Type-C PD",
      value: "65W Power Delivery",
    },

    {
      label: "USB Port",
      value: "20W Fast Charging USB-A",
    },

    {
      label: "Compatibility",
      value: "Macbook, Type-C Laptops, iPhone, Android, iPad",
    },

    {
      label: "Extra Feature",
      value: "RGB Ambient Charging Light",
    },
  ],

  aboutSections: [
    {
      heading: "Dual Device Fast Charging",

      content:
        "Simultaneously charges smartphones, tablets and laptops using dual high-speed charging ports without power drop.",
    },

    {
      heading: "High Power USB-C Delivery",

      content:
        "65W USB-C Power Delivery allows charging of Macbooks and compatible laptops directly from car charging socket.",
    },

    {
      heading: "RGB Light Design",

      content:
        "Integrated RGB illumination improves night visibility and adds premium dashboard aesthetics while charging.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Fast Charging Support",
    "1 Year Warranty",
    "Secure Packaging",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 73 },
      { stars: 4, percentage: 16 },
      { stars: 3, percentage: 6 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "ev-review-1",

        reviewerName: "Aakash",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Charges both my phone and MacBook perfectly during travel. Charging speed is genuinely impressive.",

        postedDateAgo: "2 months ago",

        userUploadedMedia: [
          "/reviews/ambrane-review-1.png",
        ],
      },

      {
        id: "ev-review-2",

        reviewerName: "Vivek",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Build quality feels premium and RGB light looks surprisingly good at night while driving.",

        postedDateAgo: "4 months ago",
      },
    ],
  },
},

{
  id: "ev-prod-2",

  title:
    "KEYCEPT Metal Key Cover Compatible for MG Comet EV Electric 3 Button Smart Key with Keychain",

  brand: "KEYCEPT",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/ev/keycept-cover-main.png",

  galleryImages: [
    "/products/ev/keycept-cover-1.png",
    "/products/ev/keycept-cover-2.png",
    "/products/ev/keycept-cover-3.png",
    "/products/ev/keycept-cover-4.png",
  ],

  discountText: "-12%",

  ratingData: {
    averageRating: 4.5,

    totalReviewsCount: 978,

    boughtPastMonthText: "1K+ bought in past month",

    soldLastWeekText: "Sold over 192 times last week",
  },

  attributes: [
    {
      label: "Material",
      value: "Premium Metal Alloy Construction",
    },

    {
      label: "Compatibility",
      value: "MG Comet EV Smart Key",
    },

    {
      label: "Button Support",
      value: "3 Button Smart Key Layout",
    },

    {
      label: "Accessory",
      value: "Metal Keychain Included",
    },

    {
      label: "Protection",
      value: "Scratch and Impact Resistant Cover",
    },
  ],

  aboutSections: [
    {
      heading: "Premium Metal Protection",

      content:
        "Protects smart key from scratches, accidental drops and long-term external wear during daily use.",
    },

    {
      heading: "Perfect MG Comet EV Fit",

      content:
        "Precision cut design matches exact MG Comet EV 3-button smart key dimensions without blocking buttons.",
    },

    {
      heading: "Stylish Premium Finish",

      content:
        "Metallic finish upgrades the appearance of vehicle smart key while improving grip and durability.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Premium Build",
    "Scratch Protection",
    "Easy Replacement",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 69 },
      { stars: 4, percentage: 20 },
      { stars: 3, percentage: 6 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "ev-review-3",

        reviewerName: "Rohan",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Fits perfectly on my MG Comet EV key. Material quality feels solid and premium in hand.",

        postedDateAgo: "1 month ago",

        userUploadedMedia: [
          "/reviews/keycept-review-1.png",
        ],
      },

      {
        id: "ev-review-4",

        reviewerName: "Kunal",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Good protection for smart key and the included keychain is a nice premium addition.",

        postedDateAgo: "3 months ago",
      },
    ],
  },
},

{
  id: "ev-prod-3",

  title:
    "SNA Universal EV Throttle for 24v 36v 48v 60v 72V Compatible with Electric Scooter Ebike E-Cycles",

  brand: "SNA",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/ev/sna-throttle-main.png",

  galleryImages: [
    "/products/ev/sna-throttle-1.png",
    "/products/ev/sna-throttle-2.png",
    "/products/ev/sna-throttle-3.png",
    "/products/ev/sna-throttle-4.png",
  ],

  discountText: "-15%",

  ratingData: {
    averageRating: 4.5,

    totalReviewsCount: 842,

    boughtPastMonthText: "1K+ bought in past month",

    soldLastWeekText: "Sold over 176 times last week",
  },

  attributes: [
    {
      label: "Voltage Support",
      value: "24V / 36V / 48V / 60V / 72V",
    },

    {
      label: "Compatibility",
      value: "Electric Scooter, E-Bike, E-Cycle",
    },

    {
      label: "Throttle Type",
      value: "Universal Handlebar Throttle",
    },

    {
      label: "Control",
      value: "Variable Speed Control System",
    },

    {
      label: "Installation",
      value: "Plug and Connect Design",
    },
  ],

  aboutSections: [
    {
      heading: "Universal EV Compatibility",

      content:
        "Supports multiple electric scooter and electric bike voltage systems without requiring controller modifications.",
    },

    {
      heading: "Precise Speed Control",

      content:
        "Provides smooth acceleration control with responsive throttle input for better riding stability.",
    },

    {
      heading: "Easy Replacement Setup",

      content:
        "Designed for quick installation when replacing damaged or worn-out throttle systems.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Universal Fit",
    "Easy Installation",
    "6 Month Warranty",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 68 },
      { stars: 4, percentage: 19 },
      { stars: 3, percentage: 7 },
      { stars: 2, percentage: 4 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "ev-review-5",

        reviewerName: "Manish",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Worked perfectly on my electric scooter and throttle response feels smooth without delay.",

        postedDateAgo: "2 months ago",

        userUploadedMedia: [
          "/reviews/sna-review-1.png",
        ],
      },

      {
        id: "ev-review-6",

        reviewerName: "Tarun",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Good replacement throttle for ebike repair. Wiring matched without compatibility issues.",

        postedDateAgo: "5 months ago",
      },
    ],
  },
},

{
  id: "ev-prod-4",

  title:
    "Ramanta New EV V.I.D.A VX2 Foot Mat | VX2 Plus Accessories | Anti Slip Back Floor Mat |",

  brand: "Ramanta",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/ev/ramanta-mat-main.png",

  galleryImages: [
    "/products/ev/ramanta-mat-1.png",
    "/products/ev/ramanta-mat-2.png",
    "/products/ev/ramanta-mat-3.png",
    "/products/ev/ramanta-mat-4.png",
  ],

  discountText: "-11%",

  ratingData: {
    averageRating: 4.5,

    totalReviewsCount: 732,

    boughtPastMonthText: "1K+ bought in past month",

    soldLastWeekText: "Sold over 139 times last week",
  },

  attributes: [
    {
      label: "Vehicle Support",
      value: "V.I.D.A VX2 / VX2 Plus",
    },

    {
      label: "Material",
      value: "Premium Rubber Composite",
    },

    {
      label: "Grip",
      value: "Anti Slip Surface Texture",
    },

    {
      label: "Protection",
      value: "Dust and Water Resistant Floor Coverage",
    },

    {
      label: "Fit",
      value: "Custom Vehicle Floor Fit",
    },
  ],

  aboutSections: [
    {
      heading: "Custom VX2 Fit",

      content:
        "Designed specifically for V.I.D.A VX2 electric vehicle floor dimensions ensuring complete edge coverage.",
    },

    {
      heading: "Anti Slip Protection",

      content:
        "Provides stable foot grip during riding while preventing sliding during wet weather conditions.",
    },

    {
      heading: "Easy Cleaning Material",

      content:
        "Durable surface allows quick cleaning of mud, dust and moisture after everyday commuting.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Custom Fit Design",
    "Water Resistant",
    "Durable Material",
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
        id: "ev-review-7",

        reviewerName: "Pratik",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Perfect fitting on VX2 Plus. Grip quality is excellent and cleaning takes almost no effort.",

        postedDateAgo: "1 month ago",

        userUploadedMedia: [
          "/reviews/ramanta-review-1.png",
        ],
      },

      {
        id: "ev-review-8",

        reviewerName: "Aditya",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Material feels durable and anti-slip backing works well during rainy season usage.",

        postedDateAgo: "4 months ago",
      },
    ],
  },
},

{
  id: "ev-prod-5",

  title:
    "Audio Wheels 130W Dual USB Car Charger – 100W Power Delivery & 30W Fast Charging Mini Adapter",

  brand: "Audio Wheels",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/ev/audio-wheels-main.png",

  galleryImages: [
    "/products/ev/audio-wheels-1.png",
    "/products/ev/audio-wheels-2.png",
    "/products/ev/audio-wheels-3.png",
    "/products/ev/audio-wheels-4.png",
  ],

  discountText: "-19%",

  ratingData: {
    averageRating: 4.5,

    totalReviewsCount: 1186,

    boughtPastMonthText: "1K+ bought in past month",

    soldLastWeekText: "Sold over 241 times last week",
  },

  attributes: [
    {
      label: "Total Output",
      value: "130W Fast Charging",
    },

    {
      label: "USB-C PD",
      value: "100W Power Delivery",
    },

    {
      label: "USB-A",
      value: "30W Fast Charging",
    },

    {
      label: "Design",
      value: "Compact Mini Car Adapter",
    },

    {
      label: "Device Support",
      value: "Phones, Tablets, Laptops",
    },
  ],

  aboutSections: [
    {
      heading: "High Power Charging",

      content:
        "130W total output supports fast charging for power-hungry laptops and modern smartphones simultaneously.",
    },

    {
      heading: "Dual Port Design",

      content:
        "Dedicated USB-C PD and USB-A charging ports optimize charging speed across multiple device categories.",
    },

    {
      heading: "Compact Travel Design",

      content:
        "Mini form factor fits neatly into vehicle charging sockets without occupying unnecessary dashboard space.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Fast Charging Support",
    "Compact Design",
    "1 Year Warranty",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 74 },
      { stars: 4, percentage: 15 },
      { stars: 3, percentage: 6 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "ev-review-9",

        reviewerName: "Shivam",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Charges my laptop surprisingly fast inside car. Very useful during long work travel days.",

        postedDateAgo: "2 months ago",

        userUploadedMedia: [
          "/reviews/audio-review-1.png",
        ],
      },

      {
        id: "ev-review-10",

        reviewerName: "Rajat",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Compact size and very powerful charging output. Works exactly as advertised.",

        postedDateAgo: "3 months ago",
      },
    ],
  },
},

{
  id: "ev-prod-6",

  title:
    "SANPU EV TECH DC to DC Converter for Electric Bike | Input 36v-84v Output 12v 10Amp",

  brand: "SANPU EV TECH",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/ev/sanpu-converter-main.png",

  galleryImages: [
    "/products/ev/sanpu-converter-1.png",
    "/products/ev/sanpu-converter-2.png",
    "/products/ev/sanpu-converter-3.png",
    "/products/ev/sanpu-converter-4.png",
  ],

  discountText: "-16%",

  ratingData: {
    averageRating: 4.5,

    totalReviewsCount: 694,

    boughtPastMonthText: "1K+ bought in past month",

    soldLastWeekText: "Sold over 128 times last week",
  },

  attributes: [
    {
      label: "Input Voltage",
      value: "36V – 84V DC Input",
    },

    {
      label: "Output Voltage",
      value: "12V Stable Output",
    },

    {
      label: "Output Current",
      value: "10 Amp Output Capacity",
    },

    {
      label: "Application",
      value: "Electric Bike Power Conversion",
    },

    {
      label: "Protection",
      value: "Overload and Heat Protection",
    },
  ],

  aboutSections: [
    {
      heading: "Stable Voltage Conversion",

      content:
        "Efficiently converts high voltage EV battery current into stable 12V output for connected low-voltage systems.",
    },

    {
      heading: "Electric Bike Integration",

      content:
        "Designed for powering accessories and auxiliary electrical systems in electric bike configurations.",
    },

    {
      heading: "Built-In Safety Protection",

      content:
        "Internal overload and thermal protection improves durability under continuous operational load.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Electrical Protection",
    "Heat Resistant Design",
    "6 Month Warranty",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 70 },
      { stars: 4, percentage: 18 },
      { stars: 3, percentage: 7 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "ev-review-11",

        reviewerName: "Lokesh",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Very stable voltage output and worked perfectly for my electric bike accessory setup.",

        postedDateAgo: "2 months ago",

        userUploadedMedia: [
          "/reviews/sanpu-review-1.png",
        ],
      },

      {
        id: "ev-review-12",

        reviewerName: "Rishi",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Good converter quality and no overheating issues even after extended continuous usage.",

        postedDateAgo: "5 months ago",
      },
    ],
  },
},

{
  id: "ev-prod-7",

  title:
    "GFX TPV Premium Life Long Car Foot Mats Compatible with 6 Seater Manual Safari 2020",

  brand: "GFX",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/ev/gfx-mats-main.png",

  galleryImages: [
    "/products/ev/gfx-mats-1.png",
    "/products/ev/gfx-mats-2.png",
    "/products/ev/gfx-mats-3.png",
    "/products/ev/gfx-mats-4.png",
  ],

  discountText: "-13%",

  ratingData: {
    averageRating: 4.5,

    totalReviewsCount: 1032,

    boughtPastMonthText: "1K+ bought in past month",

    soldLastWeekText: "Sold over 201 times last week",
  },

  attributes: [
    {
      label: "Vehicle Support",
      value: "Safari 2020 6 Seater Manual",
    },

    {
      label: "Material",
      value: "Premium TPV Polymer Material",
    },

    {
      label: "Durability",
      value: "Life Long Heavy Duty Construction",
    },

    {
      label: "Surface Grip",
      value: "Anti Slip Floor Grip Design",
    },

    {
      label: "Protection",
      value: "Dust, Mud and Water Protection",
    },
  ],

  aboutSections: [
    {
      heading: "Vehicle Specific Design",

      content:
        "Custom engineered floor mat design ensures accurate fitting for Safari 2020 six-seater manual configuration.",
    },

    {
      heading: "Premium TPV Material",

      content:
        "Long-life thermoplastic vulcanized material resists wear, cracking and long-term floor damage.",
    },

    {
      heading: "All Weather Protection",

      content:
        "Protects cabin flooring against mud, dust, water spills and everyday footwear contamination.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Heavy Duty Material",
    "Custom Fit Design",
    "Long Life Durability",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 72 },
      { stars: 4, percentage: 17 },
      { stars: 3, percentage: 6 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "ev-review-13",

        reviewerName: "Anurag",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Excellent fitting for Safari interior. Material feels premium and cabin cleaning became easier.",

        postedDateAgo: "1 month ago",

        userUploadedMedia: [
          "/reviews/gfx-review-1.png",
        ],
      },

      {
        id: "ev-review-14",

        reviewerName: "Dhruv",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Strong material quality and covers floor area completely without movement during driving.",

        postedDateAgo: "4 months ago",
      },
    ],
  },
},

{
  id: "ev-prod-8",

  title:
    "Type 2 EV Charger Adapter Gun | Replacement Connector with Open-End Cable 32A– 22 kW",

  brand: "Generic EV Tech",

  price: 3599,

  currencySymbol: "$",

  imagePath: "/products/ev/type2-charger-main.png",

  galleryImages: [
    "/products/ev/type2-charger-1.png",
    "/products/ev/type2-charger-2.png",
    "/products/ev/type2-charger-3.png",
    "/products/ev/type2-charger-4.png",
  ],

  discountText: "-21%",

  ratingData: {
    averageRating: 4.6,

    totalReviewsCount: 1584,

    boughtPastMonthText: "1K+ bought in past month",

    soldLastWeekText: "Sold over 356 times last week",
  },

  attributes: [
    {
      label: "Connector Type",
      value: "Type 2 EV Charging Connector",
    },

    {
      label: "Current Capacity",
      value: "32 Amp Charging Support",
    },

    {
      label: "Power Rating",
      value: "22 kW Fast Charging",
    },

    {
      label: "Cable Type",
      value: "Open-End Replacement Cable",
    },

    {
      label: "Usage",
      value: "EV Charger Replacement and Installation",
    },
  ],

  aboutSections: [
    {
      heading: "Fast EV Charging Support",

      content:
        "Supports high-power electric vehicle charging up to 22kW for compatible EV charging infrastructure systems.",
    },

    {
      heading: "Replacement Connector Design",

      content:
        "Ideal replacement charging gun connector for repairing damaged EV charging cables and station hardware.",
    },

    {
      heading: "Heavy Duty Construction",

      content:
        "Built using industrial-grade insulated materials designed for continuous high current EV charging operation.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Fast EV Charging",
    "Heavy Duty Build",
    "1 Year Warranty",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 77 },
      { stars: 4, percentage: 13 },
      { stars: 3, percentage: 5 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "ev-review-15",

        reviewerName: "Saurabh",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Connector quality is excellent and charging performance remains stable even under heavy load usage.",

        postedDateAgo: "1 month ago",

        userUploadedMedia: [
          "/reviews/type2-review-1.png",
        ],
      },

      {
        id: "ev-review-16",

        reviewerName: "Nakul",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Very solid build quality. Worked perfectly while replacing damaged charging station connector.",

        postedDateAgo: "3 months ago",
      },
    ],
  },
},

{
  id: "ev-prod-9",

  title:
    "PABLA High-End Car Center Armrest with Spacious Storage Compartment compatible",

  brand: "PABLA",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/ev/pabla-armrest-main.png",

  galleryImages: [
    "/products/ev/pabla-armrest-1.png",
    "/products/ev/pabla-armrest-2.png",
    "/products/ev/pabla-armrest-3.png",
    "/products/ev/pabla-armrest-4.png",
  ],

  discountText: "-14%",

  ratingData: {
    averageRating: 4.5,

    totalReviewsCount: 926,

    boughtPastMonthText: "1K+ bought in past month",

    soldLastWeekText: "Sold over 183 times last week",
  },

  attributes: [
    {
      label: "Accessory Type",
      value: "Car Center Armrest Console",
    },

    {
      label: "Storage",
      value: "Spacious Internal Storage Compartment",
    },

    {
      label: "Material",
      value: "Premium Leather and ABS Construction",
    },

    {
      label: "Comfort",
      value: "Soft Padded Arm Support",
    },

    {
      label: "Installation",
      value: "Vehicle Compatible Easy Fit Design",
    },
  ],

  aboutSections: [
    {
      heading: "Enhanced Driving Comfort",

      content:
        "Provides comfortable padded arm support during long drives while reducing hand fatigue and improving posture.",
    },

    {
      heading: "Extra Storage Space",

      content:
        "Integrated internal compartment allows organized storage for keys, chargers, wallets and small accessories.",
    },

    {
      heading: "Premium Cabin Upgrade",

      content:
        "Improves vehicle interior appearance while adding practical storage and ergonomic comfort benefits.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Premium Build Quality",
    "Easy Installation",
    "Durable Finish",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 70 },
      { stars: 4, percentage: 18 },
      { stars: 3, percentage: 7 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "ev-review-17",

        reviewerName: "Kartik",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Very comfortable arm support and storage compartment is larger than expected. Looks premium inside cabin.",

        postedDateAgo: "2 months ago",

        userUploadedMedia: [
          "/reviews/pabla-review-1.png",
        ],
      },

      {
        id: "ev-review-18",

        reviewerName: "Ayush",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Installation was simple and overall finish quality matches expensive aftermarket accessories.",

        postedDateAgo: "4 months ago",
      },
    ],
  },
},
]
},

// Category 3  car exterior completed
{
id: "cat-3",
categoryName: "Exterior Accessories",
slug: "exterior-accessories",

items: [
// Product-1
{
  id: "cover-tata-safari",

  productHeading: "Car Cover for Tata Safari",

  title:
    "NEODRIFT SilverTech Car Cover for Tata Safari (100% Water-Resistant, All Weather Protection, Tailored Fit, Precision-Fit & Breathable Fabric) (Silver) (2021–2026)",

  brand:
    "Protect your Tata Safari (2021–2026) with the NEODRIFT SilverTech Car Cover, designed for a precise, vehicle-specific fit.",

  price: 2704,

  currencySymbol: "₹",

  imagePath: "/products/exterior/car-cover-silver-main.png",

  galleryImages: [
    "/Images/exterior/tata-safari-cover/car-cover-1.png",
    "/Images/exterior/tata-safari-cover/car-cover-2.png",
    "/Images/exterior/tata-safari-cover/car-cover-3.png",
    "/Images/exterior/tata-safari-cover/car-cover-4.png",
  ],

  discountText: "18%",

  ratingData: {
    averageRating: 4.0,
    totalReviewsCount: 2223,
    boughtPastMonthText: "2223 reviews",
    soldLastWeekText: "Sold over 2223 times",
  },

  attributes: [
    {
      label: "Feature",
      value: "Water Resistant",
    },
    {
      label: "Feature",
      value: "All Weather Protection",
    },
    {
      label: "Feature",
      value: "Tailored Fit",
    },
    {
      label: "Feature",
      value: "Breathable Fabric",
    },
  ],

  aboutSections: [
    {
      heading: "Custom Fit for Tata Safari",
      content:
        "Precision-tailored for Tata Safari (2021–2026) with dedicated mirror pockets and complete body coverage for maximum protection.",
    },
    {
      heading: "100% Water Resistant & All Weather Protection",
      content:
        "Advanced breathable fabric protects against rain, sunlight, dust, wind and harsh weather while preventing moisture buildup.",
    },
    {
      heading: "Scratch & UV Protection",
      content:
        "Soft inner fabric prevents scratches while UV-resistant outer material protects your vehicle's paint from fading and oxidation.",
    },
    {
      heading: "Secure Windproof Design",
      content:
        "Elastic hems ensure a tight grip, keeping the cover securely in place during windy conditions.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 72 },
      { stars: 4, percentage: 18 },
      { stars: 3, percentage: 6 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "cover-review-1",
        reviewerName: "Amit",
        rating: 5,
        isVerifiedBuyer: true,
        commentText:
          "Perfect fit for my Tata Safari. Excellent quality and completely waterproof.",
        postedDateAgo: "1 month ago",
      },
      {
        id: "cover-review-2",
        reviewerName: "Rakesh",
        rating: 4,
        isVerifiedBuyer: true,
        commentText:
          "Good material, easy to fold and store. Fits perfectly with mirror pockets.",
        postedDateAgo: "2 months ago",
      },
    ],
  },
},
// Product-2
{
  id: "cover-maruti-dzire",

  productHeading: "Cover for Maruti Suzuki Dzire",

  title:
    "PROTEGO All Weather Protection N-Series Car Cover for Maruti Suzuki Dzire | Anti Dust, 100% Waterproof, Heat Resistant, UV Proof | Triple Stitched Elastic Grip with Mirror Pocket (Blue)",

  brand:
    "Keep your Maruti Suzuki Dzire protected in every season with the PROTEGO N-Series Car Cover.",

  price: 2641,

  currencySymbol: "₹",

  imagePath: "/products/exterior/suzuki-car-cover-main.png",

  galleryImages: [
    "/Images/exterior/suzuki-cover/suzuki-car-cover-1.png",
    "/Images/exterior/suzuki-cover/suzuki-car-cover-2.png",
    "/Images/exterior/suzuki-cover/suzuki-car-cover-3.png",
    "/Images/exterior/suzuki-cover/suzuki-car-cover-4.png",
  ],

  discountText: "18%",

  ratingData: {
    averageRating: 4.2,
    totalReviewsCount: 777,
    boughtPastMonthText: "777 reviews",
    soldLastWeekText: "Sold over 777 times",
  },

  attributes: [
    {
      label: "Feature",
      value: "Anti Dust",
    },
    {
      label: "Feature",
      value: "100% Waterproof",
    },
    {
      label: "Feature",
      value: "Heat Resistant",
    },
    {
      label: "Feature",
      value: "UV Proof",
    },
  ],

  aboutSections: [
    {
      heading: "Durable Full Body Protection",
      content:
        "Made from strong, breathable polypropylene fabric that provides complete body coverage and long-lasting protection in all weather conditions.",
    },
    {
      heading: "Premium Features",
      content:
        "Includes triple-stitched elastic grip, front and rear tags, dual mirror pockets, and a secure grommet locking system for a snug fit.",
    },
    {
      heading: "High Tear Resistance",
      content:
        "Lightweight yet durable material offers excellent tear resistance while protecting against dust, scratches, bird droppings, and harsh temperatures.",
    },
    {
      heading: "Easy to Install & Store",
      content:
        "Foldable design with an included storage bag makes installation, removal, and storage quick and convenient.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 75 },
      { stars: 4, percentage: 16 },
      { stars: 3, percentage: 5 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "dzire-review-1",
        reviewerName: "Kiran",
        rating: 5,
        isVerifiedBuyer: true,
        commentText:
          "Excellent fitting and waterproof quality. The mirror pockets fit perfectly.",
        postedDateAgo: "3 weeks ago",
      },
      {
        id: "dzire-review-2",
        reviewerName: "Manoj",
        rating: 4,
        isVerifiedBuyer: true,
        commentText:
          "Good material with strong stitching. Easy to install and protects well from dust and sunlight.",
        postedDateAgo: "2 months ago",
      },
    ],
  },
},
// Product-3
{
  id: "brush-car-glass-cleaner",

  productHeading: "Brush & Car Glass Cleaner",

  title:
    "Oil Film Cleaning Brush & Car Glass Cleaner Anti-Fog Spray | Windshield Defogger & Stain Remover for Interior & Exterior | Anti-Mist, Oil Stain Remover for Car Windows, Mirrors & Glass (Combo Pack)",

  brand:
    "Keep your car windows crystal clear with the Oil Film Cleaning Brush & Anti-Fog Glass Cleaner Combo Pack.",

  price: 280,

  currencySymbol: "₹",

  imagePath: "/products/exterior/brush-car-glass-cleaner-main.png",

  galleryImages: [
    "/Images/exterior/car-cleaner-brush/brush-cleaner-1.png",
    "/Images/exterior/car-cleaner-brush/brush-cleaner-2.png",
    "/Images/exterior/car-cleaner-brush/brush-cleaner-3.png",
    "/Images/exterior/car-cleaner-brush/brush-cleaner-4.png",
  ],

  discountText: "18%",

  ratingData: {
    averageRating: 5.0,
    totalReviewsCount: 100,
    boughtPastMonthText: "100+ reviews",
    soldLastWeekText: "Sold over 100+ times",
  },

  attributes: [
    {
      label: "Feature",
      value: "Anti Fog Spray",
    },
    {
      label: "Feature",
      value: "Anti Mist",
    },
    {
      label: "Feature",
      value: "Oil Stain Remover",
    },
    {
      label: "Feature",
      value: "Windshield Defogger",
    },
  ],

  aboutSections: [
    {
      heading: "Dual-Action Cleaning Kit",
      content:
        "Combines an oil-film cleaning brush with an anti-fog spray to remove buildup while helping maintain clear visibility during everyday driving.",
    },
    {
      heading: "Scratch-Free Glass Cleaning",
      content:
        "Soft cleaning surface removes oil film, dust, stains, and road residue from windshields, mirrors, and windows without scratching.",
    },
    {
      heading: "Comfortable Ergonomic Handle",
      content:
        "Designed with a comfortable grip that allows better control while cleaning large windshields, mirrors, and difficult corners.",
    },
    {
      heading: "Portable & Easy to Store",
      content:
        "Compact design fits easily inside your glove box or car door, making it convenient for regular vehicle maintenance and long journeys.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 90 },
      { stars: 4, percentage: 7 },
      { stars: 3, percentage: 2 },
      { stars: 2, percentage: 1 },
      { stars: 1, percentage: 0 },
    ],

    userFeed: [
      {
        id: "glass-review-1",
        reviewerName: "Rohit",
        rating: 5,
        isVerifiedBuyer: true,
        commentText:
          "Very effective for removing oil film. The anti-fog spray works great during rainy mornings.",
        postedDateAgo: "3 weeks ago",
      },
      {
        id: "glass-review-2",
        reviewerName: "Vikas",
        rating: 5,
        isVerifiedBuyer: true,
        commentText:
          "Easy to use, compact and cleans the windshield perfectly without leaving streaks.",
        postedDateAgo: "1 month ago",
      },
    ],
  },
},
// Product-4
{
  id: "premium-liquid-shampoo",

  productHeading: "Premium Liquid Shampoo",

  title:
    "SOFTSPUN Microfiber 1Ltr Car & Bike pH Neutral Premium Liquid Shampoo + 1700 GSM Double Side Microfiber Glove | Extra Suds | Foam Cannon & Bucket Compatible",

  brand:
    "Premium pH-neutral car & bike shampoo combo with an ultra-absorbent 1700 GSM microfiber wash glove for a scratch-free, deep-clean finish.",

  price: 599,

  currencySymbol: "₹",

  imagePath: "/products/exterior/premium-liquid-shampoo-main.png",

  galleryImages: [
    "/Images/exterior/premium-liquid-shampoo/premium-liquid-shampoo-1.png",
    "/Images/exterior/premium-liquid-shampoo/premium-liquid-shampoo-2.png",
    "/Images/exterior/premium-liquid-shampoo/premium-liquid-shampoo-3.png",
    "/Images/exterior/premium-liquid-shampoo/premium-liquid-shampoo-4.png",
  ],

  discountText: "18%",

  ratingData: {
    averageRating: 4.0,
    totalReviewsCount: 1000,
    boughtPastMonthText: "1k reviews",
    soldLastWeekText: "Sold over 1k times",
  },

  attributes: [
    {
      label: "Feature",
      value: "pH Neutral Formula",
    },
    {
      label: "Feature",
      value: "Extra Suds Cleaning",
    },
    {
      label: "Feature",
      value: "1700 GSM Microfiber Glove",
    },
    {
      label: "Feature",
      value: "Foam Cannon Compatible",
    },
  ],

  aboutSections: [
    {
      heading: "Premium Cleaning Formula",
      content:
        "Produces rich foam that loosens stubborn dirt and grime while preparing your vehicle for a deep and safe wash.",
    },
    {
      heading: "pH Neutral Protection",
      content:
        "Safe for all paint finishes and coatings without damaging your car or bike's exterior during regular use.",
    },
    {
      heading: "Works with Multiple Washing Methods",
      content:
        "Compatible with bucket wash, foam cannon, foam gun and pressure washer for convenient cleaning.",
    },
    {
      heading: "Includes Premium Microfiber Glove",
      content:
        "Comes with an ultra-soft 1700 GSM double-sided microfiber glove for scratch-free washing and excellent water absorption.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 70 },
      { stars: 4, percentage: 20 },
      { stars: 3, percentage: 6 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "shampoo-review-1",
        reviewerName: "Ajay",
        rating: 5,
        isVerifiedBuyer: true,
        commentText:
          "Creates rich foam and leaves my car looking shiny without affecting the paint.",
        postedDateAgo: "2 weeks ago",
      },
      {
        id: "shampoo-review-2",
        reviewerName: "Sandeep",
        rating: 4,
        isVerifiedBuyer: true,
        commentText:
          "Excellent shampoo with a soft microfiber glove. Great value for money.",
        postedDateAgo: "1 month ago",
      },
    ],
  },
},
// Product-5
{
  id: "car-door-reflective",

  productHeading: "Car Door Reflective",

  title:
    "Careflection Car Door Reflective Open Warning Safety Sticker | Self-Adhesive | High Visibility | Universal Fit (Pack of 4)",

  brand:
    "Enhance road safety with this self-adhesive reflective car door warning sticker that improves visibility at night and in low-light conditions.",

  price: 180,

  currencySymbol: "₹",

  imagePath: "/products/exterior/car-door-reflective-main.png",

  galleryImages: [
    "/Images/exterior/car-door-reflective/car-door-reflective-1.png",
    "/Images/exterior/car-door-reflective/car-door-reflective-2.png",
    "/Images/exterior/car-door-reflective/car-door-reflective-3.png",
    "/Images/exterior/car-door-reflective/car-door-reflective-4.png",
  ],

  discountText: "18%",

  ratingData: {
    averageRating: 3.1,
    totalReviewsCount: 100,
    boughtPastMonthText: "100 reviews",
    soldLastWeekText: "Sold over 100 times",
  },

  attributes: [
    {
      label: "Feature",
      value: "Enhanced Safety",
    },
    {
      label: "Feature",
      value: "Strong Self-Adhesive",
    },
    {
      label: "Feature",
      value: "Durable Material",
    },
    {
      label: "Feature",
      value: "Universal Fit",
    },
  ],

  aboutSections: [
    {
      heading: "Improves Night Visibility",
      content:
        "Highly reflective stickers improve the visibility of open car doors during night driving and low-light conditions.",
    },
    {
      heading: "Premium Reflective Material",
      content:
        "Made with durable prism reflective material that offers excellent reflection, weather resistance and scratch protection.",
    },
    {
      heading: "Easy Installation",
      content:
        "Simply clean the surface, peel and stick. Strong adhesive keeps the sticker securely attached while remaining easy to remove.",
    },
    {
      heading: "Universal Vehicle Compatibility",
      content:
        "Suitable for all types of cars and includes four reflective stickers to cover every door for enhanced safety.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 50 },
      { stars: 4, percentage: 25 },
      { stars: 3, percentage: 15 },
      { stars: 2, percentage: 5 },
      { stars: 1, percentage: 5 },
    ],

    userFeed: [
      {
        id: "reflective-review-1",
        reviewerName: "Praveen",
        rating: 4,
        isVerifiedBuyer: true,
        commentText:
          "Easy to apply and very reflective at night. Good safety accessory for every car.",
        postedDateAgo: "3 weeks ago",
      },
      {
        id: "reflective-review-2",
        reviewerName: "Naveen",
        rating: 3,
        isVerifiedBuyer: true,
        commentText:
          "Adhesive is good and installation is simple. Visibility has improved during night parking.",
        postedDateAgo: "2 months ago",
      },
    ],
  },
},


]
},

// Category 4
{
id: "cat-4",
categoryName: "Emergency & Utility  Products",
slug: "emergency-utility-products",

items: [

{
  id: "emu-prod-1",

  title:
    "Eveready Pocketlite DL100, Rechargeable 1W LED Torch Cum Emergency 2W Sidelight, Type-B",

  brand: "Eveready",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/emergency/eveready-pocketlite-main.png",

  galleryImages: [
    "/products/emergency/eveready-pocketlite-1.png",
    "/products/emergency/eveready-pocketlite-2.png",
    "/products/emergency/eveready-pocketlite-3.png",
    "/products/emergency/eveready-pocketlite-4.png",
  ],

  discountText: "-13%",

  ratingData: {
    averageRating: 4.5,

    totalReviewsCount: 1387,

    boughtPastMonthText: "1K+ bought in past month",

    soldLastWeekText: "Sold over 287 times last week",
  },

  attributes: [
    {
      label: "Main Light",
      value: "1W LED Torch Beam",
    },

    {
      label: "Side Light",
      value: "2W Emergency Side Light",
    },

    {
      label: "Charging",
      value: "Rechargeable Battery with Type-B Port",
    },

    {
      label: "Usage",
      value: "Emergency Lighting and Portable Torch",
    },

    {
      label: "Battery Backup",
      value: "Long Duration Portable Runtime",
    },
  ],

  aboutSections: [
    {
      heading: "Dual Light Utility",

      content:
        "Functions both as focused LED torch and wide emergency sidelight for multiple lighting situations.",
    },

    {
      heading: "Rechargeable Convenience",

      content:
        "Built-in rechargeable battery eliminates constant battery replacement and supports repeated daily use.",
    },

    {
      heading: "Emergency Ready Design",

      content:
        "Useful during power cuts, vehicle breakdowns, roadside emergencies and outdoor night usage.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Rechargeable Battery",
    "Emergency Ready",
    "Portable Design",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 74 },
      { stars: 4, percentage: 15 },
      { stars: 3, percentage: 6 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "emu-review-1",

        reviewerName: "Rohan",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Very bright torch output and emergency side light becomes extremely useful during power cuts.",

        postedDateAgo: "2 months ago",

        userUploadedMedia: [
          "/reviews/eveready-review-1.png",
        ],
      },

      {
        id: "emu-review-2",

        reviewerName: "Adarsh",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Battery backup is solid and build quality feels much better than normal emergency torches.",

        postedDateAgo: "4 months ago",
      },
    ],
  },
},

{
  id: "emu-prod-2",

  title:
    "Car Safety Window Hammer and Seat Belt Cutter with Holder",

  brand: "SafeDrive",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/emergency/window-hammer-main.png",

  galleryImages: [
    "/products/emergency/window-hammer-1.png",
    "/products/emergency/window-hammer-2.png",
    "/products/emergency/window-hammer-3.png",
    "/products/emergency/window-hammer-4.png",
  ],

  discountText: "-11%",

  ratingData: {
    averageRating: 4.5,

    totalReviewsCount: 954,

    boughtPastMonthText: "1K+ bought in past month",

    soldLastWeekText: "Sold over 171 times last week",
  },

  attributes: [
    {
      label: "Primary Function",
      value: "Emergency Glass Breaking Tool",
    },

    {
      label: "Secondary Function",
      value: "Integrated Seat Belt Cutter",
    },

    {
      label: "Material",
      value: "High Strength Steel Impact Head",
    },

    {
      label: "Mounting",
      value: "Storage Holder Included",
    },

    {
      label: "Use Case",
      value: "Vehicle Emergency Escape Tool",
    },
  ],

  aboutSections: [
    {
      heading: "Emergency Escape Tool",

      content:
        "Designed to break vehicle side windows quickly during emergency situations requiring immediate exit.",
    },

    {
      heading: "Integrated Seat Belt Cutter",

      content:
        "Sharp protected blade allows rapid cutting of jammed seat belts after vehicle accidents.",
    },

    {
      heading: "Vehicle Safety Essential",

      content:
        "Compact emergency rescue tool recommended for storing inside every vehicle for roadside safety preparation.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Emergency Safety Tool",
    "Vehicle Rescue Utility",
    "Compact Storage Design",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 72 },
      { stars: 4, percentage: 17 },
      { stars: 3, percentage: 6 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "emu-review-3",

        reviewerName: "Kunal",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Feels strong and well built. Good product to keep inside car for emergency preparedness.",

        postedDateAgo: "1 month ago",

        userUploadedMedia: [
          "/reviews/windowhammer-review-1.png",
        ],
      },

      {
        id: "emu-review-4",

        reviewerName: "Arjun",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Hopefully never need to use it, but build quality inspires confidence and holder keeps it secure.",

        postedDateAgo: "3 months ago",
      },
    ],
  },
},

{
  id: "emu-prod-3",

  title:
    "NEU Medical Doctor Pocket LED Pen Torch with Knee Hammer - High Lux Intensity Torch & Heavy",

  brand: "NEU Medical",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/emergency/neu-medical-main.png",

  galleryImages: [
    "/products/emergency/neu-medical-1.png",
    "/products/emergency/neu-medical-2.png",
    "/products/emergency/neu-medical-3.png",
    "/products/emergency/neu-medical-4.png",
  ],

  discountText: "-12%",

  ratingData: {
    averageRating: 4.5,

    totalReviewsCount: 812,

    boughtPastMonthText: "1K+ bought in past month",

    soldLastWeekText: "Sold over 149 times last week",
  },

  attributes: [
    {
      label: "Light Type",
      value: "High Lux LED Pen Torch",
    },

    {
      label: "Accessory",
      value: "Integrated Reflex Knee Hammer",
    },

    {
      label: "Material",
      value: "Heavy Duty Metal Body",
    },

    {
      label: "Usage",
      value: "Medical Examination and Emergency Inspection",
    },

    {
      label: "Portability",
      value: "Pocket Carry Compact Design",
    },
  ],

  aboutSections: [
    {
      heading: "Professional Medical Utility",

      content:
        "Designed for diagnostic examination usage requiring focused bright LED light and reflex testing support.",
    },

    {
      heading: "High Intensity Beam",

      content:
        "Concentrated LED output provides clear inspection visibility in low light environments and emergency situations.",
    },

    {
      heading: "Portable Pocket Design",

      content:
        "Compact lightweight design fits easily inside coat pocket, emergency kit or portable utility bag.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "High Intensity LED",
    "Portable Pocket Size",
    "Heavy Duty Build",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 71 },
      { stars: 4, percentage: 17 },
      { stars: 3, percentage: 7 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "emu-review-5",

        reviewerName: "Dev",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Torch brightness is excellent and metal construction feels solid for regular emergency kit usage.",

        postedDateAgo: "2 months ago",

        userUploadedMedia: [
          "/reviews/neu-review-1.png",
        ],
      },

      {
        id: "emu-review-6",

        reviewerName: "Pranav",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Compact size and useful multi-purpose tool for carrying inside professional work bag.",

        postedDateAgo: "4 months ago",
      },
    ],
  },
},

{
  id: "emu-prod-4",

  title:
    "STARQ Inflate Pro Portable 2in1 Tyre Inflator/Air Compressor with Digital Display|4000mAh",

  brand: "STARQ",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/emergency/starq-inflator-main.png",

  galleryImages: [
    "/products/emergency/starq-inflator-1.png",
    "/products/emergency/starq-inflator-2.png",
    "/products/emergency/starq-inflator-3.png",
    "/products/emergency/starq-inflator-4.png",
  ],

  discountText: "-18%",

  ratingData: {
    averageRating: 4.5,

    totalReviewsCount: 1479,

    boughtPastMonthText: "1K+ bought in past month",

    soldLastWeekText: "Sold over 318 times last week",
  },

  attributes: [
    {
      label: "Device Type",
      value: "Portable 2-in-1 Tyre Inflator",
    },

    {
      label: "Battery",
      value: "4000mAh Rechargeable Battery",
    },

    {
      label: "Display",
      value: "Digital Pressure Display Screen",
    },

    {
      label: "Function",
      value: "Air Compressor and Pressure Inflation",
    },

    {
      label: "Compatibility",
      value: "Cars, Bikes, Cycles and Utility Equipment",
    },
  ],

  aboutSections: [
    {
      heading: "Portable Inflation System",

      content:
        "Portable compressor allows emergency tyre inflation without depending on external roadside air stations.",
    },

    {
      heading: "Digital Pressure Monitoring",

      content:
        "Built-in digital display allows accurate tyre pressure monitoring during inflation operations.",
    },

    {
      heading: "Emergency Travel Utility",

      content:
        "Useful roadside emergency accessory for handling low tyre pressure during long distance driving situations.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Portable Air Compressor",
    "Digital Pressure Display",
    "Rechargeable Battery",
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
        id: "emu-review-7",

        reviewerName: "Yuvraj",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Inflates car tyres quickly and digital display makes pressure monitoring very convenient.",

        postedDateAgo: "1 month ago",

        userUploadedMedia: [
          "/reviews/starq-review-1.png",
        ],
      },

      {
        id: "emu-review-8",

        reviewerName: "Rahul",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Battery backup is decent and definitely useful during unexpected low tyre pressure emergencies.",

        postedDateAgo: "3 months ago",
      },
    ],
  },
},

{
  id: "emu-prod-5",

  title:
    "Portable LED Flashlight COB Keychain Emergency Light for Outdoor Rechargeable Flashlights",

  brand: "LiteGear",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/emergency/cob-keychain-main.png",

  galleryImages: [
    "/products/emergency/cob-keychain-1.png",
    "/products/emergency/cob-keychain-2.png",
    "/products/emergency/cob-keychain-3.png",
    "/products/emergency/cob-keychain-4.png",
  ],

  discountText: "-10%",

  ratingData: {
    averageRating: 4.5,
    totalReviewsCount: 1096,
    boughtPastMonthText: "1K+ bought in past month",
    soldLastWeekText: "Sold over 226 times last week",
  },

  attributes: [
    {
      label: "Light Type",
      value: "COB LED Emergency Light",
    },

    {
      label: "Portability",
      value: "Pocket Size Keychain Design",
    },

    {
      label: "Charging",
      value: "USB Rechargeable Battery",
    },

    {
      label: "Usage",
      value: "Outdoor, Emergency and Daily Carry",
    },

    {
      label: "Brightness",
      value: "Wide Angle Emergency Illumination",
    },
  ],

  aboutSections: [
    {
      heading: "Compact Emergency Carry",

      content:
        "Small keychain design allows easy carrying for instant access during power cuts and emergency situations.",
    },

    {
      heading: "COB Wide Lighting",

      content:
        "COB LED technology provides broad illumination coverage instead of narrow focused beam lighting.",
    },

    {
      heading: "Rechargeable Utility",

      content:
        "Rechargeable battery design eliminates disposable battery replacement and supports repeated use.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Pocket Size Portable",
    "USB Rechargeable",
    "Emergency Ready",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 73 },
      { stars: 4, percentage: 16 },
      { stars: 3, percentage: 6 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "emu-review-9",

        reviewerName: "Kabir",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Very small but surprisingly bright. Excellent backup light for keeping attached to keys.",

        postedDateAgo: "1 month ago",

        userUploadedMedia: [
          "/reviews/cob-review-1.png",
        ],
      },

      {
        id: "emu-review-10",

        reviewerName: "Naman",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Useful emergency flashlight and battery lasts longer than expected for such compact size.",

        postedDateAgo: "4 months ago",
      },
    ],
  },
},

{
  id: "emu-prod-6",

  title:
    "Portronics AUTO 12 in-Car Bluetooth Receiver for Handsfree Calling, Music System, Supports All Smartphones (Black)",

  brand: "Portronics",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/emergency/portronics-auto12-main.png",

  galleryImages: [
    "/products/emergency/portronics-auto12-1.png",
    "/products/emergency/portronics-auto12-2.png",
    "/products/emergency/portronics-auto12-3.png",
    "/products/emergency/portronics-auto12-4.png",
  ],

  discountText: "-15%",

  ratingData: {
    averageRating: 4.5,
    totalReviewsCount: 1528,
    boughtPastMonthText: "1K+ bought in past month",
    soldLastWeekText: "Sold over 337 times last week",
  },

  attributes: [
    {
      label: "Connectivity",
      value: "Bluetooth Wireless Receiver",
    },

    {
      label: "Function",
      value: "Handsfree Calling and Music Streaming",
    },

    {
      label: "Compatibility",
      value: "All Smartphones Supported",
    },

    {
      label: "Installation",
      value: "Car AUX Audio Connection",
    },

    {
      label: "Color",
      value: "Matte Black Finish",
    },
  ],

  aboutSections: [
    {
      heading: "Wireless Music Streaming",

      content:
        "Converts standard car audio systems into Bluetooth enabled wireless music playback systems.",
    },

    {
      heading: "Handsfree Calling Support",

      content:
        "Allows safer driving by enabling wireless handsfree calling through connected smartphone devices.",
    },

    {
      heading: "Universal Smartphone Compatibility",

      content:
        "Works across Android phones, iPhones and Bluetooth compatible mobile devices without complex setup.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Bluetooth Connectivity",
    "Handsfree Calling",
    "Universal Device Support",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 75 },
      { stars: 4, percentage: 14 },
      { stars: 3, percentage: 6 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "emu-review-11",

        reviewerName: "Saket",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Connected instantly with my phone and now old car stereo supports wireless music perfectly.",

        postedDateAgo: "2 months ago",

        userUploadedMedia: [
          "/reviews/portronics-review-1.png",
        ],
      },

      {
        id: "emu-review-12",

        reviewerName: "Ishan",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Very useful for older cars without Bluetooth support. Calling quality is quite clear.",

        postedDateAgo: "5 months ago",
      },
    ],
  },
},

{
  id: "emu-prod-7",

  title:
    "Morelian Car HUD Display, OBDⅡ+GPS Smart Gauge High Definition Speedometer Car Diagnostic Tool OBD Fault Code Elimination Safe Driving Computer Overspeed Fault Alarm for All Vehicles",

  brand: "Morelian",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/emergency/morelian-hud-main.png",

  galleryImages: [
    "/products/emergency/morelian-hud-1.png",
    "/products/emergency/morelian-hud-2.png",
    "/products/emergency/morelian-hud-3.png",
    "/products/emergency/morelian-hud-4.png",
  ],

  discountText: "-17%",

  ratingData: {
    averageRating: 4.5,
    totalReviewsCount: 1267,
    boughtPastMonthText: "1K+ bought in past month",
    soldLastWeekText: "Sold over 249 times last week",
  },

  attributes: [
    {
      label: "Connectivity",
      value: "OBD II + GPS Dual Support",
    },

    {
      label: "Display",
      value: "High Definition Digital HUD Display",
    },

    {
      label: "Functions",
      value: "Speedometer + Diagnostics + Fault Detection",
    },

    {
      label: "Safety Features",
      value: "Overspeed Alarm and Fault Warning",
    },

    {
      label: "Compatibility",
      value: "Universal Vehicle Support",
    },
  ],

  aboutSections: [
    {
      heading: "Real Time Driving Data",

      content:
        "Displays vehicle speed, RPM, battery voltage and driving data directly on dashboard in real time.",
    },

    {
      heading: "Vehicle Diagnostics",

      content:
        "Reads OBD fault codes and helps identify engine or system level diagnostic issues quickly.",
    },

    {
      heading: "Safe Driving Alerts",

      content:
        "Overspeed warning and fault alerts improve driver awareness and road safety during long journeys.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "GPS + OBD Support",
    "Real Time Diagnostics",
    "Safe Driving Alerts",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 74 },
      { stars: 4, percentage: 15 },
      { stars: 3, percentage: 6 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "emu-review-13",

        reviewerName: "Shrey",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Very accurate speed display and fault diagnostics helped identify engine warning issue quickly.",

        postedDateAgo: "2 months ago",

        userUploadedMedia: [
          "/reviews/morelian-review-1.png",
        ],
      },

      {
        id: "emu-review-14",

        reviewerName: "Aniket",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Useful dashboard gadget and overspeed warning feature works surprisingly well during highway driving.",

        postedDateAgo: "4 months ago",
      },
    ],
  },
},

{
  id: "emu-prod-8",

  title:
    "Brago TurboVac Cordless Vacuum Cleaner for Car & Home, 18500Pa Powerful Suction, 4-in-1 Portable Vacuum & Air Blower, 9600mAh Battery (40 Mins Runtime), 3-Speed BLDC Motor",

  brand: "Brago",

  price: 3599,

  currencySymbol: "$",

  imagePath: "/products/emergency/brago-vacuum-main.png",

  galleryImages: [
    "/products/emergency/brago-vacuum-1.png",
    "/products/emergency/brago-vacuum-2.png",
    "/products/emergency/brago-vacuum-3.png",
    "/products/emergency/brago-vacuum-4.png",
  ],

  discountText: "-22%",

  ratingData: {
    averageRating: 4.6,
    totalReviewsCount: 1834,
    boughtPastMonthText: "1K+ bought in past month",
    soldLastWeekText: "Sold over 401 times last week",
  },

  attributes: [
    {
      label: "Suction Power",
      value: "18500Pa High Suction",
    },

    {
      label: "Battery",
      value: "9600mAh Rechargeable Battery",
    },

    {
      label: "Runtime",
      value: "40 Minutes Continuous Usage",
    },

    {
      label: "Motor",
      value: "3-Speed BLDC Motor",
    },

    {
      label: "Functions",
      value: "Vacuum Cleaner + Air Blower 4-in-1",
    },
  ],

  aboutSections: [
    {
      heading: "Deep Dust Cleaning",

      content:
        "Powerful suction removes dirt particles deeply trapped inside seats, carpets and dashboard edges efficiently.",
    },

    {
      heading: "Multi Utility Design",

      content:
        "Functions as portable vacuum cleaner and air blower for both vehicle and home cleaning tasks.",
    },

    {
      heading: "Long Battery Backup",

      content:
        "Large battery capacity supports extended cordless cleaning sessions without charging interruptions.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "High Suction Power",
    "Cordless Portable Design",
    "1 Year Warranty",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 79 },
      { stars: 4, percentage: 11 },
      { stars: 3, percentage: 5 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "emu-review-15",

        reviewerName: "Aviral",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Powerful cleaning performance and battery backup easily lasts through full car cleaning sessions.",

        postedDateAgo: "1 month ago",

        userUploadedMedia: [
          "/reviews/brago-emergency-review-1.png",
        ],
      },

      {
        id: "emu-review-16",

        reviewerName: "Pratik",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Excellent portable vacuum and air blower mode makes dashboard cleaning much easier.",

        postedDateAgo: "3 months ago",
      },
    ],
  },
},

{
  id: "emu-prod-9",

  title:
    "Morelian Car HUD Display, OBDⅡ+GPS Smart Gauge High Definition Speedometer Car Diagnostic Tool OBD Fault Code Elimination Safe Driving Computer Overspeed Fault Alarm for All Vehicles",

  brand: "Morelian",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/emergency/morelian-hud-pro-main.png",

  galleryImages: [
    "/products/emergency/morelian-hud-pro-1.png",
    "/products/emergency/morelian-hud-pro-2.png",
    "/products/emergency/morelian-hud-pro-3.png",
    "/products/emergency/morelian-hud-pro-4.png",
  ],

  discountText: "-16%",

  ratingData: {
    averageRating: 4.5,
    totalReviewsCount: 1182,
    boughtPastMonthText: "1K+ bought in past month",
    soldLastWeekText: "Sold over 233 times last week",
  },

  attributes: [
    {
      label: "Display Type",
      value: "Advanced HUD Projection Display",
    },

    {
      label: "Connectivity",
      value: "GPS + OBD II Integration",
    },

    {
      label: "Monitoring",
      value: "Speed, Voltage and Fault Monitoring",
    },

    {
      label: "Safety",
      value: "Overspeed Warning Alarm",
    },

    {
      label: "Vehicle Support",
      value: "Universal Vehicle Compatibility",
    },
  ],

  aboutSections: [
    {
      heading: "Advanced Vehicle Monitoring",

      content:
        "Monitors speed, battery voltage and diagnostic information continuously during driving operation.",
    },

    {
      heading: "Fault Detection System",

      content:
        "Detects vehicle fault codes early and helps drivers identify possible maintenance issues faster.",
    },

    {
      heading: "Driving Safety Enhancement",

      content:
        "HUD projection and overspeed warning reduce distraction while improving real-time driving awareness.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Advanced HUD Display",
    "Fault Detection Support",
    "Driving Safety Alerts",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 73 },
      { stars: 4, percentage: 16 },
      { stars: 3, percentage: 6 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "emu-review-17",

        reviewerName: "Lakshay",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Displays speed data accurately and makes dashboard feel much more premium and tech enabled.",

        postedDateAgo: "2 months ago",

        userUploadedMedia: [
          "/reviews/morelian-pro-review-1.png",
        ],
      },

      {
        id: "emu-review-18",

        reviewerName: "Harit",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Diagnostic features are useful and overspeed warning works reliably during highway driving.",

        postedDateAgo: "5 months ago",
      },
    ],
  },
},




]
},

//Category 5 car interiors completed
{
id: "cat-5",
categoryName: "Car Interiors",
slug: "car-interiors",

items: [
  // Product-1
{
  id: "car-dashboard-dresser",

  productHeading: "Car Dashboard Dresser",

  title:
    "3M Car Dashboard Dresser (500 ml) | Restores Gloss and Shine on Dashboard and Other Plastic Parts | Protection from UV Rays and Fading",

  brand:
    "Give your car's interior a fresh, showroom-like finish with the 3M Car Dashboard Dresser (500 ml).",

  price: 499,

  currencySymbol: "₹",

  imagePath: "/products/interiors/car-dashboard-dresser-main.png",

  galleryImages: [
    "/Images/interiors/car-dashboard-dresser/car-dashboard-dresser-1.png",
    "/Images/interiors/car-dashboard-dresser/car-dashboard-dresser-2.png",
    "/Images/interiors/car-dashboard-dresser/car-dashboard-dresser-3.png",
    "/Images/interiors/car-dashboard-dresser/car-dashboard-dresser-4.png",
  ],

  discountText: "12%",

  ratingData: {
    averageRating: 4.2,
    totalReviewsCount: 24000,
    boughtPastMonthText: "24k reviews",
    soldLastWeekText: "Sold over 24k times",
  },

  attributes: [
    {
      label: "Feature",
      value: "Restores Gloss",
    },
    {
      label: "Feature",
      value: "Shine on Dashboard",
    },
    {
      label: "Feature",
      value: "Plastic Parts",
    },
    {
      label: "Feature",
      value: "UV Rays Protection",
    },
  ],

  aboutSections: [
    {
      heading: "Restores Gloss & Shine",
      content:
        "Effectively restores gloss on dashboards, door panels and trims, giving your car interior a fresh showroom-like appearance.",
    },
    {
      heading: "Multi-Surface Protection",
      content:
        "Protects plastic, vinyl and rubber surfaces from UV rays and fading while bringing back their original shine.",
    },
    {
      heading: "Easy DIY Application",
      content:
        "Simple spray-on formula delivers a high-gloss, non-greasy finish without leaving sticky residue.",
    },
    {
      heading: "Fresh Interior Look",
      content:
        "Leaves behind a pleasant fragrance while making your vehicle interiors look clean, polished and brand new.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 75 },
      { stars: 4, percentage: 17 },
      { stars: 3, percentage: 5 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 1 },
    ],

    userFeed: [
      {
        id: "int-review-1",

        reviewerName: "Amit",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Very easy to use and gives my dashboard a premium glossy finish without feeling greasy.",

        postedDateAgo: "2 weeks ago",
      },
      {
        id: "int-review-2",

        reviewerName: "Rakesh",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Nice fragrance and excellent UV protection. Dashboard looks brand new after every use.",

        postedDateAgo: "1 month ago",
      },
    ],
  },
},
// Product-2
{
  id: "car-perfume-air-freshener",

  productHeading: "Car Perfume Air Freshener",

  title:
    "Car Perfume Air Freshener | Long Lasting Fragrance for Car Interior | Premium Luxury Scent for Fresh & Pleasant Drive | Easy to Use Car Freshener for All Vehicles (Floral)",

  brand:
    "Transform every drive into a refreshing experience with the Car Perfume Air Freshener (Floral).",

  price: 399,

  currencySymbol: "₹",

  imagePath: "/products/interiors/car-perfume-main.jpg",

  galleryImages: [
    "/Images/interiors/car-perfume/car-perfume-1.jpg",
    "/Images/interiors/car-perfume/car-perfume-2.jpg",
    "/Images/interiors/car-perfume/car-perfume-3.jpg",
    "/Images/interiors/car-perfume/car-perfume-4.jpg",
  ],

  discountText: "20%",

  ratingData: {
    averageRating: 4.6,
    totalReviewsCount: 300,
    boughtPastMonthText: "300 reviews",
    soldLastWeekText: "Sold over 300 times",
  },

  attributes: [
    {
      label: "Feature",
      value: "Long Lasting Fragrance",
    },
    {
      label: "Feature",
      value: "Car Interior",
    },
    {
      label: "Feature",
      value: "Premium Luxury",
    },
    {
      label: "Feature",
      value: "Easy to Use",
    },
  ],

  aboutSections: [
    {
      heading: "Long Lasting Car Freshener",
      content:
        "Advanced aroma oil diffuser provides a refreshing fragrance for up to 45 days, helping eliminate bad odours and keeping your car interior fresh.",
    },
    {
      heading: "Premium Quality Materials",
      content:
        "Made with a premium glass bottle and wooden diffuser cap for controlled fragrance release and long-lasting performance.",
    },
    {
      heading: "Eco-Friendly & Refillable",
      content:
        "Refillable design reduces waste while offering a sustainable solution for maintaining a pleasant fragrance inside your vehicle.",
    },
    {
      heading: "Easy to Use",
      content:
        "Simply remove the seal, tighten the wooden cap, invert the bottle for a few seconds and hang it from the rear-view mirror for continuous freshness.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 78 },
      { stars: 4, percentage: 15 },
      { stars: 3, percentage: 5 },
      { stars: 2, percentage: 1 },
      { stars: 1, percentage: 1 },
    ],

    userFeed: [
      {
        id: "int-review-3",

        reviewerName: "Kiran",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "The fragrance lasts for weeks and keeps my car smelling fresh every day. Looks premium too.",

        postedDateAgo: "3 weeks ago",
      },
      {
        id: "int-review-4",

        reviewerName: "Naveen",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Easy to install, elegant design and the floral fragrance is pleasant without being overpowering.",

        postedDateAgo: "1 month ago",
      },
    ],
  },
},
// Product-3
{
  id: "ultimate-car-neck-rest-pillow",

  productHeading: "Ultimate Car Neck Rest Pillow",

  title:
    "Ultimate Car Neck Rest Pillow | Memory Foam Cervical Support Cushion | Ergonomic Headrest Pillow for Car, SUV & Office Chair | Breathable & Washable Cover",

  brand:
    "Experience superior driving comfort with the Ultimate Car Neck Rest Pillow designed to reduce neck strain and improve posture.",

  price: 799,

  currencySymbol: "₹",

  imagePath: "/products/interiors/ultimate-car-neck-rest-pillow-main.jpg",

  galleryImages: [
    "/Images/interiors/ultimate-car-neck-rest-pillow/ultimate-car-neck-rest-pillow-1.jpg",
    "/Images/interiors/ultimate-car-neck-rest-pillow/ultimate-car-neck-rest-pillow-2.jpg",
    "/Images/interiors/ultimate-car-neck-rest-pillow/ultimate-car-neck-rest-pillow-3.jpg",
    "/Images/interiors/ultimate-car-neck-rest-pillow/ultimate-car-neck-rest-pillow-4.jpg",
  ],

  discountText: "15%",

  ratingData: {
    averageRating: 4.7,
    totalReviewsCount: 1200,
    boughtPastMonthText: "1.2k reviews",
    soldLastWeekText: "Sold over 1200 times",
  },

  attributes: [
    {
      label: "Feature",
      value: "Memory Foam",
    },
    {
      label: "Feature",
      value: "Neck Support",
    },
    {
      label: "Feature",
      value: "Ergonomic Design",
    },
    {
      label: "Feature",
      value: "Breathable Cover",
    },
  ],

  aboutSections: [
    {
      heading: "Ergonomic Neck Support",
      content:
        "Designed to naturally support the neck and cervical spine, helping reduce fatigue during daily commuting and long-distance travel.",
    },
    {
      heading: "Premium Memory Foam",
      content:
        "Made with high-density memory foam that adapts to your neck shape while providing consistent comfort and pressure relief.",
    },
    {
      heading: "Breathable & Washable Cover",
      content:
        "Features a soft, breathable fabric cover that promotes airflow and can be easily removed for cleaning and maintenance.",
    },
    {
      heading: "Universal Fit",
      content:
        "Adjustable elastic strap allows quick installation on most car seats, SUVs, office chairs and gaming chairs.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 84 },
      { stars: 4, percentage: 10 },
      { stars: 3, percentage: 4 },
      { stars: 2, percentage: 1 },
      { stars: 1, percentage: 1 },
    ],

    userFeed: [
      {
        id: "int-review-5",

        reviewerName: "Praveen",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Excellent neck support during long drives. The memory foam is soft yet supportive and feels premium.",

        postedDateAgo: "2 weeks ago",
      },
      {
        id: "int-review-6",

        reviewerName: "Manoj",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Very comfortable and easy to install. My neck pain has reduced significantly on highway trips.",

        postedDateAgo: "1 month ago",
      },
    ],
  },
},
// Product-4
{
  id: "orthopaedic-car-cushion-pillows",

  productHeading: "Orthopaedic Car Cushion Pillows",

  title:
    "Orthopaedic Car Seat Cushion & Back Support Pillow | Memory Foam Lumbar Support | Ergonomic Driving Cushion for Car, Office & Home",

  brand:
    "Drive comfortably with premium orthopaedic memory foam cushions designed to improve posture and reduce back fatigue.",

  price: 1499,

  currencySymbol: "₹",

  imagePath: "/products/interiors/car-cushion-pillows-main.jpg",

  galleryImages: [
    "/Images/interiors/car-cushion-pillows/car-cushion-pillows-1.jpg",
    "/Images/interiors/car-cushion-pillows/car-cushion-pillows-2.jpg",
    "/Images/interiors/car-cushion-pillows/car-cushion-pillows-3.jpg",
    "/Images/interiors/car-cushion-pillows/car-cushion-pillows-4.jpg",
  ],

  discountText: "18%",

  ratingData: {
    averageRating: 4.8,
    totalReviewsCount: 2100,
    boughtPastMonthText: "2.1k reviews",
    soldLastWeekText: "Sold over 2100 times",
  },

  attributes: [
    {
      label: "Feature",
      value: "Memory Foam",
    },
    {
      label: "Feature",
      value: "Orthopaedic Support",
    },
    {
      label: "Feature",
      value: "Lumbar Cushion",
    },
    {
      label: "Feature",
      value: "Ergonomic Design",
    },
  ],

  aboutSections: [
    {
      heading: "Orthopaedic Comfort",
      content:
        "Designed to provide excellent lower back and hip support while maintaining proper sitting posture during long drives.",
    },
    {
      heading: "Premium Memory Foam",
      content:
        "High-density memory foam evenly distributes body weight and relieves pressure on the spine and tailbone.",
    },
    {
      heading: "Breathable Fabric Cover",
      content:
        "Soft, breathable mesh fabric improves airflow and features a removable washable cover for easy maintenance.",
    },
    {
      heading: "Universal Compatibility",
      content:
        "Suitable for cars, SUVs, office chairs and home seating with adjustable straps for secure installation.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 86 },
      { stars: 4, percentage: 9 },
      { stars: 3, percentage: 3 },
      { stars: 2, percentage: 1 },
      { stars: 1, percentage: 1 },
    ],

    userFeed: [
      {
        id: "int-review-7",

        reviewerName: "Harish",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Excellent lumbar support. Makes long highway journeys much more comfortable.",

        postedDateAgo: "3 weeks ago",
      },
      {
        id: "int-review-8",

        reviewerName: "Rohit",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Premium quality memory foam and very comfortable for daily office and car use.",

        postedDateAgo: "1 month ago",
      },
    ],
  },
},
// Product-5
{
  id: "car-trash-bin-holder",

  productHeading: "Car Trash Bin Can Holder",

  title:
    "Car Trash Bin Can Holder | Leakproof Mini Dustbin with Lid | Portable Car Garbage Bin for Cars, SUVs & Office Use",

  brand:
    "Keep your vehicle clean and organized with this compact leakproof car trash bin featuring a convenient flip lid.",

  price: 399,

  currencySymbol: "₹",

  imagePath: "/products/interiors/car-trash-bin-holder-main.jpg",

  galleryImages: [
    "/Images/interiors/car-trash-bin-holder/car-trash-bin-holder-1.jpg",
    "/Images/interiors/car-trash-bin-holder/car-trash-bin-holder-2.jpg",
    "/Images/interiors/car-trash-bin-holder/car-trash-bin-holder-3.jpg",
    "/Images/interiors/car-trash-bin-holder/car-trash-bin-holder-4.jpg",
  ],

  discountText: "15%",

  ratingData: {
    averageRating: 4.5,
    totalReviewsCount: 950,
    boughtPastMonthText: "950 reviews",
    soldLastWeekText: "Sold over 950 times",
  },

  attributes: [
    {
      label: "Feature",
      value: "Leakproof Design",
    },
    {
      label: "Feature",
      value: "Portable Dustbin",
    },
    {
      label: "Feature",
      value: "Flip Lid",
    },
    {
      label: "Feature",
      value: "Universal Fit",
    },
  ],

  aboutSections: [
    {
      heading: "Compact & Space Saving",
      content:
        "Designed to fit conveniently in cup holders, door pockets or seat back storage without occupying extra space.",
    },
    {
      heading: "Leakproof Construction",
      content:
        "Secure lid helps prevent spills and unpleasant odours while keeping your vehicle neat and hygienic.",
    },
    {
      heading: "Easy to Empty & Clean",
      content:
        "Wide opening allows quick disposal of waste while the durable plastic body can be washed and reused easily.",
    },
    {
      heading: "Multi-Purpose Usage",
      content:
        "Ideal for cars, SUVs, offices and homes to store tissues, wrappers, receipts and other small waste items.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 80 },
      { stars: 4, percentage: 13 },
      { stars: 3, percentage: 4 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 1 },
    ],

    userFeed: [
      {
        id: "int-review-9",

        reviewerName: "Anil",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Very useful accessory. Fits perfectly in my car door pocket and keeps the cabin clean.",

        postedDateAgo: "2 weeks ago",
      },
      {
        id: "int-review-10",

        reviewerName: "Sandeep",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Compact, leakproof and easy to clean. A must-have for family trips.",

        postedDateAgo: "1 month ago",
      },
    ],
  },
},

]
},
//Category 6  car-Esentials completed
{
id: "cat-6",
categoryName: "Car Essentials",
slug: "car-essentials",

items: [

  //Product-1
{
  id: "premium-car-air-freshener",

  productHeading: "Premium Car Air Freshener",

  title:
    "Premium Car Air Freshener with Essential Oil | Long Lasting Car Perfume | Dashboard Aroma Diffuser",


  brand: "Elevate every journey with the timeless elegance of Premium White Oud Car Air Freshener.",

  price: 500,

  currencySymbol: "₹",

  imagePath: "/products/essentials/Premium-car-air-freshner-main.png",

  galleryImages: [
    "/Images/essentials/air-freshner/Air-freshner-1.png",
    "/Images/essentials/air-freshner/Air-freshner-2.png",
    "/Images/essentials/air-freshner/Air-freshner-3.png",
    "/Images/essentials/air-freshner/Air-freshner-4.png",
  ],

  discountText: "18%",

  ratingData: {
    averageRating: 4.8,
    totalReviewsCount: 980,
    boughtPastMonthText: "980 reviews",
    soldLastWeekText: "Sold over 238 times last week",
  },

  attributes: [
  {
    label: "Feature",
    value: "Essential Oud Oil",
  },
  {
    label: "Feature",
    value: "Long Lasting Car Perfume",
  },
  {
    label: "Feature",
    value: "Dashboard Aroma Diffuser",
  },
  {
    label: "Feature",
    value: "Fragrance Based",
  },
],

  aboutSections: [
    {
      heading: "Long-Lasting Premium Fragrance",
      content:
        "Infused with high-quality essential oils that provide a pleasant and refreshing aroma for weeks, keeping your car interior fresh throughout every journey.",
    },
    {
      heading: "Elegant Dashboard Design",
      content:
        "Designed with a premium metal body that blends perfectly with modern car interiors while adding a stylish and luxurious appearance.",
    },
    {
      heading: "Natural Essential Oil Diffusion",
      content:
        "Releases fragrance gradually without harsh chemicals, creating a comfortable driving environment suitable for daily commuting and long road trips.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 82 },
      { stars: 4, percentage: 12 },
      { stars: 3, percentage: 4 },
      { stars: 2, percentage: 1 },
      { stars: 1, percentage: 1 },
    ],

    userFeed: [
      {
        id: "ess-review-1",

        reviewerName: "Rahul",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Amazing fragrance and very premium quality. My car smells fresh throughout the day.",

        postedDateAgo: "1 month ago",
      },
      {
        id: "ess-review-2",

        reviewerName: "Suresh",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Elegant design with a long-lasting fragrance. Worth the price and looks great on the dashboard.",

        postedDateAgo: "2 months ago",
      },
    ],
  },
},
  
  //Product-2
{
  id: "microfiber-cloth",

  productHeading: "Microfiber Cloth",

  title:
    "Microfiber Cloth Silk Banded Edges 800 GSM 30X40 cms 3pcs Yellow + Grey | Extra Thick Microfiber Cleaning Cloths | Perfect for Bike, Auto & Cars | Interior & Exterior",

  brand:
    "Premium 800 GSM Microfiber Cloth with Silk Banded Edges for Superior Cleaning and Scratch-Free Finish.",

  price: 300,

  currencySymbol: "₹",

  imagePath: "/products/essentials/micro-fiber-cloth-main.png",

  galleryImages: [
    "/Images/essentials/microfiber-cloth/Microfiber-cloth-1.png",
    "/Images/essentials/microfiber-cloth/Microfiber-cloth-2.png",
    "/Images/essentials/microfiber-cloth/Microfiber-cloth-3.png",
    "/Images/essentials/microfiber-cloth/Microfiber-cloth-4.png",
  ],

  discountText: "18%",

  ratingData: {
    averageRating: 4.5,
    totalReviewsCount: 300,
    boughtPastMonthText: "300 reviews",
    soldLastWeekText: "Sold over 300 times",
  },

  attributes: [
    {
      label: "Feature",
      value: "Silk Banded",
    },
    {
      label: "Feature",
      value: "Thick Microfiber Cleaning Cloth",
    },
    {
      label: "Feature",
      value: "Perfect for Bike, Auto & Cars",
    },
    {
      label: "Feature",
      value: "Interior & Exterior Use",
    },
  ],

  aboutSections: [
    {
      heading: "Premium 800 GSM Microfiber",
      content:
        "Made from ultra-soft 800 GSM microfiber with 80% polyester and 20% polyamide, providing superior absorption and a scratch-free cleaning experience.",
    },
    {
      heading: "Silk Banded Durable Edges",
      content:
        "Features premium silk banded edges with rounded corners to prevent fraying, making the cloth long-lasting and safe for delicate automotive surfaces.",
    },
    {
      heading: "Multi-Purpose Cleaning Cloth",
      content:
        "Ideal for cleaning car interiors, exteriors, mirrors, dashboards, bikes, electronics, and household surfaces. Effectively removes dust, grease, wax, and dirt without leaving lint or scratches.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 74 },
      { stars: 4, percentage: 18 },
      { stars: 3, percentage: 5 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 1 },
    ],

    userFeed: [
      {
        id: "ess-review-3",

        reviewerName: "Vikram",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Very thick and soft microfiber cloth. Cleans my car without leaving scratches and absorbs water quickly.",

        postedDateAgo: "3 weeks ago",
      },
      {
        id: "ess-review-4",

        reviewerName: "Arjun",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Excellent quality towels with silk edges. Perfect for polishing and interior cleaning.",

        postedDateAgo: "2 months ago",
      },
    ],
  },
},
//Product-3
{
  id: "shinexpro-car-duster",

  productHeading: "ShineXPro Car Duster",

  title:
    "ShineXPro Car Duster | Lint-Free & Scratch-Free Car Cleaner Brush | Long Handle | Paraffin Wax Coating for 2X Better Cleaning Performance",

  brand:
    "Quick & Easy Dust Removal with Premium Lint-Free Microfiber Car Duster for Everyday Car Care.",

  price: 999,

  currencySymbol: "₹",

  imagePath: "/products/essentials/shine-pro-max-main.png",

  galleryImages: [
    "/Images/essentials/car-duster/Car-duster-1.png",
    "/Images/essentials/car-duster/Car-duster-2.png",
    "/Images/essentials/car-duster/Car-duster-3.png",
    "/Images/essentials/car-duster/Car-duster-4.png",
  ],

  discountText: "18%",

  ratingData: {
    averageRating: 4.4,
    totalReviewsCount: 6000,
    boughtPastMonthText: "6000+ reviews",
    soldLastWeekText: "Sold over 6000 times",
  },

  attributes: [
    {
      label: "Feature",
      value: "Lint-Free & Scratch-Free",
    },
    {
      label: "Feature",
      value: "Car Cleaner Brush",
    },
    {
      label: "Feature",
      value: "Long Handle",
    },
    {
      label: "Feature",
      value: "Paraffin Wax Coating",
    },
  ],

  aboutSections: [
    {
      heading: "Quick & Easy Dust Removal",
      content:
        "Effortlessly removes dust, dirt, and pollen from your vehicle without using water or cleaning sprays, helping you maintain a spotless finish within minutes.",
    },
    {
      heading: "Scratch-Free Cleaning Performance",
      content:
        "Designed with premium lint-free microfiber that safely cleans paint, glass, chrome, and other delicate surfaces without leaving scratches, streaks, or residue.",
    },
    {
      heading: "Paraffin Wax Coated Microfiber",
      content:
        "Enhanced with paraffin wax coating and a long ergonomic handle for 2X better cleaning performance, making it easy to reach roofs, windshields, and other difficult areas.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 78 },
      { stars: 4, percentage: 15 },
      { stars: 3, percentage: 4 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 1 },
    ],

    userFeed: [
      {
        id: "ess-review-5",

        reviewerName: "Akash",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Excellent car duster. Removes dust quickly without scratching the paint. The long handle makes roof cleaning very easy.",

        postedDateAgo: "3 weeks ago",
      },

      {
        id: "ess-review-6",

        reviewerName: "Nikhil",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Very soft microfiber with good build quality. Perfect for daily cleaning and works exactly as described.",

        postedDateAgo: "2 months ago",
      },
    ],
  },
},
//Product-4
{
  id: "microfiber-car-duster-kit",

  productHeading: "Microfiber Car Duster Kit",

  title:
    "DADLM® 10 PCS Microfiber Car Duster Kit | Extendable Handle | Interior & Exterior Car Cleaning Tools | Scratch-Free Microfiber Cloth | Memory Foam Pillow & Car Dustbin",

  brand:
    "Complete Interior & Exterior Car Care Kit with Extendable Duster, Scratch-Free Microfiber Cloths, Memory Foam Pillow & Car Dustbin.",

  price: 1299,

  currencySymbol: "₹",

  imagePath: "/products/essentials/Microfiber-car-cleaning-kit-main.png",

  galleryImages: [
    "/Images/essentials/microfiber-kit/Microfiber-car-cleaning-kit-1.png",
    "/Images/essentials/microfiber-kit/Microfiber-car-cleaning-kit-2.png",
    "/Images/essentials/microfiber-kit/Microfiber-car-cleaning-kit-3.png",
    "/Images/essentials/microfiber-kit/Microfiber-car-cleaning-kit-4.png",
  ],

  discountText: "18%",

  ratingData: {
    averageRating: 5.0,
    totalReviewsCount: 4000,
    boughtPastMonthText: "4000+ reviews",
    soldLastWeekText: "Sold over 4000 times",
  },

  attributes: [
    {
      label: "Feature",
      value: "Extendable Handle",
    },
    {
      label: "Feature",
      value: "Interior & Exterior",
    },
    {
      label: "Feature",
      value: "Car Cleaning",
    },
    {
      label: "Feature",
      value: "Scratch-Free",
    },
  ],

  aboutSections: [
    {
      heading: "Complete Car Care Kit",
      content:
        "Includes a premium microfiber duster, extendable handle, scratch-free microfiber cloths, memory foam pillow, and car dustbin for complete interior and exterior vehicle care.",
    },

    {
      heading: "Powerful Dust Removal",
      content:
        "High-density microfiber head attracts dust, dirt, pollen, and debris in a single swipe without leaving lint, wax residue, or scratches on painted surfaces.",
    },

    {
      heading: "Extendable Handle Design",
      content:
        "Equipped with a telescopic easy-grip handle that comfortably reaches roofs, windshields, dashboards, and difficult corners, making everyday car cleaning quick and effortless.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 89 },
      { stars: 4, percentage: 8 },
      { stars: 3, percentage: 2 },
      { stars: 2, percentage: 1 },
      { stars: 1, percentage: 0 },
    ],

    userFeed: [
      {
        id: "ess-review-7",

        reviewerName: "Karthik",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Amazing value for money. The complete kit has everything required to clean both the interior and exterior of my car.",

        postedDateAgo: "2 weeks ago",
      },

      {
        id: "ess-review-8",

        reviewerName: "Manoj",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Excellent quality microfiber and the extendable handle makes roof cleaning extremely easy. Highly recommended.",

        postedDateAgo: "1 month ago",
      },
    ],
  },
},
// Product-5
{
  id: "first-aid-kit-box",

  productHeading: "First Aid Kit Box",

  title:
    "First Aid Kit for Wounds & Bruises | First Aid Kit | 9 Items - 35 Pieces | Emergency Medical Kit for Home, Office, Travel, Car, Sports, Outdoor, Multi-Use Pack for Cuts, Wounds & Injuries | Lightweight & Compact",

  brand:
    "Be prepared for every journey with a compact First Aid Kit designed for home, office, travel, sports, and your car.",

  price: 599,

  currencySymbol: "₹",

  imagePath: "/products/essentials/first-aid-kit-main.png",

  galleryImages: [
    "/Images/essentials/first-aid-kit/first-aid-kit-1.png",
    "/Images/essentials/first-aid-kit/first-aid-kit-2.png",
    "/Images/essentials/first-aid-kit/first-aid-kit-3.png",
    "/Images/essentials/first-aid-kit/first-aid-kit-4.png",
  ],

  discountText: "18%",

  ratingData: {
    averageRating: 4.4,
    totalReviewsCount: 3200,
    boughtPastMonthText: "3200 reviews",
    soldLastWeekText: "Sold over 3200 times",
  },

  attributes: [
    {
      label: "Feature",
      value: "Wounds & Bruises",
    },
    {
      label: "Feature",
      value: "First Aid Kit",
    },
    {
      label: "Feature",
      value: "9 Items - 35 Pieces",
    },
    {
      label: "Feature",
      value: "Emergency Medical",
    },
  ],

  aboutSections: [
    {
      heading: "Complete Emergency Care",
      content:
        "Contains 9 essential medical items with 35 pieces to quickly treat cuts, wounds, bruises, and minor injuries wherever you are.",
    },
    {
      heading: "Compact & Lightweight",
      content:
        "Designed to fit easily inside your car, backpack, office drawer, or travel luggage, making it convenient to carry everywhere.",
    },
    {
      heading: "Trusted Protection",
      content:
        "Includes premium wound care essentials like gauze, alcohol swabs, cotton pads, bandages, tapes, and Hansaplast patches for reliable everyday emergency care.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 78 },
      { stars: 4, percentage: 15 },
      { stars: 3, percentage: 4 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 1 },
    ],

    userFeed: [
      {
        id: "aid-review-1",

        reviewerName: "Rahul",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Very useful emergency kit. Compact, lightweight, and every car should have one.",

        postedDateAgo: "2 weeks ago",
      },
      {
        id: "aid-review-2",

        reviewerName: "Anjali",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Good quality first aid kit with all the essential medical items. Perfect for travel.",

        postedDateAgo: "1 month ago",
      },
    ],
  },
},


]
},


{
id: "cat-6",
categoryName: "Car Wash",
slug: "car-wash",

items: [
  //Product-1
  {
  id: "wash-prod-1",

  title: "ShineXPro Premium Chenille Microfiber Car Wash Mitt",

  brand: "ShineXPro",

  price: 299,

  currencySymbol: "₹",

  imagePath: "/products/carWash/micro-fiber-wash-main.png",

  galleryImages: [
    "/products/car-wash/shinexpro-wash-mitt-main.png",
    "/products/car-wash/shinexpro-wash-mitt-1.png",
    "/products/car-wash/shinexpro-wash-mitt-2.png",
    "/products/car-wash/shinexpro-wash-mitt-3.png",
  ],

  discountText: "-25%",

  ratingData: {
    averageRating: 4.5,
    totalReviewsCount: 2500,
    boughtPastMonthText: "2K+ bought in past month",
    soldLastWeekText: "Sold over 350 times last week",
  },

  attributes: [
    { label: "Material", value: "Premium Chenille Microfiber" },
    { label: "Usage", value: "Car Exterior Washing" },
    { label: "Washable", value: "Machine Washable & Reusable" },
    { label: "Scratch Safe", value: "Yes" },
    { label: "Color", value: "Blue" },
  ],

  aboutSections: [
    {
      heading: "Scratch-Free Cleaning",
      content:
        "Ultra-soft chenille microfiber lifts dirt safely without scratching your car's paint.",
    },
    {
      heading: "Highly Absorbent",
      content:
        "Absorbs plenty of water and soap for faster, more effective vehicle washing.",
    },
    {
      heading: "Reusable & Durable",
      content:
        "Machine washable microfiber mitt designed for repeated use and long-lasting performance.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Reusable",
    "Machine Washable",
    "Scratch Safe",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 76 },
      { stars: 4, percentage: 16 },
      { stars: 3, percentage: 4 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "wash-review-1",
        reviewerName: "Rahul",
        rating: 5,
        isVerifiedBuyer: true,
        commentText:
          "Very soft microfiber mitt. Cleans the car well without leaving scratches.",
        postedDateAgo: "2 months ago",
      },
      {
        id: "wash-review-2",
        reviewerName: "Amit",
        rating: 4,
        isVerifiedBuyer: true,
        commentText:
          "Good quality, absorbs water nicely and is easy to wash after use.",
        postedDateAgo: "5 months ago",
      },
    ],
  },
},
//Product-2
{
  id: "wash-prod-2",

  title: "3M Auto Specialty Car Wash Shampoo",

  brand: "3M",

  price: 399,

  currencySymbol: "₹",

  imagePath: "/products/carWash/3M-Shampoo-main.png",

  galleryImages: [
    "/products/car-wash/3m-car-shampoo-main.png",
    "/products/car-wash/3m-car-shampoo-1.png",
    "/products/car-wash/3m-car-shampoo-2.png",
    "/products/car-wash/3m-car-shampoo-3.png",
  ],

  discountText: "-20%",

  ratingData: {
    averageRating: 4.6,
    totalReviewsCount: 6800,
    boughtPastMonthText: "5K+ bought in past month",
    soldLastWeekText: "Sold over 900 times last week",
  },

  attributes: [
    { label: "Brand", value: "3M" },
    { label: "Item Form", value: "Liquid" },
    { label: "Scent", value: "Fresh" },
    { label: "Volume", value: "500 ml" },
    { label: "Suitable For", value: "Cars, SUVs & Bikes" },
  ],

  aboutSections: [
    {
      heading: "Rich Foam Formula",
      content:
        "Produces thick foam that effectively loosens dirt, dust, mud, and road grime for easy cleaning.",
    },
    {
      heading: "Paint Safe",
      content:
        "pH-balanced shampoo cleans without damaging wax coatings or vehicle paint finishes.",
    },
    {
      heading: "Streak-Free Finish",
      content:
        "Leaves the vehicle with a glossy, clean surface while helping prevent water spots after rinsing.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "3M Quality",
    "Paint Safe",
    "Rich Foam",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 79 },
      { stars: 4, percentage: 15 },
      { stars: 3, percentage: 3 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 1 },
    ],

    userFeed: [
      {
        id: "wash-review-3",
        reviewerName: "Arjun",
        rating: 5,
        isVerifiedBuyer: true,
        commentText:
          "Excellent shampoo. Generates rich foam and removes dirt easily without affecting the paint.",
        postedDateAgo: "1 month ago",
      },
      {
        id: "wash-review-4",
        reviewerName: "Karthik",
        rating: 4,
        isVerifiedBuyer: true,
        commentText:
          "Good value for money. Cleans well and leaves a glossy finish after every wash.",
        postedDateAgo: "4 months ago",
      },
    ],
  },
},
//Product-3
{
  id: "wash-prod-3",

  title: "ShineXPro Foam Sprayer for Car & Bike Washing",

  brand: "ShineXPro",

  price: 799,

  currencySymbol: "₹",

  imagePath: "/products/carWash/ShinePro-Foam-main.png",

  galleryImages: [
    "/products/car-wash/shinexpro-foam-sprayer-main.png",
    "/products/car-wash/shinexpro-foam-sprayer-1.png",
    "/products/car-wash/shinexpro-foam-sprayer-2.png",
    "/products/car-wash/shinexpro-foam-sprayer-3.png",
  ],

  discountText: "-27%",

  ratingData: {
    averageRating: 4.5,
    totalReviewsCount: 1800,
    boughtPastMonthText: "2K+ bought in past month",
    soldLastWeekText: "Sold over 280 times last week",
  },

  attributes: [
    { label: "Brand", value: "ShineXPro" },
    { label: "Capacity", value: "2 Litres" },
    { label: "Material", value: "Heavy-Duty Plastic" },
    { label: "Compatible With", value: "Cars, Bikes & SUVs" },
    { label: "Operation", value: "Manual Pump Pressure" },
  ],

  aboutSections: [
    {
      heading: "Thick Foam Generation",
      content:
        "Creates dense foam that loosens dirt and road grime for an efficient and scratch-free wash.",
    },
    {
      heading: "Easy Pressure Pump",
      content:
        "Manual pump-action sprayer builds pressure quickly, making vehicle cleaning faster and more convenient.",
    },
    {
      heading: "Durable Construction",
      content:
        "Made from sturdy, leak-resistant materials for long-lasting use with car wash shampoos.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Heavy Duty",
    "Foam Sprayer",
    "Reusable",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 75 },
      { stars: 4, percentage: 17 },
      { stars: 3, percentage: 5 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 1 },
    ],

    userFeed: [
      {
        id: "wash-review-5",
        reviewerName: "Vikram",
        rating: 5,
        isVerifiedBuyer: true,
        commentText:
          "Excellent foam sprayer. Produces thick foam and makes washing the car much easier.",
        postedDateAgo: "3 weeks ago",
      },
      {
        id: "wash-review-6",
        reviewerName: "Sandeep",
        rating: 4,
        isVerifiedBuyer: true,
        commentText:
          "Good quality pump sprayer. Easy to use and works well with car shampoo.",
        postedDateAgo: "2 months ago",
      },
    ],
  },
},
//Product-4
{
  id: "wash-prod-4",

  title: "DYLECT High Pressure Car Washer with Cleaning Accessories",

  brand: "DYLECT",

  price: 4999,

  currencySymbol: "₹",

  imagePath: "/products/carWash/High-pressure-washer-main.png",

  galleryImages: [
    "/products/car-wash/dylect-pressure-washer-main.png",
    "/products/car-wash/dylect-pressure-washer-1.png",
    "/products/car-wash/dylect-pressure-washer-2.png",
    "/products/car-wash/dylect-pressure-washer-3.png",
  ],

  discountText: "-22%",

  ratingData: {
    averageRating: 4.4,
    totalReviewsCount: 1200,
    boughtPastMonthText: "1K+ bought in past month",
    soldLastWeekText: "Sold over 180 times last week",
  },

  attributes: [
    { label: "Brand", value: "DYLECT" },
    { label: "Power Source", value: "Electric" },
    { label: "Pressure", value: "High Pressure Water Jet" },
    { label: "Suitable For", value: "Cars, Bikes, Patio & Home Cleaning" },
    { label: "Included", value: "Pressure Gun & Cleaning Accessories" },
  ],

  aboutSections: [
    {
      heading: "Powerful High Pressure Cleaning",
      content:
        "Delivers a strong water jet to remove mud, dust, grease, and stubborn dirt from vehicles with ease.",
    },
    {
      heading: "Complete Cleaning Kit",
      content:
        "Comes with essential accessories including spray gun and cleaning attachments for versatile washing.",
    },
    {
      heading: "Multipurpose Usage",
      content:
        "Ideal for washing cars, bikes, driveways, patios, garden furniture, and outdoor surfaces.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "High Pressure",
    "Electric Washer",
    "Cleaning Kit",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 73 },
      { stars: 4, percentage: 18 },
      { stars: 3, percentage: 5 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "wash-review-7",
        reviewerName: "Rohit",
        rating: 5,
        isVerifiedBuyer: true,
        commentText:
          "Powerful pressure washer that cleans the car quickly. Accessories are useful and easy to assemble.",
        postedDateAgo: "1 month ago",
      },
      {
        id: "wash-review-8",
        reviewerName: "Nitin",
        rating: 4,
        isVerifiedBuyer: true,
        commentText:
          "Very good for home car washing. Strong water pressure and good overall build quality.",
        postedDateAgo: "3 months ago",
      },
    ],
  },
},


]
},
//Car-Cleaning category
{
id: "cat-7",
categoryName: "Car Cleaning",
slug: "car-cleaning",

items: [
  
  // Product-1
{
  id: "car-wash-shampoo",

  productHeading: "Car Wash Shampoo",

  title:
    "3M Car Wash Shampoo, High Foam, Remove Tough Dirt, Safe on Paint (1L Each, Pack of 2)",

  brand:
    "3M Auto Specialty Shampoo (500 ml) delivers powerful yet gentle cleaning, removing dirt and grime while providing a smooth, glossy finish to your vehicle's surface.",

  price: 1383,

  currencySymbol: "₹",

  imagePath: "/products/carCleaning/car-wash-shampoo-main.jpg",

  galleryImages: [
    "/Images/car-cleaning/3m-shampoo/car-wash-shampoo-1.jpg",
    "/Images/car-cleaning/3m-shampoo/car-wash-shampoo-2.jpg",
    
  ],

  discountText: "₹199 OFF",

  ratingData: {
    averageRating: 4.4,
    totalReviewsCount: 50,
    boughtPastMonthText: "50+ reviews",
    soldLastWeekText: "Sold 50+ times",
  },

  attributes: [
    {
      label: "Feature",
      value: "Deep Cleaning Formula",
    },
    {
      label: "Feature",
      value: "Safe & Gentle",
    },
    {
      label: "Feature",
      value: "Smooth Gloss Finish",
    },
    {
      label: "Feature",
      value: "Easy Application",
    },
  ],

  aboutSections: [
    {
      heading: "Professional Cleaning",
      content:
        "Removes tough dirt and road grime on all types of cars, giving a clean and dust-free look.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 72 },
      { stars: 4, percentage: 18 },
      { stars: 3, percentage: 6 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "clean-review-1",

        reviewerName: "Rahul",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Excellent foam quality. Cleans dirt easily and leaves a smooth glossy finish.",

        postedDateAgo: "2 weeks ago",
      },
      {
        id: "clean-review-2",

        reviewerName: "Arjun",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Very gentle on paint and easy to use. Worth buying for regular car washing.",

        postedDateAgo: "1 month ago",
      },
    ],
  },
},

// Product-2
{
  id: "car-scratches-remover",

  productHeading: "Car Scratches Remover",

  title:
    "3M Perfect-It 1-Step Finishing Compound (100 g) | Removes Minor Scratches, Foam/Wool Compatible, Professional Finish",

  brand:
    "3M Perfect-It 1-Step Finishing Compound (100 g) removes minor scratches, swirl marks, and paint imperfections while delivering a smooth, high-gloss finish with foam or wool polishing pads.",

  price: 234,

  currencySymbol: "₹",

  imagePath: "/products/carCleaning/car-scratches-remover-main.jpg",

  galleryImages: [
    "/Images/car-cleaning/car-scratches-remover/car-scratches-remover-1.jpg",
    "/Images/car-cleaning/car-scratches-remover/car-scratches-remover-2.jpg",
  ],

  discountText: "₹10 OFF",

  ratingData: {
    averageRating: 3.6,
    totalReviewsCount: 3000,
    boughtPastMonthText: "3k reviews",
    soldLastWeekText: "Sold over 3k times",
  },

  attributes: [
    {
      label: "Feature",
      value: "Scratch Removal",
    },
    {
      label: "Feature",
      value: "1-Step Finishing Formula",
    },
    {
      label: "Feature",
      value: "Professional Grade Quality",
    },
    {
      label: "Feature",
      value: "Restores Shine",
    },
  ],

  aboutSections: [
    {
      heading: "Effective Scratch Removal",
      content:
        "Removes blemishes, swirl marks, surface contamination and minor scratches to restore a smooth, glossy paint finish.",
    },
    {
      heading: "Gloss Restoration",
      content:
        "Designed to remove up to 1,200-grit sanding marks, oxidation, water spots and coarse swirls from paints and clear coats.",
    },
    {
      heading: "Easy Application",
      content:
        "Can be applied by hand or with foam and wool polishing pads to achieve a professional-quality high-gloss finish.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 68 },
      { stars: 4, percentage: 18 },
      { stars: 3, percentage: 8 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 3 },
    ],

    userFeed: [
      {
        id: "clean-review-3",

        reviewerName: "Rahul",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Removed light scratches easily and restored the paint shine. Great value for money.",

        postedDateAgo: "3 weeks ago",
      },
      {
        id: "clean-review-4",

        reviewerName: "Kiran",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Easy to apply and gives a glossy finish. Works well on swirl marks and minor scratches.",

        postedDateAgo: "1 month ago",
      },
    ],
  },
},
//product-3


]
},

//car-Lifting
{
id: "cat-8",
categoryName: "Car Lifting",
slug: "car-lifting",

items: [
 
]
},





];