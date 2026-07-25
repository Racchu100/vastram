'use client';

import React from 'react';
import { SAMPLE_REVIEWS } from '@/lib/mock-data';
import { Star, Quote, CheckCircle2, Sparkles } from 'lucide-react';

export default function TestimonialSection() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#9A782D] flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A45D]" /> Client Experiences
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111]">
            Why Customers Love VASTRAM
          </h2>
          <div className="w-16 h-0.5 bg-[#C8A45D] mx-auto rounded-full" />
          <p className="text-xs sm:text-sm text-gray-500 font-light">
            Read real feedback from our Mangaluru boutique patrons.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SAMPLE_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#FAFAFA] border border-[#E8E8E8] hover:border-[#C8A45D] p-8 rounded-xl shadow-xs transition-all duration-300 relative space-y-4"
            >
              <Quote className="w-8 h-8 text-[#C8A45D]/40 absolute top-6 right-6" />

              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>

              <h4 className="font-serif text-lg font-bold text-gray-900">
                "{rev.title}"
              </h4>

              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                {rev.comment}
              </p>

              <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                <div>
                  <h5 className="font-serif text-sm font-semibold text-gray-900">{rev.customerName}</h5>
                  <p className="text-[11px] text-gray-400">{rev.customerLocation}</p>
                </div>

                <span className="text-[10px] text-green-700 bg-green-50 px-2 py-0.5 rounded flex items-center gap-1 border border-green-200">
                  <CheckCircle2 className="w-3 h-3 text-green-600" /> Verified Store Pickup
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
