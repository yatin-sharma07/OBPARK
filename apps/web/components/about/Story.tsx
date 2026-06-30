'use client';

import { motion } from 'framer-motion';
import { microgrammaBold } from '@/lib/fonts';

const infrastructureData = [
  {
    icon: '/Images/about/1.png',
    title: '',
    description:
      'Building the Future of Intelligent Spaces Parking is just the beginning. The same principles that make parking intelligent — spatial computing, digital twins, real-time data, AR experiences — apply to any physical space.',
    featured: true,
  },
  {
    icon: '/Images/about/2.png',
    title: "We're building the infrastructure for a world where:",
    description:
      "Autonomous Vehicles AVs will coordinate with OBPARK's digital twin to find optimal spaces, charge autonomously, and communicate with facility systems without human intervention.",
  },
  {
    icon: '/Images/about/3.png',
    title: 'Smart Cities',
    description:
      'City-wide occupancy data will optimize traffic flow, reduce emissions by 80%, and enable dynamic congestion pricing that works across multiple facilities.',
  },
  {
    icon: '/Images/about/4.png',
    title: 'Seamless Commerce',
    description:
      'Parking facilities become commerce hubs where customers discover services, book appointments, and make purchases while their vehicles are parked.',
  },
  {
    icon: '/Images/about/5.png',
    title: 'Predictive Operations',
    description:
      'AI models so sophisticated that they predict maintenance needs before failures occur, optimize staffing before peak hours hit, and adjust pricing before demand spikes.',
  },
];

export default function Story() {
  return (
    <>
      {/* Who We Are */}
      <section className="w-full bg-white py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2
              className={`${microgrammaBold.className} text-3xl sm:text-[30px] md:text-[38px] lg:text-[40px] font-bold text-[#59D0B5]`}
            >
              Who We Are
            </h2>

            <p className="mt-6 text-base sm:text-[14px] md:text-[18px] text-[#3E7071] max-w-[1100px] mx-auto text-left">
              Obrive Industries Private Limited is a Bangalore-based Spatial Computing and Immersive Technology company. We develop intelligent digital solutions that bridge the gap between physical and digital worlds.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:mt-30 md:mt-20 sm:mt-10 mt-10"
          >
            <h2
              className={`${microgrammaBold.className} text-3xl sm  :text-[30px] md:text-[38px] lg:text-[40px] font-bold text-[#59D0B5]`}
            >
              Innovation at Our Core
            </h2>

            <p className="mt-6 text-base sm:text-[14px] md:text-[18px] text-[#3E7071] max-w-[1100px] mx-auto text-left flex flex-col gap-5">
              <span>
                We're not just building software. We're architecting the infrastructure for intelligent spaces. Every product, every feature, every decision is guided by one principle: how do we help facilities understand their spaces, serve their customers, and unlock hidden value?
              </span>

              <span>
                Our team combines expertise in spatial computing, augmented reality, artificial intelligence, computer vision, and enterprise software. We think in three dimensions. We design for both physical and digital experiences. We build systems that scale.
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Future Infrastructure Section */}
      <section className="w-full bg-white py-6 sm:py-8 md:py-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            mx-3 sm:mx-4 md:mx-6
            rounded-[22px] sm:rounded-[26px] md:rounded-[30px]
            bg-[#C7F1E7]
            px-5 py-8
            sm:px-8 sm:py-10
            md:px-12 md:py-12
            lg:px-16 lg:py-14
          "
        >
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-14 xl:gap-20 items-stretch max-w-[1500px] mx-auto">
            {/* Left Content */}
            <div className="flex flex-col justify-center gap-5 sm:gap-6">
              {infrastructureData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`
                    flex items-center gap-4
                    ${item.featured ? 'bg-white rounded-[12px] p-3 sm:p-4 max-w-full' : ''}
                  `}
                >
                  <div
                    className={`
                      shrink-0 overflow-hidden bg-white flex flex-col items-center justify-center
                      ${item.featured ? 'w-[58px] h-[58px] rounded-[8px]' : 'w-[54px] h-[54px] rounded-[8px]'}
                      sm:w-[64px] sm:h-[64px]
                    `}
                  >
                    <img
                      src={item.icon}
                      alt={item.title || 'OBPark infrastructure icon'}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="pt-0.5">
                    {item.title && (
                      <h3
                        className={`
                          ${microgrammaBold.className}
                          text-[10px] sm:text-xs md:text-[16px]
                          font-bold text-[#06443B]
                          leading-tight mb-2
                        `}
                      >
                        {item.title}
                      </h3>
                    )}

                    <p
                      className={`
                        text-[#245F5A]
                        text-[10px] sm:text-xs md:text-[13px]
                        leading-[1.55]
                        ${item.featured ? 'max-w-[460px]' : 'max-w-[560px]'}
                      `}
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Visual Box */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="
                min-h-[320px]
                sm:min-h-[420px]
                md:min-h-[520px]
                lg:min-h-[620px]
                xl:min-h-[660px]
                rounded-[12px]
                bg-[#D9D9D9]
                overflow-hidden
              "
            >
              {/* Replace this with image/video whenever ready */}
              {/* 
              <img
                src="/Images/About/future-map.png"
                alt="Future intelligent mobility spaces"
                className="w-full h-full object-cover"
              />
              */}
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}