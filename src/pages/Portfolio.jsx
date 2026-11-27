import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Factory, Construction, School, Package, Home as HomeIcon, ChevronRight, MapPin } from "lucide-react";

const Portfolio = () => {
  const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Infrastructure', 'Institutional', 'Modular'];

  const stats = [
    { label: 'Projects Delivered', value: '500+' },
    { label: 'Sq Ft Built', value: '12M+' },
    { label: 'Cities Served', value: '25+' },
    { label: 'On-Time Rate', value: '98%' }
  ];

  const projects = [
    { title: 'Skyline Corporate Tower', stats: 'Commercial | 120,000 Sq Ft', location: 'Hyderabad', category: 'Commercial', href: '/services/commercial', image: 'https://images.pexels.com/photos/31469363/pexels-photo-31469363.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop' },
    { title: 'Emerald Residences', stats: 'Residential | 60 Units', location: 'Bengaluru', category: 'Residential', href: '/services/residential', image: 'https://images.pexels.com/photos/7601185/pexels-photo-7601185.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop' },
    { title: 'Bharat Manufacturing Plant', stats: 'Industrial | 50,000 Sq Ft', location: 'Pune', category: 'Industrial', href: '/services/industrial', image: 'https://images.pexels.com/photos/34718930/pexels-photo-34718930.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop' },
    { title: 'Riverfront Flyover', stats: 'Infrastructure | 3.2 Km', location: 'Chennai', category: 'Infrastructure', href: '/services/infrastructure', image: 'https://images.pexels.com/photos/17924582/pexels-photo-17924582.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop' },
    { title: 'Crescent University Campus', stats: 'Institutional | 200,000 Sq Ft', location: 'Hyderabad', category: 'Institutional', href: '/services/institutional', image: 'https://images.pexels.com/photos/27276221/pexels-photo-27276221.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop' },
    { title: 'Modular Tech Park Office', stats: 'Modular | 12,000 Sq Ft', location: 'Bengaluru', category: 'Modular', href: '/services/modular', image: 'https://images.pexels.com/photos/28855838/pexels-photo-28855838.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop' },
    { title: 'Metro Retail Mall', stats: 'Commercial | 90,000 Sq Ft', location: 'Mumbai', category: 'Commercial', href: '/services/commercial', image: 'https://images.pexels.com/photos/27677152/pexels-photo-27677152.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop' },
    { title: 'GreenField Warehouse', stats: 'Industrial | 40,000 Sq Ft', location: 'Nagpur', category: 'Industrial', href: '/services/industrial', image: 'https://images.pexels.com/photos/9221417/pexels-photo-9221417.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop' },
    { title: 'Serene Villas', stats: 'Residential | 24 Villas', location: 'Goa', category: 'Residential', href: '/services/residential', image: 'https://images.pexels.com/photos/4469158/pexels-photo-4469158.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop' }
  ];

  const categoryIcon = (cat) => {
    if (cat === 'Residential') return <HomeIcon className="w-4 h-4" />;
    if (cat === 'Commercial') return <Building2 className="w-4 h-4" />;
    if (cat === 'Industrial') return <Factory className="w-4 h-4" />;
    if (cat === 'Infrastructure') return <Construction className="w-4 h-4" />;
    if (cat === 'Institutional') return <School className="w-4 h-4" />;
    return <Package className="w-4 h-4" />;
  };

  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter(function (p) { return p.category === active; });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-400 mb-6">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-blue-600">Projects / Portfolio</span>
          </div>

          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-blue-900/20"></span>
            <span className="text-[10px] font-bold text-blue-900 tracking-[0.2em] uppercase">Our Portfolio</span>
            <span className="h-[1px] w-8 bg-blue-900/20"></span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight max-w-3xl mx-auto">
            Projects That <span className="text-blue-600">Define Excellence</span>
          </h1>

          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
            From landmark towers to sustainable modular structures, explore a selection of the projects we've delivered across residential, commercial, industrial and infrastructure sectors.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"></div>
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="text-4xl font-bold mb-1 tracking-tight">{stat.value}</div>
                <div className="text-sm font-medium opacity-80 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {categories.map((cat, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(cat)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all ${
                  active === cat ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-100'
                }`}
              >
                {cat !== 'All' && categoryIcon(cat)}
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((p, i) => (
              <Link key={i} to={p.href} className="group cursor-pointer bg-white rounded-[32px] border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
                <div className="h-56 overflow-hidden relative">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" decoding="async" />
                  <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                    {p.stats.split('|')[0].trim()}
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{p.title}</h3>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    {p.location}
                  </div>
                  <p className="text-sm text-slate-500 font-medium mb-6 flex-grow">{p.stats}</p>
                  <span className="flex items-center gap-2 text-blue-600 font-bold group-hover:gap-4 transition-all duration-300">
                    View Details <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 px-6">
        <div className="container mx-auto px-8 py-10 rounded-[32px] bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 flex flex-col md:flex-row items-center justify-between gap-8 text-white shadow-2xl shadow-blue-900/20 text-center md:text-left">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
              <Building2 className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Your Project Could Be Next</h3>
              <p className="text-blue-100 font-medium">Let's turn your vision into a landmark. Start your project with Kushslaks today.</p>
            </div>
          </div>
          <Link to="/quote" className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:scale-105 transition-all shadow-xl whitespace-nowrap">
            Start a Project →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
