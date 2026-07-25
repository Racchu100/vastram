'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';
import { formatCurrency } from '@/lib/utils';
import { useWishlistStore } from '@/store/useWishlistStore';
import { useCartStore } from '@/store/useCartStore';
import { Heart, Eye, ShoppingBag, Sparkles, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export default function ProductCard({ product, onQuickView }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const { toggleWishlist, isInWishlist } = useWishlistStore();
  const { addItem, items: cartItems } = useCartStore();

  const isWishlisted = isInWishlist(product.id);
  const isInCart = cartItems.some((item) => item.product.id === product.id);

  const mainImage = product.images[0];
  const secondaryImage = product.images[1] || product.images[0];

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultSize = product.availableSizes[0] || 'M';
    const defaultColor = product.availableColors[0] || { name: 'Gold', hex: '#C8A45D' };
    addItem(product, defaultSize, defaultColor, 1);
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  const handleQuickViewClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onQuickView) onQuickView(product);
  };

  return (
    <div
      className="group relative bg-white border border-[#E8E8E8] hover:border-[#C8A45D]/80 rounded-lg overflow-hidden transition-all duration-300 flex flex-col justify-between luxury-shadow-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-3/4 w-full bg-gray-100 overflow-hidden">
        <Image
          src={isHovered ? secondaryImage : mainImage}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex flex-col gap-1 z-10">
          {product.isBridal && (
            <span className="bg-[#111111] text-[#E9D29D] text-[8.5px] sm:text-[10px] font-bold tracking-widest uppercase px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded shadow-md border border-[#C8A45D]/40 flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#C8A45D]" /> Bridal
            </span>
          )}
          {product.offerPrice && (
            <span className="bg-[#C8A45D] text-black text-[8.5px] sm:text-[10px] font-bold uppercase px-1.5 sm:px-2 py-0.5 rounded shadow-xs">
              Offer
            </span>
          )}
        </div>

        {/* Top Right Wishlist Button */}
        <button
          onClick={handleWishlistClick}
          className={`absolute top-2 right-2 sm:top-3 sm:right-3 p-1.5 sm:p-2 rounded-full transition-all duration-300 z-10 ${
            isWishlisted
              ? 'bg-red-50 text-red-500 shadow-md'
              : 'bg-white/80 hover:bg-white text-gray-700 hover:text-black shadow-xs'
          }`}
          title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
        >
          <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isWishlisted ? 'fill-red-500' : ''}`} />
        </button>

        {/* Hover Quick View Overlay */}
        {onQuickView && (
          <div className="absolute inset-x-2 bottom-2 sm:inset-x-3 sm:bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <button
              onClick={handleQuickViewClick}
              className="w-full py-1.5 sm:py-2 bg-white/95 hover:bg-white text-black text-[10px] sm:text-xs font-semibold rounded shadow-md flex items-center justify-center gap-1 transition-colors border border-gray-200"
            >
              <Eye className="w-3 h-3 text-[#C8A45D]" /> Quick View
            </button>
          </div>
        )}
      </div>

      {/* Product Content Details */}
      <div className="p-2.5 sm:p-4 flex flex-col flex-1 justify-between bg-white space-y-2">
        <div>
          {/* Category Header */}
          <div className="text-[10px] sm:text-[11px] font-semibold text-[#9A782D] uppercase tracking-wider truncate mb-0.5">
            {product.category}
          </div>

          <Link href={`/product/${product.slug}`}>
            <h3 className="font-serif text-xs sm:text-sm font-semibold text-gray-900 line-clamp-1 group-hover:text-[#C8A45D] transition-colors">
              {product.name}
            </h3>
          </Link>
          <p className="text-[10.5px] sm:text-xs text-gray-500 line-clamp-1 mt-0.5 font-light">
            {product.fabricDetails}
          </p>
        </div>

        {/* Pricing & Add to Cart Footer */}
        <div className="pt-2 border-t border-gray-100 space-y-2">
          <div className="flex items-baseline justify-between gap-1">
            <div className="flex flex-wrap items-baseline gap-1 sm:gap-1.5">
              <span className="font-serif text-xs sm:text-base font-bold text-[#111111]">
                {formatCurrency(product.offerPrice ?? product.price)}
              </span>
              {product.offerPrice && (
                <span className="text-[10px] sm:text-xs text-gray-400 line-through">
                  {formatCurrency(product.price)}
                </span>
              )}
            </div>
          </div>

          {/* Dedicated Add to Cart Button (Changes color dynamically when added to cart) */}
          <button
            onClick={handleQuickAdd}
            className={`w-full py-1.5 sm:py-2 px-2 rounded font-semibold text-[10.5px] sm:text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-xs ${
              isInCart
                ? 'bg-[#C8A45D] hover:bg-[#9A782D] text-black font-bold shadow-md ring-1 ring-[#C8A45D]'
                : 'bg-[#111111] hover:bg-[#C8A45D] text-white hover:text-black'
            }`}
          >
            {isInCart ? (
              <>
                <Check className="w-3.5 h-3.5 text-black stroke-[3]" /> In Cart
              </>
            ) : (
              <>
                <ShoppingBag className="w-3 h-3 text-[#E9D29D] group-hover:text-black" /> Add to Cart
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
