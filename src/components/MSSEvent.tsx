import { Card } from '@/components/ui/card';
import { Calendar, Users, Heart, Award } from 'lucide-react';
import mssEventPhoto from '/lovable-uploads/93d90ff4-a756-49ce-9ffe-e94176adc6be.png';

const MSSEvent = () => {
  return (
    <section id="mss-event" className="py-20 section-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              MSS Organisation <span className="text-primary">Family Day</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Celebrating wellness, unity, and transformation with our extended MSS family
            </p>
          </div>

          {/* Event Image */}
          <div className="mb-12 fade-in-up">
            <Card className="wellness-card overflow-hidden">
              <div className="relative">
                <img
                  src={mssEventPhoto}
                  alt="MSS Organisation Family Day - Large gathering of wellness community members"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
              </div>
              <div className="p-8">
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div className="fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold text-primary mb-1">200+</h3>
                    <p className="text-muted-foreground">Community Members</p>
                  </div>
                  <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-full mb-3">
                      <Heart className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="text-3xl font-bold text-secondary mb-1">100%</h3>
                    <p className="text-muted-foreground">Dedication to Wellness</p>
                  </div>
                  <div className="fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold text-primary mb-1">500+</h3>
                    <p className="text-muted-foreground">Success Stories</p>
                  </div>
                  <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-full mb-3">
                      <Calendar className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="text-3xl font-bold text-secondary mb-1">Annual</h3>
                    <p className="text-muted-foreground">Celebration Event</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Event Description */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="wellness-card p-6 fade-in-left">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                A Celebration of Transformation
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The MSS Organisation Family Day brings together our vibrant wellness community to celebrate 
                achievements, share success stories, and inspire one another on our collective journey 
                towards optimal health and well-being.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This annual gathering showcases the power of unity, support, and shared commitment to 
                wellness transformation, featuring testimonials, recognition ceremonies, and wellness 
                activities for all participants.
              </p>
            </Card>

            <Card className="wellness-card p-6 fade-in-right">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Building Stronger Communities
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our MSS family represents diverse backgrounds, ages, and wellness journeys, united by 
                a common goal of achieving better health and supporting each other's transformation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through regular meetings, workshops, and celebration events like this, we foster a 
                supportive environment where every member feels valued, motivated, and empowered to 
                reach their wellness goals.
              </p>
            </Card>
          </div>

          {/* Quote */}
          <div className="mt-12 text-center fade-in-up">
            <Card className="wellness-card p-8 max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-secondary/5">
              <blockquote className="text-xl md:text-2xl font-heading font-medium text-foreground mb-4">
                "Together we grow stronger, together we achieve more. The MSS family is not just about 
                individual success - it's about lifting each other up and celebrating every victory, 
                big or small."
              </blockquote>
              <cite className="text-primary font-semibold">
                - MSS Organisation Community
              </cite>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MSSEvent;