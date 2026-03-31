import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ArrowLeft } from "lucide-react";
import { getProductBySlug, getAllProducts } from "@/lib/products";
import ProductPurchasePanel from "@/components/ProductPurchasePanel";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen bg-gradient-to-b from-white to-gray-50">
        <section className="py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Button asChild variant="ghost" className="mb-8 text-[#00A9CE] hover:text-black">
              <Link href="/products">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Products
              </Link>
            </Button>

            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div className="relative rounded-3xl bg-white shadow-xl border border-gray-100 p-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full max-h-[520px] object-contain"
                />
                <Badge className="absolute top-5 left-5 bg-[#FDDA25] text-black border-0 shadow font-semibold">
                  {product.badge}
                </Badge>
              </div>

              <div>
                <p className="text-sm font-semibold text-[#00A9CE] uppercase tracking-wider mb-3">
                  {product.category}
                </p>
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">{product.name}</h1>

                <div className="flex items-center gap-1 mb-6">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FDDA25] text-[#FDDA25]" />
                  ))}
                  <span className="text-gray-500 ml-2">(5.0)</span>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-7">{product.description}</p>

                <div className="mb-8">
                  <h2 className="font-bold text-xl mb-3">Product Highlights</h2>
                  <ul className="space-y-2 text-gray-700">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#00A9CE]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <ProductPurchasePanel productSlug={product.slug} price={product.price} />

                <p className="text-sm text-gray-500">
                  Need help? Call{" "}
                  <a className="text-[#00A9CE] hover:underline" href="tel:242-462-7499">
                    242-462-7499
                  </a>{" "}
                  or email{" "}
                  <a
                    className="text-[#00A9CE] hover:underline"
                    href="mailto:iglobalps@hotmail.com"
                  >
                    iglobalps@hotmail.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
