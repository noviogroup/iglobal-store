import { supabase } from "./supabase";

export type OrderStatus = "pending" | "processing" | "shipped" | "delivered" | "cancelled";

export type CreateOrderData = {
  user_id?: string | null;
  stripe_session_id: string;
  stripe_payment_intent?: string;
  customer_email: string;
  customer_name?: string;
  customer_phone?: string;
  shipping_address?: Record<string, unknown>;
  billing_address?: Record<string, unknown>;
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  status?: OrderStatus;
};

export type OrderItem = {
  order_id: string;
  product_id: string | null;
  product_slug: string;
  product_name: string;
  product_image: string;
  quantity: number;
  unit_price: number;
  subtotal: number;
};

export async function createOrder(orderData: CreateOrderData) {
  const { data, error } = await supabase
    .from("orders")
    .insert({
      user_id: orderData.user_id || null,
      stripe_session_id: orderData.stripe_session_id,
      stripe_payment_intent: orderData.stripe_payment_intent || null,
      customer_email: orderData.customer_email,
      customer_name: orderData.customer_name || null,
      customer_phone: orderData.customer_phone || null,
      shipping_address: orderData.shipping_address || null,
      billing_address: orderData.billing_address || null,
      subtotal: orderData.subtotal,
      tax: orderData.tax,
      shipping: orderData.shipping,
      total: orderData.total,
      status: orderData.status || "pending",
    })
    .select()
    .single();

  if (error) {
    console.error("Error creating order:", error);
    throw error;
  }

  return data;
}

export async function createOrderItems(items: OrderItem[]) {
  const { data, error } = await supabase
    .from("order_items")
    .insert(items)
    .select();

  if (error) {
    console.error("Error creating order items:", error);
    throw error;
  }

  return data;
}

export async function getOrderByStripeSession(sessionId: string) {
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("stripe_session_id", sessionId)
    .maybeSingle();

  if (error) {
    console.error("Error fetching order:", error);
    return null;
  }

  return data;
}

export async function getOrderWithItems(orderId: string) {
  const { data: order, error: orderError } = await supabase
    .from("orders")
    .select("*")
    .eq("id", orderId)
    .single();

  if (orderError) {
    console.error("Error fetching order:", orderError);
    return null;
  }

  const { data: items, error: itemsError } = await supabase
    .from("order_items")
    .select("*")
    .eq("order_id", orderId);

  if (itemsError) {
    console.error("Error fetching order items:", itemsError);
    return { ...order, items: [] };
  }

  return { ...order, items };
}

export async function updateOrderStatus(orderId: string, status: OrderStatus) {
  const { data, error } = await supabase
    .from("orders")
    .update({ status })
    .eq("id", orderId)
    .select()
    .single();

  if (error) {
    console.error("Error updating order status:", error);
    throw error;
  }

  return data;
}

export async function updateOrderPaymentIntent(orderId: string, paymentIntentId: string) {
  const { data, error } = await supabase
    .from("orders")
    .update({ stripe_payment_intent: paymentIntentId })
    .eq("id", orderId)
    .select()
    .single();

  if (error) {
    console.error("Error updating payment intent:", error);
    throw error;
  }

  return data;
}
