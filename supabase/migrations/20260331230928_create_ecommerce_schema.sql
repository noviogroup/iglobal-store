/*
  # E-commerce Database Schema for iGlobal Products

  ## Overview
  Complete database schema for managing products, users, orders, and customer data for the iGlobal Products e-commerce platform.

  ## 1. New Tables

  ### `profiles`
  User profile information linked to Supabase auth users
  - `id` (uuid, primary key) - Links to auth.users
  - `email` (text) - User email
  - `full_name` (text) - Customer full name
  - `phone` (text) - Contact phone number
  - `created_at` (timestamptz) - Account creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### `addresses`
  Shipping and billing addresses for customers
  - `id` (uuid, primary key)
  - `user_id` (uuid, foreign key) - Links to profiles
  - `type` (text) - 'shipping' or 'billing'
  - `full_name` (text) - Recipient name
  - `address_line1` (text) - Street address
  - `address_line2` (text) - Apartment, suite, etc.
  - `city` (text) - City
  - `state` (text) - State/province
  - `postal_code` (text) - ZIP/postal code
  - `country` (text) - Country code
  - `phone` (text) - Contact phone
  - `is_default` (boolean) - Default address flag
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### `products`
  Product catalog with all details
  - `id` (uuid, primary key)
  - `slug` (text, unique) - URL-friendly identifier
  - `name` (text) - Product name
  - `short_description` (text) - Brief description
  - `description` (text) - Full description
  - `price` (numeric) - Product price in USD
  - `rating` (numeric) - Customer rating (0-5)
  - `image` (text) - Primary image URL
  - `badge` (text) - Display badge (Best Seller, New, etc.)
  - `category` (text) - Product category
  - `features` (jsonb) - Array of feature strings
  - `stock_quantity` (integer) - Available inventory
  - `is_active` (boolean) - Product visibility
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### `orders`
  Customer orders with payment and status tracking
  - `id` (uuid, primary key)
  - `user_id` (uuid, foreign key) - Links to profiles (nullable for guest checkout)
  - `order_number` (text, unique) - Human-readable order number
  - `status` (text) - Order status: 'pending', 'processing', 'shipped', 'delivered', 'cancelled'
  - `subtotal` (numeric) - Order subtotal
  - `tax` (numeric) - Tax amount
  - `shipping` (numeric) - Shipping cost
  - `total` (numeric) - Total order amount
  - `stripe_session_id` (text) - Stripe checkout session ID
  - `stripe_payment_intent` (text) - Stripe payment intent ID
  - `customer_email` (text) - Customer email
  - `customer_name` (text) - Customer name
  - `customer_phone` (text) - Customer phone
  - `shipping_address` (jsonb) - Shipping address details
  - `billing_address` (jsonb) - Billing address details
  - `tracking_number` (text) - Shipping tracking number
  - `shipped_at` (timestamptz) - Shipping date
  - `delivered_at` (timestamptz) - Delivery date
  - `created_at` (timestamptz) - Order creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### `order_items`
  Individual line items within orders
  - `id` (uuid, primary key)
  - `order_id` (uuid, foreign key) - Links to orders
  - `product_id` (uuid, foreign key) - Links to products
  - `product_slug` (text) - Product slug at time of order
  - `product_name` (text) - Product name at time of order
  - `product_image` (text) - Product image URL at time of order
  - `quantity` (integer) - Quantity ordered
  - `unit_price` (numeric) - Price per unit at time of order
  - `subtotal` (numeric) - Line item subtotal
  - `created_at` (timestamptz)

  ## 2. Security (Row Level Security)

  All tables have RLS enabled with policies for:
  - Users can read/update their own profiles
  - Users can manage their own addresses
  - Users can view their own orders
  - Products are publicly readable
  - Order creation allowed for authenticated and guest users
  - Admin access patterns prepared for future implementation

  ## 3. Indexes

  Performance indexes on:
  - Product slug (unique lookup)
  - Order number (unique lookup)
  - User foreign keys for fast joins
  - Order status for filtering
  - Created timestamps for sorting

  ## 4. Functions

  - `generate_order_number()` - Generates unique order numbers (ORD-YYYYMMDD-XXXX format)
  - Auto-update `updated_at` timestamps via triggers
*/

-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =====================================================
-- PROFILES TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text NOT NULL,
  full_name text,
  phone text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- =====================================================
-- ADDRESSES TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS addresses (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  type text NOT NULL CHECK (type IN ('shipping', 'billing')),
  full_name text NOT NULL,
  address_line1 text NOT NULL,
  address_line2 text,
  city text NOT NULL,
  state text NOT NULL,
  postal_code text NOT NULL,
  country text NOT NULL DEFAULT 'US',
  phone text,
  is_default boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE addresses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own addresses"
  ON addresses FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own addresses"
  ON addresses FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own addresses"
  ON addresses FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own addresses"
  ON addresses FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Index for user lookups
CREATE INDEX IF NOT EXISTS idx_addresses_user_id ON addresses(user_id);

-- =====================================================
-- PRODUCTS TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug text UNIQUE NOT NULL,
  name text NOT NULL,
  short_description text NOT NULL,
  description text NOT NULL,
  price numeric(10, 2) NOT NULL CHECK (price >= 0),
  rating numeric(2, 1) DEFAULT 5.0 CHECK (rating >= 0 AND rating <= 5),
  image text NOT NULL,
  badge text,
  category text NOT NULL,
  features jsonb DEFAULT '[]'::jsonb,
  stock_quantity integer DEFAULT 0 CHECK (stock_quantity >= 0),
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Products are publicly readable"
  ON products FOR SELECT
  TO public
  USING (is_active = true);

-- Index for slug lookups
CREATE UNIQUE INDEX IF NOT EXISTS idx_products_slug ON products(slug);

-- =====================================================
-- ORDERS TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid REFERENCES profiles(id) ON DELETE SET NULL,
  order_number text UNIQUE NOT NULL,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'shipped', 'delivered', 'cancelled')),
  subtotal numeric(10, 2) NOT NULL DEFAULT 0,
  tax numeric(10, 2) NOT NULL DEFAULT 0,
  shipping numeric(10, 2) NOT NULL DEFAULT 0,
  total numeric(10, 2) NOT NULL DEFAULT 0,
  stripe_session_id text,
  stripe_payment_intent text,
  customer_email text NOT NULL,
  customer_name text,
  customer_phone text,
  shipping_address jsonb,
  billing_address jsonb,
  tracking_number text,
  shipped_at timestamptz,
  delivered_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own orders"
  ON orders FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Allow order creation for authenticated users"
  ON orders FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow order creation for anonymous users"
  ON orders FOR INSERT
  TO anon
  WITH CHECK (true);

-- Indexes for performance
CREATE UNIQUE INDEX IF NOT EXISTS idx_orders_order_number ON orders(order_number);
CREATE INDEX IF NOT EXISTS idx_orders_user_id ON orders(user_id);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON orders(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_orders_stripe_session ON orders(stripe_session_id);

-- =====================================================
-- ORDER ITEMS TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS order_items (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id uuid NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  product_id uuid REFERENCES products(id) ON DELETE SET NULL,
  product_slug text NOT NULL,
  product_name text NOT NULL,
  product_image text NOT NULL,
  quantity integer NOT NULL CHECK (quantity > 0),
  unit_price numeric(10, 2) NOT NULL CHECK (unit_price >= 0),
  subtotal numeric(10, 2) NOT NULL CHECK (subtotal >= 0),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own order items"
  ON order_items FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM orders
      WHERE orders.id = order_items.order_id
      AND orders.user_id = auth.uid()
    )
  );

CREATE POLICY "Allow order item creation"
  ON order_items FOR INSERT
  TO authenticated, anon
  WITH CHECK (true);

-- Index for order lookups
CREATE INDEX IF NOT EXISTS idx_order_items_order_id ON order_items(order_id);
CREATE INDEX IF NOT EXISTS idx_order_items_product_id ON order_items(product_id);

-- =====================================================
-- HELPER FUNCTIONS
-- =====================================================

-- Function to generate unique order numbers
CREATE OR REPLACE FUNCTION generate_order_number()
RETURNS text AS $$
DECLARE
  new_order_number text;
  date_prefix text;
  random_suffix text;
  counter integer := 0;
BEGIN
  date_prefix := 'ORD-' || to_char(now(), 'YYYYMMDD');
  
  LOOP
    random_suffix := LPAD(floor(random() * 10000)::text, 4, '0');
    new_order_number := date_prefix || '-' || random_suffix;
    
    EXIT WHEN NOT EXISTS (SELECT 1 FROM orders WHERE order_number = new_order_number);
    
    counter := counter + 1;
    IF counter > 100 THEN
      RAISE EXCEPTION 'Unable to generate unique order number';
    END IF;
  END LOOP;
  
  RETURN new_order_number;
END;
$$ LANGUAGE plpgsql;

-- Function to auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- =====================================================
-- TRIGGERS
-- =====================================================

-- Auto-update updated_at for profiles
DROP TRIGGER IF EXISTS update_profiles_updated_at ON profiles;
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Auto-update updated_at for addresses
DROP TRIGGER IF EXISTS update_addresses_updated_at ON addresses;
CREATE TRIGGER update_addresses_updated_at
  BEFORE UPDATE ON addresses
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Auto-update updated_at for products
DROP TRIGGER IF EXISTS update_products_updated_at ON products;
CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Auto-update updated_at for orders
DROP TRIGGER IF EXISTS update_orders_updated_at ON orders;
CREATE TRIGGER update_orders_updated_at
  BEFORE UPDATE ON orders
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Auto-generate order number on insert
CREATE OR REPLACE FUNCTION set_order_number()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.order_number IS NULL OR NEW.order_number = '' THEN
    NEW.order_number := generate_order_number();
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS set_order_number_trigger ON orders;
CREATE TRIGGER set_order_number_trigger
  BEFORE INSERT ON orders
  FOR EACH ROW
  EXECUTE FUNCTION set_order_number();