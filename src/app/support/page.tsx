import Header from "@/components/Header";
import Footer from "@/components/Footer";

const faqs = [
  {
    question: "How quickly do you deliver in The Bahamas?",
    answer:
      "Most Nassau orders are delivered within 1-2 business days. Family island deliveries vary by carrier schedule and destination.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept secure online card payments through Stripe checkout, and phone-assisted orders for customers who prefer direct support.",
  },
  {
    question: "How do I get help with a product issue?",
    answer:
      "Call us at 242-462-7499 or email iglobalps@hotmail.com with your order details and we will assist you promptly.",
  },
];

export default function SupportPage() {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen bg-gradient-to-b from-white to-gray-50">
        <section className="py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Support Center</h1>
            <p className="text-lg text-gray-600 mb-10">
              Need help? Our team is ready to support your orders, deliveries, and product questions.
            </p>

            <div className="space-y-6">
              {faqs.map((item) => (
                <article key={item.question} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <h2 className="text-xl font-semibold mb-2">{item.question}</h2>
                  <p className="text-gray-600">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
