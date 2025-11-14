import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 px-4" id="about">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-6xl font-black text-center mb-12">
          <span className="text-primary">THE LEGEND</span>
        </h2>
        
        <Card className="p-8 comic-border bg-card/80 backdrop-blur">
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="font-bold text-primary text-xl">
              IMPORTANT: The Origin Story
            </p>
            
            <p>
              The face was used in another comic to express disappointment over chocolate chip cookies actually containing raisins. It was posted to FunnyJunk on May 23, 2010, receiving 2086 funny votes and over 61,000 views. This comic dubbed the face <span className="text-primary font-bold">"raisin face,"</span> a tag still used on Memebase, Tumblr and Quickmeme.
            </p>
            
            <p>
              The face evolved from shock and surprise to anger and frustration in August 2010 on Reddit, with a rage comic about a birthday party. Due to the juxtaposition of the name Ashraf next to the reaction image, it was referred to as the <span className="text-primary font-bold">"Ashraf face"</span> in comments on the rage comics subreddit and in their official rage face timeline.
            </p>
            
            <p>
              During 2011, both versions of the face were applied to several other rage comic tropes, expressing surprised awareness in <span className="text-secondary font-bold">"She Wants My Cock"</span> and a frustrating realization about one's ethnic background in <span className="text-secondary font-bold">"Being an X."</span>
            </p>
            
            <div className="border-l-4 border-primary pl-6 my-8 bg-muted/50 p-4">
              <p className="font-bold text-primary mb-2">THE FIRST APPEARANCE</p>
              <p>
                While the artist behind the face is still unknown, the first instance of it appeared in a rage comic, depicting a conversation about the character's wife going to her boss' house to test Sony Playstation 3 games. After his friend explains that the console does not have any games, the face is used to express the realization that he had been fooled. 
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                The comic was posted online as early as October 1, 2009 on the Studio Kat forums in a thread to share absurd images.
              </p>
            </div>
            
            <p className="text-center font-black text-2xl text-primary mt-8">
              NOW IT'S A MEMECOIN. OH CRAP! 💩
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
