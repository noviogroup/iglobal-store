"use client";

import { Badge } from "@/components/ui/badge";
import { Truck, Shield, Award, Headphones } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick and reliable delivery across the Bahamas. Get your essentials when you need them.",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "Every product is carefully selected and tested to ensure the highest quality standards.",
  },
  {
    icon: Award,
    title: "Premium Products",
    description: "We source only the best materials and brands for everyday convenience.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description: "Our dedicated team is here to help you with any questions or concerns.",
  },
];

export default function Features() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-[#00ABC9]/5 via-white to-[#FCD116]/5 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00ABC9]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#FCD116]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="bg-[#00ABC9]/10 text-[#00ABC9] border-0 px-4 py-2 mb-6">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Quality You <span className="text-gradient">Trust</span>
          </h2>
          <p className="text-lg text-gray-600">
            We're committed to providing everyday essentials that make your life better. Here's why customers love us.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-[#00ABC9] to-[#00d4ff] rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-[#00ABC9]/20 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#00ABC9] transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00ABC9] to-[#FCD116] rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">500+</div>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">100%</div>
            <p className="text-gray-600">Quality Products</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">5.0</div>
            <p className="text-gray-600">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
