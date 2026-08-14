'use client'
import Link from "next/link";
import { motion } from 'framer-motion'
import Image from "next/image";

const categories = [
  {
    name: "EV Accessories",
    href: "/category/ev-accessories",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7",
    description: "Modern charging systems, EV connectors and essential electric mobility accessories built for the future of driving.",
    gridClass: "md:col-span-2",
  },
  {
    name: "Electronics & Smart Gadgets",
    href: "/category/electronics-smart-gadgets",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    description: "Dashcams, wireless connectivity, smart displays and intelligent automotive technology for smarter journeys.",
    gridClass: "md:col-span-1",
  },
  {
    name: "Exterior Accessories",
    href: "/category/exterior-accessories",
    image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d",
    description: "Premium styling upgrades, detailing solutions and accessories designed to protect vehicle appearance.",
    gridClass: "md:col-span-1",
  },
  {
    name: "Emergency & Utility Products",
    href: "/category/emergency-utility-products",
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc",
    description: "Portable inflators, safety tools and emergency roadside accessories built for confidence on every trip.",
    gridClass: "md:col-span-2",
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
    <main className="min-h-screen bg-transparent mt-16">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <motion.div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[3px] font-bold text-[#308F8A] mb-5">
            Premium Automotive Store
          </p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-[#074139] leading-tight">
            Discover Better
            <br />
            Automotive Essentials
          </h1>
          <p className="mt-8 text-sm text-slate-500 max-w-2xl leading-8">
            Explore premium automotive accessories designed
            around electric mobility, smart driving technology,
            emergency preparedness and everyday vehicle care.
          </p>
        </motion.div>
      </section>

      {/* CATEGORY GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="mb-14">
          <h2 className="text-xs uppercase font-bold tracking-wider text-gray-400 mb-8">
            Browse Core Categories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-auto">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className={`
                  ${category.gridClass}
                  group
                  overflow-hidden
                  rounded-3xl
                  border
                  border-gray-100
                  bg-gradient-to-br
                  from-gray-50
                  to-white
                  transition-all
                  duration-300
                  hover:shadow-[0_20px_40px_rgba(7,65,57,0.06)]
                  hover:border-[#308F8A]/30
                `}
              >
                {/* FIXED: Added 'relative' class to parent element of Image */}
                <div className="h-64 overflow-hidden relative">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    priority
                    sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold tracking-tight text-[#074139] group-hover:translate-x-1 transition-transform duration-200">
                      {category.name}
                    </h3>
                    <span className="text-gray-300 group-hover:text-[#074139] transition-colors duration-200">
                      ↗
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 leading-7">
                    {category.description}
                  </p>
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
        className="bg-white py-24"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* HEADING BLOCK */}
          <motion.div variants={itemVariants} className="mb-16">
            <p className="text-xs uppercase tracking-[3px] font-bold text-[#308F8A] mb-4">
              Designed For Modern Driving
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#074139]">
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
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(7,65,57,0.04)" }}
              className="bg-[#FAFAFA] rounded-3xl p-8 border border-gray-100 transition-shadow duration-300 cursor-pointer"
            >
              <h3 className="text-lg font-bold text-[#074139] mb-4">
                Smart Vehicle Technology
              </h3>
              <p className="text-sm text-slate-500 leading-7">
                Dashcams, GPS monitoring, HUD displays,
                bluetooth systems and intelligent automotive electronics.
              </p>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(7,65,57,0.04)" }}
              className="bg-[#FAFAFA] rounded-3xl p-8 border border-gray-100 transition-shadow duration-300 cursor-pointer"
            >
              <h3 className="text-lg font-bold text-[#074139] mb-4">
                Electric Mobility Future
              </h3>
              <p className="text-sm text-slate-500 leading-7">
                EV charging accessories and advanced electric
                mobility systems built for next generation transport.
              </p>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(7,65,57,0.04)" }}
              className="bg-[#FAFAFA] rounded-3xl p-8 border border-gray-100 transition-shadow duration-300 cursor-pointer"
            >
              <h3 className="text-lg font-bold text-[#074139] mb-4">
                Safety & Roadside Preparedness
              </h3>
              <p className="text-sm text-slate-500 leading-7">
                Emergency utility products designed to keep
                drivers prepared for unexpected situations.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#074139] mb-6">
          Built For Every Journey
        </h2>
        <p className="text-sm text-slate-500 max-w-2xl mx-auto leading-8 mb-10">
          Discover automotive products engineered around
          performance, safety, technology and everyday driving comfort.
        </p>
        <Link
          href="/category/electronics-smart-gadgets"
          className="
            inline-block
            bg-gradient-to-r
            from-[#59D0B5]
            to-[#CAEDE5]
            text-white
            px-10
            py-4
            rounded-xl
            text-sm
            font-bold
            transition
            hover:opacity-90
          "
        >
          Start Exploring
        </Link>
      </section>

    </main>
  );
}