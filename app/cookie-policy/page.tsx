import { microgrammaBold, michroma } from '@/lib/fonts'

export default function CookiePolicyPage() {
  return (
    <div className="w-full bg-[#eefaf6] min-h-screen pt-32 pb-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-[1000px] mx-auto text-[#074139]">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className={`${michroma.className} text-xs sm:text-sm font-bold uppercase tracking-widest mb-4`}>
            Legal Links
          </p>
          <h1 className={`${microgrammaBold.className} text-4xl sm:text-5xl md:text-6xl tracking-wide uppercase`}>
            Cookie Policy
          </h1>
        </div>

        {/* Content Section */}
        <div className={`${michroma.className} space-y-8 text-xs sm:text-sm md:text-[15px] leading-relaxed`}>
          
          <div className="mb-8 font-bold">
            <p>OBPARK COOKIE POLICY</p>
            <p>Effective Date: 15 July 2026</p>
            <p>Last Updated: 15 July 2026</p>
            <p>Version: 1.0</p>
          </div>

          <div className="space-y-4">
            <p>
              This Cookie Policy ("Policy") explains how Obrive Industries Private Limited ("Company", "OBPARK", "we", "our", or "us") uses cookies and similar technologies when you access or use the OBPARK website, mobile applications, web portals, APIs, and related digital services ("Platform").
            </p>
            <p>
              This Policy should be read together with our Privacy Policy, Terms & Conditions, and other legal policies published on the Platform.
            </p>
            <p>
              By continuing to use the Platform, you acknowledge that you have read and understood this Cookie Policy.
            </p>
          </div>

          <div className="pt-6">
            <h2 className="text-base sm:text-lg font-bold mb-3">1. PURPOSE</h2>
            <p className="mb-2">Cookies and similar technologies help us:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Provide secure access to the Platform.</li>
              <li>Remember your preferences.</li>
              <li>Improve website performance.</li>
              <li>Enhance user experience.</li>
              <li>Enable authentication.</li>
              <li>Analyze Platform usage.</li>
              <li>Prevent fraud and abuse.</li>
              <li>Support payment and checkout processes.</li>
              <li>Improve navigation and functionality.</li>
            </ul>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">2. WHAT ARE COOKIES?</h2>
            <p className="mb-2">
              Cookies are small text files stored on your browser or device when you visit a website. They allow websites to remember information such as:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Login status</li>
              <li>Language preferences</li>
              <li>Session information</li>
              <li>Device settings</li>
              <li>User preferences</li>
              <li>Analytics information</li>
            </ul>
            <p>
              Cookies generally do not contain information that directly identifies you but may be linked to information associated with your account.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">3. SIMILAR TECHNOLOGIES</h2>
            <p className="mb-2">In addition to cookies, OBPARK may use:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Local Storage</li>
              <li>Session Storage</li>
              <li>Web Beacons</li>
              <li>Pixel Tags</li>
              <li>SDKs (Software Development Kits)</li>
              <li>Device Identifiers</li>
              <li>Mobile Advertising Identifiers</li>
              <li>Authentication Tokens</li>
            </ul>
            <p>
              These technologies help deliver Platform functionality, improve security, and understand how the Platform is used.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">4. TYPES OF COOKIES WE USE</h2>
            
            <div className="mb-6">
              <h3 className="font-bold mb-2">A. Essential Cookies</h3>
              <p className="mb-2">These cookies are necessary for the operation of the Platform and cannot generally be disabled. Examples include:</p>
              <ul className="list-disc pl-5 space-y-1 mb-2">
                <li>User authentication</li>
                <li>Secure login</li>
                <li>Session management</li>
                <li>Payment security</li>
                <li>Fraud prevention</li>
                <li>Load balancing</li>
                <li>Security verification</li>
              </ul>
              <p>Without these cookies, certain services may not function properly.</p>
            </div>

            <div className="mb-6">
              <h3 className="font-bold mb-2">B. Functional Cookies</h3>
              <p className="mb-2">Functional cookies remember your preferences to improve your experience. Examples include:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Language selection</li>
                <li>Region selection</li>
                <li>Theme preferences</li>
                <li>Accessibility settings</li>
                <li>Saved preferences</li>
                <li>Recently viewed information</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="font-bold mb-2">C. Performance Cookies</h3>
              <p className="mb-2">These cookies help us understand how Users interact with the Platform by collecting anonymous or aggregated usage information. Examples include:</p>
              <ul className="list-disc pl-5 space-y-1 mb-2">
                <li>Page loading times</li>
                <li>Navigation flow</li>
                <li>Feature usage</li>
                <li>Website responsiveness</li>
                <li>Error frequency</li>
                <li>Performance monitoring</li>
              </ul>
              <p>This information helps us improve the Platform.</p>
            </div>

            <div className="mb-6">
              <h3 className="font-bold mb-2">D. Analytics Cookies</h3>
              <p className="mb-2">Analytics cookies allow us to understand how visitors use the Platform. Information collected may include:</p>
              <ul className="list-disc pl-5 space-y-1 mb-2">
                <li>Number of visitors</li>
                <li>Popular pages</li>
                <li>Traffic sources</li>
                <li>Device types</li>
                <li>Browser types</li>
                <li>Session duration</li>
                <li>Navigation patterns</li>
              </ul>
              <p>Analytics information is generally aggregated and used to improve our services.</p>
            </div>

            <div className="mb-6">
              <h3 className="font-bold mb-2">E. Security Cookies</h3>
              <p className="mb-2">Security cookies help:</p>
              <ul className="list-disc pl-5 space-y-1 mb-2">
                <li>Detect suspicious activity.</li>
                <li>Prevent unauthorized access.</li>
                <li>Protect user accounts.</li>
                <li>Monitor login attempts.</li>
                <li>Identify fraudulent transactions.</li>
                <li>Secure payment processes.</li>
              </ul>
              <p>These cookies play an important role in protecting Users and the Platform.</p>
            </div>

            <div className="mb-2">
              <h3 className="font-bold mb-2">F. Advertising and Marketing Cookies</h3>
              <p className="mb-2">Where permitted by law, marketing cookies may be used to:</p>
              <ul className="list-disc pl-5 space-y-1 mb-2">
                <li>Display relevant advertisements.</li>
                <li>Measure advertising effectiveness.</li>
                <li>Limit repeated advertisements.</li>
                <li>Deliver promotional campaigns.</li>
                <li>Support remarketing activities.</li>
              </ul>
              <p>These cookies are used only where appropriate and subject to applicable legal requirements.</p>
            </div>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">5. THIRD-PARTY COOKIES</h2>
            <p className="mb-2">
              The Platform may use cookies provided by trusted third-party service providers, including those supporting:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Website analytics</li>
              <li>Payment processing</li>
              <li>Customer support</li>
              <li>Cloud hosting</li>
              <li>Performance monitoring</li>
              <li>Fraud prevention</li>
              <li>Maps and navigation</li>
              <li>Content delivery</li>
              <li>Marketing (where applicable)</li>
            </ul>
            <p>
              These third parties operate under their own privacy and cookie policies. Users are encouraged to review the policies of third-party providers where applicable.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">6. HOW WE USE COOKIE INFORMATION</h2>
            <p className="mb-2">Information collected through cookies may be used to:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Authenticate Users.</li>
              <li>Maintain secure sessions.</li>
              <li>Remember account preferences.</li>
              <li>Improve website speed and performance.</li>
              <li>Enhance navigation.</li>
              <li>Diagnose technical issues.</li>
              <li>Improve accessibility.</li>
              <li>Detect security threats.</li>
              <li>Prevent fraudulent activity.</li>
              <li>Support customer service.</li>
              <li>Measure Platform usage.</li>
            </ul>
            <p>
              We do not use cookies to collect sensitive payment credentials such as card numbers, CVV values, UPI PINs, or banking passwords.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">7. COOKIE CONSENT</h2>
            <p className="mb-4">
              Where required by applicable law, the Platform will request your consent before placing non-essential cookies on your device. Essential cookies required for the operation and security of the Platform may be used without additional consent where legally permitted. You may withdraw or modify your cookie preferences at any time through the cookie settings available on the Platform, where applicable.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">8. MANAGING COOKIES</h2>
            <p className="mb-2">Most web browsers allow Users to:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>View stored cookies.</li>
              <li>Delete cookies.</li>
              <li>Block cookies.</li>
              <li>Restrict third-party cookies.</li>
              <li>Clear browsing data.</li>
              <li>Configure cookie preferences.</li>
            </ul>
            <p>
              Disabling certain cookies may affect the functionality, performance, or availability of specific Platform features.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">9. MOBILE APPLICATIONS</h2>
            <p className="mb-2">Mobile applications may use technologies functionally similar to cookies, including:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Secure storage.</li>
              <li>Device identifiers.</li>
              <li>Authentication tokens.</li>
              <li>SDKs.</li>
              <li>Push notification tokens.</li>
            </ul>
            <p>
              These technologies support authentication, security, analytics, crash reporting, and application functionality.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">10. RETENTION OF COOKIE DATA</h2>
            <p className="mb-4">Cookie retention periods vary depending on the type of cookie.</p>
            
            <h3 className="font-bold mb-2">Session Cookies</h3>
            <p className="mb-4">Session cookies are deleted automatically when you close your browser or end your session.</p>
            
            <h3 className="font-bold mb-2">Persistent Cookies</h3>
            <p className="mb-2">Persistent cookies remain on your device until:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>They expire.</li>
              <li>You delete them manually.</li>
              <li>Your browser automatically removes them.</li>
            </ul>
            <p>
              Retention periods are determined based on operational necessity, security requirements, and applicable legal obligations.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">11. SECURITY OF COOKIE DATA</h2>
            <p className="mb-2">
              We implement reasonable technical and organizational measures to protect information collected through cookies. These measures may include:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Encryption of data in transit.</li>
              <li>Secure authentication mechanisms.</li>
              <li>Access controls.</li>
              <li>Monitoring for unauthorized access.</li>
              <li>Security logging.</li>
              <li>Fraud detection systems.</li>
            </ul>
            <p>
              While we strive to protect your information, no technology is completely secure.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">12. CHILDREN'S PRIVACY</h2>
            <p className="mb-4">
              OBPARK does not knowingly use cookies to collect personal information from children in violation of applicable laws. If we become aware that information has been collected contrary to legal requirements, appropriate steps will be taken to remove such information.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">13. CHANGES TO THIS COOKIE POLICY</h2>
            <p className="mb-2">
              The Company may update this Cookie Policy from time to time to reflect:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Changes in technology.</li>
              <li>New Platform features.</li>
              <li>Regulatory requirements.</li>
              <li>Changes in applicable laws.</li>
              <li>Business operations.</li>
            </ul>
            <p className="mb-2">
              The updated version will be published on the Platform with a revised effective date.
            </p>
            <p>
              Continued use of the Platform after the revised Policy becomes effective constitutes acceptance of the updated Policy.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">14. CONTACT US</h2>
            <p className="mb-4">
              For questions regarding this Cookie Policy, please contact:<br /><br />
              Obrive Industries Private Limited<br />
              Product: OBPARK<br />
              Privacy Team: <a href="mailto:privacy@Obpark.in" className="underline font-bold hover:opacity-80">privacy@Obpark.in</a><br />
              Customer Support: <a href="mailto:support@Obpark.in" className="underline font-bold hover:opacity-80">support@Obpark.in</a><br />
              Legal & Compliance: <a href="mailto:legal@obrive.in" className="underline font-bold hover:opacity-80">legal@obrive.in</a><br />
              Website: <a href="https://www.Obpark.in" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:opacity-80">https://www.Obpark.in</a><br />
              Business Hours: Monday to Saturday, 9:30 AM – 6:30 PM IST (excluding public holidays)
            </p>
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

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-3">COPYRIGHT NOTICE</h2>
            <p className="mb-4">
              © 2026 Obrive Industries Private Limited. All rights reserved.<br />
              This Cookie Policy forms part of the legal documentation governing the use of the OBPARK platform and should be read together with the Terms & Conditions, Privacy Policy, User Agreement, Subscription Terms, and all other applicable policies published by the Company.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
