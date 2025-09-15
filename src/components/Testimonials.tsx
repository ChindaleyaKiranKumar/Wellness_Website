import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "C. Ramadevi",
      role: "Lifestyle Transformation",
      content: "Balancing life and dieting didn't seem possible—for me, it felt overwhelming. But with the support of Jayalaxmi Wellness Bloom, I dropped 12 kg in three months. The blend of Herbalife nutrition, one-on-one coaching, and motivational check-ins made all the difference. Today, I feel energized, balanced, and proud of what I've achieved—and it's only the beginning!",
      rating: 5,
      achievement: "Lost 12kg in 3 months",
      weightLoss: "From: 73 kg | To: 61 kg | Time Frame: 3 months",
      image: "/lovable-uploads/0d2b4852-2f10-4faf-9e1b-919daa41f765.png"
    },
    {
      name: "G. Jayalaxmi",
      role: "Weight Loss Transformation",
      content: "Herbalife program, I lost 11 kg—and I've never felt stronger. Each step of the plan was tailored just for me, making healthy habits feel natural. Now, I'm lighter, healthier, and more confident than ever!",
      rating: 5,
      achievement: "Lost 11kg in 3 months",
      weightLoss: "From: 65 kg | To: 54 kg | Time Frame: 3 months",
      image: "/lovable-uploads/405ed27c-38f2-4564-82d7-2a63d1e85e14.png"
    },
    {
      name: "Revathi",
      role: "Complete Transformation",
      content: "Before Herbalife Nutrition, I struggled with my weight for years. I weighed 69 kgs and felt low on energy and confidence. With proper guidance and consistent use of Herbalife Nutrition products, my lifestyle completely changed. In just 6 months, I transformed myself and now weigh 54 kgs! Along with weight loss, I feel healthier, more energetic, and happier than ever. Herbalife didn't just help me lose weight – it helped me gain back my confidence and glow.",
      rating: 5,
      achievement: "Lost 15kg in 6 months",
      weightLoss: "From: 69 kg | To: 54 kg | Time Frame: 6 months | Age: 32",
      image: "/lovable-uploads/80f4854d-bb0d-43e8-aca5-d232623598bd.png"
    },
    {
      name: "G. Laxminarayana",
      role: "Age is Just a Number",
      content: "At 64 years of age, I never thought I could make such a big change in my life. I started my journey with Herbalife Nutrition at 75 kgs. With dedication and proper nutrition, I achieved amazing results – reducing my weight to 55 kgs in just 3 months! Beyond the numbers, I feel younger, lighter, and more active. Herbalife Nutrition proved that age is never a barrier when it comes to health and wellness. It gave me a new start to life.",
      rating: 5,
      achievement: "Lost 20kg in 3 months",
      weightLoss: "From: 75 kg | To: 55 kg | Time Frame: 3 months | Age: 64",
      image: "/lovable-uploads/a29dfeb7-b89c-403c-a30f-0bab796dd38a.png"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, index) => (
      <Star key={index} className="h-5 w-5 fill-secondary text-secondary" />
    ));
  };

  return (
    <section id="testimonials" className="py-20 section-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Client <span className="text-primary">Success Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real transformations from real people. Discover how personalized wellness guidance 
              has changed lives across different age groups and lifestyles.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="wellness-card p-6 h-full fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary/30" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Transformation Image */}
                {testimonial.image && (
                  <div className="mb-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <img
                          src={testimonial.image}
                          alt={`${testimonial.name} transformation`}
                          className="w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                        />
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl w-full p-4">
                        <div className="flex flex-col items-center">
                          <img
                            src={testimonial.image}
                            alt={`${testimonial.name} transformation`}
                            className="max-w-full max-h-[80vh] object-contain rounded-lg"
                          />
                          <p className="mt-4 text-center text-sm text-muted-foreground">
                            {testimonial.name} - {testimonial.achievement}
                          </p>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                )}

                {/* Content */}
                <blockquote className="text-muted-foreground leading-relaxed mb-6 flex-1">
                  "{testimonial.content}"
                </blockquote>

                {/* Weight Loss Details */}
                {testimonial.weightLoss && (
                  <div className="mb-4 p-3 bg-secondary/10 rounded-lg">
                    <p className="text-sm font-medium text-secondary">
                      {testimonial.weightLoss}
                    </p>
                  </div>
                )}

                {/* Achievement Badge */}
                <div className="mb-4">
                  <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                    {testimonial.achievement}
                  </span>
                </div>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center fade-in-up">
            <Card className="wellness-card p-8">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Ready to Write Your Success Story?
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Join hundreds of satisfied clients who have transformed their lives through 
                personalized wellness guidance.
              </p>
              <div className="text-center">
                <span className="text-3xl font-bold text-primary">100%</span>
                <p className="text-muted-foreground">Real Client Transformations</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;