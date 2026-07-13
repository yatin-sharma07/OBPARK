'use client'

import { useEffect, useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { microgrammaBold } from '@/lib/fonts'
import { ChevronDown } from 'lucide-react'
import { useInitiateRecharge, useConfirmRecharge } from '@/hooks/useFastag'

function PaymentContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const isFastag = searchParams.get('type') === 'fastag'
  const fastagAmount = searchParams.get('amount')
  const fastagVrn = searchParams.get('vrn')

  const initiateRecharge = useInitiateRecharge()
  const confirmRecharge = useConfirmRecharge()
  const [isProcessing, setIsProcessing] = useState(false)

  const [addressData, setAddressData] = useState<{
    firstName: string
    lastName: string
    address: string
    city: string
    state: string
    postalCode: string
  } | null>(null)

  const [subtotal, setSubtotal] = useState(180)

  useEffect(() => {
    if (isFastag) return
    
    // Load dynamic address data from checkout
    const storedAddress = sessionStorage.getItem('mockup_address')
    if (storedAddress) {
      setAddressData(JSON.parse(storedAddress))
    }
    
    // Load dynamic cart total
    const storedCart = sessionStorage.getItem('mockup_cart_item')
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart)
      setSubtotal(parsedCart.priceVal * parsedCart.quantity)
    }
  }, [isFastag])

  const handleFastagPayment = async () => {
    if (!fastagVrn || !fastagAmount) return
    setIsProcessing(true)
    try {
      const order = await initiateRecharge.mutateAsync({
        vrn: fastagVrn,
        amount: Number(fastagAmount),
      })
      if (order.mockPaymentId) {
        await confirmRecharge.mutateAsync({
          razorpayOrderId: order.orderId,
          razorpayPaymentId: order.mockPaymentId,
        })
        router.push(`/services/fastag?success=true&vrn=${fastagVrn}`)
      }
    } catch (err) {
      console.error(err)
    } finally {
      setIsProcessing(false)
    }
  }

  const fullName = addressData 
    ? `${addressData.firstName} ${addressData.lastName}`
    : 'User name'
    
  const fullAddress = addressData
    ? `${addressData.address}, ${addressData.city}, ${addressData.state} - ${addressData.postalCode}`
    : 'A-102, Shanti Apartments, Near [Landmark] Municipal Park, Koramangala, Bengaluru, Karnataka - 560034'

  const displayAmount = isFastag ? Number(fastagAmount) : subtotal

  return (
    <div className="w-full bg-[#eefaf6] min-h-screen pt-32 pb-24 px-4 sm:px-6 md:px-8 font-sans">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Address and Payment */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Delivering To Card */}
            {!isFastag && (
              <div className="bg-white rounded-[32px] p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-1">
                    <p className="text-sm">
                      <span className="font-black text-slate-900">Delivering to</span>{' '}
                      <span className="text-slate-500 font-medium">{fullName}</span>
                    </p>
                    <p className="text-sm font-black text-slate-900 mt-2">Address</p>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium max-w-sm">
                      {fullAddress}
                    </p>
                  </div>
                  <button 
                    onClick={() => router.push('/checkout')}
                    className="text-teal-600 font-medium text-sm underline shrink-0 hover:text-teal-700 transition-colors"
                  >
                    Change
                  </button>
                </div>
              </div>
            )}
 
            {/* Payment Method Card */}
            <div className="bg-white rounded-[32px] p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.02)] space-y-8">
              <h3 className="font-black text-slate-900 text-sm tracking-wide">Payment method</h3>
              
              <div className="space-y-6">
                
                {/* Credit/Debit Card Option (Active) */}
                <div className="space-y-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <div className="w-4 h-4 rounded-full border-4 border-white outline outline-1 outline-teal-600 bg-teal-600 shadow-sm shrink-0"></div>
                    <span className="font-medium text-slate-800 text-sm">Credit or debit card</span>
                  </label>
                  
                  <div className="pl-7 space-y-4">
                    {/* Payment Icons */}
                    <div className="flex items-center gap-2 flex-wrap mb-6">
                      <div className="bg-white px-2 py-1 rounded border border-slate-200 text-[10px] font-black text-slate-800 shadow-sm">Apple Pay</div>
                      <div className="bg-blue-800 text-white px-2 py-1 rounded text-[10px] font-black shadow-sm">AMEX</div>
                      <div className="bg-white px-2 py-1 rounded border border-slate-200 text-[10px] font-black text-red-500 shadow-sm">Mastercard</div>
                      <div className="bg-white px-2 py-1 rounded border border-slate-200 text-[10px] font-black text-blue-500 shadow-sm">Maestro</div>
                      <div className="bg-slate-100 text-blue-900 px-2 py-1 rounded text-[10px] font-black shadow-sm">PayPal</div>
                      <div className="bg-[#1A1F71] text-white px-2.5 py-1 rounded text-[10px] font-black shadow-sm">VISA</div>
                    </div>
 
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Card Number</label>
                        <input 
                          type="text" 
                          placeholder="1234 5678 9101 1121" 
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-shadow bg-white"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1.5">Expiration Date</label>
                          <input 
                            type="text" 
                            placeholder="MM/YY" 
                            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-shadow bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1.5">CVV</label>
                          <input 
                            type="text" 
                            placeholder="123" 
                            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-shadow bg-white"
                          />
                        </div>
                      </div>
                    </div>
 
                    <div className="flex items-center gap-2 pt-2">
                      <input type="checkbox" className="rounded text-teal-600 focus:ring-teal-500 border-slate-300 shadow-sm" />
                      <span className="text-xs text-slate-500 font-medium">Save card details</span>
                    </div>
 
                    <div className="pt-4">
                      {isFastag ? (
                        <button 
                          onClick={handleFastagPayment}
                          disabled={isProcessing}
                          className="bg-gradient-to-r from-teal-700 to-[#7dc9b6] hover:from-teal-800 hover:to-[#68bbab] transition-all duration-300 text-white font-medium text-sm px-6 py-3 rounded-lg shadow-sm w-full sm:w-64 tracking-wide"
                        >
                          {isProcessing ? 'Processing...' : <>Pay <span className="font-black">INR</span> {displayAmount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</>}
                        </button>
                      ) : (
                        <button className="bg-gradient-to-r from-teal-700 to-[#7dc9b6] hover:from-teal-800 hover:to-[#68bbab] transition-all duration-300 text-white font-medium text-sm px-6 py-3 rounded-lg shadow-sm w-full sm:w-64 tracking-wide">
                          Pay <span className="font-black">USD</span> {displayAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                        </button>
                      )}
                    </div>
                    
                    <p className="text-[10px] text-slate-400 leading-relaxed max-w-sm pt-2">
                      Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
                    </p>
                  </div>
                </div>
 
                <hr className="border-slate-100" />
 
                {/* UPI Option */}
                <label className="flex items-center gap-3 cursor-pointer py-1">
                  <div className="w-4 h-4 rounded-full border border-slate-300 bg-white shrink-0"></div>
                  <span className="font-medium text-slate-800 text-sm flex items-center gap-2">
                    Scan and Pay with
                    <span className="font-black italic text-slate-900 tracking-tighter">UPI</span>
                  </span>
                </label>
 
                <hr className="border-slate-100" />
 
                {/* Net Banking Option */}
                <div className="space-y-3 py-1">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <div className="w-4 h-4 rounded-full border border-slate-300 bg-white shrink-0"></div>
                    <span className="font-medium text-slate-800 text-sm">Net Banking</span>
                  </label>
                  <div className="pl-7">
                    <div className="relative w-48">
                      <select className="w-full border border-slate-200 rounded-lg px-3 py-2 text-xs font-medium text-slate-700 appearance-none focus:outline-none focus:ring-1 focus:ring-teal-500 bg-white">
                        <option value="">Value</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500 pointer-events-none" />
                    </div>
                  </div>
                </div>
 
                <hr className="border-slate-100" />
 
                {/* COD Option */}
                {!isFastag && (
                  <label className="flex items-center gap-3 cursor-pointer py-1">
                    <div className="w-4 h-4 rounded-full border border-slate-300 bg-white shrink-0"></div>
                    <span className="font-medium text-slate-800 text-sm">Cash on Delivery/Pay on Delivery</span>
                  </label>
                )}
 
              </div>
            </div>
          </div>
 
          {/* Right Column: Order Summary */}
          <div className="lg:col-span-5 bg-white rounded-[32px] p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs sm:text-sm font-semibold text-slate-600">
                <span>{isFastag ? 'FASTag Recharge:' : 'Items:'}</span>
                <span className="text-slate-900 font-bold">
                  {isFastag 
                    ? `₹${displayAmount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}` 
                    : `$${displayAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}`}
                </span>
              </div>
              {!isFastag && (
                <div className="flex justify-between items-center text-xs sm:text-sm font-semibold text-slate-600 pb-4">
                  <span>Delivery:</span>
                  <span className="text-slate-400 text-[10px]">Calculated at next step</span>
                </div>
              )}
              <div className="flex justify-between items-center text-xs sm:text-sm font-semibold text-slate-600 pt-4 border-t border-slate-200">
                <span>Total:</span>
                <span className="text-slate-900 font-bold">
                  {isFastag 
                    ? `₹${displayAmount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}` 
                    : `$${displayAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}`}
                </span>
              </div>
              
              <div className="flex justify-between items-center text-sm font-black pt-6 mt-6 border-t-2 border-slate-800 text-slate-900">
                <span>Order Total:</span>
                <span>
                  {isFastag 
                    ? `₹${displayAmount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}` 
                    : `$${displayAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}`}
                </span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default function PaymentPage() {
  return (
    <Suspense fallback={<div className="w-full min-h-screen bg-[#eefaf6] flex items-center justify-center font-sans">Loading payment details...</div>}>
      <PaymentContent />
    </Suspense>
  )
}
