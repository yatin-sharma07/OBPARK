import { microgrammaBold, michroma } from '@/lib/fonts'

export default function PaymentCompliancePage() {
  return (
    <div className="w-full bg-[#eefaf6] min-h-screen pt-32 pb-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-[1000px] mx-auto text-[#074139]">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className={`${michroma.className} text-xs sm:text-sm font-bold uppercase tracking-widest mb-4`}>
            Legal Links
          </p>
          <h1 className={`${microgrammaBold.className} text-4xl sm:text-5xl md:text-6xl tracking-wide uppercase`}>
            Payment Methods
          </h1>
        </div>

        {/* Content Section */}
        <div className={`${michroma.className} space-y-8 text-xs sm:text-sm md:text-[15px] leading-relaxed`}>
          <p className="font-bold">Last Updated: July 15, 2026</p>
          <p>
            OBPARK supports multiple secure payment options, including UPI, credit cards, debit cards, net banking, digital wallets, and other payment methods made available through our payment partners. Available options may vary by location and service.
          </p>

          <div className="pt-6">
            <h2 className="text-base sm:text-lg font-bold mb-2">Secure Payments</h2>
            <p className="mb-4">
              Your payment security is our priority. All online transactions are processed through trusted payment gateway providers using industry-standard encryption and security protocols to protect your financial information.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-2">PCI DSS Statement</h2>
            <p className="mb-4">
              OBPARK partners with PCI DSS-compliant payment gateway providers to process card transactions securely. We do not store your complete card number, CVV, or other sensitive payment credentials on our servers.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-2">UPI Payments</h2>
            <p className="mb-4">
              Users can make instant payments using supported UPI applications. Payments are subject to the terms and availability of your bank and UPI service provider.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-2">Credit Card Payments</h2>
            <p className="mb-4">
              Major domestic and international credit cards may be accepted, subject to payment gateway and issuer support. Transactions are processed securely through certified payment partners.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-2">Debit Card Payments</h2>
            <p className="mb-4">
              OBPARK accepts eligible debit cards supported by participating banks. Bank-specific authentication and security verification may be required during checkout.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-2">EMI Policy</h2>
            <p className="mb-4">
              Where available, eligible users may choose EMI options offered by participating banks or payment providers. Approval, tenure, and interest rates are determined by the issuing financial institution.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-2">Wallet Policy</h2>
            <p className="mb-4">
              Supported digital wallets may be used for eligible transactions. Wallet availability depends on the payment gateway and applicable regulations.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-2">Net Banking Policy</h2>
            <p className="mb-4">
              Users may pay directly from supported bank accounts using secure net banking services. Transaction processing is managed by our payment gateway partners.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-2">Failed Transaction Policy</h2>
            <p className="mb-4">
              If a payment failed but the amount is debited, it is generally reversed automatically by your bank or payment provider within the applicable processing period. If the issue persists, please contact our support team with your transaction details.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-2">Settlement Policy</h2>
            <p className="mb-4">
              Payments collected through OBPARK are processed and settled in accordance with the terms agreed between OBPARK, its payment gateway partners, and applicable merchants or parking operators.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-2">Chargeback Policy</h2>
            <p className="mb-4">
              Users may raise disputes with their card issuer or payment provider where applicable. OBPARK reserves the right to review and respond to chargebacks in accordance with payment network rules and applicable laws.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-2">GST & Tax Policy</h2>
            <p className="mb-4">
              Applicable GST and other statutory taxes will be charged as required under Indian law. Tax amounts, where applicable, will be displayed during checkout and included in your invoice.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-2">Billing Policy</h2>
            <p className="mb-4">
              All charges for bookings, subscriptions, or other services are clearly displayed before payment confirmation. By completing a transaction, you authorize OBPARK to process the applicable charges.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-2">Invoice Policy</h2>
            <p className="mb-4">
              Digital invoices or payment receipts are generated for successful transactions and are available through your account or sent to your registered email address, where applicable.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-bold mb-2">Contact</h2>
            <p className="mb-4">
              For payment-related questions or billing assistance, please contact:<br />
              Email: <a href="mailto:billing@obpark.in" className="underline font-bold hover:opacity-80">billing@obpark.in</a><br />
              Support: <a href="mailto:support@obpark.in" className="underline font-bold hover:opacity-80">support@obpark.in</a>
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
