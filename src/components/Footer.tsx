import { Github, Linkedin, Mail, ArrowUp, Twitter } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "portfolio", label: "Portfolio" },
    { id: "about", label: "About" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  const socialLinks = [
    { icon: Github, url: "https://github.com/Mihir-dx", label: "GitHub" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/mihir-kumar-210502m/", label: "LinkedIn" },
    { icon: Twitter, url: "https://x.com/MihirKumar_dx", label: "Twitter" },
    { icon: Mail, url: "mailto:mihirkumar1235@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div>
            <div
              className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent cursor-pointer mb-3"
              onClick={() => scrollToSection("home")}
            >
              Portfolio
            </div>
            <p className="text-muted-foreground text-sm">
              Game Developer & 3D Artist creating immersive digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Connect</h4>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target={social.url.startsWith("mailto:") ? undefined : "_blank"}
                    rel={social.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="p-2 bg-secondary rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all duration-200"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Mihir Kumar. All rights reserved.
          </p>
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="Back to top"
          >
            Back to Top
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
