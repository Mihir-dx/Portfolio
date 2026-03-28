import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scroll";
import { useTypewriter } from "@/hooks/use-typewriter";

const heroParticles = [
  { left: "6%", top: "18%", delay: "0.2s", duration: "7.2s", size: "sm" },
  { left: "14%", top: "38%", delay: "1.1s", duration: "8.4s", size: "lg" },
  { left: "22%", top: "24%", delay: "2.4s", duration: "7.8s", size: "sm" },
  { left: "30%", top: "44%", delay: "0.7s", duration: "8.8s", size: "sm" },
  { left: "38%", top: "16%", delay: "1.8s", duration: "7.5s", size: "lg" },
  { left: "46%", top: "36%", delay: "2.7s", duration: "8.2s", size: "sm" },
  { left: "54%", top: "20%", delay: "0.5s", duration: "7.9s", size: "sm" },
  { left: "62%", top: "42%", delay: "1.4s", duration: "8.6s", size: "lg" },
  { left: "70%", top: "26%", delay: "2.2s", duration: "7.6s", size: "sm" },
  { left: "78%", top: "40%", delay: "0.9s", duration: "8.7s", size: "sm" },
  { left: "86%", top: "22%", delay: "1.9s", duration: "7.7s", size: "lg" },
  { left: "93%", top: "34%", delay: "2.6s", duration: "8.1s", size: "sm" },
];

const HeroSection = () => {
  const typedText = useTypewriter({
    phrases: ["Game Developer", "3D Artist", "Level Designer", "Blender Enthusiast"],
    typingSpeed: 80,
    deletingSpeed: 50,
    pauseDuration: 2000,
  });

  return (
    <section 
      id="home"
      className="min-h-screen flex items-center justify-center relative isolate overflow-hidden"
    >
      <div className="absolute inset-0 z-0 overflow-hidden bg-background">
{/* Main Background Image - Restricted to right side with fade */}
        <div 
          className="absolute right-0 top-0 h-full w-[90%] md:w-[70%] lg:w-[60%] bg-cover bg-[20%_center] md:bg-[25%_center] bg-no-repeat opacity-60 mix-blend-screen transition-opacity duration-1000"
          style={{ 
            backgroundImage: `url('/Final Edited 2.jpg')`,
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 100%)',
            maskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 100%)',

                    }}
        ></div>

        {/* Background Layers */}
        <div className="absolute inset-0 bg-gradient-hero opacity-30"></div>
        <div className="absolute inset-0 hud-grid-overlay opacity-50"></div>
        <div className="absolute inset-0 hud-smoke-layer opacity-40"></div>
        
        {/* Particles - Confined to the left side (Profile side) */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[50%] overflow-hidden" aria-hidden="true">
          {heroParticles.map((particle, index) => (
            <span
              key={index}
              className={`hud-particle ${particle.size === "lg" ? "hud-particle-lg" : "hud-particle-sm"}`}
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.delay,
                animationDuration: particle.duration,
              }}
            />
          ))}
        </div>

        {/* Global Vignette over everything */}
        <div className="absolute inset-0 hud-vignette opacity-50 pointer-events-none"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-20 pointer-events-auto flex flex-col justify-center min-h-[80vh]">
        <div className="max-w-3xl text-left animate-fade-in relative pt-10">
          <div className="w-fit mb-6 px-4 py-2 rounded-full border border-primary/40 bg-background/80 text-primary text-xs md:text-sm tracking-[0.18em] uppercase shadow-glow-primary">
            Tactical Interface // Online
          </div>
          <div className="w-28 h-28 mb-8 rounded-full shadow-glow-primary ring-4 ring-primary/20 overflow-hidden">
              <img
                src="/profile.jpeg"
                alt="Mihir Kumar"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                {typedText}
              </span>
              <span className="animate-blink text-primary">|</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-2xl bg-background/20 backdrop-blur-sm p-4 rounded-xl -ml-4 border border-transparent hover:border-primary/20 transition-all">
              Designing combat-ready gameplay experiences, cinematic worlds, and high-fidelity 3D art pipelines.
            </p>

            <div className="flex flex-col sm:flex-row justify-start items-center sm:items-start gap-4 mb-8">
              <Button 
                size="lg"
                onClick={() => scrollToSection("portfolio")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow-primary px-8 py-3 text-lg"
              >
                Access Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg"
              >
                Establish Comms
              </Button>
            </div>

            <div className="flex items-center justify-start space-x-6 mb-8">
              <a 
                href="https://github.com/Mihir-dx" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 p-3 rounded-full hover:bg-secondary"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/mihir-kumar-210502m/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 p-3 rounded-full hover:bg-secondary"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:mihirkumar1235@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors duration-200 p-3 rounded-full hover:bg-secondary"
                aria-label="Email Contact"
              >
                <Mail size={24} />
              </a>
            </div>
        </div>

        <div className="text-center mt-8 lg:mt-12 animate-bounce w-full flex-grow flex items-end justify-center pb-8">
          <button 
            onClick={() => scrollToSection("portfolio")}
            className="text-primary hover:text-primary/80 transition-colors duration-200"
            aria-label="Scroll to Portfolio"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
