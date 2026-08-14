import { microgrammaBold, michroma } from '@/lib/fonts'

export default function BusinessPolicyPage() {
  return (
    <div className="w-full bg-[#eefaf6] min-h-screen pt-32 pb-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-[1000px] mx-auto text-[#074139]">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className={`${michroma.className} text-xs sm:text-sm font-bold uppercase tracking-widest mb-4`}>
            Legal Links
          </p>
          <h1 className={`${microgrammaBold.className} text-4xl sm:text-5xl md:text-6xl tracking-wide uppercase`}>
            Business & Partner Policy
          </h1>
        </div>

        {/* Content Section */}
        <div className={`${michroma.className} space-y-8 text-xs sm:text-sm md:text-[15px] leading-relaxed`}>
          <div className="mb-8 font-bold">
            <p>In Association With Obrive Industries Private Limited</p>
            <p>Obpark - Legal & Compliance</p>
            <p>Obrive Industries Product Obpark</p>
            <p>February 28, 2025</p>
          </div>

          <div className="pt-6">
            <h2 className="text-base sm:text-lg font-bold mb-1">Intellectual Property Policy</h2>
            <h3 className="text-sm font-bold text-[#074139]/70 mb-3">Protecting Innovation and Creativity.</h3>
            <p className="mb-4">
              All software, trademarks, logos, designs, content, AR navigation technology, maps, graphics, and intellectual property available through OBPARK are owned by or licensed to Obrive Industries Private Limited. Users may not copy, modify, distribute, reverse engineer, or commercially exploit any part of the platform without prior written permission. Unauthorized use may result in legal action.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-1">Disclaimer</h2>
            <h3 className="text-sm font-bold text-[#074139]/70 mb-3">Information Provided "As Is".</h3>
            <p className="mb-4">
              OBPARK strives to provide accurate parking information, navigation guidance, availability updates, and vehicle-related services. However, parking availability, directions, pricing, and third-party information may change without notice. While we make reasonable efforts to maintain accuracy, OBPARK does not guarantee uninterrupted service or accept liability for losses arising from reliance on platform information or third-party services.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-1">Merchant Terms & Conditions</h2>
            <h3 className="text-sm font-bold text-[#074139]/70 mb-3">Partnering for a Better Parking Experience.</h3>
            <p className="mb-4">
              Merchants offering products or services through the OBPARK platform agree to comply with our marketplace standards, pricing policies, product quality requirements, payment terms, and applicable laws. Merchants are responsible for the accuracy of listings, timely order fulfillment, customer support, and maintaining high service standards.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-1">Vehicle Owner Terms</h2>
            <h3 className="text-sm font-bold text-[#074139]/70 mb-3">Guidelines for Every Driver.</h3>
            <p className="mb-4">
              Vehicle owners using OBPARK agree to provide accurate vehicle information, comply with parking facility rules, maintain valid registrations where required, and use the platform responsibly. Users are responsible for parking charges, reservations, and any violations resulting from misuse of parking facilities or the platform.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-1">Parking Partner Agreement</h2>
            <h3 className="text-sm font-bold text-[#074139]/70 mb-3">Empowering Smart Parking Operators.</h3>
            <p className="mb-4">
              Parking operators and property owners partnering with OBPARK agree to maintain accurate parking inventory, operational availability, pricing, and facility information. Partners are responsible for delivering quality parking services while complying with applicable laws, service standards, and the terms of their commercial agreement with OBPARK.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-1">Support Policy</h2>
            <h3 className="text-sm font-bold text-[#074139]/70 mb-3">We're Here to Help.</h3>
            <p className="mb-4">
              OBPARK provides customer support for account management, parking reservations, subscriptions, payments, technical issues, and platform-related inquiries. Support is available through our designated communication channels, and we aim to respond to all requests within reasonable service timelines based on the nature and priority of the issue.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-1">Grievance Redressal Policy</h2>
            <h3 className="text-sm font-bold text-[#074139]/70 mb-3">Fair, Transparent, and Timely Resolution.</h3>
            <p className="mb-4">
              OBPARK is committed to resolving user concerns efficiently and fairly. Customers, merchants, parking partners, and other stakeholders may submit complaints related to our services, transactions, privacy, or platform operations through our official support channels. Every grievance is reviewed promptly, and appropriate action is taken in accordance with applicable laws and our internal resolution process.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
