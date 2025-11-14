import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="animate-float">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 text-glow">
            <span className="text-primary">OH CRAP</span>
          </h1>
          <h2 className="text-4xl md:text-6xl font-black mb-8">
            <span className="text-secondary">FACE</span>
          </h2>
        </div>
        
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-muted-foreground">
          The legendary meme that evolved from shock to ultimate internet culture icon.
        </p>
        
        <p className="text-3xl md:text-5xl font-black mb-12 text-primary animate-pulse-glow">
          $CRAP
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="text-xl px-8 py-6 comic-border bg-primary hover:bg-primary/90 text-primary-foreground font-black"
          >
            BUY $CRAP
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="text-xl px-8 py-6 comic-border bg-card hover:bg-muted font-black"
          >
            LEARN MORE
          </Button>
        </div>
        
        <div className="mt-16 text-sm text-muted-foreground">
          <p>CA: 0x...</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
