// components/checkout/PriceBreakdown.tsx
import { PricingSummary } from '@/lib/pricingEngine';

interface PriceBreakdownProps {
    summary: PricingSummary;
    couponCode: string;
    setCouponCode: (val: string) => void;
    appliedCoupon: string;
    couponError: string | null;
    onApplyCoupon: (code: string) => void;
    onRemoveCoupon: () => void;
    onProceedToPay: () => void;
    isLoading?: boolean;
}

export const PriceBreakdown: React.FC<PriceBreakdownProps> = ({
    summary,
    couponCode,
    setCouponCode,
    appliedCoupon,
    couponError,
    onApplyCoupon,
    onRemoveCoupon,
    onProceedToPay,
    isLoading = false,
}) => {
    return (
        <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Price Details</h3>

            {/* Free Shipping Banner / Progress Bar */}
            <div className="mb-6 p-3 bg-blue-50 rounded-xl border border-blue-100">
                {summary.isFreeShipping ? (
                    <p className="text-sm font-medium text-blue-700 flex items-center gap-1.5">
                        🎉 Congratulations! You unlocked <strong>FREE Shipping</strong>.
                    </p>
                ) : (
                    <div>
                        <p className="text-xs text-blue-600 mb-1">
                            Add <strong className="font-bold">₹{summary.amountNeededForFreeShipping}</strong> more to unlock <strong>FREE Delivery!</strong>
                        </p>
                        <div className="w-full bg-blue-200 h-2 rounded-full overflow-hidden">
                            <div
                                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${Math.min(100, (summary.subtotal / 1500) * 100)}%` }}
                            ></div>
                        </div>
                    </div>
                )}
            </div>

            {/* Coupon Input Section */}
            <div className="mb-6">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Apply Coupon Code
                </label>
                {appliedCoupon ? (
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl border border-green-200">
                        <span className="text-sm font-bold text-green-700">🏷️ {appliedCoupon} APPLIED</span>
                        <button
                            onClick={onRemoveCoupon}
                            className="text-xs font-semibold text-red-500 hover:text-red-700"
                        >
                            Remove
                        </button>
                    </div>
                ) : (
                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="e.g. SAVE100"
                            value={couponCode}
                            onChange={(e) => setCouponCode(e.target.value)}
                            className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            onClick={() => onApplyCoupon(couponCode)}
                            className="px-4 py-2 bg-gray-900 text-white font-medium text-sm rounded-xl hover:bg-gray-800 transition"
                        >
                            Apply
                        </button>
                    </div>
                )}
                {couponError && <p className="text-xs text-red-500 mt-1">{couponError}</p>}
            </div>

            {/* Line Items */}
            <div className="space-y-3 text-sm text-gray-600 pb-4 border-b border-gray-100">
                <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold text-gray-800">₹{summary.subtotal}</span>
                </div>

                {summary.discount > 0 && (
                    <div className="flex justify-between text-green-600 font-medium">
                        <span>Coupon Discount</span>
                        <span>- ₹{summary.discount}</span>
                    </div>
                )}

                <div className="flex justify-between">
                    <span>Estimated GST (Tax)</span>
                    <span className="font-semibold text-gray-800">₹{summary.tax}</span>
                </div>

                <div className="flex justify-between">
                    <span>Shipping Fee</span>
                    {summary.shippingCharge === 0 ? (
                        <span className="font-bold text-green-600 uppercase text-xs">FREE</span>
                    ) : (
                        <span className="font-semibold text-gray-800">₹{summary.shippingCharge}</span>
                    )}
                </div>

                {summary.platformFee > 0 ? (
                    <div className="flex justify-between">
                        <span>Platform Fee</span>
                        <span className="font-semibold text-gray-800">₹{summary.platformFee}</span>
                    </div>
                ) : (
                    <div className="flex justify-between text-xs text-green-600">
                        <span>Platform Fee</span>
                        <span className="font-bold">WAIVED</span>
                    </div>
                )}
            </div>

            {/* Final Total Amount */}
            <div className="flex justify-between items-center my-5 text-lg font-bold text-gray-900">
                <span>Total Amount</span>
                <span className="text-2xl text-blue-600">₹{summary.totalAmount}</span>
            </div>

            {/* Proceed Button */}
            <button
                onClick={onProceedToPay}
                disabled={isLoading}
                className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition disabled:opacity-50"
            >
                {isLoading ? 'Initializing Payment...' : 'Proceed to Checkout'}
            </button>
        </div>
    );
};
