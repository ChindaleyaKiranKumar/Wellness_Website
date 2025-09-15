import { Card } from '@/components/ui/card';
import { Heart, Users, Target, Sparkles } from 'lucide-react';
import wellnessTeamEvent from '/lovable-uploads/78f9a8e5-53ac-4227-8607-0a51d7d915a5.png';

const About = () => {
  const philosophyPoints = [
    {
      icon: Heart,
      title: "Natural & Sustainable",
      description: "Committed to promoting natural, sustainable wellness practices that nourish both body and mind."
    },
    {
      icon: Users,
      title: "All Age Groups",
      description: "Specialized expertise in guiding individuals across all age groups towards healthier lifestyles."
    },
    {
      icon: Target,
      title: "Holistic Approach",
      description: "Focus on comprehensive wellness that addresses nutrition, lifestyle, and mental well-being."
    },
    {
      icon: Sparkles,
      title: "Inside-Out Wellness",
      description: "Philosophy of 'look good, feel good from inside out' - true beauty comes from optimal health."
    }
  ];

  return (
    <section id="about" className="py-20 section-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              About <span className="text-primary">G. Jayalaxmi</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate wellness coach dedicated to transforming lives through personalized nutrition guidance and sustainable lifestyle changes.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="fade-in-left">
              <div className="relative">
                <img
                  src="/lovable-uploads/cf8f4031-d7e4-469e-b500-7a80b09d96c7.png"
                  alt="G. Jayalaxmi at Herbalife 25th Anniversary India celebration"
                  className="w-full h-96 object-cover rounded-2xl shadow-card"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl"></div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="fade-in-right">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                My Journey in Wellness
              </h3>
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  As a dedicated Wellness Coach at the Wellness Nutrition Center in Badangpet, Hyderabad, 
                  I am passionate about guiding individuals towards achieving optimal health and vitality 
                  through natural, sustainable wellness practices.
                </p>
                
                <p>
                  My approach to wellness is holistic, focusing not just on nutrition but on creating 
                  comprehensive lifestyle changes that promote long-term health and happiness. I believe 
                  in the philosophy of "look good, feel good from inside out" - true wellness radiates 
                  from within.
                </p>
                
                <p>
                  With specialized experience working with individuals across all age groups, I provide 
                  personalized guidance that respects each person's unique needs, preferences, and lifestyle. 
                  My mission is to make healthy living accessible, enjoyable, and sustainable for everyone.
                </p>
              </div>
            </div>
          </div>

          {/* Philosophy Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophyPoints.map((point, index) => (
              <Card 
                key={index} 
                className="wellness-card p-6 text-center fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <point.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  {point.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Personal Quote */}
          <div className="mt-16 text-center fade-in-up">
            <Card className="wellness-card p-8 max-w-4xl mx-auto">
              <blockquote className="text-2xl md:text-3xl font-heading font-medium text-foreground mb-4">
                "Wellness is not a destination, it's a way of life. Every small step towards 
                better health creates ripples of positive change in every aspect of your life."
              </blockquote>
              <cite className="text-primary font-semibold text-lg">
                - G. Jayalaxmi, Wellness Coach
              </cite>
            </Card>
          </div>

          {/* Team and Community */}
          <div className="mt-20 fade-in-up">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-heading font-bold text-foreground mb-4">
                Building a <span className="text-primary">Wellness Community</span>
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Together with our growing community of wellness enthusiasts, we celebrate 
                every transformation and support each journey towards optimal health.
              </p>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={wellnessTeamEvent}
                alt="Wellness community event with team and clients"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                <p className="text-lg font-medium text-foreground bg-background/90 backdrop-blur-sm rounded-lg p-4 max-w-2xl mx-auto">
                  Empowering lives through wellness - one transformation at a time
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;