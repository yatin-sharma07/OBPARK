'use client'
import Link from "next/link";
import { motion } from 'framer-motion'
import Image from "next/image";

const categories = [
  {
    name: "Car Accessories",
    href: "/shop/car-accessories",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    description: "Ergonomic cushions, organizers and premium comfort upgrades designed to enhance every drive.",
    gridClass: "md:col-span-2",
  },
  {
    name: "Car Care Detailing",
    href: "/shop/car-care-detaling",
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9",
    description: "Professional-grade shampoos, wax polishes and detailing kits to keep your vehicle spotless and protected.",
    gridClass: "md:col-span-1",
  },
  {
    name: "Electronics & Smart Gadgets",
    href: "/shop/electronics-and-smart-gadgets",
    image: "https://images.unsplash.com/photo-1508974239320-0a029497e820",
    description: "Wireless CarPlay adapters, dashcams, GPS trackers and intelligent automotive technology for smarter journeys.",
    gridClass: "md:col-span-1",
  },
  {
    name: "Emergency & Safety",
    href: "/shop/emergency-and-safety",
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc",
    description: "Fire extinguishers, first-aid kits and essential roadside safety tools built for confidence on every trip.",
    gridClass: "md:col-span-2",
  },
  {
    name: "Travel & Road Safety",
    href: "/shop/travel-and-road-safety",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800",
    description: "Travel organizers, neck pillows and road-trip essentials designed for long-distance comfort and safety.",
    gridClass: "md:col-span-1",
  },
  {
    name: "Family & Pet Care Products",
    href: "/shop/family-and-pet-care-products",
    image: "https://images.unsplash.com/photo-1609220136736-443140cffec6",
    description: "Child car seats, pet barriers and family-friendly accessories for safe and enjoyable rides with loved ones.",
    gridClass: "md:col-span-1",
  },
  {
    name: "EV Products",
    href: "/shop/ev-products",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7",
    description: "Charging cable holders, EV connectors and essential electric mobility accessories built for the future of driving.",
    gridClass: "md:col-span-1",
  },
  {
    name: "Bike Shop",
    href: "/shop/bike-shop",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39",
    description: "Phone mounts, riding gear and two-wheeler accessories engineered for daily commutes and weekend adventures.",
    gridClass: "md:col-span-1",
  },
  {
    name: "Guest Gifting",
    href: "/shop/guest-gifting",
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a",
    description: "Curated luxury hampers and premium gift sets perfect for weddings, corporate events and special celebrations.",
    gridClass: "md:col-span-1",
  },
];

export default function ShopPage() {
  // 1. Parent container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  // 2. Individual items (Heading aur Cards) variants
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.215, 0.61, 0.355, 1] as const,
      },
    },
  }

  return (
    <main className="min-h-screen bg-transparent mt-16 selection:bg-[#59D0B5]/20 selection:text-[#074139]">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
          className="max-w-4xl"
        >
          <p className="text-xs uppercase tracking-[3px] font-bold text-[#308F8A] mb-4">
            Premium Automotive Store
          </p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-[#074139] leading-[1.08]">
            Discover Better
            <br />
            Automotive Essentials
          </h1>
          <p className="mt-6 text-base text-slate-500 max-w-2xl leading-relaxed">
            Explore premium automotive accessories designed around electric mobility, smart driving technology, emergency preparedness, and everyday vehicle care.
          </p>
        </motion.div>
      </section>

      {/* CATEGORY GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-xs uppercase font-bold tracking-[2px] text-gray-400">
              Browse Core Categories
            </h2>
            <span className="h-px flex-1 bg-gray-100" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className={`
                  ${category.gridClass}
                  group relative flex flex-col justify-between overflow-hidden
                  rounded-3xl border border-gray-100 bg-white
                  transition-all duration-500 ease-out
                  hover:-translate-y-1.5 hover:border-[#308F8A]/40
                  hover:shadow-[0_24px_48px_rgba(7,65,57,0.08)]
                `}
              >
                {/* Visual Area */}
                <div className="relative h-64 md:h-72 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />
                </div>

                {/* Content Area */}
                <div className="flex flex-1 flex-col justify-between p-7">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <h3 className="text-xl font-bold tracking-tight text-[#074139] transition-colors duration-200 group-hover:text-[#308F8A]">
                        {category.name}
                      </h3>
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-50 text-gray-400 transition-all duration-300 group-hover:bg-[#074139] group-hover:text-white group-hover:rotate-45">
                        <span className="text-sm font-semibold leading-none">↗</span>
                      </div>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE SECTION */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="border-y border-gray-100 bg-white/70 backdrop-blur-md py-24"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* HEADING BLOCK */}
          <motion.div variants={itemVariants} className="mb-16">
            <p className="text-xs uppercase tracking-[3px] font-bold text-[#308F8A] mb-3">
              Designed For Modern Driving
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#074139] leading-tight">
              Automotive Technology
              <br />
              Built Around Real Needs
            </h2>
          </motion.div>

          {/* CARDS GRID */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* CARD 1 */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group rounded-3xl border border-gray-100 bg-[#FAFAFA] p-8 transition-colors duration-300 hover:border-[#308F8A]/30 hover:bg-white hover:shadow-[0_20px_40px_rgba(7,65,57,0.05)]"
            >
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#074139]/5 text-[#074139] transition-colors duration-300 group-hover:bg-[#308F8A] group-hover:text-white">
                <span className="text-xs font-bold">01</span>
              </div>
              <h3 className="text-lg font-bold text-[#074139] mb-3">
                Smart Vehicle Technology
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Dashcams, GPS monitoring, HUD displays, bluetooth systems, and intelligent automotive electronics designed for seamless connectivity.
              </p>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group rounded-3xl border border-gray-100 bg-[#FAFAFA] p-8 transition-colors duration-300 hover:border-[#308F8A]/30 hover:bg-white hover:shadow-[0_20px_40px_rgba(7,65,57,0.05)]"
            >
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#074139]/5 text-[#074139] transition-colors duration-300 group-hover:bg-[#308F8A] group-hover:text-white">
                <span className="text-xs font-bold">02</span>
              </div>
              <h3 className="text-lg font-bold text-[#074139] mb-3">
                Electric Mobility Future
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                EV charging accessories, heavy-duty connectors, and cable management systems built for next-generation transport efficiency.
              </p>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group rounded-3xl border border-gray-100 bg-[#FAFAFA] p-8 transition-colors duration-300 hover:border-[#308F8A]/30 hover:bg-white hover:shadow-[0_20px_40px_rgba(7,65,57,0.05)]"
            >
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#074139]/5 text-[#074139] transition-colors duration-300 group-hover:bg-[#308F8A] group-hover:text-white">
                <span className="text-xs font-bold">03</span>
              </div>
              <h3 className="text-lg font-bold text-[#074139] mb-3">
                Safety & Preparedness
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Emergency tools, compact first-aid systems, and utility equipment engineered to keep drivers confident through unexpected situations.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-28 text-center">
        <div className="mx-auto max-w-3xl rounded-[2.5rem] border border-gray-100 bg-gradient-to-b from-[#FAFAFA] to-white p-12 md:p-16 shadow-[0_20px_50px_rgba(7,65,57,0.03)]">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#074139] mb-4">
            Built For Every Journey
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-xl mx-auto leading-relaxed mb-8">
            Discover automotive products engineered around performance, safety, technology, and everyday driving comfort.
          </p>
          <Link
            href="/shop/electronics-and-smart-gadgets"
            className="
              inline-flex items-center justify-center
              bg-[#074139] text-white
              px-9 py-4
              rounded-2xl
              text-sm font-bold tracking-wide
              transition-all duration-300
              hover:bg-[#308F8A] hover:shadow-[0_12px_24px_rgba(48,143,138,0.25)] hover:-translate-y-0.5
            "
          >
            Start Exploring
          </Link>
        </div>
      </section>

    </main>
  );
}