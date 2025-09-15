import { Card } from '@/components/ui/card';
import { 
  Apple, 
  BarChart3, 
  Scale, 
  GraduationCap, 
  Coffee, 
  Settings 
} from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: Apple,
      title: "Nutrition Planning & Guidance",
      description: "Personalized nutrition plans tailored to individual health goals, dietary preferences, and lifestyle requirements.",
      color: "text-green-600"
    },
    {
      icon: BarChart3,
      title: "Body Composition Analysis",
      description: "Comprehensive body analysis using advanced techniques to track progress and optimize health outcomes.",
      color: "text-blue-600"
    },
    {
      icon: Scale,
      title: "Weight Management Coaching",
      description: "Sustainable weight management strategies focusing on healthy habits rather than restrictive dieting.",
      color: "text-purple-600"
    },
    {
      icon: GraduationCap,
      title: "Healthy Lifestyle Education",
      description: "Educational workshops and one-on-one sessions to build long-lasting healthy lifestyle habits.",
      color: "text-orange-600"
    },
    {
      icon: Coffee,
      title: "Meal & Breakfast Planning",
      description: "Specialized meal planning services with focus on nutritious breakfast options and daily meal optimization.",
      color: "text-amber-600"
    },
    {
      icon: Settings,
      title: "Specialized Nutrition Programs",
      description: "Customized programs for specific health conditions, age groups, and unique nutritional requirements.",
      color: "text-teal-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Skills & <span className="text-primary">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive wellness services designed to transform your health journey through evidence-based practices and personalized care.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card 
                key={index}
                className="wellness-card p-8 h-full fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                    <skill.icon className={`h-8 w-8 ${skill.color}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {skill.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  {/* Decorative Element */}
                  <div className="mt-6 h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                </div>
              </Card>
            ))}
          </div>

          {/* Credentials Section */}
          <div className="mt-16 fade-in-up">
            <Card className="wellness-card p-8 text-center">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                Professional Background
              </h3>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-3">Education</h4>
                  <p className="text-muted-foreground">
                    Completed comprehensive wellness and nutrition education, focusing on evidence-based 
                    practices and holistic health approaches.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-3">Experience</h4>
                  <p className="text-muted-foreground">
                    Currently serving as Wellness Coach at Wellness Nutrition Center, with extensive 
                    experience in personalized nutrition guidance and lifestyle coaching.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;