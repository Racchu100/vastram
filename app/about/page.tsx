'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PickupNoticeBanner from '@/components/ui/PickupNoticeBanner';
import { STORE_INFO } from '@/lib/mock-data';
import { Sparkles, MapPin, Award, Heart, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Story Hero */}
        <div className="bg-white border border-[#E5D9C5] rounded-2xl p-8 sm:p-12 shadow-sm text-center space-y-4 relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111111] text-[#E9D29D] rounded-full text-[10px] font-bold tracking-widest uppercase border border-[#C8A45D]/40">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A45D]" /> The VASTRAM Legacy
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#111111]">
            Curating Royal Elegance for Mangaluru
          </h1>
          <p className="text-sm sm:text-base text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            Located in Hampankatta, VASTRAM represents the pinnacle of Indian luxury couture, bringing handcrafted bridal lehengas, pure Kanjeevaram silks, and bespoke evening gowns under one prestigious roof.
          </p>
        </div>

        {/* Section 2: Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-4/3 rounded-xl overflow-hidden shadow-xl border border-gray-200">
            <Image
              src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=1000"
              alt="Vastram Heritage"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9A782D]">
              Our Atelier Story
            </span>
            <h2 className="font-serif text-3xl font-bold text-gray-900">
              Where Master Artisans Meet Contemporary Fashion
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
              Every saree and bridal ensemble at VASTRAM is sourced directly from heritage weaver clusters in Kanchipuram, Banaras, and Jaipur. Our Click & Collect model ensures each client experiences intimate trial consultations in our private fitting suites.
            </p>
            <div className="space-y-3 pt-2 text-xs font-medium text-gray-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C8A45D]" /> 100% Certified Pure Silk Zari Weaving
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C8A45D]" /> In-House Master Tailors for Custom Alterations
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C8A45D]" /> Private Bridal & Couture Fitting Suites
              </div>
            </div>
          </div>
        </div>

        {/* Explainer Banner */}
        <PickupNoticeBanner />
      </div>
    </div>
  );
}
