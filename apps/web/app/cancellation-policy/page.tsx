import { microgrammaBold, michroma } from '@/lib/fonts'

export default function CancellationPolicyPage() {
  return (
    <div className="w-full bg-[#eefaf6] min-h-screen pt-32 pb-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-[1000px] mx-auto text-[#074139]">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className={`${michroma.className} text-xs sm:text-sm font-bold uppercase tracking-widest mb-4`}>
            Legal Links
          </p>
          <h1 className={`${microgrammaBold.className} text-4xl sm:text-5xl md:text-6xl tracking-wide uppercase`}>
            Cancellation Policy
          </h1>
        </div>

        {/* Content Section */}
        <div className={`${michroma.className} space-y-8 text-xs sm:text-sm md:text-[15px] leading-relaxed`}>
          
          <div className="mb-8 font-bold">
            <p>OBPARK CANCELLATION POLICY</p>
            <p>Effective Date: 15 July 2026</p>
            <p>Last Updated: 15 July 2026</p>
          </div>

          <div className="pt-6">
            <p className="mb-2">
              This Cancellation Policy ("Policy") governs the cancellation of bookings, subscriptions, marketplace orders, digital services, and other transactions made through OBPARK, a product owned and operated by Obrive Industries Private Limited ("Company", "OBPARK", "we", "our", or "us").
            </p>
            <p>
              This Policy forms an integral part of the OBPARK Terms & Conditions and should be read together with our Privacy Policy, Refund Policy, Pricing Policy, and other legal documents published on the Platform.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">1. PURPOSE</h2>
            <p className="mb-2">This Policy explains:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
              <ul className="list-disc pl-5 space-y-1">
                <li>When bookings can be cancelled.</li>
                <li>Cancellation timelines.</li>
                <li>Cancellation charges.</li>
                <li>Merchant cancellations.</li>
                <li>Subscription cancellations.</li>
              </ul>
              <ul className="list-disc pl-5 space-y-1">
                <li>Marketplace order cancellations.</li>
                <li>EV charging cancellations.</li>
                <li>Corporate booking cancellations.</li>
                <li>Exceptional circumstances.</li>
              </ul>
            </div>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">2. GENERAL POLICY</h2>
            <p className="mb-2">Users may cancel eligible bookings through:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>OBPARK Website</li>
              <li>Android Application</li>
              <li>iOS Application</li>
              <li>Customer Support</li>
            </ul>
            <p className="mb-2">Cancellation eligibility depends upon:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Service type.</li>
              <li>Time remaining before service begins.</li>
              <li>Merchant policies.</li>
              <li>Parking operator policies.</li>
              <li>Applicable laws.</li>
            </ul>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">3. PARKING RESERVATION CANCELLATION</h2>
            <p className="mb-4">Parking reservations may generally be cancelled under the following conditions:</p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-bold">More than 24 Hours Before Entry</h3>
                <p>Eligible for cancellation.</p>
                <p>A full refund may be issued after deduction of applicable convenience charges, if disclosed during booking.</p>
              </div>

              <div>
                <h3 className="font-bold">Between 2 Hours and 24 Hours Before Entry</h3>
                <p>Cancellation may be permitted.</p>
                <p>A partial cancellation charge may apply.</p>
              </div>

              <div>
                <h3 className="font-bold">Less than 2 Hours Before Entry</h3>
                <p>Cancellation may be allowed depending on the parking operator's policy.</p>
                <p>Refund eligibility may be reduced or unavailable.</p>
              </div>

              <div>
                <h3 className="font-bold">After Parking Session Starts</h3>
                <p>Once the parking session has commenced, cancellation is generally not permitted.</p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">4. SUBSCRIPTION CANCELLATION</h2>
            <p className="mb-2">Users may cancel auto-renewal of subscriptions at any time through their account settings.</p>
            <p className="mb-2">Cancellation prevents future renewals.</p>
            <p className="mb-2">The current subscription remains active until the end of the paid billing period unless otherwise specified.</p>
            <p>Subscription fees already paid are generally non-refundable except where required by law or expressly stated.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">5. MARKETPLACE ORDER CANCELLATION</h2>
            <p className="mb-2">Marketplace products supplied by third-party merchants may be cancelled only before shipment or service commencement.</p>
            <p className="mb-2">After shipment or commencement, cancellation is subject to the merchant's cancellation policy.</p>
            <p>Customized or made-to-order products may not be cancelled once production begins.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">6. EV CHARGING BOOKINGS</h2>
            <p className="mb-2">EV charging reservations may be cancelled prior to the scheduled charging session.</p>
            <p>Where charging has already commenced, cancellation is generally not permitted.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">7. VEHICLE SERVICES</h2>
            <p className="mb-2">Bookings relating to:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Car Wash</li>
              <li>Detailing</li>
              <li>Vehicle Inspection</li>
              <li>Maintenance</li>
              <li>Repair</li>
            </ul>
            <p className="mb-2">may be cancelled before the merchant begins work.</p>
            <p>Cancellation after service commencement may attract applicable charges.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">8. CORPORATE BOOKINGS</h2>
            <p className="mb-2">Corporate administrators may cancel employee bookings through the Corporate Dashboard.</p>
            <p>The cancellation terms applicable to individual bookings continue to apply unless otherwise agreed under a corporate contract.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">9. MERCHANT CANCELLATIONS</h2>
            <p className="mb-2">Merchants or Parking Partners may cancel bookings only for legitimate operational reasons including:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Facility closure.</li>
              <li>Maintenance.</li>
              <li>Safety concerns.</li>
              <li>Capacity limitations.</li>
              <li>Force majeure.</li>
            </ul>
            <p>Where a Merchant cancels a confirmed booking, eligible Users will receive an appropriate refund in accordance with the Refund Policy.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">10. COMPANY CANCELLATIONS</h2>
            <p className="mb-2">The Company reserves the right to cancel bookings where necessary due to:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Technical failures.</li>
              <li>Fraud prevention.</li>
              <li>Payment failures.</li>
              <li>Regulatory requirements.</li>
              <li>Security concerns.</li>
              <li>Duplicate bookings.</li>
              <li>Pricing errors.</li>
            </ul>
            <p>Where appropriate, eligible Users will receive a refund in accordance with the Refund Policy.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">11. CANCELLATION CHARGES</h2>
            <p className="mb-2">Cancellation fees, if applicable, will be displayed before confirmation of the cancellation request.</p>
            <p className="mb-2">Charges may depend on:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Time of cancellation.</li>
              <li>Merchant policy.</li>
              <li>Parking operator policy.</li>
              <li>Service category.</li>
              <li>Promotional offers.</li>
              <li>Subscription benefits.</li>
            </ul>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">12. FORCE MAJEURE</h2>
            <p className="mb-2">Cancellation penalties may be waived where services cannot be provided due to circumstances beyond the reasonable control of the User or the Company, including:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Natural disasters.</li>
              <li>Government restrictions.</li>
              <li>Public emergencies.</li>
              <li>Security incidents.</li>
              <li>Infrastructure failures.</li>
            </ul>
            <p>Each request will be reviewed individually.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">13. MISUSE OF CANCELLATION</h2>
            <p className="mb-2">The Company may suspend accounts that repeatedly:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Abuse cancellation policies.</li>
              <li>Make fraudulent bookings.</li>
              <li>Misuse promotional campaigns.</li>
              <li>Engage in suspicious booking behavior.</li>
            </ul>
          </div>

          <div className="pt-8 border-t border-[#074139]/20">
            <h2 className="text-base sm:text-lg font-bold mb-3">14. CONTACT</h2>
            <div className="space-y-1">
              <p>Cancellation Requests: <a href="mailto:support@obpark.in" className="underline font-bold hover:opacity-80">support@obpark.in</a></p>
              <p>Website: <a href="https://www.obpark.in" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:opacity-80">https://www.obpark.in</a></p>
              <br />
              <p className="font-bold">Customer Support Hours:</p>
              <p>Monday–Saturday</p>
              <p>9:30 AM – 6:30 PM IST</p>
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
                    <td className="py-2 pr-4">15 July 2026</td>
                    <td className="py-2">Initial Release</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="pt-4 border-t border-[#074139]/20">
            <p className="font-bold">© 2026 Obrive Industries Private Limited. All Rights Reserved.</p>
          </div>

        </div>
      </div>
    </div>
  )
}
