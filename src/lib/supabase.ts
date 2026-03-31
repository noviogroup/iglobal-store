import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          phone: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          phone?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          phone?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      addresses: {
        Row: {
          id: string;
          user_id: string;
          type: "shipping" | "billing";
          full_name: string;
          address_line1: string;
          address_line2: string | null;
          city: string;
          state: string;
          postal_code: string;
          country: string;
          phone: string | null;
          is_default: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          type: "shipping" | "billing";
          full_name: string;
          address_line1: string;
          address_line2?: string | null;
          city: string;
          state: string;
          postal_code: string;
          country?: string;
          phone?: string | null;
          is_default?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          type?: "shipping" | "billing";
          full_name?: string;
          address_line1?: string;
          address_line2?: string | null;
          city?: string;
          state?: string;
          postal_code?: string;
          country?: string;
          phone?: string | null;
          is_default?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      products: {
        Row: {
          id: string;
          slug: string;
          name: string;
          short_description: string;
          description: string;
          price: number;
          rating: number;
          image: string;
          badge: string | null;
          category: string;
          features: string[];
          stock_quantity: number;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          name: string;
          short_description: string;
          description: string;
          price: number;
          rating?: number;
          image: string;
          badge?: string | null;
          category: string;
          features?: string[];
          stock_quantity?: number;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          name?: string;
          short_description?: string;
          description?: string;
          price?: number;
          rating?: number;
          image?: string;
          badge?: string | null;
          category?: string;
          features?: string[];
          stock_quantity?: number;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      orders: {
        Row: {
          id: string;
          user_id: string | null;
          order_number: string;
          status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
          subtotal: number;
          tax: number;
          shipping: number;
          total: number;
          stripe_session_id: string | null;
          stripe_payment_intent: string | null;
          customer_email: string;
          customer_name: string | null;
          customer_phone: string | null;
          shipping_address: Record<string, unknown> | null;
          billing_address: Record<string, unknown> | null;
          tracking_number: string | null;
          shipped_at: string | null;
          delivered_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id?: string | null;
          order_number?: string;
          status?: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
          subtotal?: number;
          tax?: number;
          shipping?: number;
          total?: number;
          stripe_session_id?: string | null;
          stripe_payment_intent?: string | null;
          customer_email: string;
          customer_name?: string | null;
          customer_phone?: string | null;
          shipping_address?: Record<string, unknown> | null;
          billing_address?: Record<string, unknown> | null;
          tracking_number?: string | null;
          shipped_at?: string | null;
          delivered_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string | null;
          order_number?: string;
          status?: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
          subtotal?: number;
          tax?: number;
          shipping?: number;
          total?: number;
          stripe_session_id?: string | null;
          stripe_payment_intent?: string | null;
          customer_email?: string;
          customer_name?: string | null;
          customer_phone?: string | null;
          shipping_address?: Record<string, unknown> | null;
          billing_address?: Record<string, unknown> | null;
          tracking_number?: string | null;
          shipped_at?: string | null;
          delivered_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      order_items: {
        Row: {
          id: string;
          order_id: string;
          product_id: string | null;
          product_slug: string;
          product_name: string;
          product_image: string;
          quantity: number;
          unit_price: number;
          subtotal: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          order_id: string;
          product_id?: string | null;
          product_slug: string;
          product_name: string;
          product_image: string;
          quantity: number;
          unit_price: number;
          subtotal: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          order_id?: string;
          product_id?: string | null;
          product_slug?: string;
          product_name?: string;
          product_image?: string;
          quantity?: number;
          unit_price?: number;
          subtotal?: number;
          created_at?: string;
        };
      };
    };
  };
};
