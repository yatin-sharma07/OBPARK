import { microgrammaBold, michroma } from '@/lib/fonts'

export default function PlatformPolicyPage() {
  return (
    <div className="w-full bg-[#eefaf6] min-h-screen pt-32 pb-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-[1000px] mx-auto text-[#074139]">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className={`${michroma.className} text-xs sm:text-sm font-bold uppercase tracking-widest mb-4`}>
            Legal Links
          </p>
          <h1 className={`${microgrammaBold.className} text-4xl sm:text-5xl md:text-6xl tracking-wide uppercase`}>
            Platform Policy
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
            <h2 className="text-base sm:text-lg font-bold mb-1">Subscription Terms</h2>
            <h3 className="text-sm font-bold text-[#074139]/70 mb-3">Transparent Plans. Flexible Access.</h3>
            <p className="mb-4">
              OBPARK offers subscription plans for individuals, businesses, parking operators, and enterprise customers. Subscription fees, billing cycles, renewals, cancellations, and applicable taxes are clearly communicated before purchase. By subscribing, you agree to the pricing, payment schedule, and service terms associated with your selected plan. Certain features may vary depending on your subscription tier, and subscriptions may automatically renew unless cancelled before the renewal date.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-1">User Agreement</h2>
            <h3 className="text-sm font-bold text-[#074139]/70 mb-3">Your Rights and Responsibilities.</h3>
            <p className="mb-4">
              The User Agreement governs your use of the OBPARK platform, including our website, mobile applications, APIs, and related services. By creating an account or accessing our services, you agree to use the platform lawfully, provide accurate information, protect your account credentials, and comply with all applicable laws and platform policies. OBPARK reserves the right to suspend or terminate accounts that violate these terms.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-1">Acceptable Use Policy</h2>
            <h3 className="text-sm font-bold text-[#074139]/70 mb-3">Creating a Safe and Trusted Platform.</h3>
            <p className="mb-4">
              OBPARK is committed to maintaining a secure, reliable, and respectful environment for all users. You may not misuse the platform, interfere with its operation, attempt unauthorized access, upload malicious content, engage in fraudulent activities, or violate the rights of others. Any activity that compromises platform security, disrupts services, or breaches applicable laws may result in account suspension, termination, or legal action.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-1">Cookie Policy</h2>
            <h3 className="text-sm font-bold text-[#074139]/70 mb-3">Enhancing Your Experience Responsibly.</h3>
            <p className="mb-4">
              OBPARK uses cookies and similar technologies to improve website performance, remember user preferences, analyze traffic, enhance security, and personalize your experience. Some cookies are essential for platform functionality, while others help us understand how our services are used. You can manage or disable non-essential cookies through your browser settings or our cookie preference tools where available.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-1">Data Retention Policy</h2>
            <h3 className="text-sm font-bold text-[#074139]/70 mb-3">Responsible Data Lifecycle Management.</h3>
            <p className="mb-4">
              OBPARK retains personal information, transaction records, parking history, and operational data only for as long as necessary to provide our services, comply with legal obligations, resolve disputes, enforce agreements, and improve our platform. When information is no longer required, it is securely deleted, anonymized, or archived in accordance with applicable data protection laws and industry best practices.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-1">Security Policy</h2>
            <h3 className="text-sm font-bold text-[#074139]/70 mb-3">Security Built Into Every Journey.</h3>
            <p className="mb-4">
              Protecting customer data is fundamental to OBPARK. We implement industry-standard administrative, technical, and physical safeguards, including encryption, secure authentication, role-based access controls, continuous monitoring, vulnerability assessments, and regular security updates to protect our systems and user information. While no technology can guarantee absolute security, we continuously enhance our infrastructure to maintain the confidentiality, integrity, and availability of our platform and services.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
