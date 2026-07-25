'use client';

import React, { useState, useMemo } from 'react';
import ProductCard from '@/components/ui/ProductCard';
import QuickViewModal from '@/components/shop/QuickViewModal';
import CompareDrawer from '@/components/shop/CompareDrawer';
import { PRODUCTS, CATEGORIES } from '@/lib/mock-data';
import { Product, SizeCategory, FabricType } from '@/types';
import { useCompareStore } from '@/store/useCompareStore';
import { Filter, SlidersHorizontal, Search, RotateCcw, Sparkles, Scale, X } from 'lucide-react';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedFabric, setSelectedFabric] = useState<string>('all');
  const [selectedSize, setSelectedSize] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<number>(200000);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'newest'>('featured');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isFilterMobileOpen, setIsFilterMobileOpen] = useState(false);

  const { items: compareItems, clearCompare } = useCompareStore();

  const fabrics: FabricType[] = [
    'Pure Silk',
    'Kanjeevaram Silk',
    'Organza Silk',
    'Chiffon',
    'Georgette',
    'Velvet',
    'Raw Silk'
  ];

  const sizes: SizeCategory[] = ['XS', 'S', 'M', 'L', 'XL', '2XL', 'Custom Fit'];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.categorySlug !== selectedCategory) {
        return false;
      }
      // Fabric filter
      if (selectedFabric !== 'all' && product.fabricDetails !== selectedFabric) {
        return false;
      }
      // Size filter
      if (selectedSize !== 'all' && !product.availableSizes.includes(selectedSize as SizeCategory)) {
        return false;
      }
      // Price filter
      const price = product.offerPrice ?? product.price;
      if (price > priceRange) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesFabric = product.fabricDetails.toLowerCase().includes(q);
        const matchesCat = product.category.toLowerCase().includes(q);
        if (!matchesName && !matchesFabric && !matchesCat) return false;
      }
      return true;
    }).sort((a, b) => {
      const priceA = a.offerPrice ?? a.price;
      const priceB = b.offerPrice ?? b.price;
      if (sortBy === 'price-low') return priceA - priceB;
      if (sortBy === 'price-high') return priceB - priceA;
      if (sortBy === 'newest') return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      return b.rating - a.rating;
    });
  }, [selectedCategory, selectedFabric, selectedSize, priceRange, searchQuery, sortBy]);

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedFabric('all');
    setSelectedSize('all');
    setPriceRange(200000);
    setSearchQuery('');
    setSortBy('featured');
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen py-8 sm:py-12 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        {/* Header */}
        <div className="bg-white border border-[#E5D9C5] p-6 sm:p-8 rounded-xl shadow-xs text-center space-y-3 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#C8A45D]/10 rounded-full blur-2xl pointer-events-none" />
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#9A782D] flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A45D]" /> Exclusive Showroom Catalog
          </span>
          <h1 className="font-serif text-2xl sm:text-4xl font-bold text-[#111111]">
            VASTRAM Luxury Boutique Shop
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 font-light max-w-xl mx-auto">
            Browse our full range of bridal lehengas, pure silk sarees, and evening wear. All items are reserved online and collected directly from our Hampankatta showroom.
          </p>
        </div>

        {/* Top Controls Bar */}
        <div className="bg-white p-3.5 sm:p-4 rounded-lg border border-gray-200 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4 shadow-xs overflow-hidden">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by title, silk type, or work..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-[#FAFAFA] border border-gray-300 rounded text-xs text-gray-900 focus:outline-hidden focus:border-[#C8A45D]"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-4 w-full md:w-auto justify-between md:justify-end">
            {/* Mobile Filter Toggle Button */}
            <button
              onClick={() => setIsFilterMobileOpen(!isFilterMobileOpen)}
              className="md:hidden flex items-center gap-1.5 px-3 py-2 bg-[#111111] text-white text-xs font-semibold rounded shrink-0"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#C8A45D]" /> Filters
            </button>

            {/* Product Compare Counter */}
            {compareItems.length > 0 && (
              <span className="text-xs text-[#9A782D] font-semibold flex items-center gap-1">
                <Scale className="w-3.5 h-3.5" /> Compare ({compareItems.length}/4)
              </span>
            )}

            {/* Sort Dropdown */}
            <div className="flex items-center gap-1.5 text-xs shrink-0 max-w-[210px] sm:max-w-none">
              <span className="text-gray-500 font-medium whitespace-nowrap">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#FAFAFA] border border-gray-300 rounded text-xs px-2 sm:px-3 py-2 text-gray-800 focus:outline-hidden focus:border-[#C8A45D] truncate max-w-[140px] sm:max-w-none"
              >
                <option value="featured">Featured & Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">New Arrivals First</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          {/* Sidebar Filters (Desktop & Mobile Drawer) */}
          <aside className={`md:col-span-3 bg-white p-5 sm:p-6 rounded-xl border border-gray-200 space-y-6 h-fit ${
            isFilterMobileOpen ? 'fixed inset-0 z-50 overflow-y-auto rounded-none border-none p-6' : 'hidden md:block'
          }`}>
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <h3 className="font-serif text-base font-bold text-gray-900 flex items-center gap-2">
                <Filter className="w-4 h-4 text-[#C8A45D]" /> Filter Collection
              </h3>
              <div className="flex items-center gap-3">
                <button
                  onClick={resetFilters}
                  className="text-[11px] text-[#9A782D] hover:underline font-semibold flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" /> Reset
                </button>
                {isFilterMobileOpen && (
                  <button onClick={() => setIsFilterMobileOpen(false)} className="md:hidden p-1 text-gray-500">
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase text-gray-700 tracking-wider">
                Category
              </label>
              <div className="space-y-1 text-xs">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`w-full text-left px-3 py-2 rounded transition-colors ${
                    selectedCategory === 'all'
                      ? 'bg-[#111111] text-white font-semibold'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  All Categories ({PRODUCTS.length})
                </button>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`w-full text-left px-3 py-2 rounded transition-colors flex items-center justify-between ${
                      selectedCategory === cat.slug
                        ? 'bg-[#111111] text-[#E9D29D] font-semibold'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className="text-[10px] opacity-70">({cat.productCount})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Fabric Filter */}
            <div className="space-y-2 pt-4 border-t border-gray-100">
              <label className="text-xs font-semibold uppercase text-gray-700 tracking-wider">
                Fabric Material
              </label>
              <select
                value={selectedFabric}
                onChange={(e) => setSelectedFabric(e.target.value)}
                className="w-full bg-[#FAFAFA] border border-gray-300 rounded text-xs p-2.5 text-gray-800 focus:outline-hidden"
              >
                <option value="all">All Fabrics</option>
                {fabrics.map((fab) => (
                  <option key={fab} value={fab}>{fab}</option>
                ))}
              </select>
            </div>

            {/* Size Filter */}
            <div className="space-y-2 pt-4 border-t border-gray-100">
              <label className="text-xs font-semibold uppercase text-gray-700 tracking-wider">
                Available Size
              </label>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => setSelectedSize('all')}
                  className={`px-2.5 py-1 text-xs rounded border ${
                    selectedSize === 'all' ? 'bg-[#111111] text-white' : 'border-gray-200 text-gray-700'
                  }`}
                >
                  All
                </button>
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`px-2.5 py-1 text-xs rounded border ${
                      selectedSize === s ? 'bg-[#111111] text-white' : 'border-gray-200 text-gray-700'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="space-y-2 pt-4 border-t border-gray-100">
              <div className="flex justify-between text-xs font-semibold text-gray-700">
                <span>Max Price</span>
                <span className="text-[#9A782D]">₹{priceRange.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={20000}
                max={200000}
                step={5000}
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full accent-[#C8A45D]"
              />
            </div>

            {isFilterMobileOpen && (
              <button
                onClick={() => setIsFilterMobileOpen(false)}
                className="w-full py-3 bg-[#111111] text-white text-xs font-semibold uppercase tracking-wider rounded"
              >
                Apply Filters
              </button>
            )}
          </aside>

          {/* Products Grid - 2 columns on mobile */}
          <main className="md:col-span-9 space-y-6">
            {filteredProducts.length === 0 ? (
              <div className="bg-white border border-gray-200 rounded-xl p-12 text-center text-gray-500 space-y-4">
                <p className="font-serif text-xl font-bold text-gray-800">No matching pieces found</p>
                <p className="text-xs text-gray-500">Try adjusting your fabric, size, or price range filters.</p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-2.5 bg-[#111111] text-white text-xs font-semibold uppercase tracking-wider rounded hover:bg-[#C8A45D] transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQuickView={(p) => setQuickViewProduct(p)}
                  />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />

      {/* Product Compare Drawer */}
      <CompareDrawer />
    </div>
  );
}
