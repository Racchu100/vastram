'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, MapPin, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=2000',
    tagline: 'EXCLUSIVE BRIDAL COUTURE 2026',
    title: 'Royalty Woven in Every Thread',
    description: 'Hand-embroidered zardozi lehengas and royal silk bridal ensembles, handcrafted for Mangaluru brides.',
    ctaText: 'Explore Bridal Collection',
    ctaLink: '/category/bridal',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=2000',
    tagline: 'HERITAGE KANJEEVARAM SILKS',
    title: 'Pure Gold Zari Masterpieces',
    description: 'Authentic handloom tissue and silk sarees direct from master weavers for auspicious occasions.',
    ctaText: 'View Heritage Sarees',
    ctaLink: '/category/sarees',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=2000',
    tagline: 'EVENINGS & GALAS',
    title: 'Sophisticated Evening Gowns',
    description: 'Satin silk corseted gowns and embellished silhouettes engineered for unforgettable evenings.',
    ctaText: 'Discover Evening Wear',
    ctaLink: '/category/gowns',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[75vh] sm:h-[85vh] min-h-[480px] sm:min-h-[580px] bg-[#111111] overflow-hidden">
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover object-top opacity-60 scale-105 transition-transform duration-10000"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-black/30 sm:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />

          {/* Content Box */}
          <div className="relative max-w-7xl mx-auto h-full px-4 sm:px-6 flex flex-col justify-center text-white z-20">
            <div className="max-w-2xl space-y-4 sm:space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 bg-[#111111]/90 backdrop-blur-md border border-[#C8A45D] rounded-full">
                <Sparkles className="w-3 h-3 text-[#C8A45D]" />
                <span className="text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] font-semibold text-[#E9D29D] uppercase">
                  {slide.tagline}
                </span>
              </div>

              {/* Title */}
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-white drop-shadow-md">
                {slide.title}
              </h1>

              {/* Description */}
              <p className="text-xs sm:text-base text-gray-300 font-light leading-relaxed max-w-xl line-clamp-3 sm:line-clamp-none">
                {slide.description}
              </p>

              {/* CTA Buttons */}
              <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4">
                <Link
                  href={slide.ctaLink}
                  className="px-6 py-3 bg-gradient-to-r from-[#C8A45D] via-[#D4AF37] to-[#9A782D] hover:from-[#9A782D] hover:to-[#C8A45D] text-black font-bold text-xs tracking-widest uppercase rounded shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <span>{slide.ctaText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/contact"
                  className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white border border-[#E5D9C5]/40 text-xs font-semibold tracking-wider uppercase rounded backdrop-blur-md transition-colors flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-[#C8A45D]" /> Visit Mangaluru Boutique
                </Link>
              </div>

              {/* Click & Collect Micro Notice */}
              <div className="pt-1 sm:pt-2 flex items-center gap-1.5 text-[10px] sm:text-[11px] text-[#E9D29D]">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C8A45D] shrink-0" />
                <span className="truncate">Reserve Online & Pick Up at Pailands Building, Hampankatta</span>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Navigation Arrows */}
      <button
        onClick={() => setCurrent((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1))}
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/50 hover:bg-black text-white border border-[#C8A45D]/40 backdrop-blur-sm transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 text-[#C8A45D]" />
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % SLIDES.length)}
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/50 hover:bg-black text-white border border-[#C8A45D]/40 backdrop-blur-sm transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 text-[#C8A45D]" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 sm:gap-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 transition-all duration-300 rounded-full ${
              i === current ? 'w-6 sm:w-8 bg-[#C8A45D]' : 'w-2 bg-white/40'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
