import { microgrammaBold, michroma } from '@/lib/fonts'

export default function TermsAndConditionsPage() {
  return (
    <div className="w-full bg-[#eefaf6] min-h-screen pt-32 pb-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-[1000px] mx-auto text-[#074139]">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className={`${michroma.className} text-xs sm:text-sm font-bold uppercase tracking-widest mb-4`}>
            Legal Links
          </p>
          <h1 className={`${microgrammaBold.className} text-4xl sm:text-5xl md:text-6xl tracking-wide uppercase`}>
            Terms & Conditions
          </h1>
        </div>

        {/* Content Section */}
        <div className={`${michroma.className} space-y-8 text-xs sm:text-sm md:text-[15px] leading-relaxed`}>
          
          <div className="mb-8 font-bold">
            <p>OBPARK TERMS & CONDITIONS</p>
            <p>Effective Date: 15th July 2026</p>
            <p>Last Updated: 15th July 2026</p>
          </div>

          <div className="pt-6">
            <h2 className="text-base sm:text-lg font-bold mb-3">1. INTRODUCTION</h2>
            <p className="mb-2">
              Welcome to OBPARK, a Smart Parking and Spatial Computing Platform developed and operated by Obrive Industries Private Limited, a company incorporated under the Companies Act, 2013, having its registered office in India (hereinafter referred to as "Obrive", "OBPARK", "Company", "we", "our", or "us").
            </p>
            <p className="mb-2">
              These Terms & Conditions ("Terms") govern your access to and use of:
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>The OBPARK Website</li>
              <li>Mobile Applications (Android & iOS)</li>
              <li>Smart Parking Platform</li>
              <li>Indoor Navigation Services</li>
              <li>AR/MR Navigation Features</li>
              <li>Merchant Marketplace</li>
              <li>Vehicle-related Digital Services</li>
              <li>Parking Reservation Services</li>
              <li>Corporate Parking Management</li>
              <li>APIs and Software Services</li>
              <li>Any future services introduced by OBPARK.</li>
            </ul>
            <p className="mb-2">
              By accessing, browsing, registering, or using any part of the Platform, you acknowledge that you have read, understood, and agree to be legally bound by these Terms.
            </p>
            <p className="font-bold text-[#074139]/80">
              If you do not agree with these Terms, you must discontinue use of the Platform immediately.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">2. ABOUT OBPARK</h2>
            <p className="mb-2">
              OBPARK is a technology platform owned and operated by Obrive Industries Private Limited that enables users to discover, reserve, navigate to, and pay for parking spaces using advanced technologies including Artificial Intelligence (AI), Augmented Reality (AR), Mixed Reality (MR), computer vision, indoor positioning, and digital mapping.
            </p>
            <p className="mb-2">The Platform may also provide value-added services including, but not limited to:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
              <ul className="list-disc pl-5 space-y-1">
                <li>Parking reservations</li>
                <li>Smart parking guidance</li>
                <li>Indoor navigation</li>
                <li>Digital parking passes</li>
                <li>Parking subscriptions</li>
                <li>Corporate parking solutions</li>
                <li>EV charging reservations</li>
                <li>Car wash and detailing bookings</li>
                <li>FASTag services (through authorized partners)</li>
              </ul>
              <ul className="list-disc pl-5 space-y-1">
                <li>Vehicle insurance referrals</li>
                <li>Vehicle financing referrals</li>
                <li>Roadside assistance</li>
                <li>Merchant marketplace</li>
                <li>Promotional offers</li>
                <li>Loyalty programs</li>
                <li>Digital payments</li>
                <li>Subscription plans</li>
                <li>Analytics and reporting</li>
              </ul>
            </div>
            <p>
              Certain services may be offered directly by Obrive Industries Private Limited, while others may be provided by authorized third-party partners.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">3. DEFINITIONS</h2>
            <p className="mb-2">For the purposes of these Terms:</p>
            <ul className="space-y-2">
              <li><span className="font-bold">"Account"</span> means the registered profile created by a User.</li>
              <li><span className="font-bold">"Booking"</span> means any reservation made through the Platform.</li>
              <li><span className="font-bold">"Merchant"</span> means any parking operator, commercial establishment, service provider, or business offering services through OBPARK.</li>
              <li><span className="font-bold">"Parking Facility"</span> means any parking location listed on the Platform.</li>
              <li><span className="font-bold">"Platform"</span> means the OBPARK website, mobile applications, APIs, software, dashboards, and related digital services.</li>
              <li><span className="font-bold">"Services"</span> means all products and services made available by OBPARK.</li>
              <li><span className="font-bold">"Subscription"</span> means any recurring or prepaid plan offered by the Company.</li>
              <li><span className="font-bold">"User", "Customer", or "You"</span> means any individual or legal entity accessing or using the Platform.</li>
            </ul>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">4. ACCEPTANCE OF TERMS</h2>
            <p className="mb-2">By using the Platform, you confirm that:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>You are at least 18 years of age or otherwise legally competent to enter into a binding agreement.</li>
              <li>All information you provide is true, complete, and accurate.</li>
              <li>You will comply with these Terms, applicable laws, and all policies published on the Platform.</li>
              <li>You will not use the Platform for any unlawful, fraudulent, or unauthorized purpose.</li>
            </ul>
            <p>
              If you are using the Platform on behalf of a company or organization, you represent that you have the authority to bind that entity to these Terms.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">5. ELIGIBILITY</h2>
            <p className="mb-2">To use the Platform, you must:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Be legally capable of entering into a contract under applicable law.</li>
              <li>Possess a valid mobile number and email address for account verification.</li>
              <li>Provide accurate registration details.</li>
              <li>Not have been previously suspended or terminated from using OBPARK.</li>
            </ul>
            <p>
              The Company reserves the right to refuse service, suspend accounts, or terminate access if eligibility requirements are no longer met.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">6. USER ACCOUNT REGISTRATION</h2>
            <p className="mb-2">To access certain features, Users may be required to create an account. During registration, you may be asked to provide:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Full Name</li>
              <li>Mobile Number</li>
              <li>Email Address</li>
              <li>Vehicle Registration Number(s)</li>
              <li>Password or OTP Authentication</li>
              <li>Business Information (for corporate users)</li>
              <li>GST Information (where applicable)</li>
            </ul>
            <p className="mb-2">You agree to:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Keep your information accurate and up to date.</li>
              <li>Maintain the confidentiality of your login credentials.</li>
              <li>Notify the Company immediately of any unauthorized use of your account.</li>
              <li>Accept responsibility for all activities carried out through your account.</li>
            </ul>
            <p>The Company reserves the right to verify the information provided by Users at any time.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">7. SERVICES PROVIDED</h2>
            <p className="mb-4">OBPARK offers technology-enabled services, which may include:</p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-bold">Smart Parking</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Locate available parking spaces.</li>
                  <li>Real-time parking occupancy information.</li>
                  <li>Advance parking reservations.</li>
                  <li>Parking duration management.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold">Indoor Navigation</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>AR-powered navigation.</li>
                  <li>Visual parking guidance.</li>
                  <li>Floor-wise navigation.</li>
                  <li>Wayfinding assistance.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold">Digital Payments</h3>
                <p className="mb-1">Users may pay for services using supported payment methods, including:</p>
                <ul className="list-disc pl-5 space-y-1 mb-2">
                  <li>UPI</li>
                  <li>Debit Cards</li>
                  <li>Credit Cards</li>
                  <li>Net Banking</li>
                  <li>Wallets</li>
                  <li>EMI (where applicable)</li>
                  <li>Corporate payment methods</li>
                </ul>
                <p>Payments are processed through secure third-party payment gateway providers.</p>
              </div>

              <div>
                <h3 className="font-bold">Marketplace Services</h3>
                <p className="mb-1">The Platform may allow Users to purchase products and services from authorized merchants, including:</p>
                <ul className="list-disc pl-5 space-y-1 mb-2">
                  <li>Car accessories</li>
                  <li>Vehicle maintenance services</li>
                  <li>Car wash packages</li>
                  <li>EV charging services</li>
                  <li>FASTag services</li>
                  <li>Insurance referrals</li>
                  <li>Loan referrals</li>
                  <li>Other automotive services</li>
                </ul>
                <p>The Company acts as a technology platform and may not be the direct seller of third-party products or services unless expressly stated.</p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">8. PARKING BOOKINGS</h2>
            <p className="mb-2">Users may reserve parking spaces through the Platform. Availability displayed on the Platform is subject to real-time updates and may occasionally differ due to operational circumstances.</p>
            <p className="mb-2">A booking is confirmed only after:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Successful payment (where applicable), and</li>
              <li>Receipt of a booking confirmation through the Platform.</li>
            </ul>
            <p className="mb-2">Users are responsible for:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Arriving within the allotted reservation time.</li>
              <li>Ensuring vehicle details are accurate.</li>
              <li>Following parking facility rules.</li>
              <li>Displaying digital parking passes if required.</li>
              <li>Exiting the facility within the booked duration unless extended.</li>
            </ul>
            <p>
              The Company is not responsible for denied entry due to incorrect vehicle information, capacity limitations, force majeure events, or actions of third-party parking operators.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">9. USER RESPONSIBILITIES</h2>
            <p className="mb-2">Users agree to:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Use the Platform only for lawful purposes.</li>
              <li>Provide truthful information.</li>
              <li>Respect parking facility rules.</li>
              <li>Follow traffic regulations.</li>
              <li>Pay all applicable fees.</li>
              <li>Maintain the security of their devices and accounts.</li>
              <li>Refrain from interfering with the Platform's operation.</li>
            </ul>
            <p className="mb-2">Users must not:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Attempt to gain unauthorized access to the Platform.</li>
              <li>Reverse engineer or copy the Platform.</li>
              <li>Use bots, scripts, or automated tools without authorization.</li>
              <li>Upload malicious software.</li>
              <li>Engage in fraudulent transactions.</li>
              <li>Misuse promotional offers.</li>
              <li>Create multiple accounts to obtain unauthorized benefits.</li>
              <li>Harass, threaten, or abuse other Users, Merchants, or Company personnel.</li>
              <li>Use the Platform to facilitate unlawful activities.</li>
            </ul>
            <p className="font-bold">
              Violation of these Terms may result in suspension or permanent termination of access without prior notice.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">10. PAYMENTS</h2>
            <p className="mb-2">
              OBPARK enables Users to make payments for services offered on the Platform through secure third-party payment service providers. Payment processing is facilitated by authorized payment gateway partners and banking institutions.
            </p>
            <p className="mb-2">Supported payment methods may include:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Unified Payments Interface (UPI)</li>
              <li>Credit Cards</li>
              <li>Debit Cards</li>
              <li>Net Banking</li>
              <li>Digital Wallets</li>
              <li>EMI (where available)</li>
              <li>Corporate Payment Solutions</li>
              <li>Gift Cards or Promotional Credits (if applicable)</li>
            </ul>
            <p className="mb-2">The Company reserves the right to add, remove, or modify supported payment methods without prior notice.</p>
            <p className="mb-2">
              All payment transactions are encrypted and processed using industry-standard security protocols. OBPARK does not store Users' complete credit card, debit card, CVV, or banking credentials on its servers.
            </p>
            <p>
              By completing a payment, the User authorizes the Company and its payment partners to debit the applicable amount from the selected payment method.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">11. PRICING</h2>
            <p className="mb-2">Prices displayed on the Platform may include or exclude applicable taxes depending on the service and local legal requirements.</p>
            <p className="mb-2">Pricing may consist of:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Parking Fees</li>
              <li>Reservation Charges</li>
              <li>Convenience Fees</li>
              <li>Subscription Charges</li>
              <li>Merchant Product Prices</li>
              <li>Vehicle Service Charges</li>
              <li>EV Charging Fees</li>
              <li>Platform Service Fees</li>
              <li>Corporate Service Charges</li>
            </ul>
            <p className="mb-2">Prices may vary based on:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Location</li>
              <li>Parking operator</li>
              <li>Time of day</li>
              <li>Demand</li>
              <li>Vehicle category</li>
              <li>Subscription plan</li>
              <li>Promotional campaigns</li>
              <li>Government taxes</li>
            </ul>
            <p>
              The Company reserves the right to revise pricing at any time. Updated pricing shall become effective immediately upon publication unless otherwise stated.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">12. TAXES</h2>
            <p className="mb-2">
              Applicable Goods and Services Tax 18% and any other statutory taxes shall be charged in accordance with prevailing laws of India.
            </p>
            <p className="mb-2">Users are responsible for payment of all applicable taxes associated with purchases made through the Platform.</p>
            <p className="mb-2">GST invoices shall be issued where applicable.</p>
            <p>
              Corporate customers requesting GST invoices must provide accurate GST registration details at the time of purchase.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">13. PAYMENT CONFIRMATION</h2>
            <p className="mb-2">A transaction shall be considered successful only after:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Authorization by the payment provider.</li>
              <li>Successful settlement by the acquiring bank.</li>
              <li>Confirmation generated by the Platform.</li>
            </ul>
            <p className="mb-2">
              A payment receipt or booking confirmation will be sent to the registered email address, mobile number, or made available within the User's account.
            </p>
            <p>
              If a payment fails but the amount is debited, the User should contact the payment provider or OBPARK Customer Support. Failed transactions are generally reversed by the issuing bank or payment provider within the timeline prescribed by applicable regulations.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">14. SUBSCRIPTION PLANS</h2>
            <p className="mb-2">OBPARK may offer subscription-based services that provide additional features or benefits. Subscription plans may include:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Monthly Plans</li>
              <li>Quarterly Plans</li>
              <li>Annual Plans</li>
              <li>Corporate Plans</li>
              <li>Enterprise Plans</li>
            </ul>
            <p className="mb-2">Subscription benefits may include:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Reserved parking access</li>
              <li>Discounted parking rates</li>
              <li>Priority booking</li>
              <li>Premium customer support</li>
              <li>Additional digital services</li>
            </ul>
            <p className="mb-2">Subscriptions may automatically renew unless cancelled before the renewal date.</p>
            <p className="mb-2">Users are responsible for ensuring that their selected payment method remains valid for recurring billing.</p>
            <p>
              The Company reserves the right to modify subscription pricing, features, or benefits. Any changes will be communicated in advance where required by law.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">15. PROMOTIONAL OFFERS</h2>
            <p className="mb-2">OBPARK may periodically offer:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Promotional discounts</li>
              <li>Coupon codes</li>
              <li>Cashback offers</li>
              <li>Referral incentives</li>
              <li>Loyalty rewards</li>
              <li>Seasonal campaigns</li>
            </ul>
            <p className="mb-2">Promotional offers:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Are subject to specific terms and conditions.</li>
              <li>Cannot be exchanged for cash unless expressly stated.</li>
              <li>May be withdrawn or modified without prior notice.</li>
              <li>May be limited to specific users, locations, or services.</li>
            </ul>
            <p>The Company reserves the right to cancel promotions if misuse, fraud, or technical errors are detected.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">16. MARKETPLACE SERVICES</h2>
            <p className="mb-2">The Platform may facilitate the purchase of products and services from third-party merchants. These may include:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Vehicle accessories</li>
              <li>Car wash services</li>
              <li>EV charging</li>
              <li>Vehicle maintenance</li>
              <li>Insurance referrals</li>
              <li>Financing referrals</li>
              <li>FASTag services</li>
              <li>Accessories and digital products</li>
            </ul>
            <p className="mb-2">Where products or services are supplied by independent merchants:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>The sales contract exists directly between the User and the Merchant.</li>
              <li>OBPARK acts as a technology platform facilitating discovery, booking, payment, or communication.</li>
              <li>Product descriptions, pricing, warranties, and service quality are the responsibility of the respective Merchant unless expressly stated otherwise.</li>
            </ul>
            <p>
              The Company may suspend or remove any Merchant that violates applicable laws, platform policies, or service standards.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">17. THIRD-PARTY SERVICES</h2>
            <p className="mb-2">The Platform may integrate with or provide access to third-party services, including:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Payment gateways</li>
              <li>Banks</li>
              <li>Insurance providers</li>
              <li>Vehicle financing institutions</li>
              <li>Navigation providers</li>
              <li>Mapping services</li>
              <li>Cloud hosting providers</li>
              <li>Government service integrations</li>
              <li>EV charging operators</li>
            </ul>
            <p className="mb-2">Such third-party services operate under their own terms, privacy policies, and contractual obligations.</p>
            <p className="mb-2">The Company is not responsible for the availability, accuracy, quality, or performance of third-party services beyond its reasonable control.</p>
            <p>Users acknowledge that interactions with third parties may be governed by separate agreements.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">18. USER CONTENT</h2>
            <p className="mb-2">Users may upload or submit:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Profile information</li>
              <li>Reviews</li>
              <li>Ratings</li>
              <li>Comments</li>
              <li>Images</li>
              <li>Documents</li>
              <li>Feedback</li>
              <li>Vehicle information</li>
            </ul>
            <p className="mb-2">
              By submitting content, Users grant the Company a worldwide, non-exclusive, royalty-free license to use, reproduce, display, distribute, and process such content solely for operating, improving, promoting, or securing the Platform.
            </p>
            <p className="mb-2">Users represent and warrant that:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>They own or have the necessary rights to the submitted content.</li>
              <li>The content does not infringe any intellectual property rights.</li>
              <li>The content is lawful and does not contain defamatory, obscene, fraudulent, or illegal material.</li>
            </ul>
            <p>The Company reserves the right to remove any content that violates these Terms or applicable law.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">19. INTELLECTUAL PROPERTY RIGHTS</h2>
            <p className="mb-2">All intellectual property associated with OBPARK remains the exclusive property of Obrive Industries Private Limited or its licensors. This includes, without limitation:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
              <ul className="list-disc pl-5 space-y-1">
                <li>OBPARK name</li>
                <li>Logos</li>
                <li>Trademarks</li>
                <li>Service marks</li>
                <li>Software</li>
                <li>Source code</li>
                <li>Mobile applications</li>
                <li>Website design</li>
                <li>User interface</li>
                <li>Graphics</li>
                <li>Icons</li>
              </ul>
              <ul className="list-disc pl-5 space-y-1">
                <li>Images</li>
                <li>Videos</li>
                <li>Documentation</li>
                <li>Databases</li>
                <li>Navigation algorithms</li>
                <li>Artificial Intelligence models</li>
                <li>Spatial computing technologies</li>
                <li>Augmented Reality assets</li>
                <li>Mixed Reality content</li>
                <li>Digital maps</li>
                <li>APIs</li>
                <li>Product documentation</li>
              </ul>
            </div>
            <p className="mb-2">
              No part of the Platform may be copied, reproduced, modified, distributed, sold, licensed, reverse engineered, decompiled, or otherwise exploited without the Company's prior written consent.
            </p>
            <p>Nothing contained in these Terms grants Users any ownership rights in the Company's intellectual property.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">20. LICENSE TO USE THE PLATFORM</h2>
            <p className="mb-2">
              Subject to compliance with these Terms, the Company grants Users a limited, non-exclusive, non-transferable, revocable license to access and use the Platform for personal or authorized business purposes.
            </p>
            <p className="mb-2">This license does not permit Users to:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Copy or modify the Platform.</li>
              <li>Develop competing products based on the Platform.</li>
              <li>Scrape or harvest Platform data.</li>
              <li>Circumvent security measures.</li>
              <li>Resell Platform access without authorization.</li>
            </ul>
            <p>The Company may suspend or revoke this license at any time for violations of these Terms.</p>
          </div>

        </div>
      </div>
    </div>
  )
}
