# iGlobal Store

iGlobal Store is a Next.js storefront for iGlobal Products and Services, focused on product discovery and secure Stripe checkout.

## Features

- Homepage with branded hero, featured products, trust section, and conversion CTA
- Product catalog at `/products`
- Product detail pages at `/products/[slug]`
- Stripe checkout flow:
  - `POST /api/checkout`
  - Success page at `/checkout/success`
  - Cancel page at `/checkout/cancel`
- Support, contact, privacy policy, and terms pages

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS + shadcn/ui
- Stripe (server-side checkout session creation)

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Create `.env.local`:

```bash
STRIPE_SECRET_KEY=sk_test_xxx
```

3. Start development server:

```bash
npm run dev
```

4. Open `http://localhost:3000`.

## Checkout Notes

- Checkout sessions are created in `src/app/api/checkout/route.ts`.
- Product data currently comes from `src/lib/products.ts`.
- The code is prepared to switch product/order data to your database layer.

## Database Plan

Database design and migration guidance is in:

- `docs/database-plan.md`

Your dev team can implement the schema and replace the in-memory product source with DB queries while keeping frontend contracts unchanged.
