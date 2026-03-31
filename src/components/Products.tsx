"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Eye } from "lucide-react";
import Link from "next/link";
import { getAllProducts, type Product } from "@/lib/products";
import CheckoutButton from "@/components/CheckoutButton";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      const data = await getAllProducts();
      setProducts(data);
      setLoading(false);
    }
    loadProducts();
  }, []);

  if (loading) {
    return (
      <section id="products" className="relative -mt-[15px] z-20 py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">Loading products...</p>
        </div>
      </section>
    );
  }
  return (
    <section id="products" className="relative -mt-[15px] z-20 py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="bg-[#00A9CE]/10 text-[#00A9CE] border-0 px-4 py-2 mb-6">
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
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group relative overflow-hidden rounded-3xl border-0 shadow-md hover:shadow-xl transition-all duration-500 bg-white p-0"
            >
              {/* Image + Overlay Content */}
              <div className="relative h-[400px] sm:h-[430px] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent" />

                {/* Badge */}
                <Badge className="absolute top-3 left-3 bg-[#FDDA25] text-black border-0 shadow-lg font-semibold">
                  {product.badge}
                </Badge>

                {/* Quick Actions */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <Button
                    asChild
                    size="icon"
                    variant="secondary"
                    className="w-10 h-10 rounded-full shadow-lg bg-white hover:bg-[#00A9CE] hover:text-white"
                  >
                    <Link href={`/products/${product.slug}`} aria-label={`View ${product.name}`}>
                      <Eye className="w-4 h-4" />
                    </Link>
                  </Button>
                  <CheckoutButton
                    productSlug={product.slug}
                    className="w-10 h-10 rounded-full shadow-lg bg-[#00A9CE] hover:bg-black p-0"
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </CheckoutButton>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                {/* Category */}
                <span className="text-xs font-medium text-white/80 uppercase tracking-wider">
                  {product.category}
                </span>

                {/* Title */}
                <h3 className="font-bold text-xl mt-2 mb-1 text-white group-hover:text-[#FDDA25] transition-colors line-clamp-2">
                  <Link href={`/products/${product.slug}`}>{product.name}</Link>
                </h3>

                {/* Description */}
                <p className="text-white/85 text-sm mb-3 line-clamp-2">
                  {product.short_description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FDDA25] text-[#FDDA25]" />
                  ))}
                  <span className="text-sm text-white/80 ml-2">(5.0)</span>
                </div>

                {/* Price & Action */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-[#FDDA25]">${product.price}</span>
                    <span className="text-sm text-white/80">.00</span>
                  </div>
                  <CheckoutButton
                    productSlug={product.slug}
                    className="shadow-md bg-[#00A9CE] hover:bg-black"
                  >
                    Checkout
                    <ShoppingCart className="w-4 h-4 ml-2" />
                  </CheckoutButton>
                </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4">
            Browse our wide selection of everyday essentials designed to make your life easier.
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-[#00A9CE] text-[#00A9CE] hover:bg-[#00A9CE] hover:text-white"
          >
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
