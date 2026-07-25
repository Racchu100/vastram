'use client';

import React from 'react';
import { STORE_INFO } from '@/lib/mock-data';
import { MapPin, Clock, ShieldCheck, Sparkles, Scissors } from 'lucide-react';

export default function PickupNoticeBanner() {
  return (
    <div className="bg-[#FDFBF7] border-y border-[#E5D9C5] py-8 px-4 my-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
        {/* Step 1 */}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-[#111111] text-[#E9D29D] flex items-center justify-center shrink-0 border border-[#C8A45D]/60 shadow-xs font-serif font-bold text-sm">
            1
          </div>
          <div>
            <h4 className="font-serif text-sm font-bold text-gray-900 flex items-center gap-1.5 justify-center md:justify-start">
              Browse & Reserve Online
            </h4>
            <p className="text-xs text-gray-600 mt-1 leading-relaxed">
              Explore our luxury bridal, saree, and gown collections online and reserve your sizes.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-[#111111] text-[#E9D29D] flex items-center justify-center shrink-0 border border-[#C8A45D]/60 shadow-xs font-serif font-bold text-sm">
            2
          </div>
          <div>
            <h4 className="font-serif text-sm font-bold text-gray-900 flex items-center gap-1.5 justify-center md:justify-start">
              Select Pickup Time Slot
            </h4>
            <p className="text-xs text-gray-600 mt-1 leading-relaxed">
              Choose a convenient date & time for your showroom visit in Hampankatta, Mangaluru.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-[#111111] text-[#E9D29D] flex items-center justify-center shrink-0 border border-[#C8A45D]/60 shadow-xs font-serif font-bold text-sm">
            3
          </div>
          <div>
            <h4 className="font-serif text-sm font-bold text-gray-900 flex items-center gap-1.5 justify-center md:justify-start">
              Trial & Custom Fitting <Scissors className="w-3.5 h-3.5 text-[#C8A45D]" />
            </h4>
            <p className="text-xs text-gray-600 mt-1 leading-relaxed">
              Experience our luxury trial fitting rooms with complimentary alteration support.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-[#111111] text-[#E9D29D] flex items-center justify-center shrink-0 border border-[#C8A45D]/60 shadow-xs font-serif font-bold text-sm">
            4
          </div>
          <div>
            <h4 className="font-serif text-sm font-bold text-gray-900 flex items-center gap-1.5 justify-center md:justify-start">
              Pay at Showroom & Collect
            </h4>
            <p className="text-xs text-gray-600 mt-1 leading-relaxed">
              Pay using Cash, UPI, or Credit Card when you inspect and collect your order.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
