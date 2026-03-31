import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen bg-gradient-to-b from-white to-gray-50">
        <section className="py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact iGlobal</h1>
            <p className="text-lg text-gray-600 mb-10">
              Reach out for product inquiries, order support, and delivery questions.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="tel:242-462-7499"
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <Phone className="w-6 h-6 text-[#00A9CE] mb-3" />
                <h2 className="font-semibold text-lg mb-1">Phone</h2>
                <p className="text-gray-600">242-462-7499</p>
              </a>
              <a
                href="mailto:iglobalps@hotmail.com"
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <Mail className="w-6 h-6 text-[#00A9CE] mb-3" />
                <h2 className="font-semibold text-lg mb-1">Email</h2>
                <p className="text-gray-600">iglobalps@hotmail.com</p>
              </a>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <MapPin className="w-6 h-6 text-[#FDDA25] mb-3" />
                <h2 className="font-semibold text-lg mb-1">Location</h2>
                <p className="text-gray-600">Serving customers across The Bahamas</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
