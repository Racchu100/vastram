'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SAMPLE_ORDERS, PRODUCTS } from '@/lib/mock-data';
import { formatCurrency, formatDate } from '@/lib/utils';
import { OrderStatus } from '@/types';
import {
  ShoppingBag,
  TrendingUp,
  AlertTriangle,
  Users,
  CheckCircle2,
  Clock,
  Printer,
  QrCode,
  MapPin,
  Sparkles
} from 'lucide-react';

export default function AdminDashboardPage() {
  const [orders, setOrders] = useState(SAMPLE_ORDERS);

  const handleStatusChange = (orderId: string, newStatus: OrderStatus) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, orderStatus: newStatus } : o))
    );
  };

  const lowStockProducts = PRODUCTS.filter((p) => p.stockCount <= 3);

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase text-[#9A782D] tracking-wider flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A45D]" /> Hampankatta Flagship Control
          </span>
          <h1 className="font-serif text-2xl font-bold text-gray-900">Showroom Analytics & Orders</h1>
          <p className="text-xs text-gray-500">
            Real-time management for Click & Collect store pickups in Mangaluru.
          </p>
        </div>

        <Link
          href="/admin/products"
          className="px-4 py-2.5 bg-[#111111] hover:bg-[#C8A45D] text-white hover:text-black font-semibold text-xs uppercase tracking-wider rounded transition-colors"
        >
          Add New Product Piece
        </Link>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500 font-medium">Scheduled Pickups Today</span>
            <div className="p-2 bg-amber-50 text-[#9A782D] rounded-full">
              <Clock className="w-5 h-5" />
            </div>
          </div>
          <p className="font-serif text-3xl font-bold text-gray-900">8 Orders</p>
          <span className="text-[11px] text-green-600 font-semibold">+2 vs yesterday</span>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500 font-medium">Monthly Store Sales</span>
            <div className="p-2 bg-green-50 text-green-600 rounded-full">
              <TrendingUp className="w-5 h-5" />
            </div>
          </div>
          <p className="font-serif text-3xl font-bold text-gray-900">₹4,85,000</p>
          <span className="text-[11px] text-green-600 font-semibold">100% In-Store Collection</span>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500 font-medium">Low Stock Alerts</span>
            <div className="p-2 bg-red-50 text-red-600 rounded-full">
              <AlertTriangle className="w-5 h-5" />
            </div>
          </div>
          <p className="font-serif text-3xl font-bold text-red-600">{lowStockProducts.length} Items</p>
          <span className="text-[11px] text-gray-500">Requires restocking</span>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500 font-medium">Registered VIP Clients</span>
            <div className="p-2 bg-purple-50 text-purple-600 rounded-full">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <p className="font-serif text-3xl font-bold text-gray-900">142</p>
          <span className="text-[11px] text-purple-600 font-semibold">High loyalty retention</span>
        </div>
      </div>

      {/* Orders Management Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-xs overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h3 className="font-serif text-lg font-bold text-gray-900">
            Active Click & Collect Reservations
          </h3>
          <span className="text-xs text-[#9A782D] font-semibold">
            Showing {orders.length} active orders
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-gray-700">
            <thead className="bg-[#FAFAFA] border-b border-gray-200 text-[11px] uppercase tracking-wider text-gray-500 font-semibold">
              <tr>
                <th className="p-4">Order Ref</th>
                <th className="p-4">Customer</th>
                <th className="p-4">Pickup Schedule</th>
                <th className="p-4">Amount & Payment</th>
                <th className="p-4">Pickup Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {orders.map((ord) => (
                <tr key={ord.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-mono font-bold text-gray-900">
                    {ord.orderNumber}
                    <span className="block text-[10px] text-gray-400 font-normal">{ord.qrPassCode}</span>
                  </td>

                  <td className="p-4">
                    <p className="font-bold text-gray-900">{ord.customerName}</p>
                    <p className="text-gray-500">{ord.customerPhone}</p>
                  </td>

                  <td className="p-4">
                    <p className="font-semibold text-gray-800">{ord.pickupDate}</p>
                    <p className="text-gray-500">{ord.pickupTimeSlot}</p>
                  </td>

                  <td className="p-4">
                    <p className="font-bold text-gray-900">{formatCurrency(ord.totalAmount)}</p>
                    <p className="text-[10px] text-amber-700 font-semibold">{ord.paymentMethod.replace(/_/g, ' ')}</p>
                  </td>

                  <td className="p-4">
                    <select
                      value={ord.orderStatus}
                      onChange={(e) => handleStatusChange(ord.id, e.target.value as OrderStatus)}
                      className="bg-[#FDFBF7] border border-[#C8A45D] font-semibold text-xs px-2.5 py-1 rounded text-gray-900 focus:outline-hidden"
                    >
                      <option value="PENDING">PENDING</option>
                      <option value="CONFIRMED">CONFIRMED</option>
                      <option value="READY_FOR_PICKUP">READY FOR PICKUP</option>
                      <option value="COLLECTED">COLLECTED</option>
                      <option value="CANCELLED">CANCELLED</option>
                    </select>
                  </td>

                  <td className="p-4 text-right space-x-2">
                    <Link
                      href={`/order-confirmation/${ord.orderNumber}?pass=${ord.qrPassCode}`}
                      target="_blank"
                      className="px-3 py-1 bg-gray-100 hover:bg-black hover:text-white rounded text-[11px] font-semibold transition-colors inline-flex items-center gap-1"
                    >
                      <Printer className="w-3 h-3" /> Slip
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
