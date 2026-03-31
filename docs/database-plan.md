# iGlobal Store Database Plan

This plan matches the current website and Stripe checkout flow.
Application code is already structured so these tables can be wired in with minimal changes.

## 1) Core Tables

### `customers`
- `id` (uuid, pk)
- `email` (text, unique, nullable)
- `phone` (text, nullable)
- `first_name` (text)
- `last_name` (text)
- `created_at` (timestamptz)
- `updated_at` (timestamptz)

### `products`
- `id` (uuid, pk)
- `slug` (text, unique)
- `name` (text)
- `short_description` (text)
- `description` (text)
- `price_cents` (integer)
- `currency` (text, default `usd`)
- `category` (text)
- `badge` (text, nullable)
- `image_url` (text, nullable)
- `is_active` (boolean, default true)
- `created_at` (timestamptz)
- `updated_at` (timestamptz)

### `product_features`
- `id` (uuid, pk)
- `product_id` (uuid, fk -> `products.id`)
- `feature_text` (text)
- `sort_order` (integer, default 0)

### `orders`
- `id` (uuid, pk)
- `order_number` (text, unique)
- `customer_id` (uuid, fk -> `customers.id`, nullable for guest checkout)
- `status` (text)  
  - Suggested enum values: `pending`, `paid`, `fulfilled`, `cancelled`, `refunded`
- `currency` (text, default `usd`)
- `subtotal_cents` (integer)
- `shipping_cents` (integer, default 0)
- `tax_cents` (integer, default 0)
- `total_cents` (integer)
- `notes` (text, nullable)
- `created_at` (timestamptz)
- `updated_at` (timestamptz)

### `order_items`
- `id` (uuid, pk)
- `order_id` (uuid, fk -> `orders.id`)
- `product_id` (uuid, fk -> `products.id`)
- `quantity` (integer)
- `unit_price_cents` (integer)
- `line_total_cents` (integer)

### `payments`
- `id` (uuid, pk)
- `order_id` (uuid, fk -> `orders.id`)
- `provider` (text, default `stripe`)
- `stripe_checkout_session_id` (text, unique, nullable)
- `stripe_payment_intent_id` (text, unique, nullable)
- `amount_cents` (integer)
- `currency` (text)
- `status` (text)
- `raw_payload` (jsonb, nullable)
- `created_at` (timestamptz)
- `updated_at` (timestamptz)

## 2) Stripe Webhook Processing

Add webhook endpoint and store events in:

### `webhook_events`
- `id` (uuid, pk)
- `provider` (text, default `stripe`)
- `event_id` (text, unique)
- `event_type` (text)
- `payload` (jsonb)
- `processed_at` (timestamptz, nullable)
- `created_at` (timestamptz)

Primary events to handle:
- `checkout.session.completed`
- `payment_intent.succeeded`
- `payment_intent.payment_failed`
- `charge.refunded`

## 3) Suggested Indexes

- `products.slug` unique index
- `orders.order_number` unique index
- `orders.customer_id`, `orders.status`, `orders.created_at`
- `order_items.order_id`
- `payments.order_id`, `payments.stripe_checkout_session_id`
- `webhook_events.event_id` unique index

## 4) Suggested Migration Path

1. Seed `products` and `product_features` from current `src/lib/products.ts`.
2. Replace in-memory product fetch with DB query layer.
3. On checkout creation, create a `pending` order row + `order_items`.
4. Store Stripe session ID on `payments`.
5. Confirm payment and mark order `paid` via webhook.
6. Expose internal admin views for orders and fulfillment.

## 5) App Contract To Keep Stable

These fields are already assumed by frontend and checkout:
- `slug`
- `name`
- `shortDescription`
- `description`
- `price`
- `image`
- `category`
- `badge`
- `features[]`

Map DB columns to these keys in your repository/service layer so UI stays unchanged.
