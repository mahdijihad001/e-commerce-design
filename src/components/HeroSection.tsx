import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBanner} alt="Hero banner" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
    </div>
    <div className="relative container mx-auto px-4 py-24 md:py-36">
      <div className="max-w-xl animate-fade-in-up">
        <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm text-primary-foreground text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          <Sparkles className="h-4 w-4" />
          New Collection 2026
        </div>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-background leading-tight mb-4">
          Discover What
          <br />
          <span className="text-primary">Defines You</span>
        </h1>
        <p className="text-background/70 text-lg mb-8 max-w-md">
          Curated products that blend style, quality, and value. Shop the latest trends with confidence.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link to="/shop">
            <Button size="lg" className="rounded-full gap-2 text-base px-8">
              Shop Now <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link to="/shop?category=electronics">
            <Button size="lg" variant="outline" className="rounded-full text-base px-8 bg-background/10 backdrop-blur-sm border-background/30 text-background hover:bg-background/20">
              Explore Electronics
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
