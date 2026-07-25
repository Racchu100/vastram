'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import ProductCard from '@/components/ui/ProductCard';
import PickupNoticeBanner from '@/components/ui/PickupNoticeBanner';
import { PRODUCTS, SAMPLE_REVIEWS } from '@/lib/mock-data';
import { Product, SizeCategory } from '@/types';
import { formatCurrency } from '@/lib/utils';
import { useCartStore } from '@/store/useCartStore';
import { useWishlistStore } from '@/store/useWishlistStore';
import {
  Heart,
  ShoppingBag,
  Share2,
  Check,
  Star,
  MapPin,
  Sparkles,
  Scissors,
  ShieldCheck,
  Clock,
  ArrowRight,
  MessageSquare
} from 'lucide-react';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];

  const [activeImage, setActiveImage] = useState(product.images[0]);
  const [selectedSize, setSelectedSize] = useState<SizeCategory>(product.availableSizes[0] || 'M');
  const [selectedColor, setSelectedColor] = useState(
    product.availableColors[0] || { name: 'Gold', hex: '#C8A45D' }
  );
  const [added, setAdded] = useState(false);
  const [copied, setCopied] = useState(false);

  const { addItem } = useCartStore();
  const { toggleWishlist, isInWishlist } = useWishlistStore();
  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = () => {
    addItem(product, selectedSize, selectedColor, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && p.categorySlug === product.categorySlug
  ).slice(0, 3);

  return (
    <div className="bg-[#FAFAFA] min-h-screen py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Breadcrumb Navigation */}
        <nav className="text-xs text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-black">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-black">Shop</Link>
          <span>/</span>
          <Link href={`/category/${product.categorySlug}`} className="hover:text-black uppercase">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-semibold truncate">{product.name}</span>
        </nav>

        {/* Main Product Layout */}
        <div className="bg-white border border-[#E5D9C5] rounded-xl p-6 sm:p-10 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Gallery Column (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-3/4 w-full rounded-lg overflow-hidden bg-gray-100 border border-gray-200 shadow-sm group">
              <Image
                src={activeImage}
                alt={product.name}
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {product.isBridal && (
                <span className="absolute top-4 left-4 bg-[#111111] text-[#E9D29D] text-xs font-bold tracking-widest uppercase px-3 py-1 rounded shadow-md border border-[#C8A45D]/50 flex items-center gap-1.5 z-10">
                  <Sparkles className="w-4 h-4 text-[#C8A45D]" /> Royal Bridal Piece
                </span>
              )}
            </div>

            {/* Thumbnail Carousel */}
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`relative w-20 h-24 rounded-md overflow-hidden border-2 transition-all shrink-0 ${
                      activeImage === img
                        ? 'border-[#C8A45D] ring-2 ring-[#C8A45D]/30'
                        : 'border-gray-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image src={img} alt={`Thumbnail ${idx}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Content Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span className="font-semibold text-[#9A782D] uppercase tracking-wider">
                  {product.category}
                </span>
                <span className="text-gray-400">SKU: {product.sku}</span>
              </div>

              <h1 className="font-serif text-3xl font-bold text-gray-900 leading-tight">
                {product.name}
              </h1>

              <p className="text-xs text-gray-500 italic">{product.subtitle}</p>

              {/* Price & Stock Badge */}
              <div className="flex items-baseline gap-4 pt-2 border-t border-gray-100">
                <span className="font-serif text-3xl font-bold text-[#111111]">
                  {formatCurrency(product.offerPrice ?? product.price)}
                </span>
                {product.offerPrice && (
                  <span className="text-base text-gray-400 line-through">
                    {formatCurrency(product.price)}
                  </span>
                )}
                <span className="text-xs font-semibold text-green-700 bg-green-50 px-2.5 py-1 rounded border border-green-200 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> In Stock for Store Pickup
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed pt-2">
                {product.description}
              </p>

              {/* Specifications Card */}
              <div className="bg-[#FDFBF7] border border-[#E5D9C5] rounded-lg p-4 space-y-2 text-xs text-gray-700">
                <div className="grid grid-cols-2 gap-2">
                  <p><strong>Fabric Material:</strong> {product.fabricDetails}</p>
                  <p><strong>Embroidery Work:</strong> {product.workDetails}</p>
                  <p><strong>Occasion:</strong> {product.occasion}</p>
                  <p><strong>Showroom Fitting:</strong> Complimentary</p>
                </div>
              </div>

              {/* Size Selection */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between items-center text-xs font-semibold text-gray-800">
                  <span>Select Size</span>
                  <span className="text-[#9A782D] flex items-center gap-1 font-normal">
                    <Scissors className="w-3.5 h-3.5" /> Free In-Store Alteration
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.availableSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 text-xs font-semibold rounded border transition-all ${
                        selectedSize === size
                          ? 'bg-[#111111] text-white border-[#111111] shadow-xs'
                          : 'border-gray-300 text-gray-700 hover:border-[#C8A45D]'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              {product.availableColors.length > 0 && (
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-semibold text-gray-800 block">Color Tone</span>
                  <div className="flex items-center gap-3">
                    {product.availableColors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs border transition-all ${
                          selectedColor.name === color.name
                            ? 'border-[#C8A45D] bg-[#FDFBF7] font-semibold text-black'
                            : 'border-gray-200 text-gray-600'
                        }`}
                      >
                        <span
                          className="w-4 h-4 rounded-full border border-gray-300"
                          style={{ backgroundColor: color.hex }}
                        />
                        <span>{color.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Action CTAs */}
            <div className="space-y-3 pt-6 border-t border-gray-100">
              <div className="flex gap-3">
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 py-4 px-6 rounded font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-lg ${
                    added
                      ? 'bg-green-700 text-white'
                      : 'bg-[#111111] hover:bg-[#C8A45D] text-white'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" /> Added to Pickup Selection
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4 text-[#E9D29D]" /> Reserve for Store Pickup
                    </>
                  )}
                </button>

                <button
                  onClick={() => toggleWishlist(product)}
                  className={`p-4 rounded border transition-colors ${
                    isWishlisted
                      ? 'border-red-300 bg-red-50 text-red-500'
                      : 'border-gray-300 hover:border-black text-gray-700'
                  }`}
                  title="Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-500' : ''}`} />
                </button>

                <button
                  onClick={handleShare}
                  className="p-4 rounded border border-gray-300 hover:border-black text-gray-700 transition-colors relative"
                  title="Share Piece"
                >
                  {copied ? <Check className="w-5 h-5 text-green-600" /> : <Share2 className="w-5 h-5" />}
                </button>
              </div>

              <Link
                href="/checkout"
                onClick={handleAddToCart}
                className="w-full py-3.5 bg-[#FDFBF7] hover:bg-[#E5D9C5]/40 border border-[#C8A45D] text-[#9A782D] font-semibold text-xs uppercase tracking-wider rounded flex items-center justify-center gap-2 transition-colors"
              >
                <span>Proceed Directly to Pickup Scheduling</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Click & Collect Notice */}
        <PickupNoticeBanner />

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-bold text-gray-900">
              You May Also Love
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
