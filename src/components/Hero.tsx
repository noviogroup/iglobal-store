"use client";

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
      className="relative min-h-[85vh] flex items-center pt-28 md:pt-32 overflow-hidden bg-gradient-to-br from-white via-[#00A9CE]/5 to-white"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="grid lg:grid-cols-1 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#FDDA25] text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
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
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00A9CE] via-[#00A9CE] to-[#00A9CE] animate-shimmer">
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
        </div>
      </div>
    </section>
  );
}
