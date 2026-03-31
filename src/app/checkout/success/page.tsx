import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function CheckoutSuccessPage() {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen bg-gradient-to-b from-white to-gray-50">
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <CheckCircle2 className="w-16 h-16 text-[#00A9CE] mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Payment Confirmed</h1>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for your order. Our team will contact you shortly with delivery updates.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Button asChild className="bg-[#00A9CE] hover:bg-black">
                <Link href="/products">Continue Shopping</Link>
              </Button>
              <Button asChild variant="outline">
                <a href="tel:242-462-7499">Call Support</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
