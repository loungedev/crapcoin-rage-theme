import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Community = () => {
  const socials = [
    { name: "Twitter", icon: "𝕏", url: "#" },
    { name: "Telegram", icon: "✈️", url: "#" },
    { name: "Discord", icon: "💬", url: "#" },
  ];

  return (
    <section className="py-20 px-4 bg-muted/20" id="community">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-6">
          <span className="text-primary">JOIN THE MOVEMENT</span>
        </h2>
        
        <p className="text-xl md:text-2xl mb-12 text-muted-foreground">
          Be part of the most legendary meme community in crypto
        </p>
        
        <Card className="p-8 md:p-12 comic-border bg-card/80 backdrop-blur mb-12">
          <p className="text-3xl md:text-5xl font-black mb-8 animate-pulse-glow text-primary">
            OH CRAP! 😱
          </p>
          <p className="text-lg mb-8 text-foreground/80">
            From rage comics to blockchain. From "Ashraf face" to financial freedom.
            This is more than a token. It's a piece of internet history.
          </p>
        </Card>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {socials.map((social, index) => (
            <Button
              key={index}
              size="lg"
              className="text-xl px-8 py-6 comic-border bg-primary hover:bg-primary/90 text-primary-foreground font-black"
              asChild
            >
              <a href={social.url} target="_blank" rel="noopener noreferrer">
                {social.icon} {social.name}
              </a>
            </Button>
          ))}
        </div>
        
        <div className="space-y-4 text-sm text-muted-foreground">
          <p className="font-bold">
            ⚠️ DISCLAIMER: This is a meme coin with no intrinsic value or expectation of financial return.
          </p>
          <p>
            $CRAP is for entertainment purposes only. Don't invest what you can't afford to lose.
            But definitely invest in the memes. Those are priceless.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Community;
