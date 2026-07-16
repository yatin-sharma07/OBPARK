import { microgrammaBold, michroma } from '@/lib/fonts'

export default function GoverningLawPage() {
  return (
    <div className="w-full bg-[#eefaf6] min-h-screen pt-32 pb-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-[1000px] mx-auto text-[#074139]">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className={`${michroma.className} text-xs sm:text-sm font-bold uppercase tracking-widest mb-4`}>
            Legal Links
          </p>
          <h1 className={`${microgrammaBold.className} text-4xl sm:text-5xl md:text-6xl tracking-wide uppercase`}>
            Governing Law
          </h1>
        </div>

        {/* Content Section */}
        <div className={`${michroma.className} space-y-8 text-xs sm:text-sm md:text-[15px] leading-relaxed`}>
          
          <div className="mb-8 font-bold">
            <p>Governing Law</p>
            <p>Effective Date: 15th July 2026</p>
          </div>

          <div className="pt-6">
            <h2 className="text-base sm:text-lg font-bold mb-3">37. COMPLIANCE WITH APPLICABLE LAWS</h2>
            <p className="mb-2">
              Users agree to comply with all applicable local, state, national, and international laws, regulations, and governmental requirements while accessing or using the Platform.
            </p>
            <p className="mb-2">Users shall not use the Platform in any manner that:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Violates any applicable law or regulation.</li>
              <li>Facilitates criminal or fraudulent activity.</li>
              <li>Infringes the rights of any individual or entity.</li>
              <li>Interferes with government investigations.</li>
              <li>Circumvents statutory obligations.</li>
            </ul>
            <p>Obrive Industries Private Limited reserves the right to cooperate with law enforcement agencies and regulatory authorities whenever legally required.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">38. ANTI-BRIBERY AND ANTI-CORRUPTION</h2>
            <p className="mb-2">
              Users, Merchants, Corporate Customers, Parking Partners, Vendors, and Business Partners agree that they shall comply with all applicable anti-bribery, anti-corruption, and anti-money laundering laws.
            </p>
            <p className="mb-2">No person using the Platform shall:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Offer or accept unlawful payments.</li>
              <li>Attempt to influence public officials improperly.</li>
              <li>Use the Platform for money laundering activities.</li>
              <li>Conduct transactions involving proceeds of crime.</li>
              <li>Facilitate illegal financial activities.</li>
            </ul>
            <p>The Company may suspend or terminate accounts suspected of violating these obligations.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">39. EXPORT CONTROL AND SANCTIONS</h2>
            <p className="mb-2">
              Users agree that they will not use the Platform in violation of any applicable export control laws, trade sanctions, or governmental restrictions.
            </p>
            <p>The Company reserves the right to restrict access to certain services where required by applicable law.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">40. FORCE MAJEURE</h2>
            <p className="mb-2">
              The Company shall not be liable for any delay, interruption, or failure to perform its obligations resulting from events beyond its reasonable control.
            </p>
            <p className="mb-2">Such events include, but are not limited to:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
              <ul className="list-disc pl-5 space-y-1">
                <li>Natural disasters</li>
                <li>Floods</li>
                <li>Earthquakes</li>
                <li>Fire</li>
                <li>Pandemic or epidemic</li>
                <li>War</li>
                <li>Terrorism</li>
                <li>Civil unrest</li>
                <li>Government actions</li>
              </ul>
              <ul className="list-disc pl-5 space-y-1">
                <li>Court orders</li>
                <li>Internet failures</li>
                <li>Cyber attacks</li>
                <li>Power outages</li>
                <li>Telecommunications failures</li>
                <li>Cloud infrastructure failures</li>
                <li>Payment network disruptions</li>
                <li>Banking outages</li>
              </ul>
            </div>
            <p>During such events, the Company may suspend or modify services until normal operations resume.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">41. GOVERNING LAW</h2>
            <p className="mb-2">
              These Terms shall be governed by and construed in accordance with the laws of the Republic of India, without regard to conflict of law principles.
            </p>
            <p>
              Users accessing the Platform from outside India are responsible for ensuring compliance with the laws applicable in their respective jurisdictions.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">42. DISPUTE RESOLUTION</h2>
            <p className="mb-2">The Company is committed to resolving disputes fairly, efficiently, and in good faith.</p>
            <p className="mb-2">
              Users agree that, before initiating legal proceedings, they will first contact the Company's Customer Support or Grievance Officer and provide reasonable opportunity for the dispute to be resolved.
            </p>
            <p>Where a dispute cannot be resolved amicably, the matter shall be referred to arbitration.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">43. ARBITRATION</h2>
            <p className="mb-2">
              Any dispute, controversy, or claim arising out of or relating to these Terms, the Platform, or the Services shall be finally resolved through arbitration in accordance with the provisions of the Arbitration and Conciliation Act, 1996, as amended.
            </p>
            <p className="mb-2">The arbitration shall:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Be conducted by a sole arbitrator appointed by mutual agreement of the parties or otherwise in accordance with applicable law.</li>
              <li>Be conducted in the English language.</li>
              <li>Take place in Bengaluru, Karnataka, India, unless otherwise agreed in writing.</li>
            </ul>
            <p className="mb-2">The arbitral award shall be final and binding upon both parties.</p>
            <p>Nothing in this clause prevents either party from seeking interim or injunctive relief from a court of competent jurisdiction where necessary.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">44. JURISDICTION</h2>
            <p>
              Subject to the arbitration provisions above, the courts located in Bengaluru, Karnataka, India shall have exclusive jurisdiction over matters arising under these Terms where judicial intervention is required.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">45. ELECTRONIC COMMUNICATIONS</h2>
            <p className="mb-2">By using the Platform, Users consent to receive communications electronically. Electronic communications may include:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Emails</li>
              <li>SMS</li>
              <li>Push Notifications</li>
              <li>In-App Messages</li>
              <li>Digital Invoices</li>
              <li>Electronic Agreements</li>
              <li>OTP Verification</li>
              <li>Payment Receipts</li>
            </ul>
            <p>Users acknowledge that such electronic communications satisfy any legal requirement for written communication.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">46. ELECTRONIC RECORDS</h2>
            <p className="mb-2">
              Records generated electronically through the Platform, including bookings, invoices, payment confirmations, and account activity, shall be treated as valid electronic records in accordance with applicable law.
            </p>
            <p>Users agree that such records may be relied upon in the event of disputes or legal proceedings.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">47. MODIFICATIONS TO THE TERMS</h2>
            <p className="mb-2">The Company reserves the right to amend, revise, update, or replace these Terms at any time.</p>
            <p className="mb-2">Where material changes are made, reasonable efforts will be undertaken to notify Users through:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Website announcements</li>
              <li>Mobile application notifications</li>
              <li>Email communications</li>
              <li>Other appropriate means</li>
            </ul>
            <p>Continued use of the Platform following publication of updated Terms constitutes acceptance of those changes.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">48. ASSIGNMENT</h2>
            <p className="mb-2">
              Users may not assign, transfer, sublicense, or otherwise dispose of their rights or obligations under these Terms without the prior written consent of the Company.
            </p>
            <p className="mb-2">The Company may assign or transfer its rights and obligations under these Terms:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>To an affiliate.</li>
              <li>As part of a merger or acquisition.</li>
              <li>During corporate restructuring.</li>
              <li>In connection with the sale of assets.</li>
              <li>As otherwise permitted by law.</li>
            </ul>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">49. NO PARTNERSHIP</h2>
            <p className="mb-2">Nothing contained in these Terms shall be construed as creating:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>A partnership.</li>
              <li>A joint venture.</li>
              <li>An employment relationship.</li>
              <li>An agency relationship.</li>
              <li>A franchise relationship.</li>
            </ul>
            <p>between the Company and any User unless expressly agreed in writing.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">50. WAIVER</h2>
            <p className="mb-2">
              Failure by the Company to enforce any provision of these Terms shall not constitute a waiver of that provision or any other provision.
            </p>
            <p>Any waiver shall be effective only if made in writing by an authorized representative of the Company.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">51. SEVERABILITY</h2>
            <p className="mb-2">
              If any provision of these Terms is determined by a court or arbitral tribunal of competent jurisdiction to be unlawful, invalid, or unenforceable, the remaining provisions shall continue in full force and effect.
            </p>
            <p>
              The invalid provision shall be replaced, where possible, with a lawful provision that most closely reflects the original commercial intent.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">52. ENTIRE AGREEMENT</h2>
            <p className="mb-2">
              These Terms, together with the Privacy Policy, Refund Policy, Cancellation Policy, Pricing Policy, Shipping & Delivery Policy, Cookie Policy, and any other policies published on the Platform, constitute the entire agreement between the User and Obrive Industries Private Limited concerning the use of the Platform.
            </p>
            <p>These Terms supersede all prior oral or written understandings relating to the Platform.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">53. HEADINGS</h2>
            <p>Section headings are included for convenience only and shall not affect the interpretation of these Terms.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">54. LANGUAGE</h2>
            <p className="mb-2">These Terms are drafted in the English language.</p>
            <p>Where translations are provided for convenience, the English version shall prevail in the event of any inconsistency or conflict.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">55. FEEDBACK</h2>
            <p className="mb-2">The Company welcomes suggestions, ideas, comments, and feedback regarding the Platform.</p>
            <p>
              By submitting feedback, Users grant the Company a perpetual, irrevocable, worldwide, royalty-free right to use, modify, implement, and commercialize such feedback without obligation to compensate the User.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">56. PUBLIC ANNOUNCEMENTS</h2>
            <p>
              Unless otherwise agreed in writing, Users may not use the Company's name, trademarks, logos, or branding in public advertisements, press releases, promotional materials, or marketing campaigns without prior written permission.
            </p>
          </div>

          <div className="pt-4 border-b border-[#074139]/20 pb-8">
            <h2 className="text-base sm:text-lg font-bold mb-3">57. CONTACT INFORMATION</h2>
            <p className="mb-2">For questions relating to these Terms or the Platform, Users may contact:</p>
            <div className="space-y-1">
              <p>Obrive Industries Private Limited</p>
              <p>Product: OBPARK</p>
              <p><span className="font-bold">Registered Office:</span> 3rd Floor, Sree Gururaya Mansion, 759, 8th Main Rd, KSRTC Layout, 3rd Phase, J. P. Nagar, Bengaluru, Karnataka 560078</p>
              <p><span className="font-bold">Corporate Office:</span> 3rd Floor, Sree Gururaya Mansion, 759, 8th Main Rd, KSRTC Layout, 3rd Phase, J. P. Nagar, Bengaluru, Karnataka 560078</p>
              <br />
              <p>Email: <a href="mailto:legal@obrive.com" className="underline font-bold hover:opacity-80">legal@obrive.com</a></p>
              <p>Support Email: <a href="mailto:support@obpark.in" className="underline font-bold hover:opacity-80">support@obpark.in</a></p>
              <p>Website: <a href="http://www.obrive.com" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:opacity-80">www.obrive.com</a></p>
              <br />
              <p><span className="font-bold">Working Hours:</span> Monday to Saturday, 9:30 AM – 6:30 PM IST (excluding public holidays)</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
