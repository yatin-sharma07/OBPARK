// hooks/usePricingSummary.ts
import { useState, useMemo, useEffect, useCallback } from 'react';
import { calculateClientPricing, CartItemInput, PricingSummary } from '@/lib/pricingEngine';

interface UsePricingOptions {
    productId?: string;
    quantity?: number;
    initialCoupon?: string;
    fetchFromBackend?: boolean;
}

export function usePricingSummary(
    items: CartItemInput[],
    options: UsePricingOptions = {},
) {
    const { productId, quantity, initialCoupon = '', fetchFromBackend = false } = options;

    const [couponCode, setCouponCode] = useState<string>(initialCoupon);
    const [appliedCoupon, setAppliedCoupon] = useState<string>(initialCoupon);
    const [couponError, setCouponError] = useState<string | null>(null);

    // 1. Instant Client-Side Calculation
    const clientSummary: PricingSummary = useMemo(() => {
        return calculateClientPricing(items, { couponCode: appliedCoupon });
    }, [items, appliedCoupon]);

    // 2. Confirmed Backend Calculation State
    const [backendSummary, setBackendSummary] = useState<PricingSummary | null>(null);
    const [isCalculating, setIsCalculating] = useState<boolean>(false);
    const [backendError, setBackendError] = useState<string | null>(null);

    const fetchBackendPricing = useCallback(async (codeToApply?: string) => {
        if (!fetchFromBackend) return;
        setIsCalculating(true);
        setBackendError(null);
        try {
            const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
            const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

            const payload: any = {
                couponCode: codeToApply !== undefined ? codeToApply : appliedCoupon,
            };

            if (productId) {
                payload.productId = productId;
                payload.quantity = quantity || 1;
            } else if (items.length > 0) {
                payload.items = items.map((it) => ({
                    productId: String(it.product.productId || it.product.id),
                    quantity: it.quantity,
                }));
            }

            const headers: Record<string, string> = {
                'Content-Type': 'application/json',
            };
            if (token) {
                headers['Authorization'] = `Bearer ${token}`;
            }

            const res = await fetch(`${baseUrl}/payment/calculate-pricing`, {
                method: 'POST',
                headers,
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                const data = await res.json();
                setBackendSummary(data);
            } else {
                const errData = await res.json().catch(() => ({}));
                setBackendError(errData.message || 'Failed to fetch confirmed pricing');
            }
        } catch (err: any) {
            console.error('Failed to calculate backend pricing:', err);
            setBackendError(err.message || 'Network error calculating pricing');
        } finally {
            setIsCalculating(false);
        }
    }, [fetchFromBackend, productId, quantity, items, appliedCoupon]);

    useEffect(() => {
        if (fetchFromBackend) {
            fetchBackendPricing();
        }
    }, [fetchBackendPricing, fetchFromBackend]);

    const applyCoupon = async (code: string) => {
        const formatted = code.trim().toUpperCase();
        if (!formatted) {
            setCouponError('Please enter a coupon code');
            return;
        }

        if (formatted === 'SAVE100' || formatted === 'OBPARK10') {
            setAppliedCoupon(formatted);
            setCouponError(null);
            if (fetchFromBackend) {
                await fetchBackendPricing(formatted);
            }
        } else {
            setCouponError('Invalid coupon code');
        }
    };

    const removeCoupon = async () => {
        setAppliedCoupon('');
        setCouponCode('');
        setCouponError(null);
        if (fetchFromBackend) {
            await fetchBackendPricing('');
        }
    };

    // Prefer backend confirmed summary if available; fallback to client summary
    const summary: PricingSummary = (fetchFromBackend && backendSummary) ? backendSummary : clientSummary;

    return {
        summary,
        clientSummary,
        backendSummary,
        isCalculating,
        backendError,
        couponCode,
        setCouponCode,
        appliedCoupon,
        couponError,
        applyCoupon,
        removeCoupon,
        refetchBackendPricing: fetchBackendPricing,
    };
}
