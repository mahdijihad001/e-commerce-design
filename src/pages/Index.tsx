import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import { Link } from "react-router-dom";
import { ArrowRight, Truck, Shield, RefreshCw } from "lucide-react";

const Index = () => {
  const featured = products.filter((p) => p.featured);

  return (
    <Layout>
      <HeroSection />

      {/* Features */}
      <section className="container mx-auto px-4 -mt-8 relative z-10 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: Truck, title: "Free Shipping", desc: "On orders over $50" },
            { icon: Shield, title: "Secure Payment", desc: "100% protected" },
            { icon: RefreshCw, title: "Easy Returns", desc: "30-day return policy" },
          ].map((f) => (
            <div key={f.title} className="card-elevated flex items-center gap-4 p-5">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-foreground">{f.title}</h4>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">Shop by Category</h2>
          <Link to="/shop" className="text-sm text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all">
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="card-soft p-6 text-center hover:border-primary/30 transition-colors group"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                <span className="text-primary font-bold text-lg">{cat.name[0]}</span>
              </div>
              <h3 className="font-display font-semibold text-foreground">{cat.name}</h3>
              <p className="text-sm text-muted-foreground">{cat.count} products</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">Featured Products</h2>
          <Link to="/shop" className="text-sm text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all">
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 mb-16">
        <div className="rounded-2xl bg-primary p-8 md:p-14 text-center text-primary-foreground">
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-3">Get 20% Off Your First Order</h2>
          <p className="opacity-80 mb-6 max-w-md mx-auto">Sign up today and enjoy exclusive deals, new arrivals, and member-only perks.</p>
          <Link to="/register">
            <button className="bg-background text-foreground font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
              Create Account
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
