import { Link } from "react-router-dom";
import { Store } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background mt-20">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold mb-4">
            <Store className="h-6 w-6 text-primary" />
            MiniShop
          </Link>
          <p className="text-sm opacity-70">Your one-stop shop for quality products at great prices.</p>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm opacity-70">
            <Link to="/shop" className="hover:opacity-100 transition-opacity">Shop</Link>
            <Link to="/cart" className="hover:opacity-100 transition-opacity">Cart</Link>
            <Link to="/orders" className="hover:opacity-100 transition-opacity">Track Order</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3">Account</h4>
          <div className="flex flex-col gap-2 text-sm opacity-70">
            <Link to="/login" className="hover:opacity-100 transition-opacity">Login</Link>
            <Link to="/register" className="hover:opacity-100 transition-opacity">Register</Link>
            <Link to="/profile" className="hover:opacity-100 transition-opacity">Profile</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3">Contact</h4>
          <div className="flex flex-col gap-2 text-sm opacity-70">
            <span>support@minishop.com</span>
            <span>+1 (555) 000-0000</span>
          </div>
        </div>
      </div>
      <div className="border-t border-background/20 mt-8 pt-6 text-center text-sm opacity-50">
        © 2026 MiniShop. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
