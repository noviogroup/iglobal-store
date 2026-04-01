import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Package, Mail, Phone } from "lucide-react";
import { getOrderByStripeSession } from "@/lib/orders";

type CheckoutSuccessPageProps = {
  searchParams: Promise<{ session_id?: string }>;
};

export default async function CheckoutSuccessPage({ searchParams }: CheckoutSuccessPageProps) {
  const params = await searchParams;
  const sessionId = params.session_id;

  let order = null;
  if (sessionId) {
    order = await getOrderByStripeSession(sessionId);
  }

  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen bg-gradient-to-b from-white to-gray-50">
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
              <h1 className="text-4xl font-bold mb-4">Payment Confirmed!</h1>
              <p className="text-lg text-gray-600">
                Thank you for your order. We've received your payment successfully.
              </p>
            </div>

            {order && (
              <Card className="p-6 mb-8 border-0 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-start justify-between border-b pb-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Order Number</p>
                      <p className="text-xl font-bold text-[#00A9CE]">{order.order_number}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500 mb-1">Total Amount</p>
                      <p className="text-xl font-bold">${order.total.toFixed(2)}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 mb-1">Order Status</p>
                    <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </div>

                  {order.customer_email && (
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Confirmation Email</p>
                      <p className="text-gray-700">{order.customer_email}</p>
                    </div>
                  )}
                </div>
              </Card>
            )}

            <div className="grid md:grid-cols-3 gap-4 mb-10">
              <Card className="p-6 text-center border-0 shadow">
                <Package className="w-8 h-8 text-[#00A9CE] mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Order Processing</h3>
                <p className="text-sm text-gray-600">We're preparing your items for shipment</p>
              </Card>
              <Card className="p-6 text-center border-0 shadow">
                <Mail className="w-8 h-8 text-[#00A9CE] mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Email Updates</h3>
                <p className="text-sm text-gray-600">You'll receive tracking info soon</p>
              </Card>
              <Card className="p-6 text-center border-0 shadow">
                <Phone className="w-8 h-8 text-[#00A9CE] mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Need Help?</h3>
                <p className="text-sm text-gray-600">Call us at 242-462-7499</p>
              </Card>
            </div>

            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Button asChild size="lg" className="bg-[#00A9CE] hover:bg-black">
                <Link href="/products">Continue Shopping</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
