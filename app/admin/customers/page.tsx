'use client';

import React from 'react';
import { SAMPLE_CUSTOMERS } from '@/lib/mock-data';
import { formatCurrency } from '@/lib/utils';
import { Users, Award, ShieldCheck } from 'lucide-react';

export default function AdminCustomersPage() {
  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs">
        <h1 className="font-serif text-2xl font-bold text-gray-900">VIP Client Directory</h1>
        <p className="text-xs text-gray-500">Manage client profiles, loyalty points balances, and private notes.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-xs p-6 overflow-x-auto">
        <table className="w-full text-left text-xs text-gray-700">
          <thead className="bg-[#FAFAFA] border-b border-gray-200 text-[11px] uppercase tracking-wider text-gray-500 font-semibold">
            <tr>
              <th className="p-3">Client Name</th>
              <th className="p-3">Phone & Email</th>
              <th className="p-3">Status</th>
              <th className="p-3">Loyalty Points</th>
              <th className="p-3">Total Spend</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {SAMPLE_CUSTOMERS.map((cust) => (
              <tr key={cust.id} className="hover:bg-gray-50 transition-colors">
                <td className="p-3 font-bold text-gray-900">{cust.name}</td>
                <td className="p-3">
                  <p>{cust.phone}</p>
                  <p className="text-[#9A782D] text-[11px]">{cust.email}</p>
                </td>
                <td className="p-3">
                  <span className="bg-[#111111] text-[#E9D29D] font-bold text-[10px] uppercase px-2.5 py-0.5 rounded border border-[#C8A45D]/40">
                    {cust.status}
                  </span>
                </td>
                <td className="p-3 font-bold text-[#9A782D]">{cust.loyaltyPoints} PTS</td>
                <td className="p-3 font-bold text-gray-900">{formatCurrency(cust.totalSpent)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
