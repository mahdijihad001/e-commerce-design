import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { mockOrders, Order, OrderStatus } from "@/data/orders";
import { products, categories } from "@/data/products";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard, Package, ShoppingBag, Tag, LogOut,
  Plus, Edit, Trash2, Eye, ChevronRight, Menu, X, Store,
} from "lucide-react";

type Tab = "dashboard" | "products" | "categories" | "orders";

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tab>("dashboard");
  const [orders, setOrders] = useState(mockOrders);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (!user?.isAdmin) {
    navigate("/login");
    return null;
  }

  const handleStatusChange = (orderId: string, status: OrderStatus) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status } : o))
    );
    toast({ title: "Status updated", description: `Order ${orderId} marked as ${status}` });
  };

  const stats = [
    { label: "Total Products", value: products.length, icon: ShoppingBag, color: "text-primary" },
    { label: "Categories", value: categories.length, icon: Tag, color: "text-accent" },
    { label: "Total Orders", value: orders.length, icon: Package, color: "text-info" },
    { label: "Revenue", value: `$${orders.reduce((s, o) => s + o.total, 0).toFixed(0)}`, icon: LayoutDashboard, color: "text-success" },
  ];

  const navItems: { id: Tab; label: string; icon: React.ElementType }[] = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "products", label: "Products", icon: ShoppingBag },
    { id: "categories", label: "Categories", icon: Tag },
    { id: "orders", label: "Orders", icon: Package },
  ];

  return (
    <div className="min-h-screen flex bg-background">
      {/* Mobile toggle */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-card rounded-lg border border-border"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-sidebar text-sidebar-foreground flex flex-col transition-transform lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex items-center gap-2">
          <Store className="h-6 w-6 text-sidebar-primary" />
          <span className="font-display text-lg font-bold">Admin Panel</span>
        </div>

        <nav className="flex-1 px-3 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActiveTab(item.id); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-colors ${
                activeTab === item.id
                  ? "bg-sidebar-accent text-sidebar-primary font-medium"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50"
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-sidebar-border">
          <button
            onClick={() => { logout(); navigate("/"); }}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-sidebar-foreground/70 hover:bg-sidebar-accent/50 transition-colors"
          >
            <LogOut className="h-4 w-4" /> Logout
          </button>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-30 bg-foreground/30 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Content */}
      <div className="flex-1 p-4 lg:p-8 pt-16 lg:pt-8 overflow-auto">
        {/* Dashboard */}
        {activeTab === "dashboard" && (
          <div className="animate-fade-in">
            <h1 className="font-display text-2xl font-bold text-foreground mb-6">Dashboard</h1>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {stats.map((s) => (
                <div key={s.label} className="card-soft p-5">
                  <s.icon className={`h-6 w-6 ${s.color} mb-2`} />
                  <p className="font-display text-2xl font-bold text-foreground">{s.value}</p>
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
            <h2 className="font-display text-lg font-bold text-foreground mb-4">Recent Orders</h2>
            <div className="card-soft overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 text-muted-foreground font-medium">Order</th>
                      <th className="text-left p-4 text-muted-foreground font-medium">Customer</th>
                      <th className="text-left p-4 text-muted-foreground font-medium">Total</th>
                      <th className="text-left p-4 text-muted-foreground font-medium">Status</th>
                      <th className="text-left p-4 text-muted-foreground font-medium">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.id} className="border-b border-border last:border-0">
                        <td className="p-4 font-medium text-foreground">{order.id}</td>
                        <td className="p-4 text-muted-foreground">{order.customerName}</td>
                        <td className="p-4 text-foreground">${order.total.toFixed(2)}</td>
                        <td className="p-4"><span className={`badge-${order.status}`}>{order.status}</span></td>
                        <td className="p-4">
                          <button onClick={() => setActiveTab("orders")} className="text-primary hover:underline text-xs">
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Products */}
        {activeTab === "products" && (
          <div className="animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <h1 className="font-display text-2xl font-bold text-foreground">Products</h1>
              <Button className="rounded-full gap-2" onClick={() => toast({ title: "Coming soon", description: "Product creation requires backend integration." })}>
                <Plus className="h-4 w-4" /> Add Product
              </Button>
            </div>
            <div className="card-soft overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 text-muted-foreground font-medium">Product</th>
                      <th className="text-left p-4 text-muted-foreground font-medium">Category</th>
                      <th className="text-left p-4 text-muted-foreground font-medium">Price</th>
                      <th className="text-left p-4 text-muted-foreground font-medium">Stock</th>
                      <th className="text-left p-4 text-muted-foreground font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((p) => (
                      <tr key={p.id} className="border-b border-border last:border-0">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <img src={p.image} alt={p.title} className="h-10 w-10 rounded-lg object-cover" />
                            <span className="font-medium text-foreground line-clamp-1">{p.title}</span>
                          </div>
                        </td>
                        <td className="p-4 text-muted-foreground capitalize">{p.category}</td>
                        <td className="p-4 text-foreground">${p.price}</td>
                        <td className="p-4">
                          <span className={p.stock > 10 ? "text-success" : "text-warning"}>{p.stock}</span>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <button className="p-1.5 rounded-lg hover:bg-muted transition-colors"><Edit className="h-4 w-4 text-muted-foreground" /></button>
                            <button className="p-1.5 rounded-lg hover:bg-muted transition-colors"><Trash2 className="h-4 w-4 text-destructive" /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Categories */}
        {activeTab === "categories" && (
          <div className="animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <h1 className="font-display text-2xl font-bold text-foreground">Categories</h1>
              <Button className="rounded-full gap-2" onClick={() => toast({ title: "Coming soon" })}>
                <Plus className="h-4 w-4" /> Add Category
              </Button>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {categories.map((cat) => (
                <div key={cat.id} className="card-soft p-5 flex items-center justify-between">
                  <div>
                    <h3 className="font-display font-semibold text-foreground">{cat.name}</h3>
                    <p className="text-sm text-muted-foreground">{cat.count} products</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-1.5 rounded-lg hover:bg-muted transition-colors"><Edit className="h-4 w-4 text-muted-foreground" /></button>
                    <button className="p-1.5 rounded-lg hover:bg-muted transition-colors"><Trash2 className="h-4 w-4 text-destructive" /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Orders */}
        {activeTab === "orders" && (
          <div className="animate-fade-in">
            <h1 className="font-display text-2xl font-bold text-foreground mb-6">Orders</h1>
            <div className="space-y-4">
              {orders.map((order) => (
                <div key={order.id} className="card-soft p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-display font-bold text-foreground">{order.id}</h3>
                      <p className="text-sm text-muted-foreground">
                        {order.customerName} · {order.customerEmail}
                      </p>
                      <p className="text-sm text-muted-foreground">{order.address}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-foreground">${order.total.toFixed(2)}</p>
                      <span className={`badge-${order.status}`}>{order.status}</span>
                    </div>
                  </div>

                  {/* Items */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {order.items.map((item) => (
                      <div key={item.productId} className="flex items-center gap-2 bg-muted rounded-lg p-2 pr-3 text-xs">
                        <img src={item.image} alt={item.title} className="h-8 w-8 rounded object-cover" />
                        <span className="text-foreground">{item.title} ×{item.quantity}</span>
                      </div>
                    ))}
                  </div>

                  {/* Status Actions */}
                  <div className="flex flex-wrap gap-2">
                    {(["pending", "confirmed", "shipped", "delivered"] as OrderStatus[]).map((status) => (
                      <button
                        key={status}
                        onClick={() => handleStatusChange(order.id, status)}
                        className={`text-xs px-3 py-1.5 rounded-full border transition-colors capitalize ${
                          order.status === status
                            ? "bg-primary text-primary-foreground border-primary"
                            : "border-border text-muted-foreground hover:border-primary/50"
                        }`}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
