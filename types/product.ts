// ─────────────────────────────────────────────────────────
// Shared product types used by product detail pages.
// Replaces the old @/app/category/mock-data/types import.
// ─────────────────────────────────────────────────────────

export interface SingleProduct {
  id: string;
  productHeading: string;
  title: string;
  brand: string;
  price: number;
  currencySymbol: string;
  imagePath: string;
  galleryImages: string[];
  discountText: string;
  ratingData: {
    averageRating: number;
    totalReviewsCount: number;
    boughtPastMonthText: string;
    soldLastWeekText: string;
  };
  attributes: { label: string; value: string }[];
  aboutSections: { heading: string; content: string }[];
  shippingBadges: string[];
  reviewsBreakdown: {
    starBars: { stars: number; percentage: number }[];
    userFeed: {
      id: string;
      rating: number;
      reviewerName: string;
      isVerifiedBuyer: boolean;
      postedDateAgo: string;
      commentText: string;
      userUploadedMedia?: string[];
    }[];
  };
}
