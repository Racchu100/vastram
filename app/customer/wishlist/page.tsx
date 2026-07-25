'use client';

import React from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ui/ProductCard';
import { useWishlistStore } from '@/store/useWishlistStore';
import { Heart, ShoppingBag, Sparkles } from 'lucide-react';

export default function WishlistPage() {
  const { items, clearWishlist } = useWishlistStore();

  return (
    <div className="bg-[#FAFAFA] min-h-screen py-8 sm:py-12 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        {/* Header */}
        <div className="bg-white border border-[#E5D9C5] p-6 rounded-xl shadow-xs flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#9A782D] flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#C8A45D]" /> Private Vault
            </span>
            <h1 className="font-serif text-2xl font-bold text-gray-900">Saved Wishlist Pieces</h1>
          </div>
          {items.length > 0 && (
            <button
              onClick={clearWishlist}
              className="text-xs text-red-600 hover:underline font-semibold"
            >
              Clear Wishlist
            </button>
          )}
        </div>

        {items.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-xl p-12 text-center text-gray-500 space-y-4">
            <Heart className="w-12 h-12 text-[#C8A45D] mx-auto" />
            <h3 className="font-serif text-xl font-bold text-gray-800">Your wishlist is currently empty</h3>
            <p className="text-xs text-gray-500">Save bridal lehengas and sarees to review before your showroom visit.</p>
            <Link
              href="/shop"
              className="inline-block px-6 py-2.5 bg-[#111111] text-white text-xs font-semibold uppercase tracking-wider rounded hover:bg-[#C8A45D] transition-colors"
            >
              Explore Shop Collection
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {items.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
