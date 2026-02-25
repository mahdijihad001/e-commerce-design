import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { CreditCard, MapPin, Phone, User } from "lucide-react";

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: user?.name || "",
    phone: user?.phone || "",
    address: user?.address || "",
    city: "",
    notes: "",
  });
  const [loading, setLoading] = useState(false);

  const shipping = totalPrice >= 50 ? 0 : 5.99;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.address) {
      toast({ title: "Missing info", description: "Please fill all required fields.", variant: "destructive" });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      clearCart();
      toast({ title: "Order placed!", description: "Your order has been placed successfully." });
      navigate("/orders");
    }, 1500);
  };

  if (items.length === 0) {
    navigate("/cart");
    return null;
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-display text-3xl font-bold text-foreground mb-8">Checkout</h1>

        <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card-soft p-6">
              <h2 className="font-display font-semibold text-foreground flex items-center gap-2 mb-4">
                <User className="h-5 w-5 text-primary" /> Contact Information
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Full Name *</label>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Phone *</label>
                  <input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="card-soft p-6">
              <h2 className="font-display font-semibold text-foreground flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-primary" /> Shipping Address
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Address *</label>
                  <input
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">City</label>
                  <input
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Order Notes</label>
                  <textarea
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                  />
                </div>
              </div>
            </div>

            <div className="card-soft p-6">
              <h2 className="font-display font-semibold text-foreground flex items-center gap-2 mb-4">
                <CreditCard className="h-5 w-5 text-primary" /> Payment Method
              </h2>
              <div className="flex items-center gap-3 p-3 rounded-lg border-2 border-primary bg-primary/5">
                <div className="h-4 w-4 rounded-full border-4 border-primary" />
                <span className="font-medium text-foreground">Cash on Delivery (COD)</span>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="card-elevated p-6 h-fit sticky top-24">
            <h2 className="font-display text-lg font-bold text-foreground mb-4">Order Summary</h2>
            <div className="space-y-3 mb-4">
              {items.map((item) => (
                <div key={item.product.id} className="flex justify-between text-sm">
                  <span className="text-muted-foreground truncate mr-2">
                    {item.product.title} × {item.quantity}
                  </span>
                  <span className="font-medium text-foreground shrink-0">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-3 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="text-foreground">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="text-success">{shipping === 0 ? "Free" : `$${shipping}`}</span>
              </div>
              <div className="border-t border-border pt-2 flex justify-between text-base">
                <span className="font-semibold text-foreground">Total</span>
                <span className="font-display font-bold text-foreground">${(totalPrice + shipping).toFixed(2)}</span>
              </div>
            </div>
            <Button type="submit" className="w-full rounded-full mt-6" disabled={loading}>
              {loading ? "Placing Order..." : "Place Order"}
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Checkout;
