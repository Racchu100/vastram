'use client';

import React, { useState } from 'react';
import { STORE_INFO } from '@/lib/mock-data';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2, Sparkles, Navigation } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: 'Bridal Fitting',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="bg-white border border-[#E5D9C5] p-8 sm:p-12 rounded-2xl shadow-xs text-center space-y-3">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#9A782D] flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A45D]" /> Hampankatta Flagship Store
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111]">
            Contact VASTRAM Boutique
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 max-w-lg mx-auto">
            Visit our Mangaluru showroom or request a private trial fitting appointment with our bridal stylists.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details (5 cols) */}
          <div className="lg:col-span-5 bg-white p-8 rounded-xl border border-gray-200 shadow-xs space-y-6">
            <h3 className="font-serif text-xl font-bold text-gray-900 border-b border-gray-100 pb-3">
              Showroom Details
            </h3>

            <div className="space-y-4 text-xs text-gray-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C8A45D] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{STORE_INFO.name} Flagship</p>
                  <p>{STORE_INFO.addressLine1}</p>
                  <p>{STORE_INFO.addressLine2}</p>
                  <p>{STORE_INFO.city}, {STORE_INFO.state} {STORE_INFO.pincode}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#C8A45D] shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Showroom Operating Hours</p>
                  <p>{STORE_INFO.pickupHours}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C8A45D] shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p>{STORE_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C8A45D] shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Email Concierge</p>
                  <p>{STORE_INFO.email}</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
              <a
                href={STORE_INFO.googleMapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#111111] hover:bg-[#C8A45D] text-white hover:text-black font-semibold text-xs uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <Navigation className="w-4 h-4 text-[#C8A45D]" /> Open Directions on Google Maps
              </a>

              <a
                href={`https://wa.me/${STORE_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-green-700 hover:bg-green-800 text-white font-semibold text-xs uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" /> WhatsApp Concierge Chat
              </a>
            </div>
          </div>

          {/* Form & Map (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Form Box */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-xs space-y-6">
              <h3 className="font-serif text-xl font-bold text-gray-900 border-b border-gray-100 pb-3">
                Book Trial Fitting Appointment
              </h3>

              {submitted ? (
                <div className="p-6 bg-green-50 border border-green-200 rounded-lg text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-green-600 mx-auto" />
                  <h4 className="font-serif font-bold text-lg text-green-900">Appointment Request Sent!</h4>
                  <p className="text-xs text-green-700">
                    Our Mangaluru boutique stylist will contact you via phone/WhatsApp shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ananya Rai"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#FAFAFA] border border-gray-300 rounded text-xs p-3 text-gray-900 focus:outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98450 12345"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#FAFAFA] border border-gray-300 rounded text-xs p-3 text-gray-900 focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Category Interest</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full bg-[#FAFAFA] border border-gray-300 rounded text-xs p-3 text-gray-900 focus:outline-hidden"
                    >
                      <option value="Bridal Fitting">Bridal Lehenga Consultation</option>
                      <option value="Kanjeevaram Silk">Heritage Kanjeevaram Saree</option>
                      <option value="Evening Wear">Evening Gowns & Party Wear</option>
                      <option value="General Inquiry">General Store Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Notes / Preferred Date</label>
                    <textarea
                      rows={3}
                      placeholder="Let us know your wedding date or preferred visit time..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#FAFAFA] border border-gray-300 rounded text-xs p-3 text-gray-900 focus:outline-hidden"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-[#C8A45D] via-[#D4AF37] to-[#9A782D] hover:from-[#9A782D] hover:to-[#C8A45D] text-black font-bold text-xs uppercase tracking-widest rounded shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" /> Request Showroom Appointment
                  </button>
                </form>
              )}
            </div>

            {/* Embedded Google Map */}
            <div className="h-64 rounded-xl overflow-hidden border border-gray-200 shadow-sm relative">
              <iframe
                title="VASTRAM Store Location"
                src={STORE_INFO.googleMapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
