import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { getAllProducts } from "@/lib/products";
import CheckoutButton from "@/components/CheckoutButton";

export const metadata: Metadata = {
  title: "Products | iGlobal Products and Services",
  description: "Browse the latest iGlobal products and shop quality essentials in The Bahamas.",
};

export default async function ProductsPage() {
  const products = await getAllProducts();
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen bg-gradient-to-b from-white to-gray-50">
        <section className="py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge className="bg-[#00ABC9]/10 text-[#00ABC9] border-0 px-4 py-2 mb-5">
                iGlobal Store
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold mb-5">
                All <span className="text-gradient">Products</span>
              </h1>
              <p className="text-lg text-gray-600">
                Explore our collection of premium everyday essentials.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden border-0 shadow-lg bg-white">
                  <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="absolute inset-0 h-full w-full object-contain p-8"
                    />
                    <Badge className="absolute top-4 left-4 bg-[#FCD116] text-black border-0 shadow font-semibold">
                      {product.badge}
                    </Badge>
                  </div>

                  <CardContent className="p-6">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {product.category}
                    </p>
                    <h2 className="text-2xl font-bold mt-2 mb-2">{product.name}</h2>
                    <p className="text-gray-600 mb-4">{product.short_description}</p>

                    <div className="flex items-center gap-1 mb-5">
                      {[...Array(product.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#FCD116] text-[#FCD116]" />
                      ))}
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <span className="text-3xl font-bold text-[#00ABC9]">${product.price}</span>
                        <span className="text-sm text-gray-500">.00</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button asChild variant="outline">
                          <Link href={`/products/${product.slug}`}>Details</Link>
                        </Button>
                        <CheckoutButton
                          productSlug={product.slug}
                          className="bg-[#00ABC9] hover:bg-[#008da6]"
                        >
                          Checkout
                        </CheckoutButton>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
