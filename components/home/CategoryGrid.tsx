'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CATEGORIES } from '@/lib/mock-data';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function CategoryGrid() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Heading */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#9A782D] flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A45D]" /> Exclusive Collections
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111]">
            Curated Couture Categories
          </h2>
          <div className="w-16 h-0.5 bg-[#C8A45D] mx-auto rounded-full" />
          <p className="text-xs sm:text-sm text-gray-600 font-light">
            Discover artisanal Indian heritage wear and western luxury silhouettes, handcrafted for extraordinary moments.
          </p>
        </div>

        {/* Categories Visual Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, idx) => (
            <Link
              key={cat.id}
              href={`/category/${cat.slug}`}
              className="group relative h-96 rounded-lg overflow-hidden border border-[#E8E8E8] shadow-sm hover:shadow-2xl hover:border-[#C8A45D] transition-all duration-500"
            >
              {/* Category Image */}
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-6 flex flex-col justify-end text-white">
                <div className="flex items-center justify-between text-[#E9D29D] text-[10px] uppercase font-semibold tracking-widest mb-1">
                  <span>Collection</span>
                  <span>{cat.productCount} Designs</span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#E9D29D] transition-colors flex items-center justify-between">
                  <span>{cat.name}</span>
                  <ArrowUpRight className="w-5 h-5 text-[#C8A45D] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>

                <p className="text-xs text-gray-300 font-light line-clamp-2 mt-2 opacity-90">
                  {cat.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
