import React from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, CheckCircle2, ShieldCheck, Clock, Leaf, Package, Building2, Quote, ChevronRight, Ruler, Hammer, Headphones, Zap } from "lucide-react";

const Modular = () => {
  const solutions = [
    'Modular Buildings & Offices',
    'Portable & Site Cabins',
    'Prefabricated Warehouses',
    'Prefab Homes & Villas',
    'Container-Based Structures',
    'Turnkey Modular Interiors'
  ];

  const features = [
    { title: 'Faster Delivery', desc: 'Up to 60% faster than conventional construction.', icon: <Zap className="w-6 h-6" /> },
    { title: 'Cost Efficient', desc: 'Reduced material waste and lower labour cost.', icon: <ShieldCheck className="w-6 h-6" /> },
    { title: 'Precision Built', desc: 'Factory-controlled quality and accuracy.', icon: <Ruler className="w-6 h-6" /> },
    { title: 'Sustainable', desc: 'Reusable, recyclable and eco-friendly systems.', icon: <Leaf className="w-6 h-6" /> }
  ];

  const projects = [
    { title: 'Prefab Office – Hyderabad', stats: '12,000 Sq Ft | Modular Office', image: 'https://images.pexels.com/photos/31469363/pexels-photo-31469363.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop' },
    { title: 'Site Cabins – Bengaluru', stats: '80 Units | Portable Cabins', image: 'https://images.pexels.com/photos/32716845/pexels-photo-32716845.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop' },
    { title: 'Prefab Warehouse – Pune', stats: '35,000 Sq Ft | Prefab Structure', image: 'https://images.pexels.com/photos/36696522/pexels-photo-36696522.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop' },
    { title: 'Modular Villa – Goa', stats: '3,500 Sq Ft | Prefab Home', image: 'https://images.pexels.com/photos/35707770/pexels-photo-35707770.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop' }
  ];

  const steps = [
    { title: 'Design & Engineering', desc: 'Custom modular design and planning.', icon: <Building2 className="w-5 h-5" /> },
    { title: 'Factory Fabrication', desc: 'Precision manufacturing off-site.', icon: <Hammer className="w-5 h-5" /> },
    { title: 'Site Assembly', desc: 'Rapid on-site installation & fitting.', icon: <Package className="w-5 h-5" /> },
    { title: 'Handover & Support', desc: 'Completion, testing & maintenance.', icon: <Headphones className="w-5 h-5" /> }
  ];

  const testimonials = [
    { name: 'Anil Verma', role: 'Founder, SpeedSpace Solutions', text: 'Kushslaks delivered our modular office in record time without compromising on quality. Their prefab expertise is second to none.', initials: 'AV' },
    { name: 'Meera Joshi', role: 'Project Head, UrbanNest', text: 'The prefabricated structure was precise, durable and cost-effective. A flawless execution from design to handover.', initials: 'MJ' },
    { name: 'Rohit Sharma', role: 'Director, BuildFast Infra', text: 'Rapid deployment and excellent finish. Kushslaks is our go-to partner for modular and prefabricated projects.', initials: 'RS' }
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
                <span className="text-blue-600">Modular &amp; Prefabricated</span>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <span className="h-[1px] w-8 bg-blue-900/20"></span>
                <span className="text-[10px] font-bold text-blue-900 tracking-[0.2em] uppercase">Modular &amp; Prefabricated</span>
                <span className="h-[1px] w-8 bg-blue-900/20"></span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                Smarter, Faster &amp; <br /> Sustainable <br /> <span className="text-blue-600">Modular Construction</span>
              </h1>

              <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-lg font-medium">
                Kushslaks builds high-quality modular and prefabricated structures that cut timelines and costs. From modular offices to prefab homes, we deliver precision-engineered spaces ready for the future.
              </p>

              <div className="flex items-center gap-6">
                <Link to="/quote" className="px-8 py-4 bg-blue-600 text-[#c6a15b]! rounded-full font-bold shadow-xl shadow-blue-200 hover:scale-105 transition-all">
                  Get a Free Quote →
                </Link>
                <Link to="/consultation" className="flex items-center gap-3 font-bold text-slate-700 hover:text-blue-600 group">
                  <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Play className="w-4 h-4 fill-current" />
                  </div>
                  Book a Consultation
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl aspect-[4/3]">
                <img src="https://images.pexels.com/photos/15532135/pexels-photo-15532135.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop" alt="Modular Hero" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -right-8 top-10 space-y-4">
                {[
                  { icon: <Clock className="w-5 h-5" />, title: '60% Faster', sub: 'Delivery' },
                  { icon: <Package className="w-5 h-5" />, title: 'Factory', sub: 'Precision' },
                  { icon: <Leaf className="w-5 h-5" />, title: 'Green', sub: 'Building' }
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
            <div className="relative">
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
                <img src="https://images.pexels.com/photos/40928825/pexels-photo-40928825.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop" alt="Modular Solutions" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent"></div>
              </div>
              <div className="absolute -right-8 top-1/4 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                  <Package className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Plug &amp; Play</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Structures</div>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                Our Modular Services
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">
                Prefabricated Solutions <br /> <span className="text-blue-600">Built to Scale</span>
              </h2>
              <p className="text-slate-500 mb-10 text-lg font-medium leading-relaxed">
                We deliver end-to-end modular construction — from concept and factory fabrication to rapid on-site assembly and finishing, with complete quality control at every stage.
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
              Why Choose Us for <span className="text-blue-600">Modular Projects?</span>
            </h2>
            <p className="text-slate-500 max-w-2xl font-medium leading-relaxed">
              We combine modern manufacturing, smart engineering and sustainable materials to deliver modular structures that are faster, greener and built to last.
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

            <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
              <div className="text-6xl font-black text-blue-900 italic transform -rotate-12 whitespace-nowrap">
                Building Smarter <br /> Building Faster
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
              <div className="text-[10px] font-bold text-blue-600 tracking-[0.2em] uppercase mb-4">Our Modular Projects</div>
              <h2 className="text-4xl font-bold text-slate-900">
                Featured <span className="text-blue-600">Modular Projects</span>
              </h2>
              <p className="text-slate-500 mt-6 font-medium max-w-xl">
                Explore some of our modular and prefabricated projects that showcase speed, precision and sustainable construction.
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
            <h2 className="text-4xl font-bold text-slate-900 mb-6">How We Build <span className="text-blue-600">Modular Spaces</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium">
              A streamlined, factory-driven process that ensures speed, quality and seamless delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 relative">
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
                <img src="https://images.pexels.com/photos/8962803/pexels-photo-8962803.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop" alt="Modular Process" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent"></div>
              </div>

              <div className="absolute -right-8 bottom-10 bg-white p-6 rounded-3xl shadow-2xl border border-slate-50 max-w-xs">
                <h4 className="text-xl font-bold text-slate-900 mb-2">Your Modular Vision, Our Expertise</h4>
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
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Trusted by <span className="text-blue-600">Builders &amp; Innovators</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-16 font-medium">
            We take pride in delivering modular projects that our clients trust and value.
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
              <Package className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to Build Smarter?</h3>
              <p className="text-blue-100 font-medium">Partner with Kushslaks for fast, sustainable and precision-built modular construction.</p>
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

export default Modular;
