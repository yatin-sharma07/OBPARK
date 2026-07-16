import { microgrammaBold, michroma } from '@/lib/fonts'

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-[#eefaf6] min-h-screen pt-32 pb-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-[1000px] mx-auto text-[#074139]">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className={`${michroma.className} text-xs sm:text-sm font-bold uppercase tracking-widest mb-4`}>
            Legal Links
          </p>
          <h1 className={`${microgrammaBold.className} text-4xl sm:text-5xl md:text-6xl tracking-wide uppercase`}>
            Privacy Policy
          </h1>
        </div>

        {/* Content Section */}
        <div className={`${michroma.className} space-y-8 text-xs sm:text-sm md:text-[15px] leading-relaxed`}>
          
          <div className="mb-8 font-bold">
            <p>OBPARK PRIVACY POLICY</p>
            <p>Effective Date: 15th July 2026</p>
            <p>Last Updated: 15th July 2026</p>
          </div>

          <div className="pt-6">
            <h2 className="text-base sm:text-lg font-bold mb-3">1. INTRODUCTION</h2>
            <p className="mb-2">
              Welcome to OBPARK, a smart parking, mobility, and spatial computing platform owned and operated by Obrive Industries Private Limited ("Obrive", "OBPARK", "Company", "we", "our", or "us").
            </p>
            <p className="mb-2">
              We are committed to protecting your privacy and ensuring that your personal information is handled securely, transparently, and responsibly.
            </p>
            <p className="mb-2">
              This Privacy Policy explains how we collect, use, disclose, store, retain, and protect your personal information when you use:
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>The OBPARK Website</li>
              <li>Android Application</li>
              <li>iOS Application</li>
              <li>APIs</li>
              <li>Smart Parking Services</li>
              <li>Indoor Navigation Services</li>
              <li>Marketplace Services</li>
              <li>Corporate Parking Solutions</li>
              <li>EV Charging Services</li>
              <li>Vehicle-related Digital Services</li>
              <li>Future products and services offered by OBPARK</li>
            </ul>
            <p>
              By accessing or using our Platform, you acknowledge that you have read, understood, and agree to this Privacy Policy.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">2. OUR COMMITMENT TO YOUR PRIVACY</h2>
            <p className="mb-2">At OBPARK, privacy is one of our core principles.</p>
            <p className="mb-2">
              We collect only the information necessary to provide our services, improve user experience, ensure platform security, comply with applicable laws, and fulfill our contractual obligations.
            </p>
            <p>
              We are committed to processing personal data lawfully, fairly, and transparently.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">3. APPLICABLE LAWS</h2>
            <p className="mb-2">This Privacy Policy has been prepared with reference to applicable laws and standards, including but not limited to:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Digital Personal Data Protection Act, 2023 (India)</li>
              <li>Information Technology Act, 2000</li>
              <li>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 (to the extent applicable)</li>
              <li>Consumer Protection (E-Commerce) Rules, 2020</li>
              <li>Applicable Reserve Bank of India (RBI) guidelines for payment processing</li>
              <li>Other applicable Indian laws governing electronic records, payments, and consumer protection</li>
            </ul>
            <p>
              If OBPARK offers services in other jurisdictions, additional local privacy requirements may also apply.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">4. DEFINITIONS</h2>
            <p className="mb-2">For the purposes of this Privacy Policy:</p>
            <ul className="space-y-2">
              <li><span className="font-bold">"Personal Data"</span> means any information that relates to an identified or identifiable individual.</li>
              <li><span className="font-bold">"Processing"</span> includes collecting, recording, organizing, storing, using, sharing, modifying, retrieving, transmitting, deleting, or otherwise handling personal data.</li>
              <li><span className="font-bold">"Platform"</span> means the OBPARK website, mobile applications, APIs, dashboards, and associated digital services.</li>
              <li><span className="font-bold">"User"</span> means any person who accesses or uses the Platform.</li>
              <li><span className="font-bold">"Merchant"</span> means a business or service provider offering products or services through OBPARK.</li>
              <li><span className="font-bold">"Parking Partner"</span> means a parking operator or facility owner integrated with the Platform.</li>
            </ul>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">5. INFORMATION WE COLLECT</h2>
            <p className="mb-4">Depending on the services you use, we may collect the following categories of information.</p>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold mb-2">A. Personal Information</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Full Name</li>
                  <li>Date of Birth (where required)</li>
                  <li>Gender (optional)</li>
                  <li>Mobile Number</li>
                  <li>Email Address</li>
                  <li>Postal Address</li>
                  <li>Government identification details where legally required</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2">B. Account Information</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Username</li>
                  <li>Login Credentials</li>
                  <li>Password (stored securely in encrypted or hashed form where applicable)</li>
                  <li>Authentication Tokens</li>
                  <li>Account Preferences</li>
                  <li>Language Preferences</li>
                  <li>Communication Preferences</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2">C. Vehicle Information</h3>
                <p className="mb-2">To provide parking and mobility services, we may collect:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Vehicle Registration Number</li>
                  <li>Vehicle Type</li>
                  <li>Vehicle Model</li>
                  <li>Vehicle Brand</li>
                  <li>Fuel Type</li>
                  <li>EV Status</li>
                  <li>Vehicle Images (where uploaded)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2">D. Parking & Booking Information</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Booking ID</li>
                  <li>Parking Location</li>
                  <li>Parking Duration</li>
                  <li>Entry Time</li>
                  <li>Exit Time</li>
                  <li>Reservation History</li>
                  <li>Parking Preferences</li>
                  <li>Favorite Locations</li>
                  <li>Subscription Information</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2">E. Payment Information</h3>
                <p className="mb-2">Payments are processed through authorized payment gateway partners. We may receive limited payment-related information, such as:</p>
                <ul className="list-disc pl-5 space-y-1 mb-2">
                  <li>Transaction ID</li>
                  <li>Payment Status</li>
                  <li>Payment Method</li>
                  <li>Bank Reference Number</li>
                  <li>Refund Reference Number</li>
                  <li>Invoice Details</li>
                </ul>
                <p>We do not store complete credit card or debit card numbers, CVV values, UPI PINs, or internet banking passwords on our servers.</p>
              </div>

              <div>
                <h3 className="font-bold mb-2">F. Device Information</h3>
                <p className="mb-2">We may automatically collect:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Device Model</li>
                  <li>Operating System</li>
                  <li>Browser Type</li>
                  <li>App Version</li>
                  <li>IP Address</li>
                  <li>Device Identifiers</li>
                  <li>Time Zone</li>
                  <li>Language Settings</li>
                  <li>Mobile Network Information</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2">G. Location Information</h3>
                <p className="mb-2">Location information may include:</p>
                <ul className="list-disc pl-5 space-y-1 mb-2">
                  <li>GPS Coordinates</li>
                  <li>Indoor Positioning Data</li>
                  <li>Bluetooth Beacon Signals</li>
                  <li>Wi-Fi Positioning</li>
                  <li>Floor Level Information</li>
                  <li>Navigation Routes</li>
                  <li>Parking Location</li>
                  <li>Saved Locations</li>
                </ul>
                <p>Location data is used solely to provide navigation, parking discovery, and related mobility services.</p>
              </div>

              <div>
                <h3 className="font-bold mb-2">H. Camera Information</h3>
                <p className="mb-2">Where Users grant permission, the Platform may access the device camera to:</p>
                <ul className="list-disc pl-5 space-y-1 mb-2">
                  <li>Scan QR Codes</li>
                  <li>Verify Parking Tickets</li>
                  <li>Enable AR Navigation</li>
                  <li>Capture Vehicle Images (when initiated by the User)</li>
                </ul>
                <p>Camera access is activated only after User consent.</p>
              </div>

              <div>
                <h3 className="font-bold mb-2">I. Customer Support Information</h3>
                <p className="mb-2">When contacting Customer Support, we may collect:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Support Requests</li>
                  <li>Complaint Details</li>
                  <li>Email Communications</li>
                  <li>Chat History</li>
                  <li>Call Recordings (where legally permitted and disclosed)</li>
                  <li>Feedback</li>
                  <li>Survey Responses</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">6. INFORMATION COLLECTED AUTOMATICALLY</h2>
            <p className="mb-2">We may automatically collect technical information when you interact with the Platform, including:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Log Files</li>
              <li>Access Times</li>
              <li>Clickstream Data</li>
              <li>Navigation Paths</li>
              <li>Error Reports</li>
              <li>Crash Logs</li>
              <li>Device Performance Metrics</li>
              <li>Diagnostic Information</li>
            </ul>
            <p>
              This information helps us improve the stability, performance, and security of the Platform.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">7. INFORMATION FROM THIRD PARTIES</h2>
            <p className="mb-2">We may receive information from trusted third parties, including:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Parking Operators</li>
              <li>Payment Gateway Providers</li>
              <li>Banks</li>
              <li>Insurance Partners</li>
              <li>Vehicle Financing Partners</li>
              <li>EV Charging Providers</li>
              <li>Government-authorized service providers (where applicable)</li>
              <li>Identity Verification Providers</li>
              <li>Analytics Providers</li>
            </ul>
            <p>
              Such information is processed only for legitimate business purposes and in accordance with applicable laws.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">8. CHILDREN'S PRIVACY</h2>
            <p className="mb-2">
              OBPARK is not intended for children under the age of 18 unless permitted under applicable law and used under the supervision of a parent or legal guardian.
            </p>
            <p className="mb-2">
              We do not knowingly collect personal information from children without appropriate legal authorization.
            </p>
            <p>
              If we become aware that personal information has been collected from a child in violation of applicable law, we will take appropriate steps to delete such information.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">9. WHY WE COLLECT YOUR INFORMATION</h2>
            <p className="mb-2">We process personal information for purposes including:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Creating and managing your account</li>
              <li>Providing parking reservations</li>
              <li>Delivering indoor navigation</li>
              <li>Processing payments</li>
              <li>Managing subscriptions</li>
              <li>Providing customer support</li>
              <li>Preventing fraud</li>
              <li>Securing the Platform</li>
              <li>Improving our services</li>
              <li>Personalizing user experiences</li>
              <li>Fulfilling legal obligations</li>
              <li>Conducting analytics</li>
              <li>Maintaining business records</li>
              <li>Communicating service updates</li>
              <li>Sending notifications related to bookings and transactions</li>
            </ul>
            <p className="mb-4">
              We process only the information reasonably necessary for these purposes.
            </p>
            <p className="font-bold">Legal Basis for Processing, Consent, Data Sharing, Cookies, Security & Data Retention</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">10. LEGAL BASIS FOR PROCESSING PERSONAL DATA</h2>
            <p className="mb-4">
              OBPARK processes personal data only where there is a lawful basis to do so under applicable laws. Depending on the nature of the service, we process your personal data for one or more of the following reasons:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold mb-2">A. Performance of a Contract</h3>
                <p className="mb-2">We process your information to:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Create and manage your account.</li>
                  <li>Process parking reservations.</li>
                  <li>Facilitate digital payments.</li>
                  <li>Deliver subscriptions.</li>
                  <li>Provide customer support.</li>
                  <li>Enable navigation and location-based services.</li>
                  <li>Manage merchant and corporate accounts.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2">B. Compliance with Legal Obligations</h3>
                <p className="mb-2">We may process your personal information where necessary to:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Comply with applicable laws.</li>
                  <li>Respond to lawful requests from government authorities.</li>
                  <li>Maintain financial and accounting records.</li>
                  <li>Prevent fraud and financial crime.</li>
                  <li>Meet tax, audit, and regulatory obligations.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2">C. Legitimate Business Interests</h3>
                <p className="mb-2">We may process data to:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Improve our services.</li>
                  <li>Enhance platform security.</li>
                  <li>Detect fraud and abuse.</li>
                  <li>Analyze platform performance.</li>
                  <li>Develop new features.</li>
                  <li>Conduct internal research and analytics.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2">D. Consent</h3>
                <p className="mb-2">
                  For certain processing activities, such as marketing communications or optional device permissions (e.g., location, camera, notifications), we rely on your consent.
                </p>
                <p>
                  Where consent is the legal basis, you may withdraw it at any time through your device settings, account preferences, or by contacting us. Withdrawal of consent will not affect processing that occurred before the withdrawal.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">11. HOW WE USE YOUR INFORMATION</h2>
            <p className="mb-2">We may use your information to:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Verify your identity.</li>
              <li>Create and manage your account.</li>
              <li>Authenticate users.</li>
              <li>Process bookings.</li>
              <li>Process payments and refunds.</li>
              <li>Generate invoices.</li>
              <li>Deliver parking navigation.</li>
              <li>Recommend nearby parking.</li>
              <li>Provide EV charging services.</li>
              <li>Manage subscriptions.</li>
              <li>Respond to support requests.</li>
              <li>Send booking confirmations.</li>
              <li>Notify you of important service updates.</li>
              <li>Improve application performance.</li>
              <li>Prevent fraudulent activities.</li>
              <li>Monitor service quality.</li>
              <li>Conduct analytics and reporting.</li>
              <li>Comply with legal obligations.</li>
            </ul>
            <p>
              We will not use your personal information for purposes that are incompatible with those described in this Privacy Policy unless required or permitted by law.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">12. SHARING OF PERSONAL INFORMATION</h2>
            <p className="mb-4">
              We do not sell your personal information. We may share your information only where necessary with trusted parties, including:
            </p>
            
            <div className="space-y-4 mb-4">
              <div>
                <h3 className="font-bold">A. Payment Service Providers</h3>
                <p>To process payments, refunds, chargebacks, and transaction verification.</p>
              </div>
              <div>
                <h3 className="font-bold">B. Parking Partners</h3>
                <p>To facilitate parking reservations, entry, exit, and operational management.</p>
              </div>
              <div>
                <h3 className="font-bold">C. Merchants</h3>
                <p>To fulfill orders for products or services purchased through the Platform.</p>
              </div>
              <div>
                <h3 className="font-bold">D. EV Charging Operators</h3>
                <p>To facilitate charging reservations, billing, and service delivery.</p>
              </div>
              <div>
                <h3 className="font-bold">E. Insurance & Financial Partners</h3>
                <p>Where you choose to apply for insurance, vehicle financing, or related financial products.</p>
              </div>
              <div>
                <h3 className="font-bold">F. Cloud Infrastructure Providers</h3>
                <p>To securely host, process, and back up Platform data.</p>
              </div>
              <div>
                <h3 className="font-bold">G. Technology Service Providers</h3>
                <p className="mb-1">For services such as:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Analytics</li>
                  <li>Customer support systems</li>
                  <li>Notifications</li>
                  <li>Mapping</li>
                  <li>Email delivery</li>
                  <li>SMS gateways</li>
                  <li>Identity verification</li>
                  <li>Fraud prevention</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold">H. Government Authorities</h3>
                <p>Where disclosure is required by law, regulation, court order, or lawful governmental request.</p>
              </div>
            </div>
            <p>We require our service providers to implement appropriate security and confidentiality measures.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">13. INTERNATIONAL DATA TRANSFERS</h2>
            <p className="mb-2">
              Where necessary for service delivery, your information may be processed or stored outside India through trusted service providers.
            </p>
            <p>
              In such cases, the Company will take reasonable steps to ensure that appropriate safeguards are implemented to protect your personal data and that transfers comply with applicable legal requirements.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">14. COOKIES AND SIMILAR TECHNOLOGIES</h2>
            <p className="mb-2">
              The OBPARK website may use cookies, web beacons, SDKs, pixels, and similar technologies to improve functionality and user experience.
            </p>
            <p className="mb-2">These technologies help us:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Keep users signed in.</li>
              <li>Remember preferences.</li>
              <li>Measure website traffic.</li>
              <li>Improve platform performance.</li>
              <li>Detect fraud.</li>
              <li>Understand user interactions.</li>
              <li>Deliver relevant content.</li>
            </ul>
            <p className="mb-2">Cookies may include:</p>
            <ul className="space-y-2 mb-4">
              <li><span className="font-bold">Essential Cookies:</span> Required for the operation of the Platform.</li>
              <li><span className="font-bold">Functional Cookies:</span> Remember user settings and preferences.</li>
              <li><span className="font-bold">Analytics Cookies:</span> Help us understand how visitors use the Platform.</li>
              <li><span className="font-bold">Performance Cookies:</span> Measure website and application performance.</li>
              <li><span className="font-bold">Marketing Cookies:</span> Where applicable and permitted, these may help deliver relevant promotions.</li>
            </ul>
            <p>
              Users can manage cookie preferences through their browser settings. Disabling certain cookies may affect website functionality.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">15. LOCATION DATA</h2>
            <p className="mb-2">Location information is collected only when required to provide location-based features such as:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Indoor navigation.</li>
              <li>Parking discovery.</li>
              <li>Vehicle location assistance.</li>
              <li>Route optimization.</li>
              <li>Nearby service recommendations.</li>
            </ul>
            <p>
              Users can disable location permissions at any time through their device settings, although certain features may become unavailable or function with reduced accuracy.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">16. CAMERA PERMISSIONS</h2>
            <p className="mb-2">Camera access is used only with your permission and only for features such as:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>QR code scanning.</li>
              <li>AR navigation.</li>
              <li>Parking verification.</li>
              <li>Vehicle image capture.</li>
            </ul>
            <p>The camera is not activated without your consent.</p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">17. PAYMENT INFORMATION</h2>
            <p className="mb-2">All payment transactions are processed through secure third-party payment gateways. OBPARK does not collect or store:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Full credit card numbers.</li>
              <li>Full debit card numbers.</li>
              <li>CVV values.</li>
              <li>UPI PINs.</li>
              <li>Internet banking passwords.</li>
            </ul>
            <p>
              Payment card information is handled directly by the payment gateway provider in accordance with applicable security standards, including PCI DSS requirements.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">18. DATA RETENTION</h2>
            <p className="mb-2">We retain personal information only for as long as necessary to:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Provide our services.</li>
              <li>Comply with legal obligations.</li>
              <li>Resolve disputes.</li>
              <li>Enforce agreements.</li>
              <li>Maintain business records.</li>
              <li>Prevent fraud.</li>
            </ul>
            <p className="mb-2">
              Retention periods may vary depending on the nature of the information and applicable legal requirements.
            </p>
            <p>
              When information is no longer required, we will securely delete, anonymize, or otherwise dispose of it in accordance with our internal retention policies.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">19. INFORMATION SECURITY</h2>
            <p className="mb-2">
              We implement appropriate technical and organizational measures to protect your information against unauthorized access, loss, misuse, alteration, or disclosure. Security measures may include:
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Encryption of data in transit.</li>
              <li>Encryption of sensitive data at rest where appropriate.</li>
              <li>Secure authentication mechanisms.</li>
              <li>Access controls based on business need.</li>
              <li>Firewalls and network security controls.</li>
              <li>Security monitoring and logging.</li>
              <li>Vulnerability assessments.</li>
              <li>Regular software updates.</li>
              <li>Backup and disaster recovery procedures.</li>
              <li>Employee confidentiality obligations.</li>
            </ul>
            <p>
              While we strive to protect your information, no method of transmission or storage is completely secure. We therefore cannot guarantee absolute security.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">20. ACCOUNT SECURITY RESPONSIBILITIES</h2>
            <p className="mb-2">Users are responsible for:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Maintaining the confidentiality of passwords and authentication credentials.</li>
              <li>Protecting access to their devices.</li>
              <li>Promptly notifying us of any suspected unauthorized account activity.</li>
              <li>Using strong passwords and keeping contact information up to date.</li>
            </ul>
            <p>
              The Company is not responsible for losses resulting from the unauthorized use of an account where the User has failed to take reasonable steps to protect their credentials.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">21. FRAUD PREVENTION</h2>
            <p className="mb-2">
              To protect our Users, Merchants, and Platform, we may monitor transactions and account activity for suspicious or fraudulent behavior. Where necessary, we may:
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Verify identity.</li>
              <li>Request additional documentation.</li>
              <li>Delay or decline transactions.</li>
              <li>Suspend accounts pending investigation.</li>
              <li>Share information with payment providers, financial institutions, or law enforcement authorities where legally required.</li>
            </ul>
            <p>These measures help safeguard the integrity and security of the Platform.</p>
          </div>

        </div>
      </div>
    </div>
  )
}
