export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  category: string;
  stock: number;
  rating: number;
  reviews: number;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

export const categories: Category[] = [
  { id: "electronics", name: "Electronics", icon: "Smartphone", count: 4 },
  { id: "fashion", name: "Fashion", icon: "Shirt", count: 3 },
  { id: "home", name: "Home & Living", icon: "Sofa", count: 3 },
  { id: "sports", name: "Sports", icon: "Dumbbell", count: 2 },
];

export const products: Product[] = [
  {
    id: "1",
    title: "Wireless Noise-Cancelling Headphones",
    price: 79.99,
    originalPrice: 129.99,
    description: "Premium over-ear headphones with active noise cancellation, 30-hour battery life, and crystal-clear audio. Perfect for music lovers and professionals.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    category: "electronics",
    stock: 25,
    rating: 4.8,
    reviews: 234,
    featured: true,
  },
  {
    id: "2",
    title: "Smart Fitness Watch Pro",
    price: 199.99,
    originalPrice: 249.99,
    description: "Track your health and fitness goals with GPS, heart rate monitor, sleep tracking, and 7-day battery life. Water resistant up to 50m.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    category: "electronics",
    stock: 15,
    rating: 4.6,
    reviews: 189,
    featured: true,
  },
  {
    id: "3",
    title: "Minimalist Leather Backpack",
    price: 59.99,
    description: "Handcrafted genuine leather backpack with laptop compartment, multiple pockets, and adjustable straps. Timeless design for everyday use.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
    category: "fashion",
    stock: 30,
    rating: 4.7,
    reviews: 156,
    featured: true,
  },
  {
    id: "4",
    title: "Portable Bluetooth Speaker",
    price: 39.99,
    originalPrice: 59.99,
    description: "Compact waterproof speaker with 360° sound, 12-hour battery, and deep bass. Take your music anywhere.",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80",
    category: "electronics",
    stock: 40,
    rating: 4.5,
    reviews: 312,
  },
  {
    id: "5",
    title: "Organic Cotton Hoodie",
    price: 45.99,
    description: "Ultra-soft organic cotton hoodie with a relaxed fit. Sustainable fashion that feels as good as it looks.",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80",
    category: "fashion",
    stock: 50,
    rating: 4.4,
    reviews: 98,
  },
  {
    id: "6",
    title: "Ceramic Pour-Over Coffee Set",
    price: 34.99,
    description: "Elegant handmade ceramic dripper with thermal carafe. Brew café-quality coffee at home.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&q=80",
    category: "home",
    stock: 20,
    rating: 4.9,
    reviews: 87,
    featured: true,
  },
  {
    id: "7",
    title: "Wireless Charging Pad",
    price: 24.99,
    description: "Fast wireless charger compatible with all Qi-enabled devices. Slim design with LED indicator.",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&q=80",
    category: "electronics",
    stock: 60,
    rating: 4.3,
    reviews: 445,
  },
  {
    id: "8",
    title: "Yoga Mat Premium",
    price: 29.99,
    originalPrice: 44.99,
    description: "Extra-thick eco-friendly yoga mat with alignment lines. Non-slip surface for all yoga styles.",
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&q=80",
    category: "sports",
    stock: 35,
    rating: 4.6,
    reviews: 201,
  },
  {
    id: "9",
    title: "Scented Soy Candle Set",
    price: 22.99,
    description: "Set of 3 hand-poured soy candles in calming scents: lavender, vanilla, and eucalyptus. 40-hour burn time each.",
    image: "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=500&q=80",
    category: "home",
    stock: 45,
    rating: 4.7,
    reviews: 167,
  },
  {
    id: "10",
    title: "Running Shoes Ultra Lite",
    price: 89.99,
    originalPrice: 119.99,
    description: "Lightweight running shoes with responsive cushioning and breathable mesh upper. Designed for speed and comfort.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
    category: "sports",
    stock: 20,
    rating: 4.5,
    reviews: 278,
  },
  {
    id: "11",
    title: "Linen Throw Blanket",
    price: 49.99,
    description: "Luxurious stonewashed linen throw in neutral tones. Perfect for adding texture to any living space.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80",
    category: "home",
    stock: 18,
    rating: 4.8,
    reviews: 92,
  },
  {
    id: "12",
    title: "Classic Denim Jacket",
    price: 69.99,
    description: "Timeless denim jacket with a modern fit. Versatile layering piece for any season.",
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&q=80",
    category: "fashion",
    stock: 22,
    rating: 4.4,
    reviews: 134,
  },
];
