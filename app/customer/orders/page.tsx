'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SAMPLE_ORDERS } from '@/lib/mock-data';
import { formatCurrency, formatDate } from '@/lib/utils';
import { ShoppingBag, Clock, MapPin, QrCode, FileText, CheckCircle2, ChevronRight } from 'lucide-react';

export default function CustomerOrdersPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white border border-[#E5D9C5] p-6 rounded-xl shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#9A782D]">
              Customer Portal
            </span>
            <h1 className="font-serif text-2xl font-bold text-gray-900">My Showroom Orders</h1>
            <p className="text-xs text-gray-500">
              Track real-time Click & Collect order status and view digital pickup passes.
            </p>
          </div>
          <Link
            href="/shop"
            className="px-4 py-2 bg-[#111111] text-white text-xs font-semibold uppercase tracking-wider rounded hover:bg-[#C8A45D] transition-colors"
          >
            Explore Catalog
          </Link>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {SAMPLE_ORDERS.map((ord) => (
            <div
              key={ord.id}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs space-y-4 hover:border-[#C8A45D] transition-all"
            >
              {/* Top Meta */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-100 gap-2">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-serif font-bold text-base text-gray-900">{ord.orderNumber}</span>
                    <span className="text-xs font-semibold text-[#9A782D] bg-[#FDFBF7] px-2.5 py-0.5 rounded border border-[#E5D9C5]">
                      {ord.orderStatus.replace(/_/g, ' ')}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">Reserved on {formatDate(ord.createdAt)}</p>
                </div>

                <div className="text-left sm:text-right">
                  <p className="font-serif font-bold text-lg text-gray-900">{formatCurrency(ord.totalAmount)}</p>
                  <p className="text-xs text-gray-500">{ord.paymentMethod.replace(/_/g, ' ')}</p>
                </div>
              </div>

              {/* Items */}
              <div className="space-y-3">
                {ord.items.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-center">
                    <div className="relative w-16 h-20 rounded bg-gray-100 overflow-hidden shrink-0 border border-gray-200">
                      <Image src={item.productImage} alt={item.productName} fill className="object-cover" />
                    </div>
                    <div className="flex-1 text-xs">
                      <h4 className="font-serif font-bold text-gray-900">{item.productName}</h4>
                      <p className="text-gray-500">Size: {item.size} | Color: {item.color}</p>
                      <p className="text-[#9A782D] font-semibold">{formatCurrency(item.price)}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pickup Info Banner */}
              <div className="p-3 bg-[#FDFBF7] border border-[#E5D9C5] rounded text-xs text-gray-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#C8A45D]" />
                  <span>Scheduled Pickup: <strong>{ord.pickupDate} ({ord.pickupTimeSlot})</strong></span>
                </div>

                <Link
                  href={`/order-confirmation/${ord.orderNumber}?pass=${ord.qrPassCode}`}
                  className="text-[#9A782D] font-bold hover:underline flex items-center gap-1 shrink-0"
                >
                  <QrCode className="w-4 h-4" /> View Pickup Pass <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
