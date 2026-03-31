"use client";

import { TrendingUp, Package } from "lucide-react";

interface HeroProps {
  bannerSrc?: string | null;
}

export default function Hero({ bannerSrc }: HeroProps) {
  const sectionStyle = bannerSrc
    ? {
        backgroundImage: `url(${bannerSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : undefined;

  return (
    <section
      id="home"
      style={sectionStyle}
      className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden bg-gradient-to-br from-white via-[#00ABC9]/5 to-white"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#FCD116] text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              Welcome to iGlobal
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
                style={{ textShadow: "0 3px 12px rgba(0, 0, 0, 0.55)" }}
              >
                <span className="block text-white">Products</span>
                <span className="block text-white">that makes</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ABC9] via-[#00d4ff] to-[#00ABC9] animate-shimmer">
                  your life better
                </span>
              </h1>

              <p
                className="text-lg sm:text-xl text-white/90 max-w-lg"
                style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)" }}
              >
                Premium cleaning essentials and everyday products delivered fast across the Bahamas. Quality you can trust.
              </p>
            </div>

          </div>

          {/* Right Side - Floating Cards */}
          <div className="relative lg:h-[500px] hidden lg:flex items-center justify-center">
            <div className="absolute top-0 left-0 z-30 bg-white px-6 py-4 rounded-2xl shadow-xl border border-gray-100 hidden lg:block animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#00ABC9]/10 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-[#00ABC9]" />
                </div>
                <div>
                  <div className="font-bold text-xs">Best Seller</div>
                  <div className="text-[10px] text-gray-500">Top rated</div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-12 right-0 z-30 bg-white px-6 py-4 rounded-2xl shadow-xl border border-gray-100 hidden lg:block animate-float-delayed">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#FCD116]/10 rounded-xl flex items-center justify-center">
                  <Package className="w-6 h-6 text-[#FCD116]" />
                </div>
                <div>
                  <div className="font-bold text-xs">Fast Delivery</div>
                  <div className="text-[10px] text-gray-500">Bahamas wide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
