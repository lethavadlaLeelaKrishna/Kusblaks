import React from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, CheckCircle2, Users, Clock, DollarSign, Leaf, Building2, Quote, ChevronRight, Briefcase, ShoppingBag, Utensils, Construction } from 'lucide-react';

const Commercial = () => {
  const solutions = [
    'Office Buildings & Workspaces',
    'Shopping Malls & Commercial Complexes',
    'Retail Spaces & Showrooms',
    'Hospitality & Mixed-Use Developments',
    'Business Centers & Co-working Spaces',
    'Renovation & Expansion'
  ];

  const features = [
    { title: 'Experienced Team', desc: 'Skilled professionals with commercial expertise.', icon: <Users className="w-6 h-6" /> },
    { title: 'On-Time Delivery', desc: 'We meet deadlines without compromising quality.', icon: <Clock className="w-6 h-6" /> },
    { title: 'Cost-Effective Solutions', desc: 'Maximum value within your budget.', icon: <DollarSign className="w-6 h-6" /> },
    { title: 'Sustainable Construction', desc: 'Eco-friendly and energy-efficient designs.', icon: <Leaf className="w-6 h-6" /> }
  ];

  const projects = [
    { title: 'IT Office Complex – Hyderabad', stats: '12,000 Sq Ft | Office Spaces', image: 'https://images.pexels.com/photos/29443801/pexels-photo-29443801.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop' },
    { title: 'Retail Mall – Vijayawada', stats: '25,000 Sq Ft | Retail & Showrooms', image: 'https://images.pexels.com/photos/29929118/pexels-photo-29929118.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop' },
    { title: 'Business Park – Bengaluru', stats: '18,000 Sq Ft | Office Spaces', image: 'https://images.pexels.com/photos/37267437/pexels-photo-37267437.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop' },
    { title: 'Hotel & Hospitality – Goa', stats: '15,000 Sq Ft | Hospitality', image: 'https://images.pexels.com/photos/31836902/pexels-photo-31836902.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop' }
  ];

  const testimonials = [
    { name: 'Rohit Sharma', role: 'Founder, VisionTech Solutions', text: 'Kushslaks delivered our office space exactly as planned. The team was professional, responsive and maintained excellent communication throughout the project.', initials: 'RS' },
    { name: 'Priya Nair', role: 'Director, StyleHub Retail', text: 'Their attention to detail and project management is outstanding. We are extremely satisfied with our new retail space.', initials: 'PN' },
    { name: 'Arjun Patel', role: 'CEO, Horizon Business Group', text: 'A reliable partner for all our commercial construction needs. Quality, timelines and support were beyond our expectations.', initials: 'AP' }
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
                <span className="text-blue-600">Commercial</span>
              </div>
              
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[1px] w-8 bg-blue-900/20"></span>
                <span className="text-[10px] font-bold text-blue-900 tracking-[0.2em] uppercase">Commercial Construction</span>
                <span className="h-[1px] w-8 bg-blue-900/20"></span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                Building Spaces for <br /> <span className="text-blue-600">Business Growth</span>
              </h1>
              
              <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-lg font-medium">
                Kushslaks delivers modern, functional and future-ready commercial spaces that help businesses grow, operate efficiently and make a lasting impression.
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
                <img src="https://images.pexels.com/photos/33800416/pexels-photo-33800416.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop" alt="Commercial Hero" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -right-8 top-10">
                <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-4 animate-bounce-slow">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Modern Workspaces</div>
                    <div className="text-xs font-bold text-slate-900">for a Brighter Future</div>
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
                <img src="https://images.pexels.com/photos/2861656/pexels-photo-2861656.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop" alt="Commercial Solutions" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent"></div>
              </div>
              <div className="absolute -right-8 top-1/4 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Functional Spaces</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold">for Business Success</div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                Our Commercial Services
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">
                Tailored Commercial <br /> <span className="text-blue-600">Construction Solutions</span>
              </h2>
              <p className="text-slate-500 mb-10 text-lg font-medium leading-relaxed">
                From office buildings to retail spaces, we design and build commercial properties that combine functionality, aesthetics and long-term value.
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

      {/* Why Choose Us Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <div className="text-[10px] font-bold text-blue-600 tracking-[0.2em] uppercase mb-4">Why Choose Kushslaks</div>
            <h2 className="text-4xl font-bold text-slate-900 mb-8">
              Why <span className="text-blue-600">Commercial With Us?</span>
            </h2>
            <p className="text-slate-500 max-w-2xl font-medium leading-relaxed">
              We bring expertise, innovation and a client-first approach to every commercial project, ensuring quality, efficiency and value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {features.map((f, i) => (
              <div key={i} className="flex flex-col items-start">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-lg shadow-blue-900/5 mb-6">
                  {f.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">{f.title}</h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{f.desc}</p>
              </div>
            ))}
            
            {/* Floating text background */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
              <div className="text-5xl font-black text-blue-900 italic transform -rotate-12 whitespace-nowrap">
                Your Vision + <br /> Our Expertise = <br /> Exceptional Spaces
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="text-[10px] font-bold text-blue-600 tracking-[0.2em] uppercase mb-4">Our Featured Projects</div>
              <h2 className="text-4xl font-bold text-slate-900">
                Commercial <span className="text-blue-600">Projects</span>
              </h2>
              <p className="text-slate-500 mt-6 font-medium max-w-xl">
                We have successfully delivered a wide range of commercial projects, including office spaces, retail outlets, and business complexes.
              </p>
            </div>
            <Link to="/portfolio" className="flex items-center gap-2 px-8 py-3.5 border-2 border-slate-200 rounded-full font-bold text-slate-700 hover:border-blue-600 hover:text-blue-600 transition-all whitespace-nowrap">
              View All Projects <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((p, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="h-48 rounded-[24px] overflow-hidden mb-6">
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
          <div className="text-[10px] font-bold text-blue-600 tracking-[0.2em] uppercase mb-4">What Our Clients Say</div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Trusted by <span className="text-blue-600">Businesses</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-16 font-medium">
            Our commercial clients trust us for our quality, professionalism and commitment to results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 relative text-left group">
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
              <Briefcase className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Let's Build Your Commercial Space</h3>
              <p className="text-blue-100 font-medium">Have a commercial project in mind? Get in touch with our team for a free consultation and a customized quote.</p>
            </div>
          </div>
          <Link to="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:scale-105 transition-all shadow-xl whitespace-nowrap">
            Contact Us →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Commercial;
