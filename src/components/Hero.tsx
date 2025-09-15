import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import heroBackground from '@/assets/wellness-hero-bg.jpg';
import profileImage from '@/assets/jayalaxmi-profile.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-wellness-forest/80 to-wellness-green/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left fade-in-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                Guiding You Towards a{' '}
                <span className="text-secondary">Healthy</span>,{' '}
                <span className="text-secondary">Happy</span>, and{' '}
                <span className="text-secondary">Active Life</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                I'm G. Jayalaxmi, your dedicated Wellness Coach at Wellness Nutrition Center, 
                committed to helping you achieve optimal health through balanced nutrition and lifestyle guidance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="btn-hero text-lg px-8 py-4 flex items-center gap-2"
                >
                  Book a Consultation
                  <ArrowRight className="h-5 w-5" />
                </Button>
                
                <Button 
                  onClick={() => scrollToSection('about')}
                  className="btn-outline text-lg px-8 py-4 bg-white/10 border-white text-white hover:bg-white hover:text-wellness-forest"
                >
                  Learn More
                </Button>
              </div>

              <div className="mt-8 flex items-center justify-center lg:justify-start gap-2 text-white/80">
                <Phone className="h-5 w-5" />
                <span className="text-lg font-medium">9985582674</span>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end fade-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-primary/30 rounded-full blur-3xl transform scale-110"></div>
                <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white/20 shadow-hero">
                  <img
                    src="/lovable-uploads/6b849ab1-a606-4791-8e59-d15778a986d9.png"
                    alt="G. Jayalaxmi - Wellness Coach"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl animate-bounce">
                  🌿
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold animate-bounce" style={{ animationDelay: '0.5s' }}>
                  ✨
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;