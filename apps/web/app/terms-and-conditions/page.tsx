import type { Metadata } from 'next'
import { LegalContent } from '@/components/legal/LegalContent'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Terms & Conditions | OBPark',
  description:
    'Read the OBPark Terms and Conditions governing your access to and use of our website and services.',
}

export default function TermsAndConditionsPage() {
  const sections = [
    {
      id: 'overview',
      content: (
        <>
          <p>
            These Terms and Conditions constitute a legally binding agreement made between you,
            whether personally or on behalf of an entity ("you") and Obpark ("we," "us" or "our"),
            concerning your access to and use of our website as well as any other media form, media
            channel, mobile website or mobile application related, linked, or otherwise connected
            thereto.
          </p>
          <p>
            You agree that by accessing the site, you have read, understood, and agree to be bound
            by all of these Terms and Conditions. If you do not agree with all of these Terms and
            Conditions, then you are expressly prohibited from using the site and you must
            discontinue use immediately.
          </p>
        </>
      ),
    },
    {
      id: 'article-1',
      title: 'Article 1 – Definitions',
      content: (
        <>
          <p>For the purposes of these Terms and Conditions:</p>
          <ul>
            <li>
              <strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in
              this Agreement) refers to Obpark.
            </li>
            <li>
              <strong>Service</strong> refers to the Website.
            </li>
            <li>
              <strong>Terms and Conditions</strong> (also referred as "Terms") mean these Terms and
              Conditions that form the entire agreement between You and the Company regarding the use
              of the Service.
            </li>
            <li>
              <strong>Website</strong> refers to Obpark, accessible from our domain.
            </li>
            <li>
              <strong>You</strong> means the individual accessing or using the Service, or the
              company, or other legal entity on behalf of which such individual is accessing or using
              the Service, as applicable.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'article-2',
      title: 'Article 2 – User Obligations',
      content: (
        <>
          <p>By using the Site, you represent and warrant that:</p>
          <ul>
            <li>
              All registration information you submit will be true, accurate, current, and complete.
            </li>
            <li>
              You will maintain the accuracy of such information and promptly update such
              registration information as necessary.
            </li>
            <li>
              You have the legal capacity and you agree to comply with these Terms and Conditions.
            </li>
            <li>
              You will not access the Site through automated or non-human means, whether through a
              bot, script, or otherwise.
            </li>
            <li>You will not use the Site for any illegal or unauthorized purpose.</li>
          </ul>
        </>
      ),
    },
    {
      id: 'article-3',
      title: 'Article 3 – Payments',
      content: (
        <>
          <p>
            We accept various forms of payment for purchases made on the Site. You agree to provide
            current, complete, and accurate purchase and account information for all purchases made
            via the Site.
          </p>
          <p>
            You further agree to promptly update account and payment information, including email
            address, payment method, and payment card expiration date, so that we can complete your
            transactions and contact you as needed.
          </p>
        </>
      ),
    },
  ]

  return (
    <main className="overflow-x-hidden" style={{ backgroundColor: '#F0F9F5' }}>
      <Navbar />
      <LegalContent
        title="Terms & Conditions"
        subtitle="Legal Links"
        sections={sections}
      />
      <Footer />
    </main>
  )
}
