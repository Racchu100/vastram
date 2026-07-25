import { create } from 'zustand';
import { Product } from '@/types';

interface CompareStore {
  items: Product[];
  addProduct: (product: Product) => boolean;
  removeProduct: (productId: string) => void;
  clearCompare: () => void;
  isInCompare: (productId: string) => boolean;
}

export const useCompareStore = create<CompareStore>((set, get) => ({
  items: [],
  addProduct: (product) => {
    const current = get().items;
    if (current.some((p) => p.id === product.id)) return false;
    if (current.length >= 4) return false;
    set({ items: [...current, product] });
    return true;
  },
  removeProduct: (productId) => {
    set({ items: get().items.filter((p) => p.id !== productId) });
  },
  clearCompare: () => set({ items: [] }),
  isInCompare: (productId) => get().items.some((p) => p.id === productId),
}));
