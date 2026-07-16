import { microgrammaBold, michroma } from '@/lib/fonts'

export default function EnterpriseRegulatoryPage() {
  return (
    <div className="w-full bg-[#eefaf6] min-h-screen pt-32 pb-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-[1000px] mx-auto text-[#074139]">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className={`${michroma.className} text-xs sm:text-sm font-bold uppercase tracking-widest mb-4`}>
            Legal Links
          </p>
          <h1 className={`${microgrammaBold.className} text-4xl sm:text-5xl md:text-6xl tracking-wide uppercase`}>
            Enterprise & Regulatory
          </h1>
        </div>

        {/* Content Section */}
        <div className={`${michroma.className} space-y-8 text-xs sm:text-sm md:text-[15px] leading-relaxed`}>
          
          <div className="pt-6">
            <h2 className="text-base sm:text-lg font-bold mb-1">Corporate Account Agreement</h2>
            <p className="text-sm font-bold text-[#074139]/70 mb-3">Last Updated: July 15, 2026</p>
            <p className="mb-4">
              Corporate accounts are available for businesses and organizations managing parking services through OBPARK. Account holders are responsible for authorized users, accurate information, timely payments, and compliance with applicable terms and policies.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-1">Vendor Agreement</h2>
            <p className="text-sm font-bold text-[#074139]/70 mb-3">Last Updated: July 15, 2026</p>
            <p className="mb-4">
              Vendors and service providers working with OBPARK must deliver services professionally, comply with applicable laws, maintain confidentiality, and meet agreed service standards throughout the engagement.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-1">API Terms</h2>
            <p className="text-sm font-bold text-[#074139]/70 mb-3">Last Updated: July 15, 2026</p>
            <p className="mb-4">
              OBPARK APIs are provided for approved integrations only. Users must access APIs securely, follow usage limits, protect API credentials, and must not misuse or interfere with platform operations.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-1">Developer Terms</h2>
            <p className="text-sm font-bold text-[#074139]/70 mb-3">Last Updated: July 15, 2026</p>
            <p className="mb-4">
              Developers using OBPARK tools, SDKs, or APIs must build secure applications, comply with our documentation, respect intellectual property rights, and follow all applicable platform policies.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-1">AI & Spatial Computing Policy</h2>
            <p className="text-sm font-bold text-[#074139]/70 mb-3">Last Updated: July 15, 2026</p>
            <p className="mb-4">
              OBPARK uses AI and spatial computing technologies to enhance parking discovery, navigation, and user experience. These technologies are designed to improve accuracy, efficiency, and safety while respecting user privacy.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-1">Data Processing Agreement (DPA)</h2>
            <p className="text-sm font-bold text-[#074139]/70 mb-3">Last Updated: July 15, 2026</p>
            <p className="mb-4">
              Our Data Processing Agreement explains how personal information is processed on behalf of customers in accordance with applicable data protection laws and our Privacy Policy.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-1">Service Level Agreement (SLA)</h2>
            <p className="text-sm font-bold text-[#074139]/70 mb-3">Last Updated: July 15, 2026</p>
            <p className="mb-4">
              OBPARK aims to deliver reliable platform availability and timely customer support. Service levels may vary depending on the subscription plan, partner agreements, and scheduled maintenance.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-1">Business Continuity Policy</h2>
            <p className="text-sm font-bold text-[#074139]/70 mb-3">Last Updated: July 15, 2026</p>
            <p className="mb-4">
              We maintain business continuity and disaster recovery measures to help ensure that critical OBPARK services remain available and can be restored efficiently in the event of unexpected disruptions.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-1">Information Security Policy</h2>
            <p className="text-sm font-bold text-[#074139]/70 mb-3">Last Updated: July 15, 2026</p>
            <p className="mb-4">
              OBPARK follows industry-standard security practices to protect systems, user data, and business operations through encryption, access controls, monitoring, and regular security reviews.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-1">Responsible Disclosure Policy</h2>
            <p className="text-sm font-bold text-[#074139]/70 mb-3">Last Updated: July 15, 2026</p>
            <p className="mb-4">
              We encourage security researchers to responsibly report suspected vulnerabilities. Valid reports will be reviewed promptly, and we appreciate responsible disclosure that helps improve platform security.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-1">Accessibility Statement</h2>
            <p className="text-sm font-bold text-[#074139]/70 mb-3">Last Updated: July 15, 2026</p>
            <p className="mb-4">
              OBPARK is committed to providing an accessible digital experience for all users. We continuously improve our website and applications to enhance usability, compatibility, and accessibility across supported devices.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
