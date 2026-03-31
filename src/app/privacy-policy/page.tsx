import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen bg-gradient-to-b from-white to-gray-50">
        <section className="py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Privacy Policy</h1>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                iGlobal Products and Services collects only the information needed to process orders,
                provide delivery updates, and support customer service. This may include your name,
                phone number, email address, delivery details, and order history.
              </p>
              <p>
                Payments are processed through Stripe. Card information is handled securely by Stripe and
                is not stored on iGlobal servers.
              </p>
              <p>
                We use your contact information only for order fulfillment, customer support, and critical
                service communication. We do not sell customer data to third parties.
              </p>
              <p>
                If you need a copy of your data or want your customer information removed, contact us at
                iglobalps@hotmail.com or call 242-462-7499.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
