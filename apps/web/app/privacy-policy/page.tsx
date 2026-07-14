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
          <p>
            This privacy policy applies to anyone who (i) visits and uses our website, www.obpark.com, social media, 
            and other platforms and online services; and (ii) purchases, uses, or accesses products, services, mobile apps, 
            software, or platforms offered by us, our affiliates, and partners (collectively the "site," "products," or "services").
          </p>

          <p>
            This privacy policy explains how OBPark ("OBPark," "we," "us," or "our") collects, uses, processes, 
            and discloses your data.
          </p>

          <p>
            This privacy policy is incorporated into our Terms and Conditions, which also apply when you use our site or 
            purchase our products. By visiting, accessing, or using the site, or by purchasing or using our products, you 
            agree to the terms of this privacy policy and consent to the collection, use, processing, and disclosure of your 
            data as described herein. If you do not agree with these practices, please stop using the site, do not provide us 
            with information, and avoid interacting with us or the site.
          </p>

          <p>
            We reserve the right to modify this privacy policy at any time. If we make material changes, we will notify you 
            on the site or through other means. We encourage you to review this policy regularly for updates. Continued 
            use of the site or services after changes implies your acceptance of the updated terms. The date of the last 
            revision is indicated above.
          </p>

          {/* Section I */}
          <div className="pt-6">
            <h2 className="text-base sm:text-lg font-bold mb-2">I. Data Collection</h2>
            <h3 className="text-sm sm:text-base font-bold mb-4">What data do we collect?</h3>
            <p className="mb-4">
              We collect data directly from you and automatically during your use of our site or products, including:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Account information: Name, address, phone number, email, date of birth, purchase history, and payment details.
              </li>
              <li>
                Self-reported information: Lifestyle details, health-related data (e.g., eating habits, glucose levels), or preferences.
              </li>
              <li>
                User content: Reviews, comments, photos, or messages you post on our site or social media.
              </li>
              <li>
                Web behavior information: IP address, device type, browser, and visited pages through cookies and tracking technologies.
              </li>
            </ul>
          </div>

          {/* Section II (Mock Repeated Section) */}
          <div className="pt-6">
            <h2 className="text-base sm:text-lg font-bold mb-2">II. Data Usage</h2>
            <h3 className="text-sm sm:text-base font-bold mb-4">How do we use your data?</h3>
            <p className="mb-4">
              We collect data directly from you and automatically during your use of our site or products, including:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Account information: Name, address, phone number, email, date of birth, purchase history, and payment details.
              </li>
              <li>
                Self-reported information: Lifestyle details, health-related data (e.g., eating habits, glucose levels), or preferences.
              </li>
              <li>
                User content: Reviews, comments, photos, or messages you post on our site or social media.
              </li>
              <li>
                Web behavior information: IP address, device type, browser, and visited pages through cookies and tracking technologies.
              </li>
            </ul>
          </div>

          {/* Section III (Mock Repeated Section) */}
          <div className="pt-6">
            <h2 className="text-base sm:text-lg font-bold mb-2">III. Data Sharing</h2>
            <h3 className="text-sm sm:text-base font-bold mb-4">Who do we share data with?</h3>
            <p className="mb-4">
              We collect data directly from you and automatically during your use of our site or products, including:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Account information: Name, address, phone number, email, date of birth, purchase history, and payment details.
              </li>
              <li>
                Self-reported information: Lifestyle details, health-related data (e.g., eating habits, glucose levels), or preferences.
              </li>
              <li>
                User content: Reviews, comments, photos, or messages you post on our site or social media.
              </li>
              <li>
                Web behavior information: IP address, device type, browser, and visited pages through cookies and tracking technologies.
              </li>
            </ul>
          </div>

          {/* Section IV (Mock Repeated Section) */}
          <div className="pt-6">
            <h2 className="text-base sm:text-lg font-bold mb-2">IV. Data Security</h2>
            <h3 className="text-sm sm:text-base font-bold mb-4">How do we protect your data?</h3>
            <p className="mb-4">
              We collect data directly from you and automatically during your use of our site or products, including:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Account information: Name, address, phone number, email, date of birth, purchase history, and payment details.
              </li>
              <li>
                Self-reported information: Lifestyle details, health-related data (e.g., eating habits, glucose levels), or preferences.
              </li>
              <li>
                User content: Reviews, comments, photos, or messages you post on our site or social media.
              </li>
              <li>
                Web behavior information: IP address, device type, browser, and visited pages through cookies and tracking technologies.
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  )
}
