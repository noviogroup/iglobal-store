import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CircleAlert } from "lucide-react";

export default function CheckoutCancelPage() {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen bg-gradient-to-b from-white to-gray-50">
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <CircleAlert className="w-16 h-16 text-[#FCD116] mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Checkout Canceled</h1>
            <p className="text-lg text-gray-600 mb-8">
              Your payment was not completed. You can return to your product and checkout again.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Button asChild className="bg-[#00ABC9] hover:bg-[#008da6]">
                <Link href="/products">Back to Products</Link>
              </Button>
              <Button asChild variant="outline">
                <a href="tel:242-462-7499">Need Help? Call Us</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
