import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Camera, Heart, Users, Award } from 'lucide-react';

const Photos = () => {
  const photoCategories = [
    {
      title: "MSS Organisation Family Day",
      description: "A memorable family-focused wellness gathering with recognitions, activities, and bonding moments for all ages.",
      icon: Heart,
      images: [
        {
          src: "/lovable-uploads/9eecb88c-0643-4743-ba9f-7cdc08e1337d.png",
          alt: "Family Day Group Photo - Community gathering with wellness focus",
          caption: "Community Wellness Gathering"
        },
        {
          src: "/lovable-uploads/29cd4ffc-e00c-4dd5-b366-5ccd5bbe6e93.png",
          alt: "Family Day Activities - Fun wellness activities for all ages",
          caption: "Fun Activities & Entertainment"
        },
        {
          src: "/lovable-uploads/5bf47216-a5c0-4475-9581-58a067d4d3db.png",
          alt: "Family Day Recognition - Weight loss achievements celebration",
          caption: "Weight Loss Recognition"
        }
      ]
    },
    {
      title: "Community Wellness Programs",
      description: "Documenting our journey of transforming lives through wellness initiatives.",
      icon: Users,
      images: [
        {
          src: "/lovable-uploads/07d80b88-9711-48fd-867e-7314352a5b6f.png",
          alt: "Community wellness recognition ceremony - individual achievement",
          caption: "Wellness Achievement Recognition"
        },
        {
          src: "/lovable-uploads/626f7006-7ae4-4c8d-8c76-7f783fdfffcd.png",
          alt: "Community wellness award presentation ceremony",
          caption: "Award Presentation Ceremony"
        },
        {
          src: "/lovable-uploads/89841fe2-9a49-42d8-b3ff-27dedc4d1fc3.png",
          alt: "Community wellness program group photo with participants",
          caption: "Wellness Program Participants"
        },
        {
          src: "/lovable-uploads/d8a66c59-616d-43aa-aa60-464e37835b90.png",
          alt: "Large community wellness gathering group photo",
          caption: "Community Wellness Gathering"
        },
        {
          src: "/lovable-uploads/8acd8ed1-9226-435b-9bcc-fad85899ff6f.png",
          alt: "Community wellness meeting participants enjoying refreshments",
          caption: "Wellness Meeting & Refreshments"
        }
      ]
    },
    {
      title: "Celebrations & Special Events",
      description: "Memorable moments from our special celebrations and cultural events.",
      icon: Award,
      images: [
        {
          src: "/lovable-uploads/f85ad506-2591-4276-9887-967b5bf1e6e8.png",
          alt: "Community celebration with traditional garlands and decorations",
          caption: "Traditional Celebration Ceremony"
        },
        {
          src: "/lovable-uploads/7891e278-01e6-4f46-b42b-21ae9752ef50.png",
          alt: "Gift presentation ceremony during celebration event",
          caption: "Gift Presentation Ceremony"
        },
        {
          src: "/lovable-uploads/91dce7ea-1843-443c-805f-a124925d875f.png",
          alt: "Community members in traditional attire during celebration",
          caption: "Cultural Celebration Gathering"
        },
        {
          src: "/lovable-uploads/6fb7ed3c-cd73-4f44-8a1a-f82388a7bf9f.png",
          alt: "Group photo during community celebration event",
          caption: "Community Celebration Group"
        },
        {
          src: "/lovable-uploads/5e3b75f9-3102-49f8-aa60-629516402a47.png",
          alt: "Team photo at airport during special event",
          caption: "Special Event Team Photo"
        },
        {
          src: "/lovable-uploads/8f8cfca3-d7c2-477f-85ea-4551cb2b081d.png",
          alt: "Community celebration event with colorful decorations",
          caption: "Festive Community Celebration"
        },
        {
          src: "/lovable-uploads/acce9725-0ee6-4a73-b1dd-e2c723a4da9f.png",
          alt: "Women in traditional attire celebrating wellness achievements",
          caption: "Traditional Wellness Celebration"
        },
        {
          src: "/lovable-uploads/d99fa2bb-c222-4be0-aa3d-6ecc720d1b56.png",
          alt: "Large gathering of wellness program participants in formal event",
          caption: "Wellness Program Grand Gathering"
        },
        {
          src: "/lovable-uploads/67efa5de-83d6-498a-a15d-877411570c42.png",
          alt: "Wellness leaders group photo at celebration event",
          caption: "Wellness Leadership Recognition"
        },
        {
          src: "/lovable-uploads/cbc4aee1-1403-49a5-8483-6da6a09b5f6e.png",
          alt: "Extended team photo at special wellness celebration",
          caption: "Special Wellness Event Team"
        }
      ]
    }
  ];

  return (
    <section id="photos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Camera className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Photo <span className="text-primary">Gallery</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Capturing moments of transformation, community wellness, and the journey towards healthier lives.
            </p>
          </div>

          {/* Photo Categories */}
          {photoCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16 last:mb-0 fade-in-up" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
              <Card className="wellness-card overflow-hidden">
                {/* Category Header */}
                <div className="p-6 border-b border-border">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-foreground">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground mt-1">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Photo Grid */}
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.images.map((image, imageIndex) => (
                      <Dialog key={imageIndex}>
                        <DialogTrigger asChild>
                          <div className="group relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                            <div className="aspect-square overflow-hidden">
                              <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                              />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute bottom-4 left-4 right-4">
                                <p className="text-white text-sm font-medium">
                                  {image.caption}
                                </p>
                              </div>
                            </div>
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-lg transition-colors duration-300"></div>
                          </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl w-full p-4">
                          <div className="flex flex-col items-center">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="max-w-full max-h-[80vh] object-contain rounded-lg"
                            />
                            <p className="mt-4 text-center text-sm text-muted-foreground">
                              {image.caption}
                            </p>
                          </div>
                        </DialogContent>
                      </Dialog>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          ))}

          {/* Gallery Statistics */}
          <div className="fade-in-up">
            <Card className="wellness-card p-8 text-center">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                Gallery Highlights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center">
                  <Award className="h-8 w-8 text-primary mb-2" />
                  <div className="text-2xl font-bold text-primary mb-1">4+</div>
                  <div className="text-muted-foreground">Photo Collections</div>
                </div>
                <div className="flex flex-col items-center">
                  <Users className="h-8 w-8 text-secondary mb-2" />
                  <div className="text-2xl font-bold text-secondary mb-1">200+</div>
                  <div className="text-muted-foreground">People Featured</div>
                </div>
                <div className="flex flex-col items-center">
                  <Heart className="h-8 w-8 text-primary mb-2" />
                  <div className="text-2xl font-bold text-primary mb-1">100+</div>
                  <div className="text-muted-foreground">Wellness Moments</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Photos;