import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsAndConditionsPage() {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen bg-gradient-to-b from-white to-gray-50">
        <section className="py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Terms and Conditions</h1>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                By placing an order with iGlobal Products and Services, you agree to our pricing, payment,
                and delivery terms listed at checkout and on your order confirmation.
              </p>
              <p>
                Product images and descriptions are provided for guidance. Availability may change based on
                inventory and supplier timelines.
              </p>
              <p>
                Delivery windows are estimated and may be affected by weather, logistics delays, or location
                constraints. We will communicate updates if delivery timing changes.
              </p>
              <p>
                For support, exchanges, or order questions, contact 242-462-7499 or iglobalps@hotmail.com.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
