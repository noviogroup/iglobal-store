"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Eye } from "lucide-react";

const products = [
  {
    id: 1,
    name: "IG Wonder Self-Wringing Mop",
    description: "Revolutionary self-wringing design for effortless cleaning. No bucket needed!",
    price: 25,
    rating: 5,
    image: "/images/mop.png",
    badge: "Best Seller",
    category: "Cleaning",
  },
  {
    id: 2,
    name: "Premium Zinc Alloy Magnetic Phone Mount",
    description: "N52 MagSafe compatible with powerful vacuum suction. Perfect for any car.",
    price: 30,
    rating: 5,
    image: "/images/phone-mount.jpeg",
    badge: "Premium",
    category: "Auto",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="bg-[#00ABC9]/10 text-[#00ABC9] border-0 px-4 py-2 mb-6">
            Shop Our Collection
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Products</span>
          </h2>
          <p className="text-lg text-gray-600">
            Quality everyday essentials designed to make your life easier and more convenient.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
            >
              {/* Image Container */}
              <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badge */}
                <Badge className="absolute top-4 left-4 bg-[#FCD116] text-black border-0 shadow-lg font-semibold">
                  {product.badge}
                </Badge>

                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <Button size="icon" variant="secondary" className="w-10 h-10 rounded-full shadow-lg bg-white hover:bg-[#00ABC9] hover:text-white">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button size="icon" className="w-10 h-10 rounded-full shadow-lg bg-[#00ABC9] hover:bg-[#008da6]">
                    <ShoppingCart className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Category */}
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {product.category}
                </span>

                {/* Title */}
                <h3 className="font-bold text-xl mt-2 mb-2 group-hover:text-[#00ABC9] transition-colors line-clamp-2">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FCD116] text-[#FCD116]" />
                  ))}
                  <span className="text-sm text-gray-500 ml-2">(5.0)</span>
                </div>

                {/* Price & Action */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-[#00ABC9]">${product.price}</span>
                    <span className="text-sm text-gray-500">.00</span>
                  </div>
                  <Button className="shadow-lg bg-[#00ABC9] hover:bg-[#008da6]">
                    Add to Cart
                    <ShoppingCart className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Browse our wide selection of everyday essentials designed to make your life easier.
          </p>
          <Button variant="outline" size="lg" className="border-2 border-[#00ABC9] text-[#00ABC9] hover:bg-[#00ABC9] hover:text-white">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
