'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product, SizeCategory } from '@/types';
import { formatCurrency } from '@/lib/utils';
import { useCartStore } from '@/store/useCartStore';
import { useWishlistStore } from '@/store/useWishlistStore';
import { X, Heart, ShoppingBag, Check, MapPin, Sparkles, ShieldCheck } from 'lucide-react';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  if (!product) return null;

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedSize, setSelectedSize] = useState<SizeCategory>(product.availableSizes[0] || 'M');
  const [selectedColor, setSelectedColor] = useState(
    product.availableColors[0] || { name: 'Gold', hex: '#C8A45D' }
  );
  const [added, setAdded] = useState(false);

  const { addItem } = useCartStore();
  const { toggleWishlist, isInWishlist } = useWishlistStore();
  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = () => {
    addItem(product, selectedSize, selectedColor, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative bg-white rounded-lg max-w-4xl w-full overflow-hidden shadow-2xl z-10 grid grid-cols-1 md:grid-cols-2 border border-[#E5D9C5] max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white/80 hover:bg-white text-gray-700 hover:text-black rounded-full shadow-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Gallery Column */}
        <div className="p-6 bg-gray-50 flex flex-col justify-between border-r border-gray-100">
          <div className="relative aspect-3/4 rounded overflow-hidden bg-gray-200 border border-gray-200">
            <Image
              src={selectedImage}
              alt={product.name}
              fill
              className="object-cover"
            />
            {product.isBridal && (
              <span className="absolute top-3 left-3 bg-[#111111] text-[#E9D29D] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded shadow-md border border-[#C8A45D]/50 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#C8A45D]" /> Bridal Couture
              </span>
            )}
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex gap-3 mt-4 overflow-x-auto pb-1">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`relative w-16 h-20 rounded overflow-hidden border-2 transition-all shrink-0 ${
                    selectedImage === img ? 'border-[#C8A45D] ring-2 ring-[#C8A45D]/30' : 'border-gray-200'
                  }`}
                >
                  <Image src={img} alt={`Thumb ${idx}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Details Column */}
        <div className="p-6 md:p-8 flex flex-col justify-between bg-white space-y-6">
          <div>
            <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
              <span className="font-semibold uppercase text-[#9A782D] tracking-wider">
                {product.category}
              </span>
              <span className="text-gray-400">SKU: {product.sku}</span>
            </div>

            <h2 className="font-serif text-2xl font-bold text-gray-900 leading-tight">
              {product.name}
            </h2>
            <p className="text-xs text-gray-500 italic mt-1">{product.subtitle}</p>

            {/* Price */}
            <div className="mt-4 flex items-baseline gap-3">
              <span className="font-serif text-2xl font-bold text-[#111111]">
                {formatCurrency(product.offerPrice ?? product.price)}
              </span>
              {product.offerPrice && (
                <span className="text-sm text-gray-400 line-through">
                  {formatCurrency(product.price)}
                </span>
              )}
            </div>

            {/* In Stock Notice */}
            <div className="mt-3 p-2.5 bg-[#FDFBF7] border border-[#E5D9C5] rounded text-xs text-gray-700 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C8A45D] shrink-0" />
              <span>Available for <strong>Click & Collect</strong> at Mangaluru Showroom.</span>
            </div>

            {/* Specs Summary */}
            <div className="mt-4 text-xs space-y-1.5 text-gray-600">
              <p><strong>Fabric:</strong> {product.fabricDetails}</p>
              <p><strong>Work:</strong> {product.workDetails}</p>
              <p><strong>Occasion:</strong> {product.occasion}</p>
            </div>

            {/* Size Selector */}
            <div className="mt-6">
              <div className="flex items-center justify-between text-xs font-semibold text-gray-800 mb-2">
                <span>Select Size</span>
                <span className="text-gray-400 font-normal">Complimentary Trial Fitting</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.availableSizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1.5 text-xs font-medium rounded border transition-all ${
                      selectedSize === size
                        ? 'bg-[#111111] text-white border-[#111111]'
                        : 'border-gray-300 hover:border-[#C8A45D] text-gray-700'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selector */}
            {product.availableColors.length > 0 && (
              <div className="mt-4">
                <span className="text-xs font-semibold text-gray-800 block mb-2">Color Palette</span>
                <div className="flex items-center gap-3">
                  {product.availableColors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs border transition-all ${
                        selectedColor.name === color.name
                          ? 'border-[#C8A45D] bg-[#FDFBF7] font-semibold text-black'
                          : 'border-gray-200 text-gray-600'
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-gray-300"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span>{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-4 border-t border-gray-100">
            <div className="flex gap-3">
              <button
                onClick={handleAddToCart}
                className={`flex-1 py-3 px-4 rounded font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                  added
                    ? 'bg-green-700 text-white'
                    : 'bg-[#111111] hover:bg-[#C8A45D] text-white shadow-lg'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" /> Added to Pickup Bag
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 text-[#E9D29D]" /> Reserve for Store Pickup
                  </>
                )}
              </button>

              <button
                onClick={() => toggleWishlist(product)}
                className={`p-3 rounded border transition-colors ${
                  isWishlisted
                    ? 'border-red-300 bg-red-50 text-red-500'
                    : 'border-gray-300 hover:border-black text-gray-700'
                }`}
                title="Wishlist"
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-500' : ''}`} />
              </button>
            </div>

            <Link
              href={`/product/${product.slug}`}
              onClick={onClose}
              className="block text-center text-xs text-[#9A782D] hover:underline font-medium"
            >
              View Full Product Details & Gallery &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
