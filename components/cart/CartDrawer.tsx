'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCartStore } from '@/store/useCartStore';
import { formatCurrency } from '@/lib/utils';
import { STORE_INFO } from '@/lib/mock-data';
import { X, ShoppingBag, Trash2, MapPin, Clock, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, removeItem, updateQuantity, getSubtotal, getTotalAmount, getItemCount } = useCartStore();

  if (!isOpen) return null;

  const subtotal = getSubtotal();
  const total = getTotalAmount();
  const itemCount = getItemCount();

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-[#E8E8E8] bg-[#FAFAFA] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#C8A45D]" />
              <h2 className="font-serif text-lg font-bold text-gray-900">Your Selection</h2>
              <span className="bg-[#111111] text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                {itemCount}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-900 transition-colors rounded-full hover:bg-gray-200"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Click & Collect Banner */}
          <div className="bg-[#111111] text-white px-5 py-3 text-xs flex items-center justify-between border-b border-[#C8A45D]/30">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C8A45D]" />
              <span className="font-medium text-[#E9D29D]">Store Pickup Only (Mangaluru Showroom)</span>
            </div>
            <span className="text-[10px] text-gray-400">No Shipping Fee</span>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center text-gray-500 py-12">
                <div className="w-16 h-16 rounded-full bg-[#FAFAFA] border border-[#E5D9C5] flex items-center justify-center mb-4">
                  <ShoppingBag className="w-8 h-8 text-[#C8A45D]" />
                </div>
                <p className="font-serif text-lg font-medium text-gray-800 mb-1">Your bag is currently empty</p>
                <p className="text-xs text-gray-500 max-w-xs mb-6">
                  Explore our luxury bridal, saree, and lehenga collections to add items for showroom pickup.
                </p>
                <Link
                  href="/shop"
                  onClick={onClose}
                  className="inline-flex items-center px-6 py-2.5 bg-[#111111] hover:bg-[#C8A45D] text-white text-xs font-semibold tracking-wider uppercase rounded transition-colors"
                >
                  Explore Collection
                </Link>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex gap-4 pb-6 border-b border-gray-100 relative group">
                  {/* Thumbnail */}
                  <div className="relative w-20 h-24 rounded overflow-hidden bg-gray-100 shrink-0 border border-[#E8E8E8]">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Item Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-serif text-sm font-medium text-gray-900 line-clamp-1">
                        {item.product.name}
                      </h4>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Size: <span className="font-semibold text-gray-800">{item.selectedSize}</span> | Color: <span className="font-semibold text-gray-800">{item.selectedColor.name}</span>
                      </p>
                      <p className="text-xs font-semibold text-[#9A782D] mt-1">
                        {formatCurrency(item.product.offerPrice ?? item.product.price)}
                      </p>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-gray-200 rounded">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2.5 py-0.5 text-xs text-gray-600 hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="px-3 py-0.5 text-xs font-medium text-gray-800">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2.5 py-0.5 text-xs text-gray-600 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors p-1"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary & Checkout Button */}
          {items.length > 0 && (
            <div className="p-6 bg-[#FAFAFA] border-t border-[#E8E8E8] space-y-4">
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-gray-600 text-xs">
                  <span>Subtotal</span>
                  <span className="font-medium text-gray-900">{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between text-gray-600 text-xs">
                  <span className="flex items-center gap-1">
                    Store Pickup Fitting <Sparkles className="w-3 h-3 text-[#C8A45D]" />
                  </span>
                  <span className="font-medium text-green-600">FREE</span>
                </div>
                <div className="flex justify-between text-base font-bold text-gray-900 pt-2 border-t border-gray-200">
                  <span>Total Payable at Store</span>
                  <span className="text-[#9A782D]">{formatCurrency(total)}</span>
                </div>
              </div>

              <div className="bg-[#FDFBF7] border border-[#E5D9C5] rounded p-3 text-[11px] text-gray-600 space-y-1">
                <div className="flex items-center gap-1.5 text-[#9A782D] font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Pickup Slot Selection Next Step</span>
                </div>
                <p>Pick your preferred date and time for trial & collection at Hampankatta, Mangaluru.</p>
              </div>

              <Link
                href="/checkout"
                onClick={onClose}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#111111] hover:bg-[#C8A45D] text-white text-xs font-semibold tracking-widest uppercase rounded shadow-lg transition-all duration-300 group"
              >
                <span>Schedule Pickup & Place Order</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="flex items-center justify-center gap-2 text-[10px] text-gray-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C8A45D]" />
                <span>Pay via Cash, UPI or Card when you collect at boutique</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
