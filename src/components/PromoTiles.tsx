"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { getAllProducts, type Product } from "@/lib/products";
import { useEffect, useState } from "react";

type PromoTile = {
  key: string;
  title: string;
  subtitle: string;
  cta: string;
  href: string;
  image: string;
  price: number;
  badge: string;
  className: string;
};

function createPromoTiles(products: Product[]): PromoTile[] {
  return products.slice(0, 4).map((product, index) => {
    const tileClassName =
      index === 0
        ? "lg:col-span-7 lg:row-span-2 min-h-[360px] lg:min-h-[500px]"
        : index === 1
          ? "lg:col-span-5 min-h-[240px]"
          : index === 2
            ? "lg:col-span-3 min-h-[230px]"
            : "lg:col-span-2 min-h-[230px]";

    return {
      key: product.slug,
      title: product.name,
      subtitle: product.short_description,
      cta: "Shop now",
      href: `/products/${product.slug}`,
      image: product.image,
      price: product.price,
      badge: product.badge || "",
      className: tileClassName,
    };
  });
}

function PromoCard({ tile }: { tile: PromoTile }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 ${tile.className}`}
    >
      <img
        src={tile.image}
        alt={tile.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />

      <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-6 text-white">
        <div>
          <Badge className="bg-[#FDDA25] text-black border-0 shadow-sm">{tile.badge}</Badge>
          <h3 className="mt-3 max-w-sm text-xl sm:text-2xl font-bold leading-tight">{tile.title}</h3>
          <p className="mt-2 max-w-md text-sm text-white/80 line-clamp-2">{tile.subtitle}</p>
        </div>

        <div className="flex items-center justify-between gap-3">
          <div className="text-xl font-bold text-[#FDDA25]">${tile.price}.00</div>
          <Link
            href={tile.href}
            className="inline-flex w-fit items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-white"
          >
            {tile.cta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function PromoTiles() {
  const [promoTiles, setPromoTiles] = useState<PromoTile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPromoTiles() {
      const products = await getAllProducts();
      setPromoTiles(createPromoTiles(products));
      setLoading(false);
    }
    loadPromoTiles();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">Loading featured products...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Badge className="bg-[#00A9CE]/10 text-[#00A9CE] border-0 px-4 py-2 mb-3">Featured Products</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Shop <span className="text-gradient">Trending Picks</span>
            </h2>
          </div>
          <Button asChild variant="outline" className="w-fit border-[#00A9CE] text-[#00A9CE] hover:bg-[#00A9CE] hover:text-white">
            <Link href="/products">View all deals</Link>
          </Button>
        </div>

        <div className="grid gap-4 sm:gap-5 lg:grid-cols-12 auto-rows-fr">
          {promoTiles.map((tile) => (
            <PromoCard key={tile.key} tile={tile} />
          ))}
        </div>
      </div>
    </section>
  );
}
