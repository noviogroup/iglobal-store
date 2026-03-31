"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#about", label: "About Us" },
  { href: "#contact", label: "Contact" },
];

const supportLinks = [
  { href: "#", label: "Support" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms & Conditions" },
  { href: "#", label: "Cart" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00ABC9] via-[#FCD116] to-[#00ABC9]" />
      <div className="absolute top-20 -left-20 w-64 h-64 bg-[#00ABC9]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-20 w-80 h-80 bg-[#FCD116]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer */}
        <div className="py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center gap-3">
                <span
                  className="text-4xl font-bold italic text-white"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  iG
                </span>
                <div className="flex flex-col leading-tight">
                  <span className="text-xs font-semibold tracking-wider text-[#00ABC9] uppercase">
                    Products & Services
                  </span>
                </div>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Everyday products that make life better. Quality you can trust, delivered fast across the Bahamas.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#00ABC9] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#00ABC9] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#00ABC9] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/60 hover:text-[#00ABC9] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/60 hover:text-[#00ABC9] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:242-462-7499" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-4 h-4 text-[#00ABC9]" />
                  </div>
                  <span>242-462-7499</span>
                </a>
              </li>
              <li>
                <a href="mailto:iglobalps@hotmail.com" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-4 h-4 text-[#00ABC9]" />
                  </div>
                  <span>iglobalps@hotmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-white/60 text-sm">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-[#FCD116]" />
                  </div>
                  <span>The Bahamas</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} iGlobal Products and Services. All rights reserved.
          </p>
          <p className="text-[#FCD116] text-xs italic" style={{ fontFamily: 'Georgia, serif' }}>
            Makes Your Life Better
          </p>
        </div>
      </div>
    </footer>
  );
}
