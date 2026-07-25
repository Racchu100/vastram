'use client';

import React from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'light' | 'dark' | 'gold';
  className?: string;
  showSubtitle?: boolean;
}

export default function VastramLogo({ variant = 'gold', className = '', showSubtitle = true }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex flex-col items-start sm:items-start group cursor-pointer ${className}`}>
      {/* Clean Emblem & Brand Layout */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {/* Sewing Machine Icon Graphic */}
        <svg viewBox="0 0 44 32" className="h-6 sm:h-8 w-auto text-[#C8A45D] transition-transform duration-300 group-hover:scale-105 shrink-0" fill="none">
          {/* Machine Body */}
          <path
            d="M6 24 L38 24 C35 13, 28 6, 15 6 C8 6, 6 10, 6 24 Z"
            fill="rgba(200,164,93,0.12)"
            stroke="#C8A45D"
            strokeWidth="1.5"
          />
          {/* Wheel */}
          <circle cx="37" cy="14" r="5" stroke="#E9D29D" strokeWidth="1.5" />
          <line x1="37" y1="9" x2="37" y2="19" stroke="#C8A45D" strokeWidth="1.2" />
          {/* Needle Bar */}
          <line x1="11" y1="24" x2="11" y2="30" stroke="#C8A45D" strokeWidth="1.8" />
          {/* Base Plate */}
          <line x1="3" y1="30" x2="41" y2="30" stroke="#C8A45D" strokeWidth="2.2" strokeLinecap="round" />
        </svg>

        {/* Brand Typography */}
        <span className="font-serif tracking-[0.18em] sm:tracking-[0.22em] text-base sm:text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C8A45D] via-[#E9D29D] to-[#9A782D] uppercase leading-none">
          VASTRAM
        </span>
      </div>

      {showSubtitle && (
        <span className="text-[7.5px] sm:text-[9px] tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[#9A782D] font-semibold mt-0.5 whitespace-nowrap">
          LUXURY BOUTIQUE • MANGALURU
        </span>
      )}
    </Link>
  );
}
