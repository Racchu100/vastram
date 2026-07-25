'use client';

import React from 'react';
import { STORE_INFO } from '@/lib/mock-data';
import { MapPin, Phone, Clock, Mail, ExternalLink, Navigation, Sparkles } from 'lucide-react';

export default function StoreLocationCard() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-[#FDFBF7] border-y border-[#E5D9C5]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Info Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111111] text-[#E9D29D] rounded-full text-[10px] font-bold tracking-widest uppercase border border-[#C8A45D]/40">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A45D]" /> Hampankatta Flagship Store
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111] leading-tight">
            Visit VASTRAM Flagship Showroom in Mangaluru
          </h2>

          <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
            Experience our private bridal trial suites, feel our pure Kanjeevaram silks, and receive personalized styling consultations with master tailors on site.
          </p>

          <div className="space-y-4 pt-2">
            <div className="flex items-start gap-3.5 text-xs text-gray-700">
              <MapPin className="w-5 h-5 text-[#C8A45D] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900 text-sm">{STORE_INFO.name} Boutique</p>
                <p>{STORE_INFO.addressLine1}</p>
                <p>{STORE_INFO.addressLine2}</p>
                <p>{STORE_INFO.city}, {STORE_INFO.state} {STORE_INFO.pincode}</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 text-xs text-gray-700">
              <Clock className="w-5 h-5 text-[#C8A45D] shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">Showroom Pickup Hours</p>
                <p>{STORE_INFO.pickupHours}</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 text-xs text-gray-700">
              <Phone className="w-5 h-5 text-[#C8A45D] shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">Direct Showroom Line</p>
                <p>{STORE_INFO.phone}</p>
              </div>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <a
              href={STORE_INFO.googleMapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#111111] hover:bg-[#C8A45D] text-white hover:text-black font-semibold text-xs uppercase tracking-wider rounded transition-colors flex items-center gap-2 shadow-md"
            >
              <Navigation className="w-4 h-4 text-[#C8A45D]" /> Open Google Maps Directions
            </a>
          </div>
        </div>

        {/* Embedded Map Column */}
        <div className="lg:col-span-7 h-96 sm:h-[450px] rounded-xl overflow-hidden border-2 border-[#E5D9C5] shadow-xl relative">
          <iframe
            title="VASTRAM Store Location Mangaluru"
            src={STORE_INFO.googleMapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
}
