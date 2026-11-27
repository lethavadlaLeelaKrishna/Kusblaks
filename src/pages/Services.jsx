import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Home as HomeIcon, Building2, Factory, Construction, School, Package, ShieldCheck, Clock, Leaf, Users, ChevronRight } from 'lucide-react';

const Services = () => {
  const serviceCards = [
    {
      name: 'Residential',
      icon: <HomeIcon className="w-6 h-6 text-blue-600" />,
      desc: 'Modern, comfortable and future-ready homes designed for your lifestyle.',
      features: ['Custom Home Construction', 'Renovation & Remodeling', 'Interior & Exterior Works'],
      image: 'https://images.pexels.com/photos/7601185/pexels-photo-7601185.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop',
      href: '/services/residential'
    },
    {
      name: 'Commercial',
      icon: <Building2 className="w-6 h-6 text-purple-600" />,
      desc: 'Functional spaces for your business growth and success.',
      features: ['Office Buildings', 'Retail Spaces', 'Showrooms & Malls'],
      image: 'https://images.pexels.com/photos/33800416/pexels-photo-33800416.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop',
      href: '/services/commercial'
    },
    {
      name: 'Industrial',
      icon: <Factory className="w-6 h-6 text-indigo-600" />,
      desc: 'Robust solutions for industrial excellence and long-term performance.',
      features: ['Factories & Warehouses', 'Industrial Sheds', 'Plant Buildings'],
      image: 'https://images.pexels.com/photos/34221997/pexels-photo-34221997.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop',
      href: '/services/industrial'
    },
    {
      name: 'Infrastructure & Civil Engineering',
      icon: <Construction className="w-6 h-6 text-orange-600" />,
      desc: 'Building strong foundations for a better tomorrow.',
      features: ['Roads & Highways', 'Bridges & Flyovers', 'Water & Utility Systems'],
      image: 'https://images.pexels.com/photos/681335/pexels-photo-681335.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop',
      href: '/services/infrastructure'
    },
    {
      name: 'Institutional',
      icon: <School className="w-6 h-6 text-red-600" />,
      desc: 'Safe and inspiring spaces for education and healthcare.',
      features: ['Schools & Colleges', 'Hospitals & Healthcare', 'Government Buildings'],
      image: 'https://images.pexels.com/photos/35564755/pexels-photo-35564755.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop',
      href: '/services/institutional'
    },
    {
      name: 'Modular & Prefabricated',
      icon: <Package className="w-6 h-6 text-purple-600" />,
      desc: 'Faster, smarter and sustainable construction.',
      features: ['Modular Buildings', 'Portable Cabins', 'Prefabricated Structures'],
      image: 'https://images.pexels.com/photos/15532135/pexels-photo-15532135.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="h-[1px] w-8 bg-blue-900/20"></span>
                <span className="text-[10px] font-bold text-blue-900 tracking-[0.2em] uppercase">Our Services</span>
                <span className="h-[1px] w-8 bg-blue-900/20"></span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                Building Solutions <br /> for <span className="text-blue-600">Every Need</span>
              </h1>
              <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-lg font-medium">
                At Kushslaks, we offer a wide range of construction and engineering services tailored to meet your unique requirements. From residential homes to large-scale infrastructure, we build with quality, safety and innovation at the core.
              </p>
            </div>
            <div className="relative">
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
                <img src="https://images.pexels.com/photos/5505119/pexels-photo-5505119.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop" alt="Services Hero" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
              </div>
              {/* Floating cards */}
              <div className="absolute -left-8 top-10 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-4 animate-bounce-slow">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                  <Package className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Quality</div>
                  <div className="text-[10px] text-slate-500">Construction</div>
                </div>
              </div>
              <div className="absolute -left-12 bottom-1/4 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-4 animate-bounce-slow animation-delay-500">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">On-Time</div>
                  <div className="text-[10px] text-slate-500">Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-[1px] w-8 bg-blue-900/20"></span>
              <span className="text-[10px] font-bold text-blue-900 tracking-[0.2em] uppercase">Our Services</span>
              <span className="h-[1px] w-8 bg-blue-900/20"></span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Explore <span className="text-[#000000]">Our Services</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium">
              We specialize in various construction and engineering services, delivering excellence in every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((service, index) => (
              <div key={index} className="bg-white rounded-[32px] border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col group">
                <div className="h-48 overflow-hidden relative">
                  <img src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" decoding="async" />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center shadow-lg">
                    {service.icon}
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.name}</h3>
                  <p className="text-slate-500 mb-6 font-medium text-sm leading-relaxed">{service.desc}</p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                        <ChevronRight className="w-4 h-4 text-blue-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={service.href || "/services"}
                    className="flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all duration-300"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[10px] font-bold text-blue-600 tracking-[0.2em] uppercase mb-4">Why Choose Kushslaks</div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">
                Your Vision, Our <span className="text-blue-600">Expertise</span>
              </h2>
              <p className="text-slate-500 mb-12 text-lg font-medium leading-relaxed">
                We combine innovation, experience and a customer-first approach to deliver projects that last. From planning to execution, we ensure quality, safety and timely delivery — every time.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-200">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-slate-700">Quality Assurance</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-200">
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-slate-700">Experienced Team</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-200">
                    <Clock className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-slate-700">Timely Delivery</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-200">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-slate-700">Sustainable Solutions</span>
                </div>
              </div>

              <Link to="/quote" className="inline-block px-10 py-4 bg-blue-600 text-[#c6a15b]! rounded-full font-bold shadow-xl shadow-blue-200 hover:scale-105 transition-all">
                Get a Free Quote →
              </Link>
            </div>
            <div className="relative">
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
                <img src="https://images.pexels.com/photos/8482551/pexels-photo-8482551.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop" alt="Expertise" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent"></div>
              </div>
              {/* Better Spaces floating text */}
              <div className="absolute -right-8 bottom-20 animate-float">
                <div className="text-3xl font-bold text-slate-900 italic transform rotate-12 bg-white/80 backdrop-blur px-6 py-2 rounded-full shadow-lg">
                  Better Spaces <br /> <span className="text-blue-600">Brighter Future</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 px-6">
        <div className="container mx-auto px-8 py-10 rounded-[32px] bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 flex flex-col md:flex-row items-center justify-between gap-8 text-white shadow-2xl shadow-blue-900/20">
          <div className="flex items-center gap-6 text-center md:text-left">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
              <HomeIcon className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Let's Build Something Great Together</h3>
              <p className="text-blue-100 font-medium">Have a project in mind? Our team is here to help you turn your vision into reality.</p>
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

export default Services;
