import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Community = () => {
  const socials = [
    { name: "X Community", icon: "𝕏", url: "https://x.com/i/communities/1989237581360611644" },
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
            From rage comics to blockchain. From "Ashraf face" to legendary memes.
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
        
        <p className="text-xs text-muted-foreground mt-8">
          Pure meme energy. Artist of the original Oh Crap Face remains unknown but forever celebrated.
        </p>
      </div>
    </section>
  );
};

export default Community;
