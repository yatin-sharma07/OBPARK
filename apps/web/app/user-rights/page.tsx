import { microgrammaBold, michroma } from '@/lib/fonts'

export default function UserRightsPage() {
  return (
    <div className="w-full bg-[#eefaf6] min-h-screen pt-32 pb-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-[1000px] mx-auto text-[#074139]">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className={`${michroma.className} text-xs sm:text-sm font-bold uppercase tracking-widest mb-4`}>
            Legal Links
          </p>
          <h1 className={`${microgrammaBold.className} text-4xl sm:text-5xl md:text-6xl tracking-wide uppercase`}>
            User Rights
          </h1>
        </div>

        {/* Content Section */}
        <div className={`${michroma.className} space-y-8 text-xs sm:text-sm md:text-[15px] leading-relaxed`}>
          
          <div className="mb-8 font-bold">
            <p>User Rights, Data Subject Requests, Marketing Communications, Grievance Redressal & Compliance</p>
            <p>Effective Date: 15th July 2026</p>
          </div>

          <div className="pt-6">
            <h2 className="text-base sm:text-lg font-bold mb-3">22. YOUR PRIVACY RIGHTS</h2>
            <p className="mb-2">
              Subject to applicable laws, including the Digital Personal Data Protection Act, 2023 (India), you may have the following rights regarding your personal data:
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Right to access your personal data.</li>
              <li>Right to request correction of inaccurate or incomplete information.</li>
              <li>Right to request deletion of personal data, subject to legal retention requirements.</li>
              <li>Right to withdraw consent where processing is based on consent.</li>
              <li>Right to request a summary of the personal information processed by the Company.</li>
              <li>Right to nominate another person to exercise your rights where permitted by applicable law.</li>
              <li>Right to raise concerns regarding the processing of your personal data.</li>
              <li>Right to seek grievance redressal through the Company's designated Grievance Officer.</li>
            </ul>
            <p>These rights may be subject to exceptions permitted under applicable law.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">23. ACCESS TO YOUR INFORMATION</h2>
            <p className="mb-2">You may request access to the personal information we maintain about you.</p>
            <p className="mb-2">
              Where legally permitted, we may require identity verification before responding to such requests to protect your privacy and prevent unauthorized disclosures.
            </p>
            <p>The Company will respond within the timelines prescribed by applicable law.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">24. CORRECTION OF PERSONAL DATA</h2>
            <p className="mb-2">
              If you believe that any personal information held by OBPARK is inaccurate, incomplete, or outdated, you may request that it be corrected.
            </p>
            <p className="mb-2">
              Users are encouraged to keep their profile information current through their account settings whenever possible.
            </p>
            <p>
              The Company reserves the right to request supporting documentation before making material changes to certain records.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">25. DELETION OF PERSONAL DATA</h2>
            <p className="mb-2">You may request deletion of your personal data where:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>The information is no longer required for the purpose for which it was collected.</li>
              <li>You withdraw consent (where consent is the basis for processing).</li>
              <li>Deletion is required by applicable law.</li>
            </ul>
            <p className="mb-2">Certain information may continue to be retained where necessary to:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Comply with legal obligations.</li>
              <li>Maintain accounting or tax records.</li>
              <li>Prevent fraud.</li>
              <li>Resolve disputes.</li>
              <li>Enforce contractual rights.</li>
              <li>Protect the security and integrity of the Platform.</li>
            </ul>
            <p>
              Where complete deletion is not legally possible, the Company may anonymize or restrict the processing of the information.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">26. WITHDRAWAL OF CONSENT</h2>
            <p className="mb-2">Where processing is based on your consent, you may withdraw that consent at any time.</p>
            <p className="mb-2">Withdrawal of consent may affect your ability to access certain Platform features, including:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Location-based services.</li>
              <li>Camera-enabled features.</li>
              <li>Marketing communications.</li>
              <li>Push notifications.</li>
              <li>Personalized recommendations.</li>
            </ul>
            <p>Withdrawal of consent will not affect processing that occurred before the withdrawal.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">27. ACCOUNT DEACTIVATION</h2>
            <p className="mb-2">
              Users may request deactivation of their account by contacting Customer Support or using available account management features.
            </p>
            <p className="mb-2">Following deactivation:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Active subscriptions may be cancelled in accordance with applicable subscription terms.</li>
              <li>Outstanding payment obligations remain payable.</li>
              <li>Certain records may be retained as required by law or for legitimate business purposes.</li>
            </ul>
            <p>Account deactivation does not automatically result in the deletion of all associated personal information.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">28. MARKETING COMMUNICATIONS</h2>
            <p className="mb-2">OBPARK may send Users promotional communications relating to:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
              <ul className="list-disc pl-5 space-y-1">
                <li>New services.</li>
                <li>Parking offers.</li>
                <li>Loyalty programs.</li>
                <li>Promotional campaigns.</li>
              </ul>
              <ul className="list-disc pl-5 space-y-1">
                <li>Merchant offers.</li>
                <li>Product updates.</li>
                <li>Events.</li>
                <li>Surveys.</li>
              </ul>
            </div>
            <p className="mb-2">Users may opt out of marketing communications at any time by:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Clicking the unsubscribe link in marketing emails.</li>
              <li>Updating communication preferences within the Platform (where available).</li>
              <li>Contacting Customer Support.</li>
            </ul>
            <p>
              Service-related communications, such as booking confirmations, payment receipts, security alerts, and legal notices, may continue to be sent even if marketing communications are disabled.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">29. THIRD-PARTY LINKS AND SERVICES</h2>
            <p className="mb-2">The Platform may contain links to third-party websites, applications, or services.</p>
            <p className="mb-2">These third parties operate independently and maintain their own privacy practices.</p>
            <p className="mb-2">OBPARK is not responsible for:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Privacy policies of third parties.</li>
              <li>Security practices of third parties.</li>
              <li>Content hosted by third parties.</li>
              <li>Data processing carried out by third parties.</li>
            </ul>
            <p>Users are encouraged to review the privacy policies of any third-party services they choose to access.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">30. CHILDREN'S PRIVACY</h2>
            <p className="mb-2">
              OBPARK is designed for use by individuals who are legally capable of entering into binding agreements under applicable law.
            </p>
            <p className="mb-2">
              We do not knowingly collect personal information from children in violation of applicable legal requirements.
            </p>
            <p className="mb-2">
              If we become aware that personal information has been collected from a child without appropriate authorization, we will take reasonable steps to delete such information.
            </p>
            <p>Parents or legal guardians who believe that a child has provided personal information may contact us for assistance.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">31. BUSINESS TRANSFERS</h2>
            <p className="mb-2">If Obrive Industries Private Limited undergoes:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>A merger.</li>
              <li>Acquisition.</li>
              <li>Corporate restructuring.</li>
              <li>Asset sale.</li>
              <li>Investment transaction.</li>
              <li>Insolvency proceeding.</li>
            </ul>
            <p className="mb-2">
              Personal information may be transferred as part of the business assets, subject to applicable law and appropriate safeguards.
            </p>
            <p>
              Any successor organization will continue to protect personal information in accordance with this Privacy Policy or a substantially equivalent policy.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">32. LEGAL DISCLOSURES</h2>
            <p className="mb-2">The Company may disclose personal information where required:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>By law.</li>
              <li>Pursuant to a valid court order.</li>
              <li>In response to lawful governmental requests.</li>
              <li>To comply with regulatory obligations.</li>
              <li>To protect the rights, safety, or property of the Company, Users, or the public.</li>
              <li>To investigate fraud, cybercrime, or other unlawful activities.</li>
            </ul>
            <p>Such disclosures will be limited to what is legally required or reasonably necessary.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">33. GRIEVANCE REDRESSAL</h2>
            <p className="mb-2">OBPARK is committed to addressing privacy concerns promptly and fairly.</p>
            <p className="mb-2">Users may contact the designated Grievance Officer regarding:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Privacy concerns.</li>
              <li>Requests relating to personal information.</li>
              <li>Data correction requests.</li>
              <li>Data deletion requests.</li>
              <li>Complaints regarding processing of personal information.</li>
              <li>Security concerns.</li>
            </ul>
            <p>The Company will acknowledge and respond to grievances within the timelines prescribed by applicable law.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">34. GRIEVANCE OFFICER</h2>
            <div className="mb-4 space-y-1">
              <p className="font-bold">Grievance Officer</p>
              <p>Obrive Industries Private Limited</p>
              <p>Product: OBPARK</p>
              <p>Email: <a href="mailto:support@obpark.in" className="underline font-bold hover:opacity-80">support@obpark.in</a></p>
              <p>Legal Email: <a href="mailto:legal@obrive.com" className="underline font-bold hover:opacity-80">legal@obrive.com</a></p>
              <p>Registered Office: 3rd Floor, Sree Gururaya Mansion, 759, 8th Main Rd, KSRTC Layout, 3rd Phase, J. P. Nagar, Bengaluru, Karnataka 560078</p>
              <br />
              <p className="font-bold">Working Hours:</p>
              <p>Monday–Saturday</p>
              <p>9:30 AM – 6:30 PM IST</p>
              <p>Public holidays excluded.</p>
            </div>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">35. CONTACT US</h2>
            <p className="mb-4">For questions relating to this Privacy Policy or your personal information, please contact:</p>
            <div className="mb-4 space-y-1">
              <p>Obrive Industries Private Limited</p>
              <p>Product: OBPARK</p>
              <br />
              <p>Customer Support Email: <a href="mailto:support@obpark.com" className="underline font-bold hover:opacity-80">support@obpark.com</a></p>
              <p>Privacy Team: <a href="mailto:privacy@obpark.com" className="underline font-bold hover:opacity-80">privacy@obpark.com</a></p>
              <p>Legal Team: <a href="mailto:legal@obrive.com" className="underline font-bold hover:opacity-80">legal@obrive.com</a></p>
              <p>Website: <a href="https://www.obpark.in/" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:opacity-80">https://www.obpark.in/</a></p>
            </div>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">36. CHANGES TO THIS PRIVACY POLICY</h2>
            <p className="mb-2">The Company reserves the right to update or modify this Privacy Policy from time to time to reflect:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Changes in applicable law.</li>
              <li>Introduction of new products or services.</li>
              <li>Improvements to security practices.</li>
              <li>Changes to business operations.</li>
              <li>Regulatory requirements.</li>
            </ul>
            <p className="mb-2">
              Where material changes are made, Users will be notified through appropriate channels, including the Platform, email, or other legally permissible methods.
            </p>
            <p>
              Continued use of the Platform after the updated Privacy Policy becomes effective constitutes acceptance of the revised policy.
            </p>
          </div>

          <div className="pt-4 border-b border-[#074139]/20 pb-8">
            <h2 className="text-base sm:text-lg font-bold mb-3">37. POLICY REVIEW</h2>
            <p className="mb-2">
              This Privacy Policy shall be reviewed periodically to ensure continued compliance with applicable laws, regulatory requirements, and business operations.
            </p>
            <p>
              The Company may update internal procedures and security controls without prior notice where necessary to protect Users and the Platform.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
