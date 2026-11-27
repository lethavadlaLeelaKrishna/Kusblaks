import React from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, CheckCircle2, ShieldCheck, Cpu, Clock, Leaf, Factory, Building2, Quote, ChevronRight, Settings, Hammer, ClipboardCheck, Headphones } from "lucide-react";

const Industrial = () => {
  const solutions = [
    'Factory & Manufacturing Plants',
    'Warehouses & Distribution Centers',
    'Chemical & Petrochemical Facilities',
    'Power & Energy Plants',
    'Industrial Sheds & Workshops',
    'Maintenance & Expansion Projects'
  ];

  const features = [
    { title: 'Safety Compliance', desc: 'Strict adherence to industry safety standards.', icon: <ShieldCheck className="w-6 h-6" /> },
    { title: 'Advanced Technology', desc: 'Modern construction methods and equipment.', icon: <Cpu className="w-6 h-6" /> },
    { title: 'On-Time Delivery', desc: 'Efficient project management and execution.', icon: <Clock className="w-6 h-6" /> },
    { title: 'Sustainable Practices', desc: 'Energy-efficient and environment-friendly solutions.', icon: <Leaf className="w-6 h-6" /> }
  ];

  const projects = [
    { title: 'Manufacturing Plant – Hyderabad', stats: '50,000 Sq Ft | Industrial Facility', image: 'https://images.pexels.com/photos/34718926/pexels-photo-34718926.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop' },
    { title: 'Chemical Plant – Gujarat', stats: '75,000 Sq Ft | Petrochemical', image: 'https://images.pexels.com/photos/18920790/pexels-photo-18920790.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop' },
    { title: 'Warehouse – Maharashtra', stats: '40,000 Sq Ft | Distribution Center', image: 'https://images.pexels.com/photos/36696522/pexels-photo-36696522.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop' },
    { title: 'Power Plant – Telangana', stats: '1,20,000 Sq Ft | Energy Facility', image: 'https://images.pexels.com/photos/9221417/pexels-photo-9221417.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop' }
  ];

  const steps = [
    { title: 'Planning & Design', desc: 'Site analysis, design & engineering.', icon: <Building2 className="w-5 h-5" /> },
    { title: 'Execution', desc: 'Quality construction & installation.', icon: <Hammer className="w-5 h-5" /> },
    { title: 'Testing & Commissioning', desc: 'Safety checks & performance testing.', icon: <ClipboardCheck className="w-5 h-5" /> },
    { title: 'Handover & Support', desc: 'Long-term maintenance & service.', icon: <Headphones className="w-5 h-5" /> }
  ];

  const testimonials = [
    { name: 'Suresh Reddy', role: 'Plant Director, Bharat Industries', text: 'Kushslaks delivered our manufacturing plant on time and with exceptional quality. Their team\'s technical expertise and commitment to safety were outstanding.', initials: 'SR' },
    { name: 'Priya Nair', role: 'Operations Head, ChemTech Ltd.', text: 'The professionalism and attention to detail from Kushslaks helped us set up our chemical facility smoothly. We highly recommend them for industrial projects.', initials: 'PN' },
    { name: 'Ravi Kumar', role: 'CEO, Nova Power Solutions', text: 'Their ability to handle complex industrial requirements and deliver on schedule made them our preferred construction partner.', initials: 'RK' }
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
                <span className="text-blue-600">Industrial</span>
              </div>
              
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[1px] w-8 bg-blue-900/20"></span>
                <span className="text-[10px] font-bold text-blue-900 tracking-[0.2em] uppercase">Industrial Construction</span>
                <span className="h-[1px] w-8 bg-blue-900/20"></span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                Building Stronger <br /> Industries for a <br /> <span className="text-blue-600">Brighter Future</span>
              </h1>
              
              <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-lg font-medium">
                Kushslaks delivers robust, efficient and future-ready industrial construction solutions. From manufacturing plants to industrial facilities, we build spaces that power progress and drive productivity.
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
                <img src="https://images.pexels.com/photos/34221997/pexels-photo-34221997.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop" alt="Industrial Hero" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -right-8 top-10 space-y-4">
                {[
                  { icon: <Settings className="w-5 h-5" />, title: 'Built for', sub: 'Efficiency' },
                  { icon: <ShieldCheck className="w-5 h-5" />, title: 'Safety First', sub: 'Approach' },
                  { icon: <Leaf className="w-5 h-5" />, title: 'Sustainable', sub: 'Operations' }
                ].map((card, i) => (
                  <div key={i} className="bg-white p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-4 animate-bounce-slow" style={{ animationDelay: `${i * 300}ms` }}>
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                      {card.icon}
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{card.title}</div>
                      <div className="text-xs font-bold text-slate-900">{card.sub}</div>
                    </div>
                  </div>
                ))}
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
                <img src="https://images.pexels.com/photos/12740147/pexels-photo-12740147.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop" alt="Industrial Solutions" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent"></div>
              </div>
              <div className="absolute -right-8 top-1/4 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">High-Performance</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Industrial Facilities</div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                Our Industrial Services
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">
                Comprehensive Industrial <br /> <span className="text-blue-600">Construction Solutions</span>
              </h2>
              <p className="text-slate-500 mb-10 text-lg font-medium leading-relaxed">
                We provide end-to-end industrial construction services, from site development and structural work to specialized installations and facility upgrades.
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
              Why Choose Us for <span className="text-blue-600">Industrial Projects?</span>
            </h2>
            <p className="text-slate-500 max-w-2xl font-medium leading-relaxed">
              We combine technical expertise, advanced technology and a safety-first approach to deliver industrial projects that are on time, on budget and built to last.
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
              <div className="text-6xl font-black text-blue-900 italic transform -rotate-12 whitespace-nowrap">
                Powering Industries <br /> with Excellence
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
              <div className="text-[10px] font-bold text-blue-600 tracking-[0.2em] uppercase mb-4">Our Industrial Projects</div>
              <h2 className="text-4xl font-bold text-slate-900">
                Featured <span className="text-blue-600">Industrial Projects</span>
              </h2>
              <p className="text-slate-500 mt-6 font-medium max-w-xl">
                Explore some of our successful industrial construction projects, showcasing our expertise in delivering high-quality, durable and efficient facilities.
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

      {/* Process Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="text-[10px] font-bold text-blue-600 tracking-[0.2em] uppercase mb-4">Our Process</div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">How We Build <span className="text-blue-600">Industrial Spaces</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium">
              A streamlined process to ensure quality, efficiency and seamless delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 relative">
              {/* Connecting line */}
              <div className="absolute left-[26px] top-8 bottom-8 w-[2px] bg-blue-100 hidden md:block"></div>
              
              {steps.map((step, i) => (
                <div key={i} className="flex items-start gap-6 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center flex-shrink-0 text-blue-600">
                    {step.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                      <h4 className="font-bold text-slate-900">{step.title}</h4>
                    </div>
                    <p className="text-sm text-slate-500 font-medium">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative">
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl aspect-video">
                <img src="https://images.pexels.com/photos/7642124/pexels-photo-7642124.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop" alt="Industrial Process" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent"></div>
              </div>
              
              <div className="absolute -right-8 bottom-10 bg-white p-6 rounded-3xl shadow-2xl border border-slate-50 max-w-xs">
                <h4 className="text-xl font-bold text-slate-900 mb-2">Your Industrial Vision, Our Expertise</h4>
                <Link to="/quote" className="block text-center w-full py-3 bg-blue-600 text-[#c6a15b]! rounded-full font-bold text-sm shadow-xl shadow-blue-200 hover:scale-105 transition-all">
                  Get a Free Quote →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="text-[10px] font-bold text-blue-600 tracking-[0.2em] uppercase mb-4">What Our Clients Say</div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Trusted by <span className="text-blue-600">Industry Leaders</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-16 font-medium">
            We take pride in delivering industrial projects that our clients trust and value.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 relative text-left group">
                <div className="absolute -top-4 left-8 w-8 h-8 bg-white rounded-lg border border-slate-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
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
              <Factory className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Let's Build Your Industrial Future</h3>
              <p className="text-blue-100 font-medium">Partner with Kushslaks for reliable, efficient and innovative industrial construction solutions.</p>
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

export default Industrial;
