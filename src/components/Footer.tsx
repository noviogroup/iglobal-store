"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import Logo from "@/components/Logo";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/#about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const supportLinks = [
  { href: "/support", label: "Support" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/products", label: "Shop" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-b from-white to-[#eef9fd] text-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00A9CE] via-[#FDDA25] to-[#00A9CE]" />
      <div className="absolute top-20 -left-20 w-64 h-64 bg-[#00A9CE]/15 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-20 w-80 h-80 bg-[#FDDA25]/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer */}
        <div className="py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Logo variant="full" />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Everyday products that make life better. Quality you can trust, delivered fast across the Bahamas.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://iglobalps.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit iGlobal website"
                className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center hover:bg-[#00A9CE] hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:iglobalps@hotmail.com"
                aria-label="Email iGlobal"
                className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center hover:bg-[#00A9CE] hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="tel:242-462-7499"
                aria-label="Call iGlobal"
                className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center hover:bg-[#00A9CE] hover:text-white transition-colors"
              >
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
                  <Link href={link.href} className="text-gray-600 hover:text-[#00A9CE] transition-colors text-sm">
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
                  <Link href={link.href} className="text-gray-600 hover:text-[#00A9CE] transition-colors text-sm">
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
                <a href="tel:242-462-7499" className="flex items-center gap-3 text-gray-600 hover:text-[#00A9CE] transition-colors text-sm">
                  <div className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center">
                    <Phone className="w-4 h-4 text-[#00A9CE]" />
                  </div>
                  <span>242-462-7499</span>
                </a>
              </li>
              <li>
                <a href="mailto:iglobalps@hotmail.com" className="flex items-center gap-3 text-gray-600 hover:text-[#00A9CE] transition-colors text-sm">
                  <div className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center">
                    <Mail className="w-4 h-4 text-[#00A9CE]" />
                  </div>
                  <span>iglobalps@hotmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-gray-600 text-sm">
                  <div className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-[#FDDA25]" />
                  </div>
                  <span>The Bahamas</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} iGlobal Products and Services. All rights reserved.
          </p>
          <p className="text-[#FDDA25] text-xs italic" style={{ fontFamily: 'Georgia, serif' }}>
            Makes Your Life Better
          </p>
        </div>
      </div>
    </footer>
  );
}
