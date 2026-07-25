'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/store/useCartStore';
import { formatCurrency, generateOrderNumber, generateQRPassCode } from '@/lib/utils';
import { STORE_INFO, PICKUP_TIME_SLOTS } from '@/lib/mock-data';
import { PaymentMethodAtStore } from '@/types';
import {
  MapPin,
  Clock,
  ShieldCheck,
  Calendar,
  User,
  Phone,
  Mail,
  CreditCard,
  QrCode,
  Banknote,
  CheckCircle2,
  Sparkles,
  Scissors,
  Tag,
  ArrowRight
} from 'lucide-react';

export default function CheckoutPage() {
  const router = useRouter();
  const {
    items,
    pickupInfo,
    setPickupInfo,
    getSubtotal,
    getDiscountAmount,
    getTotalAmount,
    couponCode,
    applyCoupon,
    removeCoupon,
    clearCart
  } = useCartStore();

  const [inputCoupon, setInputCoupon] = useState('');
  const [couponError, setCouponError] = useState(false);
  const [couponSuccess, setCouponSuccess] = useState(false);

  // Form State
  const [customerName, setCustomerName] = useState(pickupInfo.customerName || '');
  const [customerPhone, setCustomerPhone] = useState(pickupInfo.customerPhone || '');
  const [customerEmail, setCustomerEmail] = useState(pickupInfo.customerEmail || '');
  const [pickupDate, setPickupDate] = useState(pickupInfo.pickupDate || '2026-07-26');
  const [pickupTimeSlot, setPickupTimeSlot] = useState(pickupInfo.pickupTimeSlot || PICKUP_TIME_SLOTS[0]);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodAtStore>(pickupInfo.paymentMethod || 'UPI_AT_STORE');
  const [fittingRequested, setFittingRequested] = useState(pickupInfo.fittingRequested || false);
  const [notes, setNotes] = useState(pickupInfo.notes || '');

  const [isSubmitting, setIsSubmitting] = useState(false);

  const subtotal = getSubtotal();
  const discount = getDiscountAmount();
  const total = getTotalAmount();

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (applyCoupon(inputCoupon)) {
      setCouponSuccess(true);
      setCouponError(false);
    } else {
      setCouponError(true);
      setCouponSuccess(false);
    }
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone || !pickupDate || !pickupTimeSlot) {
      alert('Please fill in your name, phone number, pickup date, and preferred time slot.');
      return;
    }

    setIsSubmitting(true);

    const orderNo = generateOrderNumber();
    const passCode = generateQRPassCode(orderNo);

    // Save details
    setPickupInfo({
      customerName,
      customerPhone,
      customerEmail,
      pickupDate,
      pickupTimeSlot,
      paymentMethod,
      fittingRequested,
      notes
    });

    setTimeout(() => {
      clearCart();
      router.push(`/order-confirmation/${orderNo}?pass=${passCode}&name=${encodeURIComponent(customerName)}`);
    }, 1200);
  };

  if (items.length === 0) {
    return (
      <div className="bg-[#FAFAFA] min-h-screen py-20 px-4 flex items-center justify-center">
        <div className="bg-white border border-[#E5D9C5] rounded-xl p-10 max-w-md w-full text-center space-y-4 shadow-md">
          <MapPin className="w-12 h-12 text-[#C8A45D] mx-auto" />
          <h2 className="font-serif text-2xl font-bold text-gray-900">Your Selection Bag is Empty</h2>
          <p className="text-xs text-gray-500">
            Please add items from our boutique collection to schedule your showroom pickup.
          </p>
          <Link
            href="/shop"
            className="inline-block px-6 py-3 bg-[#111111] text-white text-xs font-semibold uppercase tracking-wider rounded hover:bg-[#C8A45D] transition-colors"
          >
            Browse Collections
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAFAFA] min-h-screen py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Notice */}
        <div className="bg-[#111111] text-white p-6 rounded-xl border border-[#C8A45D]/40 shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#C8A45D]/20 rounded-full border border-[#C8A45D]">
              <MapPin className="w-6 h-6 text-[#E9D29D]" />
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-widest text-[#E9D29D] uppercase block">
                Click & Collect Exclusive
              </span>
              <h1 className="font-serif text-xl font-bold text-white">
                Showroom Pickup Only (No Delivery Charge)
              </h1>
              <p className="text-xs text-gray-300">
                Orders are collected directly from our flagship showroom: {STORE_INFO.addressLine1}, Hampankatta, Mangaluru.
              </p>
            </div>
          </div>
          <span className="bg-[#C8A45D] text-black font-bold text-xs uppercase px-3 py-1.5 rounded shrink-0">
            Zero Shipping Fees
          </span>
        </div>

        {/* Main Grid Layout */}
        <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Form Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Customer Info */}
            <div className="bg-white border border-[#E8E8E8] rounded-xl p-6 space-y-4 shadow-xs">
              <h3 className="font-serif text-lg font-bold text-gray-900 flex items-center gap-2 pb-3 border-b border-gray-100">
                <User className="w-5 h-5 text-[#C8A45D]" /> 1. Customer Information
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Deepa Kamath"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-[#FAFAFA] border border-gray-300 rounded text-xs p-3 text-gray-900 focus:outline-hidden focus:border-[#C8A45D]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Phone Number (for Pickup SMS/WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98450 12345"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full bg-[#FAFAFA] border border-gray-300 rounded text-xs p-3 text-gray-900 focus:outline-hidden focus:border-[#C8A45D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Email Address (for Digital Pass & Invoice)
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="deepa.kamath@example.com"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      className="w-full bg-[#FAFAFA] border border-gray-300 rounded text-xs p-3 text-gray-900 focus:outline-hidden focus:border-[#C8A45D]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Pickup Scheduling */}
            <div className="bg-white border border-[#E8E8E8] rounded-xl p-6 space-y-4 shadow-xs">
              <h3 className="font-serif text-lg font-bold text-gray-900 flex items-center gap-2 pb-3 border-b border-gray-100">
                <Calendar className="w-5 h-5 text-[#C8A45D]" /> 2. Schedule Pickup Date & Time Slot
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Select Preferred Pickup Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="w-full bg-[#FAFAFA] border border-gray-300 rounded text-xs p-3 text-gray-900 focus:outline-hidden focus:border-[#C8A45D]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-2">
                    Select Preferred Time Slot *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {PICKUP_TIME_SLOTS.map((slot) => (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setPickupTimeSlot(slot)}
                        className={`p-3 rounded text-xs font-semibold border transition-all flex items-center justify-between ${
                          pickupTimeSlot === slot
                            ? 'bg-[#111111] text-[#E9D29D] border-[#C8A45D]'
                            : 'bg-[#FAFAFA] border-gray-300 text-gray-700 hover:border-[#C8A45D]'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-[#C8A45D]" />
                          {slot}
                        </span>
                        {pickupTimeSlot === slot && <CheckCircle2 className="w-4 h-4 text-[#C8A45D]" />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Trial Fitting Checkbox */}
                <div className="p-3 bg-[#FDFBF7] border border-[#E5D9C5] rounded flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="fitting"
                    checked={fittingRequested}
                    onChange={(e) => setFittingRequested(e.target.checked)}
                    className="mt-1 accent-[#C8A45D]"
                  />
                  <label htmlFor="fitting" className="text-xs text-gray-700 font-medium cursor-pointer">
                    <span className="font-bold text-gray-900 flex items-center gap-1">
                      Request Showroom Fitting Suite & Alterations <Scissors className="w-3.5 h-3.5 text-[#C8A45D]" />
                    </span>
                    Reserve our luxury trial room and tailor consultation during your pickup.
                  </label>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Special Notes / Gift Wrap Request (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Please keep bridal luxury gift box ready."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-[#FAFAFA] border border-gray-300 rounded text-xs p-3 text-gray-900 focus:outline-hidden"
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Payment Method at Store */}
            <div className="bg-white border border-[#E8E8E8] rounded-xl p-6 space-y-4 shadow-xs">
              <h3 className="font-serif text-lg font-bold text-gray-900 flex items-center gap-2 pb-3 border-b border-gray-100">
                <CreditCard className="w-5 h-5 text-[#C8A45D]" /> 3. Store Payment Selection
              </h3>
              <p className="text-xs text-gray-500">
                No payment is deducted now. You will inspect and pay at our Hampankatta showroom upon collection.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('UPI_AT_STORE')}
                  className={`p-4 rounded-lg border text-left space-y-2 transition-all ${
                    paymentMethod === 'UPI_AT_STORE'
                      ? 'bg-[#111111] text-white border-[#C8A45D] shadow-md'
                      : 'bg-[#FAFAFA] text-gray-800 border-gray-200 hover:border-[#C8A45D]'
                  }`}
                >
                  <QrCode className="w-6 h-6 text-[#C8A45D]" />
                  <p className="font-serif text-sm font-bold">UPI at Store</p>
                  <p className="text-[10px] opacity-70">GPay, PhonePe, Paytm, BHIM</p>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('CARD_AT_STORE')}
                  className={`p-4 rounded-lg border text-left space-y-2 transition-all ${
                    paymentMethod === 'CARD_AT_STORE'
                      ? 'bg-[#111111] text-white border-[#C8A45D] shadow-md'
                      : 'bg-[#FAFAFA] text-gray-800 border-gray-200 hover:border-[#C8A45D]'
                  }`}
                >
                  <CreditCard className="w-6 h-6 text-[#C8A45D]" />
                  <p className="font-serif text-sm font-bold">Card at Store</p>
                  <p className="text-[10px] opacity-70">Visa, Mastercard, RuPay</p>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('CASH_AT_STORE')}
                  className={`p-4 rounded-lg border text-left space-y-2 transition-all ${
                    paymentMethod === 'CASH_AT_STORE'
                      ? 'bg-[#111111] text-white border-[#C8A45D] shadow-md'
                      : 'bg-[#FAFAFA] text-gray-800 border-gray-200 hover:border-[#C8A45D]'
                  }`}
                >
                  <Banknote className="w-6 h-6 text-[#C8A45D]" />
                  <p className="font-serif text-sm font-bold">Cash at Store</p>
                  <p className="text-[10px] opacity-70">Pay cash upon inspection</p>
                </button>
              </div>
            </div>
          </div>

          {/* Order Summary Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-[#E8E8E8] rounded-xl p-6 space-y-6 shadow-xs sticky top-28">
              <h3 className="font-serif text-lg font-bold text-gray-900 border-b border-gray-100 pb-3">
                Reserved Outfits Summary
              </h3>

              {/* Items List */}
              <div className="space-y-4 max-h-60 overflow-y-auto pr-1">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3 items-center">
                    <div className="relative w-14 h-16 rounded bg-gray-100 overflow-hidden shrink-0 border border-gray-200">
                      <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 text-xs">
                      <h5 className="font-serif font-bold text-gray-900 line-clamp-1">{item.product.name}</h5>
                      <p className="text-gray-500">Size: {item.selectedSize} | Qty: {item.quantity}</p>
                      <p className="text-[#9A782D] font-bold">
                        {formatCurrency(item.product.offerPrice ?? item.product.price)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Coupon Code Section */}
              <div className="pt-4 border-t border-gray-100 space-y-2">
                <label className="text-xs font-semibold text-gray-700 flex items-center gap-1">
                  <Tag className="w-3.5 h-3.5 text-[#C8A45D]" /> Apply Boutique Offer Code
                </label>
                {couponCode ? (
                  <div className="flex items-center justify-between p-2.5 bg-green-50 border border-green-200 rounded text-xs text-green-800">
                    <span>Applied: <strong>{couponCode}</strong></span>
                    <button type="button" onClick={removeCoupon} className="text-red-600 hover:underline font-semibold">
                      Remove
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="e.g. VASTRAM10"
                      value={inputCoupon}
                      onChange={(e) => setInputCoupon(e.target.value)}
                      className="flex-1 bg-[#FAFAFA] border border-gray-300 rounded text-xs px-3 py-2 text-gray-900 uppercase focus:outline-hidden"
                    />
                    <button
                      type="button"
                      onClick={handleApplyCoupon}
                      className="px-4 py-2 bg-[#111111] text-white text-xs font-semibold uppercase tracking-wider rounded hover:bg-[#C8A45D] transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                )}
                {couponError && <p className="text-[11px] text-red-500">Invalid coupon code. Try VASTRAM10</p>}
                {couponSuccess && <p className="text-[11px] text-green-600">10% discount applied!</p>}
              </div>

              {/* Pricing Totals */}
              <div className="pt-4 border-t border-gray-200 space-y-2 text-xs">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-gray-900">{formatCurrency(subtotal)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-700 font-semibold">
                    <span>Coupon Discount</span>
                    <span>-{formatCurrency(discount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-600">
                  <span>Showroom Pickup Fee</span>
                  <span className="text-green-600 font-bold">FREE</span>
                </div>
                <div className="flex justify-between text-base font-bold text-gray-900 pt-3 border-t border-gray-200">
                  <span>Total Amount Payable at Store</span>
                  <span className="text-[#9A782D] text-lg">{formatCurrency(total)}</span>
                </div>
              </div>

              {/* Submit Order Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-[#C8A45D] via-[#D4AF37] to-[#9A782D] hover:from-[#9A782D] hover:to-[#C8A45D] text-black font-bold text-xs uppercase tracking-widest rounded shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                {isSubmitting ? (
                  <span>Generating Pickup Pass...</span>
                ) : (
                  <>
                    <span>Confirm & Generate Store Pickup Pass</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400">
                <ShieldCheck className="w-4 h-4 text-[#C8A45D]" />
                <span>Pay when you collect your items at Hampankatta</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
