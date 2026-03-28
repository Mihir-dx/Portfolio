import { Code, Gamepad2, Palette, Award, Users, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const AboutSection = () => {
  const skills = [
    {
      category: "Game Development",
      icon: Gamepad2,
      items: ["Unity", "Unreal Engine", "C#", "C++", "Godot", "Game Design"],
      color: "text-primary"
    },
    {
      category: "3D Art & Animation",
      icon: Palette,
      items: ["Blender", "Unreal Engine", "Adobe Substance Painter"],
      color: "text-accent"
    },
    {
      category: "Programming",
      icon: Code,
      items: ["C", "C++", "C#", "SQL/No SQL"],
      color: "text-primary"
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Professional 3D Art Experience",
      description: "Delivered production-ready 3D assets for commercial marketplaces"
    },
    {
      icon: Users,
      title: "Shipped Games on various platforms",
      description: "Completed projects ranging from indie games to AAA assets"
    },
    {
      icon: Clock,
      title: "Dedicated & Deadline-Driven",
      description: "Consistent work ethic with a focus on quality delivery. Every project gets full attention from concept through polish, no shortcuts, no loose ends."
    }
  ];

  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div ref={ref} className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate game developer and 3D artist with over 5 years of experience creating immersive digital experiences. 
            My expertise spans from concept to completion, bringing creative visions to life through code and art.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-foreground">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Growing up in Bokaro Steel City, I got hooked on games early — not just playing them, but
                wondering how they were made. That curiosity led me to open Blender for the first time, and
                I've been building things in 3D ever since.
              </p>
              <p>
                Over the years I've shipped games on <span className="text-foreground font-medium">itch.io</span> and{" "}
                <span className="text-foreground font-medium">GameJolt</span>, sold 20+ 3D assets on{" "}
                <span className="text-foreground font-medium">CGTrader</span>, and worked across Unity, Unreal
                Engine, and Godot. I love the full pipeline — from modeling and texturing to coding gameplay
                systems and polishing the final build.
              </p>
              <p>
                When I'm not working on a project you'll find me joining game jams, experimenting with
                new rendering techniques in Blender, or diving into whatever engine update just dropped.
                I believe the best way to learn is to ship — so I keep building.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card key={index} className="bg-card border-border shadow-card hover:shadow-elevated transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-1">
                          {achievement.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {achievement.title === "Professional 3D Art Experience" ? (
                            <>
                              Created and published 20+ production-ready 3D assets across multiple categories on{" "}
                              <a 
                                href="https://www.cgtrader.com/designers/mihirkumar" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-primary hover:text-primary/80 underline transition-colors"
                              >
                                CGTrader
                              </a>
                            </>
                          ) : achievement.title === "Shipped Games on various platforms" ? (
                            <>
                              Completed and published various games on various platforms like{" "}
                              <a 
                                href="https://randomdx.itch.io/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-primary hover:text-primary/80 underline transition-colors"
                              >
                                itch.io
                              </a>
                              {" "}and{" "}
                              <a 
                                href="https://gamejolt.com/@RandomDX" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-primary hover:text-primary/80 underline transition-colors"
                              >
                                GameJolt
                              </a>
                            </>
                          ) : achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-8 text-center text-foreground">Skills & Technologies</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => {
              const Icon = skillGroup.icon;
              return (
                <Card key={index} className="bg-gradient-card border-border shadow-card hover:shadow-elevated transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className={skillGroup.color} size={24} />
                      </div>
                      <span className="text-foreground">{skillGroup.category}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <div 
                          key={skillIndex}
                          className="px-3 py-2 text-sm bg-secondary text-secondary-foreground rounded-md border border-border text-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;