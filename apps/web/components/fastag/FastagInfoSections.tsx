import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'

export function FastagMandatorySection() {
  const cards = [
    {
      icon: '/Images/fastag/header1.png',
      text: 'Get instant, verified vehicle owner details online',
    },
    {
      icon: '/Images/fastag/header2.png',
      text: 'Check complete vehicle info in seconds',
    },
    {
      icon: '/Images/fastag/header3.png',
      text: 'Quick 2-step lookup for fast and reliable results',
    },
  ]

  return (
    <section className="py-20 bg-[#f4fcf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-[1px] w-12 sm:w-24 bg-gray-300"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#143B33]">Why FASTag Is Mandatory</h2>
          <div className="h-[1px] w-12 sm:w-24 bg-gray-300"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-16 h-16 relative mb-6">
                <Image src={card.icon} alt="Icon" fill className="object-contain" />
              </div>
              <p className="text-[#3F665D] font-medium leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FastagBenefitsSection() {
  const benefits = [
    {
      title: 'Save fuel & time',
      desc: 'Zip through the tolls without wasting time & fuel',
    },
    {
      title: 'Cashless Payment',
      desc: 'No need to carry cash for toll transactions, exact change issues eliminated.',
    },
    {
      title: 'Online Recharge',
      desc: 'Top up your FASTag wallet instantly via UPI, Credit/Debit cards, or Net Banking.',
    },
    {
      title: 'SMS Alerts',
      desc: 'Get instant notifications for all your toll transactions and low balance alerts.',
    },
  ]

  return (
    <section className="py-20 bg-[#f4fcf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-[#143B33] mb-4">What are the benefits of FASTag?</h2>
            <p className="text-[#3F665D] mb-12 max-w-md">
              FASTag saves time, reduces fuel use, and makes your travel smoother with easy, cashless toll payments.
            </p>
            
            <div className="relative w-full aspect-[4/3] max-w-lg mx-auto">
              <Image 
                src="/Images/fastag/benefits_of_fastag.png" 
                alt="Benefits of FASTag" 
                fill 
                className="object-contain"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-4">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4">
                <div className="bg-[#e0f7f1] p-3 rounded-lg text-[#0A3D31] shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-[#143B33] mb-1">{b.title}</h3>
                  <p className="text-sm text-[#3F665D] leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function FastagDocumentsSection() {
  const documents = [
    {
      title: 'Registration Certificate (RC)',
      desc: 'A copy of your vehicle\'s RC is mandatory for issuing a new FASTag.',
    },
    {
      title: 'Passport Size Photo',
      desc: 'A recent passport-size photograph of the vehicle owner.',
    },
    {
      title: 'KYC Document (ID Proof)',
      desc: 'Any valid ID proof like Aadhaar, PAN, Passport, or Voter ID.',
    },
    {
      title: 'KYC Document (Address Proof)',
      desc: 'Valid address proof document if not covered in the ID proof.',
    },
  ]

  return (
    <section className="py-20 bg-[#f4fcf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="space-y-4">
            {documents.map((d, i) => (
              <div key={i} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4">
                <div className="bg-[#e0f7f1] p-3 rounded-lg text-[#0A3D31] shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-[#143B33] mb-1">{d.title}</h3>
                  <p className="text-sm text-[#3F665D] leading-relaxed">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-right">
            <h2 className="text-3xl font-bold text-[#143B33] mb-4">Documents required for FASTag registration</h2>
            <p className="text-[#3F665D] mb-12 max-w-md ml-auto">
              Keep the following documents ready to ensure a quick and hassle-free FASTag registration process.
            </p>
            
            <div className="relative w-full aspect-[4/3] max-w-lg ml-auto">
              <Image 
                src="/Images/fastag/document_req_fastag.png" 
                alt="Documents required for FASTag" 
                fill 
                className="object-contain"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

import { Wallet, ShieldCheck, ArrowRight } from 'lucide-react'
import { microgrammaBold } from '@/lib/fonts'

export function FastagBannerSection() {
  return (
    <section className="w-full relative overflow-hidden min-h-[600px] sm:min-h-0 sm:aspect-[1728/708] bg-[#f4fcf9] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/Images/fastag/pay_toll_effortlessly.png" 
          alt="Pay Tolls Effortlessly with FASTag background" 
          fill 
          className="object-cover object-right sm:object-center"
          priority
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 w-full px-6 sm:px-12 md:px-16 lg:px-24 py-16 sm:py-24">
        <div className="max-w-xl text-left space-y-6 sm:space-y-8">
          
          <div className="space-y-4">
            <span className="text-xs sm:text-sm font-bold text-[#0B402F] tracking-wider uppercase block">
              Fast. Secure. Seamless.
            </span>
            <h2 className={`${microgrammaBold.className} text-[#0B402F] text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-[1.2] font-bold`}>
              Pay Tolls Effortlessly <br /> with FASTag
            </h2>
            <p className="text-[#3E7071] text-sm sm:text-base leading-relaxed font-medium max-w-md">
              Recharge, check balance and manage your FASTag in just a few clicks.
            </p>
          </div>

          {/* Feature Icons Row */}
          <div className="flex gap-8 pt-2">
            <div className="flex flex-col items-center text-center gap-2 max-w-[120px]">
              <div className="w-12 h-12 rounded-full border border-[#0B402F]/20 flex items-center justify-center bg-white shadow-sm">
                <Wallet className="w-5 h-5 text-[#0B402F]" />
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-gray-700 leading-tight">
                Check FASTag Balance
              </span>
            </div>

            <div className="flex flex-col items-center text-center gap-2 max-w-[120px]">
              <div className="w-12 h-12 rounded-full border border-[#0B402F]/20 flex items-center justify-center bg-white shadow-sm">
                <ShieldCheck className="w-5 h-5 text-[#0B402F]" />
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-gray-700 leading-tight">
                Secure Toll Payments
              </span>
            </div>
          </div>

          {/* Button */}
          <div className="pt-4">
            <button className="bg-[#0B402F] hover:bg-[#083023] text-white font-bold py-3.5 px-6 rounded-lg text-xs sm:text-sm tracking-wide shadow-md flex items-center gap-3 transition-colors">
              Manage FASTag
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
