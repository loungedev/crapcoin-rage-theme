import { Card } from "@/components/ui/card";

const Tokenomics = () => {
  const stats = [
    {
      label: "Total Supply",
      value: "1,000,000,000",
      description: "One billion reasons to say OH CRAP",
    },
    {
      label: "Liquidity",
      value: "BURNED",
      description: "Forever locked, just like your shocked expression",
    },
    {
      label: "Tax",
      value: "0%",
      description: "No surprises here. Unlike raisins in cookies.",
    },
    {
      label: "Contract",
      value: "RENOUNCED",
      description: "Community owned, meme powered",
    },
  ];

  return (
    <section className="py-20 px-4" id="tokenomics">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-6xl font-black text-center mb-4">
          <span className="text-primary">TOKENOMICS</span>
        </h2>
        <p className="text-center text-xl text-muted-foreground mb-16">
          Simple. Transparent. Oh Crap.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="p-6 comic-border bg-card hover:bg-muted transition-colors group"
            >
              <div className="text-center space-y-3">
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </p>
                <p className="text-3xl font-black text-primary group-hover:animate-shake">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Card className="p-8 comic-border bg-secondary/20 max-w-2xl mx-auto">
            <p className="text-2xl font-black mb-4 text-secondary">
              FAIR LAUNCH
            </p>
            <p className="text-lg text-foreground/80">
              No presale. No team tokens. Just pure meme energy from day one.
              Everyone gets the same "OH CRAP!" moment.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
