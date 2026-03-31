"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import CheckoutButton from "@/components/CheckoutButton";
import { Minus, Plus, Phone } from "lucide-react";

type ProductPurchasePanelProps = {
  productSlug: string;
  price: number;
};

export default function ProductPurchasePanel({ productSlug, price }: ProductPurchasePanelProps) {
  const [quantity, setQuantity] = useState(1);

  const subtotal = price * quantity;

  return (
    <>
      <div className="flex items-center gap-3 mb-5">
        <span className="text-sm text-gray-500 uppercase tracking-wide">Quantity</span>
        <div className="flex items-center border rounded-lg overflow-hidden">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => setQuantity((current) => Math.max(1, current - 1))}
            className="rounded-none"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" />
          </Button>
          <span className="w-12 text-center font-semibold">{quantity}</span>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => setQuantity((current) => Math.min(10, current + 1))}
            className="rounded-none"
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
        <div>
          <span className="text-4xl font-bold text-[#00A9CE]">${subtotal}</span>
          <span className="text-sm text-gray-500">.00 total</span>
        </div>

        <div className="flex items-center gap-3">
          <CheckoutButton
            productSlug={productSlug}
            quantity={quantity}
            className="bg-[#00A9CE] hover:bg-black text-white px-8"
          >
            Checkout Securely
          </CheckoutButton>
          <Button asChild size="lg" variant="outline" className="px-6">
            <a href="tel:242-462-7499">
              <Phone className="w-4 h-4 mr-2" />
              Order by Phone
            </a>
          </Button>
        </div>
      </div>
    </>
  );
}
