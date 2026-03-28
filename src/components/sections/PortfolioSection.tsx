import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import countdownGame from "@/assets/countdown-game.webp";
import littleAdventurer from "@/assets/little-adventurer.webp";
import carAnimation from "@/assets/car-animation.webp";
import cube4k from "@/assets/cube-4k.webp";
import starWarsThumbnail from "@/assets/star-wars-optimized.webp";
import artStationThumbnail from "@/assets/Rust 5.jpg";

type Category = "All" | "Games" | "3D Art" | "Cinematic";

const categories: Category[] = ["All", "Games", "3D Art", "Cinematic"];

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState<Category>("All");
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects = [
    {
      id: 1,
      title: "COUNTDOWN - FPS Game",
      description: "A first-person shooter game featuring intense combat scenarios and atmospheric environments. Built with modern game development techniques and immersive gameplay mechanics.",
      image: countdownGame,
      tags: ["Game Development", "FPS", "Unity/Unreal", "Level Design"],
      category: "Games" as Category,
      liveLink: "https://gamejolt.com/games/countdown/1005936",
    },
    {
      id: 2,
      title: "Little Adventurer Andi",
      description: "Little Adventurer Andi is a single-player, isometric action-adventure game. The player controls Andi, an ancient automaton reawakened to find his home, the once-glorious Sunken Halls of Automia, overrun by a great evil.",
      image: littleAdventurer,
      tags: ["Action-Adventure", "Isometric", "Game Development", "Automaton"],
      category: "Games" as Category,
      liveLink: "https://randomdx.itch.io/little-adventurer",
    },
    {
      id: 3,
      title: "Car Animation in Blender",
      description: "A cinematic car animation project showcasing dynamic vehicle movement and atmospheric lighting. Features realistic materials, advanced lighting setups, and smooth camera work in urban environments.",
      image: carAnimation,
      tags: ["3D Animation", "Blender", "Vehicle Animation", "Cinematic"],
      category: "Cinematic" as Category,
      liveLink: "https://youtu.be/xFsW_jr3S7w",
    },
    {
      id: 4,
      title: "3D Asset Collection",
      description: "A curated collection of 20+ high-quality 3D models and assets created in Blender, ranging from stylized props to realistic environment pieces. Sold on CGTrader to game developers and studios worldwide.",
      image: cube4k,
      tags: ["3D Modeling", "Blender", "CGTrader", "Game Assets"],
      category: "3D Art" as Category,
      liveLink: "https://www.cgtrader.com/designers/mihirkumar1235",
    },
    {
      id: 5,
      title: "Star Wars - Unreal Engine 5",
      description: "A cinematic Star Wars-inspired environment built in Unreal Engine 5, featuring Nanite geometry, Lumen global illumination, and iconic sci-fi world-building. Showcases real-time rendering and atmospheric scene composition.",
      image: starWarsThumbnail,
      tags: ["Unreal Engine 5", "Star Wars", "Environment Art", "Cinematic"],
      category: "Cinematic" as Category,
      liveLink: "https://youtu.be/qmWqnncR90U",
    },
    {
      id: 6,
      title: "ArtStation Portfolio",
      description: "A growing collection of my high-fidelity 3D modeling, texturing, and rendering work. Check out my full gallery of game-ready assets and environments.",
      image: artStationThumbnail,
      tags: ["3D Art", "Modeling", "Texturing", "ArtStation"],
      category: "3D Art" as Category,
      liveLink: "https://www.artstation.com/mihirkumar",
    },
  ];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const visibleProjects = showAllProjects
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="portfolio" className="py-20 ">
      <div ref={ref} className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work in game development and 3D art, featuring both personal projects and professional collaborations.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveFilter(cat);
                  setShowAllProjects(false);
                }}
                className={`hud-nav-tab px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === cat
                    ? "hud-nav-tab-active"
                    : "text-secondary-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group tactical-card shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg border-b border-border/70">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`Screenshot of ${project.title}`}
                      loading="lazy"
                      className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-60 bg-gradient-to-br from-primary/20 via-secondary to-accent/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      {project.placeholderIcon && <project.placeholderIcon size={64} className="text-primary/40" />}
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/25 to-transparent opacity-60 group-hover:opacity-75 transition-opacity duration-300" />
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-[11px] text-muted-foreground tracking-[0.12em] uppercase">
                    <span>Project Intel</span>
                    <span>{project.tags.length} Tags</span>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-200 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground line-clamp-3 min-h-[72px]">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-[11px] tracking-[0.06em] uppercase bg-secondary/80 text-secondary-foreground rounded-md border border-border/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-border/70 flex items-center justify-between gap-3">
                    <p className="text-[11px] text-muted-foreground tracking-[0.12em] uppercase">Launch External Preview</p>
                    <Button
                      size="sm"
                      className="bg-primary text-primary-foreground shadow-glow-primary"
                      asChild
                    >
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={15} className="mr-2" />
                        Open
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length > 3 && (
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
              onClick={() => setShowAllProjects((prev) => !prev)}
            >
              {showAllProjects ? "Show Less" : "View All Records"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
