import type { Metadata } from 'next'
import { LegalContent } from '@/components/legal/LegalContent'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | OBPark',
  description:
    'Read the OBPark Privacy Policy to understand how we collect, use, process, and protect your personal data.',
}

export default function PrivacyPolicyPage() {
  const sections = [
    {
      id: 'intro',
      content: (
        <>
          <p>
            This privacy policy applies to anyone who (i) visits and uses our website,
            www.nosuhealth.com, social media, and other platforms and online services; and (ii)
            purchases, uses, or accesses products, services, mobile apps, software, or platforms
            offered by us, our affiliates, and partners (collectively the "site," "products," or
            "services").
          </p>
          <p>
            This privacy policy explains how Nosu Health B.V. ("Nosu Health," "we," "us," or "our")
            collects, uses, processes, and discloses your data.
          </p>
          <p>
            This privacy policy is incorporated into our Terms and Conditions, which also apply when
            you use our site or purchase our products. By visiting, accessing, or using the site, or
            by purchasing or using our products, you agree to the terms of this privacy policy and
            consent to the collection, use, processing, and disclosure of your data as described
            herein. If you do not agree with these practices, please stop using the site, do not
            provide us with information, and avoid interacting with us or the site.
          </p>
          <p>
            We reserve the right to modify this privacy policy at any time. If we make material
            changes, we will notify you on the site or through other means. We encourage you to
            review this policy regularly for updates. Continued use of the site or services after
            changes implies your acceptance of the updated terms. The date of the last revision is
            indicated above.
          </p>
        </>
      ),
    },
    {
      id: 'data-collection',
      title: '1. Data Collection',
      content: (
        <>
          <p>
            We collect personal information that you voluntarily provide to us when registering on
            the website, expressing an interest in obtaining information about us or our products and
            services.
          </p>
          <p>
            The personal information that we collect depends on the context of your interactions with
            us and the website. The personal information we collect may include the following:
          </p>
          <ul>
            <li>Name and Contact Data</li>
            <li>Credentials</li>
            <li>Payment Data</li>
          </ul>
        </>
      ),
    },
    {
      id: 'data-usage',
      title: '2. Data Usage',
      content: (
        <>
          <p>
            We use personal information collected via our website for a variety of business purposes
            described below. We process your personal information for these purposes in reliance on
            our legitimate business interests, in order to enter into or perform a contract with you,
            with your consent, and/or for compliance with our legal obligations.
          </p>
          <p>We use the information we collect or receive:</p>
          <ul>
            <li>To facilitate account creation and logon process.</li>
            <li>To send you marketing and promotional communications.</li>
            <li>To fulfill and manage your orders.</li>
          </ul>
        </>
      ),
    },
    {
      id: 'cookies',
      title: '3. Cookies',
      content: (
        <>
          <p>
            We may use cookies and similar tracking technologies (like web beacons and pixels) to
            access or store information. Specific information about how we use such technologies and
            how you can refuse certain cookies is set out in our Cookie Policy.
          </p>
        </>
      ),
    },
  ]

  return (
    <main className="overflow-x-hidden" style={{ backgroundColor: '#F0F9F5' }}>
      <Navbar />
      <LegalContent
        title="Privacy Policy"
        subtitle="Legal Links"
        sections={sections}
      />
      <Footer />
    </main>
  )
}
