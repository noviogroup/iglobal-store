"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Mail, MapPin, Menu, Phone, ShoppingCart, UserRound } from "lucide-react";
import Logo from "@/components/Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products?category=cleaning", label: "Cleaning" },
  { href: "/products?category=household", label: "Household" },
  { href: "/products?category=personal-technology", label: "Personal Technology" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200">
      <div className="bg-[#00A9CE] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between gap-4 text-[16px] sm:text-[17px]">
          <div className="flex items-center gap-1.5 min-w-0">
            <MapPin className="w-3.5 h-3.5 text-[#FDDA25] shrink-0" />
            <span className="truncate">Location: The Bahamas</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-5 min-w-0">
            <a href="tel:242-462-7499" className="inline-flex items-center gap-1.5 hover:text-[#FDDA25] transition-colors">
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span>242-462-7499</span>
            </a>
            <a href="mailto:iglobalps@hotmail.com" className="hidden sm:inline-flex items-center gap-1.5 hover:text-[#FDDA25] transition-colors min-w-0">
              <Mail className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">iglobalps@hotmail.com</span>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Logo variant="header" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => {
                const isLast = index === navLinks.length - 1;
                return (
                  <div key={link.href} className="flex items-center gap-3">
                    <Link
                      href={link.href}
                      className="text-base font-semibold text-gray-700 hover:text-[#00A9CE] transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#00A9CE] after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {link.label}
                    </Link>
                    {!isLast ? <span className="text-gray-300 font-medium">|</span> : null}
                  </div>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center bg-[#00A9CE] text-white rounded-md px-2.5 py-1.5 gap-3">
                <Link href="/support" className="inline-flex items-center gap-1.5 hover:opacity-90 transition-opacity">
                  <UserRound className="w-3.5 h-3.5" />
                  <span className="text-xs font-medium">Sign In</span>
                </Link>
                <Link href="/products" className="relative inline-flex items-center gap-1 hover:opacity-90 transition-opacity">
                  <ShoppingCart className="w-4 h-4" />
                  <span className="text-xs font-semibold">$0.00</span>
                  <span className="absolute -top-1.5 -right-2.5 w-3.5 h-3.5 bg-[#FDDA25] text-black text-[9px] font-bold rounded-full flex items-center justify-center">
                    0
                  </span>
                </Link>
              </div>

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
                          className="text-xl font-semibold py-2 hover:text-[#00A9CE] transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </nav>
                    <Button asChild className="mt-4 w-full bg-[#00A9CE] hover:bg-black">
                      <Link href="/products">Shop Now</Link>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
