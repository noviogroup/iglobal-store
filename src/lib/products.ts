import { supabase } from "./supabase";

export type Product = {
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

export async function getAllProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("is_active", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching products:", error);
    return [];
  }

  return data || [];
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .eq("is_active", true)
    .maybeSingle();

  if (error) {
    console.error("Error fetching product:", error);
    return null;
  }

  return data;
}
