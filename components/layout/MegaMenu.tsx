'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CATEGORIES, PRODUCTS } from '@/lib/mock-data';
import { ArrowRight, Sparkles } from 'lucide-react';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  if (!isOpen) return null;

  const featuredBridal = PRODUCTS.find((p) => p.isBridal) || PRODUCTS[0];
  const featuredKanjeevaram = PRODUCTS.find((p) => p.categorySlug === 'sarees') || PRODUCTS[1];

  return (
    <div
      className="absolute top-full left-0 w-full bg-white border-b border-[#E5D9C5] shadow-2xl z-40 transition-all duration-300 animate-in fade-in slide-in-from-top-2"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Main Category Columns */}
          <div className="col-span-3 border-r border-gray-100 pr-6">
            <h3 className="font-serif text-sm font-semibold tracking-wider text-[#9A782D] uppercase mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C8A45D]" /> Couture Categories
            </h3>
            <ul className="space-y-2.5 text-sm">
              {CATEGORIES.slice(0, 5).map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className="flex items-center justify-between text-gray-700 hover:text-[#C8A45D] hover:translate-x-1 transition-all py-1 font-medium"
                    onClick={onClose}
                  >
                    <span>{cat.name}</span>
                    <span className="text-xs text-gray-400 font-normal">({cat.productCount})</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-3 border-r border-gray-100 pr-6">
            <h3 className="font-serif text-sm font-semibold tracking-wider text-[#9A782D] uppercase mb-4">
              Occasions & Edits
            </h3>
            <ul className="space-y-2.5 text-sm">
              {CATEGORIES.slice(5).map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className="flex items-center justify-between text-gray-700 hover:text-[#C8A45D] hover:translate-x-1 transition-all py-1 font-medium"
                    onClick={onClose}
                  >
                    <span>{cat.name}</span>
                    <span className="text-xs text-gray-400 font-normal">({cat.productCount})</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/shop?sort=newest"
                  className="inline-flex items-center text-[#9A782D] hover:underline font-medium pt-2"
                  onClick={onClose}
                >
                  View All Collections <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Spotlight Luxury Cards */}
          <div className="col-span-3">
            <div className="group relative h-56 rounded-lg overflow-hidden border border-[#E5D9C5]/60 shadow-sm">
              <Image
                src={featuredBridal.images[0]}
                alt={featuredBridal.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 flex flex-col justify-end text-white">
                <span className="text-[10px] tracking-widest text-[#E9D29D] uppercase font-semibold">Bridal Spotlight</span>
                <h4 className="font-serif text-sm font-medium leading-snug line-clamp-1">{featuredBridal.name}</h4>
                <Link
                  href={`/product/${featuredBridal.slug}`}
                  className="mt-2 inline-flex items-center text-xs text-[#E9D29D] font-medium hover:underline"
                  onClick={onClose}
                >
                  Explore Piece <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-span-3">
            <div className="group relative h-56 rounded-lg overflow-hidden border border-[#E5D9C5]/60 shadow-sm">
              <Image
                src={featuredKanjeevaram.images[0]}
                alt={featuredKanjeevaram.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 flex flex-col justify-end text-white">
                <span className="text-[10px] tracking-widest text-[#E9D29D] uppercase font-semibold">Heritage Silks</span>
                <h4 className="font-serif text-sm font-medium leading-snug line-clamp-1">{featuredKanjeevaram.name}</h4>
                <Link
                  href={`/product/${featuredKanjeevaram.slug}`}
                  className="mt-2 inline-flex items-center text-xs text-[#E9D29D] font-medium hover:underline"
                  onClick={onClose}
                >
                  Reserve for Pickup <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
