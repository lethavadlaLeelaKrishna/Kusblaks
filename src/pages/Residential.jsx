import React from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, CheckCircle2, Home as HomeIcon, ShieldCheck, Clock, Leaf, Users, Quote, ChevronRight, Paintbrush, Heart, Sparkles, Key } from 'lucide-react';

const Residential = () => {
  const solutions = [
    'Luxury Villas & Independent Houses',
    'Modern Apartment Complexes',
    'Sustainable Row Houses',
    'Interior Design & Renovation',
    'Smart Home Integration',
    'Landscape & Outdoor Spaces'
  ];

  const features = [
    { title: 'Personalized Design', desc: 'Homes tailored to your unique lifestyle.', icon: <Sparkles className="w-6 h-6" /> },
    { title: 'Premium Quality', desc: 'Highest standards of materials and finish.', icon: <ShieldCheck className="w-6 h-6" /> },
    { title: 'Timely Handover', desc: 'Move into your dream home on schedule.', icon: <Key className="w-6 h-6" /> },
    { title: 'Eco-Friendly Living', desc: 'Sustainable and energy-efficient designs.', icon: <Leaf className="w-6 h-6" /> }
  ];

  const projects = [
    { title: 'Skyline Villas – Hyderabad', stats: '4,500 Sq Ft | Luxury Villa', image: 'https://images.pexels.com/photos/7601185/pexels-photo-7601185.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop' },
    { title: 'Emerald Apartments – Bengaluru', stats: '2,500 Sq Ft | 3BHK Premium', image: 'https://images.pexels.com/photos/4044785/pexels-photo-4044785.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop' },
    { title: 'Green Valley Residency – Pune', stats: '3,200 Sq Ft | Sustainable Living', image: 'https://images.pexels.com/photos/33404353/pexels-photo-33404353.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop' },
    { title: 'Heritage Row Houses – Chennai', stats: '2,800 Sq Ft | Classic Architecture', image: 'https://images.pexels.com/photos/4469158/pexels-photo-4469158.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop' }
  ];

  const testimonials = [
    { name: 'Anjali Sharma', role: 'Homeowner', text: 'Kushslaks turned our vision of a dream home into reality. Their attention to detail and design aesthetic is unmatched.', initials: 'AS' },
    { name: 'Vikram Mehta', role: 'Business Consultant', text: 'The quality of construction and the professionalism of the team made our home-building journey stress-free.', initials: 'VM' },
    { name: 'Sameer Khan', role: 'Tech Lead', text: 'Highly recommend Kushslaks for their innovative smart home solutions and sustainable design practices.', initials: 'SK' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-slate-50">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-6">
                <Link to="/" className="hover:text-blue-600">Home</Link>
                <ChevronRight className="w-3 h-3" />
                <Link to="/services" className="hover:text-blue-600">Services</Link>
                <ChevronRight className="w-3 h-3" />
                <span className="text-blue-600">Residential</span>
              </div>
              
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[1px] w-8 bg-blue-900/20"></span>
                <span className="text-[10px] font-bold text-blue-900 tracking-[0.2em] uppercase">Residential Construction</span>
                <span className="h-[1px] w-8 bg-blue-900/20"></span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                Building Your <br /> <span className="text-blue-600">Dream Home</span>
              </h1>
              
              <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-lg font-medium">
                Kushslaks delivers premium residential spaces designed for comfort, luxury and longevity. We create homes that reflect your personality and stand the test of time.
              </p>
              
              <div className="flex items-center gap-6">
                <Link to="/quote" className="px-8 py-4 bg-blue-600 text-[#c6a15b]! rounded-full font-bold shadow-xl shadow-blue-200 hover:scale-105 transition-all">
                  Get a Free Quote →
                </Link>
                <button className="flex items-center gap-3 font-bold text-slate-700 hover:text-blue-600 group">
                  <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Play className="w-4 h-4 fill-current" />
                  </div>
                  Watch Our Process
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl aspect-[4/3]">
                <img src="https://images.pexels.com/photos/38490355/pexels-photo-38490355.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop" alt="Residential Hero" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
              </div>
              
              <div className="absolute -right-8 top-10">
                <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-4 animate-bounce-slow">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    <HomeIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Premium Living</div>
                    <div className="text-xs font-bold text-slate-900">Designed for You</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
                <img src="https://images.pexels.com/photos/34549326/pexels-photo-34549326.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop" alt="Residential Solutions" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent"></div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                Our Residential Services
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">
                Crafting Spaces for <br /> <span className="text-blue-600">Inspired Living</span>
              </h2>
              <p className="text-slate-500 mb-10 text-lg font-medium leading-relaxed">
                We provide end-to-end residential construction services, ensuring every corner of your home is built with precision and care.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {solutions.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <div className="text-[10px] font-bold text-blue-600 tracking-[0.2em] uppercase mb-4">Why Residential With Us?</div>
          <h2 className="text-4xl font-bold text-slate-900 mb-16">
            The Kushslaks <span className="text-blue-600">Difference</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((f, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-lg group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 mb-6">
                  {f.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">{f.title}</h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-center md:text-left">
            <div>
              <div className="text-[10px] font-bold text-blue-600 tracking-[0.2em] uppercase mb-4">Our Featured Projects</div>
              <h2 className="text-4xl font-bold text-slate-900">
                Residential <span className="text-blue-600">Showcase</span>
              </h2>
            </div>
            <Link to="/portfolio" className="flex items-center gap-2 px-8 py-3.5 border-2 border-slate-200 rounded-full font-bold text-slate-700 hover:border-blue-600 hover:text-blue-600 transition-all whitespace-nowrap">
              View All Homes <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((p, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="h-64 rounded-[24px] overflow-hidden mb-6">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" decoding="async" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{p.title}</h4>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{p.stats}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-50/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-16">Loved by <span className="text-blue-600">Families</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 relative text-left">
                <div className="absolute -top-4 left-8 w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                  <Quote className="w-4 h-4" />
                </div>
                <p className="text-slate-600 italic leading-relaxed mb-8 font-medium">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{t.name}</div>
                    <div className="text-xs text-slate-500 font-medium">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 px-6">
        <div className="container mx-auto px-8 py-10 rounded-[32px] bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 flex flex-col md:flex-row items-center justify-between gap-8 text-white shadow-2xl shadow-blue-900/20 text-center md:text-left">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
              <HomeIcon className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to Build Your Dream Home?</h3>
              <p className="text-blue-100 font-medium">Let's start the conversation today and create a space you'll love forever.</p>
            </div>
          </div>
          <Link to="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:scale-105 transition-all shadow-xl whitespace-nowrap">
            Get Started →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Residential;
