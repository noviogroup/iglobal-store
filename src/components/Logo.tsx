"use client";

interface LogoProps {
  variant?: "full" | "icon" | "header";
  className?: string;
  dark?: boolean;
}

export default function Logo({ variant = "full", className = "", dark = false }: LogoProps) {
  const textColor = dark ? "text-white" : "text-black";
  const accentColor = "text-[#00ABC9]";

  if (variant === "icon") {
    return (
      <svg
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className}`}
      >
        <path
          d="M15 15C15 12.5 17 10 20 10C23 10 25 12.5 25 15C25 17.5 23 20 20 20C17 20 15 17.5 15 15Z"
          fill={dark ? "#ffffff" : "#000000"}
        />
        <path
          d="M12 55C12 55 12 30 20 25C28 30 28 55 28 55"
          stroke={dark ? "#ffffff" : "#000000"}
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M30 20C30 20 50 15 50 35C50 55 30 55 30 55C30 55 45 50 45 35C45 25 35 25 30 30"
          stroke={dark ? "#ffffff" : "#000000"}
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    );
  }

  if (variant === "header") {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className="flex flex-col items-center leading-none">
          <span
            className={`text-3xl font-bold italic ${textColor}`}
            style={{ fontFamily: 'Georgia, serif' }}
          >
            iG
          </span>
        </div>
        <div className="hidden sm:flex flex-col leading-tight">
          <span className={`text-xs font-semibold tracking-wider ${accentColor} uppercase`}>
            Products & Services
          </span>
        </div>
      </div>
    );
  }

  // Full logo
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <span
        className={`text-6xl font-bold italic ${textColor}`}
        style={{ fontFamily: 'Georgia, serif' }}
      >
        iG
      </span>
      <div className="flex flex-col items-center mt-2">
        <span className={`text-sm font-semibold tracking-widest ${accentColor} uppercase`}>
          Products & Services
        </span>
        <div className="w-full h-0.5 bg-[#00ABC9] mt-1 rounded-full" />
        <span
          className={`text-sm italic ${textColor} mt-2`}
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Makes Your Life Better
        </span>
      </div>
    </div>
  );
}
