import { microgrammaBold, michroma } from '@/lib/fonts'

export default function OurStoryPage() {
  return (
    <div className="w-full bg-[#eefaf6] min-h-screen pt-32 pb-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-[1000px] mx-auto text-[#074139]">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className={`${michroma.className} text-xs sm:text-sm font-bold uppercase tracking-widest mb-4`}>
            About Us
          </p>
          <h1 className={`${microgrammaBold.className} text-4xl sm:text-5xl md:text-6xl tracking-wide uppercase`}>
            Our Story
          </h1>
        </div>

        {/* Content Section */}
        <div className={`${michroma.className} space-y-8 text-xs sm:text-sm md:text-[15px] leading-relaxed`}>
          
          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold mb-2">Building the Future of Parking with Spatial Computing</h2>
            <p>
              At OBPARK, we believe parking should be effortless. Yet every day, millions of people spend valuable time searching for parking spaces, navigating complex parking facilities, and dealing with unnecessary congestion.
            </p>
            <p>
              We founded OBPARK to solve this challenge through innovation.
            </p>
            <p>
              Developed by Obrive Industries Pvt. Ltd., OBPARK is designed as a next-generation smart parking and indoor navigation platform powered by Spatial Computing, Artificial Intelligence, and intelligent digital mapping. Our vision is to transform traditional parking into a seamless, connected, and intelligent experience.
            </p>
          </div>

          <div className="pt-6">
            <h2 className="text-base sm:text-lg font-bold mb-3">A New Era of Smart Parking</h2>
            <p className="mb-4">
              OBPARK is pioneering the use of Spatial Computing technology for smart parking and indoor navigation in India, bringing immersive digital experiences to real-world parking environments. By combining intelligent mapping, real-time navigation, digital parking management, and smart mobility solutions, we are redefining how people interact with parking spaces.
            </p>
            <p>
              Our platform is built to help drivers find parking faster, assist property owners in optimizing parking operations, and enable businesses to deliver a smarter customer experience.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">Our Vision</h2>
            <p className="mb-4">
              To become India's leading Spatial Computing platform for smart parking and indoor mobility, enabling connected, intelligent, and efficient parking experiences for everyone.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">Our Mission</h2>
            <p className="mb-4">
              To transform parking through innovative technology by delivering secure, intelligent, and scalable solutions that benefit drivers, parking operators, businesses, and smart cities.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">Driving Innovation</h2>
            <p className="mb-2">OBPARK integrates advanced technologies including:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Spatial Computing</li>
              <li>Indoor Navigation</li>
              <li>Artificial Intelligence</li>
              <li>Smart Digital Mapping</li>
              <li>Real-Time Parking Availability</li>
              <li>Digital Payments</li>
              <li>QR-Based Access</li>
              <li>Enterprise Parking Management</li>
            </ul>
            <p>
              Together, these technologies create a modern parking ecosystem that improves convenience, reduces search time, and enhances operational efficiency.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">Looking Ahead</h2>
            <p className="mb-4">
              As India's cities continue to grow and embrace digital transformation, OBPARK is committed to shaping the future of mobility through innovation. Our goal is to make parking simpler, smarter, and more connected for every journey.
            </p>
            <p className="font-bold text-lg mt-6">
              OBPARK — Powering the Future of Smart Parking with Spatial Computing.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
