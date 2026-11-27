import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Home as HomeIcon, Building2, Factory, Construction, School, Package, ShieldCheck, Clock, Users, Leaf, Star, Quote } from 'lucide-react';

const Home = () => {
  const services = [
    { name: 'Residential', icon: <HomeIcon className="w-8 h-8" />, desc: 'Modern, comfortable and future-ready homes.', image: 'https://images.pexels.com/photos/7601185/pexels-photo-7601185.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop', href: '/services/residential' },
    { name: 'Commercial', icon: <Building2 className="w-8 h-8" />, desc: 'Functional spaces for your business growth.', image: 'https://images.pexels.com/photos/33800416/pexels-photo-33800416.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop', href: '/services/commercial' },
    { name: 'Industrial', icon: <Factory className="w-8 h-8" />, desc: 'Robust solutions for industrial excellence.', image: 'https://images.pexels.com/photos/34221997/pexels-photo-34221997.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop', href: '/services/industrial' },
    { name: 'Infrastructure & Civil Engineering', icon: <Construction className="w-8 h-8" />, desc: 'Building strong foundations for a better future.', image: 'https://images.pexels.com/photos/681335/pexels-photo-681335.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop', href: '/services/infrastructure' },
    { name: 'Institutional', icon: <School className="w-8 h-8" />, desc: 'Safe and inspiring spaces for education and healthcare.', image: 'https://images.pexels.com/photos/35564755/pexels-photo-35564755.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop', href: '/services/institutional' },
    { name: 'Modular & Prefabricated', icon: <Package className="w-8 h-8" />, desc: 'Faster, smarter and sustainable construction.', image: 'https://images.pexels.com/photos/15532135/pexels-photo-15532135.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop', href: '/services/modular' },
  ];

  const stats = [
    { label: 'Projects Completed', value: '500+', icon: <Building2 className="w-6 h-6" /> },
    { label: 'Happy Clients', value: '250+', icon: <Users className="w-6 h-6" /> },
    { label: 'Years of Experience', value: '15+', icon: <Clock className="w-6 h-6" /> },
    { label: 'Client Satisfaction', value: '98%', icon: <Star className="w-6 h-6" /> },
  ];

  const testimonials = [
    {
      text: "Kushslaks delivered our office space on time and beyond our expectations. Their professionalism and quality are truly commendable.",
      author: "Ravi Kumar",
      role: "Project Manager, Tech Solutions",
      initials: "R"
    },
    {
      text: "The team understood our requirements perfectly and provided innovative solutions for our industrial project. Highly recommended!",
      author: "Sneha Reddy",
      role: "Director, GreenTech Industries",
      initials: "S"
    },
    {
      text: "From planning to execution, everything was seamless. Kushslaks is a reliable partner for all construction needs.",
      author: "Arjun Mehta",
      role: "CEO, Skyline Developers",
      initials: "A"
    }
  ];

  const pillars = [
    { title: 'Quality Assurance', desc: 'High standards in every project', icon: <ShieldCheck className="w-6 h-6" /> },
    { title: 'Timely Delivery', desc: 'On-time, every time', icon: <Clock className="w-6 h-6" /> },
    { title: 'Expert Team', desc: 'Skilled & experienced professionals', icon: <Users className="w-6 h-6" /> },
    { title: 'Sustainable Approach', desc: 'For a greener tomorrow', icon: <Leaf className="w-6 h-6" /> },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      {/* ===== Hero ===== */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-[-15%] right-[-10%] w-[42rem] h-[42rem] rounded-full bg-[#c6a15b]/15 blur-[140px]"></div>
          <div className="absolute bottom-[-25%] left-[-12%] w-[36rem] h-[36rem] rounded-full bg-[#000000]/10 blur-[140px]"></div>
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)',
              backgroundSize: '56px 56px',
            }}
          ></div>
        </div>

        {/* drifting bubbles */}
        <span className="hero-bubble w-24 h-24 top-40 left-[6%] hidden md:block"></span>
        <span className="hero-bubble w-12 h-12 top-64 left-[16%] hidden lg:block" style={{ animationDelay: '1.6s' }}></span>
        <span className="hero-bubble w-16 h-16 bottom-24 left-[42%] hidden lg:block" style={{ animationDelay: '3.1s' }}></span>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Copy */}
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-3 mb-8">
                <span className="h-px w-12 bg-[#c6a15b]"></span>
                <span className="text-[11px] font-semibold tracking-[0.32em] uppercase text-[#c6a15b]">
                  Build Today • Shape Tomorrow
                </span>
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-[66px] leading-[1.04] tracking-tight text-slate-900 mb-7">
                Modern Construction &amp; Engineering for a{' '}
                <span className="italic text-[#c6a15b]">Better Tomorrow</span>
              </h1>

              <p className="text-lg text-slate-500 max-w-xl mb-10 leading-relaxed">
                We deliver innovative, sustainable and high-quality construction solutions for residential,
                commercial, industrial and infrastructure projects.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/services"
                  className="bubble-hover group inline-flex items-center gap-3 px-9 py-4 rounded-full bg-[#000000] text-[#c6a15b]! ring-1 ring-[#c6a15b]/40 font-semibold hover:bg-[#1c1c1c] hover:ring-[#c6a15b] shadow-xl shadow-[#000000]/25 transition-all duration-300"
                >
                  Explore Our Services
                  <ArrowRight className="w-5 h-5 text-[#c6a15b] group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 px-9 py-4 rounded-full border border-[#c6a15b]/50 text-slate-900 hover:bg-[#efe6d4]/70 font-semibold transition-all duration-300"
                >
                  Book a Consultation
                  <ArrowRight className="w-5 h-5 text-[#a9853f] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="flex items-center gap-4 mt-12">
                <div className="w-12 h-12 rounded-full bg-[#000000] border border-[#c6a15b]/50 flex items-center justify-center text-[#e8d9b5] font-display text-xl">
                  K
                </div>
                <div className="text-sm text-slate-500">
                  <span className="block font-semibold text-slate-900">Kushslaks</span>
                  Trusted since 2010
                </div>
              </div>
            </div>

            {/* Arched image */}
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-t-[200px] rounded-b-[40px] border border-[#c6a15b]/30"></div>
              <div className="relative rounded-t-[180px] rounded-b-[32px] overflow-hidden border border-[#c6a15b]/30 shadow-2xl shadow-[#000000]/25">
                <img
                  src="https://images.pexels.com/photos/31469363/pexels-photo-31469363.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop"
                  alt="Classic modern architecture"
                  className="w-full h-[520px] object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 via-transparent to-transparent"></div>
              </div>

              {/* floating badge */}
              <div className="absolute -left-6 bottom-12 bg-white border border-[#e4dac7] rounded-2xl shadow-xl shadow-[#000000]/15 p-4 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#efe6d4] flex items-center justify-center text-[#a9853f]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Certified Quality</div>
                  <div className="text-[11px] text-slate-500">ISO-grade construction</div>
                </div>
              </div>

              <span className="hero-bubble w-14 h-14 -top-4 right-8" style={{ animationDelay: '2.2s' }}></span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Services ===== */}
      <section className="py-24 bg-slate-50/50 border-y border-slate-100">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-[#c6a15b]"></span>
            <span className="text-[11px] font-semibold tracking-[0.32em] uppercase text-[#000000]">Our Services</span>
            <span className="h-px w-8 bg-[#c6a15b]"></span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-slate-900 mb-6">What We Build</h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-16">
            We provide comprehensive construction and engineering services tailored to meet your unique needs and vision.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                to={service.href}
                key={index}
                className="bubble-hover bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-[#c6a15b]/40 transition-all duration-500 text-left group overflow-hidden"
              >
                <div className="h-40 -mx-8 -mt-8 mb-6 overflow-hidden">
                  <img src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" decoding="async" />
                </div>
                <div className="w-16 h-16 rounded-2xl bg-[#efe6d4] text-[#a9853f] flex items-center justify-center mb-6 group-hover:bg-[#000000] group-hover:text-[#c6a15b] transition-colors duration-500">
                  {service.icon}
                </div>
                <h3 className="font-display text-xl text-slate-900 mb-3">{service.name}</h3>
                <p className="text-slate-500 leading-relaxed">{service.desc}</p>
                <span className="inline-flex items-center gap-2 mt-6 text-[#a9853f] font-semibold text-sm opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-500">
                  Discover more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== About ===== */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-[40px] overflow-hidden border border-[#c6a15b]/30 shadow-2xl shadow-[#000000]/20">
                <img
                  src="https://images.pexels.com/photos/3862628/pexels-photo-3862628.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop"
                  alt="Construction team at work"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#000000]/40 to-transparent"></div>
              </div>

              <div className="absolute -right-8 top-1/4 bg-white p-4 rounded-2xl shadow-xl border border-[#e4dac7] flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#efe6d4] flex items-center justify-center text-[#a9853f]">
                  <Package className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900">Innovative</div>
                  <div className="text-[10px] text-slate-500">Designs</div>
                </div>
              </div>
              <div className="absolute -right-12 bottom-1/3 bg-white p-4 rounded-2xl shadow-xl border border-[#e4dac7] flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#efe6d4] flex items-center justify-center text-[#a9853f]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900">Quality</div>
                  <div className="text-[10px] text-slate-500">Construction</div>
                </div>
              </div>
              <span className="hero-bubble w-20 h-20 -bottom-6 -left-4" style={{ animationDelay: '1.1s' }}></span>
            </div>

            <div>
              <div className="inline-flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-[#c6a15b]"></span>
                <span className="text-[11px] font-semibold tracking-[0.32em] uppercase text-[#c6a15b]">About Kushslaks</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-slate-900 mb-6 leading-tight">
                Building Spaces That <br />
                <span className="italic text-[#c6a15b]">Inspire &amp; Endure</span>
              </h2>
              <p className="text-slate-500 mb-10 text-lg leading-relaxed">
                At Kushslaks, we believe construction is more than just building structures — it's about creating
                spaces that improve lives, support communities and stand the test of time.
              </p>

              <div className="grid grid-cols-2 gap-8 mb-10">
                {pillars.map((pillar, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#efe6d4] flex items-center justify-center flex-shrink-0 text-[#a9853f]">
                      {pillar.icon}
                    </div>
                    <div>
                      <h4 className="font-display text-base text-slate-900 mb-1">{pillar.title}</h4>
                      <p className="text-xs text-slate-500">{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#c6a15b]/50 rounded-full font-semibold text-slate-900 hover:bg-[#efe6d4]/70 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="w-5 h-5 text-[#a9853f]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Stats ===== */}
      <section className="relative overflow-hidden border-y border-[#c6a15b]/25">
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000] to-[#000000]"></div>
        <div className="absolute -top-24 left-1/3 w-[36rem] h-[36rem] rounded-full bg-[#c6a15b]/10 blur-[130px]"></div>

        <div className="container mx-auto px-6 relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[11px] font-semibold tracking-[0.32em] uppercase mb-4 text-[#c6a15b]">
                Why Choose Kushslaks
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-white mb-6">Our Impact in Numbers</h2>
              <p className="text-[#c6a15b] text-lg font-light max-w-md">
                We take pride in our work and the trust our clients place in us. Here's a look at our journey so far.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-12 gap-y-12">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center lg:items-start">
                  <div className="w-12 h-12 rounded-full bg-[#c6a15b]/10 border border-[#c6a15b]/30 flex items-center justify-center mb-4 text-[#c6a15b]">
                    {stat.icon}
                  </div>
                  <div className="font-display text-4xl text-white mb-1 tracking-tight">{stat.value}</div>
                  <div className="text-xs font-medium text-[#c6a15b] uppercase tracking-[0.2em]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Testimonials ===== */}
      <section className="py-24 bg-slate-50/30">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-[#c6a15b]"></span>
            <span className="text-[11px] font-semibold tracking-[0.32em] uppercase text-[#c6a15b]">What Our Clients Say</span>
            <span className="h-px w-8 bg-[#c6a15b]"></span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-slate-900 mb-6">Trusted by Many</h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-16">
            Our clients' success stories inspire us to do better every day.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bubble-hover bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-[#c6a15b]/40 transition-all duration-500 relative text-left"
              >
                <div className="absolute -top-4 left-8 w-9 h-9 rounded-full bg-[#000000] border border-[#c6a15b]/50 flex items-center justify-center text-[#c6a15b]">
                  <Quote className="w-4 h-4" />
                </div>
                <p className="font-display italic text-lg text-slate-600 leading-relaxed mb-8">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#efe6d4] text-[#a9853f] flex items-center justify-center font-display text-lg">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{t.author}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-12">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === 1 ? 'bg-[#c6a15b] w-7' : 'bg-[#e4dac7] w-2.5'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bubble-hover relative overflow-hidden rounded-[40px] border border-[#c6a15b]/30 bg-gradient-to-br from-[#000000] via-[#000000] to-[#000000] px-8 py-16 md:px-16 text-center">
            <div className="absolute -bottom-24 -right-16 w-[28rem] h-[28rem] rounded-full bg-[#c6a15b]/12 blur-[120px]"></div>
            <span className="hero-bubble w-16 h-16 top-10 left-16 hidden md:block"></span>
            <span className="hero-bubble w-10 h-10 bottom-12 right-24 hidden md:block" style={{ animationDelay: '2s' }}></span>

            <div className="relative z-10">
              <div className="text-[11px] font-semibold tracking-[0.32em] uppercase text-[#c6a15b] mb-5">
                Let's Build Together
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-white mb-6 max-w-3xl mx-auto leading-tight">
                Ready to bring your <span className="italic text-[#c6a15b]">vision</span> to life?
              </h2>
              <p className="text-[#c6a15b] text-lg font-light max-w-xl mx-auto mb-10">
                Get a free quote or book a consultation with our engineering team today.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/quote"
                  className="group inline-flex items-center gap-3 px-9 py-4 rounded-full bg-[#c6a15b] text-[#000000] font-semibold hover:bg-[#e8d9b5] transition-all duration-300 shadow-xl shadow-black/30"
                >
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/consultation"
                  className="inline-flex items-center gap-3 px-9 py-4 rounded-full border border-[#c6a15b]/50 text-[#c6a15b] hover:bg-white/5 font-semibold transition-all duration-300"
                >
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
