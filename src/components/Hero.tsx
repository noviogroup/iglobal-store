"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp, Package } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden bg-gradient-to-br from-white via-[#00ABC9]/5 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -right-64 w-[600px] h-[600px] bg-[#00ABC9]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -left-64 w-[500px] h-[500px] bg-[#FCD116]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#FCD116] text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              <Sparkles className="w-4 h-4" />
              Welcome to iGlobal
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-black">Products</span>
                <span className="block text-black">that makes</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ABC9] via-[#00d4ff] to-[#00ABC9] animate-shimmer">
                  your life better
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 max-w-lg">
                Premium cleaning essentials and everyday products delivered fast across the Bahamas. Quality you can trust.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#00ABC9] hover:bg-[#008da6] text-white shadow-xl shadow-[#00ABC9]/30 group text-base px-8 h-14"
              >
                Shop Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#00ABC9] text-[#00ABC9] hover:bg-[#00ABC9] hover:text-white text-base px-8 h-14"
              >
                View Collection
              </Button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-[#00ABC9]">500+</div>
                <div className="text-sm text-gray-600">Customers</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-[#FCD116]">100%</div>
                <div className="text-sm text-gray-600">Quality</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-[#00ABC9]">5.0</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Side - Product Showcase */}
          <div className="relative lg:h-[500px] flex items-center justify-center">
            {/* Main Product Card */}
            <div className="relative z-20 bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 transform lg:translate-x-12">
              <img
                src="/images/mop.png"
                alt="IG Wonder Self-Wringing Mop"
                className="w-full max-w-[350px] h-auto object-contain"
              />

              {/* Floating Price Badge */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#FCD116] to-[#FFE566] text-black px-8 py-4 rounded-2xl shadow-2xl shadow-[#FCD116]/40 transform rotate-3">
                <div className="text-sm font-medium opacity-80">Starting at</div>
                <div className="text-3xl font-bold">$25</div>
              </div>
            </div>

            {/* Floating Feature Card 1 - Top Left */}
            <div className="absolute top-0 left-0 z-30 bg-white px-6 py-4 rounded-2xl shadow-xl border border-gray-100 hidden lg:block animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#00ABC9]/10 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-[#00ABC9]" />
                </div>
                <div>
                  <div className="font-bold text-sm">Best Seller</div>
                  <div className="text-xs text-gray-500">Top rated product</div>
                </div>
              </div>
            </div>

            {/* Floating Feature Card 2 - Bottom Right */}
            <div className="absolute bottom-12 right-0 z-30 bg-white px-6 py-4 rounded-2xl shadow-xl border border-gray-100 hidden lg:block animate-float-delayed">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#FCD116]/10 rounded-xl flex items-center justify-center">
                  <Package className="w-6 h-6 text-[#FCD116]" />
                </div>
                <div>
                  <div className="font-bold text-sm">Fast Delivery</div>
                  <div className="text-xs text-gray-500">Across Bahamas</div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-[#FCD116] to-[#FFE566] rounded-full opacity-50 blur-2xl" />
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-gradient-to-br from-[#00ABC9] to-[#00d4ff] rounded-full opacity-40 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
