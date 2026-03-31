export type Product = {
  id: number;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  badge: string;
  category: string;
  features: string[];
};

export const products: Product[] = [
  {
    id: 1,
    slug: "ig-wonder-self-wringing-mop",
    name: "IG Wonder Self-Wringing Mop",
    shortDescription:
      "Revolutionary self-wringing design for effortless cleaning. No bucket needed.",
    description:
      "The IG Wonder Self-Wringing Mop is built for quick, efficient cleaning with minimal mess. Its self-wringing design helps reduce strain while keeping your hands dry. Perfect for homes, offices, and small commercial spaces.",
    price: 25,
    rating: 5,
    image:
      "https://iglobalps.com/wp-content/uploads/2026/01/Wonder-Self-Wringing-Mop-Cleaning.png",
    badge: "Best Seller",
    category: "Cleaning",
    features: [
      "Self-wringing mechanism",
      "Lightweight and durable",
      "Easy to store",
      "Ideal for tile and hardwood floors",
    ],
  },
  {
    id: 2,
    slug: "premium-zinc-alloy-magnetic-phone-mount",
    name: "Premium Zinc Alloy Magnetic Phone Mount",
    shortDescription:
      "N52 MagSafe compatible with powerful vacuum suction. Perfect for any car.",
    description:
      "This premium magnetic phone mount combines a zinc alloy body with strong vacuum suction for dependable in-car support. Designed for MagSafe-compatible devices, it keeps your phone secure and visible while driving.",
    price: 30,
    rating: 5,
    image:
      "https://iglobalps.com/wp-content/uploads/2026/01/WhatsApp-Image-2025-12-30-at-15.18.51.jpeg",
    badge: "Premium",
    category: "Auto",
    features: [
      "N52 magnetic strength",
      "MagSafe compatible",
      "Vacuum suction base",
      "Premium zinc alloy finish",
    ],
  },
  {
    id: 3,
    slug: "flower-bouquet-light-up",
    name: "Flower Bouquet Light Up",
    shortDescription:
      "Ideal gift with a decorative light-up design and premium dried and soap flowers.",
    description:
      "The flower bouquet is an ideal gift for friends, families, classmates, relatives, teachers, and more. The bouquet can light up, making it look more charming and decorative. The baby breath flowers are natural dried flowers, while the rose and sunflower blooms are made from soap flowers suitable for hand washing and bathtub use.",
    price: 25,
    rating: 5,
    image: "/images/flower-bouquet.png",
    badge: "Gift Idea",
    category: "Gifts",
    features: [
      "Ideal gift for friends, families, classmates, relatives, and teachers",
      "Light-up effect for a charming decorative look",
      "Dried baby breath flowers for a natural touch",
      "Soap rose and sunflower flowers for hand wash and bathtub use",
    ],
  },
  {
    id: 4,
    slug: "toilet-flower-deodorizing-deodorant",
    name: "Toilet Flower Deodorizing Deodorant",
    shortDescription:
      "Flower-shaped toilet cleaner and deodorizer for a fresher bathroom after each flush.",
    description:
      "This Toilet Flower Deodorizing Deodorant is designed to clean and deodorize your toilet bowl while adding a fresh scent. Its flower-style form helps distribute cleaner with each flush for a cleaner, more pleasant bathroom experience.",
    price: 22,
    rating: 5,
    image: "/images/toilet-flower-deodorizing-deodorant.png",
    badge: "New",
    category: "Home Care",
    features: [
      "Flower-shaped toilet deodorizing gel",
      "Helps reduce odors between deep cleans",
      "Easy to place and replace",
      "Great for daily bathroom freshness",
    ],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
