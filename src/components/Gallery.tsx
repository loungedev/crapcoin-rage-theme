import scene1 from "@/assets/scene-1.png";
import scene2 from "@/assets/scene-2.png";
import scene3 from "@/assets/scene-3.png";
import { Card } from "@/components/ui/card";

const Gallery = () => {
  const images = [
    {
      src: scene1,
      alt: "Epic Oh Crap Face moment with lightning",
      title: "THE POWER",
    },
    {
      src: scene2,
      alt: "Stop Being Poor",
      title: "STOP BEING POOR",
    },
    {
      src: scene3,
      alt: "Urban $CRAP scene",
      title: "IN THE STREETS",
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/20" id="gallery">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-black text-center mb-4">
          <span className="text-primary">THE MEMES</span>
        </h2>
        <p className="text-center text-xl text-muted-foreground mb-16">
          Legendary moments captured in time
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <Card 
              key={index}
              className="overflow-hidden comic-border bg-card hover:scale-105 transition-transform duration-300 group cursor-pointer"
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4 bg-card">
                <h3 className="text-xl font-black text-center text-primary">
                  {image.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
