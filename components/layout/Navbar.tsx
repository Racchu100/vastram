'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import VastramLogo from '@/components/ui/VastramLogo';
import MegaMenu from './MegaMenu';
import CartDrawer from '../cart/CartDrawer';
import { useCartStore } from '@/store/useCartStore';
import { useWishlistStore } from '@/store/useWishlistStore';
import { STORE_INFO } from '@/lib/mock-data';
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  Phone,
  Clock,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  MessageSquare,
  MapPin
} from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const cartItemCount = useCartStore((state) => state.getItemCount());
  const wishlistItems = useWishlistStore((state) => state.items);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const displayCartCount = isMounted ? cartItemCount : 0;
  const displayWishlistCount = isMounted ? wishlistItems.length : 0;

  return (
    <header className="sticky top-0 z-40 w-full bg-white transition-all duration-300">
      {/* 1. Top Announcement Bar */}
      <div className="w-full bg-[#111111] text-[#FAFAFA] text-[10px] sm:text-[11px] font-medium py-1.5 px-3 border-b border-[#C8A45D]/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-2">
          {/* Left: Pickup Notice */}
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <span className="bg-[#C8A45D] text-black text-[8.5px] sm:text-[9px] font-bold uppercase px-1.5 py-0.5 rounded tracking-wider shrink-0">
              Click & Collect
            </span>
            <span className="text-[#E9D29D] truncate max-w-[280px] sm:max-w-none">
              Store Pickup • Hampankatta, Mangaluru
            </span>
          </div>

          {/* Right: Phone & Timing */}
          <div className="flex items-center gap-4 text-gray-300 text-[10px]">
            <a
              href={`tel:${STORE_INFO.phone}`}
              className="hover:text-[#C8A45D] transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-[#C8A45D]" />
              <span>{STORE_INFO.phone}</span>
            </a>
            <div className="hidden md:flex items-center gap-1.5 border-l border-gray-700 pl-3">
              <Clock className="w-3 h-3 text-[#C8A45D]" />
              <span>{STORE_INFO.pickupHours}</span>
            </div>
            <a
              href={`https://wa.me/${STORE_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1 text-green-400 hover:text-green-300 transition-colors border-l border-gray-700 pl-3"
            >
              <MessageSquare className="w-3 h-3" />
              <span>Concierge</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 border-b border-[#E8E8E8] ${
          isScrolled ? 'py-2.5 shadow-md bg-white/95 backdrop-blur-md' : 'py-3 bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 flex items-center justify-between gap-2 sm:gap-6">
          {/* Left Corner: Mobile Menu Button & Brand Logo */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-1.5 text-gray-700 hover:text-[#C8A45D] transition-colors rounded"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>

            <VastramLogo className="items-start" />
          </div>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-semibold tracking-wider text-gray-800 uppercase">
            <Link href="/" className="hover:text-[#C8A45D] transition-colors py-2">
              Home
            </Link>
            <div
              className="relative py-2 cursor-pointer group"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
            >
              <span className="hover:text-[#C8A45D] transition-colors flex items-center gap-1">
                Collections <ChevronDown className="w-3 h-3 text-[#C8A45D]" />
              </span>
            </div>
            <Link href="/category/bridal" className="hover:text-[#C8A45D] transition-colors py-2 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#C8A45D]" /> Bridal
            </Link>
            <Link href="/category/sarees" className="hover:text-[#C8A45D] transition-colors py-2">
              Heritage Sarees
            </Link>
            <Link href="/category/lehengas" className="hover:text-[#C8A45D] transition-colors py-2">
              Lehengas
            </Link>
            <Link href="/about" className="hover:text-[#C8A45D] transition-colors py-2">
              About
            </Link>
            <Link href="/contact" className="hover:text-[#C8A45D] transition-colors py-2">
              Store Location
            </Link>
          </nav>

          {/* Right Corner: Action Icons */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-1.5 sm:p-2 text-gray-700 hover:text-[#C8A45D] transition-colors relative"
              title="Search Collection"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Wishlist Button */}
            <Link
              href="/customer/wishlist"
              className="p-1.5 sm:p-2 text-gray-700 hover:text-[#C8A45D] transition-colors relative hidden sm:block"
              title="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {displayWishlistCount > 0 && (
                <span className="absolute top-1 right-1 bg-[#C8A45D] text-black font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {displayWishlistCount}
                </span>
              )}
            </Link>

            {/* Customer Account */}
            <Link
              href="/customer/profile"
              className="p-1.5 sm:p-2 text-gray-700 hover:text-[#C8A45D] transition-colors hidden sm:block"
              title="Customer Account"
            >
              <User className="w-5 h-5" />
            </Link>

            {/* Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 bg-[#111111] hover:bg-[#C8A45D] text-white rounded transition-all duration-300 shadow-sm"
              aria-label="Open cart"
            >
              <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E9D29D]" />
              <span className="text-[11px] sm:text-xs font-semibold hidden md:inline">Bag</span>
              <span className="bg-[#C8A45D] text-black text-[9px] sm:text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                {displayCartCount}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. Dropdown Search Bar Overlay */}
      {isSearchOpen && (
        <div className="bg-[#FAFAFA] border-b border-[#E5D9C5] py-3 px-4 sm:px-6 animate-in slide-in-from-top duration-200">
          <div className="max-w-3xl mx-auto flex items-center gap-3">
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#C8A45D]" />
            <input
              type="text"
              placeholder="Search Bridal Lehengas, Kanjeevaram Sarees, Gowns, Kurtis..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-b border-[#C8A45D] focus:outline-hidden text-xs sm:text-sm py-1.5 text-gray-900 placeholder:text-gray-400"
              autoFocus
            />
            <button
              onClick={() => setIsSearchOpen(false)}
              className="text-xs font-semibold uppercase text-gray-500 hover:text-black shrink-0"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* 4. Mega Menu Dropdown Component */}
      <MegaMenu isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} />

      {/* 5. Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex">
          <div className="w-4/5 max-w-xs sm:max-w-sm bg-white h-full flex flex-col justify-between p-5 overflow-y-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <VastramLogo showSubtitle={false} />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 text-gray-500 hover:text-black"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="space-y-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-gray-800">
                <Link
                  href="/"
                  className="block hover:text-[#C8A45D]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/shop"
                  className="block hover:text-[#C8A45D]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Shop All Collections
                </Link>
                <Link
                  href="/category/bridal"
                  className="block text-[#9A782D] hover:underline"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Bridal Couture
                </Link>
                <Link
                  href="/category/sarees"
                  className="block hover:text-[#C8A45D]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Heritage Sarees
                </Link>
                <Link
                  href="/category/lehengas"
                  className="block hover:text-[#C8A45D]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Designer Lehengas
                </Link>
                <Link
                  href="/category/gowns"
                  className="block hover:text-[#C8A45D]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Evening Gowns
                </Link>
                <Link
                  href="/category/indo-western"
                  className="block hover:text-[#C8A45D]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Indo-Western
                </Link>
                <Link
                  href="/about"
                  className="block hover:text-[#C8A45D]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Store Story
                </Link>
                <Link
                  href="/contact"
                  className="block hover:text-[#C8A45D]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Showroom Directions
                </Link>
                <Link
                  href="/admin/dashboard"
                  className="block text-[#C8A45D] font-bold border-t border-gray-100 pt-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Admin Portal
                </Link>
              </nav>
            </div>

            <div className="pt-4 border-t border-gray-100 text-[11px] text-gray-500 space-y-1.5">
              <p className="flex items-center gap-1.5 text-gray-800 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#C8A45D]" /> Hampankatta, Mangaluru
              </p>
              <p className="pl-5">{STORE_INFO.addressLine1}</p>
              <p className="pl-5">{STORE_INFO.phone}</p>
            </div>
          </div>
        </div>
      )}

      {/* 6. Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}
