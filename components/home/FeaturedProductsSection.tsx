'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ui/ProductCard';
import QuickViewModal from '@/components/shop/QuickViewModal';
import { PRODUCTS } from '@/lib/mock-data';
import { Product } from '@/types';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function FeaturedProductsSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'bridal' | 'sarees' | 'gowns'>('all');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const filteredProducts = PRODUCTS.filter((product) => {
    if (activeTab === 'bridal') return product.isBridal;
    if (activeTab === 'sarees') return product.categorySlug === 'sarees';
    if (activeTab === 'gowns') return product.categorySlug === 'gowns';
    return true;
  });

  return (
    <section className="py-12 sm:py-20 px-3 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
        {/* Header & Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-b border-gray-100 pb-6">
          <div className="space-y-2">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#9A782D] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C8A45D]" /> Signature Ensembles
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#111111]">
              Featured Boutique Ensembles
            </h2>
            <p className="text-xs text-gray-500 font-light">
              Click & Collect available for all items at our Mangaluru showroom.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold rounded uppercase tracking-wider transition-all shrink-0 ${
                activeTab === 'all'
                  ? 'bg-[#111111] text-white shadow-md'
                  : 'bg-[#FAFAFA] text-gray-700 hover:bg-gray-200 border border-gray-200'
              }`}
            >
              All Pieces
            </button>
            <button
              onClick={() => setActiveTab('bridal')}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold rounded uppercase tracking-wider transition-all shrink-0 ${
                activeTab === 'bridal'
                  ? 'bg-[#111111] text-[#E9D29D] border border-[#C8A45D] shadow-md'
                  : 'bg-[#FAFAFA] text-gray-700 hover:bg-gray-200 border border-gray-200'
              }`}
            >
              Bridal Spotlight
            </button>
            <button
              onClick={() => setActiveTab('sarees')}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold rounded uppercase tracking-wider transition-all shrink-0 ${
                activeTab === 'sarees'
                  ? 'bg-[#111111] text-white shadow-md'
                  : 'bg-[#FAFAFA] text-gray-700 hover:bg-gray-200 border border-gray-200'
              }`}
            >
              Heritage Sarees
            </button>
            <button
              onClick={() => setActiveTab('gowns')}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold rounded uppercase tracking-wider transition-all shrink-0 ${
                activeTab === 'gowns'
                  ? 'bg-[#111111] text-white shadow-md'
                  : 'bg-[#FAFAFA] text-gray-700 hover:bg-gray-200 border border-gray-200'
              }`}
            >
              Evening Gowns
            </button>
          </div>
        </div>

        {/* Product Cards Grid - 2 columns on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={(p) => setQuickViewProduct(p)}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center pt-4 sm:pt-6">
          <Link
            href="/shop"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 border-2 border-[#111111] hover:bg-[#111111] hover:text-white text-[#111111] text-xs font-bold uppercase tracking-widest rounded transition-all duration-300 group w-full sm:w-auto"
          >
            <span>Explore Entire Shop Catalog</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </section>
  );
}
