import Layout from "@/components/Layout";
import { mockOrders, OrderStatus } from "@/data/orders";
import { Package, CheckCircle, Truck, MapPin, Clock } from "lucide-react";

const statusSteps: { status: OrderStatus; label: string; icon: React.ElementType }[] = [
  { status: "pending", label: "Pending", icon: Clock },
  { status: "confirmed", label: "Confirmed", icon: CheckCircle },
  { status: "shipped", label: "Shipped", icon: Truck },
  { status: "delivered", label: "Delivered", icon: MapPin },
];

const statusIndex = (s: OrderStatus) => statusSteps.findIndex((st) => st.status === s);

const badgeClass = (status: OrderStatus) => {
  const map: Record<OrderStatus, string> = {
    pending: "badge-pending",
    confirmed: "badge-confirmed",
    shipped: "badge-shipped",
    delivered: "badge-delivered",
  };
  return map[status];
};

const OrderTracking = () => (
  <Layout>
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-display text-3xl font-bold text-foreground mb-8">Order Tracking</h1>

      <div className="space-y-6">
        {mockOrders.map((order) => {
          const currentStep = statusIndex(order.status);
          return (
            <div key={order.id} className="card-soft p-6 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                <div>
                  <div className="flex items-center gap-3">
                    <Package className="h-5 w-5 text-primary" />
                    <h2 className="font-display font-bold text-foreground">{order.id}</h2>
                    <span className={badgeClass(order.status)}>{order.status}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Placed on {new Date(order.createdAt).toLocaleDateString()} · ${order.total.toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <div className="flex items-center justify-between mb-6">
                {statusSteps.map((step, i) => {
                  const isCompleted = i <= currentStep;
                  const Icon = step.icon;
                  return (
                    <div key={step.status} className="flex-1 flex flex-col items-center relative">
                      {i > 0 && (
                        <div
                          className={`absolute top-5 right-1/2 w-full h-0.5 -translate-y-1/2 ${
                            i <= currentStep ? "bg-primary" : "bg-border"
                          }`}
                          style={{ zIndex: 0 }}
                        />
                      )}
                      <div
                        className={`relative z-10 h-10 w-10 rounded-full flex items-center justify-center ${
                          isCompleted ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className={`text-xs mt-2 ${isCompleted ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                        {step.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Items */}
              <div className="flex flex-wrap gap-3">
                {order.items.map((item) => (
                  <div key={item.productId} className="flex items-center gap-2 bg-muted rounded-lg p-2 pr-4">
                    <img src={item.image} alt={item.title} className="h-10 w-10 rounded-md object-cover" />
                    <div>
                      <p className="text-sm font-medium text-foreground line-clamp-1">{item.title}</p>
                      <p className="text-xs text-muted-foreground">×{item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </Layout>
);

export default OrderTracking;
