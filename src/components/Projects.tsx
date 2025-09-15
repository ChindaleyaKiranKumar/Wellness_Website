import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { 
  Users, 
  TrendingUp, 
  Baby, 
  HeartHandshake, 
  Coffee, 
  Zap,
  CalendarHeart 
} from 'lucide-react';
import healthyBreakfast from '@/assets/healthy-breakfast.jpg';

const Projects = () => {
  const projects = [
    {
      icon: TrendingUp,
      title: "Weight Management Success Stories",
      description: "Guided numerous clients through successful weight management journeys using personalized nutrition plans and lifestyle modifications. Achieved 85% success rate in sustainable weight goals.",
      tags: ["Weight Loss", "Nutrition Plans", "Coaching"],
      impact: "85% Success Rate"
    },
    {
      icon: Baby,
      title: "Child Nutrition Initiative",
      description: "Developed specialized nutrition programs for children and adolescents, focusing on healthy growth patterns and establishing lifelong healthy eating habits.",
      tags: ["Child Health", "Growth", "Education"],
      impact: "50+ Children Guided"
    },
    {
      icon: HeartHandshake,
      title: "Elderly Health Support",
      description: "Created tailored wellness programs for senior citizens, addressing age-specific nutritional needs and promoting active aging through proper nutrition and lifestyle guidance.",
      tags: ["Senior Care", "Nutrition", "Active Aging"],
      impact: "30+ Seniors Supported"
    },
    {
      icon: Coffee,
      title: "Healthy Breakfast Campaign",
      description: "Launched educational campaign promoting the importance of nutritious breakfast choices. Created easy-to-follow breakfast recipes and meal planning guides for busy lifestyles.",
      tags: ["Breakfast", "Meal Planning", "Education"],
      impact: "1000+ Recipe Downloads"
    },
    {
      icon: Zap,
      title: "Lifestyle Transformation Workshops",
      description: "Conducted interactive workshops on holistic lifestyle changes, covering nutrition, stress management, and sustainable health practices for long-term wellness.",
      tags: ["Workshops", "Lifestyle", "Transformation"],
      impact: "15+ Workshops Conducted"
    },
    {
      icon: CalendarHeart,
      title: "MSS Organisation Family Day",
      description: "Organized a comprehensive family-focused wellness gathering featuring weight loss recognitions, fun activities, entertainment, and a life-changing motivational hour. An inclusive event for all age groups promoting 3 hours of wellness-oriented bonding and community support.",
      images: [
        "/lovable-uploads/9eecb88c-0643-4743-ba9f-7cdc08e1337d.png",
        "/lovable-uploads/29cd4ffc-e00c-4dd5-b366-5ccd5bbe6e93.png",
        "/lovable-uploads/5bf47216-a5c0-4475-9581-58a067d4d3db.png"
      ],
      tags: ["Family Wellness", "Recognition", "Community", "All Ages"],
      impact: "Wellness Memories Created"
    }
  ];

  return (
    <section id="projects" className="py-20 section-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Projects & <span className="text-primary">Achievements</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transforming lives through dedicated wellness initiatives and community-focused health programs.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="wellness-card overflow-hidden h-full fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >

                {/* Family Day Images */}
                {project.images && (
                  <div className="relative">
                    <div className="grid grid-cols-2 gap-1 h-48 overflow-hidden">
                      <Dialog>
                        <DialogTrigger asChild>
                          <img
                            src={project.images[0]}
                            alt="Family Day Group Photo"
                            className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                          />
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[90vh] p-2">
                          <img
                            src={project.images[0]}
                            alt="Family Day Group Photo"
                            className="w-full h-full object-contain rounded-lg"
                          />
                        </DialogContent>
                      </Dialog>
                      <div className="grid grid-rows-2 gap-1">
                        <Dialog>
                          <DialogTrigger asChild>
                            <img
                              src={project.images[1]}
                              alt="Family Day Activities"
                              className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                            />
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[90vh] p-2">
                            <img
                              src={project.images[1]}
                              alt="Family Day Activities"
                              className="w-full h-full object-contain rounded-lg"
                            />
                          </DialogContent>
                        </Dialog>
                        <Dialog>
                          <DialogTrigger asChild>
                            <img
                              src={project.images[2]}
                              alt="Family Day Recognition"
                              className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                            />
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[90vh] p-2">
                            <img
                              src={project.images[2]}
                              alt="Family Day Recognition"
                              className="w-full h-full object-contain rounded-lg"
                            />
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                  </div>
                )}

                <div className="p-6 flex flex-col h-full">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                      <project.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Impact */}
                  <div className="border-t border-border pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Impact:</span>
                      <span className="text-sm font-semibold text-primary">
                        {project.impact}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Statistics Section */}
          <div className="mt-16 fade-in-up">
            <Card className="wellness-card p-8">
              <h3 className="text-2xl font-heading font-bold text-center text-foreground mb-8">
                Wellness Impact Statistics
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground">Lives Transformed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">85%</div>
                  <div className="text-muted-foreground">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-muted-foreground">Workshops</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">3+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;