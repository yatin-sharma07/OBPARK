import { microgrammaBold, michroma } from '@/lib/fonts'

export default function RefundPolicyPage() {
  return (
    <div className="w-full bg-[#eefaf6] min-h-screen pt-32 pb-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-[1000px] mx-auto text-[#074139]">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className={`${michroma.className} text-xs sm:text-sm font-bold uppercase tracking-widest mb-4`}>
            Legal Links
          </p>
          <h1 className={`${microgrammaBold.className} text-4xl sm:text-5xl md:text-6xl tracking-wide uppercase`}>
            Refund Policy
          </h1>
        </div>

        {/* Content Section */}
        <div className={`${michroma.className} space-y-8 text-xs sm:text-sm md:text-[15px] leading-relaxed`}>
          
          <div className="mb-8 font-bold">
            <p>OBPARK REFUND POLICY</p>
            <p>Effective Date: 15th July 2026</p>
            <p>Last Updated: 15th July 2026</p>
          </div>

          <div className="pt-6">
            <p className="mb-2">
              This Refund Policy ("Policy") governs refunds for payments made through the OBPARK website, mobile applications, APIs, and related services ("Platform"), owned and operated by Obrive Industries Private Limited ("Obrive", "OBPARK", "Company", "we", "our", or "us").
            </p>
            <p className="mb-2">
              This Policy should be read together with our Terms & Conditions, Cancellation Policy, Privacy Policy, Pricing Policy, and all other policies published on the Platform.
            </p>
            <p className="font-bold text-[#074139]/80">
              By using the Platform and making a payment, you acknowledge that you have read, understood, and agree to this Refund Policy.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">1. PURPOSE</h2>
            <p className="mb-2">The purpose of this Policy is to provide a transparent framework for refunds relating to:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
              <ul className="list-disc pl-5 space-y-1">
                <li>Parking reservations</li>
                <li>Parking subscriptions</li>
                <li>Marketplace purchases</li>
                <li>Vehicle services</li>
                <li>EV charging bookings</li>
              </ul>
              <ul className="list-disc pl-5 space-y-1">
                <li>Digital products</li>
                <li>Software subscriptions</li>
                <li>Corporate services</li>
                <li>Promotional offers</li>
                <li>Other services made available through OBPARK</li>
              </ul>
            </div>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">2. GENERAL REFUND PRINCIPLES</h2>
            <p className="mb-2">Refund eligibility depends on:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>The type of service purchased.</li>
              <li>The reason for the refund request.</li>
              <li>Whether the service has already been consumed.</li>
              <li>The terms applicable to the specific product or merchant.</li>
              <li>Applicable laws and regulatory requirements.</li>
            </ul>
            <p>Refunds are processed only after verification by the Company or the relevant Merchant or Service Provider, where applicable.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">3. ELIGIBLE REFUND SCENARIOS</h2>
            <p className="mb-4">Refunds may be approved under the following circumstances:</p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-bold">A. Duplicate Payment</h3>
                <p>If the same transaction is successfully charged more than once for the same booking or purchase.</p>
              </div>

              <div>
                <h3 className="font-bold">B. Failed Booking with Successful Payment</h3>
                <p className="mb-1">Where payment is successfully received but:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>The booking is not confirmed.</li>
                  <li>The reservation cannot be completed.</li>
                  <li>The transaction fails due to a technical error.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold">C. Service Unavailability</h3>
                <p className="mb-1">Where the purchased service cannot be provided due to:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Parking facility closure.</li>
                  <li>System errors.</li>
                  <li>Merchant inability to fulfill the booking.</li>
                  <li>Platform operational issues.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold">D. Incorrect Charges</h3>
                <p>Where Users are charged an amount different from the confirmed order value due to an identifiable system or processing error.</p>
              </div>

              <div>
                <h3 className="font-bold">E. Cancelled by Merchant or Parking Operator</h3>
                <p>If a Merchant, Parking Partner, or Service Provider cancels a confirmed booking before the service is delivered, the User may be eligible for a full or partial refund, depending on the circumstances.</p>
              </div>

              <div>
                <h3 className="font-bold">F. Payment Gateway Errors</h3>
                <p>If payment is debited but the transaction fails because of payment gateway or banking errors, the Company will coordinate with the payment provider to facilitate the refund in accordance with applicable banking timelines.</p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">4. NON-REFUNDABLE TRANSACTIONS</h2>
            <p className="mb-2">Unless otherwise required by applicable law, refunds will generally not be provided for:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Successfully completed parking sessions.</li>
              <li>Fully utilized subscriptions.</li>
              <li>Promotional or discounted purchases identified as non-refundable.</li>
              <li>Digital services already delivered.</li>
              <li>Convenience fees, where clearly disclosed as non-refundable.</li>
              <li>Government fees, taxes, or statutory charges that cannot legally be refunded.</li>
              <li>Services consumed by the User.</li>
              <li>Refund requests submitted after the applicable refund window.</li>
            </ul>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">5. SUBSCRIPTION REFUNDS</h2>
            <p className="mb-2">Subscription fees are generally non-refundable once the subscription period has commenced.</p>
            <p className="mb-2">Exceptions may include:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Duplicate subscription charges.</li>
              <li>Technical failures preventing activation of the subscription.</li>
              <li>Incorrect billing attributable to the Company.</li>
            </ul>
            <p>Where required by law or expressly stated in a subscription plan, a prorated refund may be considered.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">6. MARKETPLACE PRODUCTS AND SERVICES</h2>
            <p className="mb-2">
              Products and services offered by independent Merchants are governed by the Merchant's own refund policy, unless expressly stated otherwise.
            </p>
            <p>
              OBPARK may facilitate communication and payment processing but is not responsible for refund decisions relating to products or services supplied directly by third-party Merchants, except where required by law or contractual arrangements.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">7. EV CHARGING SERVICES</h2>
            <p className="mb-2">Refund eligibility for EV charging bookings depends on:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Charging station operator policies.</li>
              <li>Service availability.</li>
              <li>Technical failures.</li>
              <li>Duplicate payments.</li>
              <li>Charging session initiation status.</li>
            </ul>
            <p>If a charging session fails to start due to reasons attributable to the Platform or the charging operator, Users may be eligible for an appropriate refund.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">8. INSURANCE, FINANCIAL PRODUCTS, AND THIRD-PARTY SERVICES</h2>
            <p className="mb-2">
              Insurance products, financing services, FASTag services, and similar third-party offerings are governed by the respective provider's refund and cancellation policies.
            </p>
            <p>OBPARK acts as a technology platform facilitating access to these services unless expressly identified as the service provider.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">9. REFUND REQUEST PROCEDURE</h2>
            <p className="mb-2">Users may request a refund by:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Logging into their OBPARK account.</li>
              <li>Visiting the "My Bookings" or "Transaction History" section.</li>
              <li>Selecting the relevant transaction.</li>
              <li>Following the refund request process, where available.</li>
            </ul>
            <p className="mb-2">Alternatively, Users may contact Customer Support with:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Booking ID or Order Number.</li>
              <li>Transaction Reference Number.</li>
              <li>Registered Mobile Number.</li>
              <li>Registered Email Address.</li>
              <li>Reason for the refund request.</li>
              <li>Supporting documents, where applicable.</li>
            </ul>
            <p>The Company may request additional information to verify the request.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">10. REFUND REVIEW</h2>
            <p className="mb-2">Each refund request is reviewed on a case-by-case basis.</p>
            <p className="mb-2">During the review, the Company may verify:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
              <ul className="list-disc pl-5 space-y-1">
                <li>Booking records.</li>
                <li>Payment status.</li>
                <li>Merchant confirmations.</li>
              </ul>
              <ul className="list-disc pl-5 space-y-1">
                <li>Parking operator reports.</li>
                <li>Technical system logs.</li>
                <li>Customer communications.</li>
              </ul>
            </div>
            <p>The Company reserves the right to approve or reject refund requests where consistent with applicable law and this Policy.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">11. REFUND TIMELINES</h2>
            <p className="mb-2">Where a refund is approved, the Company will initiate the refund promptly.</p>
            <p className="mb-2">Actual credit timelines depend on the User's payment method, issuing bank, and payment gateway. Typical timelines are:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>UPI: 2–5 business days.</li>
              <li>Credit Card: 5–10 business days.</li>
              <li>Debit Card: 5–10 business days.</li>
              <li>Net Banking: 3–7 business days.</li>
              <li>Wallets: 1–5 business days.</li>
            </ul>
            <p>These timelines are indicative and may vary based on the policies of the respective financial institution.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">12. REFUND METHOD</h2>
            <p className="mb-2">Approved refunds will generally be credited to the original payment method used for the transaction.</p>
            <p className="mb-2">Where this is not possible, the Company may use another legally permissible method after appropriate verification.</p>
            <p>Cash refunds are generally not provided.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">13. FRAUD PREVENTION</h2>
            <p className="mb-2">To protect Users and the Platform, the Company reserves the right to refuse refunds where there is reasonable evidence of:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Fraudulent activity.</li>
              <li>Chargeback abuse.</li>
              <li>False claims.</li>
              <li>Identity theft.</li>
              <li>Misuse of promotional offers.</li>
              <li>Repeated abuse of the refund process.</li>
            </ul>
            <p>The Company may suspend related accounts pending investigation.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">14. CHARGEBACKS</h2>
            <p className="mb-2">Users are encouraged to contact OBPARK Customer Support before initiating a chargeback with their bank or payment provider.</p>
            <p className="mb-2">Where a chargeback is initiated, the Company may:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Provide transaction evidence to the payment provider.</li>
              <li>Suspend associated bookings or accounts pending resolution.</li>
              <li>Recover amounts improperly reversed where legally permitted.</li>
            </ul>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">15. LIMITATION OF LIABILITY</h2>
            <p className="mb-2">The Company's responsibility under this Policy is limited to processing eligible refunds in accordance with applicable law and this Policy.</p>
            <p className="mb-2">The Company is not responsible for delays caused by:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Banks.</li>
              <li>Card networks.</li>
              <li>Payment gateways.</li>
              <li>Financial institutions.</li>
              <li>Government authorities.</li>
              <li>Force majeure events.</li>
            </ul>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">16. CHANGES TO THIS POLICY</h2>
            <p className="mb-2">Obrive Industries Private Limited reserves the right to modify or update this Refund Policy at any time.</p>
            <p className="mb-2">Material changes will be published on the Platform and, where appropriate, communicated through other reasonable means.</p>
            <p>Continued use of the Platform after the effective date of any revised Policy constitutes acceptance of the updated Policy.</p>
          </div>

          <div className="pt-8 border-t border-[#074139]/20">
            <h2 className="text-base sm:text-lg font-bold mb-3">17. CONTACT INFORMATION</h2>
            <p className="mb-2">For refund-related queries, please contact:</p>
            <div className="space-y-1">
              <p>Obrive Industries Private Limited</p>
              <p>Product: OBPARK</p>
              <br />
              <p>Customer Support: <a href="mailto:support@obpark.in" className="underline font-bold hover:opacity-80">support@obpark.in</a></p>
              <p>Billing Support: <a href="mailto:billing@obpark.in" className="underline font-bold hover:opacity-80">billing@obpark.in</a></p>
              <p>Email: <a href="mailto:refunds@obpark.in" className="underline font-bold hover:opacity-80">refunds@obpark.in</a></p>
              <p>Website: <a href="https://www.obpark.in" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:opacity-80">https://www.obpark.in</a></p>
              <br />
              <p><span className="font-bold">Business Hours:</span> Monday–Saturday, 9:30 AM – 6:30 PM IST (excluding public holidays)</p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#074139]/20">
            <h2 className="text-base sm:text-lg font-bold mb-3">VERSION HISTORY</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#074139]/30">
                    <th className="py-2 pr-4">Version</th>
                    <th className="py-2 pr-4">Effective Date</th>
                    <th className="py-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#074139]/10">
                    <td className="py-2 pr-4">1.0</td>
                    <td className="py-2 pr-4">15th July 2026</td>
                    <td className="py-2">Initial Release</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="pt-4 border-t border-[#074139]/20">
            <p className="font-bold mb-2">© 2026 Obrive Industries Private Limited. All rights reserved.</p>
            <p>
              This Refund Policy forms part of the legal documentation governing the use of the OBPARK Platform and should be read together with all other applicable policies published by the Company.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
