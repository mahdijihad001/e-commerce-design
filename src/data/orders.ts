export type OrderStatus = "pending" | "confirmed" | "shipped" | "delivered";

export interface OrderItem {
  productId: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Order {
  id: string;
  items: OrderItem[];
  total: number;
  status: OrderStatus;
  address: string;
  phone: string;
  paymentMethod: string;
  createdAt: string;
  customerName: string;
  customerEmail: string;
}

export const mockOrders: Order[] = [
  {
    id: "ORD-001",
    items: [
      { productId: "1", title: "Wireless Noise-Cancelling Headphones", price: 79.99, quantity: 1, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&q=80" },
      { productId: "4", title: "Portable Bluetooth Speaker", price: 39.99, quantity: 2, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=100&q=80" },
    ],
    total: 159.97,
    status: "delivered",
    address: "123 Main St, New York, NY 10001",
    phone: "+1 555-0123",
    paymentMethod: "Cash on Delivery",
    createdAt: "2026-02-20T10:30:00Z",
    customerName: "John Doe",
    customerEmail: "john@example.com",
  },
  {
    id: "ORD-002",
    items: [
      { productId: "2", title: "Smart Fitness Watch Pro", price: 199.99, quantity: 1, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&q=80" },
    ],
    total: 199.99,
    status: "shipped",
    address: "456 Oak Ave, Los Angeles, CA 90001",
    phone: "+1 555-0456",
    paymentMethod: "Cash on Delivery",
    createdAt: "2026-02-22T14:15:00Z",
    customerName: "Jane Smith",
    customerEmail: "jane@example.com",
  },
  {
    id: "ORD-003",
    items: [
      { productId: "6", title: "Ceramic Pour-Over Coffee Set", price: 34.99, quantity: 1, image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=100&q=80" },
      { productId: "9", title: "Scented Soy Candle Set", price: 22.99, quantity: 3, image: "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=100&q=80" },
    ],
    total: 103.96,
    status: "confirmed",
    address: "789 Pine Rd, Chicago, IL 60601",
    phone: "+1 555-0789",
    paymentMethod: "Cash on Delivery",
    createdAt: "2026-02-23T09:45:00Z",
    customerName: "Alice Johnson",
    customerEmail: "alice@example.com",
  },
  {
    id: "ORD-004",
    items: [
      { productId: "10", title: "Running Shoes Ultra Lite", price: 89.99, quantity: 1, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&q=80" },
    ],
    total: 89.99,
    status: "pending",
    address: "321 Elm St, Houston, TX 77001",
    phone: "+1 555-0321",
    paymentMethod: "Cash on Delivery",
    createdAt: "2026-02-24T08:00:00Z",
    customerName: "Bob Wilson",
    customerEmail: "bob@example.com",
  },
];
