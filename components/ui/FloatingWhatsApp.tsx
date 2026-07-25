'use client';

import React from 'react';
import { STORE_INFO } from '@/lib/mock-data';
import { MessageSquare, Sparkles } from 'lucide-react';

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${STORE_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20VASTRAM%20Boutique,%20I%20have%20an%20inquiry%20regarding%20store%20pickup%20at%20Hampankatta%20Mangaluru.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-3 bg-[#111111] text-white p-3.5 rounded-full shadow-2xl border border-[#C8A45D] hover:bg-[#C8A45D] hover:text-black transition-all duration-300 animate-bounce hover:animate-none"
      title="Chat with VASTRAM Concierge"
    >
      <div className="relative">
        <MessageSquare className="w-6 h-6 text-green-400 group-hover:text-black transition-colors" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full border border-white" />
      </div>
      <span className="text-xs font-semibold tracking-wider uppercase pr-2 hidden group-hover:inline transition-all">
        Boutique Concierge
      </span>
    </a>
  );
}
