import Navigation from '../components/Navigation';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import ResumeSection from '../components/sections/ResumeSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/Footer';
import GlobalAtmosphere from '../components/GlobalAtmosphere';

function Index() {
  return (
    <div className="min-h-screen text-foreground relative selection:bg-primary/30">
      <GlobalAtmosphere />
      <Navigation />
      <HeroSection />
      <PortfolioSection />
      <AboutSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default Index;
