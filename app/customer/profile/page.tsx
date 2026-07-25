'use client';

import React from 'react';
import Link from 'next/link';
import { SAMPLE_CUSTOMERS } from '@/lib/mock-data';
import { User, Award, ShoppingBag, Heart, ShieldCheck, MapPin, Phone, Mail } from 'lucide-react';

export default function CustomerProfilePage() {
  const profile = SAMPLE_CUSTOMERS[0];

  return (
    <div className="bg-[#FAFAFA] min-h-screen py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Profile Card */}
        <div className="bg-white border border-[#E5D9C5] rounded-xl p-8 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#111111] text-[#E9D29D] font-serif font-bold text-2xl flex items-center justify-center border-2 border-[#C8A45D]">
              {profile.name[0]}
            </div>
            <div>
              <span className="bg-[#C8A45D] text-black font-bold text-[10px] uppercase px-2 py-0.5 rounded tracking-widest">
                {profile.status} MEMBER
              </span>
              <h1 className="font-serif text-2xl font-bold text-gray-900 mt-1">{profile.name}</h1>
              <p className="text-xs text-gray-500">{profile.email} • {profile.phone}</p>
            </div>
          </div>

          <div className="bg-[#FDFBF7] p-4 rounded-lg border border-[#E5D9C5] text-center shrink-0">
            <span className="text-xs text-gray-500 block">Vastram Royalty Points</span>
            <span className="font-serif text-2xl font-bold text-[#9A782D] flex items-center justify-center gap-1">
              <Award className="w-5 h-5 text-[#C8A45D]" /> {profile.loyaltyPoints}
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/customer/orders"
            className="p-6 bg-white border border-gray-200 hover:border-[#C8A45D] rounded-xl shadow-xs transition-all space-y-2 group"
          >
            <ShoppingBag className="w-6 h-6 text-[#C8A45D]" />
            <h3 className="font-serif text-lg font-bold text-gray-900 group-hover:text-[#C8A45D]">
              Showroom Orders & Passes
            </h3>
            <p className="text-xs text-gray-500">View active pickup reservations and download invoices.</p>
          </Link>

          <Link
            href="/customer/wishlist"
            className="p-6 bg-white border border-gray-200 hover:border-[#C8A45D] rounded-xl shadow-xs transition-all space-y-2 group"
          >
            <Heart className="w-6 h-6 text-[#C8A45D]" />
            <h3 className="font-serif text-lg font-bold text-gray-900 group-hover:text-[#C8A45D]">
              Saved Wishlist Vault
            </h3>
            <p className="text-xs text-gray-500">Access your saved bridal and saree items.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
