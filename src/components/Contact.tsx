import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceID = 'service_j3v1lrp';
      const templateID = 'template_glykual';
      const publicKey = '9j8TrvEeJVXB0b0Do';

      console.log('EmailJS Config:', { serviceID, templateID, publicKey });

      // Template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_name: 'Jayalaxmi',
      };

      console.log('Template Params:', templateParams);

      // Send email using EmailJS
      const result = await emailjs.send(serviceID, templateID, templateParams, publicKey);
      console.log('EmailJS Success:', result);

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your interest. I'll get back to you within 24 hours.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error Sending Message",
        description: "Please check your EmailJS template configuration. The template ID might be incorrect.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "9985582674",
      link: "tel:9985582674",
      description: "Call for immediate consultation"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Plot No. 50, Annapurna Colony, Badangpet, Hyderabad",
      link: "https://maps.google.com/?q=Plot+No.+50,+Annapurna+Colony,+Badangpet,+Hyderabad",
      description: "Wellness Nutrition Center"
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Mon - Sat: 9:00 AM - 7:00 PM",
      description: "Sunday by appointment only"
    },
    {
      icon: Mail,
      title: "Email",
      content: "jayalaxmi.wellness@gmail.com",
      link: "mailto:jayalaxmi.wellness@gmail.com",
      description: "For detailed inquiries"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start your wellness journey? Reach out today for a personalized consultation 
              and take the first step towards a healthier, happier you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="fade-in-left">
              <Card className="wellness-card p-8">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-foreground mb-2 block">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full min-h-[120px]"
                      placeholder="Tell me about your wellness goals and how I can help you..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-hero w-full text-lg py-4 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="fade-in-right">
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index}
                    className="wellness-card p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-foreground mb-1">
                          {info.title}
                        </h4>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-primary hover:text-primary-dark transition-colors font-medium"
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{info.content}</p>
                        )}
                        <p className="text-sm text-muted-foreground mt-1">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Quick Benefits */}
              <Card className="wellness-card p-6 mt-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Why Choose Personal Consultation?
                </h4>
                <div className="space-y-3">
                  {[
                    "Personalized nutrition plans",
                    "One-on-one attention",
                    "Flexible scheduling",
                    "Ongoing support & guidance"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* Location Map Placeholder */}
          <div className="mt-16 fade-in-up">
            <Card className="wellness-card p-8 text-center">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Visit Our Wellness Center
              </h3>
              <p className="text-muted-foreground mb-6">
                Located in the heart of Badangpet, our wellness center provides a peaceful 
                environment for your health consultations and wellness journey.
              </p>
              <div className="bg-wellness-cream rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-lg font-semibold text-foreground">
                    Wellness Nutrition Center
                  </p>
                  <p className="text-muted-foreground">
                    Plot No. 50, Annapurna Colony, Badangpet, Hyderabad
                  </p>
                  <Button 
                    className="btn-outline mt-4"
                    onClick={() => window.open('https://maps.google.com/?q=Plot+No.+50,+Annapurna+Colony,+Badangpet,+Hyderabad', '_blank')}
                  >
                    View on Google Maps
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;