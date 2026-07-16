import { microgrammaBold, michroma } from '@/lib/fonts'
import Link from 'next/link'

export default function LegalCompliancePage() {
  return (
    <div className="w-full bg-[#eefaf6] min-h-screen pt-32 pb-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-[1000px] mx-auto text-[#074139]">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className={`${michroma.className} text-xs sm:text-sm font-bold uppercase tracking-widest mb-4`}>
            Legal Links
          </p>
          <h1 className={`${microgrammaBold.className} text-4xl sm:text-5xl md:text-6xl tracking-wide uppercase`}>
            Legal & Compliance
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

          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold mb-2">Drive with Confidence. Built on Trust.</h2>
            <p>
              At OBPARK, we believe that trust is the foundation of every connected mobility experience. Our Legal & Compliance Center provides transparent information about the policies, agreements, and standards governing the use of the OBPARK platform, mobile applications, websites, APIs, and enterprise services.
            </p>
            <p>
              Whether you're a driver, parking operator, property owner, enterprise customer, or technology partner, these documents explain your rights, responsibilities, and how we protect your data while delivering intelligent parking and spatial computing solutions.
            </p>
          </div>

          <div className="pt-8 pb-4 border-b border-[#074139]/20">
            <h2 className={`${microgrammaBold.className} text-2xl sm:text-3xl tracking-wide uppercase`}>OUR LEGAL DOCUMENTS</h2>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-1">Privacy Policy</h2>
            <h3 className="text-sm font-bold text-[#074139]/70 mb-3">Your privacy matters.</h3>
            <p className="mb-4">
              The OBPARK Privacy Policy explains how we collect, process, store, and protect your personal information, vehicle information, payment details, location data, and parking history when you use our platform. Our privacy practices are designed to comply with applicable privacy regulations while maintaining transparency in how data is used across our mobile applications, websites, APIs, and enterprise solutions.
            </p>
            <p className="font-bold mb-2">Includes:</p>
            <ul className="list-disc pl-5 space-y-1 mb-6">
              <li>Personal Information</li>
              <li>Vehicle Information</li>
              <li>Location Data</li>
              <li>Payment Information</li>
              <li>Parking Activity</li>
              <li>Cookies & Analytics</li>
              <li>User Rights</li>
              <li>Data Security</li>
              <li>Data Retention</li>
            </ul>
            <div className="flex flex-wrap gap-2 text-sm font-semibold">
              <Link href="/privacy-policy" className="underline hover:opacity-80">Read Privacy Policy</Link>
              <span className="opacity-50">|</span>
              <Link href="/privacy-policy" className="underline hover:opacity-80">Read Privacy Security</Link>
            </div>
          </div>

          <div className="pt-8">
            <h2 className="text-base sm:text-lg font-bold mb-3">Terms of Service</h2>
            <p className="mb-4">
              The Terms of Service define the legal agreement between you and OBPARK when using our platform. These terms explain acceptable use, account registration, subscription plans, parking reservations, digital services, user responsibilities, intellectual property rights, payment obligations, and dispute resolution procedures. By accessing OBPARK, you agree to comply with these terms.
            </p>
            <div className="flex flex-wrap gap-2 text-sm font-semibold">
              <Link href="/terms-and-conditions" className="underline hover:opacity-80">Read Terms & Conditions</Link>
              <span className="opacity-50">|</span>
              <Link href="/user-rights" className="underline hover:opacity-80">Read User Rights</Link>
              <span className="opacity-50">|</span>
              <Link href="/merchant-services" className="underline hover:opacity-80">Read Merchant Service</Link>
              <span className="opacity-50">|</span>
              <Link href="/governing-law" className="underline hover:opacity-80">Read Governing Law</Link>
            </div>
          </div>

          <div className="pt-8">
            <h2 className="text-base sm:text-lg font-bold mb-3">Payment & Refund Policy</h2>
            <p className="mb-2">This policy explains how payments are processed for:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Parking reservations</li>
              <li>Monthly parking subscriptions</li>
              <li>Enterprise plans</li>
              <li>Marketplace purchases</li>
              <li>Digital services</li>
            </ul>
            <p className="mb-6">
              It also outlines refund eligibility, cancellations, failed transactions, GST invoicing, and payment disputes.
            </p>
            <div className="flex flex-wrap gap-2 text-sm font-semibold">
              <Link href="/cancellation-policy" className="underline hover:opacity-80">Read Cancellation Policy</Link>
              <span className="opacity-50">|</span>
              <Link href="/refund-policy" className="underline hover:opacity-80">Read Re-fund Policy</Link>
              <span className="opacity-50">|</span>
              <Link href="/shipping-policy" className="underline hover:opacity-80">Read Shipment Policy</Link>
            </div>
          </div>

          <div className="pt-8">
            <h2 className="text-base sm:text-lg font-bold mb-3">Cookie Policy</h2>
            <p className="mb-4">
              Our Cookie Policy explains how cookies and similar technologies are used to improve performance, personalize experiences, analyse usage, and enhance security across OBPARK websites and applications. Users can manage cookie preferences at any time.
            </p>
            <div className="flex flex-wrap gap-2 text-sm font-semibold">
              <Link href="/cookie-policy" className="underline hover:opacity-80">Read Cookie Policy</Link>
            </div>
          </div>

          <div className="pt-12 border-t border-[#074139]/20">
            <h2 className="text-base sm:text-lg font-bold mb-4">Contact Our Legal Team</h2>
            <p className="mb-4">
              If you have questions regarding our legal documents, compliance requirements, enterprise agreements, privacy practices, or security policies, our legal team is available to assist you.
            </p>
            <div className="mb-4 space-y-1 font-bold">
              <p>Legal & Compliance Team</p>
              <p>Email: <a href="mailto:legal@obpark.com" className="underline hover:opacity-80 font-normal">legal@obpark.com</a></p>
              <p>Enterprise Support: <a href="mailto:compliance@obpark.com" className="underline hover:opacity-80 font-normal">compliance@obpark.com</a></p>
              <p>Company: <span className="font-normal">Obrive Industries Private Limited</span></p>
            </div>
            <p className="font-bold text-[#074139]/80">
              We aim to respond to legal and compliance inquiries within 2–5 business days.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
