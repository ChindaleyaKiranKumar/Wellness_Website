import { Heart, Phone, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const quickLinks = [
    { label: 'About', section: 'about' },
    { label: 'Skills', section: 'skills' },
    { label: 'Projects', section: 'projects' },
    { label: 'Services', section: 'services' },
    { label: 'Contact', section: 'contact' },
  ];

  const services = [
    'Personal Consultation',
    'Body Composition Analysis',
    'Meal Planning',
    'Weight Management',
    'Nutrition Education',
    'Lifestyle Coaching'
  ];

  return (
    <footer className="bg-wellness-forest text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-heading font-bold mb-4">
                G. Jayalaxmi
              </h3>
              <p className="text-white/80 leading-relaxed mb-6">
                Your dedicated wellness coach committed to guiding you towards 
                optimal health through natural, sustainable wellness practices.
              </p>
              <div className="flex items-center gap-2 text-secondary">
                <Heart className="h-5 w-5" />
                <span className="font-medium">Wellness • Nutrition • Life</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.section}>
                    <button
                      onClick={() => scrollToSection(link.section)}
                      className="text-white/80 hover:text-secondary transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index} className="text-white/80 text-sm">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <a 
                      href="tel:9985582674"
                      className="text-white/80 hover:text-secondary transition-colors"
                    >
                      9985582674
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <address className="text-white/80 not-italic text-sm leading-relaxed">
                      Plot No. 50, Annapurna Colony,<br />
                      Badangpet, Hyderabad
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <a 
                      href="mailto:jayalaxmi.wellness@gmail.com"
                      className="text-white/80 hover:text-secondary transition-colors text-sm"
                    >
                      jayalaxmi.wellness@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-white/60 text-sm">
                © {currentYear} G. Jayalaxmi - Wellness Coach. All rights reserved.
              </div>
              
              <div className="text-white/60 text-sm">
                <span>Wellness Nutrition Center • Badangpet, Hyderabad</span>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <p className="text-white/60 text-sm italic">
                "Wellness is not a destination, it's a way of life"
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;