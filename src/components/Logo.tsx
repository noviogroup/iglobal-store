"use client";

import Image from "next/image";

interface LogoProps {
  variant?: "full" | "icon" | "header";
  className?: string;
  dark?: boolean;
}

const variantClassNames: Record<NonNullable<LogoProps["variant"]>, string> = {
  full: "h-28 w-28 sm:h-36 sm:w-36",
  header: "h-14 w-14 sm:h-16 sm:w-16",
  icon: "h-10 w-10",
};

export default function Logo({ variant = "full", className = "", dark = false }: LogoProps) {
  return (
    <div className={`${variantClassNames[variant]} ${className}`.trim()}>
      <Image
        src="/images/iglobal-logo.png"
        alt="iGlobal Products and Services logo"
        width={1024}
        height={1024}
        priority={variant === "header"}
        className={`h-full w-full object-contain ${dark ? "brightness-110" : ""}`.trim()}
      />
    </div>
  );
}
