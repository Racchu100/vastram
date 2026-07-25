'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';
import { STORE_INFO } from '@/lib/mock-data';
import {
  CheckCircle2,
  QrCode,
  MapPin,
  Clock,
  Printer,
  Share2,
  Calendar,
  Sparkles,
  Phone,
  ArrowRight,
  ShieldCheck,
  Scissors
} from 'lucide-react';
import canvasConfetti from 'canvas-confetti';

export default function OrderConfirmationPage() {
  const params = useParams();
  const searchParams = useSearchParams();

  const orderId = (params?.orderId as string) || 'VST-2026-8941';
  const passCode = searchParams?.get('pass') || `PASS-VST-8941-MNG`;
  const name = searchParams?.get('name') || 'Valued Client';

  useEffect(() => {
    try {
      canvasConfetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C8A45D', '#D4AF37', '#111111', '#E9D29D'],
      });
    } catch (e) {
      // fallback
    }
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Success Header */}
        <div className="bg-white border border-[#E5D9C5] rounded-xl p-8 text-center space-y-4 shadow-sm relative overflow-hidden">
          <div className="w-16 h-16 bg-[#111111] text-[#E9D29D] rounded-full flex items-center justify-center mx-auto border-2 border-[#C8A45D] shadow-lg">
            <CheckCircle2 className="w-10 h-10 text-[#C8A45D]" />
          </div>

          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#9A782D] block">
            Click & Collect Reservation Confirmed
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
            Thank You, {name}!
          </h1>

          <p className="text-xs sm:text-sm text-gray-600 font-light max-w-lg mx-auto">
            Your luxury apparel reservation has been logged. Show your digital <strong>Store Pickup Pass</strong> below when visiting our Mangaluru showroom.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FDFBF7] border border-[#E5D9C5] rounded-full text-xs font-semibold text-gray-800">
            <span>Order Reference Number:</span>
            <span className="text-[#9A782D] font-mono font-bold text-sm">{orderId}</span>
          </div>
        </div>

        {/* Digital Pickup Pass Card (Printable) */}
        <div id="pickup-pass-card" className="bg-white border-2 border-[#C8A45D] rounded-xl overflow-hidden shadow-2xl space-y-6">
          {/* Pass Top Banner */}
          <div className="bg-[#111111] text-white p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#C8A45D]/40">
            <div className="text-center sm:text-left">
              <span className="text-[10px] font-bold tracking-widest text-[#E9D29D] uppercase block">
                VASTRAM BOUTIQUE • MANGALURU
              </span>
              <h2 className="font-serif text-xl font-bold text-white">
                Official Store Pickup Pass
              </h2>
            </div>

            <div className="flex items-center gap-2 bg-[#FAFAFA] text-black px-3 py-1.5 rounded-lg border border-[#C8A45D]">
              <QrCode className="w-6 h-6 text-[#9A782D]" />
              <span className="font-mono text-xs font-bold">{passCode}</span>
            </div>
          </div>

          {/* Pass Body Content */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Timeline Indicator */}
            <div className="bg-[#FAFAFA] p-4 rounded-lg border border-gray-200">
              <h4 className="text-xs font-semibold uppercase text-gray-500 mb-3 tracking-wider text-center">
                Order Status Timeline
              </h4>
              <div className="grid grid-cols-4 text-center text-[10px] sm:text-xs">
                <div className="space-y-1">
                  <div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center mx-auto font-bold">1</div>
                  <span className="font-semibold text-gray-800">Placed</span>
                </div>
                <div className="space-y-1">
                  <div className="w-6 h-6 rounded-full bg-[#111111] text-[#E9D29D] flex items-center justify-center mx-auto font-bold">2</div>
                  <span className="font-semibold text-gray-800">Confirmed</span>
                </div>
                <div className="space-y-1">
                  <div className="w-6 h-6 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center mx-auto font-bold">3</div>
                  <span className="text-gray-400">Ready for Pickup</span>
                </div>
                <div className="space-y-1">
                  <div className="w-6 h-6 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center mx-auto font-bold">4</div>
                  <span className="text-gray-400">Collected</span>
                </div>
              </div>
            </div>

            {/* Showroom Address & Scheduled Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#FDFBF7] p-5 rounded-lg border border-[#E5D9C5] space-y-2 text-xs">
                <div className="flex items-center gap-2 text-[#9A782D] font-bold text-sm">
                  <MapPin className="w-4 h-4" /> Showroom Location
                </div>
                <p className="font-semibold text-gray-900">{STORE_INFO.name} Flagship Store</p>
                <p className="text-gray-600">{STORE_INFO.addressLine1}</p>
                <p className="text-gray-600">{STORE_INFO.addressLine2}</p>
                <p className="text-gray-600">{STORE_INFO.city}, {STORE_INFO.state} {STORE_INFO.pincode}</p>
                <p className="text-gray-500 pt-1">Phone: {STORE_INFO.phone}</p>
              </div>

              <div className="bg-[#FDFBF7] p-5 rounded-lg border border-[#E5D9C5] space-y-2 text-xs">
                <div className="flex items-center gap-2 text-[#9A782D] font-bold text-sm">
                  <Calendar className="w-4 h-4" /> Pickup Schedule Details
                </div>
                <p className="text-gray-700">Scheduled Date: <strong className="text-gray-900">Tomorrow / Selected Date</strong></p>
                <p className="text-gray-700">Preferred Time Slot: <strong className="text-gray-900">10:30 AM - 01:00 PM</strong></p>
                <p className="text-gray-700">Payment Status: <strong className="text-amber-700">Pay at Store (Cash/UPI/Card)</strong></p>
                <div className="pt-2 flex items-center gap-1.5 text-green-700 font-medium">
                  <Scissors className="w-3.5 h-3.5" /> Includes Trial Room Suite Reservation
                </div>
              </div>
            </div>

            {/* Simulated QR Code Box */}
            <div className="p-6 bg-gray-50 border border-dashed border-[#C8A45D] rounded-lg text-center space-y-3">
              <div className="w-32 h-32 bg-white border-2 border-black p-2 mx-auto rounded shadow-xs flex items-center justify-center">
                <QrCode className="w-28 h-28 text-black" />
              </div>
              <p className="text-xs text-gray-500">
                Present this QR Pass at the 2nd Floor counter at Pailands Building, Hampankatta.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={handlePrint}
            className="px-6 py-3 bg-[#111111] hover:bg-[#C8A45D] text-white hover:text-black font-semibold text-xs uppercase tracking-wider rounded transition-colors flex items-center gap-2 shadow-md"
          >
            <Printer className="w-4 h-4" /> Print Store Pickup Pass
          </button>

          <Link
            href="/customer/orders"
            className="px-6 py-3 bg-white border border-gray-300 hover:border-black text-gray-900 font-semibold text-xs uppercase tracking-wider rounded transition-colors flex items-center gap-2"
          >
            <span>View All My Orders</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
