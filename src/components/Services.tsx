import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  BarChart3, 
  FileText, 
  Phone,
  CheckCircle,
  Clock
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Calendar,
      title: "Personal Consultation",
      description: "One-on-one wellness consultations to assess your current health status and create personalized nutrition and lifestyle plans.",
      features: [
        "Comprehensive health assessment",
        "Personalized nutrition planning",
        "Lifestyle recommendation",
        "Goal setting and tracking"
      ],
      duration: "60-90 minutes",
      type: "Individual Session"
    },
    {
      icon: BarChart3,
      title: "Body Composition Analysis",
      description: "Advanced body analysis to understand your body composition and create data-driven wellness strategies.",
      features: [
        "Body fat percentage analysis",
        "Muscle mass measurement",
        "Metabolic rate assessment",
        "Progress tracking system"
      ],
      duration: "30-45 minutes",
      type: "Analysis Session"
    },
    {
      icon: FileText,
      title: "Customized Meal Plans",
      description: "Detailed meal planning services tailored to your dietary preferences, health goals, and lifestyle requirements.",
      features: [
        "Weekly meal schedules",
        "Healthy recipe collections",
        "Shopping lists included",
        "Dietary restriction accommodation"
      ],
      duration: "Ongoing Support",
      type: "Meal Planning"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Wellness <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive wellness services designed to support your journey towards optimal health and vitality.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="wellness-card p-8 h-full fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Service Details */}
                <div className="border-t border-border pt-6 space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Duration: {service.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Type: {service.type}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Booking Section */}
          <div className="fade-in-up">
            <Card className="wellness-card p-8 text-center">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Ready to Start Your Wellness Journey?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Book a consultation today and take the first step towards a healthier, 
                happier you. I'm here to guide and support you every step of the way.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={scrollToContact}
                  className="btn-hero text-lg px-8 py-4 flex items-center gap-2"
                >
                  <Calendar className="h-5 w-5" />
                  Book Consultation
                </Button>
                
                <Button 
                  className="btn-outline text-lg px-8 py-4 flex items-center gap-2"
                  onClick={() => window.location.href = 'tel:9985582674'}
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </Button>
              </div>

              <div className="mt-6 text-muted-foreground">
                <p className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>9985582674</span>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;