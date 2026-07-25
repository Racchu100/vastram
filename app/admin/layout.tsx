'use client';

import React from 'react';
import Link from 'next/link';
import VastramLogo from '@/components/ui/VastramLogo';
import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  Users,
  Tag,
  Star,
  Settings,
  ArrowLeft,
  Sparkles,
  MapPin
} from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F4F4F5] flex flex-col md:flex-row">
      {/* Admin Sidebar */}
      <aside className="w-full md:w-64 bg-[#111111] text-white p-6 flex flex-col justify-between border-r border-[#C8A45D]/30 shrink-0">
        <div className="space-y-8">
          {/* Logo & Portal Tag */}
          <div className="space-y-2">
            <VastramLogo showSubtitle={false} />
            <div className="pt-2 text-[10px] tracking-widest text-[#E9D29D] font-semibold uppercase flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#C8A45D]" /> Showroom Admin Portal
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1 text-xs font-semibold uppercase tracking-wider">
            <Link
              href="/admin/dashboard"
              className="flex items-center gap-3 px-3 py-2.5 rounded text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <LayoutDashboard className="w-4 h-4 text-[#C8A45D]" />
              <span>Dashboard Overview</span>
            </Link>

            <Link
              href="/admin/orders"
              className="flex items-center gap-3 px-3 py-2.5 rounded text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <ShoppingBag className="w-4 h-4 text-[#C8A45D]" />
              <span>Pickup Orders</span>
            </Link>

            <Link
              href="/admin/products"
              className="flex items-center gap-3 px-3 py-2.5 rounded text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Package className="w-4 h-4 text-[#C8A45D]" />
              <span>Products & Inventory</span>
            </Link>

            <Link
              href="/admin/customers"
              className="flex items-center gap-3 px-3 py-2.5 rounded text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Users className="w-4 h-4 text-[#C8A45D]" />
              <span>Customers & VIPs</span>
            </Link>
          </nav>
        </div>

        {/* Bottom Back Button */}
        <div className="pt-6 border-t border-gray-800">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs text-gray-400 hover:text-[#C8A45D] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Storefront
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 sm:p-10 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
