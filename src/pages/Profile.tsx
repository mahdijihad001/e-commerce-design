import { useState } from "react";
import Layout from "@/components/Layout";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { mockOrders } from "@/data/orders";
import { User, Package, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, logout, updateProfile } = useAuth();
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    name: user?.name || "",
    phone: user?.phone || "",
    address: user?.address || "",
  });

  if (!user) {
    navigate("/login");
    return null;
  }

  const handleSave = () => {
    updateProfile(form);
    setEditing(false);
    toast({ title: "Profile updated!" });
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="font-display text-3xl font-bold text-foreground mb-8">My Profile</h1>

        {/* Profile Card */}
        <div className="card-soft p-6 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h2 className="font-display font-bold text-xl text-foreground">{user.name}</h2>
              <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>
          </div>

          {editing ? (
            <div className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Name</label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Phone</label>
                <input
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Address</label>
                <input
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div className="flex gap-3">
                <Button onClick={handleSave} className="rounded-full">Save Changes</Button>
                <Button variant="outline" onClick={() => setEditing(false)} className="rounded-full">Cancel</Button>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Phone</span>
                <span className="text-foreground">{user.phone || "Not set"}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Address</span>
                <span className="text-foreground">{user.address || "Not set"}</span>
              </div>
              <div className="flex gap-3 pt-3">
                <Button variant="outline" onClick={() => setEditing(true)} className="rounded-full">Edit Profile</Button>
                <Button variant="outline" onClick={handleLogout} className="rounded-full text-destructive hover:bg-destructive hover:text-destructive-foreground gap-2">
                  <LogOut className="h-4 w-4" /> Logout
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Order History */}
        <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
          <Package className="h-5 w-5 text-primary" /> Order History
        </h2>
        <div className="space-y-3">
          {mockOrders.map((order) => (
            <Link key={order.id} to="/orders" className="card-soft p-4 flex items-center justify-between block">
              <div>
                <span className="font-display font-semibold text-foreground">{order.id}</span>
                <p className="text-sm text-muted-foreground">{new Date(order.createdAt).toLocaleDateString()}</p>
              </div>
              <div className="text-right">
                <span className="font-bold text-foreground">${order.total.toFixed(2)}</span>
                <p className={`badge-${order.status} mt-1`}>{order.status}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
