'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import VastramLogo from '@/components/ui/VastramLogo';
import { STORE_INFO, CATEGORIES } from '@/lib/mock-data';
import { MapPin, Phone, Mail, Clock, ArrowRight, ShieldCheck, CheckCircle2, Share2, Globe } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#111111] text-[#FAFAFA] pt-16 pb-8 border-t border-[#C8A45D]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-gray-800">
          {/* Col 1 & 2: Brand & Showroom Info */}
          <div className="lg:col-span-2 space-y-6">
            <VastramLogo showSubtitle={true} className="items-start" />
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Mangaluru's premier haute couture boutique. Exquisite bridal lehengas, handwoven Kanjeevaram silks, and bespoke designer ensembles available for Click & Collect store pickup.
            </p>

            <div className="space-y-3 text-xs text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C8A45D] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">{STORE_INFO.name} Showroom</p>
                  <p>{STORE_INFO.addressLine1}</p>
                  <p>{STORE_INFO.addressLine2}, {STORE_INFO.city}, {STORE_INFO.state} {STORE_INFO.pincode}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C8A45D] shrink-0" />
                <span>{STORE_INFO.phone}</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#C8A45D] shrink-0" />
                <span>Store Pickup: {STORE_INFO.pickupHours}</span>
              </div>
            </div>

            <a
              href={STORE_INFO.googleMapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#C8A45D]/60 hover:bg-[#C8A45D] hover:text-black text-[#E9D29D] text-xs font-semibold rounded transition-colors"
            >
              <MapPin className="w-3.5 h-3.5" /> Get Showroom Directions
            </a>
          </div>

          {/* Col 3: Collections */}
          <div className="space-y-4">
            <h3 className="font-serif text-sm font-semibold tracking-wider text-[#C8A45D] uppercase">
              Boutique Categories
            </h3>
            <ul className="space-y-2.5 text-xs text-gray-400">
              {CATEGORIES.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link href={`/category/${cat.slug}`} className="hover:text-[#E9D29D] transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/shop" className="text-[#C8A45D] hover:underline font-medium">
                  View All Products &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Click & Collect Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-sm font-semibold tracking-wider text-[#C8A45D] uppercase">
              Click & Collect
            </h3>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <Link href="/about" className="hover:text-[#E9D29D] transition-colors">
                  How Pickup Works
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#E9D29D] transition-colors">
                  Showroom Fitting Appointments
                </Link>
              </li>
              <li>
                <Link href="/customer/orders" className="hover:text-[#E9D29D] transition-colors">
                  Order Status & Pass Lookup
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#E9D29D] transition-colors">
                  Store Payment Options (Cash/UPI/Card)
                </Link>
              </li>
              <li>
                <Link href="/admin/dashboard" className="text-[#C8A45D] hover:underline font-semibold">
                  Admin Management Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Newsletter */}
          <div className="space-y-4">
            <h3 className="font-serif text-sm font-semibold tracking-wider text-[#C8A45D] uppercase">
              Vastram Private Circle
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Subscribe to receive exclusive previews of new bridal arrivals and private showroom event invitations.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#1A1A1A] border border-[#C8A45D]/60 rounded text-xs text-[#E9D29D] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                <span>Thank you for joining our private circle.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#1A1A1A] border border-gray-700 focus:border-[#C8A45D] text-xs px-3.5 py-2.5 rounded text-white placeholder:text-gray-500 focus:outline-hidden"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 bg-gradient-to-r from-[#C8A45D] to-[#9A782D] hover:from-[#9A782D] hover:to-[#C8A45D] text-black font-semibold text-xs uppercase tracking-widest rounded transition-all flex items-center justify-center gap-2"
                >
                  <span>Subscribe</span> <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <div className="pt-2 flex items-center gap-4 text-gray-400">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#C8A45D]" title="Instagram">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="https://vastram.fashion" target="_blank" rel="noreferrer" className="hover:text-[#C8A45D]" title="Official Website">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>&copy; {new Date().getFullYear()} VASTRAM Luxury Boutique. All Rights Reserved. Hampankatta, Mangaluru.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-gray-400">
              <ShieldCheck className="w-4 h-4 text-[#C8A45D]" /> 100% In-Store Pickup Guaranteed
            </span>
            <Link href="/contact" className="hover:text-[#C8A45D]">
              Privacy & Store Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
