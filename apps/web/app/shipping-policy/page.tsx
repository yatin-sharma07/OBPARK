import { microgrammaBold, michroma } from '@/lib/fonts'

export default function ShippingPolicyPage() {
  return (
    <div className="w-full bg-[#eefaf6] min-h-screen pt-32 pb-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-[1000px] mx-auto text-[#074139]">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className={`${michroma.className} text-xs sm:text-sm font-bold uppercase tracking-widest mb-4`}>
            Legal Links
          </p>
          <h1 className={`${microgrammaBold.className} text-4xl sm:text-5xl md:text-6xl tracking-wide uppercase`}>
            Shipping & Delivery Policy
          </h1>
        </div>

        {/* Content Section */}
        <div className={`${michroma.className} space-y-8 text-xs sm:text-sm md:text-[15px] leading-relaxed`}>
          
          <div className="mb-8 font-bold">
            <p>OBPARK SHIPPING & DELIVERY POLICY</p>
            <p>Effective Date: 15 July 2026</p>
            <p>Last Updated: 15 July 2026</p>
          </div>

          <div className="pt-6">
            <p className="mb-2">
              This Shipping & Delivery Policy ("Policy") governs the delivery of products and services purchased through OBPARK, a digital mobility and vehicle services platform owned and operated by Obrive Industries Private Limited ("Company", "OBPARK", "we", "our", or "us").
            </p>
            <p>
              This Policy forms part of the OBPARK Terms & Conditions and should be read together with the Refund Policy, Cancellation Policy, Pricing Policy, Privacy Policy, and other legal documents available on the Platform.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">1. PURPOSE</h2>
            <p className="mb-2">This Policy explains:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
              <ul className="list-disc pl-5 space-y-1">
                <li>Delivery of digital services</li>
                <li>Delivery of marketplace products</li>
                <li>Shipping methods</li>
                <li>Estimated delivery timelines</li>
                <li>Shipping charges</li>
              </ul>
              <ul className="list-disc pl-5 space-y-1">
                <li>Order tracking</li>
                <li>Delivery failures</li>
                <li>Damaged or lost shipments</li>
                <li>Customer responsibilities</li>
              </ul>
            </div>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">2. SERVICES OFFERED THROUGH OBPARK</h2>
            <p className="mb-4">OBPARK offers both digital services and, where applicable, physical products through authorized merchants.</p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-bold">Digital Services</h3>
                <p className="mb-1">Digital services may include:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Parking reservations</li>
                    <li>Parking subscriptions</li>
                    <li>Corporate parking services</li>
                    <li>Indoor navigation access</li>
                    <li>Digital parking passes</li>
                    <li>EV charging reservations</li>
                  </ul>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Vehicle service bookings</li>
                    <li>FASTag-related services (through authorized partners)</li>
                    <li>Vehicle insurance referrals</li>
                    <li>Vehicle loan referrals</li>
                    <li>Membership plans</li>
                    <li>Software-as-a-Service (SaaS) offerings</li>
                  </ul>
                </div>
                <p>Digital services are delivered electronically and do not involve physical shipping.</p>
              </div>

              <div>
                <h3 className="font-bold">Marketplace Products</h3>
                <p className="mb-1">Physical products may include:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Vehicle accessories</li>
                  <li>Automotive electronics</li>
                  <li>Parking equipment</li>
                  <li>Merchandise</li>
                  <li>Promotional items</li>
                  <li>Other products sold by authorized merchants</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">3. DIGITAL SERVICE DELIVERY</h2>
            <p className="mb-2">Upon successful payment and order confirmation, digital services are generally delivered immediately or within a reasonable operational timeframe.</p>
            <p className="mb-2">Examples include:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Parking booking confirmations</li>
              <li>QR codes or digital parking passes</li>
              <li>Subscription activation</li>
              <li>Membership activation</li>
              <li>Booking confirmations</li>
              <li>Digital invoices</li>
              <li>Payment receipts</li>
            </ul>
            <p className="mb-2">Delivery is typically made through:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>User account dashboard</li>
              <li>Mobile application</li>
              <li>Email</li>
              <li>SMS</li>
              <li>Push notifications</li>
            </ul>
            <p>If delivery is delayed due to technical reasons, OBPARK will make reasonable efforts to restore access as quickly as possible.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">4. ORDER PROCESSING</h2>
            <p className="mb-2">Marketplace orders are processed after:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Successful payment authorization.</li>
              <li>Inventory confirmation by the merchant.</li>
              <li>Order acceptance by the merchant or supplier.</li>
            </ul>
            <p className="mb-2">Processing times may vary depending on the product, merchant, and location.</p>
            <p>Business days exclude Sundays and public holidays unless otherwise stated.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">5. SHIPPING PARTNERS</h2>
            <p className="mb-2">Marketplace products may be shipped using third-party logistics providers or courier partners selected by the merchant or the Company.</p>
            <p className="mb-2">The choice of logistics provider may depend on:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Delivery location</li>
              <li>Product type</li>
              <li>Availability</li>
              <li>Delivery speed</li>
              <li>Serviceability</li>
            </ul>
            <p>OBPARK may change logistics providers without prior notice to improve service quality.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">6. SHIPPING TIMELINES</h2>
            <p className="mb-2">Estimated delivery timelines are provided for convenience only.</p>
            <p className="mb-2">Typical delivery estimates:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li><span className="font-bold">Metro Cities:</span> 2–5 business days</li>
              <li><span className="font-bold">Tier-2 Cities:</span> 3–7 business days</li>
              <li><span className="font-bold">Remote Locations:</span> 5–10 business days</li>
            </ul>
            <p className="mb-2">Actual delivery may vary due to:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Weather conditions</li>
              <li>Courier delays</li>
              <li>Public holidays</li>
              <li>Regulatory restrictions</li>
              <li>Natural disasters</li>
              <li>Force majeure events</li>
            </ul>
            <p>Delivery dates are estimates and not guaranteed unless expressly stated.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">7. SHIPPING CHARGES</h2>
            <p className="mb-2">Shipping charges, where applicable, will be displayed during checkout before payment confirmation.</p>
            <p className="mb-2">Shipping charges may depend on:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Delivery location</li>
              <li>Product dimensions</li>
              <li>Weight</li>
              <li>Courier partner</li>
              <li>Promotional campaigns</li>
              <li>Subscription benefits</li>
            </ul>
            <p>Some products or promotions may qualify for free shipping.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">8. ORDER TRACKING</h2>
            <p className="mb-2">Where tracking is available, Users may track their shipment using:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>The OBPARK application</li>
              <li>The website</li>
              <li>Tracking links provided via email or SMS</li>
              <li>Courier partner tracking systems</li>
            </ul>
            <p>Tracking information is generally updated after dispatch by the logistics provider.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">9. DELIVERY ADDRESS</h2>
            <p className="mb-2">Users are responsible for providing accurate and complete delivery information.</p>
            <p className="mb-2">The Company and its merchants are not responsible for delays or failed deliveries resulting from:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Incorrect addresses</li>
              <li>Incomplete addresses</li>
              <li>Incorrect postal codes</li>
              <li>Incorrect contact details</li>
              <li>Recipient unavailability</li>
            </ul>
            <p>Address changes may not be possible once an order has been dispatched.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">10. FAILED DELIVERY</h2>
            <p className="mb-2">A delivery may be considered unsuccessful if:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>The recipient is unavailable.</li>
              <li>The delivery address is incorrect.</li>
              <li>Delivery is refused.</li>
              <li>Delivery attempts exceed the courier's permitted limit.</li>
            </ul>
            <p className="mb-2">In such cases, the order may:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Be returned to the merchant.</li>
              <li>Be cancelled.</li>
              <li>Be rescheduled, where possible.</li>
            </ul>
            <p>Additional shipping charges may apply for re-delivery.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">11. LOST OR DAMAGED SHIPMENTS</h2>
            <p className="mb-2">If a shipment is lost or arrives visibly damaged:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Notify Customer Support within 48 hours of the expected delivery date or receipt.</li>
              <li>Provide photographs of the package and product, where applicable.</li>
              <li>Retain all packaging materials until the claim is reviewed.</li>
            </ul>
            <p className="mb-2">OBPARK will coordinate with the merchant and logistics provider to investigate the matter.</p>
            <p>Appropriate remedies may include replacement, repair, or refund, depending on the findings and applicable policies.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">12. INSPECTION UPON DELIVERY</h2>
            <p className="mb-2">Users are encouraged to inspect physical products upon delivery.</p>
            <p className="mb-2">If visible damage, tampering, or incorrect items are identified:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Record photographs where possible.</li>
              <li>Notify Customer Support promptly.</li>
              <li>Follow the merchant's return or replacement instructions.</li>
            </ul>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">13. RISK AND OWNERSHIP</h2>
            <p className="mb-2">Ownership of physical products transfers to the User upon successful delivery, unless otherwise specified.</p>
            <p>Risk of loss or damage generally passes upon delivery to the User or the authorized recipient.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">14. INTERNATIONAL SHIPPING</h2>
            <p className="mb-2">Unless expressly stated, OBPARK currently provides services primarily within India.</p>
            <p className="mb-2">International shipping may be available for selected products or future services.</p>
            <p className="mb-2">International orders may be subject to:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Customs duties</li>
              <li>Import taxes</li>
              <li>Local regulations</li>
              <li>Additional delivery timelines</li>
            </ul>
            <p>Such charges are generally the responsibility of the recipient unless otherwise specified.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">15. GST INVOICES</h2>
            <p className="mb-2">Where applicable, GST invoices will be issued in accordance with Indian tax laws.</p>
            <p>Business customers should provide accurate GST registration details during checkout if a tax invoice is required.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">16. LIMITATION OF LIABILITY</h2>
            <p className="mb-2">The Company is not responsible for delays or failures caused by:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Courier partners</li>
              <li>Customs authorities</li>
              <li>Natural disasters</li>
              <li>Government restrictions</li>
              <li>Civil unrest</li>
              <li>Transport disruptions</li>
              <li>Force majeure events</li>
            </ul>
            <p>The Company's liability, where applicable, shall be limited to the remedies provided under applicable law and the relevant policies.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">17. POLICY UPDATES</h2>
            <p className="mb-2">The Company reserves the right to amend this Shipping & Delivery Policy at any time.</p>
            <p className="mb-2">Updated versions will be published on the Platform and become effective on the stated effective date.</p>
            <p>Continued use of the Platform after such updates constitutes acceptance of the revised Policy.</p>
          </div>

          <div className="pt-8 border-t border-[#074139]/20">
            <h2 className="text-base sm:text-lg font-bold mb-3">18. CONTACT US</h2>
            <p className="mb-2">For shipping and delivery-related questions, please contact:</p>
            <div className="space-y-1">
              <p>Obrive Industries Private Limited</p>
              <p>Product: OBPARK</p>
              <br />
              <p>Customer Support Email: <a href="mailto:support@obpark.in" className="underline font-bold hover:opacity-80">support@obpark.in</a></p>
              <p>Shipping Support: <a href="mailto:shipping@obpark.in" className="underline font-bold hover:opacity-80">shipping@obpark.in</a></p>
              <p>Website: <a href="https://www.obpark.in" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:opacity-80">https://www.obpark.in</a></p>
              <br />
              <p><span className="font-bold">Business Hours:</span> Monday to Saturday, 9:30 AM – 6:30 PM IST (excluding public holidays)</p>
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
                    <td className="py-2 pr-4">15 July 2026</td>
                    <td className="py-2">Initial Release</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="pt-4 border-t border-[#074139]/20">
            <p className="font-bold mb-2">© 2026 Obrive Industries Private Limited. All rights reserved.</p>
            <p>
              This Shipping & Delivery Policy forms part of the legal documentation governing the use of the OBPARK Platform and should be read together with the Terms & Conditions, Privacy Policy, Refund Policy, Cancellation Policy, and Pricing Policy.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
