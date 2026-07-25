'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import ProductCard from '@/components/ui/ProductCard';
import QuickViewModal from '@/components/shop/QuickViewModal';
import CompareDrawer from '@/components/shop/CompareDrawer';
import { PRODUCTS, CATEGORIES } from '@/lib/mock-data';
import { Product } from '@/types';
import { Sparkles, ArrowLeft } from 'lucide-react';

export default function CategoryPage() {
  const params = useParams();
  const catSlug = params?.category as string;

  const categoryInfo = CATEGORIES.find((c) => c.slug === catSlug) || {
    name: catSlug ? catSlug.toUpperCase().replace(/-/g, ' ') : 'COLLECTION',
    description: 'Explore luxury handwoven ensembles and designer wear.',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=1000'
  };

  const categoryProducts = PRODUCTS.filter(
    (p) => p.categorySlug === catSlug || (catSlug === 'bridal' && p.isBridal)
  );

  const displayProducts = categoryProducts.length > 0 ? categoryProducts : PRODUCTS;

  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  return (
    <div className="bg-[#FAFAFA] min-h-screen py-8 sm:py-12 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        {/* Category Header Card */}
        <div className="bg-white border border-[#E5D9C5] p-6 sm:p-8 rounded-xl shadow-xs flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-3 z-10">
            <Link href="/shop" className="text-xs font-semibold text-[#9A782D] hover:underline flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to All Collections
            </Link>
            <h1 className="font-serif text-2xl sm:text-4xl font-bold text-[#111111]">
              {categoryInfo.name}
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 font-light max-w-xl">
              {categoryInfo.description}
            </p>
            <span className="inline-block text-[11px] font-semibold text-green-700 bg-green-50 px-2.5 py-0.5 rounded border border-green-200">
              Click & Collect Store Pickup Available in Mangaluru
            </span>
          </div>
        </div>

        {/* Products Grid - 2 columns on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {displayProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={(p) => setQuickViewProduct(p)}
            />
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />

      <CompareDrawer />
    </div>
  );
}
