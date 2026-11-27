import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <i className="fab fa-whatsapp text-lg" aria-hidden="true"></i>, label: 'WhatsApp', href: 'https://wa.me/919010529521' },
    { icon: <i className="fab fa-instagram text-lg" aria-hidden="true"></i>, label: 'Instagram', href: '#' },
    { icon: <i className="fab fa-facebook-f text-lg" aria-hidden="true"></i>, label: 'Facebook', href: '#' },
    { icon: <i className="fab fa-youtube text-lg" aria-hidden="true"></i>, label: 'YouTube', href: '#' },
    { icon: <i className="fas fa-envelope text-lg" aria-hidden="true"></i>, label: 'Email', href: 'mailto:kubslaks@gmail.com' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services', hasArrow: true },
    { name: 'Client Login', href: '/client-login' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const services = [
    { name: 'Residential', href: '/services/residential' },
    { name: 'Commercial', href: '/services/commercial' },
    { name: 'Industrial', href: '/services/industrial' },
    { name: 'Infrastructure & Civil Engineering', href: '/services/infrastructure' },
    { name: 'Institutional', href: '/services/institutional' },
    { name: 'Modular & Prefabricated', href: '/services/modular' },
  ];

  const additionalLinks = [
    { name: 'Reviews', href: '/reviews' },
    { name: 'Projects / Portfolio', href: '/portfolio' },
    { name: 'Get a Free Quote', href: '/quote' },
    { name: 'Book a Consultation', href: '/consultation' },
    { name: 'Call Now', href: 'tel:+919010529521' },
  ];

  return (
    <footer className="site-footer relative overflow-hidden pt-24 pb-12 border-t border-[#c6a15b]/40">
      {/* Classic ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-24 w-[38rem] h-[38rem] rounded-full bg-[#c6a15b]/10 blur-[120px]"></div>
        <div className="absolute -bottom-40 right-0 w-[30rem] h-[30rem] rounded-full bg-[#c6a15b]/5 blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-16 mb-20">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-4 mb-8 group">
              <div className="w-14 h-14 rounded-full bg-[#000000] border border-[#c6a15b]/50 flex items-center justify-center text-[#e8d9b5] font-bold text-3xl font-display shadow-xl shadow-black/40 group-hover:scale-105 group-hover:border-[#c6a15b] transition-all duration-500">
                K
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-semibold text-[#000000] tracking-tight leading-none font-display">Kubslaks</span>
                <span className="text-[10px] font-semibold tracking-[0.28em] uppercase mt-2 text-[#000000]">Build Today • Shape Tomorrow</span>
              </div>
            </Link>
            <p className="leading-relaxed mb-10 max-w-sm text-lg font-light text-[#000000]">
              Your trusted partner in construction, engineering and infrastructure solutions. We build spaces that inspire, endure and grow with you.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  title={social.label}
                  aria-label={social.label}
                  className="w-11 h-11 rounded-full bg-[#fffdf8] border border-[#c6a15b]/40 flex items-center justify-center text-[#000000] hover:bg-[#c6a15b] hover:text-[#000000] hover:border-[#c6a15b] hover:-translate-y-1 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[#000000] font-semibold text-xl mb-10 tracking-wide font-display">Quick Links</h4>
            <ul className="space-y-5">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="hover:text-[#c6a15b] transition-all flex items-center justify-between group text-[15px] font-medium text-[#000000]">
                    {link.name}
                    {link.hasArrow && <ChevronRight className="w-4 h-4 text-[#a9853f] group-hover:text-[#c6a15b] group-hover:translate-x-0.5 transition-all" />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="lg:col-span-2">
            <h4 className="text-[#000000] font-semibold text-xl mb-10 tracking-wide font-display">Our Services</h4>
            <ul className="space-y-5">
              {services.map((service, index) => (
                <li key={index}>
                  <Link to={service.href} className="hover:text-[#c6a15b] transition-colors text-[15px] font-medium block leading-tight text-[#000000]">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[#000000] font-semibold text-xl mb-10 tracking-wide font-display">Additional Links</h4>
            <ul className="space-y-5">
              {additionalLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="hover:text-[#c6a15b] transition-colors text-[15px] font-medium block text-[#000000]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-2">
            <h4 className="text-[#000000] font-semibold text-xl mb-10 tracking-wide font-display">Contact Us</h4>
            <ul className="space-y-8">
              <li className="flex gap-4 group">
                <div className="w-10 h-10 rounded-full bg-[#fffdf8] border border-[#c6a15b]/40 flex items-center justify-center flex-shrink-0 group-hover:bg-[#c6a15b] transition-colors">
                  <MapPin className="w-5 h-5 text-[#000000] group-hover:text-[#000000] transition-colors" />
                </div>
                <span className="text-[14px] font-medium leading-relaxed text-[#000000]">
                  chinnna kondrupadu, Guntur, Andhra Pradesh 522019, India
                </span>
              </li>
              <li className="flex gap-4 group">
                <div className="w-10 h-10 rounded-full bg-[#fffdf8] border border-[#c6a15b]/40 flex items-center justify-center flex-shrink-0 group-hover:bg-[#c6a15b] transition-colors">
                  <Phone className="w-5 h-5 text-[#000000] group-hover:text-[#000000] transition-colors" />
                </div>
                <span className="text-[14px] font-medium text-[#000000]">+91 9010529521</span>
              </li>
              <li className="flex gap-4 group">
                <div className="w-10 h-10 rounded-full bg-[#fffdf8] border border-[#c6a15b]/40 flex items-center justify-center flex-shrink-0 group-hover:bg-[#c6a15b] transition-colors">
                  <Mail className="w-5 h-5 text-[#000000] group-hover:text-[#000000] transition-colors" />
                </div>
                <span className="text-[14px] font-medium text-[#000000]">kubslaks@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#c6a15b]/30 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-medium text-[#000000]">
            © {currentYear} Kubslaks. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm font-semibold text-[#000000]">
            <Link to="/privacy" className="hover:text-[#c6a15b] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#c6a15b] transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
