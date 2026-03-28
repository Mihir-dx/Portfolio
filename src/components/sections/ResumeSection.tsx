import { Download, GraduationCap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ResumeSection = () => {
  const education = [
    {
      degree: "Bachelor in Computer Application",
      school: "Lovely Professional University",
      period: "2023 - 2026",
      details: "Specialized in Computer Graphics and Game Development"
    },
    {
      degree: "Certificate in 3D Animation & VFX",
      school: "Udemy",
      period: "2024",
      details: "Advanced techniques in 3D modeling, texturing, and animation"
    }
  ];

  const certifications = [
    { name: "Unreal Engine Animation", url: "https://www.udemy.com/certificate/UC-026b4cfe-883f-4a29-aa2f-7e2b8dc15b39/" },
    { name: "Unity Certification", url: "https://www.cipherschools.com/certificate/preview?id=68935b71cec61f8eee566c7e" },
    { name: "Epic Games Game Design", url: "https://www.coursera.org/account/accomplishments/verify/CLSU55ACWX2O?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" },
    { name: "AI: Master the Basics", url: "https://courses.edx.org/certificates/ab5ee489f2324d8e99fc391d15b769de" }
  ];

  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="resume" className="py-20 ">
      <div ref={ref} className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Resume
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            A comprehensive overview of my education, certifications, and achievements in game development and 3D art.
          </p>
          
          <a 
            href="/resume.pdf"
            download="Mihir_Kumar_Resume.pdf"
          >
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow-primary px-8 py-3"
            >
              <Download size={20} className="mr-2" />
              Download Resume PDF
            </Button>
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <Card className="bg-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <GraduationCap className="text-accent" size={24} />
                <span>Education</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {education.map((edu, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                  <p className="text-primary">{edu.school}</p>
                  <p className="text-sm text-muted-foreground">{edu.period}</p>
                  <p className="text-sm text-muted-foreground mt-1">{edu.details}</p>
                  {index < education.length - 1 && <Separator className="mt-4" />}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="bg-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Award className="text-accent" size={24} />
                <span>Certifications</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {certifications.map((cert, index) => (
                  cert.url ? (
                    <a
                      key={index}
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-3 py-2 bg-secondary text-secondary-foreground rounded-md border border-border text-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      {cert.name}
                    </a>
                  ) : (
                    <div 
                      key={index}
                      className="px-3 py-2 bg-secondary text-secondary-foreground rounded-md border border-border text-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      {cert.name}
                    </div>
                  )
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
