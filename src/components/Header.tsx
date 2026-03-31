"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ShoppingCart, User } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="w-[140px] h-auto">
              <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                {/* Navy Blue iG logo */}
                <path d="M320 300 Q340 280 360 300 L360 400 Q360 420 340 420 Q320 420 320 400 Z" fill="#003D7A" />
                <path d="M300 900 Q300 600 360 500 Q420 600 420 900" stroke="#003D7A" strokeWidth="60" fill="none" strokeLinecap="round" />
                <path d="M450 350 Q650 300 650 550 Q650 800 450 800" stroke="#003D7A" strokeWidth="60" fill="none" strokeLinecap="round" />

                {/* PRODUCTS & SERVICES text */}
                <text x="180" y="950" fontSize="70" fill="#00ABC9" fontWeight="bold" fontFamily="Arial, sans-serif">PRODUCTS &amp; SERVICES</text>

                {/* Underline */}
                <line x1="180" y1="970" x2="820" y2="970" stroke="#00ABC9" strokeWidth="8" />

                {/* Makes Your Life Better */}
                <text x="320" y="1010" fontSize="50" fill="#003D7A" fontFamily="Georgia, serif" fontStyle="italic">Makes Your Life Better</text>
              </svg>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-[#00ABC9] transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#00ABC9] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative text-gray-700 hover:text-[#00ABC9]">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative text-gray-700 hover:text-[#00ABC9]">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#FCD116] text-black text-[10px] font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-6 mt-8">
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-lg font-medium py-2 hover:text-[#00ABC9] transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <Button className="mt-4 w-full bg-[#00ABC9] hover:bg-[#008da6]">Shop Now</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
