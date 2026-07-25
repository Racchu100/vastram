export type SizeCategory = 'XS' | 'S' | 'M' | 'L' | 'XL' | '2XL' | '3XL' | '4XL' | 'Custom Fit';

export type FabricType = 
  | 'Pure Silk' 
  | 'Kanjeevaram Silk' 
  | 'Organza Silk' 
  | 'Chiffon' 
  | 'Georgette' 
  | 'Velvet' 
  | 'Net & Tulle' 
  | 'Raw Silk' 
  | 'Tissue Silk' 
  | 'Cotton Chanderi';

export type OccasionType = 
  | 'Bridal Wear' 
  | 'Wedding Reception' 
  | 'Sangeet & Haldi' 
  | 'Festive & Puja' 
  | 'Cocktail & Party' 
  | 'Evening Gala' 
  | 'Casual Luxury';

export interface ProductVariant {
  id: string;
  size: SizeCategory;
  color: string;
  colorHex: string;
  stock: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  subtitle: string;
  description: string;
  fabricDetails: FabricType;
  workDetails: string;
  occasion: OccasionType;
  price: number;
  offerPrice?: number;
  images: string[];
  videoUrl?: string;
  category: string;
  categorySlug: string;
  subCategory?: string;
  availableSizes: SizeCategory[];
  availableColors: { name: string; hex: string }[];
  variants: ProductVariant[];
  inStock: boolean;
  stockCount: number;
  isFeatured: boolean;
  isTrending: boolean;
  isNewArrival: boolean;
  isBridal: boolean;
  sku: string;
  barcode: string;
  rating: number;
  reviewCount: number;
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
  isFeatured: boolean;
}

export interface CartItem {
  id: string;
  product: Product;
  selectedSize: SizeCategory;
  selectedColor: { name: string; hex: string };
  quantity: number;
}

export interface PickupDetails {
  pickupDate: string;
  pickupTimeSlot: string; // e.g. "10:30 AM - 01:00 PM"
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  notes?: string;
  fittingRequested?: boolean;
}

export type PaymentMethodAtStore = 'CASH_AT_STORE' | 'UPI_AT_STORE' | 'CARD_AT_STORE';

export type OrderStatus = 
  | 'PENDING' 
  | 'CONFIRMED' 
  | 'READY_FOR_PICKUP' 
  | 'COLLECTED' 
  | 'CANCELLED';

export interface Order {
  id: string;
  orderNumber: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  items: {
    productId: string;
    productName: string;
    productImage: string;
    size: SizeCategory;
    color: string;
    price: number;
    quantity: number;
  }[];
  subtotal: number;
  discount: number;
  totalAmount: number;
  pickupDate: string;
  pickupTimeSlot: string;
  paymentMethod: PaymentMethodAtStore;
  paymentStatus: 'UNPAID' | 'PAID_AT_STORE';
  orderStatus: OrderStatus;
  notes?: string;
  fittingRequested?: boolean;
  qrPassCode: string;
  createdAt: string;
  updatedAt: string;
}

export interface Review {
  id: string;
  productId: string;
  productName: string;
  customerName: string;
  customerLocation: string;
  rating: number;
  title: string;
  comment: string;
  photos?: string[];
  verifiedPurchase: boolean;
  isApproved: boolean;
  reply?: string;
  createdAt: string;
}

export interface CustomerProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  loyaltyPoints: number;
  totalOrders: number;
  totalSpent: number;
  status: 'ACTIVE' | 'VIP' | 'BLOCKED';
  notes?: string;
  joinedDate: string;
}

export interface Coupon {
  id: string;
  code: string;
  discountType: 'PERCENTAGE' | 'FIXED';
  discountValue: number;
  minOrderAmount: number;
  validUntil: string;
  isActive: boolean;
}

export interface StoreInfo {
  name: string;
  tagline: string;
  addressLine1: string;
  addressLine2: string;
  area: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  whatsapp: string;
  email: string;
  pickupHours: string;
  googleMapEmbedUrl: string;
  googleMapDirectionsUrl: string;
}
