'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

const FAQS = [
  {
    q: "How does Click & Collect store pickup work at VASTRAM?",
    a: "Browse our luxury online catalog, select your items and preferred size, choose your pickup date and time slot at checkout, and complete your order reservation. You will receive a digital Pickup Pass with a unique order code to present at our Hampankatta showroom."
  },
  {
    q: "What payment modes can I use when picking up my order?",
    a: "You can pay directly at our Mangaluru showroom using Cash, UPI (GPay, PhonePe, Paytm, BHIM), or Credit/Debit Card. No upfront online payment is required unless you prefer advance payment."
  },
  {
    q: "Can I try on my reserved outfits before collecting them?",
    a: "Yes! Our Hampankatta showroom features private bridal and couture fitting suites where you can try on your reserved pieces before finalizing your purchase."
  },
  {
    q: "Do you offer alteration services at the showroom?",
    a: "We have master tailors on site at our 2nd Floor Hampankatta showroom to assist with custom fitting, sleeve attachments, and minor waist adjustments during your pickup appointment."
  },
  {
    q: "Where is the VASTRAM showroom located in Mangaluru?",
    a: "We are located at Pailands Building, 2nd Floor, P.M. Rao Road, KSR Road, Hampankatta, Mangaluru, Karnataka 575001. Showroom pickup hours are 10:00 AM to 8:30 PM daily."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 px-4 sm:px-6 bg-[#FAFAFA]">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#9A782D] flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A45D]" /> Click & Collect Guide
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111]">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-0.5 bg-[#C8A45D] mx-auto rounded-full" />
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E8E8E8] rounded-lg overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between font-serif text-base font-bold text-gray-900 hover:text-[#C8A45D] transition-colors"
              >
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-4 h-4 text-[#C8A45D] shrink-0" />
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180 text-[#C8A45D]' : ''
                  }`}
                />
              </button>

              {openIndex === idx && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 font-light leading-relaxed border-t border-gray-100 bg-[#FDFBF7]">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
