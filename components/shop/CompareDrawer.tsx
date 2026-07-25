'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useCompareStore } from '@/store/useCompareStore';
import { formatCurrency } from '@/lib/utils';
import { X, Scale, Trash2, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';

export default function CompareDrawer() {
  const { items, removeProduct, clearCompare } = useCompareStore();
  const { addItem } = useCartStore();
  const [isOpen, setIsOpen] = useState(false);

  if (items.length === 0) return null;

  return (
    <>
      {/* Floating Bottom Bar Toggle */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 px-5 py-3 bg-[#111111] text-white border border-[#C8A45D] rounded-full shadow-2xl hover:bg-[#C8A45D] hover:text-black transition-all font-semibold text-xs uppercase tracking-wider"
        >
          <Scale className="w-4 h-4 text-[#C8A45D]" />
          <span>Compare Pieces ({items.length}/4)</span>
        </button>
      </div>

      {/* Compare Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-5xl w-full p-6 space-y-6 shadow-2xl relative border border-[#E5D9C5] max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <Scale className="w-5 h-5 text-[#C8A45D]" />
                <h3 className="font-serif text-xl font-bold text-gray-900">
                  Product Comparison
                </h3>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={clearCompare}
                  className="text-xs text-red-600 hover:underline font-medium"
                >
                  Clear All
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 text-gray-400 hover:text-black"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {items.map((prod) => (
                <div
                  key={prod.id}
                  className="bg-[#FAFAFA] border border-gray-200 rounded-lg p-4 space-y-4 relative flex flex-col justify-between"
                >
                  <button
                    onClick={() => removeProduct(prod.id)}
                    className="absolute top-2 right-2 p-1 text-gray-400 hover:text-red-500"
                    title="Remove"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                  <div className="space-y-2">
                    <div className="relative aspect-3/4 w-full rounded overflow-hidden bg-gray-100 border border-gray-200">
                      <Image src={prod.images[0]} alt={prod.name} fill className="object-cover" />
                    </div>
                    <h4 className="font-serif text-sm font-bold text-gray-900 line-clamp-1">{prod.name}</h4>
                    <p className="text-xs font-bold text-[#9A782D]">
                      {formatCurrency(prod.offerPrice ?? prod.price)}
                    </p>
                  </div>

                  <div className="text-xs space-y-2 text-gray-600 border-t border-gray-200 pt-3">
                    <p><strong>Category:</strong> {prod.category}</p>
                    <p><strong>Fabric:</strong> {prod.fabricDetails}</p>
                    <p><strong>Work:</strong> {prod.workDetails}</p>
                    <p><strong>Occasion:</strong> {prod.occasion}</p>
                    <p><strong>Sizes:</strong> {prod.availableSizes.join(', ')}</p>
                  </div>

                  <button
                    onClick={() => {
                      addItem(prod, prod.availableSizes[0] || 'M', prod.availableColors[0] || { name: 'Gold', hex: '#C8A45D' }, 1);
                    }}
                    className="w-full py-2 bg-[#111111] hover:bg-[#C8A45D] text-white font-semibold text-xs uppercase tracking-wider rounded flex items-center justify-center gap-1.5 transition-colors mt-2"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" /> Reserve
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
