'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PRODUCTS } from '@/lib/mock-data';
import { formatCurrency } from '@/lib/utils';
import { Product } from '@/types';
import { Plus, Edit, Trash2, Search, MapPin, Sparkles } from 'lucide-react';

export default function AdminProductsPage() {
  const [productList, setProductList] = useState<Product[]>(PRODUCTS);
  const [search, setSearch] = useState('');

  const filtered = productList.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase()) ||
    p.sku.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl font-bold text-gray-900">Boutique Inventory Catalog</h1>
          <p className="text-xs text-gray-500">Manage apparel pieces, silk grades, and showroom stock levels.</p>
        </div>
        <button
          onClick={() => alert('New Product Creation Modal Opened')}
          className="px-4 py-2.5 bg-[#111111] hover:bg-[#C8A45D] text-white hover:text-black text-xs font-semibold uppercase tracking-wider rounded transition-colors flex items-center gap-2"
        >
          <Plus className="w-4 h-4" /> Add New Piece
        </button>
      </div>

      {/* Table & Controls */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-xs p-6 space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div className="relative w-full max-w-sm">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by title, SKU or category..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-[#FAFAFA] border border-gray-300 rounded text-xs focus:outline-hidden"
            />
          </div>
          <span className="text-xs text-gray-500 font-medium">Total Items: {filtered.length}</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-gray-700">
            <thead className="bg-[#FAFAFA] border-b border-gray-200 text-[11px] uppercase tracking-wider text-gray-500 font-semibold">
              <tr>
                <th className="p-3">Product</th>
                <th className="p-3">Category</th>
                <th className="p-3">Fabric</th>
                <th className="p-3">Price (INR)</th>
                <th className="p-3">Stock Count</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.map((prod) => (
                <tr key={prod.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-3 flex items-center gap-3">
                    <div className="relative w-12 h-14 rounded overflow-hidden bg-gray-100 shrink-0 border border-gray-200">
                      <Image src={prod.images[0]} alt={prod.name} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 line-clamp-1">{prod.name}</p>
                      <p className="text-[10px] text-gray-400">SKU: {prod.sku}</p>
                    </div>
                  </td>

                  <td className="p-3 font-medium text-gray-800">{prod.category}</td>
                  <td className="p-3 text-gray-600">{prod.fabricDetails}</td>
                  <td className="p-3 font-bold text-[#9A782D]">{formatCurrency(prod.offerPrice ?? prod.price)}</td>

                  <td className="p-3">
                    <span className={`px-2 py-0.5 rounded font-semibold text-[10px] ${
                      prod.stockCount <= 3 ? 'bg-red-50 text-red-600 border border-red-200' : 'bg-green-50 text-green-700 border border-green-200'
                    }`}>
                      {prod.stockCount} in stock
                    </span>
                  </td>

                  <td className="p-3 text-right space-x-2">
                    <button className="p-1.5 text-gray-500 hover:text-black">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 text-gray-400 hover:text-red-600">
                      <Trash2 className="w-4 h-4" />
                    </button>
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
