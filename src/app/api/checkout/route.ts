import { NextRequest, NextResponse } from "next/server";
import { getProductBySlug } from "@/lib/products";
import { getStripeServerClient } from "@/lib/stripe";

type CheckoutRequestPayload = {
  productSlug?: string;
  quantity?: number;
};

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as CheckoutRequestPayload;

    if (!body.productSlug) {
      return NextResponse.json({ error: "Missing product slug." }, { status: 400 });
    }

    const product = getProductBySlug(body.productSlug);
    if (!product) {
      return NextResponse.json({ error: "Product not found." }, { status: 404 });
    }

    const quantity = Math.max(1, Math.min(10, body.quantity ?? 1));
    const stripe = getStripeServerClient();
    const origin = request.nextUrl.origin;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout/cancel`,
      payment_method_types: ["card"],
      line_items: [
        {
          quantity,
          price_data: {
            currency: "usd",
            unit_amount: Math.round(product.price * 100),
            product_data: {
              name: product.name,
              description: product.shortDescription,
              images: [product.image],
              metadata: {
                slug: product.slug,
                category: product.category,
              },
            },
          },
        },
      ],
      metadata: {
        productSlug: product.slug,
        quantity: String(quantity),
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unexpected checkout error. Please try again.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
