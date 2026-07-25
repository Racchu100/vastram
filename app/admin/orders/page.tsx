'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SAMPLE_ORDERS } from '@/lib/mock-data';
import { formatCurrency } from '@/lib/utils';
import { OrderStatus } from '@/types';
import { Search, Printer, MapPin, Clock, QrCode } from 'lucide-react';

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState(SAMPLE_ORDERS);
  const [search, setSearch] = useState('');

  const filtered = orders.filter(
    (o) =>
      o.orderNumber.toLowerCase().includes(search.toLowerCase()) ||
      o.customerName.toLowerCase().includes(search.toLowerCase()) ||
      o.qrPassCode.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl font-bold text-gray-900">Click & Collect Orders</h1>
          <p className="text-xs text-gray-500">Scan QR passes or search orders for showroom verification.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-xs p-6 space-y-4">
        <div className="relative max-w-sm">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by Order #, Pass Code or Client Name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-[#FAFAFA] border border-gray-300 rounded text-xs focus:outline-hidden"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-gray-700">
            <thead className="bg-[#FAFAFA] border-b border-gray-200 text-[11px] uppercase tracking-wider text-gray-500 font-semibold">
              <tr>
                <th className="p-3">Order Ref</th>
                <th className="p-3">Customer</th>
                <th className="p-3">Schedule</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-right">Pass</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.map((ord) => (
                <tr key={ord.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-3 font-mono font-bold text-gray-900">{ord.orderNumber}</td>
                  <td className="p-3 font-medium text-gray-900">{ord.customerName}</td>
                  <td className="p-3">{ord.pickupDate} ({ord.pickupTimeSlot})</td>
                  <td className="p-3 font-bold text-[#9A782D]">{formatCurrency(ord.totalAmount)}</td>
                  <td className="p-3 font-semibold text-[#111111]">{ord.orderStatus}</td>
                  <td className="p-3 text-right">
                    <Link
                      href={`/order-confirmation/${ord.orderNumber}?pass=${ord.qrPassCode}`}
                      target="_blank"
                      className="px-3 py-1 bg-[#111111] text-white hover:bg-[#C8A45D] hover:text-black rounded text-[10px] font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-1"
                    >
                      <QrCode className="w-3 h-3 text-[#C8A45D]" /> Print Pass
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
