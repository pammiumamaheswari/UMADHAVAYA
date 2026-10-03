export type UserRole =
  | 'CUSTOMER'
  | 'ADMIN'
  | 'OWNER'
  | 'MANAGER'
  | 'INVENTORY_MANAGER'
  | 'ORDER_MANAGER'
  | 'CONTENT_MANAGER'
  | 'SUPPORT_AGENT';

export type ProductStatus = 'DRAFT' | 'ACTIVE' | 'INACTIVE' | 'ARCHIVED' | 'OUT_OF_STOCK';

export type OrderStatus =
  | 'PENDING_PAYMENT'
  | 'CONFIRMED'
  | 'PROCESSING'
  | 'PACKED'
  | 'SHIPPED'
  | 'OUT_FOR_DELIVERY'
  | 'DELIVERED'
  | 'CANCELLED'
  | 'RETURN_REQUESTED'
  | 'RETURNED'
  | 'REFUNDED';

export type PaymentStatus =
  | 'PENDING'
  | 'AUTHORIZED'
  | 'CAPTURED'
  | 'FAILED'
  | 'REFUNDED'
  | 'PARTIALLY_REFUNDED';

export type PaymentProvider = 'RAZORPAY' | 'STRIPE' | 'CASH_ON_DELIVERY' | 'BANK_TRANSFER';

export interface UserDTO {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string | null;
  role: UserRole;
  isActive: boolean;
  isEmailVerified: boolean;
  avatarUrl?: string | null;
  createdAt: string;
}

export interface SareeProductDTO {
  id: string;
  sku: string;
  name: string;
  slug: string;
  description: string;
  shortDescription?: string | null;
  categoryId: string;
  category?: {
    id: string;
    name: string;
    slug: string;
  };
  collectionId?: string | null;
  collection?: {
    id: string;
    name: string;
    slug: string;
  } | null;
  brand: string;
  price: number;
  mrp: number;
  discountPercent: number;
  taxRate: number;
  status: ProductStatus;
  isFeatured: boolean;
  isBestSeller: boolean;
  isNewArrival: boolean;
  isSilkMarkCertified: boolean;
  isHandloomCertified: boolean;
  fabric: string;
  color: string;
  colorHex?: string | null;
  pattern: string;
  occasion: string;
  workType: string;
  sareeLength: string;
  blouseIncluded: boolean;
  blouseLength: string;
  blouseFabric?: string | null;
  weightGrams?: number | null;
  careInstructions: string;
  origin: string;
  manufacturer: string;
  returnEligible: boolean;
  returnPeriodDays: number;
  seoTitle?: string | null;
  seoDescription?: string | null;
  images: Array<{
    id: string;
    url: string;
    altText?: string | null;
    isPrimary: boolean;
    isHover: boolean;
    displayOrder: number;
  }>;
  stockQuantity?: number;
  availableQuantity?: number;
  ratingAverage?: number;
  reviewsCount?: number;
  createdAt: string;
  updatedAt: string;
}

export interface CartItemDTO {
  id: string;
  productId: string;
  product: SareeProductDTO;
  quantity: number;
  blouseCustomization?: string | null;
}

export interface CartDTO {
  id: string;
  userId?: string | null;
  items: CartItemDTO[];
  itemsSubtotal: number;
  discountAmount: number;
  taxAmount: number;
  shippingFee: number;
  totalAmount: number;
  appliedCoupon?: {
    code: string;
    discountValue: number;
  } | null;
}

export interface OrderDTO {
  id: string;
  orderNumber: string;
  status: OrderStatus;
  itemsSubtotal: number;
  discountAmount: number;
  taxAmount: number;
  shippingFee: number;
  totalAmount: number;
  couponCode?: string | null;
  shippingAddress: any;
  items: Array<{
    id: string;
    productId: string;
    productName: string;
    productSku: string;
    productImageUrl?: string | null;
    sareeFabric?: string | null;
    unitPrice: number;
    quantity: number;
    totalPrice: number;
  }>;
  statusHistory?: Array<{
    status: OrderStatus;
    notes?: string | null;
    createdAt: string;
  }>;
  payment?: {
    id: string;
    paymentProvider: PaymentProvider;
    status: PaymentStatus;
    paidAt?: string | null;
  };
  tracking?: {
    courierPartner: string;
    trackingNumber: string;
    trackingUrl?: string | null;
  };
  createdAt: string;
}

export interface ApiResponse<T> {
  data: T;
  meta: {
    requestId: string;
    timestamp?: string;
  };
}

export interface PaginatedApiResponse<T> {
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
  meta: {
    requestId: string;
  };
}

export interface ApiErrorResponse {
  error: {
    code: string;
    message: string;
    fields?: Record<string, string>;
  };
  meta: {
    requestId: string;
  };
}
