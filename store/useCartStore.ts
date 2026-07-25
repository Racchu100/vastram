import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Product, SizeCategory, PaymentMethodAtStore } from '@/types';

interface PickupInfoState {
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  pickupDate: string;
  pickupTimeSlot: string;
  notes: string;
  fittingRequested: boolean;
  paymentMethod: PaymentMethodAtStore;
}

interface CartStore {
  items: CartItem[];
  pickupInfo: PickupInfoState;
  couponCode: string;
  discountPercentage: number;
  addItem: (product: Product, size: SizeCategory, color: { name: string; hex: string }, quantity?: number) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  setPickupInfo: (info: Partial<PickupInfoState>) => void;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  getSubtotal: () => number;
  getDiscountAmount: () => number;
  getTotalAmount: () => number;
  getItemCount: () => number;
}

const initialPickupInfo: PickupInfoState = {
  customerName: '',
  customerPhone: '',
  customerEmail: '',
  pickupDate: '',
  pickupTimeSlot: '',
  notes: '',
  fittingRequested: false,
  paymentMethod: 'UPI_AT_STORE',
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      pickupInfo: initialPickupInfo,
      couponCode: '',
      discountPercentage: 0,

      addItem: (product, size, color, quantity = 1) => {
        const currentItems = get().items;
        const existingIndex = currentItems.findIndex(
          (item) => item.product.id === product.id && item.selectedSize === size && item.selectedColor.name === color.name
        );

        if (existingIndex > -1) {
          const updated = [...currentItems];
          updated[existingIndex].quantity += quantity;
          set({ items: updated });
        } else {
          const newItem: CartItem = {
            id: `${product.id}-${size}-${color.name}`,
            product,
            selectedSize: size,
            selectedColor: color,
            quantity,
          };
          set({ items: [...currentItems, newItem] });
        }
      },

      removeItem: (itemId) => {
        set({ items: get().items.filter((item) => item.id !== itemId) });
      },

      updateQuantity: (itemId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(itemId);
          return;
        }
        set({
          items: get().items.map((item) =>
            item.id === itemId ? { ...item, quantity } : item
          ),
        });
      },

      clearCart: () => set({ items: [], couponCode: '', discountPercentage: 0, pickupInfo: initialPickupInfo }),

      setPickupInfo: (info) => set((state) => ({ pickupInfo: { ...state.pickupInfo, ...info } })),

      applyCoupon: (code) => {
        const clean = code.trim().toUpperCase();
        if (clean === 'VASTRAM10') {
          set({ couponCode: clean, discountPercentage: 10 });
          return true;
        } else if (clean === 'BRIDALVIP') {
          set({ couponCode: clean, discountPercentage: 15 });
          return true;
        }
        return false;
      },

      removeCoupon: () => set({ couponCode: '', discountPercentage: 0 }),

      getSubtotal: () => {
        return get().items.reduce((sum, item) => {
          const price = item.product.offerPrice ?? item.product.price;
          return sum + price * item.quantity;
        }, 0);
      },

      getDiscountAmount: () => {
        const subtotal = get().getSubtotal();
        const pct = get().discountPercentage;
        return (subtotal * pct) / 100;
      },

      getTotalAmount: () => {
        return Math.max(0, get().getSubtotal() - get().getDiscountAmount());
      },

      getItemCount: () => {
        return get().items.reduce((count, item) => count + item.quantity, 0);
      },
    }),
    {
      name: 'vastram-cart-storage',
    }
  )
);
