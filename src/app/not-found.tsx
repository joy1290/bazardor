import React from 'react';
import { ShoppingBag, ArrowLeft, Leaf } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-emerald-50/50 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 selection:bg-emerald-200 selection:text-emerald-900">
      
      {}
      <main className="w-full max-w-md mx-auto text-center flex flex-col items-center">
        
        {}
        <div className="relative mb-8 group">
          {/* Decorative background glow */}
          <div className="absolute inset-0 bg-emerald-200 rounded-full blur-xl opacity-60 animate-pulse"></div>
          
          <div className="relative w-24 h-24 bg-gradient-to-tr from-emerald-600 to-emerald-500 rounded-3xl shadow-lg shadow-emerald-600/20 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-105">
            {/* Basket icon with greenery element */}
            <div className="relative">
              <ShoppingBag className="w-12 h-12 text-white stroke-[2.2]" />
              <div className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-sm">
                <Leaf className="w-5 h-5 text-emerald-600 fill-emerald-100" />
              </div>
            </div>
          </div>
        </div>

        {}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold tracking-wide uppercase mb-4 shadow-sm">
          <span>404 ত্রুটি</span>
        </div>

        {}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
          পাতাটি খুঁজে পাওয়া যায়নি
        </h1>

        {}
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-sm mb-8 font-normal">
          আপনি যে পণ্য বা পাতাটি খুঁজছেন সেটি সরানো হয়েছে বা কখনো ছিল না।
        </p>

        {}
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-base shadow-lg shadow-emerald-600/25 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>হোম পেজে যান</span>
        </Link>

        {}
        <div className="mt-16 text-xs text-slate-400 font-medium tracking-wider uppercase">
           Bazar Dor
        </div>

      </main>
    </div>
  );
}