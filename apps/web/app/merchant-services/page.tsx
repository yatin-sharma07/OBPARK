import { microgrammaBold, michroma } from '@/lib/fonts'

export default function MerchantServicesPage() {
  return (
    <div className="w-full bg-[#eefaf6] min-h-screen pt-32 pb-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-[1000px] mx-auto text-[#074139]">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className={`${michroma.className} text-xs sm:text-sm font-bold uppercase tracking-widest mb-4`}>
            Legal Links
          </p>
          <h1 className={`${microgrammaBold.className} text-4xl sm:text-5xl md:text-6xl tracking-wide uppercase`}>
            Merchant Services
          </h1>
        </div>

        {/* Content Section */}
        <div className={`${michroma.className} space-y-8 text-xs sm:text-sm md:text-[15px] leading-relaxed`}>
          
          <div className="mb-8 font-bold">
            <p>Merchant Services, Corporate Accounts, API Usage, AI & Spatial Computing, Final Provisions</p>
            <p>Effective Date: 15th July 2026</p>
          </div>

          <div className="pt-6">
            <h2 className="text-base sm:text-lg font-bold mb-3">58. PARKING OPERATOR TERMS</h2>
            <p className="mb-2">Parking operators listing facilities on the Platform agree to:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Maintain accurate parking availability and pricing.</li>
              <li>Ensure parking facilities comply with applicable laws and safety requirements.</li>
              <li>Honor confirmed bookings unless cancellation is required due to emergencies or circumstances beyond reasonable control.</li>
              <li>Promptly notify OBPARK of operational changes affecting availability.</li>
              <li>Cooperate in resolving customer complaints and disputes.</li>
              <li>Maintain required business registrations, permits, licenses, and insurance.</li>
            </ul>
            <p>The Company reserves the right to suspend or remove any parking operator that fails to meet quality, legal, or operational standards.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">59. MERCHANT TERMS</h2>
            <p className="mb-2">Merchants offering products or services through the Platform agree to:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Provide accurate product descriptions and pricing.</li>
              <li>Maintain sufficient inventory or service capacity.</li>
              <li>Fulfill accepted orders within the agreed timelines.</li>
              <li>Comply with all applicable tax, consumer protection, and commercial laws.</li>
              <li>Handle warranties and after-sales support where applicable.</li>
              <li>Maintain appropriate business registrations and licenses.</li>
            </ul>
            <p>Merchants remain solely responsible for the quality, legality, and fulfillment of the goods or services they provide.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">60. CORPORATE ACCOUNT TERMS</h2>
            <p className="mb-2">Businesses enrolling in OBPARK Corporate Services may receive centralized account management, reporting, billing, and administrative features.</p>
            <p className="mb-2">Corporate administrators are responsible for:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Managing authorized users.</li>
              <li>Protecting account credentials.</li>
              <li>Ensuring employee compliance with these Terms.</li>
              <li>Reviewing invoices and payment obligations.</li>
              <li>Reporting unauthorized account activity.</li>
            </ul>
            <p>Corporate customers remain responsible for charges incurred by authorized users unless otherwise agreed in writing.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">61. DEVELOPER API TERMS</h2>
            <p className="mb-2">Where the Company provides APIs, SDKs, or developer tools, access is granted under a limited, revocable, non-exclusive license.</p>
            <p className="mb-2">Developers shall not:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Reverse engineer or attempt to derive source code.</li>
              <li>Circumvent security controls or authentication mechanisms.</li>
              <li>Exceed published usage limits.</li>
              <li>Introduce malicious code or software.</li>
              <li>Use the APIs for unlawful or unauthorized purposes.</li>
            </ul>
            <p>The Company may suspend or revoke API access for misuse, excessive usage, or security concerns.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">62. ARTIFICIAL INTELLIGENCE, AUGMENTED REALITY & SPATIAL COMPUTING SERVICES</h2>
            <p className="mb-4">
              OBPARK incorporates technologies such as Artificial Intelligence (AI), Machine Learning (ML), Computer Vision, Augmented Reality (AR), Mixed Reality (MR), Extended Reality (XR), and Spatial Computing to enhance navigation and parking experiences.
            </p>
            <p className="mb-2">Users acknowledge that:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>AI-generated suggestions are based on available data and may not always reflect real-time conditions.</li>
              <li>AR navigation is intended as a visual aid and should not replace the User's own observation or judgment.</li>
              <li>Indoor positioning accuracy may vary due to environmental conditions, device capabilities, signal availability, or mapping limitations.</li>
              <li>Users remain responsible for operating vehicles safely and complying with all applicable traffic laws and parking regulations.</li>
            </ul>
            <p>The Company does not guarantee uninterrupted or error-free operation of AI or AR features.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">63. EV CHARGING SERVICES</h2>
            <p className="mb-2">Where EV charging reservations or related services are offered through the Platform:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Availability is subject to the charging station operator.</li>
              <li>Pricing may vary by location, charging speed, and operator.</li>
              <li>Charging equipment is operated by third-party providers unless expressly stated otherwise.</li>
              <li>Users are responsible for ensuring compatibility between their vehicle and the selected charging station.</li>
            </ul>
            <p>The Company is not liable for interruptions, equipment failures, or operational issues attributable to third-party charging providers.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">64. INSURANCE, LOAN & FINANCIAL SERVICES</h2>
            <p className="mb-4">
              The Platform may enable Users to access vehicle insurance, financing, FASTag, or other financial products through authorized banking institutions, insurers, or financial service providers.
            </p>
            <p className="mb-4">
              Unless expressly stated, the Company acts only as a technology facilitator and is not the insurer, lender, or financial institution providing those products.
            </p>
            <p>
              Approval, pricing, eligibility, documentation, and contractual terms are determined solely by the relevant third-party provider.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">65. THIRD-PARTY MERCHANT PRODUCTS</h2>
            <p className="mb-2">
              Products or services purchased from third-party merchants are subject to the merchant's own warranties, service commitments, and legal obligations.
            </p>
            <p className="mb-2">Where permitted by law, OBPARK is not responsible for:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Product defects.</li>
              <li>Manufacturing faults.</li>
              <li>Warranty claims.</li>
              <li>Installation issues.</li>
              <li>Delivery delays caused by the merchant.</li>
              <li>Merchant representations beyond the information made available through the Platform.</li>
            </ul>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">66. USER ACKNOWLEDGEMENTS</h2>
            <p className="mb-2">By using the Platform, Users acknowledge that they:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Have read and understood these Terms.</li>
              <li>Agree to comply with all applicable policies published by the Company.</li>
              <li>Accept responsibility for maintaining the confidentiality of their account credentials.</li>
              <li>Understand that certain services are provided by independent third parties.</li>
              <li>Consent to electronic communications and digital recordkeeping.</li>
              <li>Understand that technology-based services may occasionally experience interruptions.</li>
            </ul>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">67. RESERVATION OF RIGHTS</h2>
            <p className="mb-2">The Company expressly reserves all rights not specifically granted under these Terms.</p>
            <p>
              Nothing contained in these Terms shall be interpreted as granting any ownership, license, or proprietary interest beyond the limited right to use the Platform in accordance with these Terms.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">68. DOCUMENT CONTROL</h2>
            <div className="space-y-1">
              <p><span className="font-bold">Document Title:</span> OBPARK Terms & Conditions</p>
              <p><span className="font-bold">Product:</span> OBPARK</p>
              <p><span className="font-bold">Owner:</span> Obrive Industries Private Limited</p>
              <p><span className="font-bold">Department:</span> Legal & Compliance</p>
              <p><span className="font-bold">Version:</span> 1.0</p>
              <p><span className="font-bold">Approval Authority:</span> Board of Directors or Authorized Representative</p>
              <p><span className="font-bold">Effective Date:</span> 15th July 2026</p>
              <p><span className="font-bold">Review Frequency:</span> Annually, or earlier if required due to changes in applicable law, business operations, or Platform functionality.</p>
            </div>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">69. ACCEPTANCE OF TERMS</h2>
            <p className="mb-2">By accessing or using the OBPARK website, mobile applications, APIs, or any related services, you acknowledge that:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>You have carefully read these Terms & Conditions.</li>
              <li>You understand the rights and obligations described herein.</li>
              <li>You agree to be legally bound by these Terms and all associated policies.</li>
              <li>You consent to the processing of your information in accordance with the OBPARK Privacy Policy.</li>
              <li>You agree to comply with all applicable laws and regulations.</li>
            </ul>
            <p className="font-bold">If you do not agree to these Terms, you must immediately discontinue use of the Platform.</p>
          </div>

          <div className="pt-8 border-t border-[#074139]/20">
            <h2 className="text-base sm:text-lg font-bold mb-3">CONTACT DETAILS</h2>
            <div className="mb-4 space-y-1">
              <p>Obrive Industries Private Limited</p>
              <p>Product: OBPARK</p>
              <p><span className="font-bold">Registered Office:</span> 3rd Floor, Sree Gururaya Mansion, 759, 8th Main Rd, KSRTC Layout, 3rd Phase, J. P. Nagar, Bengaluru, Karnataka 560078</p>
              <p><span className="font-bold">Corporate Office:</span> 3rd Floor, Sree Gururaya Mansion, 759, 8th Main Rd, KSRTC Layout, 3rd Phase, J. P. Nagar, Bengaluru, Karnataka 560078</p>
              <br />
              <p>Customer Support Email: <a href="mailto:Support@obpark.in" className="underline font-bold hover:opacity-80">Support@obpark.in</a></p>
              <p>Legal & Compliance Email: <a href="mailto:legal@obrive.in" className="underline font-bold hover:opacity-80">legal@obrive.in</a></p>
              <p>Website: <a href="https://www.obpark.in" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:opacity-80">https://www.obpark.in</a></p>
              <br />
              <p><span className="font-bold">Support Hours:</span> Monday–Saturday, 9:30 AM to 6:30 PM IST (excluding public holidays)</p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#074139]/20">
            <h2 className="text-base sm:text-lg font-bold mb-3">VERSION HISTORY</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#074139]/30">
                    <th className="py-2 pr-4">Version</th>
                    <th className="py-2 pr-4">Date</th>
                    <th className="py-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#074139]/10">
                    <td className="py-2 pr-4">1.0</td>
                    <td className="py-2 pr-4">15th July 2026</td>
                    <td className="py-2">Initial release of the OBPARK Terms & Conditions</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="pt-4 border-t border-[#074139]/20">
            <h2 className="text-base sm:text-lg font-bold mb-3">COPYRIGHT NOTICE</h2>
            <p className="mb-4">
              © 2026 Obrive Industries Private Limited. All rights reserved.
            </p>
            <p>
              The OBPARK name, logo, software, website, mobile applications, APIs, graphics, trademarks, service marks, documentation, and associated intellectual property are owned by Obrive Industries Private Limited or its licensors and are protected under applicable intellectual property laws. Unauthorized use, reproduction, distribution, or modification is strictly prohibited.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
