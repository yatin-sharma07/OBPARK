'use client'

import { useEffect, useState, Suspense, useMemo } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { microgrammaBold } from '@/lib/fonts'
import { ChevronDown, CreditCard, ShieldCheck, CheckCircle2, ShoppingBag } from 'lucide-react'
import { useInitiateRecharge, useConfirmRecharge } from '@/hooks/useFastag'
import { useCreatePayment, useVerifyPayment } from '@/hooks/usePayment'
import { useAuthStore } from '@/store/auth.store'
import { useCart } from '@/hooks/useCart'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

function _prepend(imgPath: string): string {
  if (!imgPath) return "";
  if (imgPath.startsWith("http") || imgPath.startsWith("data:")) return imgPath;
  return `${BASE_URL}${imgPath}`;
}

function PaymentContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const isFastag = searchParams.get('type') === 'fastag'
  const fastagAmount = searchParams.get('amount')
  const fastagVrn = searchParams.get('vrn')

  const { data: apiCart } = useCart()
  const initiateRecharge = useInitiateRecharge()
  const confirmRecharge = useConfirmRecharge()
  const createPayment = useCreatePayment()
  const verifyPayment = useVerifyPayment()
  const [isProcessing, setIsProcessing] = useState(false)

  const [addressData, setAddressData] = useState<{
    firstName: string
    lastName: string
    address: string
    city: string
    state: string
    postalCode: string
  } | null>(null)

  const [cartItem, setCartItem] = useState<any>(null)

  const { isAuthenticated, isHydrated } = useAuthStore()

  useEffect(() => {
    if (!isHydrated) return

    if (!isAuthenticated) {
      router.replace('/login')
      return
    }

    if (isFastag) return

    // Load dynamic address data from checkout
    const storedAddress = sessionStorage.getItem('mockup_address')
    if (storedAddress) {
      setAddressData(JSON.parse(storedAddress))
    } else {
      router.replace('/checkout')
      return
    }

    const isBuyNow = sessionStorage.getItem('is_buy_now') === 'true'
    if (isBuyNow) {
      const storedCart = sessionStorage.getItem('buy_now_item')
      if (storedCart) {
        setCartItem(JSON.parse(storedCart))
      } else {
        router.replace('/cart')
      }
    } else {
      if (apiCart && (!apiCart.items || apiCart.items.length === 0)) {
        router.replace('/cart')
      }
    }
  }, [isHydrated, isAuthenticated, isFastag, apiCart, router])

  // Resolve active checkout items
  const checkoutItems = useMemo(() => {
    const isBuyNow = sessionStorage.getItem('is_buy_now') === 'true';
    if (isBuyNow && cartItem) {
      return [cartItem];
    }
    if (apiCart?.items && apiCart.items.length > 0) {
      return apiCart.items;
    }
    return cartItem ? [cartItem] : [];
  }, [apiCart, cartItem]);

  // Calculate dynamic subtotal
  const subtotal = useMemo(() => {
    return checkoutItems.reduce((acc: number, item: any) => {
      const price = Number(item.priceVal ?? item.product?.productCost ?? item.product?.price ?? 0);
      return acc + (price * (item.quantity || 1));
    }, 0);
  }, [checkoutItems]);

  const displayAmount = isFastag ? Number(fastagAmount || 0) : subtotal;

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

  const handleProductPayment = async () => {
    // Collect order details from active cart or single item
    if (checkoutItems.length === 0) return;
    setIsProcessing(true);
    try {
      const isBuyNow = sessionStorage.getItem('is_buy_now') === 'true';
      const primaryProduct = checkoutItems[0];

      let payload: any = {
        gateway: 'RAZORPAY',
      };

      if (isBuyNow) {
        const primaryProductId = primaryProduct.productId || primaryProduct.id || (primaryProduct.product && primaryProduct.product.id);
        payload.productId = primaryProductId;
        payload.quantity = primaryProduct.quantity || 1;
      }

      const res = await createPayment.mutateAsync(payload);

      const options = {
        key: res.keyId,
        amount: res.amount,
        currency: res.currency,
        name: 'OBPARK',
        description: isBuyNow
          ? `Purchase of ${primaryProduct.name ?? primaryProduct.product?.productName ?? 'OBPARK Products'}`
          : `Purchase of ${checkoutItems.length} items from cart`,
        order_id: res.razorpayOrderId,
        handler: async function (response: any) {
          try {
            await verifyPayment.mutateAsync({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });
            sessionStorage.removeItem('is_buy_now');
            sessionStorage.removeItem('buy_now_item');
            sessionStorage.removeItem('mockup_cart_item');
            // Redirect to home/success page
            router.push('/?success=true');
          } catch (err) {
            console.error('Payment verification failed:', err);
          }
        },
        modal: {
          ondismiss: function () {
            setIsProcessing(false);
          }
        },
        theme: {
          color: '#167D7F',
        }
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      setIsProcessing(false);
    }
  }

  const fullName = addressData
    ? `${addressData.firstName} ${addressData.lastName}`
    : 'User name'

  const fullAddress = addressData
    ? `${addressData.address}, ${addressData.city}, ${addressData.state} - ${addressData.postalCode}`
    : 'A-102, Shanti Apartments, Near Municipal Park, Koramangala, Bengaluru, Karnataka - 560034'

  if (!isHydrated) {
    return (
      <div className="w-full bg-[#eefaf6] text-[#074c43] min-h-screen pt-32 pb-16 flex items-center justify-center font-sans">
        <div className="text-center font-bold">Loading...</div>
      </div>
    )
  }

  if (!isAuthenticated) return null

  return (
    <div className="w-full bg-[#eefaf6] text-[#074c43] min-h-screen pt-32 pb-24 px-4 sm:px-6 md:px-8 font-sans">
      <div className="max-w-[1200px] mx-auto space-y-8">

        {/* Simple Progress Indicator */}
        <div className="flex items-center gap-2 text-xs font-semibold text-teal-600/70 select-none pb-2" style={{ fontFamily: 'var(--font-michroma)' }}>
          <span>Cart</span>
          <span>&rarr;</span>
          <span>Checkout</span>
          <span>&rarr;</span>
          <span className="text-teal-700 font-bold underline">Payment</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Address and Payment */}
          <div className="lg:col-span-7 space-y-6">

            {/* Delivering To Card */}
            {!isFastag && (
              <div className="bg-white rounded-[24px] p-6 sm:p-8 shadow-[0_8px_30px_rgb(7,76,67,0.03)] border border-slate-100/50">
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-1">
                    <p className="text-xs sm:text-sm font-bold text-teal-900" style={{ fontFamily: 'var(--font-michroma)' }}>
                      DELIVERING TO
                    </p>
                    <p className="text-sm font-bold text-slate-800 pt-1" style={{ fontFamily: 'var(--font-michroma)' }}>
                      {fullName}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium max-w-sm pt-2" style={{ fontFamily: 'var(--font-michroma)' }}>
                      {fullAddress}
                    </p>
                  </div>
                  <button
                    onClick={() => router.push('/checkout')}
                    className="text-teal-600 font-bold text-xs underline shrink-0 hover:text-teal-700 transition-colors uppercase tracking-wider"
                    style={{ fontFamily: 'var(--font-michroma)' }}
                  >
                    Edit Address
                  </button>
                </div>
              </div>
            )}

            {/* Payment Method Card */}
            <div className="bg-white rounded-[24px] p-6 sm:p-8 shadow-[0_8px_30px_rgb(7,76,67,0.03)] border border-slate-100/50 space-y-6">
              <h3 className="font-bold text-[#074139] text-base sm:text-lg tracking-wide" style={{ fontFamily: 'var(--font-michroma)' }}>
                Payment Method
              </h3>

              <div className="space-y-6">
                {/* Active Card Option Details */}
                <div className="bg-[#f0faf8]/30 border border-[#308E8C]/30 rounded-[18px] p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full border-4 border-white outline outline-1 outline-teal-600 bg-teal-600 shadow-sm shrink-0"></div>
                      <span className="font-bold text-slate-800 text-xs sm:text-sm" style={{ fontFamily: 'var(--font-michroma)' }}>
                        Online Payment (UPI, Cards, NetBanking)
                      </span>
                    </div>
                    <span className="text-xs text-[#308E8C] font-semibold" style={{ fontFamily: 'var(--font-michroma)' }}>Secure</span>
                  </div>

                  {/* Payment Icons */}
                  <div className="flex items-center gap-1.5 flex-wrap pt-2">
                    {['VISA', 'Mastercard', 'AMEX', 'UPI', 'GPay', 'NetBanking'].map((icon) => (
                      <div key={icon} className="bg-white/80 border border-slate-100 text-[9px] font-bold text-slate-600 px-2.5 py-1 rounded-md shadow-sm select-none" style={{ fontFamily: 'var(--font-michroma)' }}>
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-col items-center sm:items-start gap-3">
                  <button
                    onClick={isFastag ? handleFastagPayment : handleProductPayment}
                    disabled={isProcessing}
                    className="bg-gradient-to-r from-[#1A817F] to-[#59D0B5] hover:opacity-95 text-white font-bold text-sm px-10 py-4 rounded-full shadow-md w-full sm:w-72 transition-all active:scale-98 tracking-wide cursor-pointer flex items-center justify-center gap-2"
                    style={{ fontFamily: 'var(--font-michroma)' }}
                  >
                    {isProcessing ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <CreditCard className="w-4 h-4" />
                        <span>Pay Now (₹{displayAmount.toLocaleString('en-IN')})</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center gap-1.5 text-[10px] text-teal-600/70 font-semibold pt-1" style={{ fontFamily: 'var(--font-michroma)' }}>
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                    <span>AES-256 SSL Encrypted Secure Checkout</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-5 bg-white rounded-[24px] p-6 sm:p-8 shadow-[0_8px_30px_rgb(7,76,67,0.03)] border border-slate-100/50 space-y-6">
            <h3 className="text-base sm:text-lg font-bold text-[#074139] tracking-wide text-center sm:text-left" style={{ fontFamily: 'var(--font-michroma)' }}>
              Order Summary
            </h3>

            {!isFastag && (
              <div className="space-y-3 border-b border-slate-100 pb-4">
                {checkoutItems.map((item: any) => {
                  const itemPrice = Number(item.priceVal ?? item.product?.productCost ?? item.product?.price ?? 0);
                  const itemName = item.name ?? item.product?.productName ?? item.product?.title ?? 'Product';
                  const itemImg = _prepend(item.image || (item.product && (item.product.images?.[0] || item.product.imagePath)) || "");
                  const itemId = item.id || (item.product && item.product.id);

                  return (
                    <div key={itemId} className="flex items-center gap-3 bg-slate-50/50 border border-slate-100 rounded-xl p-3">
                      <div className="w-12 h-12 bg-white rounded-lg border overflow-hidden shrink-0 flex items-center justify-center p-1">
                        {itemImg ? (
                          <img src={itemImg} alt={itemName} className="w-full h-full object-contain" />
                        ) : (
                          <ShoppingBag className="w-5 h-5 text-slate-400" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-slate-800 line-clamp-2" style={{ fontFamily: 'var(--font-michroma)' }}>
                          {itemName}
                        </p>
                        <p className="text-[10px] text-slate-400 mt-1 font-semibold" style={{ fontFamily: 'var(--font-michroma)' }}>
                          Qty: {item.quantity || 1}
                        </p>
                      </div>
                      <span className="font-bold text-xs text-[#074139] shrink-0" style={{ fontFamily: 'var(--font-michroma)' }}>
                        ₹{(itemPrice * (item.quantity || 1)).toLocaleString('en-IN')}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}

            <div className="space-y-3.5 pt-1" style={{ fontFamily: 'var(--font-michroma)' }}>
              <div className="flex justify-between items-center text-xs font-medium text-slate-500">
                <span>{isFastag ? 'FASTag Recharge Amount:' : 'Subtotal:'}</span>
                <span className="text-slate-800 font-bold">
                  ₹{displayAmount.toLocaleString('en-IN')}
                </span>
              </div>

              {!isFastag && (
                <>
                  <div className="flex justify-between items-center text-xs font-medium text-slate-500">
                    {/* <span>Shipping Charges:</span>
                    <span className="text-teal-600 font-bold">₹100</span> */}
                  </div>
                  {/* <div className="flex justify-between items-center text-xs font-medium text-slate-500">
                    <span>Estimated Tax (GST):</span>
                    <span className="text-slate-800 font-bold">₹0</span>
                  </div> */}
                </>
              )}

              <div className="flex justify-between items-center text-sm font-bold pt-4 border-t border-slate-100 text-[#074139]">
                <span>Order Total:</span>
                <span className="text-base font-black">
                  {/* ₹{(displayAmount + (isFastag ? 0 : 100)).toLocaleString('en-IN')} */}
                  ₹{displayAmount.toLocaleString('en-IN')}
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
