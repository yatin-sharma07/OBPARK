// lib/pricingEngine.ts

export interface CartItemInput {
    product: {
        id?: string | number;
        productId?: string;
        productName?: string;
        title?: string;
        name?: string;
        price?: number;
        productCost?: number;
        basePrice?: number;
        gstRate?: number;
        imagePath?: string;
        images?: string[];
        brand?: string;
        hsnCode?: string;
    };
    quantity: number;
}

export interface PricingOptions {
    couponCode?: string;
    freeShippingThreshold?: number; // default ₹1500
    platformFeeThreshold?: number;  // default ₹1000
    defaultShippingCharge?: number;
    platformFee?: number;
}

export interface FormattedItemSummary {
    productId: string;
    productName: string;
    productImage: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    gstRate: number;
    gstAmount: number;
}

export interface PricingSummary {
    subtotal: number;
    tax: number;
    discount: number;
    shippingCharge: number;
    platformFee: number;
    totalAmount: number;
    amountNeededForFreeShipping: number;
    isFreeShipping: boolean;
    isPlatformFeeWaived: boolean;
    appliedCoupon?: string | null;
    orderItems?: FormattedItemSummary[];
}

/**
 * Client-Side Centralized Pricing Engine
 * Matches 1:1 with backend pricingEngine methodology.
 */
export function calculateClientPricing(
    items: CartItemInput[],
    options: PricingOptions = {},
): PricingSummary {
    const SHIPPING_THRESHOLD = options.freeShippingThreshold ?? 1500;
    const PLATFORM_FEE_THRESHOLD = options.platformFeeThreshold ?? 1000;
    const SINGLE_PRODUCT_FEE = 15;
    const MULTI_ITEM_FEE = 10;

    let subtotal = 0;
    let totalTax = 0;
    const orderItems: FormattedItemSummary[] = [];

    items.forEach(({ product, quantity }) => {
        if (!product) return;
        const qty = Math.max(1, quantity || 1);
        const price = Number(
            product.price ?? product.productCost ?? product.basePrice ?? 0,
        );
        const itemSubtotal = +(price * qty).toFixed(2);
        subtotal += itemSubtotal;

        // GST Tax calculation (defaults to 18%), rounded per line item
        const gstRate = Number(product.gstRate ?? 18);
        const itemGst = +((itemSubtotal * gstRate) / 100).toFixed(2);
        totalTax += itemGst;

        orderItems.push({
            productId: String(product.productId || product.id || ''),
            productName: String(product.title || product.productName || product.name || 'Product'),
            productImage:
                product.imagePath ||
                (Array.isArray(product.images) && product.images[0]) ||
                '',
            quantity: qty,
            unitPrice: price,
            totalPrice: itemSubtotal,
            gstRate,
            gstAmount: itemGst,
        });
    });

    // If subtotal is 0 or no items, return all zeroes
    if (items.length === 0 || subtotal === 0) {
        return {
            subtotal: 0,
            tax: 0,
            discount: 0,
            shippingCharge: 0,
            platformFee: 0,
            totalAmount: 0,
            amountNeededForFreeShipping: 0,
            isFreeShipping: true,
            isPlatformFeeWaived: true,
            appliedCoupon: null,
            orderItems: [],
        };
    }

    // 1. Coupon Discount Logic
    let discount = 0;
    if (options.couponCode) {
        const code = options.couponCode.trim().toUpperCase();
        if (code === 'SAVE100') {
            discount = Math.min(100, subtotal);
        } else if (code === 'OBPARK10') {
            discount = +((subtotal * 0.1).toFixed(2));
        }
    }

    // 2. Shipping Charge Logic
    const isFreeShipping = subtotal >= SHIPPING_THRESHOLD;
    let shippingCharge = options.defaultShippingCharge ?? 0;
    if (options.defaultShippingCharge === undefined) {
        shippingCharge = isFreeShipping ? 0 : 50;
    }
    const amountNeededForFreeShipping = Math.max(0, SHIPPING_THRESHOLD - subtotal);

    // 3. Platform Fee Logic
    let platformFee = options.platformFee ?? 0;
    if (options.platformFee === undefined) {
        if (subtotal >= PLATFORM_FEE_THRESHOLD) {
            platformFee = 0;
        } else {
            platformFee = items.length === 1 ? SINGLE_PRODUCT_FEE : MULTI_ITEM_FEE;
        }
    }

    // 4. Net Payable Amount
    const totalAmount = +Math.max(
        0,
        subtotal - discount + totalTax + shippingCharge + platformFee,
    ).toFixed(2);

    return {
        subtotal: +subtotal.toFixed(2),
        tax: +totalTax.toFixed(2),
        discount: +discount.toFixed(2),
        shippingCharge: +shippingCharge.toFixed(2),
        platformFee: +platformFee.toFixed(2),
        totalAmount,
        amountNeededForFreeShipping: +amountNeededForFreeShipping.toFixed(2),
        isFreeShipping,
        isPlatformFeeWaived: subtotal >= PLATFORM_FEE_THRESHOLD,
        appliedCoupon: discount > 0 && options.couponCode ? options.couponCode.trim().toUpperCase() : null,
        orderItems,
    };
}
