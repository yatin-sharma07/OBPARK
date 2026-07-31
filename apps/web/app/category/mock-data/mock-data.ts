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

// Category 3
{
id: "cat-3",
categoryName: "Exterior Accessories",
slug: "exterior-accessories",

items: [
// Product 1
  {
  id: "ext-prod-1",

  title:
    "EcoShield Car Scratch Removal 200ml With Microfiber Cloth | Safe For All Color Vehicle | Removes Minor To Mid Level Scratches & Swirl | Car Scratch Remover With Paint-Safe Formula | Rubbing Compound",

  brand: "EcoShield",

  price: 1437,

  currencySymbol: "₹",

  imagePath: "/products/exterior/scratch-remover-main.png",

  galleryImages: [
     "/products/exterior/shinexpro-1.png",
    "/products/exterior/shinexpro-2.png",
    "/products/exterior/shinexpro-3.png",
    "/products/exterior/shinexpro-4.png",
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
    label: "Volume",
    value: "200ml",
  },
  {
    label: "Compatible Surface",
    value: "Cars, Bikes, Scooters & SUVs",
  },
  {
    label: "Paint Compatibility",
    value: "All Paint Colors & Finishes",
  },
  {
    label: "Application",
    value: "Microfiber Cloth Buffing",
  },
  {
    label: "Package Includes",
    value: "Scratch Remover & Microfiber Cloth",
  },
],

  aboutSections: [
  {
    heading: "Removes Minor to Mid-Level Scratches",
    content:
      "Eco Shield Scratch Remover effectively removes light scratches, swirl marks, scuffs, and paint imperfections. Its advanced formula restores your vehicle's finish, making it ideal for everyday maintenance and minor paint correction.",
  },

  {
    heading: "Safe for All Paint Finishes",
    content:
      "The non-abrasive, paint-safe formula works on all vehicle colors and finishes, including glossy, matte, and metallic paint. It restores shine without damaging the original surface or protective coatings.",
  },

  {
    heading: "Suitable for Cars & Bikes",
    content:
      "Designed for use on cars, bikes, scooters, SUVs, trucks, and other painted vehicles. It blends seamlessly with every paint color while delivering a clean, polished, and scratch-free appearance.",
  },

  {
    heading: "Professional Restoration Results",
    content:
      "Works alongside polishing compounds and detailing products to improve paint clarity, reduce visible imperfections, and restore a smooth, glossy finish with minimal effort.",
  },

  {
    heading: "Quick & Easy Application",
    content:
      "Apply a small amount of the scratch remover to the included microfiber cloth, spread evenly over the affected area, buff gently using circular motions, allow it to dry, and wipe clean to reveal a refreshed finish.",
  },
],

  shippingBadges: [
  "Free Delivery",
  "Paint-Safe Formula",
  "Includes Microfiber Cloth",
  "Suitable For All Vehicle Colours",
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
    id: "review-1",
    reviewerName: "Lakshay",
    rating: 5,
    isVerifiedBuyer: true,
    commentText:
      "Removed the light scratches on my car door within a few minutes. The paint looks much smoother and the included microfiber cloth is good quality.",
    postedDateAgo: "2 months ago",
    userUploadedMedia: [
      "/reviews/ecoshield-review-1.png",
    ],
  },
  {
    id: "review-2",
    reviewerName: "Harit",
    rating: 4,
    isVerifiedBuyer: true,
    commentText:
      "Works well on swirl marks and minor scratches. Deep scratches are still visible, but overall it's a great product for regular car maintenance.",
    postedDateAgo: "5 months ago",
  },
],
  },
},
// Product 2
{
  id: "ext-prod-2",

  title:
    "5 PCS Microfiber Car Duster Kit - Interior & Exterior Car Cleaning Detailing Tool Scratch",

  brand: "AutoClean Pro",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/exterior/microfiber-kit-main.png",

  galleryImages: [
    "/products/exterior/microfiber-kit-1.png",
    "/products/exterior/microfiber-kit-2.png",
    "/products/exterior/microfiber-kit-3.png",
    "/products/exterior/microfiber-kit-4.png",
  ],

  discountText: "-14%",

  ratingData: {
    averageRating: 4.5,

    totalReviewsCount: 1246,

    boughtPastMonthText: "1K+ bought in past month",

    soldLastWeekText: "Sold over 264 times last week",
  },

  attributes: [
    {
      label: "Kit Contents",
      value: "5 Piece Cleaning Kit",
    },

    {
      label: "Material",
      value: "Premium Microfiber Fabric",
    },

    {
      label: "Usage",
      value: "Interior and Exterior Car Cleaning",
    },

    {
      label: "Scratch Safety",
      value: "Non-Abrasive Surface Safe Cleaning",
    },

    {
      label: "Application",
      value: "Detailing, Dust Removal and Surface Cleaning",
    },
  ],

  aboutSections: [
    {
      heading: "Scratch Safe Cleaning",

      content:
        "Soft microfiber material removes dust and dirt effectively without causing scratches on paint or dashboard surfaces.",
    },

    {
      heading: "Complete Car Detailing Kit",

      content:
        "Five-piece cleaning kit designed for complete interior and exterior maintenance and detailing work.",
    },

    {
      heading: "Reusable Washable Material",

      content:
        "Durable microfiber fabric supports repeated washing and long-term cleaning performance without fiber damage.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Scratch Safe Material",
    "Reusable Fabric",
    "Easy Wash Design",
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
        id: "ext-review-1",

        reviewerName: "Arpit",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Very soft material and cleans dust without leaving scratches. Good complete cleaning kit.",

        postedDateAgo: "2 months ago",

        userUploadedMedia: [
          "/reviews/microfiber-review-1.png",
        ],
      },

      {
        id: "ext-review-2",

        reviewerName: "Harsh",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Useful for weekly car cleaning and microfiber quality feels much better than expected.",

        postedDateAgo: "4 months ago",
      },
    ],
  },
},
// Product 3
{
  id: "ext-prod-3",

  title:
    "3M IA260166391 Auto Specialty Car Shampoo 1L | pH Neutral Formula | Rich Foam | Safe for Wax & Ceramic Coating | Removes Dirt, Mud & Road Grime",

  brand: "3M",

  price: 1437, 

  currencySymbol: "₹",

  imagePath: "/products/exterior/car-wash-main.png",

  galleryImages: [
    "/products/exterior/car-wash-1.png",
    "/products/exterior/car-wash-2.png",
    "/products/exterior/car-wash-3.png",
    "/products/exterior/car-wash-4.png",
  ],

  discountText: "-16%",

  ratingData: {
    averageRating: 4.5,
    totalReviewsCount: 1182,
    boughtPastMonthText: "1K+ bought in past month",
    soldLastWeekText: "Sold over 250 times last week",
  },

  attributes: [
    {
      label: "Volume",
      value: "1 Litre",
    },
    {
      label: "Formula",
      value: "pH Neutral",
    },
    {
      label: "Compatible Surfaces",
      value: "Paint, Wax & Ceramic Coating",
    },
    {
      label: "Foam Type",
      value: "High Foam Concentrate",
    },
    {
      label: "Application",
      value: "Manual Car Wash",
    },
  ],

  aboutSections: [
    {
      heading: "Professional Deep Cleaning",
      content:
        "Removes stubborn dirt, mud, grease, road grime and contaminants from all types of vehicles, leaving a clean, fresh and polished finish after every wash.",
    },

    {
      heading: "Safe For All Vehicle Surfaces",
      content:
        "The pH-neutral formula is safe for painted surfaces, wax, sealants and ceramic-coated vehicles. It cleans effectively without damaging the finish or leaving white spots.",
    },

    {
      heading: "Rich Foam Formula",
      content:
        "Creates thick, long-lasting foam that loosens dirt and grime for effortless cleaning while minimizing swirl marks during washing.",
    },

    {
      heading: "Easy Rinse & Long-Lasting Shine",
      content:
        "The concentrated shampoo rinses off easily without residue and leaves behind a glossy, streak-free finish that keeps your vehicle looking cleaner for longer.",
    },

    {
      heading: "Suitable For Regular Car Care",
      content:
        "Perfect for routine maintenance of cars, SUVs and bikes. Safe for frequent use and compatible with bucket wash, foam cannon and pressure washer methods.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "pH Neutral Formula",
    "High Foam Cleaning",
    "Wax & Ceramic Safe",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 74 },
      { stars: 4, percentage: 16 },
      { stars: 3, percentage: 6 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "review-21",

        reviewerName: "Rahul",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Produces rich foam and removes road dirt easily without affecting my car's ceramic coating.",

        postedDateAgo: "1 month ago",

        userUploadedMedia: [
          "/reviews/car-wash-review-1.png",
        ],
      },

      {
        id: "review-22",

        reviewerName: "Arjun",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Good shampoo with excellent cleaning performance. Leaves a glossy finish and rinses off quickly.",

        postedDateAgo: "3 months ago",
      },
    ],
  },
},
// Product 4
{
  id: "ext-prod-4",

  title:
    "Oblivion Car Dustbin | Portable Mini Car Trash Bin with Lid | Leak-Proof Garbage Bin for Car, SUV, Office & Home",

  brand: "Oblivion",

  price: 399,

  currencySymbol: "₹",

  imagePath: "/products/exterior/car-dustbin-main.png",

  galleryImages: [
    "/products/exterior/car-dustbin-1.png",
    "/products/exterior/car-dustbin-2.png",
    "/products/exterior/car-dustbin-3.png",
    "/products/exterior/car-dustbin-4.png",
  ],

  discountText: "-43%",

  ratingData: {
    averageRating: 4.3,
    totalReviewsCount: 1245,
    boughtPastMonthText: "500+ bought in past month",
    soldLastWeekText: "Sold over 120 times last week",
  },

  attributes: [
    {
      label: "Capacity",
      value: "Compact Mini Dustbin",
    },

    {
      label: "Material",
      value: "Premium ABS Plastic",
    },

    {
      label: "Design",
      value: "Leak-Proof Flip Lid",
    },

    {
      label: "Installation",
      value: "Cup Holder & Door Pocket Compatible",
    },

    {
      label: "Suitable For",
      value: "Cars, SUVs, Office & Home",
    },
  ],

  aboutSections: [
    {
      heading: "Compact Space-Saving Design",
      content:
        "Designed to fit perfectly inside cup holders, door pockets and other convenient locations, helping keep your vehicle neat without occupying valuable cabin space.",
    },

    {
      heading: "Leak-Proof Flip Lid",
      content:
        "The secure flip-top lid helps prevent spills, keeps unpleasant odors contained and ensures waste remains safely inside while driving.",
    },

    {
      heading: "Premium Durable Construction",
      content:
        "Made from high-quality ABS plastic that is lightweight, sturdy and built for everyday use while remaining easy to clean and maintain.",
    },

    {
      heading: "Multi-Purpose Usage",
      content:
        "Ideal for cars, SUVs, trucks, offices and homes. Perfect for disposing of tissues, wrappers, receipts, snack packets and other small waste items.",
    },

    {
      heading: "Easy To Empty & Clean",
      content:
        "The removable lid and smooth interior make emptying and cleaning simple, allowing you to maintain a clean and organized vehicle effortlessly.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Leak-Proof Design",
    "Compact Size",
    "Easy To Clean",
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
        id: "emu-review-21",

        reviewerName: "Lakshay",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Fits perfectly in my car door pocket and keeps wrappers and tissues organized. The lid closes securely and prevents bad odors.",

        postedDateAgo: "2 months ago",

        userUploadedMedia: [
          "/reviews/car-dustbin-review-1.png",
        ],
      },

      {
        id: "emu-review-22",

        reviewerName: "Harit",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Good quality plastic with a compact design. Easy to empty and clean, making it a useful accessory for everyday driving.",

        postedDateAgo: "5 months ago",
      },
    ],
  },
},
// Product 5
{
  id: "ext-prod-5",

  title:
    "GLUN ® VinylReflective L Glass Sticker for Learning Drivers | Waterproof Car Board Sticker",

  brand: "GLUN",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/exterior/glun-sticker-main.png",

  galleryImages: [
    "/products/exterior/glun-sticker-1.png",
    "/products/exterior/glun-sticker-2.png",
    "/products/exterior/glun-sticker-3.png",
    "/products/exterior/glun-sticker-4.png",
  ],

  discountText: "-9%",

  ratingData: {
    averageRating: 4.5,
    totalReviewsCount: 642,
    boughtPastMonthText: "1K+ bought in past month",
    soldLastWeekText: "Sold over 115 times last week",
  },

  attributes: [
    {
      label: "Sticker Type",
      value: "Reflective Vinyl Sticker",
    },

    {
      label: "Usage",
      value: "Learning Driver Indicator",
    },

    {
      label: "Material",
      value: "Waterproof Vinyl Surface",
    },

    {
      label: "Visibility",
      value: "High Reflective Surface Finish",
    },

    {
      label: "Application",
      value: "Glass Surface Adhesive Mount",
    },
  ],

  aboutSections: [
    {
      heading: "Driving Learner Safety",

      content:
        "Clearly marks vehicle as learner driven and improves awareness for nearby drivers on roads.",
    },

    {
      heading: "Reflective Visibility",

      content:
        "Reflective surface improves night-time visibility and recognition under low lighting conditions.",
    },

    {
      heading: "Waterproof Durability",

      content:
        "Vinyl surface resists rain exposure and maintains adhesive strength during long-term outdoor use.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Waterproof Design",
    "Reflective Visibility",
    "Easy Install",
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
        id: "ext-review-7",
        reviewerName: "Varun",
        rating: 5,
        isVerifiedBuyer: true,
        commentText:
          "Good reflective quality and sticker remains firmly attached even after rain exposure.",
        postedDateAgo: "1 month ago",
        userUploadedMedia: [
          "/reviews/glun-review-1.png",
        ],
      },

      {
        id: "ext-review-8",
        reviewerName: "Sumit",
        rating: 4,
        isVerifiedBuyer: true,
        commentText:
          "Simple product but print quality and visibility are very good during night driving.",
        postedDateAgo: "3 months ago",
      },
    ],
  },
},
// Product 6
{
  id: "ext-prod-6",

  title:
    "8 PCs Microfiber Car Duster with Long Handle Car Cleaning Brush Exterior & Interior",

  brand: "CleanDrive",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/exterior/clean-drive-main.png",

  galleryImages: [
    "/products/exterior/clean-drive-1.png",
    "/products/exterior/clean-drive-2.png",
    "/products/exterior/clean-drive-3.png",
    "/products/exterior/clean-drive-4.png",
  ],

  discountText: "-17%",

  ratingData: {
    averageRating: 4.5,
    totalReviewsCount: 1324,
    boughtPastMonthText: "1K+ bought in past month",
    soldLastWeekText: "Sold over 271 times last week",
  },

  attributes: [
    {
      label: "Kit Size",
      value: "8 Piece Cleaning Kit",
    },

    {
      label: "Handle",
      value: "Extended Long Reach Handle",
    },

    {
      label: "Material",
      value: "Soft Microfiber Dust Collection Fabric",
    },

    {
      label: "Cleaning Support",
      value: "Interior and Exterior Vehicle Cleaning",
    },

    {
      label: "Surface Safety",
      value: "Scratch Free Dust Removal",
    },
  ],

  aboutSections: [
    {
      heading: "Long Reach Cleaning",

      content:
        "Extended handle design allows easy roof and windshield cleaning without requiring excessive stretching.",
    },

    {
      heading: "Complete Cleaning Kit",

      content:
        "Eight-piece cleaning accessory set helps maintain full vehicle interior and exterior cleanliness.",
    },

    {
      heading: "Safe Surface Contact",

      content:
        "Soft microfiber material traps dust particles while protecting painted surfaces from abrasion damage.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Long Reach Handle",
    "Scratch Safe Cleaning",
    "Reusable Material",
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
        id: "ext-review-9",
        reviewerName: "Deepak",
        rating: 5,
        isVerifiedBuyer: true,
        commentText:
          "Very useful cleaning kit and long handle makes roof cleaning extremely convenient.",
        postedDateAgo: "2 months ago",
        userUploadedMedia: [
          "/reviews/cleandrive-review-1.png",
        ],
      },

      {
        id: "ext-review-10",
        reviewerName: "Nitin",
        rating: 4,
        isVerifiedBuyer: true,
        commentText:
          "Good microfiber quality and enough accessories included for full car detailing work.",
        postedDateAgo: "5 months ago",
      },
    ],
  },
},
// Product 7
{
  id: "ext-prod-7",

  title:
    "RED Dummy Tow Hook for Car Universal Triangle Bumper Exterior Accessory for Car, Truck & SUV",

  brand: "RoadStyle",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/exterior/red-towhook-main.png",

  galleryImages: [
    "/products/exterior/red-towhook-1.png",
    "/products/exterior/red-towhook-2.png",
    "/products/exterior/red-towhook-3.png",
    "/products/exterior/red-towhook-4.png",
  ],

  discountText: "-12%",

  ratingData: {
    averageRating: 4.5,
    totalReviewsCount: 821,
    boughtPastMonthText: "1K+ bought in past month",
    soldLastWeekText: "Sold over 147 times last week",
  },

  attributes: [
    {
      label: "Accessory Type",
      value: "Decorative Dummy Tow Hook",
    },

    {
      label: "Compatibility",
      value: "Car, SUV and Truck Universal Fit",
    },

    {
      label: "Material",
      value: "High Strength Metal Alloy",
    },

    {
      label: "Finish",
      value: "Sport Red Performance Finish",
    },

    {
      label: "Installation",
      value: "Front or Rear Bumper Mounting",
    },
  ],

  aboutSections: [
    {
      heading: "Sport Styling Upgrade",

      content:
        "Adds racing inspired visual styling to vehicle bumper design for aggressive exterior appearance enhancement.",
    },

    {
      heading: "Universal Vehicle Fit",

      content:
        "Designed for universal installation across cars, SUVs and trucks with compatible bumper positions.",
    },

    {
      heading: "Durable Metal Build",

      content:
        "High strength alloy construction provides long term durability against outdoor weather exposure.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Sport Styling Upgrade",
    "Metal Construction",
    "Universal Fit",
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
        id: "ext-review-11",
        reviewerName: "Raghav",
        rating: 5,
        isVerifiedBuyer: true,
        commentText:
          "Looks very sporty on front bumper and metal finish quality feels surprisingly premium.",

        postedDateAgo: "2 months ago",

        userUploadedMedia: [
          "/reviews/towhook-review-1.png",
        ],
      },

      {
        id: "ext-review-12",
        reviewerName: "Abhishek",
        rating: 4,
        isVerifiedBuyer: true,
        commentText:
          "Purely decorative but definitely improves front exterior styling of the vehicle.",

        postedDateAgo: "4 months ago",
      },
    ],
  },
},
// Product 8
{
  id: "ext-prod-8",

  title:
    "2 Pack Car Air Flow Vent Fender Trim XSL-002 Chrome and Black Car Styling Fender Decorativ",

  brand: "XSL",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/exterior/xsl-fender-main.png",

  galleryImages: [
    "/products/exterior/xsl-fender-1.png",
    "/products/exterior/xsl-fender-2.png",
    "/products/exterior/xsl-fender-3.png",
    "/products/exterior/xsl-fender-4.png",
  ],

  discountText: "-15%",

  ratingData: {
    averageRating: 4.5,
    totalReviewsCount: 907,
    boughtPastMonthText: "1K+ bought in past month",
    soldLastWeekText: "Sold over 166 times last week",
  },

  attributes: [
    {
      label: "Pack Size",
      value: "2 Decorative Fender Trims",
    },

    {
      label: "Material",
      value: "ABS Plastic with Chrome Finish",
    },

    {
      label: "Color",
      value: "Chrome and Black Styling",
    },

    {
      label: "Installation",
      value: "Adhesive Exterior Mounting",
    },

    {
      label: "Purpose",
      value: "Exterior Decorative Styling Upgrade",
    },
  ],

  aboutSections: [
    {
      heading: "Premium Exterior Styling",

      content:
        "Chrome and black fender trim improves sporty visual appearance and gives premium exterior detailing effect.",
    },

    {
      heading: "Simple Adhesive Installation",

      content:
        "Quick adhesive application allows installation without drilling or permanent body modifications.",
    },

    {
      heading: "Weather Resistant Finish",

      content:
        "ABS construction and chrome finish resist sunlight exposure and maintain long term appearance quality.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Chrome Finish Design",
    "Easy Installation",
    "Weather Resistant",
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
        id: "ext-review-13",
        reviewerName: "Tushar",
        rating: 5,
        isVerifiedBuyer: true,
        commentText:
          "Looks stylish after installation and chrome finish gives very premium exterior appearance.",

        postedDateAgo: "1 month ago",

        userUploadedMedia: [
          "/reviews/xsl-review-1.png",
        ],
      },

      {
        id: "ext-review-14",
        reviewerName: "Siddharth",
        rating: 4,
        isVerifiedBuyer: true,
        commentText:
          "Good decorative accessory and adhesive backing has held firmly even after washing.",

        postedDateAgo: "3 months ago",
      },
    ],
  },
},
// Product 9
{
  id: "ext-prod-9",

  title:
    "Brago TurboVac Cordless Vacuum Cleaner for Car & Home, 18500Pa Powerful Suction, 4-in-1 Portable Vacuum & Air Blower, 9600mAh Battery (40 Mins Runtime), 3-Speed BLDC Motor",

  brand: "Brago",

  price: 3599,

  currencySymbol: "$",

  imagePath: "/products/exterior/brago-vacuum-main.png",

  galleryImages: [
    "/products/exterior/brago-vacuum-1.png",
    "/products/exterior/brago-vacuum-2.png",
    "/products/exterior/brago-vacuum-3.png",
    "/products/exterior/brago-vacuum-4.png",
  ],

  discountText: "-22%",

  ratingData: {
    averageRating: 4.6,
    totalReviewsCount: 1743,
    boughtPastMonthText: "1K+ bought in past month",
    soldLastWeekText: "Sold over 392 times last week",
  },

  attributes: [
    {
      label: "Suction Power",
      value: "18500Pa High Power Suction",
    },

    {
      label: "Battery",
      value: "9600mAh Rechargeable Battery",
    },

    {
      label: "Runtime",
      value: "Up to 40 Minutes Continuous Use",
    },

    {
      label: "Modes",
      value: "3 Speed BLDC Motor Settings",
    },

    {
      label: "Functions",
      value: "Vacuum Cleaner + Air Blower 4-in-1 Utility",
    },
  ],

  aboutSections: [
    {
      heading: "High Suction Cleaning",

      content:
        "Powerful 18500Pa suction removes embedded dust, debris and dirt particles from seats, floor mats and cabin gaps.",
    },

    {
      heading: "Multi Function Utility",

      content:
        "Works as portable vacuum cleaner and air blower making it useful for both car and household cleaning tasks.",
    },

    {
      heading: "Cordless Portable Design",

      content:
        "Large battery capacity supports long cleaning sessions without requiring constant charging interruptions.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Cordless Portable Design",
    "High Suction Power",
    "1 Year Warranty",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 78 },
      { stars: 4, percentage: 12 },
      { stars: 3, percentage: 5 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "ext-review-15",
        reviewerName: "Akshay",
        rating: 5,
        isVerifiedBuyer: true,
        commentText:
          "Extremely powerful suction for portable size. Cleans car seats and floor mats much better than expected.",

        postedDateAgo: "1 month ago",

        userUploadedMedia: [
          "/reviews/brago-review-1.png",
        ],
      },

      {
        id: "ext-review-16",
        reviewerName: "Yash",
        rating: 4,
        isVerifiedBuyer: true,
        commentText:
          "Battery backup is impressive and air blower feature is surprisingly useful for dashboard cleaning.",

        postedDateAgo: "3 months ago",
      },
    ],
  },
},
// Product 10
{
  id: "ext-prod-10",

  title:
    "ShineXPro Glass Cleaner Spray 300 ml - Streak Free Car Glass Cleaner Liquid",

  brand: "ShineXPro",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/exterior/shinexpro-main.png",

  galleryImages: [
    "/products/exterior/shinexpro-1.png",
    "/products/exterior/shinexpro-2.png",
    "/products/exterior/shinexpro-3.png",
    "/products/exterior/shinexpro-4.png",
  ],

  discountText: "-10%",

  ratingData: {
    averageRating: 4.5,
    totalReviewsCount: 1138,
    boughtPastMonthText: "1K+ bought in past month",
    soldLastWeekText: "Sold over 214 times last week",
  },

  attributes: [
    {
      label: "Product Type",
      value: "Car Glass Cleaning Spray",
    },

    {
      label: "Quantity",
      value: "300 ml Cleaning Liquid",
    },

    {
      label: "Finish",
      value: "Streak Free Glass Finish",
    },

    {
      label: "Application",
      value: "Windshield, Mirrors and Glass Panels",
    },

    {
      label: "Formula",
      value: "Fast Drying Cleaning Solution",
    },
  ],

  aboutSections: [
    {
      heading: "Streak Free Cleaning",

      content:
        "Special cleaning formula removes fingerprints, dust and stains while leaving crystal clear streak-free glass finish.",
    },

    {
      heading: "Multi Surface Use",

      content:
        "Suitable for front windshield, side windows, rear glass and side mirror cleaning applications.",
    },

    {
      heading: "Fast Dry Formula",

      content:
        "Quick evaporation cleaning formula reduces wiping effort and prevents residue marks after cleaning.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Fast Dry Formula",
    "Streak Free Finish",
    "Safe Glass Cleaning",
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
        id: "ext-review-17",
        reviewerName: "Mohit",
        rating: 5,
        isVerifiedBuyer: true,
        commentText:
          "Leaves glass extremely clean without streak marks. Visibility improved noticeably after windshield cleaning.",

        postedDateAgo: "2 months ago",

        userUploadedMedia: [
          "/reviews/shinexpro-review-1.png",
        ],
      },

      {
        id: "ext-review-18",
        reviewerName: "Parth",
        rating: 4,
        isVerifiedBuyer: true,
        commentText:
          "Good cleaning liquid and dries quickly without requiring repeated wiping on windshield glass.",

        postedDateAgo: "4 months ago",
      },
    ],
  },
},

// Product 11
{
  id: "ext-prod-11",

  title:
    "ANOXA Door Draft Stopper Under Door Seal for Exterior/Interior Doors, Door Sweep, Soundproo",

  brand: "ANOXA",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/exterior/anoxa-door-seal-main.png",

  galleryImages: [
    "/products/exterior/anoxa-door-seal-1.png",
    "/products/exterior/anoxa-door-seal-2.png",
    "/products/exterior/anoxa-door-seal-3.png",
    "/products/exterior/anoxa-door-seal-4.png",
  ],

  discountText: "-11%",

  ratingData: {
    averageRating: 4.5,

    totalReviewsCount: 887,

    boughtPastMonthText: "1K+ bought in past month",

    soldLastWeekText: "Sold over 173 times last week",
  },

  attributes: [
    {
      label: "Material",
      value: "Flexible Noise Reduction Foam Seal",
    },

    {
      label: "Function",
      value: "Door Gap Sealing and Dust Blocking",
    },

    {
      label: "Protection",
      value: "Soundproof and Air Draft Prevention",
    },

    {
      label: "Installation",
      value: "Adhesive Easy Install Strip",
    },

    {
      label: "Use Case",
      value: "Interior and Exterior Door Protection",
    },
  ],

  aboutSections: [
    {
      heading: "Sound Reduction Design",

      content:
        "Reduces outside noise penetration and improves cabin quietness by sealing lower door gaps effectively.",
    },

    {
      heading: "Dust and Air Blocking",

      content:
        "Prevents dust entry, external air leakage and helps improve environmental sealing performance.",
    },

    {
      heading: "Easy Adhesive Installation",

      content:
        "Flexible adhesive backing allows quick installation without requiring tools or additional hardware.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Soundproof Support",
    "Easy Installation",
    "Flexible Material",
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
        id: "ext-review-3",

        reviewerName: "Neeraj",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Noticeably reduced outside road noise and installation took less than ten minutes.",

        postedDateAgo: "1 month ago",

        userUploadedMedia: [
          "/reviews/anoxa-review-1.png",
        ],
      },

      {
        id: "ext-review-4",

        reviewerName: "Karan",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Good adhesive quality and works well for blocking dust near lower door edges.",

        postedDateAgo: "3 months ago",
      },
    ],
  },
},
// Product 12
{
  id: "ext-prod-12",

  title:
    "QUALIFT Car Door Edge Guard - Soft Silicone Durable, Shock-Absorbent Accessories for 4-Wheele",

  brand: "QUALIFT",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/exterior/qualift-edgeguard-main.png",

  galleryImages: [
    "/products/exterior/qualift-edgeguard-1.png",
    "/products/exterior/qualift-edgeguard-2.png",
    "/products/exterior/qualift-edgeguard-3.png",
    "/products/exterior/qualift-edgeguard-4.png",
  ],

  discountText: "-13%",

  ratingData: {
    averageRating: 4.5,
    totalReviewsCount: 976,
    boughtPastMonthText: "1K+ bought in past month",
    soldLastWeekText: "Sold over 184 times last week",
  },

  attributes: [
    {
      label: "Material",
      value: "Soft Flexible Silicone",
    },

    {
      label: "Protection",
      value: "Shock Absorption Edge Protection",
    },

    {
      label: "Compatibility",
      value: "Universal 4 Wheeler Support",
    },

    {
      label: "Installation",
      value: "Self Adhesive Mounting",
    },

    {
      label: "Purpose",
      value: "Prevent Door Scratches and Impacts",
    },
  ],

  aboutSections: [
    {
      heading: "Door Edge Protection",

      content:
        "Protects vehicle door edges from accidental wall impacts and paint scratches during parking situations.",
    },

    {
      heading: "Flexible Silicone Material",

      content:
        "Soft silicone construction absorbs light impact force while maintaining durability under outdoor exposure.",
    },

    {
      heading: "Universal Installation",

      content:
        "Suitable for most vehicle door edges with quick adhesive installation process.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Shock Protection",
    "Scratch Prevention",
    "Universal Fit",
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
        id: "ext-review-5",
        reviewerName: "Ritesh",
        rating: 5,
        isVerifiedBuyer: true,
        commentText:
          "Very useful accessory. Prevented paint damage multiple times while opening doors in tight parking.",
        postedDateAgo: "2 months ago",
        userUploadedMedia: [
          "/reviews/qualift-review-1.png",
        ],
      },

      {
        id: "ext-review-6",
        reviewerName: "Aman",
        rating: 4,
        isVerifiedBuyer: true,
        commentText:
          "Good adhesive quality and silicone feels durable enough for daily usage.",
        postedDateAgo: "4 months ago",
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


{
id: "cat-5",
categoryName: "Car Interiors",
slug: "car-interiors",

items: [
  //Product-1
  {
  id: "int-prod-1",

  title:
    "Premium Car Air Freshener with Essential Oil | Long Lasting Car Perfume | Dashboard Aroma Diffuser",

  brand: "Premium Fragrance",

  price: 699,

  currencySymbol: "₹",

  imagePath: "/products/interiors/perfume-main.png",

  galleryImages: [
    "/products/interior/car-air-freshener-1.png",
    "/products/interior/car-air-freshener-2.png",
    "/products/interior/car-air-freshener-3.png",
    "/products/interior/car-air-freshener-4.png",
  ],

  discountText: "-30%",

  ratingData: {
    averageRating: 4.4,
    totalReviewsCount: 980,
    boughtPastMonthText: "2K+ bought in past month",
    soldLastWeekText: "Sold over 300 times last week",
  },

  attributes: [
    {
      label: "Fragrance Type",
      value: "Essential Oil",
    },
    {
      label: "Installation",
      value: "Dashboard Mount",
    },
    {
      label: "Usage",
      value: "Cars, SUVs & Trucks",
    },
    {
      label: "Fragrance Life",
      value: "Long Lasting",
    },
    {
      label: "Material",
      value: "Premium Aluminium Alloy",
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

    {
      heading: "Universal Vehicle Compatibility",
      content:
        "Suitable for cars, SUVs, trucks and other vehicles. Easily mounts on the dashboard without affecting visibility or interior aesthetics.",
    },

    {
      heading: "Easy To Install & Refill",
      content:
        "Simply place the diffuser on your dashboard, insert the fragrance refill and enjoy a continuous pleasant aroma with minimal maintenance.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Premium Essential Oil",
    "Long Lasting Fragrance",
    "Universal Fit",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 76 },
      { stars: 4, percentage: 15 },
      { stars: 3, percentage: 5 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "int-review-1",

        reviewerName: "Rahul",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "The fragrance lasts for several weeks and gives my car a premium feel. Installation took less than a minute.",

        postedDateAgo: "2 months ago",

        userUploadedMedia: [
          "/reviews/car-air-freshener-review-1.png",
        ],
      },

      {
        id: "int-review-2",

        reviewerName: "Amit",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Looks elegant on the dashboard and the fragrance is refreshing without being overpowering.",

        postedDateAgo: "4 months ago",
      },
    ],
  },
},
//Product-2
{
  id: "int-prod-2",

  title:
    "Premium Car Tissue Holder | Sun Visor Tissue Box Organizer | Universal Interior Tissue Dispenser for Cars, SUVs & Trucks",

  brand: "Car Tissue Holder",

  price: 499,

  currencySymbol: "₹",

  imagePath: "/products/interiors/tissue-paper-main.png",

  galleryImages: [
    "/products/interior/car-tissue-holder-1.png",
    "/products/interior/car-tissue-holder-2.png",
    "/products/interior/car-tissue-holder-3.png",
    "/products/interior/car-tissue-holder-4.png",
  ],

  discountText: "-29%",

  ratingData: {
    averageRating: 4.4,
    totalReviewsCount: 640,
    boughtPastMonthText: "1K+ bought in past month",
    soldLastWeekText: "Sold over 180 times last week",
  },

  attributes: [
    {
      label: "Mounting Type",
      value: "Sun Visor Clip",
    },

    {
      label: "Material",
      value: "Premium PU Leather",
    },

    {
      label: "Compatibility",
      value: "Universal Vehicle Fit",
    },

    {
      label: "Capacity",
      value: "Standard Tissue Packs",
    },

    {
      label: "Installation",
      value: "Tool-Free Installation",
    },
  ],

  aboutSections: [
    {
      heading: "Keeps Tissues Within Easy Reach",
      content:
        "Designed to keep tissues easily accessible while driving, allowing quick use without distracting the driver or creating unnecessary clutter inside the vehicle.",
    },

    {
      heading: "Premium Leather Finish",
      content:
        "Crafted with durable PU leather that complements modern car interiors while protecting tissues from dust, moisture, and daily wear.",
    },

    {
      heading: "Universal Sun Visor Mount",
      content:
        "Securely attaches to most car sun visors without blocking visibility, making it suitable for hatchbacks, sedans, SUVs, and trucks.",
    },

    {
      heading: "Neat & Space-Saving Design",
      content:
        "Compact construction helps organize your car interior while eliminating loose tissue boxes on seats, dashboards, or center consoles.",
    },

    {
      heading: "Quick Installation & Easy Refill",
      content:
        "Simply slide the holder onto the visor, insert a tissue pack, and replace it whenever required for convenient everyday use.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Premium PU Leather",
    "Universal Fit",
    "Easy Installation",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 74 },
      { stars: 4, percentage: 16 },
      { stars: 3, percentage: 6 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "int-review-3",

        reviewerName: "Ankit",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Fits perfectly on my sun visor and keeps tissues within easy reach. The leather finish looks premium inside the car.",

        postedDateAgo: "1 month ago",

        userUploadedMedia: [
          "/reviews/car-tissue-holder-review-1.png",
        ],
      },

      {
        id: "int-review-4",

        reviewerName: "Sneha",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Very useful accessory for daily driving. Installation was simple and it keeps the cabin much more organized.",

        postedDateAgo: "3 months ago",
      },
    ],
  },
},
//Product-3
{
  id: "int-prod-3",

  title:
    "Premium Car Seat Gap Organizer | PU Leather Car Seat Gap Filler with Storage Pocket | Universal Interior Organizer for Phone, Keys, Wallet & Coins",

  brand: "Car Seat Gap Organizer",

  price: 599,

  currencySymbol: "₹",

  imagePath: "/products/interiors/neck-rest-pillow-main.png",

  galleryImages: [
    "/products/interior/car-seat-gap-organizer-1.png",
    "/products/interior/car-seat-gap-organizer-2.png",
    "/products/interior/car-seat-gap-organizer-3.png",
    "/products/interior/car-seat-gap-organizer-4.png",
  ],

  discountText: "-40%",

  ratingData: {
    averageRating: 4.4,
    totalReviewsCount: 890,
    boughtPastMonthText: "2K+ bought in past month",
    soldLastWeekText: "Sold over 240 times last week",
  },

  attributes: [
    {
      label: "Material",
      value: "Premium PU Leather",
    },

    {
      label: "Installation",
      value: "Slip-In Design",
    },

    {
      label: "Compatibility",
      value: "Universal Vehicle Fit",
    },

    {
      label: "Storage",
      value: "Phone, Keys & Wallet",
    },

    {
      label: "Placement",
      value: "Between Seat & Console",
    },
  ],

  aboutSections: [
    {
      heading: "Eliminates Seat Gap Clutter",
      content:
        "Prevents phones, keys, coins and other small essentials from falling between the seat and center console while keeping everything within easy reach.",
    },

    {
      heading: "Premium Leather Construction",
      content:
        "Made from durable PU leather with a premium finish that blends seamlessly with modern vehicle interiors while resisting daily wear.",
    },

    {
      heading: "Extra Storage Space",
      content:
        "Provides convenient storage for mobile phones, wallets, parking cards, sunglasses, receipts and other frequently used accessories.",
    },

    {
      heading: "Universal Vehicle Compatibility",
      content:
        "Designed to fit most hatchbacks, sedans, SUVs and trucks without requiring tools or permanent installation.",
    },

    {
      heading: "Quick & Tool-Free Installation",
      content:
        "Simply slide the organizer into the gap between the seat and center console for a secure fit and instant organization.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Premium PU Leather",
    "Universal Fit",
    "Extra Storage",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 75 },
      { stars: 4, percentage: 15 },
      { stars: 3, percentage: 6 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "int-review-5",

        reviewerName: "Rohit",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "My phone and keys no longer disappear between the seats. Fits perfectly and looks like a factory accessory.",

        postedDateAgo: "1 month ago",

        userUploadedMedia: [
          "/reviews/car-seat-gap-organizer-review-1.png",
        ],
      },

      {
        id: "int-review-6",

        reviewerName: "Karan",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Easy to install and provides useful storage for my wallet and parking cards without affecting seat movement.",

        postedDateAgo: "3 months ago",
      },
    ],
  },
},
//product-4
{
  id: "int-prod-4",

  title:
    "RED Dummy Tow Hook for Car Universal Triangle Bumper Exterior Accessory for Car, Truck & SUV",

  brand: "RoadStyle",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/exterior/red-towhook-main.png",

  galleryImages: [
    "/products/exterior/red-towhook-1.png",
    "/products/exterior/red-towhook-2.png",
    "/products/exterior/red-towhook-3.png",
    "/products/exterior/red-towhook-4.png",
  ],

  discountText: "-12%",

  ratingData: {
    averageRating: 4.5,
    totalReviewsCount: 821,
    boughtPastMonthText: "1K+ bought in past month",
    soldLastWeekText: "Sold over 147 times last week",
  },

  attributes: [
    {
      label: "Accessory Type",
      value: "Decorative Dummy Tow Hook",
    },

    {
      label: "Compatibility",
      value: "Car, SUV and Truck Universal Fit",
    },

    {
      label: "Material",
      value: "High Strength Metal Alloy",
    },

    {
      label: "Finish",
      value: "Sport Red Performance Finish",
    },

    {
      label: "Installation",
      value: "Front or Rear Bumper Mounting",
    },
  ],

  aboutSections: [
    {
      heading: "Sport Styling Upgrade",

      content:
        "Adds racing inspired visual styling to vehicle bumper design for aggressive exterior appearance enhancement.",
    },

    {
      heading: "Universal Vehicle Fit",

      content:
        "Designed for universal installation across cars, SUVs and trucks with compatible bumper positions.",
    },

    {
      heading: "Durable Metal Build",

      content:
        "High strength alloy construction provides long term durability against outdoor weather exposure.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Sport Styling Upgrade",
    "Metal Construction",
    "Universal Fit",
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
        id: "ext-review-11",
        reviewerName: "Raghav",
        rating: 5,
        isVerifiedBuyer: true,
        commentText:
          "Looks very sporty on front bumper and metal finish quality feels surprisingly premium.",

        postedDateAgo: "2 months ago",

        userUploadedMedia: [
          "/reviews/towhook-review-1.png",
        ],
      },

      {
        id: "ext-review-12",
        reviewerName: "Abhishek",
        rating: 4,
        isVerifiedBuyer: true,
        commentText:
          "Purely decorative but definitely improves front exterior styling of the vehicle.",

        postedDateAgo: "4 months ago",
      },
    ],
  },
},
//product-5
{
  id: "int-prod-5",

  title:
    "3M Car Dashboard Dresser 250ml | Restores Dashboard Shine | UV Protection | Non-Greasy Interior Polish",

  brand: "3M",

  price: 375,

  currencySymbol: "₹",

  imagePath: "/products/interiors/3M-Dashboard-main.png",

  galleryImages: [
    "/products/interior/dashboard-dresser-1.png",
    "/products/interior/dashboard-dresser-2.png",
    "/products/interior/dashboard-dresser-3.png",
    "/products/interior/dashboard-dresser-4.png",
  ],

  discountText: "-17%",

  ratingData: {
    averageRating: 4.4,
    totalReviewsCount: 7600,
    boughtPastMonthText: "2K+ bought in past month",
    soldLastWeekText: "Sold over 350 times last week",
  },

  attributes: [
    {
      label: "Product Type",
      value: "Dashboard Dresser",
    },
    {
      label: "Volume",
      value: "250ml",
    },
    {
      label: "Surface Compatibility",
      value: "Dashboard, Vinyl & Plastic Trim",
    },
    {
      label: "Finish",
      value: "Non-Greasy Matte Shine",
    },
    {
      label: "Protection",
      value: "UV & Dust Protection",
    },
  ],

  aboutSections: [
    {
      heading: "Restores Dashboard Appearance",
      content:
        "Revives faded dashboards and interior plastic surfaces with a clean, rich finish while restoring the original look of your vehicle's cabin.",
    },

    {
      heading: "UV Protection Formula",
      content:
        "Helps protect dashboards and interior trim from harmful UV rays that cause fading, cracking and discoloration over time.",
    },

    {
      heading: "Non-Greasy Dust Resistant Finish",
      content:
        "Leaves behind a smooth, non-sticky finish that resists dust build-up while maintaining a fresh, premium appearance.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "UV Protection",
    "Non-Greasy Formula",
    "Interior Care",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 74 },
      { stars: 4, percentage: 17 },
      { stars: 3, percentage: 5 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "int-review-7",

        reviewerName: "Rahul",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Dashboard looks brand new after application. It gives a natural shine without feeling oily.",

        postedDateAgo: "2 months ago",

        userUploadedMedia: [
          "/reviews/dashboard-dresser-review-1.png",
        ],
      },

      {
        id: "int-review-8",

        reviewerName: "Vikram",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Easy to apply and provides good UV protection. Keeps the dashboard looking clean for days.",

        postedDateAgo: "4 months ago",
      },
    ],
  },
},
//product-6
{
  id: "int-prod-6",

  title:
    "5 PCS Microfiber Car Duster Kit - Interior & Exterior Car Cleaning Detailing Tool Scratch",

  brand: "AutoClean Pro",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/exterior/microfiber-kit-main.png",

  galleryImages: [
    "/products/exterior/microfiber-kit-1.png",
    "/products/exterior/microfiber-kit-2.png",
    "/products/exterior/microfiber-kit-3.png",
    "/products/exterior/microfiber-kit-4.png",
  ],

  discountText: "-14%",

  ratingData: {
    averageRating: 4.5,

    totalReviewsCount: 1246,

    boughtPastMonthText: "1K+ bought in past month",

    soldLastWeekText: "Sold over 264 times last week",
  },

  attributes: [
    {
      label: "Kit Contents",
      value: "5 Piece Cleaning Kit",
    },

    {
      label: "Material",
      value: "Premium Microfiber Fabric",
    },

    {
      label: "Usage",
      value: "Interior and Exterior Car Cleaning",
    },

    {
      label: "Scratch Safety",
      value: "Non-Abrasive Surface Safe Cleaning",
    },

    {
      label: "Application",
      value: "Detailing, Dust Removal and Surface Cleaning",
    },
  ],

  aboutSections: [
    {
      heading: "Scratch Safe Cleaning",

      content:
        "Soft microfiber material removes dust and dirt effectively without causing scratches on paint or dashboard surfaces.",
    },

    {
      heading: "Complete Car Detailing Kit",

      content:
        "Five-piece cleaning kit designed for complete interior and exterior maintenance and detailing work.",
    },

    {
      heading: "Reusable Washable Material",

      content:
        "Durable microfiber fabric supports repeated washing and long-term cleaning performance without fiber damage.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Scratch Safe Material",
    "Reusable Fabric",
    "Easy Wash Design",
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
        id: "ext-review-1",

        reviewerName: "Arpit",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Very soft material and cleans dust without leaving scratches. Good complete cleaning kit.",

        postedDateAgo: "2 months ago",

        userUploadedMedia: [
          "/reviews/microfiber-review-1.png",
        ],
      },

      {
        id: "ext-review-2",

        reviewerName: "Harsh",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Useful for weekly car cleaning and microfiber quality feels much better than expected.",

        postedDateAgo: "4 months ago",
      },
    ],
  },
},
//product-7
{
  id: "int-prod-7",

  title:
    "3M Leather & Vinyl Restorer 250ml | Restores Shine & Protects Interior Surfaces | Suitable for Leather, Vinyl & Plastic",

  brand: "3M",

  price: 499,

  currencySymbol: "₹",

  imagePath: "/products/interiors/shine-shampoo-main.png",

  galleryImages: [
    "/products/interior/leather-vinyl-restorer-1.png",
    "/products/interior/leather-vinyl-restorer-2.png",
    "/products/interior/leather-vinyl-restorer-3.png",
    "/products/interior/leather-vinyl-restorer-4.png",
  ],

  discountText: "-17%",

  ratingData: {
    averageRating: 4.4,
    totalReviewsCount: 3200,
    boughtPastMonthText: "1K+ bought in past month",
    soldLastWeekText: "Sold over 180 times last week",
  },

  attributes: [
    {
      label: "Product Type",
      value: "Leather & Vinyl Restorer",
    },
    {
      label: "Volume",
      value: "250ml",
    },
    {
      label: "Compatible Surfaces",
      value: "Leather, Vinyl & Plastic",
    },
    {
      label: "Finish",
      value: "Natural Satin Shine",
    },
    {
      label: "Protection",
      value: "UV & Dust Resistant",
    },
  ],

  aboutSections: [
    {
      heading: "Restores Interior Surfaces",
      content:
        "Revives faded leather, vinyl and plastic trims while restoring their original texture and rich appearance for a premium cabin finish.",
    },

    {
      heading: "Protects Against UV Damage",
      content:
        "Creates a protective layer that helps prevent fading, drying and cracking caused by prolonged exposure to sunlight.",
    },

    {
      heading: "Non-Greasy Long-Lasting Finish",
      content:
        "Leaves behind a clean, satin finish without oily residue while reducing dust attraction and keeping interiors looking fresh for longer.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Leather Safe",
    "UV Protection",
    "Long-Lasting Finish",
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
        id: "int-review-13",

        reviewerName: "Arjun",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Excellent for leather seats and dashboard trims. Leaves a clean natural shine without making the surface slippery.",

        postedDateAgo: "2 months ago",

        userUploadedMedia: [
          "/reviews/leather-restorer-review-1.png",
        ],
      },

      {
        id: "int-review-14",

        reviewerName: "Karthik",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Easy to apply and brings back the original look of the interior. The UV protection is an added advantage.",

        postedDateAgo: "5 months ago",
      },
    ],
  },
},
]
},

{
id: "cat-6",
categoryName: "Car Essentials",
slug: "car-essentials",

items: [

  //Product-1
  {
  id: "ess-prod-1",

  title:
    "Tubeless Tyre Puncture Repair Kit | Heavy-Duty T-Handle Tools | High-Grip Tyre Plug Kit for Cars, Bikes & SUVs",

  brand: "Tubeless Puncture Repair Kit",

  price: 499,

  currencySymbol: "₹",

  imagePath: "/products/essentials/olkino-repair-main.png",

  galleryImages: [
    "/products/essentials/puncture-repair-kit-1.png",
    "/products/essentials/puncture-repair-kit-2.png",
    "/products/essentials/puncture-repair-kit-3.png",
    "/products/essentials/puncture-repair-kit-4.png",
  ],

  discountText: "-29%",

  ratingData: {
    averageRating: 4.5,
    totalReviewsCount: 1450,
    boughtPastMonthText: "800+ bought in past month",
    soldLastWeekText: "Sold over 140 times last week",
  },

  attributes: [
    {
      label: "Product Type",
      value: "Tubeless Tyre Repair Kit",
    },

    {
      label: "Compatibility",
      value: "Cars, Bikes & SUVs",
    },

    {
      label: "Tool Material",
      value: "Heavy-Duty Steel",
    },

    {
      label: "Handle Type",
      value: "High-Grip T-Handle",
    },

    {
      label: "Application",
      value: "Emergency Tyre Repair",
    },
  ],

  aboutSections: [
    {
      heading: "Quick Emergency Tyre Repair",
      content:
        "Repairs punctures in tubeless tyres within minutes, allowing you to continue your journey without waiting for roadside assistance.",
    },

    {
      heading: "Heavy-Duty Professional Tools",
      content:
        "Features durable steel insertion and reaming tools with ergonomic T-handles that provide excellent grip and control during repairs.",
    },

    {
      heading: "Suitable for Multiple Vehicles",
      content:
        "Designed for cars, SUVs, motorcycles and other tubeless tyres, making it an essential emergency kit for everyday driving and long road trips.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Heavy-Duty Steel Tools",
    "Universal Compatibility",
    "Emergency Roadside Kit",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 76 },
      { stars: 4, percentage: 15 },
      { stars: 3, percentage: 5 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "ess-review-1",

        reviewerName: "Rohit",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Very sturdy tools and easy to use. Fixed my tyre puncture in just a few minutes during a highway trip.",

        postedDateAgo: "1 month ago",

        userUploadedMedia: [
          "/reviews/puncture-repair-review-1.png",
        ],
      },

      {
        id: "ess-review-2",

        reviewerName: "Amit",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Good quality repair kit with strong T-handles. A must-have emergency accessory for every car owner.",

        postedDateAgo: "3 months ago",
      },
    ],
  },
},
  //Product-2
  {
  id: "ess-prod-2",

  title:
    "Amazon Brand - Solimo Car Body Cover | Water Resistant | UV Protection | Dust & Scratch Resistant | Suitable for Hatchback Cars",

  brand: "Solimo",

  price: 999,

  currencySymbol: "₹",

  imagePath: "/products/essentials/car-cover-main.png",

  galleryImages: [
    "/products/essentials/car-cover-1.png",
    "/products/essentials/car-cover-2.png",
    "/products/essentials/car-cover-3.png",
    "/products/essentials/car-cover-4.png",
  ],

  discountText: "-43%",

  ratingData: {
    averageRating: 4.2,
    totalReviewsCount: 15000,
    boughtPastMonthText: "2K+ bought in past month",
    soldLastWeekText: "Sold over 350 times last week",
  },

  attributes: [
    {
      label: "Material",
      value: "Premium Polyester Fabric",
    },
    {
      label: "Protection",
      value: "Water, Dust & UV Resistant",
    },
    {
      label: "Vehicle Type",
      value: "Hatchback Cars",
    },
    {
      label: "Fit Type",
      value: "Elastic Hem with Mirror Pockets",
    },
    {
      label: "Weather Resistance",
      value: "All-Season Outdoor Protection",
    },
  ],

  aboutSections: [
    {
      heading: "Complete Outdoor Protection",
      content:
        "Protects your vehicle from dust, rain, sunlight, bird droppings, tree sap, and everyday environmental damage while parked outdoors.",
    },

    {
      heading: "Durable Water-Resistant Fabric",
      content:
        "Made from premium polyester material that resists water, UV rays, and scratches while remaining lightweight and easy to handle.",
    },

    {
      heading: "Secure & Custom Fit",
      content:
        "Features elastic hems and mirror pockets for a snug fit that stays securely in place, even during windy weather conditions.",
    },

    {
      heading: "All-Season Vehicle Care",
      content:
        "Suitable for year-round use, helping maintain your car's paint finish and reducing the need for frequent cleaning and polishing.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Water Resistant",
    "UV Protection",
    "Dust & Scratch Resistant",
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
        id: "ess-review-3",

        reviewerName: "Rahul",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Fits my hatchback perfectly. The material is durable and protects the car well from dust and sunlight.",

        postedDateAgo: "2 months ago",

        userUploadedMedia: [
          "/reviews/car-cover-review-1.png",
        ],
      },

      {
        id: "ess-review-4",

        reviewerName: "Vikram",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Good quality cover with water resistance. Easy to install and remove for daily use.",

        postedDateAgo: "5 months ago",
      },
    ],
  },
},
//Product-3
{
  id: "ess-prod-3",

  title:
    "TUSA Digital Car Tyre Inflator | 12V Portable Air Compressor | Digital Pressure Gauge | Auto Shut-Off | LED Light",

  brand: "TUSA",

  price: 1999,

  currencySymbol: "₹",

  imagePath: "/products/essentials/portable-aircompressor-main.png",

  galleryImages: [
    "/products/essentials/tyre-inflator-1.png",
    "/products/essentials/tyre-inflator-2.png",
    "/products/essentials/tyre-inflator-3.png",
    "/products/essentials/tyre-inflator-4.png",
  ],

  discountText: "-38%",

  ratingData: {
    averageRating: 4.4,
    totalReviewsCount: 9200,
    boughtPastMonthText: "3K+ bought in past month",
    soldLastWeekText: "Sold over 450 times last week",
  },

  attributes: [
    {
      label: "Product Type",
      value: "Digital Tyre Inflator",
    },

    {
      label: "Power Source",
      value: "12V Car Socket",
    },

    {
      label: "Pressure Display",
      value: "Digital LCD Screen",
    },

    {
      label: "Safety Feature",
      value: "Automatic Shut-Off",
    },

    {
      label: "Vehicle Compatibility",
      value: "Cars, Bikes & SUVs",
    },
  ],

  aboutSections: [
    {
      heading: "Fast & Accurate Tyre Inflation",
      content:
        "Inflates tyres quickly with a powerful 12V motor while the digital pressure gauge provides precise PSI readings for safe driving.",
    },

    {
      heading: "Automatic Pressure Control",
      content:
        "Set your desired tyre pressure and the inflator automatically stops when the target pressure is reached, preventing over-inflation.",
    },

    {
      heading: "Portable Emergency Companion",
      content:
        "Compact and lightweight design makes it easy to store in your vehicle. Perfect for emergencies, road trips and regular tyre maintenance.",
    },

    {
      heading: "Built-in LED Work Light",
      content:
        "Integrated LED light improves visibility during night-time tyre inflation or roadside emergencies, making operation safer in low-light conditions.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "12V Powered",
    "Auto Shut-Off",
    "Digital Pressure Display",
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
        id: "ess-review-5",

        reviewerName: "Sandeep",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Inflates tyres quickly and the auto shut-off feature is very convenient. The digital display is accurate and easy to read.",

        postedDateAgo: "2 months ago",

        userUploadedMedia: [
          "/reviews/tyre-inflator-review-1.png",
        ],
      },

      {
        id: "ess-review-6",

        reviewerName: "Kiran",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Compact enough to keep in the boot. Great for emergencies and regular tyre pressure checks during long drives.",

        postedDateAgo: "4 months ago",
      },
    ],
  },
},
//Product-4
{
  id: "ess-prod-4",

  title:
    "Compact First Aid Kit for Car | 40-Piece Emergency Medical Kit | Bandages, Antiseptic Wipes & Essential Safety Supplies",

  brand: "First Aid Kit",

  price: 699,

  currencySymbol: "₹",

  imagePath: "/products/essentials/first-aid-kit-main.png",

  galleryImages: [
    "/products/essentials/first-aid-kit-1.png",
    "/products/essentials/first-aid-kit-2.png",
    "/products/essentials/first-aid-kit-3.png",
    "/products/essentials/first-aid-kit-4.png",
  ],

  discountText: "-30%",

  ratingData: {
    averageRating: 4.6,
    totalReviewsCount: 1250,
    boughtPastMonthText: "900+ bought in past month",
    soldLastWeekText: "Sold over 170 times last week",
  },

  attributes: [
    {
      label: "Product Type",
      value: "Emergency First Aid Kit",
    },

    {
      label: "Contents",
      value: "40 Essential Medical Items",
    },

    {
      label: "Usage",
      value: "Roadside & Travel Emergencies",
    },

    {
      label: "Storage",
      value: "Compact Zipper Carry Case",
    },

    {
      label: "Suitable For",
      value: "Cars, SUVs & Travel",
    },
  ],

  aboutSections: [
    {
      heading: "Complete Emergency Medical Kit",
      content:
        "Contains essential first aid supplies including bandages, antiseptic wipes, gauze, adhesive tape and other medical essentials for handling minor injuries during travel.",
    },

    {
      heading: "Compact & Travel Friendly",
      content:
        "Lightweight zippered storage case fits easily inside your glove box, boot or door pocket, making it convenient to carry on every journey.",
    },

    {
      heading: "Ideal for Road Trips",
      content:
        "Designed for use in cars, SUVs, camping trips and outdoor travel, ensuring you're prepared for unexpected roadside emergencies.",
    },

    {
      heading: "Well Organized & Easy Access",
      content:
        "Neatly arranged medical supplies allow quick identification and easy access during emergency situations when every second matters.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "40 Medical Essentials",
    "Compact Carry Case",
    "Travel Ready",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 79 },
      { stars: 4, percentage: 14 },
      { stars: 3, percentage: 4 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 1 },
    ],

    userFeed: [
      {
        id: "ess-review-9",

        reviewerName: "Rakesh",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "A must-have emergency kit for every car. Compact, well organized and contains all the basic medical supplies needed during travel.",

        postedDateAgo: "2 months ago",

        userUploadedMedia: [
          "/reviews/first-aid-review-1.png",
        ],
      },

      {
        id: "ess-review-10",

        reviewerName: "Anil",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Good quality first aid kit with useful medical supplies. Fits perfectly inside the glove box and gives peace of mind on long drives.",

        postedDateAgo: "4 months ago",
      },
    ],
  },
},

//Product-5



]
},

];